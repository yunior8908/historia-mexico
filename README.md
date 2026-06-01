# Historia de México

Spanish-language study app for the topics that show up in
SEP-style general-knowledge exams and Mexico's foundational
political history.

**Live:** <https://yunior8908.github.io/historia-mexico/>

## What's inside

- **Lista** (`/`) — virtualized index of every question grouped
  by the four thematic blocks (línea histórica, estado mexicano,
  geografía, cultura) and color-coded by era. Filter by category,
  search with `/`, hop into flashcards or quiz from the toolbar.
- **Flashcards** (`/flashcards`) — flip-card deck with persisted
  known / review state in `localStorage`. Keyboard: `←` `→` to
  navigate, `Space` or `Enter` to flip, `K` mark known, `R` mark
  review.
- **Quiz** (`/quiz`) — 10-question multiple-choice round with
  same-category distractors. Keyboard: `1`–`4` to answer, `Enter`
  or `→` to advance.
- **Planes** (`/planes`) — interactive timeline of Mexico's
  foundational political plans (Iguala, Ayutla, Casa Mata,
  Tuxtepec, San Luis…) organized by era with bezier connectors
  between related plans and deep links (`?plan=<slug>`) into the
  modal detail view.

Filters live in the URL (`?q=`, `?exclude=`), so the search term
and excluded categories are preserved when you navigate between
list, flashcards and quiz.

## Stack

- Next.js 16 (App Router, Turbopack) on React 19
- TypeScript, Tailwind CSS 4 with CSS variables and a dark theme
- `nuqs` for URL-backed state
- `@tanstack/react-virtual` for windowed rendering of ~540 cards
- `@tanstack/react-hotkeys` for declarative keyboard shortcuts
- `clsx` + `tailwind-merge` (combined via `src/lib/cn.ts`) for
  class composition

## Local development

The project uses [Bun](https://bun.sh) as the package manager and
script runner. Bun records every platform-specific optional
dependency in `bun.lock`, which is what makes the GitHub Pages
build on Linux work from a lockfile generated on macOS — npm
silently drops those entries.

```bash
bun install
bun run dev
# → http://localhost:3000
```

`bun run build` produces a normal Next.js build. To preview the
static export that GitHub Pages serves:

```bash
GITHUB_PAGES=true bun run build
bunx serve out
# → http://localhost:3000/historia-mexico/
```

`bunx tsc --noEmit` and `bunx eslint .` should both come back
clean.

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by
`.github/workflows/pages.yml`. The workflow uses
[`oven-sh/setup-bun@v2`](https://github.com/oven-sh/setup-bun),
runs `bun install --frozen-lockfile`, then `bun run build` with
`GITHUB_PAGES=true`. The site is served under
`/historia-mexico/`; `next.config.ts` gates `output: "export"`,
`basePath`, `trailingSlash` and `images.unoptimized` behind the
`GITHUB_PAGES=true` env var, so local builds remain at `/`
without a prefix.

To enable Pages the first time: **Settings → Pages → Source →
GitHub Actions**.

## Conventions

See [`AGENTS.md`](./AGENTS.md). Short version: one component per
file, hooks and helpers in their own files, `cn` for class
composition, `"use client"` only when actually needed (hooks,
browser APIs, JSX event handlers), no re-export-only files,
comments in English and UI strings in Spanish.

## Data

The question bank lives under `src/app/_data/historia/`, split
into one file per topical bucket (`prehispanico`, `colonia`,
`independencia`, `siglo-19`, `revolucion`, `moderno`,
`constitucion`, `geografia`, `gastronomia`, `cultura`,
`unesco-y-pueblos`, `deportes`, `instituciones`, `personajes`).
`types.ts` declares the categories and the four thematic groups;
`index.ts` aggregates everything and exposes lookup helpers. The
timeline data lives in `src/app/_data/planes.ts`.
