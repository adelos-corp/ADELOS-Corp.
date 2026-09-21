"use client";

import { useState } from "react";
import Link from "next/link";
import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import BorderGlow from "@/components/BorderGlow";
import MagicBento from "@/components/MagicBento";
import "@/components/Products.css";

const products = [
  {
    name: "VISA",
    stage: "prototype stage",
    tone: "prototype",
    label: "Visual Intelligence Systems Architecture",
    description: "A visual intelligence system moving from concept into working prototype.",
  },
  {
    name: "William Graham",
    stage: "refinement stage",
    tone: "refinement",
    label: "Systems & Intelligence",
    description: "An evolving system being refined into a more complete product.",
  },
  {
    name: "Studenthome",
    stage: "prototype stage",
    tone: "prototype",
    label: "Student Platform",
    description: "A focused platform concept being shaped into its first usable form.",
  },
];

const borderGlowProps = {
  borderRadius: 18,
  glowRadius: 34,
  glowIntensity: 0.72,
  edgeSensitivity: 26,
  coneSpread: 22,
  animated: false,
  backgroundColor: "rgba(12, 11, 18, 0.54)",
  colors: ["#5227ff", "#ff9ffc", "#38bdf8"],
  fillOpacity: 0.12,
};

export default function ProductsPage() {
  const [williamHovered, setWilliamHovered] = useState(false);
  const [visaHovered, setVisaHovered] = useState(false);
  const [studenthomeHovered, setStudenthomeHovered] = useState(false);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black products-page">
      <MenuBar />

      <LightPillar
        topColor={
          visaHovered ? "#27ff52" : studenthomeHovered ? "#010070" : "#5227ff"
        }
        bottomColor={
          visaHovered
            ? "#f2ff61"
            : studenthomeHovered
              ? "#6262a8"
              : williamHovered
                ? "#aa61ff"
                : "#ff9ffc"
        }
        intensity={studenthomeHovered ? 1.5 : 1}
        rotationSpeed={0.9}
        interactive={false}
        glowAmount={studenthomeHovered ? 0.0045 : 0.002}
        pillarWidth={3}
        pillarHeight={0.3}
        noiseIntensity={0.5}
        mixBlendMode="screen"
        pillarRotation={25}
        quality="high"
        lightMode={false}
        className="products-page__background"
      />

      <section className="products-shell" aria-labelledby="products-title">
        <header className="products-heading">
          <div>
            <span className="products-heading__eyebrow">ADELOS / PORTFOLIO</span>
            <h1 id="products-title">Products</h1>
          </div>
          <p>Systems in motion. Prototypes, refinements, and ideas becoming real.</p>
        </header>

        <div className="products-grid">
          {products.map((product) => (
            <Link
              key={product.name}
              href={
                product.name === "VISA"
                  ? "/products/visa"
                  : product.name === "William Graham"
                    ? "/products/william-graham"
                    : "/products/studenthome"
              }
              className="product-card-link"
            >
              <BorderGlow
              key={product.name}
              {...borderGlowProps}
              className="product-card"
              onPointerEnter={() => {
                if (product.name === "William Graham") setWilliamHovered(true);
                if (product.name === "VISA") setVisaHovered(true);
                if (product.name === "Studenthome") setStudenthomeHovered(true);
              }}
              onPointerLeave={() => {
                if (product.name === "William Graham") setWilliamHovered(false);
                if (product.name === "VISA") setVisaHovered(false);
                if (product.name === "Studenthome") setStudenthomeHovered(false);
              }}
            >
              <div className="product-card__magic">
                <MagicBento
                  cards={[{
                    color: "transparent",
                    title: product.name,
                    description: product.description,
                    label: product.label,
                  }]}
                  textAutoHide={false}
                  enableStars={true}
                  enableSpotlight={false}
                  enableBorderGlow={false}
                  disableAnimations={false}
                  particleCount={8}
                  enableTilt={false}
                  glowColor="82, 39, 255"
                  clickEffect={true}
                  enableMagnetism={false}
                />
              </div>

              <div className="product-card__content">
                <span className={`product-card__stage product-card__stage--${product.tone}`}>
                  {product.stage}
                </span>
                <h2>{product.name}</h2>
                <span className="product-card__arrow" aria-hidden="true">↗</span>
              </div>
              </BorderGlow>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
