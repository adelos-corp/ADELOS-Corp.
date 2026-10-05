"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./MenuBar.css";

const menuItems = [
  { label: "Products", href: "/products" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const getActiveHref = (pathname: string | null) =>
  menuItems.find((item) => pathname === item.href || pathname?.startsWith(`${item.href}/`))?.href ?? null;

export default function MenuBar() {
  const pathname = usePathname();
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const activeHref = pendingHref ?? getActiveHref(pathname);

  return (
    <header className="menu-bar-wrap">
      <Link href="/" className="menu-bar__brand" aria-label="adelOS home">
        <img src="/adelos-logo.png" alt="ADELOS" />
      </Link>

      <nav className="menu-bar__nav" aria-label="Primary navigation">
        {menuItems.map((item) => {
          const active = activeHref === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`menu-bar__item ${active ? "menu-bar__item--active" : ""}`}
              onClick={() => setPendingHref(item.href)}
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

      <div className="menu-bar__spacer" aria-hidden="true" />
    </header>
  );
}
