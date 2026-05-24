// Package crawlfetch wraps index, detail, and magnet fetch operations for the Go crawl path.
//
// Ownership summary:
// 1) compose request, index parsing, and detail parsing into one fetch facade
// 2) expose Go crawl fetch operations behind one runner-facing service
// 3) keep fetch orchestration separate from runner state management
//
// File map for maintainers:
// 1) fetch facade and options DTOs
// 2) index/detail/magnet fetch entrypoints
// 3) request client construction and option normalization
package crawlfetch

import (
	"context"
	"time"

	"jav-auto-wails-shell/internal/crawlindex"
	"jav-auto-wails-shell/internal/crawlparse"
	"jav-auto-wails-shell/internal/crawlrequest"
)

// Service is the thin facade that composes request, index parsing, and detail
// parsing for the Go crawl path.
type Service struct {
	client  *crawlrequest.Client
	options crawlrequest.PageRequestOptions
}

// ServiceOptions is the bridge/runner-facing fetch configuration contract.
type ServiceOptions struct {
	Headers           map[string]string
	ConfigCookie      string
	CloudflareCookies string
	Proxy             string
	Timeout           time.Duration
	UserAgent         string
	RetryCount        int
	RetryDelay        time.Duration
}

// IndexPageOptions is the narrow input for one index-page fetch attempt.
type IndexPageOptions struct {
	BaseURL        string
	Search         string
	SearchURL      string
	PageNumber     int
	CookieOverride string
}

// IndexPageResult and DetailResult are the normalized fetch-layer outputs before
// runner/quality code adds queue or reconciliation semantics.
type IndexPageResult struct {
	URL      string                    `json:"url"`
	Links    []string                  `json:"links"`
	Response crawlrequest.PageResponse `json:"response"`
}

type DetailResult struct {
	URL      string                    `json:"url"`
	Metadata crawlparse.Metadata       `json:"metadata"`
	FilmData crawlparse.FilmData       `json:"filmData"`
	Response crawlrequest.PageResponse `json:"response"`
}

func NewService(options ServiceOptions) (*Service, error) {
	requestOptions := crawlrequest.PageRequestOptions{
		Headers:           options.Headers,
		ConfigCookie:      options.ConfigCookie,
		CloudflareCookies: options.CloudflareCookies,
		Proxy:             options.Proxy,
		Timeout:           options.Timeout,
		UserAgent:         options.UserAgent,
		RetryCount:        options.RetryCount,
		RetryDelay:        options.RetryDelay,
	}
	client, err := crawlrequest.NewClient(requestOptions)
	if err != nil {
		return nil, err
	}
	return &Service{
		client:  client,
		options: requestOptions,
	}, nil
}

// FetchIndexPage fetches one listing page and returns already parsed detail
// links together with the raw response.
func (s *Service) FetchIndexPage(ctx context.Context, options IndexPageOptions) (IndexPageResult, error) {
	pageURL := crawlindex.BuildIndexPageURL(options.BaseURL, options.Search, options.SearchURL, options.PageNumber)
	links, response, err := s.client.FetchIndexPageLinks(ctx, pageURL, options.CookieOverride)
	if err != nil {
		return IndexPageResult{}, err
	}
	return IndexPageResult{
		URL:      pageURL,
		Links:    links,
		Response: response,
	}, nil
}

// FetchDetail fetches one detail page and projects it into metadata plus the
// persisted filmData artifact shape.
func (s *Service) FetchDetail(ctx context.Context, detailURL string, cookieOverride string) (DetailResult, error) {
	metadata, response, err := s.client.FetchMetadata(ctx, detailURL, cookieOverride)
	if err != nil {
		return DetailResult{}, err
	}
	return DetailResult{
		URL:      detailURL,
		Metadata: metadata,
		FilmData: crawlparse.ParseFilmData(metadata, detailURL),
		Response: response,
	}, nil
}

// Client exposes the underlying request client for specialized fetch paths that
// still belong to the crawl fetch lane.
func (s *Service) Client() *crawlrequest.Client {
	if s == nil {
		return nil
	}
	return s.client
}
