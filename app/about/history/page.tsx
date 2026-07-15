import type { Metadata } from "next";
import { CmsImage as Image } from "@/components/cms/CmsImage";
import { AboutHero } from "@/components/AboutHero";
import { HorizontalTimeline } from "@/components/HorizontalTimeline";
import { timeline } from "@/data/site";

export const metadata: Metadata = {
  title: "Company History | VICMACH",
  description: "VICMACH development history from its mining machinery foundation to international EPC line delivery."
};

export default function CompanyHistoryPage() {
  return (
    <main>
      <AboutHero
        current="/about/history"
        eyebrow="Our History"
        title="Technical continuity from machinery experience to full-line delivery"
        text="The development path connects a mining machinery foundation established in 2010 with VICMACH's independent launch, qualification growth, and international EPC capability."
        image="/images/workshop-line.webp"
        imageAlt="Heavy mining machinery arranged inside the VICMACH workshop"
      />

      <HorizontalTimeline items={timeline} />

      <section className="section history-proof-section">
        <div className="container history-proof-layout">
          <div className="history-proof-media">
            <Image src="/images/factory-aerial.webp" alt="VICMACH manufacturing base aerial view" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div>
            <p className="eyebrow">What The Timeline Shows</p>
            <h2>Growth measured by capability, not just years</h2>
            <p>
              The company history is reflected in broader process coverage, stronger qualification records,
              more national patents, wider international support, and the ability to connect individual
              machines into operating production lines.
            </p>
            <div className="history-proof-points">
              <span>Crushing to mineral processing coverage</span>
              <span>National high-tech enterprise recognition</span>
              <span>International branch and export development</span>
              <span>Complete EPC line output</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
