"use client";

import { usePathname } from "next/navigation";
import Aurora from "@/components/Aurora";
import "./GlobalAurora.css";

export default function GlobalAurora() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="global-aurora" aria-hidden="true">
      <Aurora
        colorStops={["#a6ff91", "#c9b4df", "#684dff"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
    </div>
  );
}
