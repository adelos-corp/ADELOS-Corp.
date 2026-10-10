"use client";

import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SplitText from "@/components/SplitText";
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
        <section className="home-william-story" aria-label="William Graham">
          <div className="home-william-story__background" aria-hidden="true" />
          <section className="home-william home-william--intro" aria-labelledby="william-title">
            <div className="home-william__copy">
              <span className="home-william__eyebrow">01 / PERSONALIZED AI</span>
              <h2 id="william-title">William<br/><span>Graham.</span></h2>
              <p>Intelligence that feels less like a tool, and more like an extension of you.</p>
              <Link href="/products/william-graham" className="home-william__link">Discover William Graham <span aria-hidden="true">↗</span></Link>
            </div>
          </section>

          <section className="home-william home-william--enterprise" aria-labelledby="william-enterprise-title">
            <div className="home-william__copy home-william__copy--wide">
              <span className="home-william__eyebrow">02 / PRIVATE BY DESIGN</span>
              <h2 id="william-enterprise-title"><SplitText text="Built for the" tag="span" /><br/><SplitText text="modern enterprise." tag="span" className="home-william__accent" /></h2>
              <SplitText text="Privacy-first artificial intelligence running on local architecture with secure cloud synchronization." tag="p" className="home-william__split-caption" delay={5} duration={420} />
              <div className="home-william__specs" aria-label="Platform capabilities">
                <div><span>01</span><strong>Local inference</strong><small>Keep sensitive workloads close to the source.</small></div>
                <div><span>02</span><strong>Encrypted sync</strong><small>Protected state across trusted devices.</small></div>
                <div><span>03</span><strong>Policy-aware runtime</strong><small>Granular controls for data access and execution.</small></div>
                <div><span>04</span><strong>Resilient orchestration</strong><small>Graceful handoff between local and cloud resources.</small></div>
              </div>
            </div>
          </section>

          <section className="home-william home-william--architecture" aria-labelledby="william-architecture-title">
            <div className="home-william__copy home-william__copy--wide">
              <span className="home-william__eyebrow">03 / ENGINEERED SYSTEMS</span>
              <h2 id="william-architecture-title"><SplitText text="Architecture" tag="span" /><br/><SplitText text="Overview." tag="span" className="home-william__accent" /></h2>
              <SplitText text="This technology represents the forefront of ADELOS engineering. By combining advanced logic systems with distributed computing models, we aim to achieve unprecedented levels of reliability and performance." tag="p" className="home-william__split-caption" delay={5} duration={420} />
              <div className="home-william__architecture-grid" aria-label="Architecture principles">
                <div><span>01</span><strong>Reasoning layer</strong><small>Composable logic pipelines</small></div>
                <div><span>02</span><strong>Execution fabric</strong><small>Distributed task scheduling</small></div>
                <div><span>03</span><strong>Trust boundary</strong><small>Least-privilege access model</small></div>
                <div><span>04</span><strong>Continuity layer</strong><small>Fault-aware state recovery</small></div>
              </div>
            </div>
          </section>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}