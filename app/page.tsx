import { CmsImage as Image } from "@/components/cms/CmsImage";
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
import { HomeHero } from "@/components/HomeHero";
import {
  CompactCertificateEvidence,
  HomeEvidenceSummary,
  TrustProofGrid
} from "@/components/TrustEvidence";
import { categories, equipmentGroups, globalOffices, oreSolutionGroups, projects, timeline } from "@/data/site";
import { getPublicSiteSettings } from "@/lib/cms/public-content";

export const dynamic = "force-dynamic";

const equipmentCategoryImages = [
  "/images/workshop-wide.webp",
  "/images/grinding-equipment.webp",
  "/images/product-inspection.webp",
  "/images/gallery/workshop-assembly-03.webp",
  "/images/workshop-line.webp",
  "/images/washing-equipment.webp"
];

export default async function HomePage() {
  const settings = await getPublicSiteSettings();
  const whatsappHref = `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`;

  return (
    <main>
      <HomeHero />

      <section className="section industrial-authority">
        <div className="container">
          <div className="authority-heading">
            <div className="section-heading">
              <p className="eyebrow">Manufacturing Scale</p>
              <h2>Manufacturing capacity buyers can see and verify.</h2>
            </div>
            <div className="authority-intro-copy">
              <span>Direct manufacturer / Zhengzhou, China</span>
              <p>
                Real workshop floors, client cooperation records, qualification files, and engineering
                handoff materials let overseas procurement teams evaluate manufacturing capacity before inquiry.
              </p>
            </div>
          </div>

          <div className="authority-stage">
            <div className="authority-media">
              <Image
                src="/images/manufacturing-scale.png"
                alt="VICMACH technicians inspecting a large ball mill on the manufacturing floor"
                fill
                sizes="(max-width: 900px) 100vw, 64vw"
              />
              <div className="authority-media-caption">
                <span>Manufacturing Base</span>
                <strong>Zhengzhou, Henan</strong>
                <small>Heavy equipment assembly and production floor</small>
              </div>
            </div>

            <div className="authority-evidence">
              <div className="authority-evidence-heading">
                <span>Factory Qualification</span>
                <h3>Four proof points available for buyer review</h3>
              </div>
              <div className="authority-proof-list">
                <div className="authority-proof-item">
                  <span className="authority-proof-number">01</span>
                  <Factory size={24} aria-hidden />
                  <div>
                    <strong>Factory Floor</strong>
                    <span>Real workshop and assembly images</span>
                  </div>
                </div>
                <div className="authority-proof-item">
                  <span className="authority-proof-number">02</span>
                  <BadgeCheck size={24} aria-hidden />
                  <div>
                    <strong>Certified Files</strong>
                    <span>High-tech, CE, and line-level PDFs</span>
                  </div>
                </div>
                <div className="authority-proof-item">
                  <span className="authority-proof-number">03</span>
                  <Globe2 size={24} aria-hidden />
                  <div>
                    <strong>Regional Reach</strong>
                    <span>China, Indonesia, and Vietnam support</span>
                  </div>
                </div>
                <div className="authority-proof-item">
                  <span className="authority-proof-number">04</span>
                  <ClipboardCheck size={24} aria-hidden />
                  <div>
                    <strong>Project Review</strong>
                    <span>Material, capacity, site, and process matching</span>
                  </div>
                </div>
              </div>
              <Link className="button button-accent" href="/factory-visit">
                Review Factory Evidence <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
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
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link className="category-card" href={category.href} key={category.title}>
                  <Image
                    src={category.image}
                    alt={`${category.title} equipment and production capability`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 42vw"
                  />
                  <div className="category-card-top">
                    <span className="category-card-index">{String(index + 1).padStart(2, "0")}</span>
                    <Icon size={26} aria-hidden />
                  </div>
                  <div className="category-card-content">
                    <h3>{category.title}</h3>
                    <p>{category.text}</p>
                  </div>
                  <span className="category-card-link">
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

      <section className="epc-experience" id="epc">
        <Image
          className="epc-background"
          src="/images/hero-scenes/epc-delivery.webp?v=5c64568c"
          alt="VICMACH complete aggregate production line delivered as an EPC project"
          fill
          quality={90}
          sizes="100vw"
        />
        <div className="epc-shade" />
        <div className="container epc-stage">
          <div className="section-heading epc-copy">
            <p className="eyebrow">Turnkey Projects</p>
            <h2>Sand, washing, and mineral lines delivered as EPC packages</h2>
            <p>
              VICMACH supports process design, equipment manufacturing, installation, commissioning,
              and operator training. The same team can deliver high-quality single machines or complete
              production lines.
            </p>
            <Link className="button button-accent" href="/projects">
              View Project Cases <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <div className="epc-process">
            <div className="epc-process-item">
              <span className="epc-process-number">01</span>
              <CheckCircle2 size={22} aria-hidden />
              <div>
                <h3>Process Engineering</h3>
                <p>Site-specific plant layout and process flow</p>
              </div>
            </div>
            <div className="epc-process-item">
              <span className="epc-process-number">02</span>
              <CheckCircle2 size={22} aria-hidden />
              <div>
                <h3>System Integration</h3>
                <p>Machinery, conveyors, screens, and water treatment</p>
              </div>
            </div>
            <div className="epc-process-item">
              <span className="epc-process-number">03</span>
              <CheckCircle2 size={22} aria-hidden />
              <div>
                <h3>Commissioning Support</h3>
                <p>On-site delivery, training, and long-term parts planning</p>
              </div>
            </div>
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
              <a href={`tel:${settings.phone.replaceAll(" ", "")}`}>
                <Phone size={18} aria-hidden /> {settings.phone}
              </a>
              <a href={`mailto:${settings.email}`}>
                <Mail size={18} aria-hidden /> {settings.email}
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
