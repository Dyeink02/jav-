package common

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

// Package common contains narrow cross-domain helpers that are shared by
// multiple active Go modules. Utilities added here should stay generic and
// dependency-light; domain rules belong in their owning package instead.
//
// Ownership summary:
// 1) provide small generic helpers reused across active Go modules
// 2) centralize encoding/text/file convenience utilities with no domain policy
// 3) keep shared helpers dependency-light and domain-neutral
//
// File map for maintainers:
// 1) generic string/any normalization helpers
// 2) JSON/file UTF-8 convenience helpers
// 3) filesystem path and small utility helpers

var utf8BOM = []byte{0xEF, 0xBB, 0xBF}

func FirstNonEmpty(values ...string) string {
	for _, value := range values {
		if trimmed := strings.TrimSpace(value); trimmed != "" {
			return trimmed
		}
	}
	return ""
}

func CleanString(value any) string {
	if value == nil {
		return ""
	}
	text, ok := value.(string)
	if !ok {
		return strings.TrimSpace(fmt.Sprint(value))
	}
	return strings.TrimSpace(text)
}

func CleanAnyString(value any) string {
	if value == nil {
		return ""
	}
	return strings.TrimSpace(fmt.Sprint(value))
}

func NonEmptyString(value any) string {
	return CleanString(value)
}

func IntValue(value any, fallback int) int {
	switch typed := value.(type) {
	case int:
		return typed
	case int64:
		return int(typed)
	case float64:
		return int(typed)
	case string:
		var parsed int
		_, _ = fmt.Sscanf(strings.TrimSpace(typed), "%d", &parsed)
		if parsed != 0 {
			return parsed
		}
	}
	return fallback
}

func MaxInt(left int, right int) int {
	if left > right {
		return left
	}
	return right
}

func MinInt(left int, right int) int {
	if left < right {
		return left
	}
	return right
}

func BoolValue(value any, fallback bool) bool {
	switch typed := value.(type) {
	case bool:
		return typed
	case string:
		normalized := strings.ToLower(strings.TrimSpace(typed))
		if normalized == "true" || normalized == "1" || normalized == "yes" || normalized == "on" {
			return true
		}
		if normalized == "false" || normalized == "0" || normalized == "no" || normalized == "off" {
			return false
		}
	case float64:
		return typed != 0
	case int:
		return typed != 0
	}
	return fallback
}

func NormalizePath(value string) string {
	trimmed := strings.TrimSpace(value)
	if trimmed == "" {
		return ""
	}
	if absolute, err := filepath.Abs(trimmed); err == nil {
		return absolute
	}
	return filepath.Clean(trimmed)
}

func MustRawJSON(value any) json.RawMessage {
	payload, err := json.Marshal(value)
	if err != nil {
		return json.RawMessage(`null`)
	}
	return payload
}

func CloneMap(source map[string]any) map[string]any {
	if source == nil {
		return map[string]any{}
	}
	cloned := make(map[string]any, len(source))
	for key, value := range source {
		cloned[key] = value
	}
	return cloned
}

// WriteUTF8TextFile writes human-readable text as UTF-8 with BOM so Windows
// tools that still depend on legacy code-page detection render the content
// correctly.
func WriteUTF8TextFile(path string, content string) error {
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}
	payload := append(append([]byte{}, utf8BOM...), []byte(content)...)
	return os.WriteFile(path, payload, 0o644)
}

// AppendUTF8TextFile appends text while ensuring the file starts with a UTF-8
// BOM. This keeps operator-facing logs readable in Windows viewers that still
// rely on BOM detection for UTF-8.
func AppendUTF8TextFile(path string, content string) error {
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		return err
	}

	file, err := os.OpenFile(path, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0o644)
	if err != nil {
		return err
	}
	defer file.Close()

	info, err := file.Stat()
	if err != nil {
		return err
	}
	if info.Size() == 0 {
		if _, err := file.Write(utf8BOM); err != nil {
			return err
		}
	}

	_, err = file.Write([]byte(content))
	return err
}
