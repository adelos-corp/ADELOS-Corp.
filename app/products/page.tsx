"use client";

import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import GlassSurface from "@/components/GlassSurface";
import "@/components/Products.css";

const products = [
  { name: "VISA", stage: "prototype stage", tone: "prototype" },
  { name: "William Graham", stage: "refinement stage", tone: "refinement" },
  { name: "Studenthome", stage: "prototype stage", tone: "prototype" },
  { name: "QESA", stage: "research stage", tone: "research" },
  { name: "TENSA", stage: "research stage", tone: "research" },
  { name: "HISA", stage: "research stage", tone: "research" },
  { name: "CODELOS", stage: "prototype stage", tone: "prototype" },
];

const glassProps = {
  width: "100%" as const,
  height: 220,
  borderRadius: 36,
  borderWidth: 0.012,
  brightness: 38,
  opacity: 0.88,
  blur: 50,
  displace: 0.07,
  backgroundOpacity: 0.12,
  saturation: 1.05,
  distortionScale: -35,
  redOffset: 0,
  greenOffset: 0,
  blueOffset: 0,
  xChannel: "R" as const,
  yChannel: "G" as const,
  mixBlendMode: "normal" as const,
  chromaticAberration: false,
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
            <GlassSurface
              key={product.name}
              {...glassProps}
              className="product-card"
            >
              <div className="product-card__content">
                <span className={`product-card__stage product-card__stage--${product.tone}`}>
                  {product.stage}
                </span>
                <h2>{product.name}</h2>
              </div>
            </GlassSurface>
          ))}
        </div>
      </section>
    </main>
  );
}
