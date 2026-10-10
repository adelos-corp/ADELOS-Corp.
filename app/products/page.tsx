import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Products.css";

const products = [
  { number: "01", name: "William Graham", stage: "Working", text: "Privacy-first personalized AI with local processing and secure cloud synchronization.", href: "/products/william-graham" },
  { number: "02", name: "Studenthome", stage: "Beta", text: "A unified destination for global students and distributed education systems.", href: "/products/studenthome" },
  { number: "03", name: "Codelos", stage: "Under active development", text: "An intelligent, distributed engineering platform for high-performance programming.", href: "/products/codelos" },
  { number: "04", name: "QESA", stage: "Coming soon", text: "Quantum Encryption Systems Architecture for quantum-ready networking and secure infrastructure.", href: "/products/qesa" },
  { number: "05", name: "TENSA", stage: "Under active development", text: "Tendon Engineered Natural Systems Architecture for artificial-tendon biomechanics and robotics research.", href: "/products/tensa" },
  { number: "06", name: "VISA", stage: "In development", text: "Visual Intelligence Systems Architecture: immersive spatial-computing software, not a headset.", href: "/products/visa" },
];

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="products-shell">
        <header className="products-heading">
          <div>
            <span className="products-heading__eyebrow">ADELOS / PRODUCTS</span>
            <h1>Products</h1>
          </div>
          <p>Systems designed to move from fundamental research into useful reality.</p>
        </header>

        <div className="products-grid">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="product-card-link">
              <div className="product-card__content">
                <span className="product-card__number">{product.number}</span>
                <span className="product-card__stage">{product.stage}</span>
                <h2>{product.name}</h2>
                <p>{product.text}</p>
                <span className="product-card__arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}