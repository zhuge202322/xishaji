import { CmsImage as Image } from "@/components/cms/CmsImage";
import { CmsVideo } from "@/components/cms/CmsVideo";
import Link from "next/link";
import { ArrowRight, Download, ExternalLink, PlayCircle, ShieldCheck } from "lucide-react";
import {
  certificateFiles,
  gallerySections,
  manufacturingCapabilities,
  mediaVideos,
  trustProofs
} from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function TrustProofGrid() {
  return (
    <div className="trust-proof-grid">
      {trustProofs.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title}>
            <Icon size={26} aria-hidden />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export function ManufacturingEvidence() {
  return (
    <section className="section trust-manufacturing" id="trust-evidence">
      <div className="container">
        <SectionHeading
          eyebrow="Verified Manufacturing"
          title="Real factory evidence behind every proposal"
          text="A trustworthy machinery supplier should show more than renderings. VICMACH presents actual workshop, equipment, engineering, reception, and export cooperation material from the company archive."
        />
        <div className="capability-grid">
          {manufacturingCapabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article className="capability-card" key={item.title}>
                <div className="capability-media">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="eager"
                    sizes="(max-width: 900px) 100vw, 25vw"
                  />
                </div>
                <div className="capability-body">
                  <Icon size={24} aria-hidden />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function GalleryEvidence() {
  return (
    <section className="section section-muted gallery-evidence">
      <div className="container">
        <SectionHeading
          eyebrow="Company Image Archive"
          title="Workshop, clients, and service team in view"
          text="Real workshop, cooperation, and support-team records help buyers verify production scale, international experience, and daily service capability."
        />
        <div className="gallery-sections">
          {gallerySections.map((section) => (
            <article className="gallery-section" key={section.title}>
              <div className="gallery-section-copy">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
              <div className="evidence-gallery-grid">
                {section.items.map((item, index) => (
                  <Image
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    width={540}
                    height={380}
                    loading="eager"
                    sizes="(max-width: 700px) 50vw, 18vw"
                    className={index === 0 ? "is-featured" : undefined}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeEvidenceSummary() {
  return (
    <section className="section home-evidence-summary" id="trust-evidence">
      <div className="container">
        <div className="section-row">
          <SectionHeading
            eyebrow="Factory, Clients & Team"
            title="Three views that verify who stands behind the equipment"
            text="A concise selection of real production, cooperation, and engineering scenes gives buyers the proof they need without turning the homepage into a photo archive."
          />
          <Link className="text-link" href="/factory-visit">
            Open full factory archive <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="home-evidence-grid">
          {gallerySections.map((section, index) => {
            const image = section.items[0];

            return (
              <Link className="home-evidence-item" href="/factory-visit" key={section.title}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <span className="home-evidence-overlay">
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <strong>{section.title}</strong>
                  <p>{section.text}</p>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function VideoEvidence({ compact = false }: { compact?: boolean }) {
  const videos = compact ? mediaVideos.slice(0, 2) : mediaVideos;

  return (
    <section className="section video-evidence">
      <div className="container">
        <div className="section-row">
          <SectionHeading
            eyebrow="Factory Video Evidence"
            title="Site footage for buyers who need to see the machinery"
            text="Video content gives international buyers a faster way to inspect production environment, machine size, and reception workflow before requesting a quotation."
          />
          <Link className="text-link" href="/factory-visit">
            Plan a visit <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="video-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.src}>
              <div className="video-frame">
                <CmsVideo controls preload="metadata" poster={video.poster}>
                  <source src={video.src} type="video/mp4" />
                </CmsVideo>
                <span>
                  <PlayCircle size={18} aria-hidden /> {video.meta}
                </span>
              </div>
              <div>
                <h3>{video.title}</h3>
                <p>{video.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificateEvidence() {
  return (
    <section className="section certificate-evidence" id="certificates">
      <div className="container">
        <SectionHeading
          eyebrow="Certificates & Qualification Files"
          title="Downloadable proof for procurement review"
          text="Procurement teams can review company capability, product compliance, and line-level certification before technical and commercial confirmation."
        />
        <div className="certificate-grid">
          {certificateFiles.map((item) => (
            <article className="certificate-card" key={item.pdf}>
              <Link href={item.pdf} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} PDF`}>
                <Image
                  src={item.thumbnail}
                  alt={`${item.title} preview`}
                  width={520}
                  height={720}
                  loading="eager"
                />
              </Link>
              <div>
                <p className="eyebrow">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="certificate-actions">
                  <Link href={item.pdf} target="_blank" rel="noreferrer">
                    View PDF <ExternalLink size={16} aria-hidden />
                  </Link>
                  <a href={item.pdf} download>
                    Download <Download size={16} aria-hidden />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompactCertificateEvidence() {
  return (
    <section className="section compact-certificate-evidence" id="certificates">
      <div className="container compact-certificate-layout">
        <div className="compact-certificate-copy">
          <ShieldCheck size={32} aria-hidden />
          <p className="eyebrow">Patents & Procurement Files</p>
          <h2><span>25+</span> patents supporting equipment and process innovation</h2>
          <p>
            Patent records lead the company qualification portfolio, supported by high-tech enterprise
            recognition and CE files for product and mineral-processing line review.
          </p>
          <Link className="text-link" href="/about/honors#certificates">
            Review qualification archive <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="compact-certificate-files">
          {certificateFiles.map((item) => (
            <Link key={item.pdf} href={item.pdf} target="_blank" rel="noreferrer">
              <Image src={item.thumbnail} alt={`${item.title} preview`} width={108} height={144} />
              <span>
                <small>{item.category}</small>
                <strong>{item.title}</strong>
                <b>View PDF <ExternalLink size={13} aria-hidden /></b>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
