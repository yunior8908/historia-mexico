"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Props = { children: ReactNode };

/**
 * Lightweight route-change crossfade. The `motion.div` is keyed by
 * pathname, so React remounts it on navigation and motion plays the
 * `initial -> animate` transition on the fresh instance. No
 * `AnimatePresence` / exit animation: the old page leaves the moment
 * the new one mounts, which keeps SPA navigation feeling snappy and
 * avoids the `mode="wait"` delay where the new page would be held
 * off-screen until the exit completed. Respects
 * `prefers-reduced-motion`.
 */
export function RouteTransition({ children }: Props) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      initial={reduced ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.22, ease: "easeOut" }}
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
