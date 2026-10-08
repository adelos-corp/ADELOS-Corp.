import ProductDetail from "@/components/ProductDetail";

const components: Record<string, { name: string; number: string }> = {
  ide: { name: "Codelos IDE", number: "03.1" },
  daemon: { name: "Daemon", number: "03.2" },
  sailwind: { name: "Sailwind", number: "03.3" },
  cocoa: { name: "COCOA", number: "03.4" },
  fly: { name: "Fly", number: "03.5" },
};

export default async function CodelosComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = components[slug] ?? { name: "Codelos", number: "03" };
  return <ProductDetail name={item.name} number={item.number} category="Codelos" description="A component of the Codelos engineering platform." accent="orange" status="Under active development"/>;
}
