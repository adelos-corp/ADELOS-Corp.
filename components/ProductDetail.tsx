"use client";

import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import "@/components/ProductDetail.css";

type ProductDetailProps = {
  topColor: string;
  bottomColor: string;
  intensity?: number;
  glowAmount?: number;
};

export default function ProductDetail({
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
    </main>
  );
}
