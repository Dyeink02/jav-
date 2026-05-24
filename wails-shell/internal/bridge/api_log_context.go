package bridge

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"jav-auto-wails-shell/internal/common"
	"jav-auto-wails-shell/internal/contracts/crawlartifact"
)

// Log context helpers are isolated because filename/output-path diagnostics are
// a separate class of issues from crawl execution and state panels.
//
// Ownership summary:
// 1) initialize and expose the crawl log-context read model
// 2) centralize session/latest log path creation and cache updates
// 3) keep log-context handling separate from crawl execution flow
//
// File map for maintainers:
// 1) task-log initialization and file creation helpers
// 2) runtime cache/log-context update helpers
// 3) query payload shaping for log-context consumers

// initTaskLog initializes one run-log context and feeds the runtime cache/log
// context query path.
func (a *API) initTaskLog(outputDir string, payload map[string]any) {
	runPaths := crawlartifact.ResolveCrawlRunPaths(outputDir)
	logDir := runPaths.LogDir
	_ = os.MkdirAll(logDir, 0o755)

	sessionID := time.Now().Format("20060102-150405")
	// Keep log filenames ASCII-only so Windows code pages do not produce
	// unreadable paths during diagnostics or user support.
	sessionLogPath := filepath.Join(logDir, fmt.Sprintf("crawl-session-%s.txt", sessionID))
	latestLogPath := runPaths.LatestLogPath

	header := fmt.Sprintf(
		"JAV crawl log\r\nstartedAt: %s\r\noutputDir: %s\r\nbaseURL: %s\r\nsearch: %s\r\n------------------------------------------------------------\r\n",
		time.Now().Format("2006-01-02 15:04:05"),
		outputDir,
		resolveCrawlerBaseURL(payload),
		crawlSearchFromPayload(payload),
	)

	_ = common.WriteUTF8TextFile(sessionLogPath, header)
	_ = common.WriteUTF8TextFile(latestLogPath, header)

	raw, _ := json.Marshal(map[string]any{
		"sessionLogPath": sessionLogPath,
		"latestLogPath":  latestLogPath,
		"logDir":         logDir,
		"sessionId":      sessionID,
	})
	a.runtime.bus.Publish("", "context", "crawl.log-context", "", "", "", time.Now().Format(time.RFC3339), raw)
	a.emitLogEntry("info", fmt.Sprintf("crawl log created: %s", sessionLogPath))
}

// getLogContext is the read-model query for current log/session path metadata.
func (a *API) getLogContext() (map[string]any, error) {
	runContext, err := a.getCrawlRunContext()
	if err != nil {
		return nil, err
	}

	// Expose only the resolved log-path view needed by the renderer. Path
	// creation/rotation still belongs to initTaskLog and crawl artifact helpers.
	return map[string]any{
		"logDir":         runContext.LogDir,
		"sessionLogPath": runContext.SessionLogPath,
		"latestLogPath":  runContext.LatestLogPath,
	}, nil
}
