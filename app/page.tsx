"use client";

import { useRef } from "react";
import Link from "next/link";
import Aurora from "@/components/Aurora";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Home.css";

const products = [
  { number:"01", name:"VISA", text:"Visual Intelligence Systems Architecture.", href:"/products/visa", accent:"green" as const },
  { number:"02", name:"William Graham", text:"Flagship artificial intelligence system.", href:"/products/william-graham", accent:"violet" as const },
  { number:"03", name:"Studenthome", text:"Global student infrastructure.", href:"/products/studenthome", accent:"blue" as const },
  { number:"04", name:"Daemon", text:"Distributed systems & compute infrastructure.", href:"/products", accent:"orange" as const },
];

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => trackRef.current?.scrollBy({ left: direction * 430, behavior: "smooth" });

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__aurora"><Aurora colorStops={["#a6ff91", "#c9b4df", "#684dff"]} blend={0.5} amplitude={1.0} speed={1} /></div>
        <div className="home-hero__content">
          <span className="home-hero__eyebrow">ADELOS CORP.</span>
          <h1>Engineering<br/>solutions<br/>that solve<br/>tomorrow.</h1>
          <p>Advanced systems. Deeper integration.<br/>A more capable tomorrow.</p>
          <div className="home-hero__actions">
            <Link href="/products" className="home-hero__primary">Explore <span>→</span></Link>
            <Link href="/research" className="home-hero__secondary">Our Research</Link>
          </div>
        </div>
      </section>

      <section className="home-products">
        <div className="home-products__heading">
          <span>OUR PRODUCTS</span>
          <div className="home-products__controls"><button onClick={() => move(-1)} aria-label="Previous products">←</button><button onClick={() => move(1)} aria-label="Next products">→</button></div>
        </div>
        <div className="home-products__intro">Systems<br/><span>for a more<br/>capable future.</span></div>
        <div className="home-products__track" ref={trackRef} data-lenis-prevent>
          {products.map(product => (
            <Link href={product.href} className={`home-product home-product--${product.accent}`} key={product.name}>
              <div className="home-product__aurora"><Aurora colorStops={["#a6ff91", "#c9b4df", "#684dff"]} blend={0.5} amplitude={1.0} speed={1} /></div>
              <span className="home-product__number">{product.number}</span>
              <h2>{product.name}</h2>
              <p>{product.text}</p>
              <span className="home-product__arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-statement">
        <span>THE ADELOS APPROACH</span>
        <h2>We build systems by understanding the systems beneath them.</h2>
        <Link href="/about">About ADELOS <span>→</span></Link>
      </section>

      <section className="home-bottom-aurora" aria-hidden="true">
        <div className="home-bottom-aurora__field">
          <Aurora colorStops={["#a6ff91", "#c9b4df", "#684dff"]} blend={0.5} amplitude={1.0} speed={1} />
        </div>
        <div className="home-bottom-aurora__veil" />
      </section>

      <SiteFooter />

      <section className="home-bottom-aurora" aria-hidden="true">
        <div className="home-bottom-aurora__field">
          <Aurora colorStops={["#7cff67", "#B497CF", "#5227FF"]} blend={0.5} amplitude={1.0} speed={1} />
        </div>
      </section>

    </main>
  );
}
