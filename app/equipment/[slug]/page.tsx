import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, FileText, Gauge, MessageSquare, Ruler, Send, Settings2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CertificateEvidence, ManufacturingEvidence } from "@/components/TrustEvidence";
import { company } from "@/data/site";
import { getEquipmentDocxDetail } from "@/data/equipment-docx-details";
import { equipmentProducts, getEquipmentProductBySlug, getEquipmentProductByTitle, type EquipmentProduct } from "@/data/equipment-products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return equipmentProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getEquipmentProductBySlug(slug);

  if (!product) {
    return {};
  }

  const docxDetail = getEquipmentDocxDetail(slug);

  return {
    title: `${product.title} | Equipment Center | VICMACH`,
    description: product.summary,
    openGraph: {
      title: `${product.title} | VICMACH Equipment`,
      description: product.summary,
      images: [docxDetail?.productImage?.src ?? product.heroImage]
    }
  };
}

function isEquipmentProduct(product: EquipmentProduct | undefined): product is EquipmentProduct {
  return Boolean(product);
}

export default async function EquipmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getEquipmentProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappHref = `https://wa.me/${company.phone.replace(/\D/g, "")}`;
  const relatedProducts = product.relatedTitles.map(getEquipmentProductByTitle).filter(isEquipmentProduct);
  const docxDetail = getEquipmentDocxDetail(product.slug);

  return (
    <main>
      <section className="page-hero product-hero equipment-detail-hero">
        <Image src={product.heroImage} alt={product.heroAlt} fill sizes="100vw" priority />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <Link className="breadcrumb-link" href={product.categoryHref}>
            <ArrowLeft size={16} aria-hidden /> Back to {product.category}
          </Link>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p>{product.summary}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a Quote <ArrowRight size={18} aria-hidden />
            </Link>
            <Link className="button button-ghost-dark" href="/contact#inquiry-title">
              Send Material & Capacity
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
            <strong>Need model parameters for {product.title}?</strong>
            <span>Share feed size, capacity, target product size, material condition, and site layout for accurate selection.</span>
          </div>
          <div className="conversion-actions">
            <Link href="/contact">
              <FileText size={16} aria-hidden /> Request a Quote
            </Link>
            <Link href="/contact#inquiry-title">
              <Send size={16} aria-hidden /> Send Project Data
            </Link>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageSquare size={16} aria-hidden /> Contact Engineer
            </a>
          </div>
        </div>
      </section>

      <section className="metric-band">
        <div className="container metric-grid equipment-detail-metrics">
          <div>
            <Gauge size={28} aria-hidden />
            <strong>Process</strong>
            <span>{product.category}</span>
          </div>
          <div>
            <Settings2 size={28} aria-hidden />
            <strong>Selection</strong>
            <span>Matched by material and capacity</span>
          </div>
          <div>
            <ShieldCheck size={28} aria-hidden />
            <strong>Support</strong>
            <span>Layout, model list, installation guidance</span>
          </div>
        </div>
      </section>

      {docxDetail ? (
        <section className="section equipment-docx-section">
          <div className="container equipment-docx-layout">
            <div className="equipment-docx-media">
              {docxDetail.productImage ? (
                <Image
                  src={docxDetail.productImage.src}
                  alt={docxDetail.productImage.alt}
                  width={docxDetail.productImage.width}
                  height={docxDetail.productImage.height}
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
              ) : (
                <Image src={product.heroImage} alt={product.heroAlt} width={980} height={720} sizes="(max-width: 900px) 100vw, 44vw" />
              )}
              <span>{docxDetail.originalTitle}</span>
            </div>
            <div className="equipment-docx-copy">
              <p className="eyebrow">DOCX Product Detail</p>
              <h2 className="section-title-with-icon">
                <FileText size={32} aria-hidden />
                Product Description
              </h2>
              <p className="equipment-docx-source">Source file: {docxDetail.sourceDocument}</p>
              <p className="large-copy equipment-docx-intro">{docxDetail.intro || product.summary}</p>
              {docxDetail.advantages.length > 0 ? (
                <div className="equipment-docx-advantages">
                  <h3>Document Advantages</h3>
                  <ul>
                    {docxDetail.advantages.map((advantage) => (
                      <li key={advantage}>
                        <CheckCircle2 size={16} aria-hidden />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {docxDetail?.parameterImage ? (
        <section className="section section-muted equipment-parameters-section">
          <div className="container">
            <SectionHeading
              eyebrow="Technical Parameters"
              title={`${product.title} parameter table`}
              text="The table image below is extracted from the original category DOCX technical document."
            />
            <a className="equipment-parameter-frame" href={docxDetail.parameterImage.src} target="_blank" rel="noreferrer">
              <Image
                src={docxDetail.parameterImage.src}
                alt={docxDetail.parameterImage.alt}
                width={docxDetail.parameterImage.width}
                height={docxDetail.parameterImage.height}
                sizes="(max-width: 1200px) 100vw, 1160px"
              />
            </a>
          </div>
        </section>
      ) : null}

      <section className="section blueprint">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Equipment Role"
            title="Where this machine fits in the plant"
            text={product.processRole}
          />
          <div className="process-grid">
            <article className="process-card">
              <span>01</span>
              <h3>Confirm Feed</h3>
              <p>Engineers review material hardness, mud content, moisture, and maximum feed size before selecting the machine model.</p>
            </article>
            <article className="process-card">
              <span>02</span>
              <h3>Match Output</h3>
              <p>Capacity, final size, product grading, and downstream equipment define the recommended chamber, screen, tank, or process size.</p>
            </article>
            <article className="process-card">
              <span>03</span>
              <h3>Plan Layout</h3>
              <p>The machine is positioned with conveyors, pumps, platforms, water lines, or classifiers so the full process runs smoothly.</p>
            </article>
            <article className="process-card">
              <span>04</span>
              <h3>Support Operation</h3>
              <p>VICMACH supports quotation, installation guidance, commissioning, spare parts planning, and operator handover.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Applications</p>
            <h2 className="section-title-with-icon">
              <ClipboardCheck size={32} aria-hidden />
              Practical Use Cases
            </h2>
            <p className="large-copy">
              This page gives buyers a focused starting point for {product.title}. Final parameters
              should be checked against raw material testing, site layout, and production targets.
            </p>
            <div className="tag-cloud">
              {product.applications.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="highlight-stack">
            {product.advantages.map((advantage) => (
              <article className="highlight-card" key={advantage}>
                <CheckCircle2 size={24} aria-hidden />
                <div>
                  <h3>Equipment Advantage</h3>
                  <p>{advantage}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="selection-data">
        <div className="container specs-layout">
          <SectionHeading
            eyebrow="Selection Data"
            title="Information needed before quotation"
            text="Machine parameters depend on site conditions. Sending these details helps the engineering team avoid generic recommendations."
          />
          <div className="spec-table">
            {product.selectionFactors.map((item) => (
              <div key={item}>
                <span>
                  <Ruler size={16} aria-hidden /> Selection Factor
                </span>
                <strong>{item}</strong>
              </div>
            ))}
            <div>
              <span>
                <Settings2 size={16} aria-hidden /> Technical Focus
              </span>
              <strong>{product.technicalFocus.join(", ")}</strong>
            </div>
          </div>
          <div className="spec-cta-card">
            <h3>Want a verified model list?</h3>
            <p>
              Send your material, feed size, capacity, final product size, and project country.
              VICMACH engineers can prepare a practical configuration.
            </p>
            <Link className="button button-secondary" href="/contact#inquiry-title">
              Submit Project Data
            </Link>
          </div>
        </div>
      </section>

      <section className="section equipment-related-section">
        <div className="container">
          <SectionHeading
            eyebrow="Related Equipment"
            title={`More from ${product.category}`}
            text="Compare neighboring equipment from the same process stage before sending your inquiry."
          />
          <div className="equipment-related-grid">
            {relatedProducts.map((item) => (
              <Link className="equipment-related-card" href={`/equipment/${item.slug}`} key={item.slug}>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <p>{item.summary}</p>
                <small>
                  View details <ArrowRight size={14} aria-hidden />
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
            <h2>Need {product.title} in a complete plant?</h2>
            <p>
              Share material properties, target capacity, and required final product. The same team can
              recommend the single machine, supporting equipment, and complete process route.
            </p>
          </div>
          <div className="cta-button-row">
            <Link className="button button-primary" href="/contact">
              Request a Quote <CheckCircle2 size={18} aria-hidden />
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
