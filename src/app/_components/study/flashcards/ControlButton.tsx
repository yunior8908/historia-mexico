"use client";

import { cn } from "@/lib/cn";

type ControlButtonProps = {
  onClick: () => void;
  /** Optional keyboard hint rendered as a `<kbd>` pill. */
  kbd?: string;
  /** Visual tone — drives the border/hover color. */
  tone?: "known" | "review";
  children: React.ReactNode;
};

/**
 * One of the four buttons under the flashcard (`← / Repasar / La
 * sabía / →`). The optional `tone` paints the border in the
 * success/danger family so the user can spot the destructive
 * action at a glance.
 */
export function ControlButton({
  onClick,
  kbd,
  tone,
  children,
}: ControlButtonProps) {
  const toneClasses =
    tone === "known"
      ? "border-success/40 hover:border-success/70 hover:bg-success-soft"
      : tone === "review"
        ? "border-danger/40 hover:border-danger/70 hover:bg-danger-soft"
        : "border-border hover:border-border-strong hover:bg-surface-2";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 rounded-md border bg-surface px-3 py-2.5 font-display text-[0.84rem] uppercase tracking-[0.16em] text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-border-strong",
        toneClasses,
      )}
    >
      <span>{children}</span>
      {kbd && (
        <kbd className="rounded border border-border bg-bg-elev px-1.5 py-0.5 font-sans text-[0.66rem] text-text-muted">
          {kbd}
        </kbd>
      )}
    </button>
  );
}
