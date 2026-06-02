"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

import {
  getProgressServerSnapshot,
  getProgressSnapshot,
  subscribeProgress,
  updateProgress,
} from "./progress";
import type { CardStatus, ProgressMap } from "./types";

type UseFlashcardProgress = {
  progress: ProgressMap;
  knownCount: number;
  reviewCount: number;
  mark: (entryId: string, status: CardStatus) => void;
  reset: () => void;
};

/**
 * Encapsulates the persisted study progress: a `useSyncExternalStore`
 * subscription to the `localStorage`-backed progress module, derived
 * counts, and `mark` / `reset` callbacks that mutate the store.
 */
export function useFlashcardProgress(): UseFlashcardProgress {
  const progress = useSyncExternalStore(
    subscribeProgress,
    getProgressSnapshot,
    getProgressServerSnapshot,
  );

  const mark = useCallback((entryId: string, status: CardStatus) => {
    updateProgress((prev) => ({ ...prev, [entryId]: status }));
  }, []);

  const reset = useCallback(() => {
    updateProgress(() => ({}));
  }, []);

  const { knownCount, reviewCount } = useMemo(() => {
    let known = 0;
    let review = 0;
    for (const v of Object.values(progress)) {
      if (v === "known") known += 1;
      else if (v === "review") review += 1;
    }
    return { knownCount: known, reviewCount: review };
  }, [progress]);

  return { progress, knownCount, reviewCount, mark, reset };
}
