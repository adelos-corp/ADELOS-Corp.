import ProductSite, { type ProductSiteData } from "@/components/ProductSite";

const product: ProductSiteData = {
  name: "VISA",
  acronym: "Visual Intelligence Systems Architecture",
  category: "SPATIAL COMPUTING SOFTWARE",
  number: "02",
  tagline: "Computing that understands how you move.",
  description: "A software-first spatial-computing and human-computer interaction concept built around visual perception, gesture recognition, and contextual interaction. VISA is software, not a headset.",
  status: "In development",
  accent: "#75FF00",
  background: "https://raw.githubusercontent.com/adelos-corp/ADELOS-Corp./main/e243c5a8-5ae6-4970-a2fe-79a6aad34e9f.png",
  navLabel: "VISA",
  sections: [
    { number: "01", eyebrow: "PERCEPTION", title: "The camera becomes an interface.", body: "VISA explores how visual input can become a practical interaction layer, interpreting movement and hand gestures to help people control software more naturally.", items: [
      { title: "Visual input", text: "Computer-vision foundations for observing the user's hand and interaction space." },
      { title: "Gesture vocabulary", text: "Recognizable gestures such as OPEN, FIST, and L as explicit interaction signals." }
    ]},
    { number: "02", eyebrow: "INTERPRETATION", title: "From movement to intent.", body: "A useful interface must do more than react to a single frame. VISA's concept combines gesture classification with temporal validation to make interaction more deliberate.", items: [
      { title: "Temporal validation", text: "Use consistency over time to reduce accidental or unstable gesture triggers." },
      { title: "Responsive interface", text: "Translate recognized input into clear software feedback and actions." }
    ]},
    { number: "03", eyebrow: "THE EXPERIENCE", title: "Spatial interaction, without a dedicated headset.", body: "VISA is being explored as a software experience that can make digital interaction feel more immediate using available camera and computing capabilities.", items: [
      { title: "Software-first", text: "A product direction centered on software rather than a proprietary wearable." },
      { title: "Human-computer interaction", text: "Explore intuitive, accessible ways to bridge physical gestures and digital controls." }
    ]}
  ],
  closing: "Make interaction feel more natural.",
  cta: "Explore the VISA concept",
  ctaHref: "/products/visa"
};

export default function VISAWebsite() { return <ProductSite product={product} />; }
