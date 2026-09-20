"use client";

import LightPillar from "@/components/LightPillar";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      <LightPillar
        topColor="#5227FF"
        bottomColor="#FF9FFC"
        intensity={1}
        rotationSpeed={0.3}
        interactive={false}
        glowAmount={0.005}
        pillarWidth={3}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        mixBlendMode="screen"
        pillarRotation={0}
        quality="high"
        lightMode={false}
      />
    </main>
  );
}