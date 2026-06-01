"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Track the offset between the start of a scrollable container and
 * the top of the document so that `useWindowVirtualizer` can map
 * window scroll positions to row offsets inside the container.
 *
 * Recomputed on resize; the initial value is read synchronously
 * inside the effect, which is what `useWindowVirtualizer` expects
 * (it falls back to 0 until the first measurement lands).
 */
export function useWindowScrollMargin(ref: RefObject<HTMLElement | null>) {
  const [scrollMargin, setScrollMargin] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setScrollMargin(rect.top + window.scrollY);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [ref]);

  return scrollMargin;
}
