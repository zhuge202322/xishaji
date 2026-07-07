import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Beaker, CheckCircle2, FileText, MessageSquare, Send } from "lucide-react";
import { VideoEvidence } from "@/components/TrustEvidence";
import { company, oreSolutionGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Ore Solutions | VICMACH",
  description:
    "Ore processing solutions for precious, polymetallic, nonferrous, rare, ferrous, and nonmetallic minerals."
};

const processSteps = [
  "Ore sample and property review",
  "Crushing and grinding flow-sheet",
  "Separation route selection",
  "Thickening, dewatering, and tailings plan",
  "Equipment configuration and quotation"
];

export default function OreSolutionsPage() {
  const whatsappHref = `https://wa.me/${company.phone.replace(/\D/g, "")}`;

  return (
    <main>
      <section className="page-hero">
        <Image src="/images/product-inspection.webp" alt="VICMACH engineers inspecting mineral processing equipment" fill sizes="100vw" priority />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Ore Solutions</p>
          <h1>Mineral process routes by ore type</h1>
          <p>
            From gold and polymetallic ore to quartz, graphite, fluorite, iron, manganese,
            and chromite, VICMACH configures process lines around recovery, grade, capacity,
            and water conditions.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact#inquiry-title">
              Send Ore Sample Details <ArrowRight size={18} aria-hidden />
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
            <strong>For a useful process recommendation</strong>
            <span>Provide ore type, grade, mud content, target recovery, capacity, and available water conditions.</span>
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

      <section className="section ore-solution-page-section">
        <div className="container">
          <div className="section-row">
            <div className="section-heading section-heading-left">
              <p className="eyebrow">Mineral Categories</p>
              <h2>Choose by ore, then refine by test data</h2>
              <p>
                The first route is built from the ore category. Final equipment selection follows
                material testing, required grade, particle size, and site layout.
              </p>
            </div>
            <Link className="text-link" href="/equipment">
              Match Equipment <ArrowRight size={16} aria-hidden />
            </Link>
          </div>

          <div className="ore-solution-page-grid">
            {oreSolutionGroups.map((group, index) => (
              <article className="ore-solution-card" id={group.href.split("#")[1]} key={group.title}>
                <span className="case-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <div className="ore-chip-list">
                  {group.ores.map((ore) => (
                    <span key={ore}>{ore}</span>
                  ))}
                </div>
                <Link href="/contact#inquiry-title">
                  Send Ore Data <ArrowRight size={16} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted process-route-section">
        <div className="container process-route-layout">
          <div>
            <p className="eyebrow">Engineering Workflow</p>
            <h2>From ore sample to complete line</h2>
            <p>
              VICMACH engineers combine beneficiation documents, site data, and equipment
              manufacturing capability to produce a practical plant configuration.
            </p>
          </div>
          <div className="process-route-list">
            {processSteps.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Beaker size={18} aria-hidden />
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ore-support-grid">
          <article>
            <CheckCircle2 size={24} aria-hidden />
            <h2>Multiple Process Routes</h2>
            <p>Gravity, flotation, magnetic separation, washing, dewatering, and combined routes can be reviewed by ore type.</p>
          </article>
          <article>
            <CheckCircle2 size={24} aria-hidden />
            <h2>Line-Level Matching</h2>
            <p>Crushers, mills, classifiers, separators, thickeners, filters, pumps, conveyors, and controls are configured together.</p>
          </article>
          <article>
            <CheckCircle2 size={24} aria-hidden />
            <h2>Procurement Evidence</h2>
            <p>Factory media, certificates, project examples, and visit support help buyers verify manufacturing capability.</p>
          </article>
        </div>
      </section>

      <VideoEvidence compact />
    </main>
  );
}
