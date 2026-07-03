import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, Plane, Users2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryEvidence, VideoEvidence } from "@/components/TrustEvidence";
import { factoryTour } from "@/data/site";

export const metadata: Metadata = {
  title: "Factory Visit | VICMACH",
  description:
    "Schedule a VICMACH factory visit in Zhengzhou to review manufacturing, engineering, and project reception workflows."
};

export default function FactoryVisitPage() {
  return (
    <main>
      <section className="page-hero">
        <Image src="/images/service-team.webp" alt="VICMACH reception team in the factory" fill sizes="100vw" priority />
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Client Reception</p>
          <h1>Visit Our Manufacturing Facility in Zhengzhou</h1>
          <p>
            Experience the VICMACH production workflow, engineering review process, and technical
            consultation support before selecting equipment for your project.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Schedule Visit <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Guided Tour Experience"
            title="From workshop to project solution"
            text="The visit is designed for technical teams, purchasing managers, and project owners who need to verify manufacturing capability and discuss site conditions."
          />
          <div className="tour-grid">
            {factoryTour.map((item) => (
              <article key={item.title}>
                <Image src={item.image} alt={item.title} width={620} height={400} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoEvidence compact />
      <GalleryEvidence />

      <section className="section section-muted">
        <div className="container visit-support-grid">
          <div>
            <Plane size={28} aria-hidden />
            <h2>Travel Coordination</h2>
            <p>Airport pickup and itinerary support can be coordinated after the visit date is confirmed.</p>
          </div>
          <div>
            <Users2 size={28} aria-hidden />
            <h2>Technical Discussion</h2>
            <p>Discuss material samples, flow charts, capacity targets, and layout constraints with engineers.</p>
          </div>
          <div>
            <CalendarCheck size={28} aria-hidden />
            <h2>Visit Planning</h2>
            <p>Share preferred dates, attendee count, and project background before arrival.</p>
          </div>
        </div>
      </section>

      <section className="section cta-panel-section">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Factory Reception</p>
            <h2>Prepare your visit with project data in advance.</h2>
            <p>Capacity target, material type, final product size, and photos of the site help make the meeting more productive.</p>
          </div>
          <Link className="button button-primary" href="/contact">
            Contact Reception <CheckCircle2 size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
