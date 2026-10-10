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
              <div className="home-william__capabilities" aria-label="Platform capabilities">
                <p><strong>Local inference</strong><span>Keep sensitive workloads close to the source.</span></p>
                <p><strong>Encrypted sync</strong><span>Protected state across trusted devices.</span></p>
                <p><strong>Policy-aware runtime</strong><span>Granular controls for data access and execution.</span></p>
                <p><strong>Resilient orchestration</strong><span>Graceful handoff between local and cloud resources.</span></p>
              </div>
            </div>
          </section>

          <section className="home-william home-william--architecture" aria-labelledby="william-architecture-title">
            <div className="home-william__copy home-william__copy--wide">
              <span className="home-william__eyebrow">03 / ENGINEERED SYSTEMS</span>
              <h2 id="william-architecture-title"><SplitText text="Architecture" tag="span" /><br/><SplitText text="Overview." tag="span" className="home-william__accent" /></h2>
              <div className="home-william__split-caption home-william__split-caption--lines" aria-label="This technology represents the forefront of ADELOS engineering. By combining advanced logic systems with distributed computing models, we aim to achieve unprecedented levels of reliability and performance.">
                <SplitText text="This technology represents the forefront of ADELOS engineering." tag="span" className="home-william__split-caption-line" delay={5} duration={420} />
                <SplitText text="By combining advanced logic systems with distributed computing models," tag="span" className="home-william__split-caption-line" delay={5} duration={420} />
                <SplitText text="we aim to achieve unprecedented levels of reliability and performance." tag="span" className="home-william__split-caption-line" delay={5} duration={420} />
              </div>
              <div className="home-william__architecture-list" aria-label="Architecture principles">
                <p><strong>Reasoning layer</strong><span>Composable logic pipelines</span></p>
                <p><strong>Execution fabric</strong><span>Distributed task scheduling</span></p>
                <p><strong>Trust boundary</strong><span>Least-privilege access model</span></p>
                <p><strong>Continuity layer</strong><span>Fault-aware state recovery</span></p>
              </div>
            </div>
          </section>

          <section className="home-william home-william--memory" aria-labelledby="william-memory-title">
            <div className="home-william__copy home-william__copy--wide">
              <span className="home-william__eyebrow">04 / MEMORY ARCHITECTURE</span>
              <h2 id="william-memory-title"><SplitText text="Intelligence that" tag="span" /><br/><SplitText text="remembers." tag="span" className="home-william__accent" /></h2>
              <div className="home-william__split-caption home-william__split-caption--lines" aria-label="Experience becomes memory. Memory becomes context. Context informs thought.">
                <SplitText text="Experience becomes memory." tag="span" className="home-william__split-caption-line" delay={5} duration={420} />
                <SplitText text="Memory becomes context." tag="span" className="home-william__split-caption-line" delay={5} duration={420} />
                <SplitText text="Context informs thought." tag="span" className="home-william__split-caption-line" delay={5} duration={420} />
              </div>
              <div className="home-william__memory-list" aria-label="Memory lifecycle">
                <p><strong>Memory formation</strong><span>Extracting meaningful information from interactions and experiences.</span></p>
                <p><strong>Memory consolidation</strong><span>Organizing and preserving information beyond the immediate conversational context.</span></p>
                <p><strong>Associative storage</strong><span>Connecting memories through relationships, context, and relevance.</span></p>
                <p><strong>Contextual recall</strong><span>Retrieving relevant memories when a new situation calls for them.</span></p>
              </div>
            </div>
          </section>

          <section className="home-william home-william--recall" aria-labelledby="william-recall-title">
            <div className="home-william__copy home-william__copy--wide">
              <span className="home-william__eyebrow">05 / CONTEXTUAL RECALL</span>
              <h2 id="william-recall-title"><SplitText text="Remember with" tag="span" /><br/><SplitText text="purpose." tag="span" className="home-william__accent" /></h2>
              <div className="home-william__split-caption home-william__split-caption--lines" aria-label="Not merely retrieving information. Reconstructing the context that makes it meaningful.">
                <SplitText text="Not merely retrieving information." tag="span" className="home-william__split-caption-line" delay={5} duration={420} />
                <SplitText text="Reconstructing the context" tag="span" className="home-william__split-caption-line" delay={5} duration={420} />
                <SplitText text="that makes it meaningful." tag="span" className="home-william__split-caption-line" delay={5} duration={420} />
              </div>
              <div className="home-william__memory-list" aria-label="Memory recall principles">
                <p><strong>Associative retrieval</strong><span>Finding relevant memories through connected concepts.</span></p>
                <p><strong>Relevance weighting</strong><span>Prioritizing memories according to the current context.</span></p>
                <p><strong>Temporal continuity</strong><span>Accounting for how information and circumstances change over time.</span></p>
                <p><strong>Context reconstruction</strong><span>Combining relevant memories into a coherent picture of the present situation.</span></p>
              </div>
            </div>
          </section>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}