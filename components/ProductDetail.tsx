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
        <div className="product-detail-layout">
          <div className="product-detail-copy">
            <span className="product-detail-eyebrow">ADELOS / PRODUCT {number}</span>
            <p className="product-detail-category">{category}</p>
            <h1>{name}</h1>
            <p className="product-detail-description">{description}</p>
            <div className="product-detail-actions">
              {openHref ? (
                <Link href={openHref} className="product-detail-open">
                  Open {name} <b aria-hidden="true">↗</b>
                </Link>
              ) : (
                <button type="button" className="product-detail-open" disabled title="Product launch destination has not been configured yet">
                  Open {name} <b aria-hidden="true">↗</b>
                </button>
              )}
              <Link href="/products" className="product-detail-link">All Products <b aria-hidden="true">→</b></Link>
            </div>
            <div className="product-detail-status"><span />{status}</div>
          </div>

          <div className="product-detail-art" aria-hidden="true">
            <div className="product-detail-art__grid" />
            <div className="product-detail-art__orbit product-detail-art__orbit--outer" />
            <div className="product-detail-art__orbit product-detail-art__orbit--middle" />
            <div className="product-detail-art__orbit product-detail-art__orbit--inner" />
            <div className="product-detail-art__core" />
            <div className="product-detail-art__beam" />
            <span className="product-detail-art__index">{number.padStart(2, "0")}</span>
            <span className="product-detail-art__label">{name.toUpperCase()}</span>
          </div>
        </div>

        {relatedProducts && relatedProducts.length > 0 && (
          <nav className="product-detail-related" aria-label="Related products">
            <div className="product-detail-related__heading"><span>THE CODELOS FAMILY</span><span>EXPLORE COMPONENTS ↘</span></div>
            <div>{relatedProducts.map((item) => (
              <Link key={item.href} href={item.href}>
                <strong>{item.name}</strong>
                <small>{item.description}</small>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}</div>
          </nav>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
