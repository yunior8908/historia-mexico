import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose class names with `clsx` semantics and resolve Tailwind
 * conflicts via `tailwind-merge`.
 *
 * Accepts the same inputs as `clsx` (strings, conditionals, arrays,
 * objects) and returns a deduplicated, conflict-resolved string. Use
 * this anywhere we'd otherwise write `[a, b, c].join(" ")` or a long
 * template literal with conditionals.
 *
 * @example
 *   cn("rounded-md", isActive && "bg-accent", className)
 *   cn(["px-3", "py-1"], { "opacity-50": disabled })
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
