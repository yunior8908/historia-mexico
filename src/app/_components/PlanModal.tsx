"use client";

import { useEffect } from "react";
import type { EraInfo, Plan } from "../_data/planes";

type PlanDetailProps = {
  plan: Plan | null;
  era: EraInfo | null;
  related: Plan[];
  onClose: () => void;
  onSelect: (slug: string) => void;
};

export function PlanModal({ plan, era, related, onClose, onSelect }: PlanDetailProps) {
  useEffect(() => {
    if (!plan) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [plan, onClose]);

  if (!plan || !era) return null;

  return (
    <aside
      aria-labelledby="plan-detail-title"
      className="relative overflow-hidden rounded-xl border border-border bg-bg-elev lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto"
      style={{ ["--era-color" as string]: era.colorVar }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: era.colorVar }}
      />

      <div className="flex items-start justify-between gap-4 px-6 pt-7 md:px-7">
        <div>
          <p
            className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.28em]"
            style={{ color: era.colorVar }}
          >
            {era.label} · {plan.year}
          </p>
          <h2
            id="plan-detail-title"
            className="mt-2 font-display text-[1.7rem] font-semibold leading-tight text-text md:text-[1.95rem]"
          >
            {plan.name}
          </h2>
          <p className="mt-1 font-sans text-[0.9rem] text-text-soft">
            <span className="text-text">{plan.proclaimer}</span>
            <span className="mx-2 text-text-muted">·</span>
            {plan.place}
          </p>
          <p className="mt-1 font-sans text-[0.8rem] italic text-text-muted">
            {plan.date} de {plan.year}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle"
          className="-mr-2 -mt-1 rounded-md p-2 text-text-soft transition-colors hover:bg-white/5 hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--era-color)]"
        >
          <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 4 L16 16 M16 4 L4 16" />
          </svg>
        </button>
      </div>

      {plan.motto && (
        <p
          className="mx-6 mt-5 border-l-2 pl-3 font-display text-[1.05rem] italic md:mx-7"
          style={{ borderColor: era.colorVar, color: era.colorVar }}
        >
          «{plan.motto}»
        </p>
      )}

      <div className="px-6 py-6 md:px-7">
        <p className="font-sans text-[0.95rem] leading-relaxed text-text">
          {plan.summary}
        </p>

        <dl className="mt-6 grid gap-x-6 gap-y-3 font-sans text-[0.88rem] sm:grid-cols-[auto_1fr]">
          <dt className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
            Contra
          </dt>
          <dd className="text-text-soft">{plan.against}</dd>
        </dl>

        <h3 className="mt-7 font-display text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-text-muted">
          Principios
        </h3>
        <ul className="mt-3 space-y-2">
          {plan.principles.map((p, i) => (
            <li
              key={i}
              className="relative pl-5 font-sans text-[0.92rem] leading-relaxed text-text"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[0.65em] block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: era.colorVar }}
              />
              {p}
            </li>
          ))}
        </ul>

        <h3 className="mt-7 font-display text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-text-muted">
          Consecuencia
        </h3>
        <p className="mt-3 font-sans text-[0.93rem] leading-relaxed text-text">
          {plan.outcome}
        </p>

        {related.length > 0 && (
          <>
            <h3 className="mt-8 font-display text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-text-muted">
              Conexiones históricas
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <button
                    type="button"
                    onClick={() => onSelect(r.slug)}
                    className="rounded-md border border-border-strong bg-surface px-3 py-1.5 font-sans text-[0.82rem] text-text-soft transition-colors hover:bg-surface-2 hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--era-color)]"
                  >
                    <span className="mr-2 font-display font-semibold text-text">
                      {r.year}
                    </span>
                    {r.name}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
}
