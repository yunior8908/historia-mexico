import type { ProgressMap } from "./types";

const PROGRESS_KEY = "historia.flashcards.progress.v1";

/**
 * Read the persisted `ProgressMap` from `localStorage`. Returns an
 * empty map during SSR or when no progress has been saved yet, and
 * swallows JSON errors so a corrupted entry doesn't break the UI.
 */
export function loadProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as ProgressMap) : {};
  } catch {
    return {};
  }
}

/**
 * Persist the `ProgressMap`. Ignores quota / disabled-storage
 * errors; the in-memory state remains authoritative for the
 * current session even when the write fails.
 */
export function saveProgress(map: ProgressMap) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
  } catch {
    /* quota exceeded or storage disabled: ignore. */
  }
}
