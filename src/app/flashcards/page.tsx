import type { Metadata } from "next";
import { Suspense } from "react";

import { Flashcards } from "../_components/study/flashcards/Flashcards";
import { CATEGORIES, HISTORIA_ENTRIES } from "../_data/historia";
import { PLANES } from "../_data/planes";

export const metadata: Metadata = {
  title: "Flashcards",
  description:
    "Repaso a tu ritmo con flashcards: pregunta al frente, respuesta al voltear. Filtra por categoría desde la URL.",
};

export default function FlashcardsPage() {
  const planIndex = PLANES.map((plan) => ({
    slug: plan.slug,
    name: plan.name,
    year: plan.year,
    era: plan.era,
  }));

  return (
    <div className="flex flex-1 justify-center px-4 py-10 md:px-8 md:py-14">
      <main className="w-full max-w-3xl">
        <Suspense fallback={null}>
          <Flashcards
            allEntries={HISTORIA_ENTRIES}
            categories={CATEGORIES}
            planIndex={planIndex}
          />
        </Suspense>
      </main>
    </div>
  );
}
