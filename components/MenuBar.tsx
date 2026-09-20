"use client";

import GlassSurface from "@/components/GlassSurface";
import "./MenuBar.css";

const menuItems = ["System", "Research", "Projects"];

export default function MenuBar() {
  return (
    <div className="menu-bar-wrap">
      <GlassSurface
        width="100%"
        height={60}
        borderRadius={12}
        borderWidth={0.035}
        distortionScale={-42}
        redOffset={0}
        greenOffset={0}
        blueOffset={0}
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
