// Package crawloutput owns the persisted crawler artifacts written during and
// after a run. If filmData.json or magnet TXT output is wrong, start here
// before inspecting bridge/UI code.
//
// Boundary:
// - this package writes persisted crawl artifacts and derived snapshots
// - it does not decide crawl execution order, review panel semantics, or UI text
//
// Ownership summary:
// 1) persist filmData, magnet output, and derived crawl artifact snapshots
// 2) apply output-specific filtering/write rules without owning crawl flow
// 3) keep artifact storage semantics separate from runner and renderer code
//
// File map for maintainers:
// 1) persisted artifact DTOs and metadata contracts
// 2) writer bootstrap / on-disk preload
// 3) filmData mutation + dedupe path
// 4) flush/write helpers for filmData, magnet txt, and crawl-profile artifacts
package crawloutput

import (
	"encoding/json"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"sync"

	"jav-auto-wails-shell/internal/common"
	"jav-auto-wails-shell/internal/contracts/crawlartifact"
)

type FilmData struct {
	Title       string   `json:"title"`
	SourceLink  string   `json:"sourceLink"`
	Category    []string `json:"category,omitempty"`
	Actress     []string `json:"actress,omitempty"`
	CoverImage  string   `json:"coverImage,omitempty"`
	MagnetLinks []struct {
		Link string `json:"link"`
		Size string `json:"size"`
	} `json:"magnetLinks,omitempty"`
	Magnet                 string `json:"magnet,omitempty"`
	ActressCount           int    `json:"actressCount,omitempty"`
	FilteredByActressCount bool   `json:"filteredByActressCount,omitempty"`
	FilterRemark           string `json:"filterRemark,omitempty"`
}

func (f FilmData) IdentityKey() string {
	id := extractFilmID(f.Title)
	if id == "" {
		id = normalizeSourceLink(f.SourceLink)
	}
	return strings.ToLower(id)
}

type Writer struct {
	outputDir     string
	artifactPaths crawlartifact.CrawlOutputPaths
	mu            sync.Mutex
	records       []FilmData
	filmIDIndex   map[string]int
	dirty         bool
	metadataDirty bool
	writeCount    int
	lastFlush     int
	flushEvery    int
	metadata      ArtifactMetadata
}

// ArtifactMetadata captures the minimum stable crawl context needed to derive
// post-run artifacts without coupling organizer/subscription to the runner.
// Keep this intentionally smaller than runner state: it is the persisted handoff
// context, not a serialization of the whole crawl runtime.
type ArtifactMetadata struct {
	RunID          string
	CompletedAt    string
	ActressName    string
	CrawlURL       string
	TargetCount    int
	CompletedCount int
	ItemsPerPage   int
	TotalPages     int
	SiteBase       string
}

// NewWriter owns the artifact directory and existing filmData preload. Keep
// artifact bootstrap centralized here so flush/write behavior stays consistent
// across full runs, restore flows, and retries.
func NewWriter(outputDir string) (*Writer, error) {
	return NewWriterWithArtifactPaths(outputDir, crawlartifact.ResolveCrawlOutputPaths(outputDir))
}

// NewWriterWithArtifactPaths allows the crawler to keep user-visible deliverables
// in the chosen output directory while redirecting bridge-only artifacts such as
// crawl-profile.json / organizer-codes.json to an internal cache location.
func NewWriterWithArtifactPaths(outputDir string, artifactPaths crawlartifact.CrawlOutputPaths) (*Writer, error) {
	if err := os.MkdirAll(outputDir, 0755); err != nil {
		return nil, err
	}
	if strings.TrimSpace(artifactPaths.OutputDir) == "" {
		artifactPaths = crawlartifact.ResolveCrawlOutputPaths(outputDir)
	}
	if artifactDir := filepath.Dir(strings.TrimSpace(artifactPaths.CrawlProfilePath)); artifactDir != "" {
		if err := os.MkdirAll(artifactDir, 0755); err != nil {
			return nil, err
		}
	}
	if artifactDir := filepath.Dir(strings.TrimSpace(artifactPaths.OrganizerCodesPath)); artifactDir != "" {
		if err := os.MkdirAll(artifactDir, 0755); err != nil {
			return nil, err
		}
	}
	w := &Writer{
		outputDir:     outputDir,
		artifactPaths: artifactPaths,
		filmIDIndex:   map[string]int{},
		flushEvery:    100,
	}
	w.loadFromDisk()
	return w, nil
}

func (w *Writer) loadFromDisk() {
	path := crawlartifact.ResolveCrawlOutputPaths(w.outputDir).FilmDataPath
	if strings.TrimSpace(path) == "" {
		return
	}
	data, err := os.ReadFile(path)
	if err != nil {
		return
	}
	var records []FilmData
	if err := json.Unmarshal(data, &records); err != nil {
		return
	}
	w.mu.Lock()
	defer w.mu.Unlock()
	w.records = records
	for i, r := range records {
		key := r.IdentityKey()
		if key != "" {
			w.filmIDIndex[key] = i
		}
	}
}

// WriteFilmData is the one mutation path for filmData records. Deduplication,
// actress-filter flags, and magnet enrichment should converge here before disk
// flush logic runs.
func (w *Writer) WriteFilmData(data FilmData) (bool, error) {
	w.mu.Lock()
	defer w.mu.Unlock()

	key := data.IdentityKey()
	if key == "" {
		return false, nil
	}

	if idx, exists := w.filmIDIndex[key]; exists {
		existing := w.records[idx]
		changed := false
		if data.ActressCount > 0 && existing.ActressCount != data.ActressCount {
			w.records[idx].ActressCount = data.ActressCount
			changed = true
		}
		if existing.FilteredByActressCount != data.FilteredByActressCount {
			w.records[idx].FilteredByActressCount = data.FilteredByActressCount
			changed = true
		}
		if existing.FilterRemark != data.FilterRemark {
			w.records[idx].FilterRemark = data.FilterRemark
			changed = true
		}
		if existing.Magnet == "" && data.Magnet != "" {
			w.records[idx].Magnet = data.Magnet
			w.records[idx].MagnetLinks = data.MagnetLinks
			changed = true
		}
		if changed {
			w.dirty = true
			return true, nil
		}
		return false, nil
	}

	w.records = append(w.records, data)
	w.filmIDIndex[key] = len(w.records) - 1
	w.dirty = true
	w.writeCount++

	needFlush := w.flushEvery > 0 && w.writeCount-w.lastFlush >= w.flushEvery
	defer func() {
		if needFlush {
			_ = w.flushLocked()
			w.lastFlush = w.writeCount
		}
	}()

	return true, nil
}

func (w *Writer) Flush() error {
	w.mu.Lock()
	defer w.mu.Unlock()
	return w.flushLocked()
}

// SetArtifactMetadata updates the post-crawl metadata written alongside
// filmData.json. Callers may invoke it multiple times as final counters become
// clearer near task completion.
func (w *Writer) SetArtifactMetadata(metadata ArtifactMetadata) {
	w.mu.Lock()
	defer w.mu.Unlock()
	if w.metadata == metadata {
		return
	}
	w.metadata = metadata
	w.metadataDirty = true
}

// flushLocked persists the core artifacts plus derived cross-module handoff
// files. If filmData, magnet-links, crawl-profile, and organizer-codes disagree,
// inspect this write boundary first.
func (w *Writer) flushLocked() error {
	if !w.dirty && !w.metadataDirty {
		return nil
	}

	runPaths := crawlartifact.ResolveCrawlRunPaths(w.outputDir)
	jsonPath := runPaths.FilmDataPath
	sortedRecords := make([]FilmData, len(w.records))
	copy(sortedRecords, w.records)
	sort.Slice(sortedRecords, func(i, j int) bool {
		return strings.ToLower(sortedRecords[i].Title) < strings.ToLower(sortedRecords[j].Title)
	})

	if w.dirty {
		jsonBytes, err := json.MarshalIndent(sortedRecords, "", "  ")
		if err != nil {
			return err
		}
		if err := os.WriteFile(jsonPath, jsonBytes, 0644); err != nil {
			return err
		}
	}

	var magnetLines []string
	filteredCodes := make([]string, 0)
	filteredSeen := map[string]struct{}{}
	seen := map[string]struct{}{}
	for _, record := range sortedRecords {
		if record.FilteredByActressCount {
			code := extractFilmID(record.Title)
			if code == "" {
				code = extractFilmID(record.SourceLink)
			}
			code = strings.TrimSpace(strings.ToUpper(code))
			if code != "" {
				if _, exists := filteredSeen[code]; !exists {
					filteredSeen[code] = struct{}{}
					filteredCodes = append(filteredCodes, code)
				}
			}
			continue
		}
		if record.Magnet == "" {
			continue
		}
		for _, link := range strings.Split(record.Magnet, "\n") {
			link = strings.TrimSpace(link)
			if link == "" {
				continue
			}
			lower := strings.ToLower(link)
			if _, ok := seen[lower]; ok {
				continue
			}
			seen[lower] = struct{}{}
			magnetLines = append(magnetLines, link)
		}
	}

	magnetPath := runPaths.MagnetPath
	if w.dirty {
		if err := os.WriteFile(magnetPath, []byte(strings.Join(magnetLines, "\r\n")), 0644); err != nil {
			return err
		}
	}

	// Filtered-code export is a user-facing review aid. Keep it derived from the
	// persisted filmData snapshot so UI state, live logs, and final files stay in sync.
	filteredCodesPath := runPaths.FilteredCodesPath
	if len(filteredCodes) == 0 {
		_ = os.Remove(filteredCodesPath)
	} else if w.dirty {
		sort.Strings(filteredCodes)
		if err := common.WriteUTF8TextFile(filteredCodesPath, strings.Join(filteredCodes, "、")+"\r\n"); err != nil {
			return err
		}
	}

	if err := w.writeDerivedArtifactsLocked(sortedRecords); err != nil {
		return err
	}

	w.dirty = false
	w.metadataDirty = false
	return nil
}

func (w *Writer) RecordCount() int {
	w.mu.Lock()
	defer w.mu.Unlock()
	return len(w.records)
}

func (w *Writer) WriteUnfinishedReport(lines []string) error {
	path := crawlartifact.DefaultUnfinishedReportPath(w.outputDir)
	if len(lines) == 0 {
		_ = os.Remove(path)
		return nil
	}
	seen := map[string]struct{}{}
	unique := make([]string, 0, len(lines))
	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if trimmed == "" {
			continue
		}
		if _, ok := seen[trimmed]; ok {
			continue
		}
		seen[trimmed] = struct{}{}
		unique = append(unique, trimmed)
	}
	return common.WriteUTF8TextFile(path, strings.Join(unique, "\r\n")+"\r\n")
}

func (w *Writer) CleanupLegacyArtifacts() {
	artifacts := []string{
		filepath.Join(w.outputDir, "task-state.json"),
		filepath.Join(w.outputDir, "validation-report.json"),
	}
	for _, target := range artifacts {
		_ = os.Remove(target)
	}
}

func extractFilmID(value string) string {
	value = strings.TrimSpace(value)
	if value == "" {
		return ""
	}
	upper := strings.ToUpper(value)
	dashIdx := strings.Index(upper, "-")
	if dashIdx <= 0 || dashIdx >= len(upper)-1 {
		return ""
	}
	prefix := upper[:dashIdx]
	suffix := upper[dashIdx+1:]

	hasLetter := strings.ContainsAny(prefix, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
	if !hasLetter {
		return ""
	}
	if len(suffix) == 0 || suffix[0] < '0' || suffix[0] > '9' {
		return ""
	}
	digitEnd := 0
	for digitEnd < len(suffix) && suffix[digitEnd] >= '0' && suffix[digitEnd] <= '9' {
		digitEnd++
	}
	if digitEnd == 0 {
		return ""
	}
	return prefix + "-" + suffix[:digitEnd]
}

func normalizeSourceLink(link string) string {
	trimmed := strings.TrimRight(strings.TrimSpace(link), "/")
	idx := strings.LastIndex(trimmed, "/")
	if idx >= 0 && idx < len(trimmed)-1 {
		return strings.ToLower(trimmed[idx+1:])
	}
	return strings.ToLower(trimmed)
}

// writeDerivedArtifactsLocked is the handoff point from crawler-owned records to
// cross-module artifacts consumed by organizer and subscription flows.
func (w *Writer) writeDerivedArtifactsLocked(sortedRecords []FilmData) error {
	paths := w.artifactPaths
	if strings.TrimSpace(paths.OutputDir) == "" {
		paths = crawlartifact.ResolveCrawlOutputPaths(w.outputDir)
	}
	if paths.OutputDir == "" {
		return nil
	}

	profile := crawlartifact.CrawlProfileArtifact{
		SchemaVersion:  crawlartifact.CurrentSchemaVersion,
		RunID:          strings.TrimSpace(w.metadata.RunID),
		CompletedAt:    strings.TrimSpace(w.metadata.CompletedAt),
		ActressName:    strings.TrimSpace(w.metadata.ActressName),
		CrawlURL:       strings.TrimSpace(w.metadata.CrawlURL),
		TargetCount:    maxInt(w.metadata.TargetCount, 0),
		CompletedCount: maxInt(completedCountOrRecordCount(w.metadata.CompletedCount, len(sortedRecords)), 0),
		ItemsPerPage:   maxInt(w.metadata.ItemsPerPage, 0),
		TotalPages:     maxInt(w.metadata.TotalPages, 0),
		OutputDir:      paths.OutputDir,
		FilmDataPath:   paths.FilmDataPath,
		SiteBase:       strings.TrimSpace(w.metadata.SiteBase),
	}
	if err := writeJSONFile(paths.CrawlProfilePath, profile); err != nil {
		return err
	}

	codes, codeEntries := buildOrganizerArtifactData(sortedRecords)
	organizerArtifact := crawlartifact.OrganizerCodesArtifact{
		SchemaVersion:   crawlartifact.CurrentSchemaVersion,
		RunID:           profile.RunID,
		CompletedAt:     profile.CompletedAt,
		ActressName:     firstNonEmpty(profile.ActressName, detectPrimaryActressName(sortedRecords)),
		OutputDir:       paths.OutputDir,
		FilmDataPath:    paths.FilmDataPath,
		TotalRecords:    len(sortedRecords),
		UniqueCodeCount: len(codes),
		Codes:           codes,
		CodeEntries:     codeEntries,
	}
	if err := writeJSONFile(paths.OrganizerCodesPath, organizerArtifact); err != nil {
		return err
	}

	userDataDir := crawlartifact.InferUserDataDirFromArtifactPath(paths.CrawlProfilePath)
	if strings.TrimSpace(userDataDir) != "" {
		if err := crawlartifact.UpsertCacheSnapshot(userDataDir, crawlartifact.BuildCacheSnapshot(paths, profile, "crawler")); err != nil {
			return err
		}
	}
	return nil
}

func writeJSONFile(filePath string, value any) error {
	payload, err := json.MarshalIndent(value, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(filePath, payload, 0644)
}

func completedCountOrRecordCount(completedCount int, recordCount int) int {
	if completedCount > 0 {
		return completedCount
	}
	return recordCount
}

// buildOrganizerArtifactData derives the organizer-facing unique-code snapshot
// from persisted crawl records only.
func buildOrganizerArtifactData(records []FilmData) ([]string, []crawlartifact.CodeEntry) {
	codeMap := map[string]*crawlartifact.CodeEntry{}
	for _, record := range records {
		code := extractFilmID(record.Title)
		if code == "" {
			code = extractFilmID(record.SourceLink)
		}
		if code == "" {
			continue
		}

		entry, exists := codeMap[code]
		if !exists {
			entry = &crawlartifact.CodeEntry{
				Code:  code,
				Title: strings.TrimSpace(record.Title),
			}
			codeMap[code] = entry
		}
		if entry.Title == "" {
			entry.Title = strings.TrimSpace(record.Title)
		}

		appendUniqueMagnetEntries(entry, record)
	}

	codes := make([]string, 0, len(codeMap))
	for code := range codeMap {
		codes = append(codes, code)
	}
	sort.Strings(codes)

	codeEntries := make([]crawlartifact.CodeEntry, 0, len(codes))
	for _, code := range codes {
		entry := codeMap[code]
		sort.Slice(entry.Magnets, func(i, j int) bool {
			return strings.ToLower(entry.Magnets[i].Link) < strings.ToLower(entry.Magnets[j].Link)
		})
		codeEntries = append(codeEntries, *entry)
	}
	return codes, codeEntries
}

func appendUniqueMagnetEntries(entry *crawlartifact.CodeEntry, record FilmData) {
	if entry == nil {
		return
	}

	seen := map[string]struct{}{}
	for _, item := range entry.Magnets {
		seen[strings.ToLower(strings.TrimSpace(item.Link))] = struct{}{}
	}

	appendMagnet := func(link string, size string) {
		trimmed := strings.TrimSpace(link)
		if trimmed == "" {
			return
		}
		key := strings.ToLower(trimmed)
		if _, exists := seen[key]; exists {
			return
		}
		seen[key] = struct{}{}
		entry.Magnets = append(entry.Magnets, crawlartifact.MagnetEntry{
			Link: trimmed,
			Size: strings.TrimSpace(size),
		})
	}

	for _, item := range record.MagnetLinks {
		appendMagnet(item.Link, item.Size)
	}
	for _, line := range strings.Split(record.Magnet, "\n") {
		appendMagnet(line, "")
	}
}

func detectPrimaryActressName(records []FilmData) string {
	type actressStat struct {
		Name  string
		Count int
		Order int
	}

	stats := map[string]*actressStat{}
	nextOrder := 0
	for _, record := range records {
		seenInRecord := map[string]struct{}{}
		for _, actress := range record.Actress {
			name := strings.TrimSpace(actress)
			key := strings.ToLower(strings.Join(strings.Fields(name), ""))
			if key == "" {
				continue
			}
			if _, exists := seenInRecord[key]; exists {
				continue
			}
			seenInRecord[key] = struct{}{}
			stat, exists := stats[key]
			if !exists {
				stat = &actressStat{Name: name, Order: nextOrder}
				stats[key] = stat
				nextOrder++
			}
			stat.Count++
		}
	}

	best := actressStat{Order: int(^uint(0) >> 1)}
	found := false
	for _, stat := range stats {
		if !found || stat.Count > best.Count || (stat.Count == best.Count && stat.Order < best.Order) || (stat.Count == best.Count && stat.Order == best.Order && stat.Name < best.Name) {
			best = *stat
			found = true
		}
	}
	if !found {
		return ""
	}
	return best.Name
}

func firstNonEmpty(values ...string) string {
	for _, value := range values {
		if trimmed := strings.TrimSpace(value); trimmed != "" {
			return trimmed
		}
	}
	return ""
}

func maxInt(left int, right int) int {
	if left > right {
		return left
	}
	return right
}
