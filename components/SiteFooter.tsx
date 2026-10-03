import Link from "next/link";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__brand">
        <strong>ADELOS</strong>
        <p>Advanced Distributed Evolution of Logic Operating Systems.</p>
        <p>Engineering Tomorrow's Foundations.</p>
      </div>

      <div className="site-footer__columns">
        <div>
          <span>Products</span>
          <Link href="/products/william-graham">William Graham</Link>
          <Link href="/products/studenthome">Studenthome</Link>
          <Link href="/products">Daemon</Link>
        </div>
        <div>
          <span>Research</span>
          <Link href="/portfolio">QESA</Link>
          <Link href="/portfolio">TENSA</Link>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© 2026 ADELOS. All rights reserved.</span>
        <nav aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/settings">Privacy</Link>
          <Link href="/settings">Terms</Link>
          <Link href="/settings">Copyright</Link>
        </nav>
      </div>
    </footer>
  );
}
