"use client";

import Link from "next/link";
import MenuBar from "@/components/MenuBar";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Portfolio.css";

const entries = [
  { name: "William Graham", stage: "Working", label: "Personalized AI Platform", description: "Privacy-first artificial intelligence running on local architecture with secure cloud synchronization. Built for the modern enterprise.", href: "/products/william-graham" },
  { name: "Studenthome", stage: "Beta", label: "Education Platform", description: "A seamless, unified destination for global students. Bridging the gap between distributed education systems and continuous learning.", href: "/products/studenthome" },
  { name: "Codelos", stage: "Beta", label: "Engineering Platform", description: "The next evolution of the integrated development environment. Intelligent, distributed, and engineered for high-performance programming.", href: "/products" },
  { name: "HISA", stage: "Under active development", label: "Hybrid Intelligence Systems Architecture", description: "Trust-based intelligence architectures prioritizing continuity and privacy in demanding environments.", href: "/research" },
  { name: "QESA", stage: "Under active development", label: "Quantum Encryption Systems Architecture", description: "Security architecture research spanning cryptographic systems, key management, and AI-assisted monitoring.", href: "/research" },
  { name: "TENSA", stage: "Coming soon", label: "Tendon Engineered Natural Systems Architecture", description: "Mechanically intelligent robotics research exploring physical intelligence through artificial tendon systems.", href: "/research" }
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <div className="portfolio-page__background" aria-hidden="true" />
      <MenuBar />
      <section className="portfolio-shell">
        <header className="portfolio-heading">
          <span>ADELOS / PORTFOLIO</span>
          <h1>Portfolio</h1>
          <p>Explore our current suite of technologies and advanced research projects shaping the future.</p>
        </header>
        <div className="portfolio-grid">
          {entries.map((entry) => (
            <Link href={entry.href} className="portfolio-card-link" key={entry.name}>
              <article className="portfolio-card">
                <div className="portfolio-card__content">
                  <span className="portfolio-card__stage">{entry.stage}</span>
                  <span className="portfolio-card__label">{entry.label}</span>
                  <h2>{entry.name}</h2>
                  <p>{entry.description}</p>
                  <span className="portfolio-card__arrow" aria-hidden="true">↗</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
