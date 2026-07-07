import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, FileText, MessageSquare, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { company, newsItems } from "@/data/site";

export const metadata: Metadata = {
  title: "News Center | VICMACH",
  description:
    "VICMACH news center with procurement guides, process notes, equipment selection tips, and factory verification resources."
};

export default function NewsPage() {
  const whatsappHref = `https://wa.me/${company.phone.replace(/\D/g, "")}`;

  return (
    <main>
      <section className="simple-hero blueprint">
        <div className="container news-hero-layout">
          <div>
            <p className="eyebrow">News Center</p>
            <h1>Procurement guides and process notes</h1>
            <p>
              Practical content for buyers comparing crushing equipment, mineral processing lines,
              sand washing systems, supplier evidence, and plant service scope.
            </p>
          </div>
          <Image src="/images/exhibition.webp" alt="VICMACH exhibition and client communication scene" width={680} height={460} priority />
        </div>
      </section>

      <section className="conversion-strip">
        <div className="container conversion-strip-grid">
          <div>
            <strong>Looking for a direct answer?</strong>
            <span>Send your material and capacity details for a faster equipment recommendation.</span>
          </div>
          <div className="conversion-actions">
            <Link href="/contact">
              <FileText size={16} aria-hidden /> Request a Quote
            </Link>
            <Link href="/contact#inquiry-title">
              <Send size={16} aria-hidden /> Send Material & Capacity
            </Link>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageSquare size={16} aria-hidden /> Contact Engineer on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Latest Resources"
            title="Useful notes for technical buyers"
            text="These guides are structured around the questions buyers usually ask before requesting a detailed quotation."
          />
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <article className="news-card" key={item.title}>
                <span className="case-index">{String(index + 1).padStart(2, "0")}</span>
                <p className="eyebrow">
                  <CalendarDays size={14} aria-hidden /> {item.category}
                </p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link href={item.href}>
                  Continue <ArrowRight size={16} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container editorial-support">
          <div>
            <p className="eyebrow">Content Plan</p>
            <h2>Recommended future articles</h2>
            <p>
              The page is ready for deeper posts when product parameters, project stories,
              installation photos, or customer visit records are added later.
            </p>
          </div>
          <ul>
            <li>Crusher model comparison by material hardness and output size</li>
            <li>Gold ore process route: gravity, flotation, and cyanidation options</li>
            <li>How to inspect a machinery factory before signing a project order</li>
            <li>Water recycling and fine sand recovery in modern sand production</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
