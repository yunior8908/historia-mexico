"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { loadProgress, saveProgress } from "./progress";
import type { CardStatus, ProgressMap } from "./types";

type UseFlashcardProgress = {
  progress: ProgressMap;
  knownCount: number;
  reviewCount: number;
  mark: (entryId: string, status: CardStatus) => void;
  reset: () => void;
};

/**
 * Encapsulates the persisted study progress: hydration from
 * `localStorage` on mount, the in-memory `ProgressMap`, derived
 * counts, and a `mark` / `reset` pair that also writes through to
 * storage.
 */
export function useFlashcardProgress(): UseFlashcardProgress {
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- platform API (localStorage), runs once on mount
    setProgress(loadProgress());
  }, []);

  const mark = useCallback((entryId: string, status: CardStatus) => {
    setProgress((prev) => {
      const next: ProgressMap = { ...prev, [entryId]: status };
      saveProgress(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setProgress({});
    saveProgress({});
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
