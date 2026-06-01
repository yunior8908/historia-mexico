"use client";

import { cn } from "@/lib/cn";
import type { Filter } from "./types";

type FilterToggleProps = {
  filter: Filter;
  onChange: (f: Filter) => void;
};

/**
 * Segmented control to switch between the full deck and the
 * "review only" subset. Two buttons live in a shared bordered
 * group so the active segment reads as a continuous surface.
 */
export function FilterToggle({ filter, onChange }: FilterToggleProps) {
  return (
    <div className="inline-flex overflow-hidden rounded-md border border-border">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={cn(
          "px-3 py-1.5 font-display text-[0.72rem] uppercase tracking-[0.16em] transition-colors",
          filter === "all"
            ? "bg-surface-2 text-text"
            : "bg-surface text-text-soft hover:text-text",
        )}
      >
        Todas
      </button>
      <button
        type="button"
        onClick={() => onChange("review")}
        className={cn(
          "px-3 py-1.5 font-display text-[0.72rem] uppercase tracking-[0.16em] transition-colors",
          filter === "review"
            ? "bg-surface-2 text-text"
            : "bg-surface text-text-soft hover:text-text",
        )}
      >
        Sólo a repasar
      </button>
    </div>
  );
}
