"use client";

import { useState } from "react";
import { Rubik } from "next/font/google";
import LightPillar from "@/components/LightPillar";
import MenuBar from "@/components/MenuBar";
import SplitText from "@/components/SplitText";
import GlassSurface from "@/components/GlassSurface";
import "@/components/Hero.css";

const rubik = Rubik({ weight: "700", subsets: ["latin"] });

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main
      className="relative h-screen w-screen overflow-hidden bg-black adelos-intro"
      onAnimationEnd={() => setIntroComplete(true)}
    >
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

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          {introComplete ? (
            <div className="hero__text">
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
                delay={10}
                duration={1.1}
                splitType="chars"
                threshold={0.1}
                rootMargin="-100px"
              />
            </div>
          ) : (
            <div className="hero__text hero__text--placeholder" aria-hidden="true">
              <h1 className="hero__title">ADELOS Corp.</h1>
              <p className="hero__subtitle">
                Advanced Distributed Evolution of Logic Operating Systems
              </p>
            </div>
          )}

          <GlassSurface
            width={150}
            height={48}
            borderRadius={50}
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
            className="hero__explore"
          >
            <button type="button" className={`hero__explore-button ${rubik.className}`}>
              Explore
            </button>
          </GlassSurface>
        </div>
      </section>
    </main>
  );
}
