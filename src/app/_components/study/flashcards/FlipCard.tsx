"use client";

import { CardFace } from "./CardFace";
import type { CardStatus } from "./types";

type FlipCardProps = {
  question: string;
  flipped: boolean;
  onFlip: () => void;
  category: string;
  status?: CardStatus;
  /** Rendered on the back (answer) face. */
  children: React.ReactNode;
};

/**
 * The two-faced card that holds the pregunta and respuesta. Owns
 * the 3D flip transform but defers the flipped state to the
 * parent so the keyboard shortcuts can drive it without prop
 * drilling.
 */
export function FlipCard({
  question,
  flipped,
  onFlip,
  category,
  status,
  children,
}: FlipCardProps) {
  return (
    <div className="relative w-full" style={{ perspective: "1500px" }}>
      <button
        type="button"
        onClick={onFlip}
        aria-pressed={flipped}
        aria-label={flipped ? "Mostrar pregunta" : "Mostrar respuesta"}
        className="relative block w-full text-left focus:outline-none"
        style={{
          minHeight: "320px",
          transformStyle: "preserve-3d",
          transition: "transform 480ms cubic-bezier(0.16, 1, 0.3, 1)",
          transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >
        <CardFace tone="question" category={category} status={status}>
          <p className="font-display text-[1.5rem] font-semibold leading-snug text-text md:text-[1.8rem]">
            {question}
          </p>
          <p className="mt-auto font-sans text-[0.78rem] uppercase tracking-[0.18em] text-text-muted">
            Toca para revelar la respuesta · espacio
          </p>
        </CardFace>

        <CardFace tone="answer" category={category} status={status} back>
          {children}
          <p className="mt-auto font-sans text-[0.78rem] uppercase tracking-[0.18em] text-text-muted">
            Toca para volver a la pregunta
          </p>
        </CardFace>
      </button>
    </div>
  );
}
