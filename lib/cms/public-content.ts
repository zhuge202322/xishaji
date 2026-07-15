import type { EquipmentProduct } from "@/data/equipment-products";
import { equipmentProducts as fallbackProducts } from "@/data/equipment-products";
import type { NewsArticle, NewsArticleSection } from "@/data/news";
import { newsArticles as fallbackArticles } from "@/data/news";
import { company, equipmentGroups, socialChannels } from "@/data/site";
import { listCmsRecords } from "./storage";
import type {
  CmsRecord,
  PublicContact,
  PublicProductCategory,
  PublicSiteSettings,
  PublicSocialLink
} from "./types";

const fallbackCategoryImages = [
  "/images/workshop-wide.webp",
  "/images/grinding-equipment.webp",
  "/images/product-inspection.webp",
  "/images/gallery/workshop-assembly-03.webp",
  "/images/workshop-line.webp",
  "/images/washing-equipment.webp"
];

function value(record: CmsRecord, key: string, fallback = "") {
  const current = record.data[key];
  return current === null || current === undefined ? fallback : String(current);
}

function lines(input: unknown) {
  if (Array.isArray(input)) return input.map(String).map((item) => item.trim()).filter(Boolean);
  return String(input ?? "").split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
}

function publishedLabel(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(parsed);
}

function parseArticleContent(content: string, summary: string) {
  const blocks = content.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);
  const leadParts: string[] = [];
  const sections: NewsArticleSection[] = [];
  let current: NewsArticleSection | null = null;

  for (const block of blocks) {
    if (block.startsWith("## ")) {
      current = { heading: block.slice(3).trim(), paragraphs: [] };
      sections.push(current);
      continue;
    }

    if (block.startsWith("- ")) {
      if (!current) {
        current = { heading: "Article Details", paragraphs: [] };
        sections.push(current);
      }
      current.bullets = [...(current.bullets ?? []), block.slice(2).trim()];
      continue;
    }

    if (current) current.paragraphs.push(block);
    else leadParts.push(block);
  }

  return {
    lead: leadParts.join("\n\n") || summary,
    sections: sections.length > 0 ? sections : [{ heading: "Article Details", paragraphs: leadParts.slice(1) }]
  };
}

function parseRelatedLinks(input: unknown) {
  return lines(input).map((item) => {
    const [label, href] = item.split("|");
    return { label: label?.trim() || "Related Link", href: href?.trim() || "/contact" };
  });
}

export async function getPublicContacts(): Promise<PublicContact[]> {
  try {
    const records = await listCmsRecords("contacts");
    return records.map((record) => ({
      id: record.id,
      label: value(record, "label"),
      kind: value(record, "kind"),
      value: value(record, "value"),
      href: value(record, "href"),
      description: value(record, "description")
    }));
  } catch {
    return [
      { id: "phone", label: "Phone", kind: "phone", value: company.phone, href: `tel:${company.phone.replaceAll(" ", "")}`, description: "" },
      { id: "email", label: "Email", kind: "email", value: company.email, href: `mailto:${company.email}`, description: "" },
      { id: "whatsapp", label: "WhatsApp", kind: "whatsapp", value: company.phone, href: `https://wa.me/${company.phone.replace(/\D/g, "")}`, description: "" }
    ];
  }
}

export async function getPublicSiteSettings(): Promise<PublicSiteSettings> {
  const contacts = await getPublicContacts();
  const phoneContact = contacts.find((item) => item.kind === "phone");
  const emailContact = contacts.find((item) => item.kind === "email");
  const whatsappContact = contacts.find((item) => item.kind === "whatsapp");

  try {
    const [record] = await listCmsRecords("site-settings");
    return {
      siteName: record ? value(record, "siteName", company.brand) : company.brand,
      legalName: record ? value(record, "legalName", company.legalName) : company.legalName,
      tagline: record ? value(record, "tagline", "Industrial Crushing and Mineral Processing Solutions") : "Industrial Crushing and Mineral Processing Solutions",
      logoUrl: record ? value(record, "logoUrl", "/images/vicmach-mark.png") : "/images/vicmach-mark.png",
      phone: phoneContact?.value || (record ? value(record, "phone", company.phone) : company.phone),
      email: emailContact?.value || (record ? value(record, "email", company.email) : company.email),
      whatsapp: whatsappContact?.value || (record ? value(record, "whatsapp", company.phone) : company.phone),
      headquarters: record ? value(record, "headquarters", company.headquarters) : company.headquarters
    };
  } catch {
    return {
      siteName: company.brand,
      legalName: company.legalName,
      tagline: "Industrial Crushing and Mineral Processing Solutions",
      logoUrl: "/images/vicmach-mark.png",
      phone: phoneContact?.value || company.phone,
      email: emailContact?.value || company.email,
      whatsapp: whatsappContact?.value || company.phone,
      headquarters: company.headquarters
    };
  }
}

export async function getPublicSocialLinks(): Promise<PublicSocialLink[]> {
  try {
    const records = await listCmsRecords("social-links");
    return records.map((record) => ({
      id: record.id,
      platform: value(record, "platform"),
      label: value(record, "label"),
      url: value(record, "url", "/contact")
    }));
  } catch {
    return socialChannels.map((channel) => ({ id: channel.id, platform: channel.id, label: channel.label, url: channel.href }));
  }
}

export async function getPublicProductCategories(): Promise<PublicProductCategory[]> {
  try {
    const records = await listCmsRecords("product-categories");
    return records.map((record) => ({
      id: record.id,
      title: value(record, "title"),
      slug: value(record, "slug", record.slug ?? "category"),
      description: value(record, "description"),
      image: value(record, "image", "/images/workshop-line.webp"),
      productSlugs: lines(record.data.productSlugs)
    }));
  } catch {
    return equipmentGroups.map((group, index) => ({
      id: group.href,
      title: group.title,
      slug: group.href.split("#")[1] ?? `category-${index + 1}`,
      description: group.text,
      image: fallbackCategoryImages[index] ?? "/images/workshop-line.webp",
      productSlugs: fallbackProducts.filter((product) => product.category === group.title).map((product) => product.slug)
    }));
  }
}

export async function getPublicProducts(): Promise<EquipmentProduct[]> {
  try {
    const [records, categories] = await Promise.all([listCmsRecords("products"), getPublicProductCategories()]);
    return records.map((record) => {
      const category = value(record, "category");
      const categoryRecord = categories.find((item) => item.title === category);
      return {
        slug: value(record, "slug", record.slug ?? "product"),
        title: value(record, "title"),
        category,
        categoryHref: value(record, "categoryHref", `/equipment#${categoryRecord?.slug ?? "equipment"}`),
        summary: value(record, "summary"),
        heroImage: value(record, "heroImage", categoryRecord?.image ?? "/images/workshop-line.webp"),
        heroAlt: value(record, "heroAlt", value(record, "title")),
        processRole: value(record, "processRole"),
        advantages: lines(record.data.advantages),
        applications: lines(record.data.applications),
        selectionFactors: lines(record.data.selectionFactors),
        technicalFocus: lines(record.data.technicalFocus),
        relatedTitles: lines(record.data.relatedTitles)
      };
    });
  } catch {
    return fallbackProducts;
  }
}

export async function getPublicArticles(): Promise<NewsArticle[]> {
  try {
    const records = await listCmsRecords("articles");
    return records.map((record) => {
      const summary = value(record, "summary");
      const content = parseArticleContent(value(record, "content"), summary);
      const date = value(record, "publishedAt", new Date().toISOString().slice(0, 10));
      return {
        slug: value(record, "slug", record.slug ?? "article"),
        title: value(record, "title"),
        category: value(record, "category", "Technical Article"),
        summary,
        publishedAt: date,
        publishedLabel: publishedLabel(date),
        readTime: value(record, "readTime", "5 min read"),
        heroImage: value(record, "heroImage", "/images/workshop-wide.webp"),
        heroAlt: value(record, "heroAlt", value(record, "title")),
        lead: content.lead,
        sections: content.sections,
        takeaways: lines(record.data.takeaways),
        relatedLinks: parseRelatedLinks(record.data.relatedLinks)
      };
    });
  } catch {
    return fallbackArticles;
  }
}

export async function getPublicArticle(slug: string) {
  return (await getPublicArticles()).find((article) => article.slug === slug);
}

export async function getPublicMediaMap() {
  try {
    const records = await listCmsRecords("media");
    return Object.fromEntries(
      records
        .map((record) => [value(record, "sourcePath"), value(record, "imageUrl")] as const)
        .filter(([sourcePath, imageUrl]) => sourcePath && imageUrl && sourcePath !== imageUrl)
    );
  } catch {
    return {};
  }
}

export async function getPublicChromeData() {
  const [settings, contacts, socialLinks, productCategories, products, mediaMap] = await Promise.all([
    getPublicSiteSettings(),
    getPublicContacts(),
    getPublicSocialLinks(),
    getPublicProductCategories(),
    getPublicProducts(),
    getPublicMediaMap()
  ]);
  return { settings, contacts, socialLinks, productCategories, products, mediaMap };
}
