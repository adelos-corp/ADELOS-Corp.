import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Products.css";

const products = [
  { number: "01", name: "William Graham", category: "Personalized AI", stage: "Working", text: "Privacy-first personalized AI with local processing and secure cloud synchronization.", href: "/products/william-graham", visual: "william" },
  { number: "02", name: "Studenthome", category: "Education", stage: "Beta", text: "A unified destination for global students and distributed education systems.", href: "/products/studenthome", visual: "studenthome" },
  { number: "03", name: "Codelos", category: "Engineering platform", stage: "Under active development", text: "An intelligent, distributed engineering platform for high-performance programming.", href: "/products/codelos", visual: "codelos" },
  { number: "04", name: "QESA", category: "Security architecture", stage: "Coming soon", text: "Quantum Encryption Systems Architecture for quantum-ready networking and secure infrastructure.", href: "/products/qesa", visual: "qesa" },
  { number: "05", name: "TENSA", category: "Biomimetics & robotics", stage: "Under active development", text: "Tendon Engineered Natural Systems Architecture for artificial-tendon biomechanics and robotics research.", href: "/products/tensa", visual: "tensa" },
  { number: "06", name: "VISA", category: "Spatial computing", stage: "In development", text: "Visual Intelligence Systems Architecture: immersive spatial-computing software, not a headset.", href: "/products/visa", visual: "visa" },
];

export default function ProductsPage() {
  return (
    <main className="products-page">
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
            <Link key={product.name} href={product.href} className={`product-card-link product-card-link--${product.visual}`}>
              <div className="product-card__visual" aria-hidden="true">
                <span className="product-card__visual-orbit" />
                <span className="product-card__visual-core" />
                <span className="product-card__visual-line" />
                <span className="product-card__visual-mark">{product.number}</span>
              </div>
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