package crawlrequest

import (
	"context"
	"fmt"
	"io"
	"math"
	"math/rand"
	"net/http"
	"net/url"
	"regexp"
	"strings"
	"sync"
	"time"
)

// Page request helpers are the primary HTTP fetch boundary for index/detail
// pages. Ordinary retry/cookie/header behavior should be debugged here before
// investigating browser fallback or parser layers.
//
// Ownership summary:
// 1) build plain HTTP page requests for index/detail fetches
// 2) normalize cookie/header/proxy/retry inputs into one request lane
// 3) keep browser fallback and HTML parsing out of the raw fetch layer
//
// File map for maintainers:
// 1) request/response option contracts
// 2) client construction and option cloning
// 3) cookie/header/proxy normalization helpers
// 4) retry + HTTP execution helpers for page/XHR fetches

const DefaultCookieHeader = "existmag=mag; age_verified=1; adult_verified=1; age_verification=1; age_verification_passed=true; is_adult=true; javbus_age=1"

// PageRequestOptions describes the plain HTTP request lane. Browser fallback
// setup lives elsewhere and should not accumulate here.
type PageRequestOptions struct {
	Headers           map[string]string
	ConfigCookie      string
	CookieOverride    string
	CloudflareCookies string
	Proxy             string
	Timeout           time.Duration
	UserAgent         string
	RetryCount        int
	RetryDelay        time.Duration
	OnRetry           func(attempt int, ua string)
}

// PageResponse is the normalized response shape shared by plain-page and
// XMLHttpRequest helpers.
type PageResponse struct {
	URL        string `json:"url"`
	StatusCode int    `json:"statusCode"`
	Body       string `json:"body"`
}

// Client owns retry/header/cookie behavior for the non-browser fetch path.
type Client struct {
	httpClient *http.Client
	options    PageRequestOptions
	mu         sync.RWMutex
}

func NewClient(options PageRequestOptions) (*Client, error) {
	timeout := options.Timeout
	if timeout <= 0 {
		timeout = 30 * time.Second
	}
	retryCount := options.RetryCount
	if retryCount <= 0 {
		retryCount = 3
	}
	retryDelay := options.RetryDelay
	if retryDelay <= 0 {
		retryDelay = 3 * time.Second
	}
	options.RetryCount = retryCount
	options.RetryDelay = retryDelay

	transport := http.DefaultTransport.(*http.Transport).Clone()
	if proxyURL := normalizeProxyURL(options.Proxy); proxyURL != "" {
		parsedProxy, err := url.Parse(proxyURL)
		if err != nil {
			return nil, fmt.Errorf("代理地址无效：%w", err)
		}
		transport.Proxy = http.ProxyURL(parsedProxy)
	}

	return &Client{
		httpClient: &http.Client{
			Timeout:   timeout,
			Transport: transport,
		},
		options: options,
	}, nil
}

func (c *Client) CloneOptions() PageRequestOptions {
	if c == nil {
		return PageRequestOptions{}
	}
	c.mu.RLock()
	defer c.mu.RUnlock()
	return clonePageRequestOptions(c.options)
}

func (c *Client) updateCloudflareCookies(cookieHeader string) {
	normalized := MergeCookieHeaders(cookieHeader)
	if normalized == "" {
		return
	}
	c.mu.Lock()
	defer c.mu.Unlock()
	c.options.CloudflareCookies = MergeCookieHeaders(DefaultCookieHeader, c.options.CloudflareCookies, normalized)
}

func clonePageRequestOptions(options PageRequestOptions) PageRequestOptions {
	cloned := options
	if options.Headers != nil {
		cloned.Headers = make(map[string]string, len(options.Headers))
		for key, value := range options.Headers {
			cloned.Headers[key] = value
		}
	}
	return cloned
}

// MergeCookieHeaders keeps one value per cookie name while preserving later
// overrides, which avoids duplicate-cookie drift across config and fallback
// layers.
func MergeCookieHeaders(cookieHeaders ...string) string {
	merged := make([]string, 0, len(cookieHeaders))
	indexByName := map[string]int{}
	for _, header := range cookieHeaders {
		for _, part := range strings.Split(header, ";") {
			cookie := strings.TrimSpace(part)
			if cookie == "" {
				continue
			}
			equalIndex := strings.Index(cookie, "=")
			if equalIndex <= 0 {
				continue
			}
			name := strings.TrimSpace(cookie[:equalIndex])
			value := strings.TrimSpace(cookie[equalIndex+1:])
			if name == "" || value == "" || !IsValidCookieValue(value) {
				continue
			}
			normalizedName := strings.ToLower(name)
			normalizedCookie := name + "=" + value
			if existingIndex, exists := indexByName[normalizedName]; exists {
				merged[existingIndex] = normalizedCookie
				continue
			}
			indexByName[normalizedName] = len(merged)
			merged = append(merged, normalizedCookie)
		}
	}
	return strings.Join(merged, "; ")
}

// GetPage is the primary entry point for index/detail fetches. It first uses
// the plain HTTP lane and only escalates when fallback heuristics say the
// response is unusable.
func (c *Client) GetPage(ctx context.Context, targetURL string, cookieOverride string) (PageResponse, error) {
	if c == nil || c.httpClient == nil {
		return PageResponse{}, fmt.Errorf("请求客户端未初始化")
	}
	response, err := c.getPageWithRetry(ctx, targetURL, cookieOverride, 0)
	if err != nil {
		if ctx.Err() != nil {
			return response, err
		}
		if shouldFallbackToBrowserOnError(err) {
			return c.getPageWithBrowserFallback(ctx, targetURL, cookieOverride, err.Error())
		}
		return response, err
	}
	if shouldUseBrowserFallback(response) {
		return c.getPageWithBrowserFallback(ctx, targetURL, cookieOverride, DescribePageFallbackReason(&response))
	}
	return response, nil
}

func (c *Client) getPageWithRetry(ctx context.Context, targetURL string, cookieOverride string, attempt int) (PageResponse, error) {
	options := c.CloneOptions()
	trimmedURL := strings.TrimSpace(targetURL)
	if trimmedURL == "" {
		return PageResponse{}, fmt.Errorf("请求地址不能为空")
	}

	request, err := http.NewRequestWithContext(ctx, http.MethodGet, trimmedURL, nil)
	if err != nil {
		return PageResponse{}, err
	}

	ua := firstNonEmpty(options.UserAgent, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36")
	headers := BuildPageRequestHeaders(BuildPageRequestHeadersOptions{
		RequestHeaders:      options.Headers,
		ConfigCookie:        options.ConfigCookie,
		CookieOverride:      firstNonEmpty(cookieOverride, options.CookieOverride),
		CloudflareCookies:   options.CloudflareCookies,
		DefaultCookieHeader: DefaultCookieHeader,
	})
	if _, exists := headers["User-Agent"]; !exists {
		headers["User-Agent"] = ua
	}

	secChUa := BuildSecChUa(ua)
	if _, exists := headers["Sec-Ch-Ua"]; !exists {
		headers["Sec-Ch-Ua"] = secChUa
	}

	for key, value := range headers {
		if strings.TrimSpace(key) == "" || strings.TrimSpace(value) == "" {
			continue
		}
		request.Header.Set(key, value)
	}

	response, err := c.httpClient.Do(request)
	if err != nil {
		if c.shouldRetry(ctx, err, nil, attempt) {
			delay := c.computeRetryDelay(attempt)
			select {
			case <-ctx.Done():
				return PageResponse{}, ctx.Err()
			case <-time.After(delay):
			}
			return c.getPageWithRetry(ctx, targetURL, cookieOverride, attempt+1)
		}
		return PageResponse{}, fmt.Errorf("请求页面失败: %w", err)
	}
	defer response.Body.Close()

	if c.shouldRetry(ctx, nil, response, attempt) {
		delay := c.computeRetryDelay(attempt)
		select {
		case <-ctx.Done():
			return PageResponse{}, ctx.Err()
		case <-time.After(delay):
		}
		return c.getPageWithRetry(ctx, targetURL, cookieOverride, attempt+1)
	}

	bodyBytes, err := io.ReadAll(io.LimitReader(response.Body, 16*1024*1024))
	if err != nil {
		return PageResponse{}, err
	}

	pageResponse := PageResponse{
		URL:        trimmedURL,
		StatusCode: response.StatusCode,
		Body:       string(bodyBytes),
	}
	if pageResponse.StatusCode >= 500 {
		return pageResponse, fmt.Errorf("请求页面失败: HTTP %d", pageResponse.StatusCode)
	}

	return pageResponse, nil
}

func (c *Client) shouldRetry(ctx context.Context, err error, resp *http.Response, attempt int) bool {
	options := c.CloneOptions()
	if attempt >= options.RetryCount {
		return false
	}
	if err != nil {
		if ctx.Err() != nil {
			return false
		}
		return true
	}
	if resp == nil {
		return false
	}
	switch resp.StatusCode {
	case 500, 502, 503, 504, 429, 403:
		if options.OnRetry != nil {
			options.OnRetry(attempt+1, "")
		}
		return true
	}
	return false
}

func (c *Client) computeRetryDelay(attempt int) time.Duration {
	options := c.CloneOptions()
	baseDelay := options.RetryDelay
	if baseDelay <= 0 {
		baseDelay = 3 * time.Second
	}
	baseDelaySeconds := float64(baseDelay) / float64(time.Second)
	exponentialDelay := math.Min(baseDelaySeconds*math.Pow(1.5, float64(attempt)), 30.0)
	jitter := rand.Float64() * 2.0
	totalSeconds := exponentialDelay + jitter
	return time.Duration(totalSeconds * float64(time.Second))
}

var (
	browserVersionRE = regexp.MustCompile(`(?i)(Chrome|Firefox|Edge|Edg)[/\s](\d+)`)
)

func BuildSecChUa(userAgent string) string {
	isChrome := strings.Contains(strings.ToLower(userAgent), "chrome") && !strings.Contains(strings.ToLower(userAgent), "edge") && !strings.Contains(strings.ToLower(userAgent), "edg")
	isEdge := strings.Contains(strings.ToLower(userAgent), "edge") || strings.Contains(strings.ToLower(userAgent), "edg")
	isFirefox := strings.Contains(strings.ToLower(userAgent), "firefox")

	browserVersion := "119"
	if matches := browserVersionRE.FindStringSubmatch(userAgent); len(matches) >= 3 {
		browserVersion = matches[2]
	}

	if isChrome {
		return `"Chromium";v="` + browserVersion + `", "Not?A_Brand";v="99"`
	}
	if isEdge {
		return `"Microsoft Edge";v="` + browserVersion + `", "Not?A_Brand";v="99"`
	}
	if isFirefox {
		return `"Not.A/Brand";v="8", "Chromium";v="` + browserVersion + `", "Google Chrome";v="` + browserVersion + `"`
	}
	return `"Chromium";v="` + browserVersion + `", "Not?A_Brand";v="99"`
}

func GetRandomDelay(minSeconds int, maxSeconds int) time.Duration {
	if minSeconds < 0 {
		minSeconds = 0
	}
	if maxSeconds <= minSeconds {
		maxSeconds = minSeconds + 1
	}
	randomSeconds := rand.Intn(maxSeconds-minSeconds) + minSeconds
	return time.Duration(randomSeconds * int(time.Second))
}

func GetExponentialBackoffDelay(baseDelay time.Duration, attempt int, maxDelay time.Duration) time.Duration {
	exponentialDelay := float64(baseDelay) * math.Pow(2.0, float64(attempt))
	jitter := float64(rand.Intn(1000)) * float64(time.Millisecond)
	totalDelay := exponentialDelay + jitter
	if maxDelay > 0 && time.Duration(totalDelay) > maxDelay {
		return maxDelay
	}
	return time.Duration(totalDelay)
}

// BuildPageRequestHeadersOptions keeps cookie precedence explicit so config
// cookies, task overrides, and Cloudflare cookies do not compete implicitly.
type BuildPageRequestHeadersOptions struct {
	RequestHeaders      map[string]string
	ConfigCookie        string
	CookieOverride      string
	CloudflareCookies   string
	DefaultCookieHeader string
}

// BuildPageRequestHeaders applies the canonical cookie-precedence policy for
// plain HTTP page fetches.
func BuildPageRequestHeaders(options BuildPageRequestHeadersOptions) map[string]string {
	headers := make(map[string]string, len(options.RequestHeaders)+1)
	for key, value := range options.RequestHeaders {
		if strings.TrimSpace(key) != "" && strings.TrimSpace(value) != "" {
			headers[key] = value
		}
	}

	manualCookies := GetManualCookieHeader(options.ConfigCookie, options.DefaultCookieHeader)
	switch {
	case manualCookies != "":
		headers["Cookie"] = manualCookies
	case strings.TrimSpace(options.CookieOverride) != "":
		headers["Cookie"] = strings.TrimSpace(options.CookieOverride)
	case strings.TrimSpace(options.CloudflareCookies) != "":
		headers["Cookie"] = strings.TrimSpace(options.CloudflareCookies)
	default:
		headers["Cookie"] = firstNonEmpty(options.DefaultCookieHeader, DefaultCookieHeader)
	}
	return headers
}

func GetManualCookieHeader(configCookie string, defaultCookieHeader string) string {
	cookie := strings.TrimSpace(configCookie)
	if cookie == "" || cookie == "existmag=mag" || cookie == strings.TrimSpace(defaultCookieHeader) {
		return ""
	}
	return cookie
}

func IsUsablePageBody(body string) bool {
	return strings.TrimSpace(body) != ""
}

func IsAgeVerificationResponse(body string) bool {
	normalizedBody := strings.ToLower(body)
	return strings.Contains(normalizedBody, "age verification javbus") ||
		strings.Contains(normalizedBody, "/doc/driver-verify") ||
		strings.Contains(normalizedBody, "driver-verify?referer=") ||
		strings.Contains(normalizedBody, "must be 18") ||
		strings.Contains(normalizedBody, "adult only") ||
		strings.Contains(normalizedBody, "age verification")
}

func IsCloudflareChallengeResponse(statusCode int, body string) bool {
	normalizedBody := strings.ToLower(body)
	return statusCode == http.StatusForbidden ||
		statusCode == http.StatusTooManyRequests ||
		statusCode == http.StatusServiceUnavailable ||
		strings.Contains(normalizedBody, "cf-browser-verification") ||
		strings.Contains(normalizedBody, "challenge-platform") ||
		strings.Contains(normalizedBody, "/cdn-cgi/challenge-platform/") ||
		strings.Contains(normalizedBody, "__cf_chl_") ||
		strings.Contains(normalizedBody, "checking your browser before accessing") ||
		strings.Contains(normalizedBody, "just a moment...") ||
		strings.Contains(normalizedBody, "attention required! | cloudflare") ||
		strings.Contains(normalizedBody, "please stand by, while we are checking your browser")
}

// IsUsablePageResponse is the narrow decision gate used before escalating to
// browser fallback.
func IsUsablePageResponse(response PageResponse) bool {
	return IsUsablePageBody(response.Body) &&
		!IsCloudflareChallengeResponse(response.StatusCode, response.Body) &&
		!IsAgeVerificationResponse(response.Body)
}

// DescribePageFallbackReason turns the low-level response check into a stable
// operator-facing message for logs and diagnostics.
func DescribePageFallbackReason(response *PageResponse) string {
	if response == nil {
		return "常规请求未能拿到页面内容"
	}
	if !IsUsablePageBody(response.Body) {
		return "常规请求返回空页面"
	}
	if IsCloudflareChallengeResponse(response.StatusCode, response.Body) {
		return "常规请求命中验证页或拦截页"
	}
	if IsAgeVerificationResponse(response.Body) {
		return "常规请求命中年龄验证页"
	}
	return "常规请求内容疑似异常"
}

func IsRecoverableAjaxErrorMessage(message string) bool {
	normalized := strings.ToLower(message)
	for _, keyword := range []string{
		"err_connection_timed_out",
		"etimedout",
		"econnreset",
		"chromewebdata",
		"chrome-error",
		"err_tunnel_connection_failed",
		"err_proxy_connection_failed",
		"err_name_not_resolved",
		"navigation timeout",
		"challenge timeout",
		"cloudflare",
		"target closed",
		"execution context was destroyed",
		"session closed",
	} {
		if strings.Contains(normalized, keyword) {
			return true
		}
	}
	return false
}

func IsFastFallbackAjaxErrorMessage(message string) bool {
	normalized := strings.ToLower(message)
	for _, keyword := range []string{
		"err_bad_request",
		"bad request",
		"forbidden",
		"too many requests",
		"err_connection_timed_out",
		"etimedout",
		"timeout",
		"cloudflare",
		"empty response",
	} {
		if strings.Contains(normalized, keyword) {
			return true
		}
	}
	return false
}

func IsValidCookieValue(value string) bool {
	if value == "" || len(value) > 4096 {
		return false
	}
	for _, char := range value {
		if char < 32 || char == 127 {
			return false
		}
	}
	return true
}

func IsValidCookieString(cookieString string) bool {
	if cookieString == "" || len(cookieString) > 8192 {
		return false
	}
	for _, cookie := range strings.Split(cookieString, ";") {
		trimmedCookie := strings.TrimSpace(cookie)
		if trimmedCookie == "" {
			continue
		}
		equalIndex := strings.Index(trimmedCookie, "=")
		if equalIndex <= 0 || equalIndex >= len(trimmedCookie)-1 {
			return false
		}
		name := strings.TrimSpace(trimmedCookie[:equalIndex])
		if name == "" {
			return false
		}
		for _, char := range name {
			if (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char == '_' || char == '-' {
				continue
			}
			return false
		}
		if !IsValidCookieValue(strings.TrimSpace(trimmedCookie[equalIndex+1:])) {
			return false
		}
	}
	return true
}

func SetCookieHeader(headers map[string]string, cookieString string) bool {
	if !IsValidCookieString(cookieString) {
		return false
	}
	headers["Cookie"] = cookieString
	return true
}

func normalizeProxyURL(rawValue string) string {
	value := strings.TrimSpace(rawValue)
	if value == "" {
		return ""
	}
	if strings.Contains(value, "://") {
		return value
	}
	return "http://" + value
}

// GetXMLHttpRequest is the AJAX-specific helper used for endpoints that expect
// XMLHttpRequest semantics but still remain in the plain HTTP lane.
func (c *Client) GetXMLHttpRequest(ctx context.Context, targetURL string) (PageResponse, error) {
	return c.GetXMLHttpRequestWithReferer(ctx, targetURL, "")
}

func (c *Client) GetXMLHttpRequestWithReferer(ctx context.Context, targetURL string, refererURL string) (PageResponse, error) {
	if c == nil || c.httpClient == nil {
		return PageResponse{}, fmt.Errorf("请求客户端未初始化")
	}
	options := c.CloneOptions()
	trimmedURL := strings.TrimSpace(targetURL)
	if trimmedURL == "" {
		return PageResponse{}, fmt.Errorf("请求地址不能为空")
	}

	request, err := http.NewRequestWithContext(ctx, http.MethodGet, trimmedURL, nil)
	if err != nil {
		return PageResponse{}, err
	}

	parsedURL, _ := url.Parse(trimmedURL)
	origin := ""
	if parsedURL != nil {
		origin = parsedURL.Scheme + "://" + parsedURL.Host + "/"
	}
	referer := strings.TrimSpace(refererURL)
	if referer == "" {
		referer = origin
	}

	headers := map[string]string{
		"Accept":           "*/*",
		"Accept-Encoding":  "gzip, deflate, br",
		"Accept-Language":  "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7",
		"Cache-Control":    "no-cache",
		"Sec-Fetch-Dest":   "empty",
		"Sec-Fetch-Mode":   "cors",
		"Sec-Fetch-Site":   "same-origin",
		"X-Requested-With": "XMLHttpRequest",
		"User-Agent":       firstNonEmpty(options.UserAgent, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0 Safari/537.36"),
		"Referer":          referer,
		"Connection":       "keep-alive",
	}

	cookie := GetManualCookieHeader(options.ConfigCookie, DefaultCookieHeader)
	if cookie != "" {
		headers["Cookie"] = cookie
	} else if options.CloudflareCookies != "" {
		headers["Cookie"] = options.CloudflareCookies
	} else {
		headers["Cookie"] = DefaultCookieHeader
	}
	if ua := options.UserAgent; ua != "" {
		headers["Sec-Ch-Ua"] = BuildSecChUa(ua)
	}
	for key, value := range headers {
		if strings.TrimSpace(key) != "" && strings.TrimSpace(value) != "" {
			request.Header.Set(key, value)
		}
	}

	response, err := c.httpClient.Do(request)
	if err != nil {
		return PageResponse{}, err
	}
	defer response.Body.Close()

	bodyBytes, err := io.ReadAll(io.LimitReader(response.Body, 16*1024*1024))
	if err != nil {
		return PageResponse{}, err
	}

	return PageResponse{
		URL:        trimmedURL,
		StatusCode: response.StatusCode,
		Body:       string(bodyBytes),
	}, nil
}

func firstNonEmpty(values ...string) string {
	for _, value := range values {
		trimmed := strings.TrimSpace(value)
		if trimmed != "" {
			return trimmed
		}
	}
	return ""
}
