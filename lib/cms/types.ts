export const cmsCollectionNames = [
  "articles",
  "product-categories",
  "products",
  "contacts",
  "social-links",
  "site-settings",
  "media"
] as const;

export type CmsCollection = (typeof cmsCollectionNames)[number];

export type CmsRecordData = Record<string, unknown>;

export type CmsRecord<T extends CmsRecordData = CmsRecordData> = {
  id: string;
  collection: CmsCollection;
  slug: string | null;
  status: "draft" | "published";
  sortOrder: number;
  data: T;
  createdAt: string;
  updatedAt: string;
};

export type CmsRecordInput = {
  id?: string;
  collection: CmsCollection;
  slug?: string | null;
  status?: "draft" | "published";
  sortOrder?: number;
  data: CmsRecordData;
};

export type AdminFieldType = "text" | "textarea" | "url" | "image" | "date" | "number" | "select";

export type AdminField = {
  key: string;
  label: string;
  type: AdminFieldType;
  required?: boolean;
  placeholder?: string;
  help?: string;
  rows?: number;
  options?: Array<{ label: string; value: string }>;
};

export type AdminCollectionConfig = {
  collection: CmsCollection;
  label: string;
  singularLabel: string;
  description: string;
  titleField: string;
  singleton?: boolean;
  fields: AdminField[];
};

export type PublicSiteSettings = {
  siteName: string;
  legalName: string;
  tagline: string;
  logoUrl: string;
  phone: string;
  email: string;
  whatsapp: string;
  headquarters: string;
};

export type PublicContact = {
  id: string;
  label: string;
  kind: string;
  value: string;
  href: string;
  description: string;
};

export type PublicSocialLink = {
  id: string;
  platform: string;
  label: string;
  url: string;
};

export type PublicProductCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  productSlugs: string[];
};
