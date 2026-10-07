"use client";

import { usePathname } from "next/navigation";
import Aurora from "@/components/Aurora";
import "./GlobalAurora.css";

export default function GlobalAurora() {
  return (
    <div className="global-aurora" aria-hidden="true">
      <Aurora
        colorStops={["#7cff67", "#c9b4df", "#684dff"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
    </div>
  );
}
