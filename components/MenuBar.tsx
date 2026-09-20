"use client";

import GlassSurface from "@/components/GlassSurface";
import "./MenuBar.css";

const menuItems = ["System", "Research", "Projects"];

export default function MenuBar() {
  return (
    <div className="menu-bar-wrap">
      <GlassSurface
        width="100%"
        height={42}
        borderRadius={35}
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
          <div className="menu-bar__brand">adelOS</div>
          <nav className="menu-bar__nav" aria-label="Primary navigation">
            {menuItems.map((item) => (
              <button key={item} type="button" className="menu-bar__item">
                {item}
              </button>
            ))}
          </nav>
          <div className="menu-bar__status">ADELOS</div>
        </div>
      </GlassSurface>
    </div>
  );
}
