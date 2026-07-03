import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";
import { company, solutionLinks } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Global manufacturer of heavy-duty crushing, sand-making, mineral processing,
            grinding, building material, and washing equipment.
          </p>
          <div className="footer-contact-row">
            <a href={`tel:${company.phone.replaceAll(" ", "")}`} aria-label="Call VICMACH">
              <Phone size={18} aria-hidden />
            </a>
            <a href={`mailto:${company.email}`} aria-label="Email VICMACH">
              <Mail size={18} aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h2>Equipment</h2>
          {solutionLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h2>Company</h2>
          <Link href="/about">About VICMACH</Link>
          <Link href="/projects">Global Projects</Link>
          <Link href="/factory-visit">Factory Visit</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h2>Newsletter</h2>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="newsletter-email">
              Work email
            </label>
            <input id="newsletter-email" type="email" placeholder="Your work email" />
            <button type="submit" aria-label="Subscribe">
              <Send size={18} aria-hidden />
            </button>
          </form>
          <p className="fine-print">Receive equipment updates, project cases, and EPC process notes.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 {company.legalName}. All rights reserved.</span>
        <span>ISO 9001:2015 Certified · CE Compliant</span>
      </div>
    </footer>
  );
}
