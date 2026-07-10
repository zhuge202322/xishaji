import type { Metadata } from "next";
import { Award, BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { AboutHero } from "@/components/AboutHero";
import { CertificateEvidence } from "@/components/TrustEvidence";
import { certifications } from "@/data/site";

export const metadata: Metadata = {
  title: "Honors & Certificates | VICMACH",
  description: "Review and download VICMACH company qualifications, product certificates, and production-line CE files."
};

const icons = [Award, BadgeCheck, FileCheck2, ShieldCheck];

export default function HonorsPage() {
  return (
    <main>
      <AboutHero
        current="/about/honors"
        eyebrow="Honors & Certificates"
        title="Qualification files available before procurement confirmation"
        text="Review company capability, product compliance, and production-line certification directly online without waiting for separate email attachments."
        image="/images/product-inspection.webp"
        imageAlt="VICMACH team inspecting manufactured mining equipment"
      />

      <section className="section honors-summary-section">
        <div className="container honors-summary-heading">
          <div><p className="eyebrow">Qualification Portfolio</p><h2>Four proof points behind international delivery</h2></div>
          <p>Each record supports a different procurement question, from company R&D status to export and line-level conformity.</p>
        </div>
        <div className="container honors-summary-grid">
          {certifications.map((item, index) => {
            const Icon = icons[index];
            return <article key={item.title}><Icon size={24} aria-hidden /><h3>{item.title}</h3><p>{item.text}</p></article>;
          })}
        </div>
      </section>

      <CertificateEvidence />
    </main>
  );
}
