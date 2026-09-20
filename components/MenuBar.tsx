"use client";

import { Rubik } from "next/font/google";
import GlassSurface from "@/components/GlassSurface";
import "./MenuBar.css";

const rubik = Rubik({ weight: "700", subsets: ["latin"] });

const menuItems = ["Home", "Contact", "Preferences"];

export default function MenuBar() {
  return (
    <div className="menu-bar-wrap">
      <GlassSurface
        width="100%"
        height={60}
        borderRadius={50}
        borderWidth={0.07}
        brightness={50}
        opacity={0.93}
        blur={11}
        displace={0.5}
        backgroundOpacity={0.1}
        saturation={1.7}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        xChannel="R"
        yChannel="G"
        mixBlendMode="difference"
        chromaticAberration={false}
        className="menu-bar"
      >
        <div className="menu-bar__content">
          <button
            type="button"
            className="menu-bar__home"
            aria-label="ADELOS home"
          >
            <img src="/adelos-logo.svg" alt="" />
          </button>
          <nav className={`menu-bar__nav ${rubik.className}`} aria-label="Primary navigation">
            {menuItems.map((item) => (
              <button key={item} type="button" className="menu-bar__item">
                {item}
              </button>
            ))}
          </nav>
        </div>
      </GlassSurface>
    </div>
  );
}
