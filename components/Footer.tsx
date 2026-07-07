import Link from "next/link";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import { company, equipmentGroups, oreSolutionGroups } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const whatsappHref = `https://wa.me/${company.phone.replace(/\D/g, "")}`;

  return (
    <footer className="site-footer">
      <div className="footer-cta-band">
        <div>
          <p className="eyebrow">Engineering Support</p>
          <h2>Need model selection, process flow, or a budgetary quotation?</h2>
        </div>
        <div className="footer-cta-actions">
          <Link className="button button-primary" href="/contact">
            Request a Quote
          </Link>
          <a className="button button-ghost-dark" href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp Engineer <MessageSquare size={18} aria-hidden />
          </a>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Global manufacturer of heavy-duty crushing, sand-making, mineral processing,
            grinding, building material, washing, and environmental recovery equipment.
          </p>
          <div className="footer-contact-row">
            <a href={`tel:${company.phone.replaceAll(" ", "")}`} aria-label="Call VICMACH">
              <Phone size={18} aria-hidden />
            </a>
            <a href={`mailto:${company.email}`} aria-label="Email VICMACH">
              <Mail size={18} aria-hidden />
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Contact VICMACH on WhatsApp">
              <MessageSquare size={18} aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h2>Equipment Center</h2>
          {equipmentGroups.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.title}
            </Link>
          ))}
        </div>

        <div>
          <h2>Ore Solutions</h2>
          {oreSolutionGroups.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.title}
            </Link>
          ))}
        </div>

        <div>
          <h2>Company Proof</h2>
          <Link href="/about">About VICMACH</Link>
          <Link href="/one-stop-service">One-stop Plant Service</Link>
          <Link href="/projects">Global Projects</Link>
          <Link href="/factory-visit">Factory Visit</Link>
          <Link href="/about#certificates">Certificates</Link>
          <Link href="/news">News Center</Link>
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
        <span>Copyright 2026 {company.legalName}. All rights reserved.</span>
        <span>High-Tech Enterprise / CE Files / 25+ Patents / 100+ Project References</span>
      </div>
    </footer>
  );
}
