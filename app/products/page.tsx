"use client";

import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import BorderGlow from "@/components/BorderGlow";
import "@/components/Products.css";

const products = [
  { name: "VISA", stage: "prototype stage", tone: "prototype" },
  { name: "William Graham", stage: "refinement stage", tone: "refinement" },
  { name: "Studenthome", stage: "prototype stage", tone: "prototype" },
];

const borderGlowProps = {
  borderRadius: 32,
  glowRadius: 40,
  glowIntensity: 0.8,
  edgeSensitivity: 24,
  coneSpread: 25,
  animated: false,
  backgroundColor: "rgba(17, 16, 24, 0.34)",
  colors: ["#5227ff", "#ff9ffc", "#38bdf8"],
  fillOpacity: 0.16,
};

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black products-page">
      <MenuBar />

      <LightPillar
        topColor="#5227ff"
        bottomColor="#ff9ffc"
        intensity={1}
        rotationSpeed={0.9}
        interactive={false}
        glowAmount={0.002}
        pillarWidth={3}
        pillarHeight={0.3}
        noiseIntensity={0.5}
        mixBlendMode="screen"
        pillarRotation={25}
        quality="high"
        lightMode={false}
        className="products-page__background"
      />

      <section className="products-hero" aria-labelledby="products-title">
        <div className="products-hero__heading">
          <h1 id="products-title">Products</h1>
          <p>Technology built to become part of the world around it.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <BorderGlow
              key={product.name}
              {...borderGlowProps}
              className="product-card"
            >
              <div className="product-card__content">
                <span className={`product-card__stage product-card__stage--${product.tone}`}>
                  {product.stage}
                </span>
                <h2>{product.name}</h2>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>
    </main>
  );
}
