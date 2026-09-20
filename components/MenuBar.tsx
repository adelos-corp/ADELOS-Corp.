"use client";

import GlassSurface from "@/components/GlassSurface";
import "./MenuBar.css";

const menuItems = ["System", "Research", "Projects"];

export default function MenuBar() {
  return (
    <div className="menu-bar-wrap">
      <GlassSurface
        width="100%"
        height={64}
        borderRadius={18}
        brightness={18}
        opacity={0.82}
        blur={10}
        backgroundOpacity={0.08}
        saturation={1.15}
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
