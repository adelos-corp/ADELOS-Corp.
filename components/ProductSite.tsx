import Link from "next/link";
import type { CSSProperties } from "react";
import SiteFooter from "@/components/SiteFooter";
import "./ProductSite.css";

export type ProductSiteData = {
  name: string;
  acronym: string;
  category: string;
  number: string;
  tagline: string;
  description: string;
  status: string;
  accent: string;
  background: string;
  navLabel: string;
  sections: { number: string; eyebrow: string; title: string; body: string; items: { title: string; text: string }[] }[];
  closing: string;
  cta: string;
  ctaHref: string;
};

export default function ProductSite({ product }: { product: ProductSiteData }) {
  return (
    <main className="product-site" style={{ "--product-accent": product.accent, "--product-background": `url("${product.background}")` } as CSSProperties}>
      <header className="product-site-nav">
        <Link href="/" className="product-site-brand" aria-label="ADELOS Corp home"><span className="product-site-brand__mark">A</span><span>ADELOS <i>/</i> {product.name}</span></Link>
        <nav aria-label={product.name + " navigation"}>
          <a href="#overview">Overview</a><a href="#architecture">Architecture</a><a href="#discover">Discover</a>
        </nav>
        <Link href="/products" className="product-site-all">ADELOS portfolio <span aria-hidden="true">↗</span></Link>
      </header>

      <section id="overview" className="product-site-hero">
        <div className="product-site-hero__visual" aria-hidden="true"><div className="product-site-orbit product-site-orbit--one"/><div className="product-site-orbit product-site-orbit--two"/><div className="product-site-core"/></div>
        <div className="product-site-hero__copy">
          <span className="product-site-overline">{product.number} / {product.category}</span>
          <p className="product-site-acronym">{product.acronym}</p>
          <h1>{product.name}<span>.</span></h1>
          <p className="product-site-tagline">{product.tagline}</p>
          <p className="product-site-description">{product.description}</p>
          <div className="product-site-hero__actions"><a className="product-site-button" href="#architecture">Explore the architecture <span aria-hidden="true">↓</span></a><span className="product-site-status"><i/> {product.status}</span></div>
        </div>
        <div className="product-site-hero__index"><span>PRODUCT SYSTEMS</span><span>{product.number} — 04</span></div>
      </section>

      <section id="architecture" className="product-site-story">
        {product.sections.map((section, index) => (
          <article className={"product-site-section product-site-section--" + (index % 2 ? "offset" : "standard")} key={section.number}>
            <div className="product-site-section__index"><span>{section.number}</span><span>{section.eyebrow}</span></div>
            <div className="product-site-section__content">
              <h2>{section.title}</h2><p className="product-site-section__body">{section.body}</p>
              <div className="product-site-capabilities">{section.items.map((item) => <div className="product-site-capability" key={item.title}><span className="product-site-capability__dot"/><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
            </div>
          </article>
        ))}
      </section>

      <section id="discover" className="product-site-closing">
        <span className="product-site-overline">ADELOS CORP. / {product.name.toUpperCase()}</span>
        <h2>{product.closing}</h2>
        <p>{product.description}</p>
        <Link href={product.ctaHref} className="product-site-closing__link">{product.cta} <span aria-hidden="true">↗</span></Link>
      </section>
      <div className="product-site-bottom"><span>ENGINEERED BY ADELOS CORP.</span><Link href="/">Return to ADELOS <span aria-hidden="true">↑</span></Link></div>
      <SiteFooter />
    </main>
  );
}
