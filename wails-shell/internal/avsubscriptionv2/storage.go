package avsubscriptionv2

import (
	"crypto/sha1"
	"encoding/hex"
	"encoding/json"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"time"

	"jav-auto-wails-shell/internal/crawlfetch"
	runtimepaths "jav-auto-wails-shell/internal/runtime"
)

const (
	storageDirName  = "subscriptions-v2"
	storageFileName = "av-subscriptions-v2.json"
)

// Service is the AV-subscription V2 facade.
//
// The service exposes one stable surface for:
// 1) import/manual baseline creation
// 2) refresh diff detection
// 3) persisted state mutation
type Service struct {
	paths runtimepaths.Paths
	fetch *crawlfetch.Service
}

func NewService(paths runtimepaths.Paths, fetch *crawlfetch.Service) *Service {
	return &Service{paths: paths, fetch: fetch}
}

func (s *Service) storagePath() string {
	return filepath.Join(s.paths.UserData, storageDirName, storageFileName)
}

func (s *Service) load() ([]Subscription, error) {
	payload, err := os.ReadFile(s.storagePath())
	if err != nil {
		if os.IsNotExist(err) {
			return []Subscription{}, nil
		}
		return nil, err
	}

	items := []Subscription{}
	if err := json.Unmarshal(payload, &items); err != nil {
		return []Subscription{}, nil
	}

	now := time.Now().Format(time.RFC3339)
	normalized := make([]Subscription, 0, len(items))
	for _, item := range items {
		normalized = append(normalized, normalizeSubscription(item, now))
	}
	sortSubscriptions(normalized)
	return normalized, nil
}

func (s *Service) save(items []Subscription) error {
	if err := os.MkdirAll(filepath.Dir(s.storagePath()), 0o755); err != nil {
		return err
	}

	payload, err := json.MarshalIndent(items, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(s.storagePath(), payload, 0o644)
}

func (s *Service) List() ([]Subscription, error) {
	return s.load()
}

func (s *Service) Upsert(next Subscription) (Subscription, error) {
	items, err := s.load()
	if err != nil {
		return Subscription{}, err
	}

	now := time.Now().Format(time.RFC3339)
	next = normalizeSubscription(next, now)
	index := findSubscriptionIndex(items, next)
	if index >= 0 {
		current := items[index]
		next = mergeSubscriptionState(current, next, now)
		items[index] = normalizeSubscription(next, now)
	} else {
		items = append(items, normalizeSubscription(next, now))
	}

	sortSubscriptions(items)
	if err := s.save(items); err != nil {
		return Subscription{}, err
	}

	savedIndex := findSubscriptionIndex(items, next)
	if savedIndex >= 0 {
		return items[savedIndex], nil
	}
	return next, nil
}

func (s *Service) ReplaceAll(items []Subscription) error {
	now := time.Now().Format(time.RFC3339)
	normalized := make([]Subscription, 0, len(items))
	for _, item := range items {
		normalized = append(normalized, normalizeSubscription(item, now))
	}
	sortSubscriptions(normalized)
	return s.save(normalized)
}

func (s *Service) Remove(id string) ([]Subscription, error) {
	items, err := s.load()
	if err != nil {
		return nil, err
	}

	filtered := make([]Subscription, 0, len(items))
	for _, item := range items {
		if item.ID == strings.TrimSpace(id) {
			continue
		}
		filtered = append(filtered, item)
	}
	sortSubscriptions(filtered)
	if err := s.save(filtered); err != nil {
		return nil, err
	}
	return filtered, nil
}

func (s *Service) Clear() (int, error) {
	items, err := s.load()
	if err != nil {
		return 0, err
	}
	if err := s.save([]Subscription{}); err != nil {
		return 0, err
	}
	return len(items), nil
}

func (s *Service) MarkSynced(id string) (Subscription, error) {
	items, err := s.load()
	if err != nil {
		return Subscription{}, err
	}

	now := time.Now().Format(time.RFC3339)
	for index, item := range items {
		if item.ID != strings.TrimSpace(id) {
			continue
		}
		merged := append([]string{}, item.BaselineCodes...)
		merged = append(merged, item.PendingCodes...)
		item.BaselineCodes = normalizeCodes(merged)
		item.BaselineCount = len(item.BaselineCodes)
		item.CurrentObservedCount = maxInt(item.CurrentObservedCount, item.BaselineCount)
		item.PendingCodes = []string{}
		item.PendingCount = 0
		item.LastCrawlAt = now
		item.LastUpdatedAt = now
		item.LastError = ""
		item.Status = statusIdle
		items[index] = normalizeSubscription(item, now)
		sortSubscriptions(items)
		if err := s.save(items); err != nil {
			return Subscription{}, err
		}
		return items[findSubscriptionIndexByID(items, item.ID)], nil
	}

	return Subscription{}, os.ErrNotExist
}

// Patch applies partial updates to a subscription (e.g. correcting baseline count or URL).
func (s *Service) Patch(id string, patch map[string]any) (Subscription, error) {
	items, err := s.load()
	if err != nil {
		return Subscription{}, err
	}

	now := time.Now().Format(time.RFC3339)
	for index, item := range items {
		if item.ID != strings.TrimSpace(id) {
			continue
		}
		if v, ok := patch["actressName"].(string); ok && strings.TrimSpace(v) != "" {
			item.ActressName = strings.TrimSpace(v)
		}
		if v, ok := patch["crawlUrl"].(string); ok && strings.TrimSpace(v) != "" {
			item.CrawlURL = strings.TrimSpace(v)
		}
		if v, ok := patch["preferredBase"].(string); ok && strings.TrimSpace(v) != "" {
			item.PreferredBase = strings.TrimSpace(v)
		}
		if v, ok := patch["itemsPerPage"]; ok {
			if n := toInt(v); n > 0 {
				item.ItemsPerPage = n
			}
		}
		if v, ok := patch["totalPages"]; ok {
			if n := toInt(v); n > 0 {
				item.TotalPages = n
			}
		}
		if v, ok := patch["preferredOutputDir"].(string); ok {
			item.PreferredOutputDir = strings.TrimSpace(v)
		}
		item.LastUpdatedAt = now
		items[index] = normalizeSubscription(item, now)
		sortSubscriptions(items)
		if err := s.save(items); err != nil {
			return Subscription{}, err
		}
		return items[findSubscriptionIndexByID(items, item.ID)], nil
	}

	return Subscription{}, os.ErrNotExist
}

func toInt(v any) int {
	switch val := v.(type) {
	case int:
		return val
	case float64:
		return int(val)
	case float32:
		return int(val)
	case int64:
		return int(val)
	default:
		return 0
	}
}

func (s *Service) MarkCrawlCompleted(id string, outputDir string) (Subscription, error) {
	items, err := s.load()
	if err != nil {
		return Subscription{}, err
	}

	nextBaseline := extractCodesFromOutput(outputDir)
	now := time.Now().Format(time.RFC3339)
	for index, item := range items {
		if item.ID != strings.TrimSpace(id) {
			continue
		}
		merged := append([]string{}, item.BaselineCodes...)
		merged = append(merged, nextBaseline...)
		item.BaselineCodes = normalizeCodes(merged)
		item.BaselineCount = len(item.BaselineCodes)
		item.CurrentObservedCount = maxInt(item.CurrentObservedCount, item.BaselineCount)
		item.PendingCodes = diffCodes(item.PendingCodes, nextBaseline)
		item.PendingCount = len(item.PendingCodes)
		item.LastCrawlAt = now
		item.LastUpdatedAt = now
		item.LastCrawlOutputDir = strings.TrimSpace(outputDir)
		item.LastError = ""
		if item.PendingCount > 0 {
			item.Status = statusUpdated
		} else {
			item.Status = statusIdle
		}
		items[index] = normalizeSubscription(item, now)
		sortSubscriptions(items)
		if err := s.save(items); err != nil {
			return Subscription{}, err
		}
		return items[findSubscriptionIndexByID(items, item.ID)], nil
	}

	return Subscription{}, os.ErrNotExist
}

func buildSubscriptionIdentityHash(actressName string, crawlURL string) string {
	key := normalizeName(actressName)
	if key == "" {
		key = strings.ToLower(strings.TrimSpace(crawlURL))
	}
	if key == "" {
		key = time.Now().UTC().Format(time.RFC3339Nano)
	}
	sum := sha1.Sum([]byte(key))
	return hex.EncodeToString(sum[:8])
}

func sortSubscriptions(items []Subscription) {
	sort.SliceStable(items, func(i int, j int) bool {
		if items[i].PendingCount != items[j].PendingCount {
			return items[i].PendingCount > items[j].PendingCount
		}
		if strings.TrimSpace(items[i].LastUpdatedAt) != strings.TrimSpace(items[j].LastUpdatedAt) {
			return strings.TrimSpace(items[i].LastUpdatedAt) > strings.TrimSpace(items[j].LastUpdatedAt)
		}
		if normalizeName(items[i].ActressName) != normalizeName(items[j].ActressName) {
			return normalizeName(items[i].ActressName) < normalizeName(items[j].ActressName)
		}
		return items[i].ID < items[j].ID
	})
}

func normalizeSubscription(item Subscription, now string) Subscription {
	item.ID = strings.TrimSpace(item.ID)
	item.ActressName = strings.TrimSpace(item.ActressName)
	item.CrawlURL = strings.TrimSpace(item.CrawlURL)
	item.PreferredBase = strings.TrimSpace(item.PreferredBase)
	item.SourceType = normalizeSourceType(item.SourceType)
	item.BaselineCodes = normalizeCodes(item.BaselineCodes)
	item.PendingCodes = normalizeCodes(item.PendingCodes)
	item.BaselineCount = len(item.BaselineCodes)
	item.PendingCodes = diffCodes(item.PendingCodes, item.BaselineCodes)
	item.PendingCount = len(item.PendingCodes)
	item.ItemsPerPage = maxInt(defaultItemsPerPage, item.ItemsPerPage)
	if item.SourceType == sourceTypeCrawlImport {
		if item.CurrentObservedCount < item.BaselineCount {
			item.CurrentObservedCount = item.BaselineCount
		}
		if item.CurrentObservedCount < item.BaselineCount+item.PendingCount {
			item.CurrentObservedCount = item.BaselineCount + item.PendingCount
		}
	} else {
		if item.ManualDeclaredTotal > 0 && item.CurrentObservedCount < item.ManualDeclaredTotal {
			item.CurrentObservedCount = item.ManualDeclaredTotal
		}
	}
	if item.TotalPages <= 0 {
		item.TotalPages = calcPages(maxInt(item.CurrentObservedCount, item.BaselineCount), item.ItemsPerPage)
	}
	item.LatestItemURL = strings.TrimSpace(item.LatestItemURL)
	item.PreferredOutputDir = strings.TrimSpace(item.PreferredOutputDir)
	item.LastCrawlOutputDir = strings.TrimSpace(item.LastCrawlOutputDir)
	item.CreatedAt = ensureTimestamp(item.CreatedAt, now)
	item.BaselineSnapshotAt = ensureTimestamp(item.BaselineSnapshotAt, now)
	item.LastUpdatedAt = ensureTimestamp(item.LastUpdatedAt, now)
	item.LastCheckedAt = strings.TrimSpace(item.LastCheckedAt)
	item.LastCrawlAt = strings.TrimSpace(item.LastCrawlAt)
	item.LastError = strings.TrimSpace(item.LastError)
	if item.ID == "" {
		item.ID = buildSubscriptionIdentityHash(item.ActressName, item.CrawlURL)
	}
	if item.PendingCount > 0 {
		item.Status = statusUpdated
	} else if item.LastError != "" {
		item.Status = statusError
	} else if strings.TrimSpace(item.Status) == statusRunning {
		item.Status = statusRunning
	} else {
		item.Status = statusIdle
	}
	return item
}

func normalizeSourceType(value string) string {
	switch strings.TrimSpace(strings.ToLower(value)) {
	case sourceTypeCrawlImport:
		return sourceTypeCrawlImport
	default:
		return sourceTypeManual
	}
}

func ensureTimestamp(value string, fallback string) string {
	trimmed := strings.TrimSpace(value)
	if trimmed != "" {
		return trimmed
	}
	return strings.TrimSpace(fallback)
}

func mergeSubscriptionState(current Subscription, next Subscription, now string) Subscription {
	if next.ID == "" {
		next.ID = current.ID
	}
	if next.CrawlURL == "" {
		next.CrawlURL = current.CrawlURL
	}
	if next.PreferredBase == "" {
		next.PreferredBase = current.PreferredBase
	}
	if next.PreferredOutputDir == "" {
		next.PreferredOutputDir = current.PreferredOutputDir
	}
	if next.CreatedAt == "" {
		next.CreatedAt = current.CreatedAt
	}
	if next.BaselineSnapshotAt == "" {
		next.BaselineSnapshotAt = current.BaselineSnapshotAt
	}
	if next.LastCrawlAt == "" {
		next.LastCrawlAt = current.LastCrawlAt
	}
	if next.LastCrawlOutputDir == "" {
		next.LastCrawlOutputDir = current.LastCrawlOutputDir
	}
	if next.ManualDeclaredTotal == 0 {
		next.ManualDeclaredTotal = current.ManualDeclaredTotal
	}
	if next.ManualDeclaredPages == 0 {
		next.ManualDeclaredPages = current.ManualDeclaredPages
	}
	if next.ManualDeclaredPerPage == 0 {
		next.ManualDeclaredPerPage = current.ManualDeclaredPerPage
	}
	if len(next.BaselineCodes) == 0 {
		next.BaselineCodes = current.BaselineCodes
	}
	if len(next.PendingCodes) == 0 && len(current.PendingCodes) > 0 {
		next.PendingCodes = current.PendingCodes
	}
	if next.CurrentObservedCount < current.CurrentObservedCount {
		next.CurrentObservedCount = current.CurrentObservedCount
	}
	if next.LastCheckedAt == "" {
		next.LastCheckedAt = current.LastCheckedAt
	}
	if next.LastError == "" {
		next.LastError = current.LastError
	}
	next.LastUpdatedAt = now
	return next
}

func findSubscriptionIndex(items []Subscription, next Subscription) int {
	if strings.TrimSpace(next.ID) != "" {
		if index := findSubscriptionIndexByID(items, next.ID); index >= 0 {
			return index
		}
	}
	nextName := normalizeName(next.ActressName)
	nextURL := strings.ToLower(strings.TrimSpace(next.CrawlURL))
	for index, item := range items {
		if nextName != "" && normalizeName(item.ActressName) == nextName {
			return index
		}
		if nextURL != "" && strings.ToLower(strings.TrimSpace(item.CrawlURL)) == nextURL {
			return index
		}
	}
	return -1
}

func findSubscriptionIndexByID(items []Subscription, id string) int {
	for index, item := range items {
		if item.ID == strings.TrimSpace(id) {
			return index
		}
	}
	return -1
}

