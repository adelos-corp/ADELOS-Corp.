"use client";

import { useState } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import Aurora from "@/components/Aurora";
import "./ProductDetail.css";

type ProductDetailProps = {
  name: string;
  number: string;
  category: string;
  description: string;
  accent?: "violet" | "blue" | "green" | "orange" | "red" | "emerald";
  auroraColors: [string, string, string];
  status: string;
  openHref?: string;
  openOptions?: { label: string; href: string }[];
  relatedProducts?: { name: string; href: string; description: string }[];
};

export default function ProductDetail({
  name,
  number,
  category,
  description,
  accent = "violet",
  auroraColors,
  status,
  openHref,
  openOptions,
  relatedProducts,
}: ProductDetailProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={`product-detail-page product-detail-page--${accent}`}>
      <div className="product-detail-aurora" aria-hidden="true">
        <Aurora colorStops={auroraColors} blend={0.58} amplitude={1.05} speed={0.8} />
      </div>
      <section className={`product-detail-hero product-detail-hero--${accent}`}>
        <div className="product-detail-layout">
          <div className="product-detail-copy">
            <span className="product-detail-eyebrow">ADELOS / PRODUCT {number}</span>
            <p className="product-detail-category">{category}</p>
            <h1>{name}</h1>
            <p className="product-detail-description">{description}</p>
            <div className="product-detail-actions">
              {openOptions ? (
                <button type="button" className="product-detail-open" onClick={() => setIsOpen(true)} aria-haspopup="dialog">
                  Open {name} <b aria-hidden="true">↗</b>
                </button>
              ) : openHref ? (
                <a href={openHref} className="product-detail-open" target="_blank" rel="noopener noreferrer">
                  Open {name} <b aria-hidden="true">↗</b>
                </a>
              ) : (
                <button type="button" className="product-detail-open" disabled title="Product launch destination has not been configured yet">
                  Open {name} <b aria-hidden="true">↗</b>
                </button>
              )}
            </div>
            <div className="product-detail-status"><span />{status}</div>
          </div>
        </div>

        {relatedProducts && relatedProducts.length > 0 && (
          <nav className="product-detail-related" aria-label="Related products">
            <div className="product-detail-related__heading"><span>THE CODELOS FAMILY</span><span>EXPLORE COMPONENTS ↘</span></div>
            <div>{relatedProducts.map((item) => (
              item.href.startsWith("https://") ? (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                  <strong>{item.name}</strong>
                  <small>{item.description}</small>
                  <b aria-hidden="true">↗</b>
                </a>
              ) : (
                <Link key={item.href} href={item.href}>
                  <strong>{item.name}</strong>
                  <small>{item.description}</small>
                  <b aria-hidden="true">↗</b>
                </Link>
              )}
            ))}</div>
          </nav>
        )}
      </section>
      {openOptions && isOpen && (
        <div className="product-choice-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
          <section className="product-choice-dialog" role="dialog" aria-modal="true" aria-labelledby="product-choice-title">
            <button type="button" className="product-choice-close" onClick={() => setIsOpen(false)} aria-label="Close interface selection">×</button>
            <span className="product-detail-eyebrow">STUDENTHOME / CHOOSE YOUR EXPERIENCE</span>
            <h2 id="product-choice-title">How would you like to enter?</h2>
            <p>Choose the Studenthome experience that works for you.</p>
            <div className="product-choice-options">
              {openOptions.map((option) => (
                <a key={option.href} href={option.href} target="_blank" rel="noopener noreferrer" className="product-choice-option">
                  <span>{option.label}</span><b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </section>
        </div>
      )}
      <SiteFooter />
    </main>
  );
}
