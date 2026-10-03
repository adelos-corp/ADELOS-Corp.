"use client";

import Link from "next/link";
import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Home.css";

const technologies = [
  {name:"William Graham",stage:"Working",text:"Privacy-first artificial intelligence running on local architecture with secure cloud synchronization. Built for the modern enterprise.",href:"/products/william-graham"},
  {name:"Studenthome",stage:"Beta",text:"A seamless, unified destination for global students. Bridging the gap between distributed education systems and continuous learning.",href:"/products/studenthome"},
  {name:"CODELOS",stage:"Beta",text:"The next evolution of the integrated development environment. Intelligent, distributed, and engineered for high-performance programming.",href:"/portfolio"},
  {name:"HISA",stage:"Under active development",text:"Trust-based intelligence architectures prioritizing continuity and absolute privacy in the most demanding environments.",href:"/portfolio"},
  {name:"QESA",stage:"Under active development",text:"Future enterprise cybersecurity. Quantum-ready networking and secure infrastructure with AI-assisted monitoring.",href:"/portfolio"},
  {name:"TENSA",stage:"Coming soon",text:"Mechanically intelligent robotics. Advanced biomechanics research enabling true physical intelligence through artificial tendon systems.",href:"/portfolio"}
];

export default function Home() {
  return <main className="home-page">
    <MenuBar />
    <LightPillar topColor="#5227ff" bottomColor="#ff9ffc" intensity={1} rotationSpeed={0.9} interactive={false} glowAmount={0.002} pillarWidth={3} pillarHeight={0.3} noiseIntensity={0.5} mixBlendMode="screen" pillarRotation={25} quality="high" lightMode={false} className="home-page__background" />
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="home-hero__title">Engineering Solutions That Solve Tomorrow.</h1>
        <p className="home-hero__subtitle">Advanced Distributed Evolution of Logic Operating Systems</p>
        <Link href="/portfolio" className="home-hero__button">Explore ADELOS</Link>
      </div>
    </section>
    <section className="home-content">
      <article className="home-panel">
        <span className="home-panel__eyebrow">ADELOS / TECHNOLOGY PORTFOLIO</span>
        <h2>Products people use. Architectures the world builds upon.</h2>
        <p>ADELOS develops both products and research architectures. Products solve today's problems. Research architectures enable tomorrow's innovations.</p>
        <div className="home-grid">{technologies.map(technology=><Link href={technology.href} className="home-card" key={technology.name}><span className="home-card__meta">{technology.stage}</span><h3>{technology.name}</h3><p>{technology.text}</p><span className="home-card__arrow">↗</span></Link>)}</div>
      </article>
      <article className="home-panel">
        <span className="home-panel__eyebrow">ADELOS / PHILOSOPHY</span>
        <h2>Research First. Products Second.</h2>
        <p>ADELOS believes breakthrough engineering begins with first-principles research. Rather than creating isolated applications, ADELOS develops foundational architectures that support future generations of technology.</p>
        <p>It will emerge from the convergence of intelligent systems, secure architectures, advanced mechanics, and scientific research.</p>
        <Link href="/philosophy" className="home-card__arrow">Explore philosophy ↗</Link>
      </article>
      <article className="home-panel">
        <span className="home-panel__eyebrow">ADELOS / RESEARCH</span>
        <h2>The future will not be built by software alone.</h2>
        <p>It will emerge from the convergence of intelligent systems, secure architectures, advanced mechanics, and scientific research. ADELOS exists to engineer that future.</p>
        <Link href="/research" className="home-card__arrow">Explore research ↗</Link>
      </article>
      <article className="home-panel">
        <span className="home-panel__eyebrow">ADELOS / CAREERS</span>
        <h2>Help Build Tomorrow.</h2>
        <p>ADELOS seeks engineers, researchers, designers, and builders who enjoy solving fundamental engineering challenges.</p>
        <div className="home-grid">{["Software Engineering","Cybersecurity","Quantum Computing","Biomechanics","Artificial Intelligence","Developer Tools","UI/UX Design","Research"].map(role=><div className="home-card" key={role}><h3>{role}</h3></div>)}</div>
        <Link href="/careers" className="home-card__arrow">View Open Roles ↗</Link>
      </article>
    </section>
    <SiteFooter />
  </main>;
}
