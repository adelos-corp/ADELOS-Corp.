import Link from "next/link";
import Aurora from "@/components/Aurora";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Products.css";

const products = [
  { number: "01", name: "VISA", stage: "In development", text: "Visual Intelligence Systems Architecture.", href: "/products/visa" },
  { number: "02", name: "William Graham", stage: "In development", text: "Flagship artificial intelligence system.", href: "/products/william-graham" },
  { number: "03", name: "Studenthome", stage: "In development", text: "Global student infrastructure.", href: "/products/studenthome" },
  { number: "04", name: "Daemon", stage: "Part of CODELOS", text: "Distributed systems and compute infrastructure.", href: "/products" },
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
              <div className="product-card__aurora">
                <Aurora
                  colorStops={["#a6ff91", "#c9b4df", "#684dff"]}
                  blend={0.5}
                  amplitude={1.0}
                  speed={1}
                />
              </div>

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
