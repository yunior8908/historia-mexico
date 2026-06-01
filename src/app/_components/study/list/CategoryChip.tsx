"use client";

import type { MouseEvent } from "react";

import { cn } from "@/lib/cn";
import type { HistoriaCategory } from "../../../_data/historia";

type CategoryChipProps = {
  id: HistoriaCategory;
  label: string;
  count: number;
  /** Whether the category is currently visible (chip is "on"). */
  isOn: boolean;
  /**
   * CSS variable expression for the parent group's accent color.
   * Used as the active-state tint so the user reads the chip's
   * group affiliation at a glance.
   */
  colorVar: string;
  onToggle: (id: HistoriaCategory) => void;
  /**
   * Shift+Click on an active chip scrolls to that section without
   * toggling it off. Double-click on an active chip does the same.
   */
  onScrollTo: (id: HistoriaCategory) => void;
};

/**
 * A single filter chip in the categories panel. When active it
 * borrows the parent group's color for the border, dot and label;
 * inactive chips stay neutral so the panel doesn't get noisy.
 */
export function CategoryChip({
  id,
  label,
  count,
  isOn,
  colorVar,
  onToggle,
  onScrollTo,
}: CategoryChipProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.shiftKey && isOn) {
      onScrollTo(id);
      return;
    }
    onToggle(id);
  };

  return (
    <button
      type="button"
      aria-pressed={isOn}
      onClick={handleClick}
      onDoubleClick={() => isOn && onScrollTo(id)}
      title={
        isOn
          ? "Click: ocultar · Shift+Click: ir a sección"
          : "Click: mostrar"
      }
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-sans text-[0.78rem] transition-colors",
        isOn
          ? "bg-surface-2 text-text"
          : "border-border bg-surface text-text-muted hover:text-text-soft",
      )}
      style={isOn ? { borderColor: colorVar } : undefined}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: isOn ? colorVar : "currentColor" }}
      />
      <span>{label}</span>
      <span className="text-[0.7rem] text-text-muted">{count}</span>
    </button>
  );
}
