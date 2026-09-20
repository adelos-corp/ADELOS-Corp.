"use client";

import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import GlassSurface from "@/components/GlassSurface";
import "@/components/Products.css";

export default function ProductsPage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black products-page">
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
      />

      <section className="products-hero" aria-labelledby="products-title">
        <div className="products-hero__heading">
          <h1 id="products-title">Products</h1>
          <p>Technology built to become part of the world around it.</p>
        </div>

        <div className="products-grid">
          <GlassSurface
            width="100%"
            height={220}
            borderRadius={36}
            borderWidth={0.025}
            brightness={45}
            opacity={0.9}
            blur={7}
            displace={0.16}
            backgroundOpacity={0.055}
            saturation={1.2}
            distortionScale={-70}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            xChannel="R"
            yChannel="G"
            mixBlendMode="difference"
            chromaticAberration={false}
            className="product-card"
          >
            <div className="product-card__content">
              <span className="product-card__label">PRODUCT</span>
              <h2>William Graham</h2>
              <p>Personalized intelligence, built around the individual.</p>
            </div>
          </GlassSurface>

          <GlassSurface
            width="100%"
            height={220}
            borderRadius={36}
            borderWidth={0.025}
            brightness={45}
            opacity={0.9}
            blur={7}
            displace={0.16}
            backgroundOpacity={0.055}
            saturation={1.2}
            distortionScale={-70}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            xChannel="R"
            yChannel="G"
            mixBlendMode="difference"
            chromaticAberration={false}
            className="product-card"
          >
            <div className="product-card__content">
              <span className="product-card__label">PRODUCT</span>
              <h2>Studenthome</h2>
              <p>A digital environment designed around student life.</p>
            </div>
          </GlassSurface>

          <GlassSurface
            width="100%"
            height={220}
            borderRadius={36}
            borderWidth={0.025}
            brightness={45}
            opacity={0.9}
            blur={7}
            displace={0.16}
            backgroundOpacity={0.055}
            saturation={1.2}
            distortionScale={-70}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            xChannel="R"
            yChannel="G"
            mixBlendMode="difference"
            chromaticAberration={false}
            className="product-card"
          >
            <div className="product-card__content">
              <span className="product-card__label">PRODUCT</span>
              <h2>Daemon</h2>
              <p>Developer tooling for building, testing, and shipping software.</p>
            </div>
          </GlassSurface>

          <GlassSurface
            width="100%"
            height={220}
            borderRadius={36}
            borderWidth={0.025}
            brightness={45}
            opacity={0.9}
            blur={7}
            displace={0.16}
            backgroundOpacity={0.055}
            saturation={1.2}
            distortionScale={-70}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            xChannel="R"
            yChannel="G"
            mixBlendMode="difference"
            chromaticAberration={false}
            className="product-card"
          >
            <div className="product-card__content">
              <span className="product-card__label">PRODUCT</span>
              <h2>VISA</h2>
              <p>Visual Intelligence Systems Architecture.</p>
            </div>
          </GlassSurface>
        </div>
      </section>
    </main>
  );
}
