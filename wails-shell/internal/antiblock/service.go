// Package antiblock refreshes anti-block URLs and keeps the app's fallback base list current.
//
// Ownership summary:
// 1) fetch and persist refreshed anti-block base URLs
// 2) normalize proxy/base inputs for the anti-block refresh flow
// 3) keep fallback-base discovery separate from crawl execution logic
//
// File map for maintainers:
// 1) anti-block option/result contracts and defaults
// 2) remote fetch/parse helpers
// 3) persisted URL load/save and normalization helpers
package antiblock

import (
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	neturl "net/url"
	"os"
	"path/filepath"
	"strings"
	"time"

	"golang.org/x/net/html"

	"jav-auto-wails-shell/internal/proxy"
)

const (
	defaultBaseURL       = "https://www.javbus.com/"
	defaultUserAgent     = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
	defaultAntiBlockFile = ".jav-scrapy-antiblock-urls.json"
	defaultTimeout       = 15 * time.Second
)

type UpdateOptions struct {
	Base  string
	Proxy string
}

type Result struct {
	AntiBlockURLs []string `json:"antiBlockUrls"`
	FilePath      string   `json:"filePath"`
}

type fetchHTMLFunc func(targetURL string, proxyValue string) (string, error)
type userHomeDirFunc func() (string, error)

type Service struct {
	fetchHTML   fetchHTMLFunc
	userHomeDir userHomeDirFunc
}

func NewService() *Service {
	return &Service{
		fetchHTML:   fetchHTML,
		userHomeDir: os.UserHomeDir,
	}
}

func cleanString(value string) string {
	return strings.TrimSpace(value)
}

func normalizeBaseURL(value string) string {
	trimmed := cleanString(value)
	if trimmed == "" {
		return defaultBaseURL
	}

	parsed, err := neturl.Parse(trimmed)
	if err != nil || parsed.Host == "" {
		return defaultBaseURL
	}
	if parsed.Scheme == "" {
		parsed.Scheme = "https"
	}

	return strings.TrimRight(parsed.String(), "/")
}

func newHTTPClient(proxyValue string) (*http.Client, error) {
	transport := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}

	if normalizedProxy := proxy.NormalizeProxyValue(proxyValue); normalizedProxy != "" {
		parsedProxy, err := neturl.Parse(normalizedProxy)
		if err != nil {
			return nil, fmt.Errorf("代理地址格式无效，请检查协议、地址和端口。")
		}
		transport.Proxy = http.ProxyURL(parsedProxy)
	}

	return &http.Client{
		Timeout:   defaultTimeout,
		Transport: transport,
		CheckRedirect: func(req *http.Request, via []*http.Request) error {
			if len(via) >= 10 {
				return http.ErrUseLastResponse
			}
			return nil
		},
	}, nil
}

func fetchHTML(targetURL string, proxyValue string) (string, error) {
	client, err := newHTTPClient(proxyValue)
	if err != nil {
		return "", err
	}

	request, err := http.NewRequest(http.MethodGet, cleanString(targetURL), nil)
	if err != nil {
		return "", err
	}
	request.Header.Set("User-Agent", defaultUserAgent)
	request.Header.Set("Accept-Language", "zh-CN,zh;q=0.9,ja;q=0.8,en;q=0.7")
	request.Header.Set("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")

	response, err := client.Do(request)
	if err != nil {
		return "", err
	}
	defer response.Body.Close()

	if response.StatusCode < 200 || response.StatusCode >= 400 {
		return "", fmt.Errorf("HTTP %d", response.StatusCode)
	}

	body, err := io.ReadAll(response.Body)
	if err != nil {
		return "", err
	}

	return string(body), nil
}

func getAttr(node *html.Node, name string) string {
	for _, attr := range node.Attr {
		if strings.EqualFold(attr.Key, name) {
			return strings.TrimSpace(attr.Val)
		}
	}
	return ""
}

func hasAllClasses(node *html.Node, classNames ...string) bool {
	classAttr := getAttr(node, "class")
	if classAttr == "" {
		return false
	}

	parts := map[string]struct{}{}
	for _, item := range strings.Fields(classAttr) {
		parts[item] = struct{}{}
	}

	for _, className := range classNames {
		if _, ok := parts[className]; !ok {
			return false
		}
	}
	return true
}

func nodeText(node *html.Node) string {
	if node == nil {
		return ""
	}

	var builder strings.Builder
	var walk func(*html.Node)
	walk = func(current *html.Node) {
		if current == nil {
			return
		}
		if current.Type == html.TextNode {
			builder.WriteString(current.Data)
		}
		for child := current.FirstChild; child != nil; child = child.NextSibling {
			walk(child)
		}
	}

	walk(node)
	return strings.TrimSpace(builder.String())
}

func firstDescendant(node *html.Node, predicate func(*html.Node) bool) *html.Node {
	if node == nil {
		return nil
	}

	var walk func(*html.Node) *html.Node
	walk = func(current *html.Node) *html.Node {
		if current == nil {
			return nil
		}
		if predicate(current) {
			return current
		}
		for child := current.FirstChild; child != nil; child = child.NextSibling {
			if matched := walk(child); matched != nil {
				return matched
			}
		}
		return nil
	}

	for child := node.FirstChild; child != nil; child = child.NextSibling {
		if matched := walk(child); matched != nil {
			return matched
		}
	}
	return nil
}

func extractAntiBlockURLs(htmlSource string) []string {
	if cleanString(htmlSource) == "" {
		return nil
	}

	root, err := html.Parse(strings.NewReader(htmlSource))
	if err != nil {
		return nil
	}

	results := make([]string, 0, 8)
	seen := map[string]struct{}{}

	var walk func(*html.Node)
	walk = func(node *html.Node) {
		if node == nil {
			return
		}

		if node.Type == html.ElementNode &&
			strings.EqualFold(node.Data, "div") &&
			hasAllClasses(node, "col-xs-12", "col-md-6", "col-lg-3", "text-center") {
			strongNode := firstDescendant(node, func(candidate *html.Node) bool {
				return candidate.Type == html.ElementNode && strings.EqualFold(candidate.Data, "strong")
			})
			if strongNode != nil && strings.Contains(nodeText(strongNode), "防屏蔽地址") {
				linkNode := firstDescendant(node, func(candidate *html.Node) bool {
					return candidate.Type == html.ElementNode && strings.EqualFold(candidate.Data, "a")
				})
				if linkNode != nil {
					if href := cleanString(getAttr(linkNode, "href")); href != "" {
						if _, ok := seen[href]; !ok {
							seen[href] = struct{}{}
							results = append(results, href)
						}
					}
				}
			}
		}

		for child := node.FirstChild; child != nil; child = child.NextSibling {
			walk(child)
		}
	}

	walk(root)
	return results
}

func uniqueStrings(values ...[]string) []string {
	merged := make([]string, 0)
	seen := map[string]struct{}{}
	for _, group := range values {
		for _, item := range group {
			text := cleanString(item)
			if text == "" {
				continue
			}
			if _, ok := seen[text]; ok {
				continue
			}
			seen[text] = struct{}{}
			merged = append(merged, text)
		}
	}
	return merged
}

func (s *Service) resolveFilePath() (string, error) {
	if s == nil || s.userHomeDir == nil {
		return "", fmt.Errorf("防屏蔽地址服务未初始化")
	}

	homeDir, err := s.userHomeDir()
	if err != nil {
		return "", err
	}
	homeDir = cleanString(homeDir)
	if homeDir == "" {
		return "", fmt.Errorf("无法解析用户目录")
	}

	return filepath.Join(homeDir, defaultAntiBlockFile), nil
}

func readExistingURLs(filePath string) ([]string, error) {
	contents, err := os.ReadFile(filePath)
	if err != nil {
		if os.IsNotExist(err) {
			return nil, nil
		}
		return nil, err
	}

	items := make([]string, 0)
	if err := json.Unmarshal(contents, &items); err != nil {
		return nil, err
	}
	return uniqueStrings(items), nil
}

func writeURLs(filePath string, values []string) error {
	if err := os.MkdirAll(filepath.Dir(filePath), 0o755); err != nil {
		return err
	}

	payload, err := json.MarshalIndent(uniqueStrings(values), "", "  ")
	if err != nil {
		return err
	}

	return os.WriteFile(filePath, payload, 0o644)
}

func (s *Service) Update(options UpdateOptions) (Result, error) {
	if s == nil || s.fetchHTML == nil {
		return Result{}, fmt.Errorf("防屏蔽地址服务未初始化")
	}

	htmlSource, err := s.fetchHTML(normalizeBaseURL(options.Base), cleanString(options.Proxy))
	if err != nil {
		return Result{}, err
	}

	discovered := extractAntiBlockURLs(htmlSource)
	filePath, err := s.resolveFilePath()
	if err != nil {
		return Result{}, err
	}

	existing, err := readExistingURLs(filePath)
	if err != nil {
		return Result{}, err
	}

	merged := uniqueStrings(existing, discovered)
	if err := writeURLs(filePath, merged); err != nil {
		return Result{}, err
	}

	return Result{
		AntiBlockURLs: merged,
		FilePath:      filePath,
	}, nil
}
