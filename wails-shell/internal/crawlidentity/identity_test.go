package crawlidentity

import "testing"

func TestNormalizeFilmID(t *testing.T) {
	cases := map[string]string{
		"abp889":      "ABP-889",
		"ABP_889":     "ABP-889",
		"ssis 123":    "SSIS-123",
		"fc2-ppv1234": "FC2-PPV1234",
		"FSET-00739":  "FSET-739",
		"SDDE-00520":  "SDDE-520",
	}

	for input, expected := range cases {
		if got := NormalizeFilmID(input); got != expected {
			t.Fatalf("NormalizeFilmID(%q) expected %q, got %q", input, expected, got)
		}
	}
}

func TestExtractFilmID(t *testing.T) {
	cases := map[string]string{
		"https://www.javbus.com/ABP-889": "ABP-889",
		"abc ABW006 xyz":                 "ABW-6",
		"https://x.test/path/ssis-123/":  "SSIS-123",
		"no-film-id":                     "",
	}

	for input, expected := range cases {
		if got := ExtractFilmID(input); got != expected {
			t.Fatalf("ExtractFilmID(%q) expected %q, got %q", input, expected, got)
		}
	}
}

func TestNormalizeSourceLink(t *testing.T) {
	if got := NormalizeSourceLink("https://www.javbus.com/ABP-889/?foo=1#bar"); got != "https://www.javbus.com/abp-889" {
		t.Fatalf("unexpected normalized source link: %q", got)
	}
}

func TestNormalizeTitle(t *testing.T) {
	if got := NormalizeTitle("ABP-889: Sample Title!!"); got != "abp889 sample title" {
		t.Fatalf("unexpected normalized title: %q", got)
	}
}
