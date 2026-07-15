import type { Metadata } from "next";
import { CmsImage as Image } from "@/components/cms/CmsImage";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Factory, FileText, MessageSquare, Send, Settings2, Truck, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryEvidence, VideoEvidence } from "@/components/TrustEvidence";
import { getPublicSiteSettings } from "@/lib/cms/public-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "One-stop Plant Service | VICMACH",
  description:
    "One-stop mining plant service from process design and equipment manufacturing to installation, commissioning, training, and parts support."
};

const serviceSteps = [
  {
    title: "Material & Site Review",
    text: "Collect ore or aggregate characteristics, feed size, capacity target, final product size, water, power, and site layout conditions.",
    icon: ClipboardCheck
  },
  {
    title: "Process Flow Design",
    text: "Build a practical route covering crushing, grinding, washing, separation, dewatering, conveying, and environmental recovery.",
    icon: Settings2
  },
  {
    title: "Equipment Manufacturing",
    text: "Manufacture and inspect heavy machines in the Zhengzhou workshop before delivery, with real factory evidence available online.",
    icon: Factory
  },
  {
    title: "Delivery & Site Support",
    text: "Coordinate logistics, installation guidance, commissioning, operator training, and long-term spare parts planning.",
    icon: Truck
  },
  {
    title: "Optimization & Service",
    text: "Support capacity improvement, wear parts planning, process adjustment, and maintenance routines after commissioning.",
    icon: Wrench
  }
];

export default async function OneStopServicePage() {
  const settings = await getPublicSiteSettings();
  const whatsappHref = `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`;

  return (
    <main>
      <section className="page-hero">
        <Image src="/images/factory-aerial.webp" alt="VICMACH manufacturing base and industrial plant" fill sizes="100vw" priority />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">One-stop Plant Service</p>
          <h1>From process route to operating production line</h1>
          <p>
            VICMACH supports complete plant service for sand making, crushing, mineral processing,
            grinding, building materials, washing, dewatering, and solid waste recovery projects.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact#inquiry-title">
              Send Project Details <ArrowRight size={18} aria-hidden />
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
            <strong>Start with site data</strong>
            <span>Material, capacity, product size, site photos, drawings, and water conditions make the first proposal more useful.</span>
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

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Service Chain"
            title="A complete path for equipment buyers"
            text="The goal is to help buyers move from early technical uncertainty to a clear process route, machine configuration, and delivery plan."
          />
          <div className="service-step-grid">
            {serviceSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="service-step-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={26} aria-hidden />
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container handoff-layout">
          <div className="handoff-media">
            <Image src="/images/engineering-meeting.webp" alt="VICMACH technical meeting with project documents" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
          <div className="handoff-copy">
            <p className="eyebrow">Engineering Handoff</p>
            <h2>What your first proposal should include</h2>
            <p>
              A useful first proposal should explain the route, key machines, capacity assumptions,
              material limits, site requirements, and service plan. VICMACH keeps this information
              connected to visible factory and certificate proof.
            </p>
            <ul className="check-list">
              <li>Process flow and equipment list</li>
              <li>Capacity and finished-size assumptions</li>
              <li>Layout, water, and power notes</li>
              <li>Manufacturing, delivery, and commissioning plan</li>
              <li>Certificates and factory visit support</li>
            </ul>
            <Link className="button button-secondary" href="/contact#inquiry-title">
              Submit Plant Data
            </Link>
          </div>
        </div>
      </section>

      <VideoEvidence compact />
      <GalleryEvidence />
    </main>
  );
}
