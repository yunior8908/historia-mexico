import type { NextConfig } from "next";

// The GitHub Pages workflow sets `GITHUB_PAGES=true` before running
// `next build`. When that flag is present we produce a static export
// (`out/`) with the repository-scoped base path that GitHub Pages
// serves at `https://<user>.github.io/historia-mexico/`. Local
// `next dev` and a plain `next build` are unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Enables React's View Transitions integration: Next wraps every
  // `<Link>` navigation in `document.startViewTransition()`, so the
  // browser can animate the swap. The actual animation lives in
  // `globals.css` (root crossfade + reduced-motion guard) — no React
  // `<ViewTransition>` component is imported, only CSS is used.
  experimental: { viewTransition: true },
  ...(isGithubPages && {
    output: "export",
    basePath: "/historia-mexico",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
