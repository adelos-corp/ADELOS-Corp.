import Link from "next/link";
import MenuBar from "@/components/MenuBar";
import OrbitalVisual from "@/components/OrbitalVisual";
import SiteFooter from "@/components/SiteFooter";
import "@/components/Products.css";

const products = [
  {number:"01",name:"VISA",stage:"In development",text:"Visual Intelligence Systems Architecture.",href:"/products/visa",accent:"green" as const},
  {number:"02",name:"William Graham",stage:"In development",text:"Flagship artificial intelligence system.",href:"/products/william-graham",accent:"violet" as const},
  {number:"03",name:"Studenthome",stage:"In development",text:"Global student infrastructure.",href:"/products/studenthome",accent:"blue" as const},
  {number:"04",name:"Daemon",stage:"Part of CODELOS",text:"Distributed systems and compute infrastructure.",href:"/products",accent:"orange" as const},
];

export default function ProductsPage(){return <main className="products-page"><MenuBar/><section className="products-shell"><header className="products-heading"><div><span className="products-heading__eyebrow">ADELOS / PRODUCTS</span><h1>Products</h1></div><p>Systems designed to move from fundamental research into useful reality.</p></header><div className="products-grid">{products.map(p=><Link key={p.name} href={p.href} className="product-card-link"><div className="product-card__orb"><OrbitalVisual accent={p.accent} small/></div><div className="product-card__content"><span className="product-card__number">{p.number}</span><span className="product-card__stage">{p.stage}</span><h2>{p.name}</h2><p>{p.text}</p><span className="product-card__arrow">↗</span></div></Link>)}</div></section><SiteFooter/></main>}