/**
 * Placeholder shown when the current search + category filters
 * produce zero matching entries. Kept dead-simple on purpose: the
 * user already sees the toolbar, so this only needs to acknowledge
 * the empty state and hint at the fix.
 */
export function EmptyResults() {
  return (
    <div className="rounded-xl border border-dashed border-border bg-surface/40 p-10 text-center">
      <p className="font-display text-[1rem] text-text">Sin resultados.</p>
      <p className="mt-1 font-sans text-[0.86rem] text-text-muted">
        Cambia el filtro de búsqueda o activa más categorías.
      </p>
    </div>
  );
}
