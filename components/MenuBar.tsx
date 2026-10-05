"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./MenuBar.css";

const menuItems = [
  { label: "Products", href: "/products" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function MenuBar() {
  const pathname = usePathname();

  return (
    <header className="menu-bar-wrap">
      <Link href="/" className="menu-bar__brand" aria-label="adelOS home">adelOS</Link>
      <nav className="menu-bar__nav" aria-label="Primary navigation">
        {menuItems.map((item) => {
          const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          return <Link key={item.label} href={item.href} className={`menu-bar__item ${active ? "menu-bar__item--active" : ""}`}>{item.label}</Link>;
        })}
      </nav>
      <div className="menu-bar__actions">
        <button className="menu-bar__search" aria-label="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg>
        </button>
        <Link href="/contact" className="menu-bar__cta">Get Started <span aria-hidden="true">→</span></Link>
      </div>
    </header>
  );
}