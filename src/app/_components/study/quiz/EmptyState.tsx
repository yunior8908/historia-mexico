import Link from "next/link";

type EmptyStateProps = {
  backHref: string;
};

/**
 * Replacement screen rendered when the filtered pool has no
 * questions to play. Only happens if the user excluded every
 * category — there's no "switch filter" affordance here; the only
 * next step is to head back to the list.
 */
export function EmptyState({ backHref }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center">
      <p className="font-display text-[1.3rem] font-semibold text-text">
        No hay preguntas para el quiz con la selección actual.
      </p>
      <Link
        href={backHref}
        className="mt-4 inline-block rounded-md border border-border-strong bg-surface-2 px-4 py-2 font-display text-[0.82rem] uppercase tracking-[0.16em] text-text hover:bg-bg-elev"
      >
        ← Volver a la lista
      </Link>
    </div>
  );
}
