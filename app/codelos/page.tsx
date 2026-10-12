import ProductSite, { type ProductSiteData } from "@/components/ProductSite";

const product: ProductSiteData = {
  name: "Codelos",
  acronym: "Engineering, composed.",
  category: "ENGINEERING PLATFORM",
  number: "01",
  tagline: "Your code. Your environment. Your way.",
  description: "A customizable source-code environment designed to grow into the engineering workspace you need, with a family of tools built around the development workflow.",
  status: "Under active development",
  accent: "#574CFD",
  background: "https://raw.githubusercontent.com/adelos-corp/ADELOS-Corp./main/3c2963c1-762f-4e13-ac56-48d249d34d03.png",
  navLabel: "Codelos",
  sections: [
    { number: "01", eyebrow: "THE ENVIRONMENT", title: "An editor that can become your IDE.", body: "Codelos starts with a source-code editor and a customizable foundation. Its direction is a focused engineering environment that adapts to the developer, rather than forcing every workflow into one fixed shape.", items: [
      { title: "Composable workspace", text: "Shape the editing environment around the way you build and maintain software." },
      { title: "Developer-first focus", text: "Keep code, tools, and workflow close without unnecessary interface noise." }
    ]},
    { number: "02", eyebrow: "THE TOOLCHAIN", title: "A family, not a single surface.", body: "Codelos is the center of a wider engineering family. Each named component has a distinct place in the platform vision, while details evolve alongside implementation.", items: [
      { title: "Fly", text: "A component in the Codelos product family." },
      { title: "Cocoa", text: "A component in the Codelos product family." },
      { title: "Daemon", text: "A distributed-systems component in the wider engineering ecosystem." },
      { title: "Sailwind", text: "A platform interface within the Codelos family." }
    ]},
    { number: "03", eyebrow: "THE PRINCIPLE", title: "Build without fighting your tools.", body: "A strong development environment should stay out of the way when you are moving quickly, and become more capable when the work gets complicated.", items: [
      { title: "Adaptable by design", text: "A foundation intended to support different coding styles and project needs." },
      { title: "One coherent workflow", text: "A product direction centered on continuity between editing and engineering tasks." }
    ]}
  ],
  closing: "Make the environment fit the engineer.",
  cta: "Explore Codelos components",
  ctaHref: "/products/codelos"
};

export default function CodelosWebsite() { return <ProductSite product={product} />; }
