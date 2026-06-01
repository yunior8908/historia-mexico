import type { CardStatus } from "./types";

type CardFaceProps = {
  tone: "question" | "answer";
  category: string;
  status?: CardStatus;
  /** Set on the back face so its 3D transform places it correctly. */
  back?: boolean;
  children: React.ReactNode;
};

/**
 * One side of a `FlipCard`. The component is purely presentational
 * — it doesn't know about flipping, only how to render the
 * pregunta/respuesta heading and the optional status badge.
 */
export function CardFace({
  tone,
  category,
  status,
  back = false,
  children,
}: CardFaceProps) {
  return (
    <div
      className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 md:p-8"
      style={{
        position: back ? "absolute" : "relative",
        inset: back ? 0 : undefined,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: back ? "rotateX(180deg)" : undefined,
        minHeight: "320px",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
          {tone === "question" ? "Pregunta" : "Respuesta"} · {category}
        </span>
        <div className="flex items-center gap-2">
          {status === "known" && (
            <span className="rounded bg-success-soft px-2 py-0.5 font-display text-[0.62rem] uppercase tracking-[0.16em] text-success">
              Sabida
            </span>
          )}
          {status === "review" && (
            <span className="rounded bg-danger-soft px-2 py-0.5 font-display text-[0.62rem] uppercase tracking-[0.16em] text-danger">
              Por repasar
            </span>
          )}
        </div>
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
}
