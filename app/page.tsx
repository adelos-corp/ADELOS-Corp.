"use client";

import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Home.css";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <h1><span>Engineering solutions</span><span>that solve tomorrow.</span></h1>
          <p>Advanced systems. Deeper integration.<br/>A more capable tomorrow.</p>
        </div>
      </section>

      <div className="home-gradient-sheet">
        <section className="home-william" aria-labelledby="william-title">
          <div className="home-william__copy">
            <span className="home-william__eyebrow">01 / PERSONALIZED AI</span>
            <h2 id="william-title">William<br/><span>Graham.</span></h2>
            <p>Intelligence that feels less like a tool, and more like an extension of you.</p>
            <Link href="/products/william-graham" className="home-william__link">Discover William Graham <span aria-hidden="true">↗</span></Link>
          </div>

        </section>
        <SiteFooter />
      </div>
    </main>
  );
}