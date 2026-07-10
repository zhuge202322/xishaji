import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { certificateFiles, company } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Inquiry | VICMACH",
  description:
    "Contact VICMACH for crushing, sand making, mineral processing, grinding, and washing equipment inquiries."
};

export default function ContactPage() {
  return (
    <main>
      <section className="simple-hero blueprint">
        <div className="container">
          <p className="eyebrow">Inquiry</p>
          <h1>Start Your Project</h1>
          <p>
            Deploy industry-leading crushing and mineral processing equipment. Our engineers
            are ready to assist with specifications and site-specific production line plans.
          </p>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-page-grid">
          <aside className="contact-aside">
            <div className="contact-card primary-contact">
              <p className="eyebrow">China Headquarters</p>
              <h2>{company.legalName}</h2>
              <p className="contact-local-name">{company.cnName}</p>
              <p>{company.headquarters}</p>
              <a href={`tel:${company.phone.replaceAll(" ", "")}`}>
                <Phone size={18} aria-hidden /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`}>
                <Mail size={18} aria-hidden /> {company.email}
              </a>
            </div>

            <div className="office-grid">
              <div className="contact-card">
                <p className="eyebrow">Indonesia Office</p>
                <h3>{company.indonesiaName}</h3>
                <p>{company.indonesiaOffice}</p>
              </div>
              <div className="contact-card">
                <p className="eyebrow">Vietnam Office</p>
                <h3>{company.vietnamName}</h3>
                <p>{company.vietnamOffice}</p>
              </div>
            </div>

            <a className="whatsapp-card" href={`https://wa.me/${company.phone.replace(/\\D/g, "")}`}>
              <MessageSquare size={24} aria-hidden />
              <span>
                <strong>Direct WhatsApp Support</strong>
                Instant technical response
              </span>
            </a>

            <div className="map-card">
              <Image src="/images/factory-gate.webp" alt="VICMACH headquarters entrance" fill sizes="(max-width: 980px) 100vw, 35vw" />
              <span>
                <MapPin size={16} aria-hidden /> Zhengzhou Headquarters
              </span>
            </div>

            <div className="contact-certificates">
              <p className="eyebrow">Procurement Files</p>
              <h2>Certificates available before inquiry</h2>
              {certificateFiles.map((item) => (
                <Link key={item.pdf} href={item.pdf} target="_blank" rel="noreferrer">
                  <span>{item.title}</span>
                  <ExternalLink size={15} aria-hidden />
                </Link>
              ))}
            </div>
          </aside>

          <section className="form-panel" aria-labelledby="inquiry-title">
            <h2 id="inquiry-title">Technical Inquiry Form</h2>
            <ContactForm />
          </section>
        </div>
      </section>
    </main>
  );
}
