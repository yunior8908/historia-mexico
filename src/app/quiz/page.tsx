import type { Metadata } from "next";
import { Suspense } from "react";

import { Quiz } from "../_components/study/quiz/Quiz";
import { CATEGORIES, HISTORIA_ENTRIES } from "../_data/historia";

export const metadata: Metadata = {
  title: "Quiz",
  description:
    "Quiz de opción múltiple sobre Historia de México. 10 preguntas por ronda con distractores tomados de la misma categoría.",
};

export default function QuizPage() {
  return (
    <div className="flex flex-1 justify-center px-4 py-10 md:px-8 md:py-14">
      <main className="w-full max-w-3xl">
        <Suspense fallback={null}>
          <Quiz allEntries={HISTORIA_ENTRIES} categories={CATEGORIES} />
        </Suspense>
      </main>
    </div>
  );
}
