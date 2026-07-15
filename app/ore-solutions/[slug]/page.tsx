import type { Metadata } from "next";
import { CmsImage as Image } from "@/components/cms/CmsImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Beaker,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Gauge,
  MessageSquare,
  Ruler,
  Send,
  Settings2,
  ShieldCheck
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CertificateEvidence, ManufacturingEvidence } from "@/components/TrustEvidence";
import { getEquipmentProductByTitle } from "@/data/equipment-products";
import { getPublicSiteSettings } from "@/lib/cms/public-content";
import {
  getOreProductBySlug,
  getRelatedOreProducts,
  oreProducts,
  type OreDocxImage
} from "@/data/ore-products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const fallbackOreImage: OreDocxImage = {
  src: "/images/ore-docx/lead-zinc-silver-ore-02.png",
  width: 868,
  height: 485,
  alt: "Related mineral process image from VICMACH ore document"
};

export function generateStaticParams() {
  return oreProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getOreProductBySlug(slug);

  if (!product) {
    return {};
  }

  const heroImage = product.images[0]?.src ?? fallbackOreImage.src;

  return {
    title: `${product.title} | Ore Solutions | VICMACH`,
    description: product.summary,
    openGraph: {
      title: `${product.title} | VICMACH Ore Solutions`,
      description: product.summary,
      images: [heroImage]
    }
  };
}

export default async function OreDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getOreProductBySlug(slug);
  const settings = await getPublicSiteSettings();

  if (!product) {
    notFound();
  }

  const whatsappHref = `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`;
  const displayImages = product.images.length > 0 ? product.images : [fallbackOreImage];
  const heroImage = displayImages[0];
  const relatedProducts = getRelatedOreProducts(product.relatedSlugs);

  return (
    <main>
      <section className="page-hero product-hero ore-detail-hero">
        <Image src={heroImage.src} alt={heroImage.alt} fill sizes="100vw" priority />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <Link className="breadcrumb-link" href={product.categoryHref}>
            <ArrowLeft size={16} aria-hidden /> Back to {product.category}
          </Link>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p>{product.summary}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact#inquiry-title">
              Send Ore Data <ArrowRight size={18} aria-hidden />
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
            <strong>Need a process route for {product.shortTitle}?</strong>
            <span>Send ore grade, feed size, mud content, target concentrate grade, recovery target, capacity, and site water conditions.</span>
          </div>
          <div className="conversion-actions">
            <Link href="/contact">
              <FileText size={16} aria-hidden /> Request a Quote
            </Link>
            <Link href="/contact#inquiry-title">
              <Send size={16} aria-hidden /> Send Ore Sample Data
            </Link>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageSquare size={16} aria-hidden /> Contact Engineer
            </a>
          </div>
        </div>
      </section>

      <section className="metric-band">
        <div className="container metric-grid ore-detail-metrics">
          <div>
            <Gauge size={28} aria-hidden />
            <strong>Route</strong>
            <span>{product.processRoute}</span>
          </div>
          <div>
            <FileText size={28} aria-hidden />
            <strong>DOCX</strong>
            <span>{product.sourceDocument}</span>
          </div>
          <div>
            <ShieldCheck size={28} aria-hidden />
            <strong>Support</strong>
            <span>Sample review, flow-sheet, equipment list, quotation</span>
          </div>
        </div>
      </section>

      <section className="section ore-docx-section">
        <div className="container ore-docx-layout">
          <div className="ore-docx-media">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              sizes="(max-width: 900px) 100vw, 44vw"
            />
            <span>Original section: {product.originalTitle}</span>
          </div>
          <div className="ore-docx-copy">
            <p className="eyebrow">DOCX Ore Detail</p>
            <h2 className="section-title-with-icon">
              <ClipboardCheck size={32} aria-hidden />
              Process Description
            </h2>
            <p className="large-copy">{product.intro}</p>
            <div className="ore-source-card">
              <strong>Source Document Notes</strong>
              <p>{product.sourceIntro}</p>
              {product.sourceNotes.length > 0 ? (
                <ul>
                  {product.sourceNotes.slice(0, 3).map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section blueprint">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Process Route"
            title={`How VICMACH approaches ${product.shortTitle}`}
            text="The route below translates the DOCX ore notes into a buyer-ready engineering sequence."
          />
          <div className="ore-process-grid">
            {product.processSteps.map((step, index) => (
              <article className="ore-process-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Beaker size={22} aria-hidden />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container specs-layout">
          <SectionHeading
            eyebrow="Equipment Matching"
            title="Typical machines used in this route"
            text="Final model selection depends on test data, ore liberation size, capacity, and site layout. Use this equipment list as a discussion starting point."
          />
          <div className="ore-equipment-panel">
            {product.keyEquipment.map((equipment) => {
              const match = getEquipmentProductByTitle(equipment);

              return match ? (
                <Link href={`/equipment/${match.slug}`} key={equipment}>
                  <Settings2 size={16} aria-hidden />
                  <span>{equipment}</span>
                  <ArrowRight size={14} aria-hidden />
                </Link>
              ) : (
                <span key={equipment}>
                  <Settings2 size={16} aria-hidden />
                  {equipment}
                </span>
              );
            })}
          </div>
          <div className="spec-cta-card">
            <h3>Want a verified flow-sheet?</h3>
            <p>
              Send ore test data, process targets, and site constraints. VICMACH engineers can prepare a route,
              machine list, and quotation around your material.
            </p>
            <Link className="button button-secondary" href="/contact#inquiry-title">
              Submit Ore Data
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="document-images">
        <div className="container">
          <SectionHeading
            eyebrow="Document Images"
            title={`${product.shortTitle} images from the ore file`}
            text={
              product.images.length > 0
                ? "These images are extracted from the original ore DOCX and displayed here as technical evidence."
                : "This DOCX section has no standalone image, so a related mineral-processing image from the same source file is used as a visual reference."
            }
          />
          <div className="ore-image-gallery">
            {displayImages.map((image, index) => (
              <a className="ore-gallery-card" href={image.src} target="_blank" rel="noreferrer" key={`${image.src}-${index}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <span>{String(index + 1).padStart(2, "0")} / View original image</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Application Range</p>
            <h2 className="section-title-with-icon">
              <Ruler size={32} aria-hidden />
              When to request this solution
            </h2>
            <p className="large-copy">
              Use this page as a starting point when your raw ore or tailings match the conditions below.
              Laboratory testing and site data should confirm the final route.
            </p>
          </div>
          <div className="tag-cloud">
            {product.applications.map((application) => (
              <span key={application}>{application}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted ore-related-section">
        <div className="container">
          <SectionHeading
            eyebrow="Related Ores"
            title={`More routes in ${product.category}`}
            text="Compare neighboring ore processes before sending sample data or asking for a complete plant configuration."
          />
          <div className="equipment-related-grid">
            {relatedProducts.map((item) => (
              <Link className="equipment-related-card ore-related-card" href={`/ore-solutions/${item.slug}`} key={item.slug}>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <p>{item.summary}</p>
                <small>
                  View ore route <ArrowRight size={14} aria-hidden />
                </small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ManufacturingEvidence />
      <CertificateEvidence />

      <section className="section cta-panel-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Project Consultation</p>
            <h2>Need a complete {product.shortTitle} line?</h2>
            <p>
              Share material properties, test reports, capacity, and target concentrate requirements.
              VICMACH can recommend the process route, equipment combination, and support scope.
            </p>
          </div>
          <div className="cta-button-row">
            <Link className="button button-primary" href="/contact#inquiry-title">
              Send Ore Data <CheckCircle2 size={18} aria-hidden />
            </Link>
            <a className="button button-ghost-dark" href={whatsappHref} target="_blank" rel="noreferrer">
              Contact Engineer <MessageSquare size={18} aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
