import ProductSite, { type ProductSiteData } from "@/components/ProductSite";

const product: ProductSiteData = {
  name: "TENSA",
  acronym: "Tendon Engineered Natural Systems Architecture",
  category: "BIOMECHANICS & ROBOTICS RESEARCH",
  number: "03",
  tagline: "Intelligence, embodied.",
  description: "A research architecture exploring mechanically intelligent systems through artificial tendons, biologically inspired movement, and physiological interfaces.",
  status: "Under active development",
  accent: "#E68B8B",
  background: "https://raw.githubusercontent.com/adelos-corp/ADELOS-Corp./main/93657028-5d29-4b41-9b29-a6d7501312ff.png",
  navLabel: "TENSA",
  sections: [
    { number: "01", eyebrow: "TENDON-FIRST ENGINEERING", title: "Movement begins with mechanics.", body: "TENSA explores artificial-tendon approaches to movement, taking inspiration from the way biological systems distribute force and coordinate motion.", items: [
      { title: "Artificial tendons", text: "Investigate tendon-like transmission and compliant mechanical structures." },
      { title: "Biologically inspired motion", text: "Study movement as a coordinated mechanical system rather than isolated rigid joints." }
    ]},
    { number: "02", eyebrow: "EMBODIED SYSTEMS", title: "Mechanics as part of intelligence.", body: "The research direction considers how physical design, sensing, and control could work together in systems that interact with the world.", items: [
      { title: "Mechanical embodiment", text: "Explore the relationship between structure, movement, and control." },
      { title: "Physiological interfaces", text: "Investigate interface concepts connecting human intent with embodied systems." }
    ]},
    { number: "03", eyebrow: "THE LONG VIEW", title: "A possible bridge to JENNY.", body: "The envisioned architecture pairs William Graham's cognitive layer with TENSA's physical embodiment under the JENNY concept. This is a proposed direction, not a claim of a completed integrated system.", items: [
      { title: "William Graham", text: "The envisioned cognition and reasoning layer." },
      { title: "TENSA", text: "The proposed embodiment and mechanical systems layer." }
    ]}
  ],
  closing: "Give intelligence a physical vocabulary.",
  cta: "Explore TENSA",
  ctaHref: "/products/tensa"
};

export default function TENSAWebsite() { return <ProductSite product={product} />; }
