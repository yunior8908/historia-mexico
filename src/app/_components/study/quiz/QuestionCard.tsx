import type { HistoriaEntry } from "../../../_data/historia";
import { QuestionOption } from "./QuestionOption";
import type { QuizQuestion } from "./types";

type QuestionCardProps = {
  question: QuizQuestion;
  /** Resolved source entry used to surface the full answer on reveal. */
  entry: HistoriaEntry | undefined;
  selected: number | null;
  revealed: boolean;
  categoryLabel: string;
  onPick: (i: number) => void;
};

/**
 * The question card sitting in the middle of the quiz view. Holds
 * the category tag, prompt, option list, and the reveal panel.
 */
export function QuestionCard({
  question,
  entry,
  selected,
  revealed,
  categoryLabel,
  onPick,
}: QuestionCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
      <p className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
        {categoryLabel}
      </p>
      <p className="mt-3 font-display text-[1.3rem] font-semibold leading-snug text-text md:text-[1.6rem]">
        {question.question}
      </p>

      <ul className="mt-6 grid gap-2">
        {question.options.map((opt, i) => (
          <li key={`${question.entryId}-${i}`}>
            <QuestionOption
              index={i}
              text={opt}
              isCorrect={i === question.correctIndex}
              isPicked={i === selected}
              revealed={revealed}
              onPick={onPick}
            />
          </li>
        ))}
      </ul>

      {revealed && entry && (
        <div className="mt-5 rounded-lg border border-border bg-bg-elev p-4">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.2em] text-text-muted">
            Respuesta
          </p>
          <p className="mt-2 font-sans text-[1.02rem] leading-relaxed text-text">
            {entry.answer}
          </p>
        </div>
      )}
    </div>
  );
}
