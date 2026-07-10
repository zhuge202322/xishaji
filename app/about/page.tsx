import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Factory,
  HeartHandshake,
  History,
  Lightbulb,
  ShieldCheck
} from "lucide-react";
import { AboutHero } from "@/components/AboutHero";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "About VICMACH | Company Profile, History & Credentials",
  description:
    "Explore VICMACH company profile, development history, honors, patents, culture, factory evidence, and downloadable qualification files."
};

const sections = [
  {
    eyebrow: "Who We Are",
    title: "Company Profile",
    text: "Manufacturing scope, engineering capability, global offices, and the team behind complete mining process delivery.",
    href: "/about/profile",
    image: "/images/factory-gate.webp",
    icon: Building2
  },
  {
    eyebrow: "2010 to Today",
    title: "Our History",
    text: "Follow the technical foundation, independent VICMACH launch, qualification growth, and full-line EPC development.",
    href: "/about/history",
    image: "/images/workshop-line.webp",
    icon: History
  },
  {
    eyebrow: "Procurement Proof",
    title: "Honors & Certificates",
    text: "Open company qualifications, product certificates, and line-level CE files directly in the website.",
    href: "/about/honors",
    image: "/images/certificates/system-high-tech-certificate.webp",
    icon: Award
  },
  {
    eyebrow: "Technical Development",
    title: "Patents & R&D",
    text: "Review the R&D focus behind 25+ national patents and the process equipment portfolio they support.",
    href: "/about/patents",
    image: "/images/product-inspection.webp",
    icon: Lightbulb
  },
  {
    eyebrow: "How We Work",
    title: "Company Culture",
    text: "Meet the production, engineering, export, and reception teams that keep international projects moving.",
    href: "/about/culture",
    image: "/images/service-team.webp",
    icon: HeartHandshake
  }
];

export default function AboutPage() {
  return (
    <main>
      <AboutHero
        current="/about"
        eyebrow="About VICMACH"
        title="Manufacturing strength, organized for clear verification"
        text={`${company.legalName} brings company background, development records, qualification files, patents, and real team evidence into a structured company center.`}
        image="/images/workshop-wide.webp"
        imageAlt="VICMACH manufacturing workshop with heavy mining equipment"
      />

      <section className="section about-overview-section">
        <div className="container about-overview-intro">
          <div>
            <p className="eyebrow">Company Center</p>
            <h2>Start with the evidence your team needs</h2>
          </div>
          <p>
            Each company subject has its own focused page, so procurement and engineering visitors can
            verify the relevant information without working through one long, repetitive company page.
          </p>
        </div>
        <div className="container about-directory-grid">
          {sections.map((item) => {
            const Icon = item.icon;
            return (
              <Link className="about-directory-card" href={item.href} key={item.href}>
                <Image src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
                <span className="about-directory-shade" />
                <span className="about-directory-content">
                  <Icon size={24} aria-hidden />
                  <small>{item.eyebrow}</small>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                  <b>Open section <ArrowRight size={15} aria-hidden /></b>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="about-strength-band">
        <Image src="/images/gallery/workshop-assembly-03.webp" alt="" fill sizes="100vw" />
        <div className="about-strength-shade" />
        <div className="container about-strength-layout">
          <div>
            <p className="eyebrow">Visible Manufacturing Base</p>
            <h2>Real equipment, real workshop, reviewable files</h2>
            <p>
              Company claims are supported by production-floor media, customer cooperation records,
              downloadable qualification files, and a direct path to factory visits and technical review.
            </p>
          </div>
          <div className="about-strength-stats">
            <span><strong>{company.patents}</strong> National patents</span>
            <span><strong>{company.projects}</strong> Project references</span>
            <span><strong>3</strong> Regional offices</span>
          </div>
          <Link className="button button-primary" href="/factory-visit">
            View Factory Evidence <Factory size={18} aria-hidden />
          </Link>
          <Link className="button button-ghost-dark" href="/about/honors">
            Review Certificates <ShieldCheck size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
