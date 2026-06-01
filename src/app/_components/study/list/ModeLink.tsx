import Link from "next/link";

import { cn } from "@/lib/cn";

type ModeLinkProps = {
  href: string;
  disabled: boolean;
  tone: "neutral" | "accent";
  children: React.ReactNode;
};

/**
 * Top-right "Flashcards" / "Quiz" pill in the study toolbar.
 * Renders an `<a>` when enabled and a styled `<span>` when no
 * categories are selected (so the user can't navigate into an
 * empty deck).
 */
export function ModeLink({ href, disabled, tone, children }: ModeLinkProps) {
  // `h-11` matches the search input so the toolbar row reads as a
  // single horizontal band. `inline-flex` + `items-center` keep the
  // uppercase label centered now that we own the height directly.
  const base =
    "h-11 items-center rounded-md px-3 font-display text-[0.72rem] uppercase tracking-[0.16em] transition-colors";
  const variant =
    tone === "accent"
      ? "border border-accent-border bg-accent-soft text-accent hover:bg-accent/15"
      : "border border-border bg-surface text-text-soft hover:border-border-strong hover:text-text";

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={cn(
          base,
          "hidden cursor-not-allowed border border-border bg-surface text-text-muted opacity-50 sm:inline-flex",
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={cn(base, "hidden sm:inline-flex", variant)}>
      {children}
    </Link>
  );
}
