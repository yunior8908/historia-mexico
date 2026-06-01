"use client";

import Link from "next/link";

type ResultScreenProps = {
  score: number;
  total: number;
  backHref: string;
  onNewRound: () => void;
};

/**
 * Final screen shown when the round completes. Maps the score
 * percentage to a verdict label and offers "Nueva ronda" or "Volver".
 */
export function ResultScreen({
  score,
  total,
  backHref,
  onNewRound,
}: ResultScreenProps) {
  const pct = Math.round((score / total) * 100);
  const verdict =
    pct >= 90
      ? "Excelente"
      : pct >= 70
        ? "Bien"
        : pct >= 50
          ? "Vas mejorando"
          : "Sigue practicando";

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="font-display text-[0.72rem] uppercase tracking-[0.22em] text-text-muted">
          Resultado
        </p>
        <p className="mt-3 font-display text-[3rem] font-semibold text-text">
          {score} / {total}
        </p>
        <p className="mt-1 font-display text-[1.1rem] text-text-soft">
          {pct}% · {verdict}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={onNewRound}
            className="rounded-md border border-border-strong bg-surface-2 px-4 py-2 font-display text-[0.82rem] uppercase tracking-[0.16em] text-text hover:bg-bg-elev"
          >
            Nueva ronda
          </button>
          <Link
            href={backHref}
            className="rounded-md border border-border bg-surface px-4 py-2 font-display text-[0.82rem] uppercase tracking-[0.16em] text-text-soft hover:text-text"
          >
            ← Volver
          </Link>
        </div>
      </div>
    </section>
  );
}
