import Link from "next/link";
import { ArrowRight, ChevronDown, Cpu, Network, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const pillars = [
  {
    icon: Cpu,
    title: "Intelligence",
    description: "Adaptive systems designed to reason, learn, and evolve with the environments they operate in.",
  },
  {
    icon: Network,
    title: "Distributed systems",
    description: "Infrastructure built to coordinate computation across devices, networks, and autonomous nodes.",
  },
  {
    icon: ShieldCheck,
    title: "Trust by design",
    description: "Security, resilience, and controllability treated as first-class engineering constraints.",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-transparent text-foreground">
      <Navbar />

      <main className="flex-1">
        <section className="relative mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

          <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-foreground/60 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
                Advanced Distributed Evolution of Logic Operating Systems
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Engineering what
                <span className="block text-foreground/45">comes next.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-foreground/65 sm:text-lg sm:leading-8">
                ADELOS is a deep-tech corporation building intelligent, distributed systems for a world where computation is no longer confined to a single machine.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#systems"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  Explore ADELOS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/15 bg-background/40 px-6 text-sm font-medium backdrop-blur-xl transition-colors hover:bg-background/70"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="relative hidden min-h-[420px] lg:block">
              <div className="absolute inset-10 rounded-full border border-foreground/10" />
              <div className="absolute inset-24 rounded-full border border-foreground/10" />
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/15 bg-background/30 shadow-2xl backdrop-blur-2xl" />
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/15 bg-foreground text-background">
                <span className="text-xs font-semibold tracking-[0.35em]">ADL</span>
              </div>
              <div className="absolute left-[12%] top-[24%] h-2 w-2 rounded-full bg-foreground/70 shadow-[0_0_24px_rgba(255,255,255,0.45)]" />
              <div className="absolute right-[14%] top-[34%] h-1.5 w-1.5 rounded-full bg-foreground/50" />
              <div className="absolute bottom-[22%] left-[25%] h-1.5 w-1.5 rounded-full bg-foreground/40" />
              <div className="absolute bottom-[28%] right-[22%] h-2 w-2 rounded-full bg-foreground/70" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            </div>
          </div>

          <Link href="#systems" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/40">
            Scroll to explore
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </Link>
        </section>

        <section id="systems" className="border-y border-foreground/10 bg-background/30 backdrop-blur-xl">
          <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/45">The foundation</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Three principles. One direction.</h2>
              <p className="mt-5 text-base leading-7 text-foreground/60">
                We build technology around the idea that intelligence, infrastructure, and security should evolve together.
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 md:grid-cols-3">
              {pillars.map(({ icon: Icon, title, description }) => (
                <article key={title} className="bg-background/70 p-8 backdrop-blur-xl sm:p-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5">
                    <Icon className="h-5 w-5 text-foreground/70" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/55">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-foreground/10 bg-background/45 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/45">Built for the long horizon</p>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">The future is a systems problem.</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/60">
                  ADELOS brings software, intelligence, and distributed computation into one engineering discipline.
                </p>
              </div>
              <Link href="/contact" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-foreground/15 px-5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background">
                Contact ADELOS
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
