import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileText,
  Globe2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { HorizontalTimeline } from "@/components/HorizontalTimeline";
import {
  CertificateEvidence,
  GalleryEvidence,
  ManufacturingEvidence,
  TrustProofGrid,
  VideoEvidence
} from "@/components/TrustEvidence";
import { categories, company, equipmentGroups, oreSolutionGroups, projects, stats, timeline } from "@/data/site";

export default function HomePage() {
  const whatsappHref = `https://wa.me/${company.phone.replace(/\D/g, "")}`;

  return (
    <main>
      <section className="home-hero">
        <Image
          src="/images/hero-factory.webp"
          alt="VICMACH heavy machinery manufacturing workshop"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-overlay" />
        <div className="container home-hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Industrial precision for global mining projects</p>
            <h1 aria-label="Advanced Crushing & Mineral Processing Solutions">
              <span>Advanced Crushing &</span>
              <span>Mineral Processing</span>
              <span>Solutions</span>
            </h1>
            <p>
              VICMACH manufactures heavy-duty equipment and complete EPC production lines
              for sand making, crushing, beneficiation, grinding, building materials, and washing systems.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Start Your Project <ArrowRight size={18} aria-hidden />
              </Link>
              <Link className="button button-ghost-dark" href="#solutions">
                Explore Solutions
              </Link>
            </div>
          </div>
          <aside className="hero-command-panel" aria-label="VICMACH manufacturing proof">
            <div>
              <span>01</span>
              <strong>Manufacturer Direct</strong>
              <p>R&D, production, sales, installation, and commissioning aligned under one team.</p>
            </div>
            <div>
              <span>02</span>
              <strong>EPC Line Delivery</strong>
              <p>Crushing, sand washing, mineral processing, grinding, and environmental recovery.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Procurement Proof</strong>
              <p>Factory media, certificates, patents, and project records prepared for review.</p>
            </div>
          </aside>
        </div>
        <div className="hero-signal-row" aria-hidden>
          <span>Heavy Equipment Manufacturing</span>
          <span>Turnkey EPC Systems</span>
          <span>Certified Export Support</span>
        </div>
        <div className="hero-data-strip">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section industrial-authority">
        <div className="container authority-shell">
          <div className="authority-media">
            <Image
              src="/images/workshop-wide.webp"
              alt="Wide VICMACH workshop with heavy mining machinery under production"
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
            />
            <div className="authority-media-caption">
              <span>Manufacturing Base</span>
              <strong>Zhengzhou, Henan</strong>
            </div>
          </div>
          <div className="authority-content">
            <p className="eyebrow">Manufacturing Scale</p>
            <h2>Built for buyers who need visible capacity, not brochure promises.</h2>
            <p>
              The website now brings factory floors, cooperation records, videos, and downloadable
              qualifications forward so overseas procurement teams can judge supplier strength before inquiry.
            </p>
            <div className="authority-proof-grid">
              <div>
                <Factory size={24} aria-hidden />
                <strong>Factory Floor</strong>
                <span>Real workshop and assembly images</span>
              </div>
              <div>
                <BadgeCheck size={24} aria-hidden />
                <strong>Certified Files</strong>
                <span>High-tech, CE, and line-level PDFs</span>
              </div>
              <div>
                <Globe2 size={24} aria-hidden />
                <strong>Regional Reach</strong>
                <span>China, Indonesia, and Vietnam support</span>
              </div>
              <div>
                <ClipboardCheck size={24} aria-hidden />
                <strong>Project Review</strong>
                <span>Material, capacity, site, and process matching</span>
              </div>
            </div>
            <Link className="button button-primary" href="/factory-visit">
              Review Factory Evidence <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="section trust-proof-section authority-dark-section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Buyers Trust VICMACH"
            title="Evidence before quotation"
            text="International procurement teams need visible proof: certified documents, real factory photos, process accountability, and cooperation records. These signals are built into the website instead of hidden in a brochure."
          />
          <TrustProofGrid />
        </div>
      </section>

      <section className="section blueprint" id="solutions">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="Engineering Categories"
              title="Built Around the Full Mining Process Chain"
              text="From single machines to complete plants, VICMACH aligns equipment selection with material, capacity, finished size, and site conditions."
            />
            <span className="outline-word">PRECISION</span>
          </div>
          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link className="category-card" href={category.href} key={category.title}>
                  <Image src={category.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="category-card-content">
                    <Icon size={26} aria-hidden />
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                  </div>
                  <span>
                    Learn More <ArrowRight size={16} aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section equipment-directory-section">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="Equipment Center"
              title="Specific machines for every stage of the plant"
              text="The equipment center is organized around the process chain from crushing and grinding to separation, dewatering, conveying, and wet washing."
            />
            <Link className="text-link" href="/equipment">
              View Equipment Center <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="equipment-directory-grid">
            {equipmentGroups.map((group) => (
              <article className="equipment-directory-card" key={group.title}>
                <div>
                  <p className="eyebrow">{String(group.items.length).padStart(2, "0")} models</p>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </div>
                <ul>
                  {group.items.slice(0, 7).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={group.href}>
                  Explore Category <ArrowRight size={16} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
          <div className="conversion-mini-band">
            <strong>Need a machine list matched to your material?</strong>
            <div className="conversion-actions">
              <Link href="/contact">
                <FileText size={16} aria-hidden /> Request a Quote
              </Link>
              <Link href="/contact#inquiry-title">
                <Send size={16} aria-hidden /> Send Material & Capacity
              </Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageSquare size={16} aria-hidden /> WhatsApp Engineer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section ore-pathway-section">
        <div className="container ore-pathway-layout">
          <div className="ore-pathway-copy">
            <p className="eyebrow">Ore Solutions</p>
            <h2>Process routes organized by mineral type</h2>
            <p>
              VICMACH connects ore properties with crushing, grinding, gravity, flotation,
              magnetic separation, thickening, dewatering, and water recovery systems.
            </p>
            <div className="ore-proof-list">
              <span>Sample review</span>
              <span>Flow-sheet design</span>
              <span>Model selection</span>
              <span>Commissioning support</span>
            </div>
            <Link className="button button-primary" href="/ore-solutions">
              Explore Ore Solutions <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <div className="ore-pathway-grid">
            {oreSolutionGroups.map((group) => (
              <Link className="ore-pathway-card" key={group.title} href={group.href}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <div>
                  {group.ores.map((ore) => (
                    <span key={ore}>{ore}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="epc">
        <div className="container epc-layout">
          <div className="epc-media">
            <Image src="/images/factory-aerial.webp" alt="VICMACH manufacturing base aerial view" fill sizes="50vw" />
          </div>
          <div className="epc-card">
            <p className="eyebrow">Turnkey Projects</p>
            <h2>Sand, washing, and mineral lines delivered as EPC packages</h2>
            <p>
              VICMACH supports process design, equipment manufacturing, installation, commissioning,
              and operator training. The same team can deliver high-quality single machines or complete
              production lines.
            </p>
            <ul className="check-list">
              <li>
                <CheckCircle2 size={18} aria-hidden /> Site-specific plant layout and process flow
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden /> Integrated machinery, conveyors, screens, and water treatment
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden /> Commissioning support with long-term parts planning
              </li>
            </ul>
            <Link className="button button-secondary" href="/projects">
              View Project Cases
            </Link>
          </div>
        </div>
      </section>

      <section className="metric-band dark">
        <div className="container metric-grid">
          <div>
            <Factory size={26} aria-hidden />
            <strong>R&D + Production</strong>
            <span>Integrated manufacturing and sales system</span>
          </div>
          <div>
            <BadgeCheck size={26} aria-hidden />
            <strong>High-Tech Enterprise</strong>
            <span>Nationally recognized technical capability</span>
          </div>
          <div>
            <ShieldCheck size={26} aria-hidden />
            <strong>25+ Patents</strong>
            <span>Process equipment and system innovation</span>
          </div>
          <div>
            <Globe2 size={26} aria-hidden />
            <strong>Global Support</strong>
            <span>China, Indonesia, and Vietnam presence</span>
          </div>
          <div>
            <Building2 size={26} aria-hidden />
            <strong>Factory Archive</strong>
            <span>Workshop, reception, video, and certificate evidence</span>
          </div>
        </div>
      </section>

      <ManufacturingEvidence />
      <GalleryEvidence />
      <VideoEvidence />
      <CertificateEvidence />

      <HorizontalTimeline items={timeline} />

      <section className="section section-muted">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="Global Projects"
              title="Project cases built around measurable output"
              text="VICMACH focuses on practical process routes: raw material in, stable finished product out, and supportable operations after commissioning."
            />
            <Link className="text-link" href="/projects">
              View all cases <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <Image src={project.image} alt={project.title} width={640} height={420} />
                <div>
                  <p className="eyebrow">{project.location}</p>
                  <h3>{project.title}</h3>
                  <p>{project.scope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="container contact-strip-grid">
          <div>
            <p className="eyebrow">Start Your Project</p>
            <h2>Send material, capacity, and site details for a tailored recommendation.</h2>
          </div>
          <div className="contact-methods">
            <a href={`tel:${company.phone.replaceAll(" ", "")}`}>
              <Phone size={20} aria-hidden /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`}>
              <Mail size={20} aria-hidden /> {company.email}
            </a>
            <span>
              <MapPin size={20} aria-hidden /> Zhengzhou, Henan, China
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
