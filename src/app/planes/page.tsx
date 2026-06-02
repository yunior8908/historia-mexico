import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { PlanesGraphic } from "../_components/PlanesGraphic";

export const metadata: Metadata = {
  title: "Los Grandes Planes de la Nación",
  description:
    "Una crónica visual de los principales planes políticos que dieron forma al México independiente, de Iguala (1821) al Plan Sexenal (1933), con sus conexiones históricas.",
};

export default function PlanesPage() {
  return (
    <div className="flex flex-1 justify-center px-4 py-10 md:px-8 md:py-14">
      <main className="w-full max-w-6xl">
        <header className="flex items-start justify-between gap-6">
          <div>
            <p className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-text-muted">
              Historia Política de México
            </p>
            <h1 className="mt-3 font-display text-[2.4rem] font-semibold leading-[1.05] text-text md:text-[3.2rem]">
              Los Grandes Planes de la Nación
            </h1>
            <p className="mt-4 max-w-2xl font-sans text-[0.98rem] text-text-soft">
              1821–1933 · Selecciona un plan para explorar sus detalles y conexiones
              históricas. Las curvas trazan la cadena de causalidad entre los
              pronunciamientos: cada plan desconoce, hereda o derroca al anterior.
            </p>
          </div>

          <Link
            href="/"
            className="hidden shrink-0 rounded-md border border-accent-border bg-accent-soft px-4 py-2 font-display text-[0.82rem] uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 md:inline-block"
          >
            ← Lista
          </Link>
        </header>

        <Suspense fallback={null}>
          <PlanesGraphic />
        </Suspense>

        <footer className="mt-16 border-t border-border pt-6">
          <p className="font-sans text-[0.78rem] text-text-muted">
            Dieciséis planes · seis eras · una nación en disputa. Fechas y textos
            verificados contra fuentes del INEHRM y la Suprema Corte de Justicia
            de la Nación.
          </p>
        </footer>
      </main>
    </div>
  );
}
