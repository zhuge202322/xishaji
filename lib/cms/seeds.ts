import { equipmentProducts } from "@/data/equipment-products";
import { mediaManifest } from "@/data/media-manifest";
import { newsArticles } from "@/data/news";
import { company, equipmentGroups, socialChannels } from "@/data/site";
import type { CmsCollection, CmsRecord } from "./types";

const seedTimestamp = "2026-07-15T00:00:00.000Z";
const categoryImages = [
  "/images/workshop-wide.webp",
  "/images/grinding-equipment.webp",
  "/images/product-inspection.webp",
  "/images/gallery/workshop-assembly-03.webp",
  "/images/workshop-line.webp",
  "/images/washing-equipment.webp"
];

function safeId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 100);
}

function seedRecord(
  collection: CmsCollection,
  id: string,
  data: Record<string, unknown>,
  options: { slug?: string | null; sortOrder?: number } = {}
): CmsRecord {
  return {
    id: `seed-${collection}-${safeId(id)}`,
    collection,
    slug: options.slug ?? null,
    status: "published",
    sortOrder: options.sortOrder ?? 0,
    data,
    createdAt: seedTimestamp,
    updatedAt: seedTimestamp
  };
}

function articleContent(article: (typeof newsArticles)[number]) {
  return [
    article.lead,
    ...article.sections.flatMap((section) => [
      `## ${section.heading}`,
      ...section.paragraphs,
      ...(section.bullets?.map((bullet) => `- ${bullet}`) ?? [])
    ])
  ].join("\n\n");
}

function articleLinks(article: (typeof newsArticles)[number]) {
  return article.relatedLinks.map((link) => `${link.label}|${link.href}`).join("\n");
}

function inferMediaLocation(sourcePath: string) {
  if (sourcePath.includes("/hero-scenes/")) return { pageKey: "home", sectionKey: "hero" };
  if (sourcePath.includes("/equipment-docx/")) return { pageKey: "equipment", sectionKey: "product-detail" };
  if (sourcePath.includes("/ore-docx/")) return { pageKey: "ore-solutions", sectionKey: "ore-detail" };
  if (sourcePath.includes("/certificates/")) return { pageKey: "about", sectionKey: "certificates" };
  if (sourcePath.includes("/gallery/client-visit")) return { pageKey: "about", sectionKey: "client-visits" };
  if (sourcePath.includes("/gallery/workshop")) return { pageKey: "about", sectionKey: "workshop" };
  if (sourcePath.includes("/gallery/factory")) return { pageKey: "about", sectionKey: "factory" };
  return { pageKey: "global", sectionKey: safeId(sourcePath.split("/").pop() ?? "image") };
}

export function createSeedRecords(): CmsRecord[] {
  const records: CmsRecord[] = [];

  records.push(
    seedRecord("site-settings", "primary", {
      siteName: company.brand,
      legalName: company.legalName,
      tagline: "Industrial Crushing and Mineral Processing Solutions",
      logoUrl: "/images/vicmach-mark.png",
      phone: company.phone,
      email: company.email,
      whatsapp: company.phone,
      headquarters: company.headquarters,
      status: "published"
    })
  );

  const contacts = [
    { id: "phone", label: "China Headquarters Phone", kind: "phone", value: company.phone, href: `tel:${company.phone.replaceAll(" ", "")}`, description: "Primary sales and engineering contact" },
    { id: "email", label: "Sales Email", kind: "email", value: company.email, href: `mailto:${company.email}`, description: "Project documents and quotation requests" },
    { id: "whatsapp", label: "WhatsApp Engineer", kind: "whatsapp", value: company.phone, href: `https://wa.me/${company.phone.replace(/\D/g, "")}`, description: "Fast international project communication" },
    { id: "headquarters", label: "China Headquarters", kind: "address", value: company.headquarters, href: "", description: company.legalName }
  ];

  contacts.forEach((contact, index) => {
    records.push(seedRecord("contacts", contact.id, { ...contact, sortOrder: index, status: "published" }, { sortOrder: index }));
  });

  socialChannels.forEach((channel, index) => {
    records.push(
      seedRecord(
        "social-links",
        channel.id,
        { platform: channel.id, label: channel.label, url: channel.href, sortOrder: index, status: "published" },
        { sortOrder: index }
      )
    );
  });

  equipmentGroups.forEach((group, index) => {
    const slug = group.href.split("#")[1] ?? safeId(group.title);
    const productSlugs = group.items
      .map((title) => equipmentProducts.find((product) => product.title === title)?.slug)
      .filter((value): value is string => Boolean(value));

    records.push(
      seedRecord(
        "product-categories",
        slug,
        {
          title: group.title,
          slug,
          description: group.text,
          image: categoryImages[index] ?? "/images/workshop-line.webp",
          productSlugs,
          sortOrder: index,
          status: "published"
        },
        { slug, sortOrder: index }
      )
    );
  });

  equipmentProducts.forEach((product, index) => {
    records.push(
      seedRecord(
        "products",
        product.slug,
        {
          title: product.title,
          slug: product.slug,
          category: product.category,
          categoryHref: product.categoryHref,
          summary: product.summary,
          heroImage: product.heroImage,
          heroAlt: product.heroAlt,
          processRole: product.processRole,
          advantages: product.advantages.join("\n"),
          applications: product.applications.join("\n"),
          selectionFactors: product.selectionFactors.join("\n"),
          technicalFocus: product.technicalFocus.join("\n"),
          relatedTitles: product.relatedTitles.join("\n"),
          sortOrder: index,
          status: "published"
        },
        { slug: product.slug, sortOrder: index }
      )
    );
  });

  newsArticles.forEach((article, index) => {
    records.push(
      seedRecord(
        "articles",
        article.slug,
        {
          title: article.title,
          slug: article.slug,
          category: article.category,
          summary: article.summary,
          publishedAt: article.publishedAt,
          readTime: article.readTime,
          heroImage: article.heroImage,
          heroAlt: article.heroAlt,
          content: articleContent(article),
          takeaways: article.takeaways.join("\n"),
          relatedLinks: articleLinks(article),
          sortOrder: index,
          status: "published"
        },
        { slug: article.slug, sortOrder: index }
      )
    );
  });

  mediaManifest.forEach((sourcePath, index) => {
    const location = inferMediaLocation(sourcePath);
    records.push(
      seedRecord(
        "media",
        sourcePath,
        {
          sourcePath,
          imageUrl: sourcePath,
          alt: "",
          pageKey: location.pageKey,
          sectionKey: location.sectionKey,
          sortOrder: index,
          status: "published"
        },
        { slug: sourcePath, sortOrder: index }
      )
    );
  });

  return records;
}
