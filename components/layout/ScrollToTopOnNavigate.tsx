"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * 페이지(pathname) 변경 시 최상단으로 즉시 이동.
 * 목차 anchor(#) 이동은 건드리지 않는다.
 */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
