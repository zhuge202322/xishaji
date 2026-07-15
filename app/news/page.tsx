import type { Metadata } from "next";
import { CmsImage as Image } from "@/components/cms/CmsImage";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, FileText, MessageSquare, Send } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { getPublicArticles, getPublicSiteSettings } from "@/lib/cms/public-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "News Center | VICMACH",
  description:
    "VICMACH news center with procurement guides, process notes, equipment selection tips, and factory verification resources."
};

export default async function NewsPage() {
  const [newsArticles, settings] = await Promise.all([getPublicArticles(), getPublicSiteSettings()]);
  const whatsappHref = `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`;

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
            eyebrow="Technical Article Library"
            title="Practical guidance for mining project buyers"
            text="Read detailed procurement, process, factory verification, and production-line articles prepared around real project decisions."
          />
          <div className="news-list">
            {newsArticles.map((article, index) => (
              <article className="news-list-item" key={article.slug}>
                <Link className="news-list-link" href={`/news/${article.slug}`}>
                  <div className="news-list-media">
                    <Image
                      src={article.heroImage}
                      alt={article.heroAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 34vw"
                    />
                    <span className="news-list-index">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="news-list-content">
                    <div className="news-list-meta">
                      <span>{article.category}</span>
                      <time dateTime={article.publishedAt}>
                        <CalendarDays size={15} aria-hidden /> {article.publishedLabel}
                      </time>
                      <span><Clock3 size={15} aria-hidden /> {article.readTime}</span>
                    </div>
                    <h2>{article.title}</h2>
                    <p>{article.summary}</p>
                    <span className="news-list-action">
                      Read Article <ArrowRight size={17} aria-hidden />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
