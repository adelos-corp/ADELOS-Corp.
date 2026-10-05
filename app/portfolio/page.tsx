"use client";

import Link from "next/link";
import LightPillar from "@/components/LightPillar";
import BorderGlow from "@/components/BorderGlow";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Portfolio.css";

const entries = [
  {name:"William Graham",stage:"Working",label:"Personalized AI Platform",description:"Privacy-first artificial intelligence running on local architecture with secure cloud synchronization. Built for the modern enterprise.",href:"/products/william-graham"},
  {name:"Studenthome",stage:"Beta",label:"Education Platform",description:"A seamless, unified destination for global students. Bridging the gap between distributed education systems and continuous learning.",href:"/products/studenthome"},
  {name:"CODELOS",stage:"Beta",label:"Engineering Platform",description:"The next evolution of the integrated development environment. Intelligent, distributed, and engineered for high-performance programming.",href:"/products"},
  {name:"HISA",stage:"Under active development",label:"Hybrid Intelligence Systems Architecture",description:"Trust-based intelligence architectures prioritizing continuity and absolute privacy in the most demanding environments.",href:"/research"},
  {name:"QESA",stage:"Under active development",label:"Quantum Encryption Systems Architecture",description:"Future enterprise cybersecurity. Quantum-ready networking and secure infrastructure with AI-assisted monitoring.",href:"/research"},
  {name:"TENSA",stage:"Coming soon",label:"Tendon Engineered Natural Systems Architecture",description:"Mechanically intelligent robotics. Advanced biomechanics research enabling true physical intelligence through artificial tendon systems.",href:"/research"}
];

export default function PortfolioPage() {
  return <main className="portfolio-page">
    <MenuBar />
    <LightPillar topColor="#5227ff" bottomColor="#ff9ffc" intensity={1} rotationSpeed={0.9} interactive={false} glowAmount={0.002} pillarWidth={3} pillarHeight={0.3} noiseIntensity={0.5} mixBlendMode="screen" pillarRotation={25} quality="high" lightMode={false} className="portfolio-page__background" />
    <section className="portfolio-shell">
      <header className="portfolio-heading"><span>ADELOS / PORTFOLIO</span><h1>Portfolio</h1><p>Explore our current suite of technologies and advanced research projects shaping the future.</p></header>
      <div className="portfolio-grid">{entries.map(entry=><Link href={entry.href} className="portfolio-card-link" key={entry.name}>
        <BorderGlow borderRadius={18} glowRadius={34} glowIntensity={0.72} edgeSensitivity={26} coneSpread={22} animated={false} backgroundColor="rgba(12, 11, 18, 0.54)" colors={["#5227ff","#ff9ffc","#38bdf8"]} fillOpacity={0.12} className="portfolio-card">
          <div className="portfolio-card__content"><span className="portfolio-card__stage">{entry.stage}</span><span className="portfolio-card__label">{entry.label}</span><h2>{entry.name}</h2><p>{entry.description}</p><span className="portfolio-card__arrow">↗</span></div>
        </BorderGlow>
      </Link>)}</div>
    </section>
    <SiteFooter />
  </main>;
}
