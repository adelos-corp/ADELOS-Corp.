import ProductDetail from "@/components/ProductDetail";

const components = [
  { name: "Codelos IDE", href: "/products/codelos/ide", description: "Development environment" },
  { name: "Daemon", href: "/products/codelos/daemon", description: "Distributed systems" },
  { name: "Sailwind", href: "/products/codelos/sailwind", description: "Platform interface" },
  { name: "COCOA", href: "/products/codelos/cocoa", description: "Codelos component" },
  { name: "Fly", href: "/products/codelos/fly", description: "Codelos component" },
];

export default function CodelosPage() {
  return <ProductDetail
    name="Codelos"
    number="03"
    category="Engineering Platform"
    description="An intelligent, distributed engineering platform designed for high-performance programming. Its product family includes Codelos IDE, Daemon, Sailwind, COCOA, and Fly."
    accent="orange"
    status="Under active development"
    relatedProducts={components}
  />;
}
