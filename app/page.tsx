"use client";

import Link from "next/link";
import MenuBar from "@/components/MenuBar";
import OrbitalVisual from "@/components/OrbitalVisual";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Home.css";

const products = [
  { number:"01", name:"VISA", text:"Visual Intelligence Systems Architecture.", href:"/products/visa", accent:"green" as const },
  { number:"02", name:"William Graham", text:"Flagship artificial intelligence system.", href:"/products/william-graham", accent:"violet" as const },
  { number:"03", name:"Studenthome", text:"Global student infrastructure.", href:"/products/studenthome", accent:"blue" as const },
  { number:"04", name:"Daemon", text:"Distributed systems & compute infrastructure.", href:"/products", accent:"orange" as const },
];

export default function Home() {
  return (
    <main className="home-page">
      <MenuBar />
      <section className="home-hero">
        <OrbitalVisual />
        <div className="home-hero__content">
          <span className="home-hero__eyebrow">ADELOS CORP.</span>
          <h1>Engineering<br/>solutions<br/>that solve<br/>tomorrow.</h1>
          <p>Advanced systems. Deeper integration.<br/>A more capable tomorrow.</p>
          <div className="home-hero__actions">
            <Link href="/products" className="home-hero__primary">Explore <span>→</span></Link>
            <Link href="/research" className="home-hero__secondary">Our Research</Link>
          </div>
        </div>
        <div className="home-hero__rail"><span className="is-active">01</span><span>02</span><span>03</span><span>04</span></div>
        <span className="home-hero__scroll">SCROLL</span>
      </section>

      <section className="home-products">
        <div className="home-products__heading">
          <span>OUR PRODUCTS</span>
          <div className="home-products__controls"><button aria-label="Previous">←</button><button aria-label="Next">→</button></div>
        </div>
        <div className="home-products__intro">Systems<br/><span>for a more<br/>capable future.</span></div>
        <div className="home-products__track">
          {products.map(product => (
            <Link href={product.href} className={`home-product home-product--${product.accent}`} key={product.name}>
              <OrbitalVisual accent={product.accent} small />
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

      <SiteFooter />
    </main>
  );
}