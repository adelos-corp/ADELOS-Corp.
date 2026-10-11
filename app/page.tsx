"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SplitText from "@/components/SplitText";
import "@/components/Home.css";

export default function Home() {
  const williamStoryRef = useRef<HTMLElement | null>(null);
  const studenthomeStoryRef = useRef<HTMLElement | null>(null);
  const codelosStoryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const william = williamStoryRef.current;
    const studenthome = studenthomeStoryRef.current;
    const codelos = codelosStoryRef.current;
    const sheet = william?.closest(".home-gradient-sheet");
    if (!william || !studenthome || !codelos || !sheet) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        const isVisible = (target: HTMLElement) => visible.some((entry) => entry.target === target);

        const activeStory = isVisible(codelos)
          ? "codelos"
          : isVisible(studenthome)
            ? "studenthome"
            : isVisible(william)
              ? "william"
              : null;

        if (activeStory) {
          sheet.classList.toggle("home-gradient-sheet--studenthome", activeStory === "studenthome");
          sheet.classList.toggle("home-gradient-sheet--codelos", activeStory === "codelos");
        }
      },
      { threshold: 0, rootMargin: "-18% 0px -18% 0px" }
    );

    observer.observe(william);
    observer.observe(studenthome);
    observer.observe(codelos);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <h1><span>Engineering solutions</span><span>that solve tomorrow.</span></h1>
          <p>Advanced systems. Deeper integration.<br/>A more capable tomorrow.</p>
        </div>
      </section>

      <div className="home-gradient-sheet">
        <div className="home-story-background" aria-hidden="true">
          <div className="home-story-background__layer home-story-background__layer--william" />
          <div className="home-story-background__layer home-story-background__layer--studenthome" />
          <div className="home-story-background__layer home-story-background__layer--codelos" />
        </div>
        <section ref={williamStoryRef} className="home-william-story" aria-label="William Graham">
          <section className="home-william home-william--intro" aria-labelledby="william-title">
            <div className="home-william__copy">
              <span className="home-william__eyebrow">01 / PERSONALIZED AI</span>
              <h2 id="william-title">William<br/><span>Graham.</span></h2>
              <p>Intelligence that feels less like a tool, and more like an extension of you.</p>
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
              <h2 id="william-recall-title"><SplitText text="Remember with purpose." tag="span" className="home-william__recall-headline" /></h2>
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

          <section className="home-william home-william--closing" aria-labelledby="william-closing-title">
            <div className="home-william__copy home-william__copy--closing">
              <span className="home-william__eyebrow">WILLIAM GRAHAM / PERSONALIZED AI</span>
              <h2 id="william-closing-title">
                <SplitText text="Meet" tag="span" className="home-william__closing-headline home-william__closing-meet" delay={32} duration={760} />{" "}
                <SplitText text="William Graham." tag="span" className="home-william__closing-headline home-william__closing-accent" delay={32} duration={760} />
              </h2>
              <p>
                <SplitText text="Intelligence shaped by memory, context, and the way you work." tag="span" className="home-william__closing-caption" delay={9} duration={520} />
              </p>
              <Link href="/products/william-graham" className="home-william__link home-william__closing-link">
                Explore William Graham <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        </section>

        <section ref={studenthomeStoryRef} className="home-studenthome-story" aria-label="Studenthome education platform">
          <section className="home-studenthome home-studenthome--intro" aria-labelledby="studenthome-title">
            <div className="home-studenthome__copy">
              <span className="home-studenthome__eyebrow">01 / EDUCATION PLATFORM</span>
              <h2 id="studenthome-title"><SplitText text="One Home." tag="span" className="home-studenthome__accent" /><br/><SplitText text="Every Student." tag="span" /></h2>
              <SplitText text="A seamless, unified destination for global students, bridging distributed education systems and continuous learning." tag="p" className="home-studenthome__caption" delay={7} duration={480} />
            </div>
          </section>

          <section className="home-studenthome home-studenthome--unified" aria-labelledby="studenthome-unified-title">
            <div className="home-studenthome__copy home-studenthome__copy--wide">
              <span className="home-studenthome__eyebrow">02 / A UNIFIED STUDENT EXPERIENCE</span>
              <h2 id="studenthome-unified-title"><SplitText text="Everything" tag="span" /><br/><SplitText text="in one place." tag="span" className="home-studenthome__accent" /></h2>
              <div className="home-studenthome__caption-lines" aria-label="One connected command center for the moving parts of student life.">
                <SplitText text="One connected command center" tag="span" className="home-studenthome__caption-line" delay={5} duration={420} />
                <SplitText text="for the moving parts of student life." tag="span" className="home-studenthome__caption-line" delay={5} duration={420} />
              </div>
              <div className="home-studenthome__feature-list">
                <p><strong>Academic services</strong><span>College portals, course information, and examination results in one organized view.</span></p>
                <p><strong>Deadlines and reminders</strong><span>Surface admissions dates, submissions, and important academic milestones.</span></p>
                <p><strong>Scholarship discovery</strong><span>Keep funding opportunities closer to the decisions and deadlines that matter.</span></p>
                <p><strong>Student documents</strong><span>Reach essential academic records without searching across disconnected systems.</span></p>
              </div>
            </div>
          </section>

          <section className="home-studenthome home-studenthome--ecosystem" aria-labelledby="studenthome-ecosystem-title">
            <div className="home-studenthome__copy home-studenthome__copy--wide">
              <span className="home-studenthome__eyebrow">03 / CONNECTED ECOSYSTEM</span>
              <h2 id="studenthome-ecosystem-title"><SplitText text="Built to" tag="span" /><br/><SplitText text="connect." tag="span" className="home-studenthome__accent" /></h2>
              <div className="home-studenthome__caption-lines" aria-label="A common interface across a distributed education landscape.">
                <SplitText text="A common interface across a" tag="span" className="home-studenthome__caption-line" delay={5} duration={420} />
                <SplitText text="distributed education landscape." tag="span" className="home-studenthome__caption-line" delay={5} duration={420} />
              </div>
              <div className="home-studenthome__feature-list">
                <p><strong>Interoperability layer</strong><span>A consistent experience across institution-specific systems and services.</span></p>
                <p><strong>Regional service fabric</strong><span>Designed for Andhra Pradesh, with a path toward broader Indian and global education networks.</span></p>
                <p><strong>Continuous learning context</strong><span>Keep academic tasks, milestones, and next steps connected over time.</span></p>
                <p><strong>Progressive integration</strong><span>A modular foundation that can grow as new institutions and services join.</span></p>
              </div>
            </div>
          </section>

          <section className="home-studenthome home-studenthome--identity" aria-labelledby="studenthome-identity-title">
            <div className="home-studenthome__copy home-studenthome__copy--wide">
              <span className="home-studenthome__eyebrow">04 / STUDENT IDENTITY LAYER</span>
              <h2 id="studenthome-identity-title"><SplitText text="Your academic" tag="span" /><br/><SplitText text="life, connected." tag="span" className="home-studenthome__accent" /></h2>
              <div className="home-studenthome__caption-lines" aria-label="One persistent profile. A clearer view of your academic identity.">
                <SplitText text="One persistent profile." tag="span" className="home-studenthome__caption-line" delay={5} duration={420} />
                <SplitText text="A clearer view of your academic identity." tag="span" className="home-studenthome__caption-line" delay={5} duration={420} />
              </div>
              <div className="home-studenthome__feature-list">
                <p><strong>Persistent student profile</strong><span>A stable identity layer for relevant academic information and services.</span></p>
                <p><strong>Credential organization</strong><span>Keep certificates, student IDs, and records easier to locate and manage.</span></p>
                <p><strong>Secure-by-design foundations</strong><span>Build toward careful access controls and privacy-conscious data handling.</span></p>
                <p><strong>Wallet-ready architecture</strong><span>Leave room for future digital wallet and verifiable credential integrations.</span></p>
              </div>
            </div>
          </section>

          <section className="home-studenthome home-studenthome--intelligence" aria-labelledby="studenthome-intelligence-title">
            <div className="home-studenthome__copy home-studenthome__copy--wide">
              <span className="home-studenthome__eyebrow">05 / DESIGNED WITH INTENTION</span>
              <h2 id="studenthome-intelligence-title"><SplitText text="Less switching." tag="span" /><br/><SplitText text="More momentum." tag="span" className="home-studenthome__accent" /></h2>
              <div className="home-studenthome__caption-lines" aria-label="Studenthome reduces fragmentation so students can focus on what comes next.">
                <SplitText text="Reduce the friction between" tag="span" className="home-studenthome__caption-line" delay={5} duration={420} />
                <SplitText text="finding information and acting on it." tag="span" className="home-studenthome__caption-line" delay={5} duration={420} />
              </div>
              <div className="home-studenthome__feature-list">
                <p><strong>Unified navigation</strong><span>Move between core student services without losing your place.</span></p>
                <p><strong>Context-aware dashboard</strong><span>Bring relevant tasks and academic updates into a calmer overview.</span></p>
                <p><strong>Action-oriented information</strong><span>Turn dates, notices, and opportunities into clear next steps.</span></p>
                <p><strong>One coherent experience</strong><span>Replace fragmented journeys with a consistent student-facing interface.</span></p>
              </div>
            </div>
          </section>

          <section className="home-studenthome home-studenthome--closing" aria-labelledby="studenthome-closing-title">
            <div className="home-studenthome__copy home-studenthome__copy--closing">
              <span className="home-studenthome__eyebrow">STUDENTHOME / EDUCATION PLATFORM</span>
              <h2 id="studenthome-closing-title">
                <SplitText text="Your next chapter." tag="span" className="home-studenthome__closing-headline home-studenthome__accent" delay={28} duration={760} />
              </h2>
              <SplitText text="One home for the services, records, and opportunities that move student life forward." tag="p" className="home-studenthome__closing-caption" delay={8} duration={520} />
              <Link href="/products/studenthome" className="home-studenthome__link">
                Discover Studenthome <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        </section>

        <section ref={codelosStoryRef} className="home-codelos-story" aria-label="Codelos engineering platform">
          <section className="home-codelos home-codelos--intro" aria-labelledby="codelos-title">
            <div className="home-codelos__copy">
              <span className="home-codelos__eyebrow">01 / ENGINEERING PLATFORM</span>
              <h2 id="codelos-title"><SplitText text="The Codelos" tag="span" /><br/><SplitText text="Ecosystem." tag="span" className="home-codelos__accent" /></h2>
              <SplitText text="The complete developer platform for intelligent, distributed, and high-performance software engineering." tag="p" className="home-codelos__caption" delay={7} duration={480} />
              <div className="home-codelos__system-line" aria-label="A connected engineering lifecycle">
                <span>DESIGN</span><i aria-hidden="true">/</i><span>BUILD</span><i aria-hidden="true">/</i><span>SHIP</span><i aria-hidden="true">/</i><span>OPERATE</span>
              </div>
            </div>
          </section>

          <section className="home-codelos home-codelos--daemon" aria-labelledby="codelos-daemon-title">
            <div className="home-codelos__copy home-codelos__copy--wide">
              <span className="home-codelos__eyebrow">02 / AI-ASSISTED ENGINEERING</span>
              <h2 id="codelos-daemon-title"><SplitText text="Meet" tag="span" /><br/><SplitText text="Daemon." tag="span" className="home-codelos__accent" /></h2>
              <div className="home-codelos__caption-lines" aria-label="An AI-native development environment that works alongside the engineer.">
                <SplitText text="An AI-native development environment" tag="span" className="home-codelos__caption-line" delay={5} duration={420} />
                <SplitText text="that works alongside the engineer." tag="span" className="home-codelos__caption-line" delay={5} duration={420} />
              </div>
              <div className="home-codelos__feature-list">
                <p><strong>Context-aware coding</strong><span>Ground suggestions in project structure, dependencies, and the code already in motion.</span></p>
                <p><strong>Debugging intelligence</strong><span>Trace failures across call paths, surface likely causes, and turn diagnostics into actionable fixes.</span></p>
                <p><strong>Automated workflows</strong><span>Coordinate repeatable engineering tasks while keeping the developer in control.</span></p>
                <p><strong>Execution-aware assistance</strong><span>Connect edits, tests, terminal actions, and feedback in one continuous loop.</span></p>
              </div>
            </div>
          </section>

          <section className="home-codelos home-codelos--cocoa" aria-labelledby="codelos-cocoa-title">
            <div className="home-codelos__copy home-codelos__copy--wide">
              <span className="home-codelos__eyebrow">03 / COLLABORATIVE WORKSPACE</span>
              <h2 id="codelos-cocoa-title"><SplitText text="Better work," tag="span" /><br/><SplitText text="together." tag="span" className="home-codelos__accent" /></h2>
              <div className="home-codelos__caption-lines" aria-label="A shared workspace for people, projects, and engineering knowledge.">
                <SplitText text="A shared workspace for people," tag="span" className="home-codelos__caption-line" delay={5} duration={420} />
                <SplitText text="projects, and engineering knowledge." tag="span" className="home-codelos__caption-line" delay={5} duration={420} />
              </div>
              <div className="home-codelos__feature-list">
                <p><strong>Shared coding sessions</strong><span>Work through complex changes with teammates in a coordinated, real-time environment.</span></p>
                <p><strong>Living documentation</strong><span>Keep technical decisions, implementation notes, and project context close to the work.</span></p>
                <p><strong>Team coordination</strong><span>Align ownership, review cycles, and next actions without fragmenting the workflow.</span></p>
                <p><strong>AI-assisted knowledge flow</strong><span>Make project knowledge easier to discover, summarize, and carry forward.</span></p>
              </div>
            </div>
          </section>

          <section className="home-codelos home-codelos--fly" aria-labelledby="codelos-fly-title">
            <div className="home-codelos__copy home-codelos__copy--wide">
              <span className="home-codelos__eyebrow">04 / CONTINUOUS DELIVERY</span>
              <h2 id="codelos-fly-title"><SplitText text="From commit" tag="span" /><br/><SplitText text="to production." tag="span" className="home-codelos__accent" /></h2>
              <div className="home-codelos__caption-lines" aria-label="Fly brings repeatable delivery workflows into the Codelos engineering lifecycle.">
                <SplitText text="Fly turns the path from source to release" tag="span" className="home-codelos__caption-line" delay={5} duration={420} />
                <SplitText text="into a visible, repeatable workflow." tag="span" className="home-codelos__caption-line" delay={5} duration={420} />
              </div>
              <div className="home-codelos__feature-list">
                <p><strong>Pipeline orchestration</strong><span>Compose build, test, package, and deployment stages into a consistent release path.</span></p>
                <p><strong>Policy gates</strong><span>Apply quality checks and approval boundaries before changes move between environments.</span></p>
                <p><strong>Artifact provenance</strong><span>Keep build outputs and release metadata traceable across the delivery lifecycle.</span></p>
                <p><strong>Deployment feedback</strong><span>Bring health signals and release status back into the engineering workflow.</span></p>
              </div>
            </div>
          </section>

          <section className="home-codelos home-codelos--sailwind" aria-labelledby="codelos-sailwind-title">
            <div className="home-codelos__copy home-codelos__copy--wide">
              <span className="home-codelos__eyebrow">05 / DISTRIBUTED ENGINEERING</span>
              <h2 id="codelos-sailwind-title"><SplitText text="Build beyond" tag="span" /><br/><SplitText text="the local machine." tag="span" className="home-codelos__accent" /></h2>
              <div className="home-codelos__caption-lines" aria-label="Sailwind extends the Codelos workflow across connected development and deployment environments.">
                <SplitText text="Sailwind connects the engineering surface" tag="span" className="home-codelos__caption-line" delay={5} duration={420} />
                <SplitText text="to a distributed execution model." tag="span" className="home-codelos__caption-line" delay={5} duration={420} />
              </div>
              <div className="home-codelos__feature-list">
                <p><strong>Regional execution nodes</strong><span>Position workloads closer to teams, infrastructure, and the systems they serve.</span></p>
                <p><strong>Environment portability</strong><span>Carry consistent project configuration across development, staging, and production.</span></p>
                <p><strong>Service-aware routing</strong><span>Coordinate work across available environments with clear boundaries and observability.</span></p>
                <p><strong>Resilient engineering fabric</strong><span>Design for graceful recovery when a node or dependency becomes unavailable.</span></p>
              </div>
            </div>
          </section>

          <section className="home-codelos home-codelos--closing" aria-labelledby="codelos-closing-title">
            <div className="home-codelos__copy home-codelos__copy--closing">
              <span className="home-codelos__eyebrow">CODELOS / ENGINEERING PLATFORM</span>
              <h2 id="codelos-closing-title"><SplitText text="Engineering," tag="span" /><br/><SplitText text="in full flow." tag="span" className="home-codelos__accent home-codelos__closing-headline" delay={28} duration={760} /></h2>
              <SplitText text="One connected environment for the people, intelligence, and infrastructure behind modern software." tag="p" className="home-codelos__closing-caption" delay={8} duration={520} />
              <Link href="/products/codelos" className="home-codelos__link">
                Discover Codelos <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}