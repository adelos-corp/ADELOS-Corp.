"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import Aurora from "@/components/Aurora";
import "./GlobalAurora.css";

declare global {
  interface Window {
    __adelosLenis?: Lenis;
  }
}

export default function GlobalAurora() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | undefined;
    let frame = 0;

    if (!reduceMotion) {
      lenis = new Lenis({
        autoRaf: false,
        smoothWheel: true,
        anchors: true,
        lerp: 0.09,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
      });
      window.__adelosLenis = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = window.requestAnimationFrame(raf);
      };
      frame = window.requestAnimationFrame(raf);
    }

    const scrollToTop = () => {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
      } else {
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      }
    };

    window.addEventListener("adelos:scroll-top", scrollToTop);
    return () => {
      window.removeEventListener("adelos:scroll-top", scrollToTop);
      window.cancelAnimationFrame(frame);
      lenis?.destroy();
      if (window.__adelosLenis === lenis) delete window.__adelosLenis;
    };
  }, []);

  useEffect(() => {
    window.__adelosLenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  // The Products pages own their own fixed, product-colored Aurora layer.
  if (pathname === "/products" || pathname?.startsWith("/products/")) return null;

  return (
    <div className="global-aurora" aria-hidden="true">
      <Aurora
        colorStops={["#00F5D4", "#7C3CFF", "#FF3D9A"]}
        blend={0.62}
        amplitude={1.12}
        speed={1}
      />
    </div>
  );
}
