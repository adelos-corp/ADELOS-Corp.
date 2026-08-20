"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WilliamGrahamUpdate() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
      return;
    }

    router.push("/");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 py-16 text-zinc-50 sm:px-8 lg:px-12 font-sans selection:bg-amber-500/30">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vw] max-h-[800px] w-[80vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/20 blur-[140px] opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vw] max-h-[600px] w-[60vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-[110px] opacity-40" />

      <div
        className={`relative z-10 mx-auto flex max-w-3xl flex-col items-center px-2 py-8 text-center transition-all duration-1000 sm:px-6 md:px-8 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <div
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2.5 text-sm font-medium tracking-[0.24em] text-amber-400 shadow-lg shadow-amber-500/5 backdrop-blur-md"
          style={{ transitionDelay: "100ms" }}
        >
          <span className="text-base leading-none">🟡</span>
          <span>Active Development</span>
        </div>

        <h1
          className="mb-10 text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{ transitionDelay: "200ms" }}
        >
          William Graham Development Update
        </h1>

        <div
          className="mx-auto max-w-2xl space-y-6 text-left text-lg leading-relaxed text-zinc-400 md:text-center md:text-xl"
          style={{ transitionDelay: "300ms" }}
        >
          <p>Unfortunately, William Graham is currently undergoing a major architectural refinement.</p>
          <p>
            As development progressed, we identified opportunities to strengthen the platform&apos;s core systems, particularly around memory, reasoning, and long-term scalability. To ensure the highest level of quality, portions of the platform have been temporarily rolled back while these foundations are rebuilt.
          </p>
          <p>
            While this means some previously available functionality is temporarily unavailable, this decision allows us to deliver a more capable, stable, and future-ready William Graham.
          </p>
          <p className="pt-4">We sincerely appreciate your patience and continued support as we build the future of intelligent computing.</p>
          <p className="pb-8 font-medium text-zinc-300">— The ADELOS Team</p>
        </div>

        <div className="mt-12" style={{ transitionDelay: "500ms" }}>
          <button
            type="button"
            onClick={handleBack}
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-medium tracking-[0.2em] uppercase text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <span className="text-base transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>Return to ADELOS</span>
          </button>
        </div>
      </div>
    </div>
  );
}
