import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Global Projects | VICMACH",
  description:
    "Selected VICMACH project cases for aggregate, sand-making, mineral processing, and grinding production lines."
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="simple-hero blueprint">
        <div className="container">
          <p className="eyebrow">Case Studies</p>
          <h1>Engineered for Performance</h1>
          <p>
            Selected project scenarios showing VICMACH full-line process capability across
            crushing, sand making, washing, and mineral beneficiation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Process routes with clear production targets"
            text="Each project begins with material analysis, capacity targets, finished product requirements, and site layout constraints."
          />
          <div className="case-list">
            {projects.map((project, index) => (
              <article className="case-card" key={project.title}>
                <Image src={project.image} alt={project.title} width={720} height={460} />
                <div>
                  <span className="case-index">0{index + 1}</span>
                  <h2>{project.title}</h2>
                  <p>{project.scope}</p>
                  <dl>
                    <div>
                      <dt>
                        <MapPin size={16} aria-hidden /> Location
                      </dt>
                      <dd>{project.location}</dd>
                    </div>
                    <div>
                      <dt>
                        <Globe2 size={16} aria-hidden /> Material
                      </dt>
                      <dd>{project.material}</dd>
                    </div>
                  </dl>
                  <Link className="text-link" href="/contact">
                    Request similar solution <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container cta-panel">
          <div>
            <p className="eyebrow">Project Intake</p>
            <h2>Turn site data into an equipment configuration.</h2>
            <p>
              VICMACH can review raw material, capacity, finished product size, water conditions,
              and installation constraints before suggesting a process route.
            </p>
          </div>
          <Link className="button button-primary" href="/contact">
            Send Project Details <CheckCircle2 size={18} aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
