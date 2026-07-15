import type { Metadata } from "next";
import { CmsImage as Image } from "@/components/cms/CmsImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  MessageSquare
} from "lucide-react";
import { getPublicArticle, getPublicArticles, getPublicSiteSettings } from "@/lib/cms/public-content";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublicArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | VICMACH News`,
    description: article.summary,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      publishedTime: article.publishedAt,
      images: [{ url: article.heroImage, alt: article.heroAlt }]
    }
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getPublicArticle(slug);

  if (!article) {
    notFound();
  }

  const [newsArticles, settings] = await Promise.all([getPublicArticles(), getPublicSiteSettings()]);
  const relatedArticles = newsArticles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const whatsappHref = `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: article.heroImage,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: settings.siteName
    },
    publisher: {
      "@type": "Organization",
      name: settings.legalName
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="news-article-hero">
        <Image src={article.heroImage} alt={article.heroAlt} fill sizes="100vw" priority />
        <div className="news-article-hero-shade" />
        <div className="container news-article-hero-content">
          <nav className="news-breadcrumb" aria-label="Breadcrumb">
            <Link href="/news"><ArrowLeft size={16} aria-hidden /> News Center</Link>
            <span>/</span>
            <span>{article.category}</span>
          </nav>
          <div className="news-article-meta">
            <span>{article.category}</span>
            <time dateTime={article.publishedAt}>
              <CalendarDays size={16} aria-hidden /> {article.publishedLabel}
            </time>
            <span><Clock3 size={16} aria-hidden /> {article.readTime}</span>
          </div>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
        </div>
      </section>

      <section className="section news-article-body">
        <div className="container news-article-layout">
          <article className="news-article-content">
            <p className="news-article-lead">{article.lead}</p>
            {article.sections.map((section) => (
              <section className="news-article-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}><CheckCircle2 size={19} aria-hidden /> {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <aside className="news-article-sidebar" aria-label="Article summary and project links">
            <div className="news-sidebar-panel">
              <p className="eyebrow">Key Takeaways</p>
              <h2>Project review points</h2>
              <ul>
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway}><CheckCircle2 size={18} aria-hidden /> {takeaway}</li>
                ))}
              </ul>
            </div>
            <div className="news-sidebar-panel news-sidebar-links">
              <p className="eyebrow">Continue Research</p>
              {article.relatedLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label} <ArrowRight size={16} aria-hidden />
                </Link>
              ))}
            </div>
            <div className="news-sidebar-cta">
              <FileText size={26} aria-hidden />
              <h2>Need a project-specific answer?</h2>
              <p>Send material, capacity, output, and site conditions for an engineering review.</p>
              <Link className="button button-accent" href="/contact#inquiry-title">
                Send Project Data <ArrowRight size={17} aria-hidden />
              </Link>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageSquare size={17} aria-hidden /> WhatsApp an Engineer
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-muted news-related-section">
        <div className="container">
          <div className="news-related-heading">
            <div>
              <p className="eyebrow">Continue Reading</p>
              <h2>More technical articles</h2>
            </div>
            <Link href="/news">View All Articles <ArrowRight size={17} aria-hidden /></Link>
          </div>
          <div className="news-related-grid">
            {relatedArticles.map((related) => (
              <Link className="news-related-card" href={`/news/${related.slug}`} key={related.slug}>
                <span>{related.category}</span>
                <h3>{related.title}</h3>
                <time dateTime={related.publishedAt}>{related.publishedLabel}</time>
                <strong>Read Article <ArrowRight size={16} aria-hidden /></strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
