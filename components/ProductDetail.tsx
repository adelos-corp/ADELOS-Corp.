import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import "./ProductDetail.css";

type ProductDetailProps = {
  name: string;
  number: string;
  category: string;
  description: string;
  accent?: "violet" | "blue" | "green" | "orange";
  status: string;
  openHref?: string;
  relatedProducts?: { name: string; href: string; description: string }[];
};

export default function ProductDetail({
  name,
  number,
  category,
  description,
  accent = "violet",
  status,
  openHref,
  relatedProducts,
}: ProductDetailProps) {
  return (
    <main className="product-detail-page">
      <section className={`product-detail-hero product-detail-hero--${accent}`}>
        <div className="product-detail-copy">
          <span>{number} / {category}</span>
          <h1>{name}</h1>
          <p>{description}</p>
          <div>
            <Link href={openHref ?? "/products"} className="product-detail-open">
              Open {name} <b aria-hidden="true">↗</b>
            </Link>
            <Link href="/products" className="product-detail-link">
              All Products <b>→</b>
            </Link>
          </div>
        </div>
        {relatedProducts && relatedProducts.length > 0 && (
          <nav className="product-detail-related" aria-label="Related products">
            <span>WITHIN CODELOS</span>
            <div>{relatedProducts.map((item) => (
              <Link key={item.href} href={item.href}>
                <strong>{item.name}</strong>
                <small>{item.description}</small>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}</div>
          </nav>
        )}
        <div className="product-detail-status">{status}</div>
      </section>
      <SiteFooter />
    </main>
  );
}
