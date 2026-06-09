"use client";

import { forwardRef } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  /** Called when the user clears the input via the inline button. */
  onClear: () => void;
};

/**
 * The big search input at the top of the study list. Owns its own
 * visual layout (search icon, "Limpiar" button, "/" hint) but
 * defers state to the parent (`ListView`) which keeps `q` in the
 * URL via `nuqs`.
 */
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ value, onChange, onClear }, ref) {
    const hasValue = value !== "";

    return (
      <div className="relative flex-1">
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
        >
          <circle cx="9" cy="9" r="5.5" />
          <path d="M13 13 L17 17" />
        </svg>
        <label htmlFor="study-search" className="sr-only">
          Buscar
        </label>
        <input
          id="study-search"
          ref={ref}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape" && hasValue) {
              e.preventDefault();
              onClear();
            }
          }}
          placeholder="Buscar pregunta, respuesta o etiqueta…  (pulsa /)"
          className="h-11 w-full rounded-md border border-border bg-surface pl-9 pr-20 font-sans text-[0.98rem] text-text placeholder:text-text-muted focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-border-strong/40"
        />
        {hasValue ? (
          <button
            type="button"
            aria-label="Limpiar búsqueda"
            onClick={onClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-border bg-bg px-2 py-1 font-display text-[0.66rem] uppercase tracking-[0.14em] text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            Limpiar
          </button>
        ) : (
          <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-bg px-1.5 py-0.5 font-mono text-[0.7rem] text-text-muted sm:inline-block">
            /
          </kbd>
        )}
      </div>
    );
  },
);
