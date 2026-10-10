import Link from "next/link";
import "./SiteFooter.css";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer__brand"><strong>ADELOS Corp.</strong><p>Engineering solutions that solve tomorrow.</p></div>
    <div className="site-footer__columns">
      <div><span>Products</span><Link href="/products/visa">VISA</Link><Link href="/products/william-graham">William Graham</Link><Link href="/products/studenthome">Studenthome</Link><Link href="/products">Daemon</Link></div>
      <div><span>Company</span><Link href="/research">Research</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
      <div><span>Social</span><a href="https://x.com" target="_blank" rel="noreferrer">X</a><a href="https://github.com/adelos-corp" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div>
    </div>
    <div className="site-footer__bottom"><span>© 2026 ADELOS Corp.</span><nav><Link href="/settings">Privacy</Link><Link href="/settings">Terms</Link><Link href="/settings">Cookies</Link></nav></div>
  </footer>;
}