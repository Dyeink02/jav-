package crawlrequest

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/chromedp/cdproto/emulation"
	"github.com/chromedp/cdproto/network"
	"github.com/chromedp/cdproto/page"
	"github.com/chromedp/chromedp"
)

// Browser fallback owns the explicit chromedp-based compatibility lane for
// age-check / Cloudflare-like page access. Keep this boundary narrow so normal
// HTTP fetch behavior stays readable and testable elsewhere.
//
// Ownership summary:
// 1) execute the explicit browser-based fallback fetch path
// 2) resolve browser executable/cookie/session setup for fallback requests
// 3) keep challenge-bypass behavior separate from the normal HTTP lane
//
// File map for maintainers:
// 1) browser executable discovery and launch configuration
// 2) browser-based page fetch entrypoint
// 3) cookie/session/header setup helpers for fallback requests

const browserPathEnvName = "JAV_AUTO_BROWSER_PATH"

var browserCandidatePaths = []string{
	`C:\Program Files\Google\Chrome\Application\chrome.exe`,
	`C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`,
	`C:\Users\%USERNAME%\AppData\Local\Google\Chrome\Application\chrome.exe`,
}

func (c *Client) getPageWithBrowserFallback(ctx context.Context, targetURL string, cookieOverride string, reason string) (PageResponse, error) {
	timeout := c.options.Timeout
	if timeout <= 0 {
		timeout = 45 * time.Second
	}
	fallbackCtx, cancel := context.WithTimeout(ctx, timeout+10*time.Second)
	defer cancel()

	browserPath, err := getBrowserExecutablePath()
	if err != nil {
		return PageResponse{}, fmt.Errorf("%s; chromedp fallback unavailable: %w", reason, err)
	}

	ua := firstNonEmpty(c.options.UserAgent, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36")
	allocatorOptions := append(chromedp.DefaultExecAllocatorOptions[:],
		chromedp.ExecPath(browserPath),
		chromedp.Flag("headless", true),
		chromedp.Flag("no-sandbox", true),
		chromedp.Flag("disable-setuid-sandbox", true),
		chromedp.Flag("disable-dev-shm-usage", true),
		chromedp.Flag("disable-blink-features", "AutomationControlled"),
		chromedp.Flag("lang", "zh-CN"),
		chromedp.UserAgent(ua),
	)
	if proxyServer := normalizeProxyURL(c.options.Proxy); proxyServer != "" {
		allocatorOptions = append(allocatorOptions, chromedp.Flag("proxy-server", proxyServer))
	}

	allocCtx, allocCancel := chromedp.NewExecAllocator(fallbackCtx, allocatorOptions...)
	defer allocCancel()
	browserCtx, browserCancel := chromedp.NewContext(allocCtx)
	defer browserCancel()

	headers := BuildPageRequestHeaders(BuildPageRequestHeadersOptions{
		RequestHeaders:      c.options.Headers,
		ConfigCookie:        c.options.ConfigCookie,
		CookieOverride:      firstNonEmpty(cookieOverride, c.options.CookieOverride),
		CloudflareCookies:   c.options.CloudflareCookies,
		DefaultCookieHeader: DefaultCookieHeader,
	})
	headers["Accept-Language"] = firstNonEmpty(headers["Accept-Language"], "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7")
	delete(headers, "User-Agent")
	chromeHeaders := network.Headers{}
	for key, value := range headers {
		if strings.TrimSpace(key) != "" && strings.TrimSpace(value) != "" {
			chromeHeaders[key] = value
		}
	}

	antiDetectScript := `
Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
Object.defineProperty(navigator, 'languages', { get: () => ['zh-CN', 'zh', 'en-US'] });
Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3] });
window.chrome = window.chrome || { runtime: {} };
`

	var htmlSource string
	var pageURL string
	if err := chromedp.Run(browserCtx,
		network.Enable(),
		network.SetBlockedURLs([]string{"*.png", "*.jpg", "*.jpeg", "*.gif", "*.webp", "*.woff", "*.woff2", "*.ttf", "*googletagmanager*", "*google-analytics*", "*doubleclick*"}),
		emulation.SetUserAgentOverride(ua).WithAcceptLanguage(headers["Accept-Language"]),
		network.SetExtraHTTPHeaders(chromeHeaders),
		chromedp.ActionFunc(func(inner context.Context) error {
			_, err := page.AddScriptToEvaluateOnNewDocument(antiDetectScript).Do(inner)
			return err
		}),
		chromedp.Navigate(targetURL),
		chromedp.Sleep(3500*time.Millisecond),
		chromedp.ActionFunc(func(inner context.Context) error {
			// JavBus currently gates pages behind a checkbox + submit modal.
			// Keep these selectors here so all callers reuse the same age-check
			// fallback instead of reimplementing it in subscription/organizer code.
			_ = chromedp.Click(`#ageVerify input[type="checkbox"]`, chromedp.ByQuery).Do(inner)
			_ = chromedp.SetValue(`#ageVerify input[type="checkbox"]`, "on", chromedp.ByQuery).Do(inner)
			_ = chromedp.Click(`#ageVerify input[type="submit"]`, chromedp.ByQuery).Do(inner)
			_ = chromedp.Click(`a[href*="age=verified"]`, chromedp.ByQuery).Do(inner)
			_ = chromedp.Click(`a[href*="agecheck"]`, chromedp.ByQuery).Do(inner)
			_ = chromedp.Click(`button.alert_common_btn`, chromedp.ByQuery).Do(inner)
			return nil
		}),
		chromedp.Sleep(2500*time.Millisecond),
		chromedp.OuterHTML("html", &htmlSource, chromedp.ByQuery),
		chromedp.Location(&pageURL),
	); err != nil {
		return PageResponse{}, fmt.Errorf("%s; chromedp fallback failed: %w", reason, err)
	}
	if strings.TrimSpace(pageURL) == "" {
		pageURL = strings.TrimSpace(targetURL)
	}
	return PageResponse{URL: pageURL, StatusCode: http.StatusOK, Body: htmlSource}, nil
}

func shouldUseBrowserFallback(response PageResponse) bool {
	return !IsUsablePageBody(response.Body) ||
		IsCloudflareChallengeResponse(response.StatusCode, response.Body) ||
		IsAgeVerificationResponse(response.Body)
}

func shouldFallbackToBrowserOnError(err error) bool {
	if err == nil {
		return false
	}
	normalized := strings.ToLower(err.Error())
	for _, token := range []string{
		"http 403",
		"http 429",
		"http 503",
		"cloudflare",
		"challenge",
		"age verification",
		"empty response",
	} {
		if strings.Contains(normalized, token) {
			return true
		}
	}
	return false
}

func getBrowserExecutablePath() (string, error) {
	visited := map[string]struct{}{}
	for _, candidate := range candidateBrowserPathsForFallback() {
		resolved := strings.TrimSpace(strings.ReplaceAll(candidate, "%USERNAME%", os.Getenv("USERNAME")))
		if resolved == "" {
			continue
		}
		cleaned, err := filepath.Abs(resolved)
		if err == nil {
			resolved = cleaned
		}
		if _, seen := visited[strings.ToLower(resolved)]; seen {
			continue
		}
		visited[strings.ToLower(resolved)] = struct{}{}
		if info, err := os.Stat(resolved); err == nil && !info.IsDir() {
			return resolved, nil
		}
	}
	return "", fmt.Errorf("Google Chrome executable not found; please install Chrome or set %s to chrome.exe", browserPathEnvName)
}

func candidateBrowserPathsForFallback() []string {
	candidates := make([]string, 0, len(browserCandidatePaths)+10)
	if envPath := strings.TrimSpace(os.Getenv(browserPathEnvName)); envPath != "" {
		candidates = append(candidates, envPath)
	}
	if executablePath, err := os.Executable(); err == nil {
		dir := filepath.Dir(executablePath)
		candidates = append(candidates,
			filepath.Join(dir, "chrome.exe"),
			filepath.Join(dir, "browser", "chrome.exe"),
		)
	}
	if workingDir, err := os.Getwd(); err == nil {
		candidates = append(candidates,
			filepath.Join(workingDir, "chrome.exe"),
			filepath.Join(workingDir, "browser", "chrome.exe"),
		)
	}
	return append(candidates, browserCandidatePaths...)
}
