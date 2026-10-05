import Link from "next/link";
import MenuBar from "@/components/MenuBar";
import Aurora from "@/components/Aurora";
import SiteFooter from "@/components/SiteFooter";
import "./ProductDetail.css";

type ProductDetailProps = {
  name: string;
  number: string;
  category: string;
  description: string;
  accent?: "violet" | "blue" | "green" | "orange";
  status: string;
};

export default function ProductDetail({
  name,
  number,
  category,
  description,
  accent = "violet",
  status,
}: ProductDetailProps) {
  return (
    <main className="product-detail-page">
      <MenuBar />
      <section className={`product-detail-hero product-detail-hero--${accent}`}>
        <div className="product-detail-aurora">
          <Aurora
            colorStops={["#8dff78", "#c9b4df", "#684dff"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        </div>
        <div className="product-detail-copy">
          <span>{number} / {category}</span>
          <h1>{name}</h1>
          <p>{description}</p>
          <div>
            <Link href="/products" className="product-detail-link">
              All Products <b>→</b>
            </Link>
          </div>
        </div>
        <div className="product-detail-status">{status}</div>
      </section>
      <SiteFooter />
    </main>
  );
}
