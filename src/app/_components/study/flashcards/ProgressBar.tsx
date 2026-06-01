type ProgressBarProps = {
  total: number;
  known: number;
  review: number;
};

/**
 * Thin two-color bar above the card showing how much of the
 * filtered pool has been marked. Caps at 100% even if the user
 * marks more cards than fit in the current filter (which can
 * happen when the filter changes while progress is preserved).
 */
export function ProgressBar({ total, known, review }: ProgressBarProps) {
  const knownPct = total === 0 ? 0 : (known / total) * 100;
  const reviewPct = total === 0 ? 0 : (review / total) * 100;

  return (
    <div>
      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-surface">
        <div
          className="h-full bg-success/80"
          style={{ width: `${knownPct}%` }}
          aria-hidden
        />
        <div
          className="h-full bg-danger/70"
          style={{ width: `${reviewPct}%` }}
          aria-hidden
        />
      </div>
      <p className="mt-1.5 font-sans text-[0.74rem] text-text-muted">
        Sabidas: {known} · Por repasar: {review} · Total: {total}
      </p>
    </div>
  );
}
