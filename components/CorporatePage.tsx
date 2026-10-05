import Link from "next/link";
import MenuBar from "@/components/MenuBar";
import SiteFooter from "@/components/SiteFooter";
import "./CorporatePage.css";

type CorporateItem={title:string;text?:string;meta?:string;href?:string};
type CorporateSection={heading:string;intro?:string;body?:string;items?:CorporateItem[]};
type CorporatePageProps={eyebrow:string;title:string;intro:string;sections:CorporateSection[]};

export default function CorporatePage({eyebrow,title,intro,sections}:CorporatePageProps){
 return <main className="corporate-page"><MenuBar/><section className="corporate-shell"><header className="corporate-heading"><span>{eyebrow}</span><h1>{title}</h1><p>{intro}</p></header><div className="corporate-sections">{sections.map((section,index)=><section className="corporate-section" key={section.heading}><div className="corporate-section__index">{String(index+1).padStart(2,"0")}</div><div className="corporate-section__main"><h2>{section.heading}</h2>{section.intro&&<p className="corporate-section__intro">{section.intro}</p>}{section.body&&<p className="corporate-section__body">{section.body}</p>}{section.items&&<div className="corporate-items">{section.items.map(item=>{const content=<>{item.meta&&<span>{item.meta}</span>}<h3>{item.title}</h3>{item.text&&<p>{item.text}</p>}{item.href&&<b>↗</b></>;return item.href?<Link className="corporate-item" href={item.href} key={item.title}>{content}</Link>:<article className="corporate-item" key={item.title}>{content}</article>})}</div>}</div></section>)}</div></section><SiteFooter/></main>;
}