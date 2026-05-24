package crawlrequest

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestBuildPageRequestHeadersPrefersManualCookie(t *testing.T) {
	headers := BuildPageRequestHeaders(BuildPageRequestHeadersOptions{
		RequestHeaders:      map[string]string{"Accept": "text/html"},
		ConfigCookie:        "foo=bar",
		CookieOverride:      "override=1",
		CloudflareCookies:   "cf=1",
		DefaultCookieHeader: DefaultCookieHeader,
	})

	if headers["Cookie"] != "foo=bar" {
		t.Fatalf("expected manual cookie, got %q", headers["Cookie"])
	}
	if headers["Accept"] != "text/html" {
		t.Fatalf("expected Accept header to remain, got %#v", headers)
	}
}

func TestPageResponseClassifiers(t *testing.T) {
	if IsUsablePageResponse(PageResponse{StatusCode: 200, Body: "age verification javbus"}) {
		t.Fatalf("age verification page should not be usable")
	}
	if IsUsablePageResponse(PageResponse{StatusCode: 503, Body: "Just a moment..."}) {
		t.Fatalf("cloudflare challenge page should not be usable")
	}
	if !IsUsablePageResponse(PageResponse{StatusCode: 200, Body: "<html>ok</html>"}) {
		t.Fatalf("normal html should be usable")
	}
}

func TestCookieValidation(t *testing.T) {
	headers := map[string]string{}
	if !SetCookieHeader(headers, "a=1; b=2") {
		t.Fatalf("expected valid cookie string")
	}
	if headers["Cookie"] != "a=1; b=2" {
		t.Fatalf("unexpected cookie header: %#v", headers)
	}
	if SetCookieHeader(headers, "bad-cookie") {
		t.Fatalf("expected invalid cookie string")
	}
}

func TestGetXMLHttpRequestWithRefererUsesDetailPageReferer(t *testing.T) {
	var receivedReferer string
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		receivedReferer = request.Header.Get("Referer")
		writer.WriteHeader(http.StatusOK)
		_, _ = writer.Write([]byte("ok"))
	}))
	defer server.Close()

	client, err := NewClient(PageRequestOptions{})
	if err != nil {
		t.Fatalf("new client: %v", err)
	}

	detailURL := server.URL + "/SNOS-183"
	_, err = client.GetXMLHttpRequestWithReferer(context.Background(), server.URL+"/ajax/uncledatoolsbyajax.php?gid=1", detailURL)
	if err != nil {
		t.Fatalf("GetXMLHttpRequestWithReferer: %v", err)
	}
	if receivedReferer != detailURL {
		t.Fatalf("expected referer %q, got %q", detailURL, receivedReferer)
	}
}
