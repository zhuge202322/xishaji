import Link from "next/link";
import { Globe2, Mail, MapPin, MessageSquare, Music2, Phone, PlaySquare, Video } from "lucide-react";
import { company, equipmentGroups, globalOffices, oreSolutionGroups, socialChannels } from "@/data/site";
import { Logo } from "./Logo";

const socialIcons = {
  tiktok: Music2,
  douyin: Video,
  wechat: MessageSquare,
  facebook: Globe2,
  youtube: PlaySquare
};

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

      <div className="footer-office-band" aria-label="VICMACH global offices">
        {globalOffices.map((office) => (
          <div key={office.label}>
            <MapPin size={18} aria-hidden />
            <span>
              <strong>{office.label}</strong>
              <b>{office.name}</b>
              <small>{office.address}</small>
            </span>
          </div>
        ))}
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
          <Link href="/about/profile">Company Profile</Link>
          <Link href="/about/history">Company History</Link>
          <Link href="/about/honors">Honors & Certificates</Link>
          <Link href="/about/patents">Patents & R&D</Link>
          <Link href="/about/culture">Company Culture</Link>
          <Link href="/one-stop-service">One-stop Plant Service</Link>
          <Link href="/projects">Global Projects</Link>
          <Link href="/factory-visit">Factory Visit</Link>
          <Link href="/news">News Center</Link>
        </div>

        <div className="footer-social-column">
          <h2>Official Channels</h2>
          <p className="fine-print">Connect with VICMACH across our active video and social platforms.</p>
          <div className="footer-social-links">
            {socialChannels.map((channel) => {
              const Icon = socialIcons[channel.id as keyof typeof socialIcons];

              return (
                <Link
                  key={channel.id}
                  href={channel.href}
                  title={channel.label}
                  aria-label={`Contact VICMACH for the official ${channel.label} account`}
                >
                  <Icon size={17} aria-hidden />
                  <span>{channel.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright 2026 {company.legalName}. All rights reserved.</span>
        <span>High-Tech Enterprise / CE Files / 25+ Patents / 100+ Project References</span>
      </div>
    </footer>
  );
}
