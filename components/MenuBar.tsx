"use client";

import { Rubik } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlassSurface from "@/components/GlassSurface";
import "./MenuBar.css";

const rubik = Rubik({ weight: "700", subsets: ["latin"] });

const menuItems = [
  { label: "About", href: "/about" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Research", href: "/research" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Preferences", href: "/settings" },
];

export default function MenuBar() {
  const pathname = usePathname();

  return <div className="menu-bar-wrap">
    <GlassSurface width="100%" height={60} borderRadius={50} borderWidth={0.07} brightness={50} opacity={0.93} blur={11} displace={0.5} backgroundOpacity={0.1} saturation={1.7} distortionScale={-180} redOffset={0} greenOffset={10} blueOffset={20} xChannel="R" yChannel="G" mixBlendMode="difference" chromaticAberration={false} className="menu-bar">
      <div className="menu-bar__content">
        <Link href="/" className="menu-bar__home" aria-label="ADELOS home"><img src="/adelos-logo.svg" alt="ADELOS" /></Link>
        <nav className={`menu-bar__nav ${rubik.className}`} aria-label="Primary navigation">
          {menuItems.map(item => {
            const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return <Link key={item.label} href={item.href} className={`menu-bar__item ${active ? "menu-bar__item--active" : ""}`}>{item.label}</Link>;
          })}
        </nav>
      </div>
    </GlassSurface>
  </div>;
}
