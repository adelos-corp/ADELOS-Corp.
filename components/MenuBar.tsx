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
      <Link href="/" className="menu-bar__brand" aria-label="adelOS home">
        <img src="/adelos-logo-flat.svg" alt="ADELOS" />
      </Link>

      <nav className="menu-bar__nav" aria-label="Primary navigation">
        {menuItems.map((item) => {
          const active = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`menu-bar__item ${active ? "menu-bar__item--active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="menu-bar__spacer" aria-hidden="true" />
    </header>
  );
}
