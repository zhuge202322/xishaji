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
  CompactCertificateEvidence,
  HomeEvidenceSummary,
  TrustProofGrid
} from "@/components/TrustEvidence";
import { categories, company, equipmentGroups, globalOffices, oreSolutionGroups, projects, stats, timeline } from "@/data/site";

const equipmentCategoryImages = [
  "/images/workshop-wide.webp",
  "/images/grinding-equipment.webp",
  "/images/product-inspection.webp",
  "/images/gallery/workshop-assembly-03.webp",
  "/images/workshop-line.webp",
  "/images/washing-equipment.webp"
];

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
            <h2>Built for buyers who need visible manufacturing capacity.</h2>
            <p>
              Real workshop floors, client cooperation records, qualification files, and engineering
              handoff materials let overseas procurement teams evaluate manufacturing capacity before inquiry.
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
            text="International procurement teams can review certified documents, real factory photos, process accountability, and cooperation records before moving into technical and commercial discussion."
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
              title="Six equipment families across the complete process chain"
              text="Start with the process stage, then open the category for individual product descriptions, images, and technical parameters."
            />
            <Link className="text-link" href="/equipment">
              View Equipment Center <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
          <div className="equipment-directory-grid">
            {equipmentGroups.map((group, index) => (
              <Link className="equipment-directory-card" href={group.href} key={group.title}>
                <div className="equipment-directory-media">
                  <Image
                    src={equipmentCategoryImages[index] ?? "/images/workshop-line.webp"}
                    alt={`${group.title} representative equipment`}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
                <div className="equipment-directory-body">
                  <p className="eyebrow">{String(group.items.length).padStart(2, "0")} models</p>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                  <span>
                    Explore Category <ArrowRight size={16} aria-hidden />
                  </span>
                </div>
              </Link>
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
            <strong>Verification Archive</strong>
            <span>Factory, cooperation, qualification, and project records</span>
          </div>
        </div>
      </section>

      <HomeEvidenceSummary />

      <section className="section home-project-showcase">
        <Image
          className="project-showcase-background"
          src="/images/factory-aerial.webp"
          alt=""
          fill
          sizes="100vw"
        />
        <div className="project-showcase-shade" />
        <div className="container project-showcase-layout">
          <div className="project-showcase-copy">
            <p className="eyebrow">Project References</p>
            <h2>Start with your material, output target, and site constraints</h2>
            <p>
              VICMACH develops practical routes around feed properties, required capacity, final product,
              utilities, and installation conditions, then connects equipment supply with commissioning support.
            </p>
            <ul>
              <li>Material and feed-size review</li>
              <li>Capacity and finished-product target</li>
              <li>Process flow and equipment matching</li>
              <li>Installation, training, and parts planning</li>
            </ul>
            <Link className="button button-primary" href="/projects">
              Review Project Cases <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <div className="project-showcase-grid">
            {projects.map((project) => (
              <Link className="project-showcase-card" href="/projects" key={project.title}>
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 760px) 100vw, 25vw" />
                <span>
                  <small>{project.location}</small>
                  <h3>{project.title}</h3>
                  <p>{project.scope}</p>
                </span>
              </Link>
            ))}
            <Link className="project-showcase-card project-showcase-cta" href="/contact#inquiry-title">
              <Image
                src="/images/engineering-meeting.webp"
                alt="VICMACH engineers reviewing project documents"
                fill
                sizes="(max-width: 760px) 100vw, 25vw"
              />
              <ClipboardCheck size={28} aria-hidden />
              <span>
                <small>Your Project</small>
                <h3>Send site data for an engineered route</h3>
                <b>Start technical review <ArrowRight size={15} aria-hidden /></b>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CompactCertificateEvidence />

      <HorizontalTimeline items={timeline} />

      <section className="section contact-strip global-contact-strip">
        <div className="container">
          <div className="global-contact-heading">
            <p className="eyebrow">Start Your Project</p>
            <h2>Send material, capacity, and site details for a tailored recommendation.</h2>
            <div className="global-contact-direct">
              <a href={`tel:${company.phone.replaceAll(" ", "")}`}>
                <Phone size={18} aria-hidden /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`}>
                <Mail size={18} aria-hidden /> {company.email}
              </a>
            </div>
          </div>
          <div className="global-contact-grid">
            {globalOffices.map((office) => (
              <article key={office.label}>
                <MapPin size={20} aria-hidden />
                <div>
                  <p className="eyebrow">{office.label}</p>
                  <h3>{office.name}</h3>
                  <p>{office.address}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
