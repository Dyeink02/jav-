package bridge

import (
	"context"
	"encoding/json"
	"fmt"
	"path/filepath"
	"strings"

	"jav-auto-wails-shell/internal/common"
)

func resolveSubscriptionV2DefaultOutputDir(rootPath string, actressName string) string {
	base := strings.TrimSpace(rootPath)
	if base == "" {
		return ""
	}
	cleanName := strings.TrimSpace(actressName)
	if cleanName == "" {
		cleanName = "未命名订阅"
	}
	return filepath.Join(base, "AV订阅", cleanName)
}

func (a *API) startSubscriptionV2CrawlResult(payload map[string]any) (string, error) {
	if a.lookup.avSubscriptionsV2 == nil {
		return "", fmt.Errorf("AV subscription V2 service is not initialized")
	}

	subscriptionID := common.CleanString(payload["subscriptionId"])
	outputDir := common.CleanString(payload["outputDir"])
	proxy := a.resolveSubcrawlProxy(payload)
	targetCount := common.IntValue(payload["targetCount"], 0)
	parallel := common.IntValue(payload["parallel"], 2)
	if parallel <= 0 {
		parallel = 2
	}
	delay := common.IntValue(payload["delay"], 2)
	if delay < 0 {
		delay = 2
	}
	timeout := common.IntValue(payload["timeout"], 30000)
	if timeout < 1000 {
		timeout = 30000
	}

	items, err := a.lookup.avSubscriptionsV2.List()
	if err != nil {
		return "", err
	}

	for _, item := range items {
		if item.ID != subscriptionID {
			continue
		}

		targetCodes := normalizeSubscriptionTargetCodes(stringSliceValue(payload["targetCodes"]))
		if len(targetCodes) == 0 {
			targetCodes = normalizeSubscriptionTargetCodes(item.PendingCodes)
		}
		if targetCount <= 0 {
			targetCount = len(targetCodes)
		}
		if targetCount <= 0 {
			targetCount = 1
		}
		itemsPerPage := 30
		crawlPages := resolveSubscriptionCrawlPages(item.LastStoppedOnPage, targetCount, len(targetCodes))
		crawlCapacity := calcSubscriptionCrawlLimit(crawlPages, itemsPerPage)
		if outputDir == "" {
			outputDir = strings.TrimSpace(firstNonEmpty(
				item.PreferredOutputDir,
				resolveSubscriptionV2DefaultOutputDir(a.runtime.paths.AppPath, item.ActressName),
			))
		}

		crawlPayload := map[string]any{
			"frontendPayloadVersion": "2026-05-24-av-subscription-v2-page-scope-bridge",
			"base":                   item.CrawlURL,
			"baseUrl":                item.CrawlURL,
			"output":                 outputDir,
			"outputDir":              outputDir,
			"limit":                  0,
			"itemsPerPage":           itemsPerPage,
			"totalPages":             crawlPages,
			"parallel":               parallel,
			"delay":                  delay,
			"timeout":                timeout,
			"proxy":                  proxy,
			"cookie":                 a.resolveSubcrawlCookie(payload),
			"cloudflare":             true,
			"secondValidation":       true,
			"nomag":                  false,
			"allmag":                 false,
			// AV 订阅只需要番号、影片元数据和磁力链接；图片会增加
			// Cloudflare/年龄检测压力，也会拖慢“更新后筛选”的收尾流程。
			"nopic":                       true,
			"magnetContentValidation":     false,
			"magnetExcludeKeywords":       "",
			"actressCountFilterThreshold": 0,
			"goTaskController":            true,
		}

		prepared := a.normalizeActressThresholdPayload(crawlPayload)
		preparedPages := common.IntValue(prepared["totalPages"], 1)
		mode := a.resolveCrawlExecutionMode(prepared)
		a.setGoTaskExecutionMode(mode)
		a.emitSubscriptionV2Log("info", fmt.Sprintf(
			"开始订阅爬取：%s，待更新 %d 部；实际抓取第 1-%d 页全部影片（页面容量约 %d，按页抓满），完成后仅保留：%s。模式 %s（并行=%d, 延迟=%d, 超时=%d，跳过图片=是）",
			item.ActressName,
			targetCount,
			preparedPages,
			crawlCapacity,
			describeSubscriptionTargetCodes(targetCodes),
			mode,
			common.IntValue(prepared["parallel"], parallel),
			common.IntValue(prepared["delay"], delay),
			common.IntValue(prepared["timeout"], timeout),
		))
		a.emitLogEntry("info", fmt.Sprintf(
			"[diagnostic] AV订阅桥接主爬虫 start output=%v cloudflare=%v executionMode=%s controllerMode=%s",
			prepared["output"],
			payloadBool(prepared["cloudflare"]),
			mode,
			crawlControllerModeGoTask,
		))
		actualOutputDir := outputDir
		if a.crawl.crawlTask != nil {
			raw, err := a.crawl.crawlTask.Start(context.Background(), prepared)
			if err != nil {
				return "", err
			}
			actualOutputDir = firstNonEmpty(
				extractStringFromJSON(raw, "currentTaskOutputDir"),
				extractStringFromJSON(raw, "outputDir"),
				extractStringFromJSON(raw, "output"),
				outputDir,
			)
		} else {
			raw, err := a.dispatchPreparedCrawlStart(prepared)
			if err != nil {
				return "", err
			}
			actualOutputDir = firstNonEmpty(
				extractStringFromJSON(json.RawMessage(raw), "currentTaskOutputDir"),
				extractStringFromJSON(json.RawMessage(raw), "outputDir"),
				extractStringFromJSON(json.RawMessage(raw), "output"),
				outputDir,
			)
		}

		return marshalResult(map[string]any{
			"started":        true,
			"subscription":   item,
			"outputDir":      actualOutputDir,
			"baseOutputDir":  outputDir,
			"nopic":          true,
			"targetCodes":    targetCodes,
			"targetCount":    targetCount,
			"crawlLimit":     crawlCapacity,
			"totalPages":     preparedPages,
			"itemsPerPage":   common.IntValue(prepared["itemsPerPage"], 30),
			"parallel":       common.IntValue(prepared["parallel"], 2),
			"delay":          common.IntValue(prepared["delay"], 2),
			"timeout":        common.IntValue(prepared["timeout"], 30000),
			"executionMode":  a.currentExecutionMode(),
			"controllerMode": crawlControllerModeGoTask,
		})
	}

	return "", fmt.Errorf("subscription not found: %s", subscriptionID)
}

func firstNonEmpty(values ...string) string {
	for _, value := range values {
		if strings.TrimSpace(value) != "" {
			return strings.TrimSpace(value)
		}
	}
	return ""
}

func extractStringFromJSON(raw json.RawMessage, key string) string {
	if len(raw) == 0 || strings.TrimSpace(key) == "" {
		return ""
	}
	decoded := map[string]any{}
	if err := json.Unmarshal(raw, &decoded); err != nil {
		return ""
	}
	value, exists := decoded[key]
	if !exists || value == nil {
		return ""
	}
	return strings.TrimSpace(fmt.Sprint(value))
}

func (a *API) stopSubscriptionV2CrawlResult() (string, error) {
	a.emitSubscriptionV2Log("info", "订阅爬取已停止。")
	if _, err := a.handleTaskControlledCrawlStop(); err != nil {
		return "", err
	}
	return marshalResult(map[string]any{"stopped": true})
}

func (a *API) subscriptionV2CrawlStatusResult() (string, error) {
	status := "idle"
	if mode := strings.TrimSpace(a.currentExecutionMode()); mode != "" && mode != crawlExecutionModeIdle {
		status = "running"
	}
	return marshalResult(map[string]any{
		"phase":          status,
		"status":         status,
		"executionMode":  a.currentExecutionMode(),
		"controllerMode": crawlControllerModeGoTask,
	})
}

func calcSubscriptionScanPages(targetCount int, targetCodeCount int) int {
	if targetCodeCount <= 0 && targetCount <= 0 {
		return 1
	}
	referenceCount := targetCount
	if targetCodeCount > referenceCount {
		referenceCount = targetCodeCount
	}
	pages := (referenceCount + 29) / 30
	if pages < 1 {
		pages = 1
	}
	if pages > 50 {
		pages = 50
	}
	return pages
}

func resolveSubscriptionCrawlPages(lastStoppedOnPage int, targetCount int, targetCodeCount int) int {
	scanPages := calcSubscriptionScanPages(targetCount, targetCodeCount)
	if lastStoppedOnPage > scanPages {
		return clampSubscriptionCrawlPages(lastStoppedOnPage)
	}
	return scanPages
}

func calcSubscriptionCrawlLimit(totalPages int, itemsPerPage int) int {
	totalPages = clampSubscriptionCrawlPages(totalPages)
	if itemsPerPage <= 0 {
		itemsPerPage = 30
	}
	return totalPages * itemsPerPage
}

func clampSubscriptionCrawlPages(totalPages int) int {
	if totalPages < 1 {
		return 1
	}
	if totalPages > 50 {
		return 50
	}
	return totalPages
}

func describeSubscriptionTargetCodes(targetCodes []string) string {
	normalized := normalizeSubscriptionTargetCodes(targetCodes)
	if len(normalized) == 0 {
		return "未指定，保留全部输出"
	}
	return strings.Join(normalized, "、")
}
