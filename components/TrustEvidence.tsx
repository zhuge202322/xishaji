import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, ExternalLink, PlayCircle } from "lucide-react";
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
          text="These are grouped from the company materials so visitors can quickly verify production scale, international cooperation, and daily support capability."
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
                <video controls preload="metadata" poster={video.poster}>
                  <source src={video.src} type="video/mp4" />
                </video>
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
          text="Show qualification files directly on the website so procurement teams can verify company capability, product compliance, and line-level certification without waiting for email attachments."
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
