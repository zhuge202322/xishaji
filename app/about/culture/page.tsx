import type { Metadata } from "next";
import { CmsImage as Image } from "@/components/cms/CmsImage";
import { Handshake, ShieldCheck, Users2, Wrench } from "lucide-react";
import { AboutHero } from "@/components/AboutHero";

export const metadata: Metadata = {
  title: "Company Culture | VICMACH",
  description: "Meet the VICMACH team and the working principles behind engineering, manufacturing, and international project support."
};

const values = [
  { title: "Engineering Responsibility", text: "Recommendations begin with material and site conditions, not a fixed machine list.", icon: Wrench },
  { title: "Manufacturing Discipline", text: "Assembly, inspection, documentation, and delivery planning remain connected.", icon: ShieldCheck },
  { title: "Open Cooperation", text: "Factory visits, technical review, and qualification files make supplier evaluation more direct.", icon: Handshake },
  { title: "Long-Term Support", text: "Regional communication and the same project team support commissioning and later operation.", icon: Users2 }
];

export default function CulturePage() {
  return (
    <main>
      <AboutHero
        current="/about/culture"
        eyebrow="Company Culture"
        title="A working culture built around visible responsibility"
        text="Engineering, production, export, documentation, and client reception teams work as one project chain for international equipment buyers."
        image="/images/service-team.webp"
        imageAlt="VICMACH team standing with manufactured equipment"
      />

      <section className="section culture-values-section">
        <div className="container culture-values-heading">
          <div><p className="eyebrow">How We Work</p><h2>Principles visible in everyday project delivery</h2></div>
          <p>Company culture is expressed through technical decisions, factory discipline, buyer communication, and support after delivery.</p>
        </div>
        <div className="container culture-value-grid">
          {values.map((item) => {
            const Icon = item.icon;
            return <article key={item.title}><Icon size={25} aria-hidden /><h3>{item.title}</h3><p>{item.text}</p></article>;
          })}
        </div>
      </section>

      <section className="section section-muted culture-gallery-section">
        <div className="container culture-gallery-layout">
          <article className="culture-gallery-feature">
            <Image src="/images/gallery/workshop-assembly-01.webp" alt="VICMACH manufacturing and service team" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <span><small>Production Team</small><strong>People behind the equipment</strong></span>
          </article>
          <article>
            <Image src="/images/gallery/client-visit-01.webp" alt="VICMACH technical discussion with a client" fill sizes="(max-width: 900px) 100vw, 25vw" />
            <span><small>Technical Review</small><strong>Clear project communication</strong></span>
          </article>
          <article>
            <Image src="/images/gallery/factory-office-02.webp" alt="VICMACH office team preparing project documents" fill sizes="(max-width: 900px) 100vw, 25vw" />
            <span><small>Project Support</small><strong>Documentation and coordination</strong></span>
          </article>
        </div>
      </section>
    </main>
  );
}
