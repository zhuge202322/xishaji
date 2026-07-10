import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Globe2, MapPin, Wrench } from "lucide-react";
import { AboutHero } from "@/components/AboutHero";
import { company, globalOffices } from "@/data/site";

export const metadata: Metadata = {
  title: "Company Profile | VICMACH",
  description: "VICMACH company profile, manufacturing scope, engineering capability, and global service offices."
};

export default function CompanyProfilePage() {
  return (
    <main>
      <AboutHero
        current="/about/profile"
        eyebrow="Company Profile"
        title="A manufacturer built around complete mining process delivery"
        text="VICMACH integrates technical review, equipment manufacturing, export coordination, installation guidance, commissioning, and long-term parts support."
        image="/images/factory-gate.webp"
        imageAlt="VICMACH manufacturing base entrance in Zhengzhou"
      />

      <section className="section company-profile-section">
        <div className="container company-profile-layout">
          <div className="company-profile-copy">
            <p className="eyebrow">Henan Victory Machinery Co., Ltd.</p>
            <h2>Heavy equipment manufacturing connected to engineering responsibility</h2>
            <p>
              Founded independently in 2019, VICMACH focuses on large and medium-sized crushing equipment
              and extends across sand making, beneficiation, grinding, building materials, washing,
              dewatering, and solid-waste recovery systems.
            </p>
            <p>
              The technical foundation reaches back to 2010. Today, the company supports individual
              machinery procurement and complete production-line delivery with one connected engineering,
              manufacturing, export, and service workflow.
            </p>
            <div className="company-profile-points">
              <span><Factory size={19} aria-hidden /> R&D and production base in Zhengzhou</span>
              <span><Wrench size={19} aria-hidden /> Single machines and complete EPC systems</span>
              <span><Globe2 size={19} aria-hidden /> China, Indonesia, and Vietnam support</span>
            </div>
            <Link className="button button-secondary" href="/one-stop-service">
              Review Delivery Capability <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <div className="company-profile-visual">
            <Image
              className="company-profile-main-image"
              src="/images/gallery/workshop-assembly-01.webp"
              alt="VICMACH team inside the heavy equipment workshop"
              width={820}
              height={560}
            />
            <div className="company-profile-image-row">
              <Image src="/images/product-inspection.webp" alt="VICMACH equipment inspection" width={400} height={260} />
              <Image src="/images/grinding-equipment.webp" alt="VICMACH grinding equipment" width={400} height={260} />
            </div>
          </div>
        </div>
        <div className="container company-profile-stats">
          <div><strong>{company.founded}</strong><span>Independent company launch</span></div>
          <div><strong>{company.patents}</strong><span>National patents</span></div>
          <div><strong>{company.projects}</strong><span>Full-chain project references</span></div>
          <div><strong>6</strong><span>Core equipment families</span></div>
        </div>
      </section>

      <section className="section section-muted company-office-section">
        <div className="container company-office-heading">
          <div><p className="eyebrow">Global Presence</p><h2>Regional communication close to project markets</h2></div>
          <p>Headquarters manages engineering and manufacturing while regional offices strengthen overseas coordination and response.</p>
        </div>
        <div className="container company-office-grid">
          {globalOffices.map((office) => (
            <article key={office.label}>
              <MapPin size={22} aria-hidden />
              <small>{office.label}</small>
              <h3>{office.name}</h3>
              <p>{office.address}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
