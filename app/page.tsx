"use client";

import LightPillar from "@/components/LightPillar";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
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
    </main>
  );
}
