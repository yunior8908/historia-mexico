type CategoryHeaderProps = {
  label: string;
  description: string;
  count: number;
  /** CSS variable expression for the parent group's accent color. */
  colorVar: string;
};

/**
 * Sub-header rendered between a `GroupHeader` and its `EntryCard`
 * rows. Carries a small colored dot in the parent group's color so
 * the user keeps the block identity in sight while scrolling
 * through a long list of questions.
 */
export function CategoryHeader({
  label,
  description,
  count,
  colorVar,
}: CategoryHeaderProps) {
  return (
    <div className="border-b border-border pb-2 pl-3 pt-5">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: colorVar }}
          />
          <h3 className="font-display text-[1.2rem] font-semibold text-text">
            {label}
          </h3>
        </div>
        <span className="font-display text-[0.68rem] uppercase tracking-[0.2em] text-text-muted">
          {count.toLocaleString("es-MX")}
        </span>
      </div>
      <p className="mt-1 pl-4 font-sans text-[0.82rem] text-text-soft">
        {description}
      </p>
    </div>
  );
}
