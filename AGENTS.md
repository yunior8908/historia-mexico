<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Component & module structure

**Always split logic into separate files and components.** Do not let
files grow into monoliths that mix multiple concerns.

Concretely:

- **One component per file.** If a `.tsx` file already exports a
  component and you find yourself adding a helper component
  (`SearchBar`, `EmptyState`, `Item`, `Header`…), put it in its own
  file in the same folder. Never inline more than one sub-component in
  a file just for convenience.
- **Extract hooks.** Non-trivial `useEffect` / `useState` /
  `useMemo` clusters that own a coherent piece of behavior (scroll
  margin tracking, deck shuffling, progress persistence, etc.) become
  `useXxx.ts` files next to the component.
- **Extract pure helpers.** `shuffle`, `buildQuestion`, `loadProgress`,
  predicate builders, formatters, etc. live in their own `.ts` files.
  No "junk drawer" `utils.ts` — name the file after what it does.
- **Co-locate by feature.** A complex component lives in its own
  folder: `study/list/ListView.tsx` next to `study/list/SearchBar.tsx`,
  `study/list/useStudyRows.ts`, etc. The folder name doubles as the
  feature boundary.
- **Shared primitives go up one level.** Anything reused by siblings
  (e.g. `PlanRef`, `shuffleArray`) lives in a `shared/` sibling folder,
  not duplicated.
- **Class-name composition** uses `cn` from `@/lib/cn` (a `clsx` +
  `tailwind-merge` wrapper). Never `[a, b].join(" ")` or template
  literals with embedded conditionals.
- **`"use client"` only when needed.** Add the directive at the top
  of a file only when the component (or hook) actually uses React
  hooks, browser APIs, or defines JSX event handlers
  (`onClick`, `onChange`, `onKeyDown`, etc.). Pure presentational
  components — those that just take props and render JSX, possibly
  forwarding callbacks as props to children — must NOT carry the
  directive: they can render as Server Components, and adding
  `"use client"` only inflates the client bundle. When in doubt,
  check whether the component itself does anything besides
  composing JSX from props.
- **No re-export-only files.** Never create a file whose only
  contents are `export { Foo } from "./somewhere/Foo"`. Barrel /
  index files add an extra hop with no value. Consumers should
  import the component from its real location
  (`@/app/_components/study/list/ListView`), even if the path is
  slightly longer. If a folder needs an obvious entry point, name
  the orchestrator file after the folder (`list/ListView.tsx`,
  `flashcards/Flashcards.tsx`) and import that directly.
- **Comments in English, UI strings in Spanish.** This is a Spanish
  app studying Mexican history. Anything the user reads stays in
  Spanish; anything other engineers read (comments, JSDoc, identifiers)
  stays in English.
