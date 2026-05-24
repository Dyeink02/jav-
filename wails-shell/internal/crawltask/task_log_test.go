package crawltask

import (
	"os"
	"path/filepath"
	"strings"
	"testing"
	"time"
)

func TestTaskLogWriterInitializeAndAppend(t *testing.T) {
	writer := newTaskLogWriter()
	outputDir := t.TempDir()

	contextPayload, err := writer.initialize(outputDir, map[string]any{
		"base":      "https://www.javbus.com/star/okq",
		"demoLabel": "AED",
	}, time.Date(2026, 5, 1, 12, 0, 0, 0, time.Local))
	if err != nil {
		t.Fatalf("initialize task log writer: %v", err)
	}

	sessionLogPath := cleanString(contextPayload["sessionLogPath"])
	latestLogPath := cleanString(contextPayload["latestLogPath"])
	if sessionLogPath == "" || latestLogPath == "" {
		t.Fatalf("expected session/latest log paths, got %#v", contextPayload)
	}

	writer.appendLogEntry(map[string]any{
		"level":     "info",
		"message":   "Parser: 抓取任务已完成",
		"timestamp": time.Date(2026, 5, 1, 12, 1, 0, 0, time.Local).Format(time.RFC3339),
	})
	writer.appendState(map[string]any{
		"status":    "completed",
		"message":   "抓取任务已完成",
		"timestamp": time.Date(2026, 5, 1, 12, 1, 1, 0, time.Local).Format(time.RFC3339),
	})

	sessionContent, err := os.ReadFile(sessionLogPath)
	if err != nil {
		t.Fatalf("read session log: %v", err)
	}

	content := string(sessionContent)
	if !strings.Contains(content, "解析器：抓取任务已完成") {
		t.Fatalf("expected localized parser log, got %s", content)
	}
	if !strings.Contains(content, "[重点] 解析器：抓取任务已完成") {
		t.Fatalf("expected key log prefix, got %s", content)
	}
	if !strings.Contains(content, "状态(已完成): [重点] 抓取任务已完成") {
		t.Fatalf("expected completed state log, got %s", content)
	}

	if _, err := os.Stat(filepath.Dir(latestLogPath)); err != nil {
		t.Fatalf("expected latest log directory: %v", err)
	}
}
