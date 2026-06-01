"use client";

import { useCallback, useMemo, useState } from "react";

import { shuffleArray } from "../shared/shuffle";
import type { HistoriaEntry } from "../../../_data/historia";
import type { Filter, ProgressMap } from "./types";

type UseFlashcardDeckArgs = {
  /** Category-filtered entries (already excluding hidden categories). */
  entries: HistoriaEntry[];
  filter: Filter;
  progress: ProgressMap;
};

type UseFlashcardDeck = {
  currentEntry: HistoriaEntry | undefined;
  /** Number of cards in the active filtered/shuffled order. */
  totalCount: number;
  /** Zero-based index of the active card. */
  index: number;
  flipped: boolean;
  setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
  goNext: () => void;
  goPrev: () => void;
  shuffle: () => void;
  /** Advance to the next card without flipping back. Used after `mark`. */
  advance: () => void;
};

/**
 * Drives the visible deck: which card is current, its flipped
 * state, ordered IDs, and navigation. Resets when `filter` or
 * `entries` change using the "snapshot during render" pattern, so
 * we never trigger a `setState` inside `useEffect`.
 */
export function useFlashcardDeck({
  entries,
  filter,
  progress,
}: UseFlashcardDeckArgs): UseFlashcardDeck {
  const computeOrder = useCallback(
    (src: HistoriaEntry[], f: Filter, p: ProgressMap) => {
      const base =
        f === "review" ? src.filter((e) => p[e.id] !== "known") : src;
      return base.map((e) => e.id);
    },
    [],
  );

  const [order, setOrder] = useState<string[]>(() =>
    computeOrder(entries, filter, progress),
  );
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Reset the deck whenever filter or filtered entries change. The
  // "snapshot during render" pattern keeps this out of `useEffect`,
  // which means the very next render already shows the new deck
  // (no flash of the previous card).
  const [filterSnapshot, setFilterSnapshot] = useState<Filter>(filter);
  const [entriesSnapshot, setEntriesSnapshot] = useState(entries);
  if (filterSnapshot !== filter || entriesSnapshot !== entries) {
    setFilterSnapshot(filter);
    setEntriesSnapshot(entries);
    setOrder(computeOrder(entries, filter, progress));
    setIndex(0);
    setFlipped(false);
  }

  const totalCount = order.length;

  const currentEntry = useMemo<HistoriaEntry | undefined>(() => {
    const id = order[index];
    if (!id) return undefined;
    return entries.find((e) => e.id === id);
  }, [order, index, entries]);

  const goNext = useCallback(() => {
    setFlipped(false);
    setIndex((i) => Math.min(i + 1, Math.max(totalCount - 1, 0)));
  }, [totalCount]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const shuffle = useCallback(() => {
    setOrder((curr) => shuffleArray(curr));
    setIndex(0);
    setFlipped(false);
  }, []);

  const advance = useCallback(() => {
    setFlipped(false);
    setIndex((i) => {
      if (totalCount === 0) return 0;
      return Math.min(i + 1, totalCount - 1);
    });
  }, [totalCount]);

  return {
    currentEntry,
    totalCount,
    index,
    flipped,
    setFlipped,
    goNext,
    goPrev,
    shuffle,
    advance,
  };
}
