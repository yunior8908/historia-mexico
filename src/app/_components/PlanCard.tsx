"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { EraInfo, Plan } from "../_data/planes";

type PlanCardProps = {
  plan: Plan;
  era: EraInfo;
  active: boolean;
  dimmed: boolean;
  highlighted: boolean;
  onOpen: (slug: string) => void;
  onHover: (slug: string | null) => void;
};

export const PlanCard = forwardRef<HTMLButtonElement, PlanCardProps>(
  function PlanCard(
    { plan, era, active, dimmed, highlighted, onOpen, onHover },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        onClick={() => onOpen(plan.slug)}
        onMouseEnter={() => onHover(plan.slug)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(plan.slug)}
        onBlur={() => onHover(null)}
        aria-label={`${plan.name}, ${plan.year}, ${plan.proclaimer}. Abrir detalle.`}
        className={cn(
          "group relative flex w-full flex-col gap-2 rounded-lg border bg-surface p-4 text-left transition-all duration-200",
          "hover:-translate-y-0.5 hover:bg-surface-2",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          dimmed && !active && !highlighted ? "opacity-40" : "opacity-100",
          active || highlighted
            ? "border-[var(--era-color)] shadow-[0_0_0_1px_var(--era-color)]"
            : "border-border",
        )}
        style={{
          ["--era-color" as string]: era.colorVar,
        }}
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] rounded-t-lg"
          style={{ backgroundColor: era.colorVar }}
        />

        <div className="flex items-center gap-2 pt-1">
          <span
            className="inline-flex items-center rounded-full px-2.5 py-1 font-display text-[0.78rem] font-semibold leading-none text-bg"
            style={{ backgroundColor: era.colorVar }}
          >
            {plan.year}
          </span>
          <span className="font-sans text-[0.72rem] uppercase tracking-[0.12em] text-text-muted">
            {plan.date}
          </span>
        </div>

        <h3 className="font-display text-[1.08rem] font-semibold leading-snug text-text">
          {plan.name}
        </h3>

        <p className="mt-auto font-sans text-[0.82rem] text-text-soft">
          {plan.proclaimerShort}
        </p>
      </button>
    );
  },
);
