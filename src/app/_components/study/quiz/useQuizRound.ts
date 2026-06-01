"use client";

import { useCallback, useState } from "react";

import { shuffleArray } from "../shared/shuffle";
import type { HistoriaEntry } from "../../../_data/historia";
import { buildQuestion } from "./buildQuestion";
import { ROUND_TARGET, type QuizQuestion } from "./types";

type UseQuizRoundArgs = {
  /** Category-filtered entries — the pool the player answers from. */
  entries: HistoriaEntry[];
  /** Full pool used to source distractors regardless of filter. */
  allEntries: HistoriaEntry[];
};

type UseQuizRound = {
  round: QuizQuestion[];
  index: number;
  selected: number | null;
  revealed: boolean;
  score: number;
  done: boolean;
  current: QuizQuestion | undefined;
  isLast: boolean;
  pick: (i: number) => void;
  goNext: () => void;
  newRound: () => void;
};

/**
 * Build and drive a 10-question round. Owns every piece of round
 * state (questions, cursor, selection, reveal, score) so the
 * orchestrator only wires up the URL/category bits.
 *
 * Resets the round when `entries` change (e.g. category filter
 * tweaked from a different tab) using the "snapshot during render"
 * pattern so we never trigger `setState` inside `useEffect`.
 */
export function useQuizRound({
  entries,
  allEntries,
}: UseQuizRoundArgs): UseQuizRound {
  const buildRound = useCallback((): QuizQuestion[] => {
    const size = Math.min(ROUND_TARGET, entries.length);
    const picks = shuffleArray(entries).slice(0, size);
    return picks.map((e) => buildQuestion(e, allEntries));
  }, [entries, allEntries]);

  const [round, setRound] = useState<QuizQuestion[]>(() => buildRound());
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  // Reset on `entries` change. See JSDoc above for rationale.
  const [entriesSnapshot, setEntriesSnapshot] = useState(entries);
  if (entries !== entriesSnapshot) {
    setEntriesSnapshot(entries);
    setRound(buildRound());
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setDone(false);
  }

  const current = round[index];
  const isLast = index === round.length - 1;

  const pick = useCallback(
    (i: number) => {
      if (revealed || !current) return;
      if (i < 0 || i >= current.options.length) return;
      setSelected(i);
      setRevealed(true);
      if (i === current.correctIndex) setScore((s) => s + 1);
    },
    [revealed, current],
  );

  const goNext = useCallback(() => {
    if (!revealed) return;
    if (isLast) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
  }, [revealed, isLast]);

  const newRound = useCallback(() => {
    setRound(buildRound());
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setDone(false);
  }, [buildRound]);

  return {
    round,
    index,
    selected,
    revealed,
    score,
    done,
    current,
    isLast,
    pick,
    goNext,
    newRound,
  };
}
