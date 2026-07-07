import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, MessageSquare, Ruler, Send } from "lucide-react";
import { CertificateEvidence, ManufacturingEvidence } from "@/components/TrustEvidence";
import { getEquipmentProductByTitle } from "@/data/equipment-products";
import { company, equipmentGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Equipment Center | VICMACH",
  description:
    "VICMACH equipment center for crushing, screening, grinding, classification, beneficiation, dewatering, supporting systems, and wet washing machinery."
};

const categoryImages = [
  "/images/workshop-wide.webp",
  "/images/grinding-equipment.webp",
  "/images/product-inspection.webp",
  "/images/gallery/workshop-assembly-03.webp",
  "/images/workshop-line.webp",
  "/images/washing-equipment.webp"
];

export default function EquipmentPage() {
  const whatsappHref = `https://wa.me/${company.phone.replace(/\D/g, "")}`;

  return (
    <main>
      <section className="page-hero">
        <Image src="/images/workshop-wide.webp" alt="VICMACH heavy mining equipment in workshop" fill sizes="100vw" priority />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Equipment Center</p>
          <h1>Mining machinery by process stage</h1>
          <p>
            Browse real product categories from VICMACH technical documents, then send material
            and capacity details for model selection and a practical quotation.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a Quote <ArrowRight size={18} aria-hidden />
            </Link>
            <a className="button button-ghost-dark" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Engineer
            </a>
          </div>
        </div>
      </section>

      <section className="conversion-strip">
        <div className="container conversion-strip-grid">
          <div>
            <strong>Fast model recommendation</strong>
            <span>Send material, feed size, target capacity, final product size, and site constraints.</span>
          </div>
          <div className="conversion-actions">
            <Link href="/contact">
              <FileText size={16} aria-hidden /> Request a Quote
            </Link>
            <Link href="/contact#inquiry-title">
              <Send size={16} aria-hidden /> Send Material & Capacity
            </Link>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageSquare size={16} aria-hidden /> Contact Engineer on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section equipment-index-section">
        <div className="container">
          <div className="equipment-index">
            {equipmentGroups.map((group) => (
              <a key={group.title} href={group.href}>
                <span>{String(group.items.length).padStart(2, "0")}</span>
                {group.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section equipment-catalog-section">
        <div className="container equipment-catalog">
          {equipmentGroups.map((group, index) => (
            <article className="equipment-catalog-card" id={group.href.split("#")[1]} key={group.title}>
              <div className="equipment-catalog-media">
                <Image
                  src={categoryImages[index] ?? "/images/workshop-line.webp"}
                  alt={`${group.title} equipment`}
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                />
              </div>
              <div className="equipment-catalog-body">
                <p className="eyebrow">{String(index + 1).padStart(2, "0")} / Equipment Category</p>
                <h2>{group.title}</h2>
                <p>{group.text}</p>
                <ul className="equipment-model-list">
                  {group.items.map((item) => {
                    const equipmentProduct = getEquipmentProductByTitle(item);

                    return (
                      <li key={item}>
                        <CheckCircle2 size={16} aria-hidden />
                        {equipmentProduct ? (
                          <Link className="equipment-model-link" href={`/equipment/${equipmentProduct.slug}`}>
                            <span>{item}</span>
                            <ArrowRight size={13} aria-hidden />
                          </Link>
                        ) : (
                          <span>{item}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="equipment-card-actions">
                  <Link href="/contact">
                    <Ruler size={16} aria-hidden /> Ask for Parameters
                  </Link>
                  <Link href="/contact#inquiry-title">
                    <Send size={16} aria-hidden /> Send Capacity
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container procurement-grid">
          <div>
            <p className="eyebrow">Selection Notes</p>
            <h2>What engineers need before choosing equipment</h2>
            <p>
              A reliable quotation should be based on material behavior and site targets, not a
              generic machine list. The details below make model selection faster and more accurate.
            </p>
          </div>
          <div className="procurement-checklist">
            <span>Raw material and hardness</span>
            <span>Maximum feed size</span>
            <span>Required capacity per hour</span>
            <span>Final product size or concentrate target</span>
            <span>Water, power, and installation conditions</span>
            <span>Photos, drawings, or existing plant layout</span>
          </div>
        </div>
      </section>

      <ManufacturingEvidence />
      <CertificateEvidence />
    </main>
  );
}
