"use client";

import { cn } from "@/lib/cn";

type QuestionOptionProps = {
  /** Zero-based index of this option within the question. */
  index: number;
  text: string;
  /** True if this option is the correct answer. */
  isCorrect: boolean;
  /** True if the player picked this option (regardless of correctness). */
  isPicked: boolean;
  /** True once the answer has been revealed (locks the buttons). */
  revealed: boolean;
  onPick: (index: number) => void;
};

/**
 * A single multiple-choice option. Renders the letter badge, the
 * answer text, and the keyboard hint; styles itself based on
 * reveal/correctness so the orchestrator stays declarative.
 */
export function QuestionOption({
  index,
  text,
  isCorrect,
  isPicked,
  revealed,
  onPick,
}: QuestionOptionProps) {
  const stateClass = !revealed
    ? "border-border hover:border-border-strong hover:bg-surface-2"
    : isCorrect
      ? "border-success/70 bg-success-soft text-success"
      : isPicked
        ? "border-danger/70 bg-danger-soft text-danger"
        : "border-border opacity-60";

  return (
    <button
      type="button"
      onClick={() => onPick(index)}
      disabled={revealed}
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border bg-surface p-3 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-border-strong",
        revealed ? "cursor-default" : "cursor-pointer",
        stateClass,
      )}
    >
      <span
        aria-hidden
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border font-display text-[0.72rem] text-text-soft"
      >
        {String.fromCharCode(65 + index)}
      </span>
      <span className="flex-1 font-sans text-[0.95rem] leading-relaxed">
        {text}
      </span>
      {!revealed && (
        <kbd
          aria-hidden
          className="mt-0.5 hidden rounded border border-border bg-bg-elev px-1.5 py-0.5 font-sans text-[0.7rem] text-text-muted sm:inline-block"
        >
          {index + 1}
        </kbd>
      )}
    </button>
  );
}
