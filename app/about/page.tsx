import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, Building2, Globe2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CertificateEvidence, GalleryEvidence, TrustProofGrid } from "@/components/TrustEvidence";
import { certifications, company, timeline } from "@/data/site";

export const metadata: Metadata = {
  title: "About VICMACH | Henan Victory Machinery",
  description:
    "Learn about Henan Victory Machinery Co., Ltd., the VICMACH brand, company history, qualifications, and global service presence."
};

export default function AboutPage() {
  return (
    <main>
      <section className="simple-hero about-hero">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">About VICMACH</p>
            <h1>Pioneering Intelligent Mining Equipment</h1>
            <p>
              {company.legalName} is a national high-tech enterprise integrating R&D,
              production, and global sales for heavy mining machinery and complete EPC lines.
            </p>
          </div>
          <Image
            src="/images/factory-gate.webp"
            alt="VICMACH manufacturing base entrance"
            width={720}
            height={470}
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Company Profile"
              title="A manufacturer built for complete mining process delivery"
              text="Founded independently in 2019, VICMACH focuses on large and medium-sized mining machinery crushing equipment while expanding across sand making, beneficiation, grinding, building materials, washing, and solid waste recycling equipment."
            />
            <p className="large-copy">
              With 25+ national patents, a technical team rooted in mining process equipment,
              and more than 100 full-chain project service references, VICMACH provides both
              high-quality single machines and complete production line output.
            </p>
          </div>
          <div className="about-facts">
            <div>
              <Building2 size={28} aria-hidden />
              <strong>{company.headquarters}</strong>
              <span>China Headquarters</span>
            </div>
            <div>
              <Award size={28} aria-hidden />
              <strong>{company.patents}</strong>
              <span>National patents</span>
            </div>
            <div>
              <Globe2 size={28} aria-hidden />
              <strong>{company.projects}</strong>
              <span>Mining service projects</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Trust Signals"
            title="Company capability shown with real evidence"
            text="The about page now gives procurement visitors direct proof points before they enter an inquiry conversation."
          />
          <TrustProofGrid />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading align="center" eyebrow="Milestones" title="A Decade of Progress" />
          <div className="timeline-grid">
            {timeline.map((item) => (
              <article key={`${item.year}-${item.title}`}>
                <span>{item.year}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Honor & Certificates"
            title="Credentials that support international project confidence"
          />
          <div className="cert-grid">
            {certifications.map((item) => (
              <article key={item.title}>
                <BadgeCheck size={28} aria-hidden />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CertificateEvidence />
      <GalleryEvidence />

      <section className="section cta-panel-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Global Cooperation</p>
            <h2>Visit the factory or start a technical review.</h2>
            <p>Meet the team in Zhengzhou, review equipment on the production floor, or send your site data online.</p>
          </div>
          <Link className="button button-primary" href="/factory-visit">
            Plan a Visit <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
