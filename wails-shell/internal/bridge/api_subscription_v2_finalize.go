package bridge

import (
	"encoding/json"
	"fmt"
	"os"
	"sort"
	"strings"

	"jav-auto-wails-shell/internal/common"
	"jav-auto-wails-shell/internal/contracts/crawlartifact"
	"jav-auto-wails-shell/internal/crawlidentity"
)

func (a *API) finalizeSubscriptionV2CrawlResult(payload map[string]any) (string, error) {
	if a.lookup.avSubscriptionsV2 == nil {
		return "", fmt.Errorf("AV subscription V2 service is not initialized")
	}

	subscriptionID := strings.TrimSpace(nonEmptyString(payload["subscriptionId"]))
	if subscriptionID == "" {
		return "", fmt.Errorf("subscription id is required")
	}

	outputDir := resolveSubscriptionFinalizeOutputDir(payload)
	if outputDir == "" {
		return "", fmt.Errorf("crawl output directory is required")
	}

	targetCodes := normalizeSubscriptionTargetCodes(stringSliceValue(payload["targetCodes"]))
	if len(targetCodes) == 0 {
		items, err := a.lookup.avSubscriptionsV2.List()
		if err != nil {
			return "", err
		}
		for _, item := range items {
			if item.ID == subscriptionID {
				targetCodes = normalizeSubscriptionTargetCodes(item.PendingCodes)
				break
			}
		}
	}

	filteredCodes, err := finalizeSubscriptionOutputByCodes(outputDir, targetCodes)
	if err != nil {
		return "", err
	}
	missingCodes := diffSubscriptionTargetCodes(targetCodes, filteredCodes)

	updated, err := a.lookup.avSubscriptionsV2.MarkCrawlCompleted(subscriptionID, outputDir)
	if err != nil {
		return "", err
	}

	a.emitSubscriptionV2Log("info", fmt.Sprintf("订阅结果回收目录：%s。", outputDir))
	a.emitSubscriptionV2Log("info", fmt.Sprintf(
		"订阅爬取完成：保留 %d 部影片，剩余待更新 %d 部。",
		len(filteredCodes), updated.PendingCount,
	))
	if len(filteredCodes) > 0 {
		a.emitSubscriptionV2Log("info", fmt.Sprintf("已保留待更新番号：%s。", strings.Join(filteredCodes, "、")))
	}
	if len(missingCodes) > 0 {
		a.emitSubscriptionV2Log("warn", fmt.Sprintf("本次未抓到待更新番号：%s。已过滤其他非更新影片。", strings.Join(missingCodes, "、")))
	}
	a.runtime.bus.Emit("avsubscriptionv2.list-updated", map[string]any{
		"trigger": "crawl-finalized",
	})

	return marshalResult(map[string]any{
		"subscription": updated,
		"outputDir":    outputDir,
		"keptCodes":    filteredCodes,
		"keptCount":    len(filteredCodes),
		"missingCodes": missingCodes,
	})
}

func resolveSubscriptionFinalizeOutputDir(payload map[string]any) string {
	return strings.TrimSpace(firstNonEmpty(
		nonEmptyString(payload["currentTaskOutputDir"]),
		nonEmptyString(payload["outputDir"]),
		nonEmptyString(payload["lastTaskOutputDir"]),
		nonEmptyString(payload["output"]),
	))
}

func normalizeSubscriptionTargetCodes(values []string) []string {
	if len(values) == 0 {
		return []string{}
	}
	seen := map[string]struct{}{}
	result := make([]string, 0, len(values))
	for _, value := range values {
		normalized := crawlidentity.NormalizeFilmID(value)
		if normalized == "" {
			normalized = crawlidentity.ExtractFilmID(value)
		}
		normalized = strings.TrimSpace(normalized)
		if normalized == "" {
			continue
		}
		if _, exists := seen[normalized]; exists {
			continue
		}
		seen[normalized] = struct{}{}
		result = append(result, normalized)
	}
	sort.Strings(result)
	return result
}

func finalizeSubscriptionOutputByCodes(outputDir string, targetCodes []string) ([]string, error) {
	paths, records, err := crawlartifact.ReadFilmDataRecords(outputDir)
	if err != nil {
		return nil, err
	}

	targetSet := map[string]struct{}{}
	for _, code := range normalizeSubscriptionTargetCodes(targetCodes) {
		targetSet[code] = struct{}{}
	}

	filteredRecords := make([]map[string]any, 0, len(records))
	magnetLines := make([]string, 0)
	magnetSeen := map[string]struct{}{}
	keptCodes := make([]string, 0)
	keptSeen := map[string]struct{}{}

	for index, record := range records {
		code := resolveSubscriptionRecordCode(record, index)
		if len(targetSet) > 0 {
			if _, exists := targetSet[code]; !exists {
				continue
			}
		}

		filteredRecords = append(filteredRecords, record)
		if code != "" {
			if _, exists := keptSeen[code]; !exists {
				keptSeen[code] = struct{}{}
				keptCodes = append(keptCodes, code)
			}
		}

		for _, line := range readRecordMagnetLines(record) {
			lower := strings.ToLower(line)
			if _, exists := magnetSeen[lower]; exists {
				continue
			}
			magnetSeen[lower] = struct{}{}
			magnetLines = append(magnetLines, line)
		}
	}

	sort.Strings(keptCodes)
	filmDataBytes, err := json.MarshalIndent(filteredRecords, "", "  ")
	if err != nil {
		return nil, err
	}
	if err := os.WriteFile(paths.FilmDataPath, filmDataBytes, 0o644); err != nil {
		return nil, err
	}
	magnetText := strings.Join(magnetLines, "\r\n")
	if magnetText != "" {
		magnetText += "\r\n"
	}
	if err := common.WriteUTF8TextFile(crawlartifact.DefaultMagnetFilePath(paths.OutputDir), magnetText); err != nil {
		return nil, err
	}
	return keptCodes, nil
}

func diffSubscriptionTargetCodes(targetCodes []string, keptCodes []string) []string {
	keptSet := map[string]struct{}{}
	for _, code := range normalizeSubscriptionTargetCodes(keptCodes) {
		keptSet[code] = struct{}{}
	}
	missing := make([]string, 0)
	for _, code := range normalizeSubscriptionTargetCodes(targetCodes) {
		if _, exists := keptSet[code]; exists {
			continue
		}
		missing = append(missing, code)
	}
	sort.Strings(missing)
	return missing
}

func resolveSubscriptionRecordCode(record map[string]any, index int) string {
	candidates := []string{
		strings.TrimSpace(fmt.Sprint(record["filmCode"])),
		strings.TrimSpace(fmt.Sprint(record["code"])),
		strings.TrimSpace(fmt.Sprint(record["title"])),
		strings.TrimSpace(fmt.Sprint(record["sourceLink"])),
	}
	for _, candidate := range candidates {
		if extracted := crawlidentity.ExtractFilmID(candidate); extracted != "" {
			return extracted
		}
		if normalized := normalizeSubscriptionStandaloneCode(candidate); normalized != "" {
			return normalized
		}
	}
	return fmt.Sprintf("record-%d", index)
}

func normalizeSubscriptionStandaloneCode(candidate string) string {
	trimmed := strings.TrimSpace(candidate)
	if trimmed == "" {
		return ""
	}
	normalized := crawlidentity.NormalizeFilmID(trimmed)
	if normalized == "" {
		return ""
	}
	// NormalizeFilmID is intentionally permissive and returns a cleaned string
	// even for full titles. Only accept it here when the input was already a
	// standalone code-like token; full titles must go through ExtractFilmID.
	if strings.ContainsAny(strings.TrimSpace(normalized), " \t\r\n") {
		return ""
	}
	if strings.Count(normalized, "-") != 1 {
		return ""
	}
	return normalized
}

func readRecordMagnetLines(record map[string]any) []string {
	result := make([]string, 0)
	rawMagnet := strings.TrimSpace(fmt.Sprint(record["magnet"]))
	if rawMagnet != "" && !strings.EqualFold(rawMagnet, "<nil>") {
		for _, line := range strings.Split(rawMagnet, "\n") {
			trimmed := strings.TrimSpace(line)
			if trimmed != "" {
				result = append(result, trimmed)
			}
		}
	}
	if rawLinks, ok := record["magnetLinks"].([]any); ok {
		for _, item := range rawLinks {
			linkMap, ok := item.(map[string]any)
			if !ok {
				continue
			}
			link := strings.TrimSpace(fmt.Sprint(linkMap["link"]))
			if link != "" && !strings.EqualFold(link, "<nil>") {
				result = append(result, link)
			}
		}
	}
	return result
}
