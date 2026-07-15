import type { Metadata } from "next";
import { CmsImage as Image } from "@/components/cms/CmsImage";
import { Cpu, Gauge, Leaf, Settings2 } from "lucide-react";
import { AboutHero } from "@/components/AboutHero";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Patents & R&D | VICMACH",
  description: "Explore VICMACH patent scale, technical development priorities, and equipment R&D capability."
};

const themes = [
  { title: "Process Stability", text: "Equipment structures and process links developed for stable feed, grading, separation, and discharge.", icon: Settings2 },
  { title: "Efficiency Improvement", text: "Technical work focused on capacity, energy use, wear control, and maintainable operation.", icon: Gauge },
  { title: "Intelligent Operation", text: "Digital monitoring and operating logic support more visible, responsive equipment management.", icon: Cpu },
  { title: "Resource Recovery", text: "Washing, dewatering, fine-material recovery, and water reuse support cleaner production routes.", icon: Leaf }
];

export default function PatentsPage() {
  return (
    <main>
      <AboutHero
        current="/about/patents"
        eyebrow="Patents & R&D"
        title="Technical development connected to operating plant needs"
        text="VICMACH's patent portfolio supports process equipment, manufacturing systems, intelligent operation, and resource-recovery applications."
        image="/images/grinding-equipment.webp"
        imageAlt="VICMACH blue and yellow grinding equipment in the manufacturing workshop"
      />

      <section className="section patent-intro-section">
        <div className="container patent-intro-layout">
          <div className="patent-number">
            <strong>{company.patents}</strong>
            <span>National patents accumulated across equipment and process development</span>
          </div>
          <div>
            <p className="eyebrow">R&D Direction</p>
            <h2>Innovation measured by practical equipment outcomes</h2>
            <p>
              Patent work is tied to the machinery portfolio and full process chain. Technical development
              targets the points that matter on site: stable throughput, product control, recovery,
              maintainability, energy use, water management, and operating visibility.
            </p>
          </div>
        </div>
        <div className="container patent-theme-grid">
          {themes.map((item) => {
            const Icon = item.icon;
            return <article key={item.title}><Icon size={25} aria-hidden /><h3>{item.title}</h3><p>{item.text}</p></article>;
          })}
        </div>
      </section>

      <section className="section section-muted patent-workshop-section">
        <div className="container patent-workshop-layout">
          <div>
            <p className="eyebrow">From Design To Verification</p>
            <h2>R&D remains connected to manufacturing and inspection</h2>
            <p>
              Equipment development is reviewed against fabrication, assembly, component fit, operating
              conditions, and line-level integration. This keeps technical work grounded in machinery that
              must be manufactured, delivered, commissioned, and maintained.
            </p>
          </div>
          <div className="patent-workshop-images">
            <Image src="/images/engineering-meeting.webp" alt="VICMACH engineering review meeting" width={620} height={420} />
            <Image src="/images/product-inspection.webp" alt="VICMACH product inspection process" width={620} height={420} />
          </div>
        </div>
      </section>
    </main>
  );
}
