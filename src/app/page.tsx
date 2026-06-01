import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { ListView } from "./_components/study/list/ListView";
import { CATEGORIES, HISTORIA_ENTRIES } from "./_data/historia";
import { PLANES } from "./_data/planes";

export const metadata: Metadata = {
  title: "Lista de preguntas",
  description:
    "Lista virtualizada con cientos de preguntas y respuestas de Historia de México, agrupadas por categoría y enlazadas a los planes históricos cuando corresponde.",
};

export default function HomePage() {
  const planIndex = PLANES.map((plan) => ({
    slug: plan.slug,
    name: plan.name,
    year: plan.year,
    era: plan.era,
  }));

  return (
    <div className="flex flex-1 justify-center px-4 py-10 md:px-8 md:py-14">
      <main className="w-full max-w-5xl">
        <header className="flex items-start justify-between gap-6">
          <div>
            <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-text-muted">
              Estudiar Historia de México
            </p>
            <h1 className="mt-3 font-display text-[2.4rem] font-semibold leading-[1.05] text-text md:text-[3.2rem]">
              Banco de preguntas
            </h1>
            <p className="mt-4 max-w-2xl font-sans text-[0.98rem] text-text-soft">
              {HISTORIA_ENTRIES.length.toLocaleString("es-MX")} preguntas
              organizadas en {CATEGORIES.length} categorías. Navega la lista,
              filtra por categoría o búsqueda, y salta al plan cuando una
              pregunta lo cita. Flashcards y quiz disponibles arriba.
            </p>
          </div>

          <Link
            href="/planes"
            className="hidden shrink-0 rounded-md border border-border bg-surface px-4 py-2 font-display text-[0.82rem] uppercase tracking-[0.2em] text-text-soft transition-colors hover:border-border-strong hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-border-strong md:inline-block"
          >
            Ver planes →
          </Link>
        </header>

        <div className="mt-10">
          <Suspense fallback={null}>
            <ListView
              entries={HISTORIA_ENTRIES}
              categories={CATEGORIES}
              planIndex={planIndex}
            />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
