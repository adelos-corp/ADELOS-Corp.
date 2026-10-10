"use client";

import { useRef } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Home.css";

const products = [
  { number:"01", name:"William Graham", text:"Privacy-first personalized AI.", href:"/products/william-graham", accent:"violet" as const },
  { number:"02", name:"Studenthome", text:"A unified destination for global students.", href:"/products/studenthome", accent:"blue" as const },
  { number:"03", name:"Codelos", text:"Codelos IDE · Daemon · Sailwind · COCOA · Fly", href:"/products/codelos", accent:"orange" as const },
  { number:"04", name:"QESA", text:"Quantum Encryption Systems Architecture.", href:"/products/qesa", accent:"green" as const },
  { number:"05", name:"TENSA", text:"Tendon Engineered Natural Systems Architecture.", href:"/products/tensa", accent:"violet" as const },
  { number:"06", name:"VISA", text:"Visual Intelligence Systems Architecture.", href:"/products/visa", accent:"blue" as const },
];

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => trackRef.current?.scrollBy({ left: direction * 430, behavior: "smooth" });

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <span className="home-hero__eyebrow">ADELOS CORP.</span>
          <h1><span>Engineering solutions</span><span>that solve tomorrow.</span></h1>
          <p>Advanced systems. Deeper integration.<br/>A more capable tomorrow.</p>
          <div className="home-hero__actions">
            <Link href="/products" className="home-hero__primary">Explore <span>→</span></Link>
            <Link href="/research" className="home-hero__secondary">Our Research</Link>
          </div>
        </div>
      </section>

      <div className="home-gradient-sheet">
        <section className="home-products">
          <div className="home-products__heading">
            <span>OUR PRODUCTS</span>
            <div className="home-products__controls"><button onClick={() => move(-1)} aria-label="Previous products">←</button><button onClick={() => move(1)} aria-label="Next products">→</button></div>
          </div>
          <div className="home-products__intro">Systems<br/><span>for a more<br/>capable future.</span></div>
          <div className="home-products__track" ref={trackRef} data-lenis-prevent>
            {products.map(product => (
              <Link href={product.href} className={`home-product home-product--${product.accent}`} key={product.name}>
                <span className="home-product__number">{product.number}</span>
                <h2>{product.name}</h2>
                <p>{product.text}</p>
                <span className="home-product__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-statement">
          <span>THE ADELOS APPROACH</span>
          <h2>We build systems by understanding the systems beneath them.</h2>
          <Link href="/about">About ADELOS <span>→</span></Link>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}