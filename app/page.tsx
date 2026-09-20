"use client";

import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import SplitText from "@/components/SplitText";
import "@/components/Hero.css";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <MenuBar />
      <LightPillar
        topColor="#06b6d4"
        bottomColor="#7c3aed"
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

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <SplitText
            text="ADELOS Corp."
            className="hero__title"
            tag="h1"
            delay={45}
            duration={1.25}
            splitType="chars"
            threshold={0.1}
            rootMargin="-100px"
          />
          <SplitText
            text="Advanced Distributed Evolution of Logic Operating Systems"
            className="hero__subtitle"
            tag="p"
            delay={25}
            duration={1.1}
            splitType="chars"
            threshold={0.1}
            rootMargin="-100px"
          />
        </div>
      </section>
    </main>
  );
}
