type GroupHeaderProps = {
  label: string;
  description: string;
  count: number;
  /** CSS variable expression for the group's accent color. */
  colorVar: string;
};

/**
 * Top-level block header (one per `CategoryGroup`). Echoes the
 * planes `EraBand` design: a horizontal color-tinted gradient
 * banner, a vertical accent bar on the left, and a colored
 * "Bloque" label, all driven by the group's `colorVar`.
 */
export function GroupHeader({
  label,
  description,
  count,
  colorVar,
}: GroupHeaderProps) {
  return (
    <div
      className="group-band-bg relative overflow-hidden rounded-md pb-3 pl-4 pr-3 pt-7"
      style={{ ["--group-color" as string]: colorVar }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-3 left-0 w-[3px] rounded-full"
        style={{ backgroundColor: colorVar }}
      />

      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: colorVar }}
        />
        <p
          className="font-display text-[0.62rem] font-semibold uppercase tracking-[0.28em]"
          style={{ color: colorVar }}
        >
          Bloque
        </p>
      </div>

      <div className="mt-1.5 flex items-baseline justify-between gap-3">
        <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-text">
          {label}
        </h2>
        <span className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
          {count.toLocaleString("es-MX")}
        </span>
      </div>
      <p className="mt-1.5 font-sans text-[0.92rem] text-text-soft">
        {description}
      </p>
    </div>
  );
}
