"use client";

import { cn } from "@/lib/cn";
import type { Era, EraInfo } from "../_data/planes";

type EraFilterProps = {
  eras: EraInfo[];
  active: Era | "todos";
  onSelect: (era: Era | "todos") => void;
};

export function EraFilter({ eras, active, onSelect }: EraFilterProps) {
  const items: Array<{ id: Era | "todos"; label: string; colorVar: string }> = [
    { id: "todos", label: "Todos", colorVar: "var(--era-independencia)" },
    ...eras.map((e) => ({ id: e.id, label: e.label, colorVar: e.colorVar })),
  ];

  return (
    <div
      role="tablist"
      aria-label="Filtrar por era"
      className="flex flex-wrap gap-2"
    >
      {items.map((it) => {
        const selected = active === it.id;
        return (
          <button
            key={it.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onSelect(it.id)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 font-sans text-[0.85rem] font-medium leading-none transition-colors",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
              selected
                ? "text-bg"
                : "text-text-soft hover:text-text hover:bg-white/[0.04]",
            )}
            style={{
              borderColor: it.colorVar,
              backgroundColor: selected ? it.colorVar : "transparent",
              ["--tw-ring-color" as string]: it.colorVar,
            }}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
