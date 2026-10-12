import ProductDetail from "@/components/ProductDetail";

const components = [
  { name: "Codelos IDE", href: "/products/codelos/ide", description: "Development environment" },
  { name: "Daemon", href: "https://daemon-labs.vercel.app/", description: "Distributed systems" },
  { name: "Sailwind", href: "https://visa-adelos.vercel.app/", description: "Platform interface" },
  { name: "COCOA", href: "/products/codelos/cocoa", description: "Codelos component" },
  { name: "Fly", href: "https://aom-workshop-2026.vercel.app/", description: "Codelos component" },
];

export default function CodelosPage() {
  return <ProductDetail
    name="Codelos"
    number="03"
    category="Engineering Platform"
    description="An intelligent, distributed engineering platform designed for high-performance programming. Its product family includes Codelos IDE, Daemon, Sailwind, COCOA, and Fly."
    accent="violet"
    auroraColors={["#574CFD", "#0E0597", "#002FFF"]}
    status="Under active development"
    openHref="/codelos"
    relatedProducts={components}
  />;
}
