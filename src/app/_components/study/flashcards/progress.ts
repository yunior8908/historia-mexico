import type { ProgressMap } from "./types";

const PROGRESS_KEY = "historia.flashcards.progress.v1";
const EMPTY: ProgressMap = {};

// Module-level cache + subscribers turn `localStorage` into a small
// external store. `useFlashcardProgress` reads through
// `useSyncExternalStore`, which is React's recommended bridge for
// mutable platform APIs and side-steps the "setState inside effect"
// warning that a hydration `useEffect` would trigger.
let cache: ProgressMap | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): ProgressMap {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as ProgressMap) : EMPTY;
  } catch {
    return EMPTY;
  }
}

function writeToStorage(map: ProgressMap) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
  } catch {
    /* quota exceeded or storage disabled: ignore. */
  }
}

/**
 * Stable snapshot of the persisted `ProgressMap`. The reference only
 * changes after `updateProgress` runs, so `useSyncExternalStore`
 * doesn't loop.
 */
export function getProgressSnapshot(): ProgressMap {
  if (cache === null) cache = readFromStorage();
  return cache;
}

/**
 * SSR / first-render snapshot. We can't touch `localStorage` on the
 * server, so the deck starts empty and hydrates on the client.
 */
export function getProgressServerSnapshot(): ProgressMap {
  return EMPTY;
}

export function subscribeProgress(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * In-place mutation entry point: runs `updater` against the current
 * snapshot, writes the result to storage, and notifies subscribers.
 */
export function updateProgress(
  updater: (prev: ProgressMap) => ProgressMap,
): void {
  const next = updater(getProgressSnapshot());
  cache = next;
  writeToStorage(next);
  for (const listener of listeners) listener();
}
