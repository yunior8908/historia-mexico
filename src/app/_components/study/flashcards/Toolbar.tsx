"use client";

import Link from "next/link";

import { FilterToggle } from "./FilterToggle";
import type { Filter } from "./types";

type ToolbarProps = {
  backHref: string;
  index: number;
  total: number;
  filter: Filter;
  onFilterChange: (f: Filter) => void;
  onShuffle: () => void;
};

/**
 * Top toolbar of the flashcards view. Pure markup; all callbacks
 * are delegated to the parent so this component is trivial to
 * relayout when the design changes.
 */
export function Toolbar({
  backHref,
  index,
  total,
  filter,
  onFilterChange,
  onShuffle,
}: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <Link
          href={backHref}
          className="rounded-md border border-border bg-surface px-3 py-1.5 font-display text-[0.72rem] uppercase tracking-[0.16em] text-text-soft hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-border-strong"
        >
          ← Lista
        </Link>
        <span className="font-sans text-[0.84rem] text-text-muted">
          {index + 1} / {total}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <FilterToggle filter={filter} onChange={onFilterChange} />
        <button
          type="button"
          onClick={onShuffle}
          className="rounded-md border border-border bg-surface px-3 py-1.5 font-display text-[0.72rem] uppercase tracking-[0.16em] text-text-soft hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-border-strong"
          title="Atajo: barajar"
        >
          Barajar
        </button>
      </div>
    </div>
  );
}
