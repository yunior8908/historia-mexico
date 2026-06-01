"use client";

import { cn } from "@/lib/cn";

type AdvanceControlsProps = {
  revealed: boolean;
  isLast: boolean;
  onNext: () => void;
};

/**
 * Footer of an active question: shows the shortcut hint and the
 * primary advance button. The button is disabled until the user
 * picks an option (i.e., until `revealed` flips to true).
 */
export function AdvanceControls({
  revealed,
  isLast,
  onNext,
}: AdvanceControlsProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="font-sans text-[0.74rem] text-text-muted">
        Atajos: <kbd className="kbd">1</kbd>–<kbd className="kbd">4</kbd> elige ·{" "}
        <kbd className="kbd">Enter</kbd> avanza
      </p>
      <button
        type="button"
        onClick={onNext}
        disabled={!revealed}
        className={cn(
          "rounded-md px-5 py-2.5 font-display text-[0.84rem] uppercase tracking-[0.16em] transition-colors",
          revealed
            ? "border border-border-strong bg-surface-2 text-text hover:bg-bg-elev"
            : "cursor-not-allowed border border-border bg-surface text-text-muted",
        )}
      >
        {isLast ? "Ver resultado" : "Siguiente"} →
      </button>
    </div>
  );
}
