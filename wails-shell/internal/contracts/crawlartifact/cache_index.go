package crawlartifact

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"
)

const (
	CrawlCacheIndexFile = "crawl-cache-index.json"
)

// CacheSnapshot is the lightweight internal crawl snapshot index entry shared
// by crawler, organizer, and subscription preload flows.
//
// This is intentionally smaller than filmData.json and organizer-codes.json:
// it exists so UI selectors and cross-module preload logic can list "which
// actress/result snapshots do we currently remember?" without reopening large
// artifacts or depending on live runtime state.
type CacheSnapshot struct {
	SchemaVersion      int    `json:"schemaVersion"`
	CacheKey           string `json:"cacheKey"`
	Source             string `json:"source"`
	ActressName        string `json:"actressName,omitempty"`
	CrawlURL           string `json:"crawlUrl,omitempty"`
	SiteBase           string `json:"siteBase,omitempty"`
	OutputDir          string `json:"outputDir"`
	FilmDataPath       string `json:"filmDataPath,omitempty"`
	CrawlProfilePath   string `json:"crawlProfilePath,omitempty"`
	OrganizerCodesPath string `json:"organizerCodesPath,omitempty"`
	TargetCount        int    `json:"targetCount"`
	CompletedCount     int    `json:"completedCount"`
	ItemsPerPage       int    `json:"itemsPerPage,omitempty"`
	TotalPages         int    `json:"totalPages,omitempty"`
	UpdatedAt          string `json:"updatedAt,omitempty"`
}

// CacheIndexPath returns the shared internal snapshot-index path.
func CacheIndexPath(userDataDir string) string {
	normalizedUserData := NormalizeRootPath(userDataDir)
	if normalizedUserData == "" {
		return ""
	}
	return filepath.Join(normalizedUserData, "crawl-artifacts", CrawlCacheIndexFile)
}

// InferUserDataDirFromArtifactPath reconstructs the app-managed user-data root
// from one internal artifact path when the writer only knows where the
// redirected crawl-profile.json was written.
func InferUserDataDirFromArtifactPath(artifactPath string) string {
	normalizedPath := NormalizeRootPath(artifactPath)
	if normalizedPath == "" {
		return ""
	}

	artifactDir := filepath.Dir(normalizedPath)
	parent := filepath.Dir(artifactDir)
	if strings.EqualFold(filepath.Base(parent), "crawl-artifacts") {
		return filepath.Dir(parent)
	}
	return ""
}

// BuildCacheSnapshot shapes one stable cache entry from the shared crawl
// artifacts that were just written.
func BuildCacheSnapshot(paths CrawlOutputPaths, profile CrawlProfileArtifact, source string) CacheSnapshot {
	return CacheSnapshot{
		SchemaVersion:      CurrentSchemaVersion,
		CacheKey:           stableOutputDirKey(paths.OutputDir),
		Source:             strings.TrimSpace(source),
		ActressName:        strings.TrimSpace(profile.ActressName),
		CrawlURL:           strings.TrimSpace(profile.CrawlURL),
		SiteBase:           strings.TrimSpace(profile.SiteBase),
		OutputDir:          strings.TrimSpace(paths.OutputDir),
		FilmDataPath:       strings.TrimSpace(paths.FilmDataPath),
		CrawlProfilePath:   strings.TrimSpace(paths.CrawlProfilePath),
		OrganizerCodesPath: strings.TrimSpace(paths.OrganizerCodesPath),
		TargetCount:        profile.TargetCount,
		CompletedCount:     profile.CompletedCount,
		ItemsPerPage:       profile.ItemsPerPage,
		TotalPages:         profile.TotalPages,
		UpdatedAt:          strings.TrimSpace(profile.CompletedAt),
	}
}

// ListCacheSnapshots reads the internal crawl snapshot index and returns it in
// newest-first order for UI selectors and preload helpers.
func ListCacheSnapshots(userDataDir string) ([]CacheSnapshot, error) {
	indexPath := CacheIndexPath(userDataDir)
	if indexPath == "" {
		return []CacheSnapshot{}, nil
	}

	payload, err := os.ReadFile(indexPath)
	if err != nil {
		if os.IsNotExist(err) {
			return []CacheSnapshot{}, nil
		}
		return nil, err
	}

	items := []CacheSnapshot{}
	if err := json.Unmarshal(payload, &items); err != nil {
		return []CacheSnapshot{}, nil
	}
	normalizeCacheSnapshots(items)
	return items, nil
}

// UpsertCacheSnapshot keeps the shared snapshot index aligned with the latest
// persisted crawl artifacts.
func UpsertCacheSnapshot(userDataDir string, snapshot CacheSnapshot) error {
	indexPath := CacheIndexPath(userDataDir)
	if indexPath == "" {
		return nil
	}

	items, err := ListCacheSnapshots(userDataDir)
	if err != nil {
		return err
	}

	snapshot.SchemaVersion = CurrentSchemaVersion
	if strings.TrimSpace(snapshot.CacheKey) == "" {
		snapshot.CacheKey = stableOutputDirKey(snapshot.OutputDir)
	}
	if snapshot.CacheKey == "" {
		return nil
	}

	filtered := make([]CacheSnapshot, 0, len(items)+1)
	for _, item := range items {
		if strings.TrimSpace(item.CacheKey) == strings.TrimSpace(snapshot.CacheKey) {
			continue
		}
		filtered = append(filtered, item)
	}
	filtered = append(filtered, snapshot)
	normalizeCacheSnapshots(filtered)

	if err := os.MkdirAll(filepath.Dir(indexPath), 0o755); err != nil {
		return err
	}

	payload, err := json.MarshalIndent(filtered, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(indexPath, payload, 0o644)
}

// RemoveCacheSnapshot deletes one snapshot entry and its internal artifact
// directory. Visible user output files are left untouched.
func RemoveCacheSnapshot(userDataDir string, cacheKey string) (int, error) {
	items, err := ListCacheSnapshots(userDataDir)
	if err != nil {
		return 0, err
	}

	trimmedKey := strings.TrimSpace(cacheKey)
	if trimmedKey == "" {
		return 0, nil
	}

	removed := 0
	filtered := make([]CacheSnapshot, 0, len(items))
	for _, item := range items {
		if strings.TrimSpace(item.CacheKey) == trimmedKey {
			removed++
			if root := ResolveInternalArtifactRoot(userDataDir, item.OutputDir); root != "" {
				_ = os.RemoveAll(root)
			}
			continue
		}
		filtered = append(filtered, item)
	}

	if err := writeCacheIndex(userDataDir, filtered); err != nil {
		return 0, err
	}
	return removed, nil
}

// ClearAllCacheSnapshots removes the whole internal snapshot index and all
// per-output internal artifact directories, but does not touch user-chosen
// visible output folders.
func ClearAllCacheSnapshots(userDataDir string) (int, error) {
	items, err := ListCacheSnapshots(userDataDir)
	if err != nil {
		return 0, err
	}

	artifactRoot := filepath.Join(NormalizeRootPath(userDataDir), "crawl-artifacts")
	if strings.TrimSpace(artifactRoot) != "" {
		entries, readErr := os.ReadDir(artifactRoot)
		if readErr == nil {
			for _, entry := range entries {
				if strings.EqualFold(entry.Name(), CrawlCacheIndexFile) {
					continue
				}
				_ = os.RemoveAll(filepath.Join(artifactRoot, entry.Name()))
			}
		}
	}

	if err := writeCacheIndex(userDataDir, []CacheSnapshot{}); err != nil {
		return 0, err
	}
	return len(items), nil
}

func writeCacheIndex(userDataDir string, items []CacheSnapshot) error {
	indexPath := CacheIndexPath(userDataDir)
	if indexPath == "" {
		return nil
	}
	normalizeCacheSnapshots(items)
	if err := os.MkdirAll(filepath.Dir(indexPath), 0o755); err != nil {
		return err
	}

	payload, err := json.MarshalIndent(items, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(indexPath, payload, 0o644)
}

func normalizeCacheSnapshots(items []CacheSnapshot) {
	for index := range items {
		items[index].SchemaVersion = CurrentSchemaVersion
		items[index].CacheKey = strings.TrimSpace(items[index].CacheKey)
		if items[index].CacheKey == "" {
			items[index].CacheKey = stableOutputDirKey(items[index].OutputDir)
		}
		items[index].Source = strings.TrimSpace(items[index].Source)
		items[index].ActressName = strings.TrimSpace(items[index].ActressName)
		items[index].CrawlURL = strings.TrimSpace(items[index].CrawlURL)
		items[index].SiteBase = strings.TrimSpace(items[index].SiteBase)
		items[index].OutputDir = NormalizeRootPath(items[index].OutputDir)
		items[index].FilmDataPath = strings.TrimSpace(items[index].FilmDataPath)
		items[index].CrawlProfilePath = strings.TrimSpace(items[index].CrawlProfilePath)
		items[index].OrganizerCodesPath = strings.TrimSpace(items[index].OrganizerCodesPath)
		items[index].UpdatedAt = strings.TrimSpace(items[index].UpdatedAt)
		if items[index].CompletedCount < 0 {
			items[index].CompletedCount = 0
		}
		if items[index].TargetCount < 0 {
			items[index].TargetCount = 0
		}
		if items[index].ItemsPerPage < 0 {
			items[index].ItemsPerPage = 0
		}
		if items[index].TotalPages < 0 {
			items[index].TotalPages = 0
		}
	}

	sort.SliceStable(items, func(i int, j int) bool {
		if items[i].UpdatedAt != items[j].UpdatedAt {
			return items[i].UpdatedAt > items[j].UpdatedAt
		}
		if items[i].ActressName != items[j].ActressName {
			return items[i].ActressName < items[j].ActressName
		}
		return items[i].CacheKey < items[j].CacheKey
	})
}

// CacheSnapshotLabel returns one compact UI-facing label for selectors.
func CacheSnapshotLabel(snapshot CacheSnapshot) string {
	name := strings.TrimSpace(snapshot.ActressName)
	if name == "" {
		name = filepath.Base(strings.TrimSpace(snapshot.OutputDir))
	}
	if name == "" {
		name = "未命名快照"
	}
	if updated := strings.TrimSpace(snapshot.UpdatedAt); updated != "" {
		return fmt.Sprintf("%s | %s | %d 部", name, updated, snapshot.CompletedCount)
	}
	return fmt.Sprintf("%s | %d 部", name, snapshot.CompletedCount)
}
