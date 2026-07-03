import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Ruler } from "lucide-react";
import type { Product } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

type ProductPageProps = {
  product: Product;
};

export function ProductPage({ product }: ProductPageProps) {
  const ProductIcon = product.icon;

  return (
    <main>
      <section className="page-hero product-hero">
        <Image src={product.heroImage} alt={product.heroAlt} fill sizes="100vw" priority />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">{product.eyebrow}</p>
          <h1>{product.title}</h1>
          <p>{product.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request Proposal <ArrowRight size={18} aria-hidden />
            </Link>
            <a className="button button-ghost-dark" href="#specs">
              Technical Specs
            </a>
          </div>
        </div>
      </section>

      <section className="metric-band">
        <div className="container metric-grid">
          {product.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section blueprint">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Process Architecture"
            title="Integrated Process Excellence"
            text="Each production line is configured around raw material behavior, target capacity, finished grading, and site constraints."
          />
          <div className="process-grid">
            {product.process.map((step) => (
              <article key={step.step} className="process-card">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <p className="eyebrow">Core Equipment</p>
            <h2 className="section-title-with-icon">
              <ProductIcon size={32} aria-hidden />
              Equipment Portfolio
            </h2>
            <p className="large-copy">
              VICMACH combines single machines and full-line engineering so buyers can move from
              technical selection to site commissioning with one accountable partner.
            </p>
            <div className="tag-cloud">
              {product.equipment.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="highlight-stack">
            {product.highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article className="highlight-card" key={item.title}>
                  <Icon size={24} aria-hidden />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="specs">
        <div className="container specs-layout">
          <SectionHeading
            eyebrow="Engineering Specs"
            title="Configured for Site-Specific Output"
            text="Use these notes as an initial guide. Final selection should follow material testing, capacity planning, and layout review."
          />
          <div className="spec-table">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <span>
                  <Ruler size={16} aria-hidden /> {spec.label}
                </span>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-panel-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Project Consultation</p>
            <h2>Ready to optimize your production line?</h2>
            <p>
              Share your raw material, target capacity, final product size, and site location.
              VICMACH engineers will prepare a practical process route.
            </p>
          </div>
          <Link className="button button-primary" href="/contact">
            Contact Sales <CheckCircle2 size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
