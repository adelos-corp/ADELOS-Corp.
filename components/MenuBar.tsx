"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GlassSurface from "./GlassSurface";
import "./MenuBar.css";

const menuItems = [
  { label: "Products", href: "/products" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const getActiveHref = (pathname: string | null) =>
  menuItems.find((item) => pathname === item.href || pathname?.startsWith(`${item.href}/`))?.href ?? null;

export default function MenuBar() {
  const pathname = usePathname();
  const activeHref = getActiveHref(pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <header className="menu-bar-wrap">
      <Link href="/" className="menu-bar__brand" aria-label="ADELOS Corp. home">
        <img src="/adelos-logo.png" alt="ADELOS" />
      </Link>

      <GlassSurface className="menu-bar__nav" width="max-content" height={54} borderRadius={999} brightness={50} opacity={0.93} blur={11} backgroundOpacity={0.02} saturation={1} distortionScale={-35} chromaticAberration={false}>
        <nav className="menu-bar__nav-inner" aria-label="Primary navigation">
        {menuItems.map((item) => {
          const active = activeHref === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`menu-bar__item ${active ? "menu-bar__item--active" : ""}`}
            >
              {active && (
                <motion.span
                  className="menu-bar__active-pill"
                  layoutId="menu-active-pill"
                  transition={{ type: "spring", stiffness: 520, damping: 38, mass: 0.55 }}
                  aria-hidden="true"
                />
              )}
              <span className="menu-bar__label">{item.label}</span>
            </Link>
          );
        })}
        </nav>
      </GlassSurface>

      <button
        type="button"
        className={`menu-bar__mobile-toggle ${mobileMenuOpen ? "is-open" : ""}`}
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-primary-navigation"
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      {mobileMenuOpen && (
        <motion.nav
          id="mobile-primary-navigation"
          className="menu-bar__mobile-panel"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <span className="menu-bar__mobile-kicker">ADELOS CORP. / NAVIGATION</span>
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`menu-bar__mobile-link ${activeHref === item.href ? "is-active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
          <Link href="/" className="menu-bar__mobile-home" onClick={() => setMobileMenuOpen(false)}>Back to home <span>↗</span></Link>
        </motion.nav>
      )}

      <div className="menu-bar__spacer" aria-hidden="true" />
    </header>
  );
}
