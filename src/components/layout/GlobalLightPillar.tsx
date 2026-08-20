"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import LightPillar from "@/components/LightPillar";
import { useEffect, useState } from "react";

export function GlobalLightPillar() {
  const { mode, animationsPref } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  const isDark = mode === "dark";
  const isReduced = animationsPref === "reduced";

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
      <LightPillar
        topColor={isDark ? "#5227FF" : "#d8b4fe"}
        bottomColor={isDark ? "#FF9FFC" : "#fbcfe8"}
        intensity={isDark ? 0.6 : 0.4}
        rotationSpeed={isReduced ? 0 : 0.3}
        glowAmount={0.005}
        pillarWidth={3.0}
        pillarHeight={0.4}
        noiseIntensity={isReduced ? 0.1 : 0.5}
        pillarRotation={0}
        interactive={false}
        mixBlendMode="normal"
        quality="medium"
      />
    </div>
  );
}
