"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let target = window.scrollY;
    let current = target;
    let frame = 0;
    let lastTime = performance.now();

    const clampTarget = () => {
      const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      target = Math.max(0, Math.min(target, max));
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey) return;

      const targetElement = event.target as HTMLElement | null;
      if (targetElement?.closest("[data-native-scroll]")) return;

      event.preventDefault();
      target += event.deltaY;
      clampTarget();

      if (!frame) frame = requestAnimationFrame(animate);
    };

    const animate = (time: number) => {
      const delta = Math.min(32, time - lastTime);
      lastTime = time;

      const distance = target - current;
      const easing = 1 - Math.pow(0.0008, delta / 16.6667);
      current += distance * easing;

      if (Math.abs(distance) < 0.35) {
        current = target;
        window.scrollTo(0, current);
        frame = 0;
        return;
      }

      window.scrollTo(0, current);
      frame = requestAnimationFrame(animate);
    };

    const sync = () => {
      target = window.scrollY;
      current = target;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", clampTarget);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", clampTarget);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
