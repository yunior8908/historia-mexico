"use client";

import Link from "next/link";

import type { Filter } from "./types";

type EmptyStateProps = {
  filter: Filter;
  backHref: string;
  onSwitchFilter: (f: Filter) => void;
};

/**
 * Replacement screen rendered when the filtered deck is empty —
 * either because nothing matches the URL filters or because the
 * user just emptied the review queue. The copy adapts to whichever
 * case triggered it.
 */
export function EmptyState({
  filter,
  backHref,
  onSwitchFilter,
}: EmptyStateProps) {
  const isReview = filter === "review";

  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center">
      <p className="font-display text-[1.3rem] font-semibold text-text">
        {isReview
          ? "No tienes preguntas marcadas para repasar."
          : "No hay preguntas con los filtros actuales."}
      </p>
      <p className="mt-2 font-sans text-[0.9rem] text-text-soft">
        {isReview
          ? "Cuando marques una pregunta como 'Repasar' aparecerá aquí."
          : "Vuelve a la lista y ajusta las categorías visibles."}
      </p>
      <div className="mt-5 flex justify-center gap-2">
        {isReview && (
          <button
            type="button"
            onClick={() => onSwitchFilter("all")}
            className="rounded-md border border-border-strong bg-surface-2 px-4 py-2 font-display text-[0.82rem] uppercase tracking-[0.16em] text-text hover:bg-bg-elev"
          >
            Ver todas
          </button>
        )}
        <Link
          href={backHref}
          className="rounded-md border border-border bg-surface px-4 py-2 font-display text-[0.82rem] uppercase tracking-[0.16em] text-text-soft hover:text-text"
        >
          ← Volver a la lista
        </Link>
      </div>
    </div>
  );
}
