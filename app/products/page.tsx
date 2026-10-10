"use client";

import { useState } from "react";
import Link from "next/link";
import Aurora from "@/components/Aurora";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Products.css";

const defaultPalette = ["#00F5D4", "#7C3CFF", "#FF3D9A"];

const products = [
  { number: "01", name: "William Graham", category: "Personalized AI", stage: "Working", text: "Privacy-first personalized AI with local processing and secure cloud synchronization.", href: "/products/william-graham", visual: "william", palette: ["#5F00C9", "#591F8E", "#5227FF"] },
  { number: "02", name: "Studenthome", category: "Education", stage: "Beta", text: "A unified destination for global students and distributed education systems.", href: "/products/studenthome", visual: "studenthome", palette: ["#0049BA", "#2F8CF4", "#0079C1"] },
  { number: "03", name: "Codelos", category: "Engineering platform", stage: "Under active development", text: "An intelligent, distributed engineering platform for high-performance programming.", href: "/products/codelos", visual: "codelos", palette: ["#574CFD", "#0E0597", "#002FFF"] },
  { number: "04", name: "QESA", category: "Security architecture", stage: "Coming soon", text: "Quantum Encryption Systems Architecture for quantum-ready networking and secure infrastructure.", href: "/products/qesa", visual: "qesa", palette: ["#012901", "#134216", "#023A02"] },
  { number: "05", name: "TENSA", category: "Biomimetics & robotics", stage: "Under active development", text: "Tendon Engineered Natural Systems Architecture for artificial-tendon biomechanics and robotics research.", href: "/products/tensa", visual: "tensa", palette: ["#290101", "#421313", "#3A0202"] },
  { number: "06", name: "VISA", category: "Spatial computing", stage: "In development", text: "Visual Intelligence Systems Architecture: immersive spatial-computing software, not a headset.", href: "/products/visa", visual: "visa", palette: ["#00FF07", "#75FF00", "#D1FF00"] },
];

export default function ProductsPage() {
  const [activePalette, setActivePalette] = useState<string[]>(defaultPalette);

  return (
    <main className="products-page">
      <div className="products-aurora" aria-hidden="true">
        <Aurora colorStops={activePalette} blend={0.62} amplitude={1.12} speed={1} />
      </div>
      <section className="products-shell">
        <header className="products-heading">
          <div className="products-heading__title">
            <span className="products-heading__eyebrow">ADELOS / PRODUCTS / 2026</span>
            <h1>Ideas, engineered<br /><span>into reality.</span></h1>
          </div>
          <div className="products-heading__aside">
            <span className="products-heading__index">01 — 06 / THE PORTFOLIO</span>
            <p>Six distinct directions. One shared instinct: build what comes next.</p>
          </div>
        </header>

        <div className="products-grid">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className={`product-card-link product-card-link--${product.visual}`}
              onMouseEnter={() => setActivePalette(product.palette)}
              onMouseLeave={() => setActivePalette(defaultPalette)}
              onFocus={() => setActivePalette(product.palette)}
              onBlur={() => setActivePalette(defaultPalette)}
            >
              <div className="product-card__content">
                <div className="product-card__meta">
                  <span className="product-card__number">{product.number} / {product.category}</span>
                  <span className="product-card__stage">{product.stage}</span>
                </div>
                <h2>{product.name}</h2>
                <p>{product.text}</p>
                <span className="product-card__explore">Explore product <b aria-hidden="true">↗</b></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="products-endnote"><span>BUILT BY ADELOS CORP.</span><span>RESEARCH → SYSTEMS → REALITY</span></div>
      </section>
      <SiteFooter />
    </main>
  );
}
