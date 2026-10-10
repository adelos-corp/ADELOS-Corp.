"use client";

import { usePathname } from "next/navigation";
import Aurora from "@/components/Aurora";
import "./GlobalAurora.css";

export default function GlobalAurora() {
  const pathname = usePathname();

  // The Products page owns its own fixed, interactive Aurora layer.
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
