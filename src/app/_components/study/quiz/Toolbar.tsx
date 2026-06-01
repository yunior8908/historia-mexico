import Link from "next/link";

type ToolbarProps = {
  backHref: string;
  index: number;
  total: number;
  /** Number of correct answers so far in the current round. */
  score: number;
  /** True when the current question's reveal is already on screen. */
  revealed: boolean;
};

/**
 * Top toolbar of the quiz view: back link, progress, running score.
 * Pure markup, no state of its own.
 */
export function Toolbar({
  backHref,
  index,
  total,
  score,
  revealed,
}: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <Link
          href={backHref}
          className="rounded-md border border-border bg-surface px-3 py-1.5 font-display text-[0.72rem] uppercase tracking-[0.16em] text-text-soft hover:text-text"
        >
          ← Lista
        </Link>
        <span className="font-sans text-[0.84rem] text-text-muted">
          {index + 1} / {total}
        </span>
      </div>
      <span className="font-sans text-[0.84rem] text-text-muted">
        Puntaje: {score} / {index + (revealed ? 1 : 0)}
      </span>
    </div>
  );
}
