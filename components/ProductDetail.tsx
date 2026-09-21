"use client";

import Link from "next/link";
import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import BorderGlow from "@/components/BorderGlow";
import MagicBento from "@/components/MagicBento";
import "@/components/ProductDetail.css";

type ProductDetailProps = {
  name: string;
  stage: string;
  description: string;
  label: string;
  topColor: string;
  bottomColor: string;
  intensity?: number;
  glowAmount?: number;
};

export default function ProductDetail({
  name,
  stage,
  description,
  label,
  topColor,
  bottomColor,
  intensity = 1,
  glowAmount = 0.002,
}: ProductDetailProps) {
  return (
    <main className="product-detail-page">
      <MenuBar />

      <LightPillar
        topColor={topColor}
        bottomColor={bottomColor}
        intensity={intensity}
        rotationSpeed={0.9}
        interactive={false}
        glowAmount={glowAmount}
        pillarWidth={3}
        pillarHeight={0.3}
        noiseIntensity={0.5}
        mixBlendMode="screen"
        pillarRotation={25}
        quality="high"
        lightMode={false}
        className="product-detail-page__background"
      />

      <section className="product-detail">
        <Link href="/products" className="product-detail__back">
          <span aria-hidden="true">←</span>
          Back to products
        </Link>

        <div className="product-detail__layout">
          <header className="product-detail__intro">
            <span className="product-detail__eyebrow">ADELOS / PRODUCT</span>
            <div className="product-detail__stage">{stage}</div>
            <h1>{name}</h1>
            <p>{description}</p>
          </header>

          <BorderGlow
            borderRadius={20}
            glowRadius={42}
            glowIntensity={0.8}
            edgeSensitivity={24}
            coneSpread={24}
            animated={false}
            backgroundColor="rgba(12, 11, 18, 0.48)"
            colors={[topColor, bottomColor, "#ffffff"]}
            fillOpacity={0.12}
            className="product-detail__feature"
          >
            <MagicBento
              cards={[{
                color: "transparent",
                title: name,
                description,
                label,
              }]}
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={false}
              enableBorderGlow={false}
              disableAnimations={false}
              particleCount={18}
              enableTilt={false}
              glowColor="82, 39, 255"
              clickEffect={true}
              enableMagnetism={false}
            />
            <div className="product-detail__feature-content">
              <span>{label}</span>
              <strong>{name}</strong>
            </div>
          </BorderGlow>
        </div>
      </section>
    </main>
  );
}
