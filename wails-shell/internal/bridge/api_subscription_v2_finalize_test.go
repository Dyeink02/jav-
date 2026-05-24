package bridge

import (
	"encoding/json"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"jav-auto-wails-shell/internal/contracts/crawlartifact"
)

func TestFinalizeSubscriptionOutputByCodesKeepsOnlyPendingCodes(t *testing.T) {
	outputDir := t.TempDir()
	records := []map[string]any{
		{
			"title":      "MIDA-616 old item full title",
			"sourceLink": "https://www.javbus.com/mida-616",
			"magnet":     "magnet:?xt=urn:btih:old",
		},
		{
			"title":      "MIDA-438 pending item full title",
			"sourceLink": "https://www.javbus.com/mida-438",
			"magnet":     "magnet:?xt=urn:btih:new",
		},
	}
	payload, err := json.Marshal(records)
	if err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(outputDir, crawlartifact.CrawlFilmDataFile), payload, 0o644); err != nil {
		t.Fatal(err)
	}

	kept, err := finalizeSubscriptionOutputByCodes(outputDir, []string{"MIDA-438"})
	if err != nil {
		t.Fatalf("finalizeSubscriptionOutputByCodes returned error: %v", err)
	}
	if len(kept) != 1 || kept[0] != "MIDA-438" {
		t.Fatalf("expected to keep only MIDA-438, got %#v", kept)
	}

	_, filteredRecords, err := crawlartifact.ReadFilmDataRecords(outputDir)
	if err != nil {
		t.Fatal(err)
	}
	if len(filteredRecords) != 1 {
		t.Fatalf("expected one filtered record, got %d", len(filteredRecords))
	}
	if code := resolveSubscriptionRecordCode(filteredRecords[0], 0); code != "MIDA-438" {
		t.Fatalf("expected kept filmData record MIDA-438, got %q", code)
	}

	magnetBytes, err := os.ReadFile(crawlartifact.DefaultMagnetFilePath(outputDir))
	if err != nil {
		t.Fatal(err)
	}
	magnetText := string(magnetBytes)
	if !strings.Contains(magnetText, "btih:new") || strings.Contains(magnetText, "btih:old") {
		t.Fatalf("unexpected filtered magnet output: %q", magnetText)
	}
}

func TestDiffSubscriptionTargetCodesReportsMissing(t *testing.T) {
	missing := diffSubscriptionTargetCodes([]string{"FWAY-087", "MIDA-438"}, []string{"FWAY-87"})
	if len(missing) != 1 || missing[0] != "MIDA-438" {
		t.Fatalf("expected only MIDA-438 missing, got %#v", missing)
	}
}

func TestResolveSubscriptionFinalizeOutputDirPrefersCurrentTaskRunDir(t *testing.T) {
	got := resolveSubscriptionFinalizeOutputDir(map[string]any{
		"outputDir":            `C:\AV订阅`,
		"currentTaskOutputDir": `C:\AV订阅\run-20260524-163431`,
		"lastTaskOutputDir":    `C:\AV订阅\old-run`,
	})

	if got != `C:\AV订阅\run-20260524-163431` {
		t.Fatalf("expected current task run dir, got %q", got)
	}
}
