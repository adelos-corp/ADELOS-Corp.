import ProductSite, { type ProductSiteData } from "@/components/ProductSite";

const product: ProductSiteData = {
  name: "QESA",
  acronym: "Quantum Encryption Systems Architecture",
  category: "CYBERSECURITY ARCHITECTURE",
  number: "04",
  tagline: "Security, by design.",
  description: "A modular security architecture initiative focused on cryptographic protection, key management, identity and access control, intelligent monitoring, and research into quantum technologies.",
  status: "Coming soon",
  accent: "#75D995",
  background: "https://raw.githubusercontent.com/adelos-corp/ADELOS-Corp./main/5e8be181-b8bc-4376-9249-f0a4cf85f2d8.png",
  navLabel: "QESA",
  sections: [
    { number: "01", eyebrow: "CRYPTOGRAPHIC FOUNDATION", title: "Start with established security.", body: "QESA's architecture direction begins with the fundamentals: cryptographic protection, careful key handling, and access policies that can be reasoned about and audited.", items: [
      { title: "Cryptographic protection", text: "A foundation for protecting data and communications with established cryptographic methods." },
      { title: "Key management", text: "Treat key lifecycle, storage, rotation, and access as first-class design concerns." }
    ]},
    { number: "02", eyebrow: "IDENTITY & MONITORING", title: "Make trust visible and manageable.", body: "Security is a system of controls, identities, and signals. QESA explores bringing those concerns into a coherent architecture with intelligent monitoring as a supporting layer.", items: [
      { title: "Identity and access", text: "A direction for clear authorization boundaries and policy-aware access." },
      { title: "AI-assisted monitoring", text: "Explore monitoring and triage assistance without treating AI as a substitute for security controls." }
    ]},
    { number: "03", eyebrow: "QUANTUM RESEARCH", title: "Research carefully. Claim precisely.", body: "QESA includes a research direction for quantum-related cryptography and simulation. Research and simulation do not, by themselves, mean production quantum-secure encryption or quantum hardware.", items: [
      { title: "Quantum simulation", text: "Investigate concepts through software-based experiments and tools such as Qiskit." },
      { title: "Quantum-ready thinking", text: "Keep future cryptographic transitions and evolving standards in view as the architecture develops." }
    ]}
  ],
  closing: "Build trust into the architecture.",
  cta: "Explore QESA",
  ctaHref: "/products/qesa"
};

export default function QESAWebsite() { return <ProductSite product={product} />; }
