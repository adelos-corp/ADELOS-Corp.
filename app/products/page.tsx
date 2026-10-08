import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Products.css";

const products = [
  { number: "01", name: "William Graham", stage: "In development", text: "Flagship artificial intelligence system.", href: "/products/william-graham" },
  { number: "02", name: "Studenthome", stage: "In development", text: "Global student infrastructure.", href: "/products/studenthome" },
  { number: "03", name: "Codelos", stage: "Platform", text: "Codelos IDE · Daemon · Sailwind · COCOA · Fly", href: "/products" },
  { number: "04", name: "QESA", stage: "In development", text: "Quantum Encrypted Systems Architecture.", href: "/products" },
  { number: "05", name: "TENSA", stage: "In development", text: "Tendon Engineered Natural SA.", href: "/products" },
  { number: "06", name: "VISA", stage: "In development", text: "VIsual Intelligence SA.", href: "/products/visa" },
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
                <span className="product-card__arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
