"use client";

import Link from "next/link";
import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import SiteFooter from "@/components/SiteFooter";
import "./CorporatePage.css";

type CorporateItem = { title: string; text?: string; meta?: string; href?: string };
type CorporateSection = { heading: string; intro?: string; body?: string; items?: CorporateItem[] };
type CorporatePageProps = { eyebrow: string; title: string; intro: string; sections: CorporateSection[]; topColor?: string; bottomColor?: string };

export default function CorporatePage({ eyebrow, title, intro, sections, topColor="#5227ff", bottomColor="#ff9ffc" }: CorporatePageProps) {
  return <main className="corporate-page">
    <MenuBar />
    <LightPillar topColor={topColor} bottomColor={bottomColor} intensity={1} rotationSpeed={0.9} interactive={false} glowAmount={0.002} pillarWidth={3} pillarHeight={0.3} noiseIntensity={0.5} mixBlendMode="screen" pillarRotation={25} quality="high" lightMode={false} className="corporate-page__background" />
    <section className="corporate-shell">
      <header className="corporate-heading">
        <span className="corporate-heading__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <div className="corporate-sections">
        {sections.map((section,index)=><section className="corporate-section" key={section.heading}>
          <div className="corporate-section__header">
            <span className="corporate-section__index">{String(index+1).padStart(2,"0")}</span>
            <div><h2>{section.heading}</h2>{section.intro&&<p>{section.intro}</p>}</div>
          </div>
          {section.body&&<p className="corporate-section__body">{section.body}</p>}
          {section.items&&<div className="corporate-items">{section.items.map(item=>{
            const content=<>{item.meta&&<span className="corporate-item__meta">{item.meta}</span>}<h3>{item.title}</h3>{item.text&&<p>{item.text}</p>}{item.href&&<span className="corporate-item__arrow">↗</span>}</>;
            return item.href?<Link className="corporate-item" href={item.href} key={item.title}>{content}</Link>:<article className="corporate-item" key={item.title}>{content}</article>;
          })}</div>}
        </section>)}
      </div>
    </section>
    <SiteFooter />
  </main>;
}
