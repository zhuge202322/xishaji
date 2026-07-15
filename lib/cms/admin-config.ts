import type { AdminCollectionConfig, CmsCollection } from "./types";

const statusOptions = [
  { label: "已发布", value: "published" },
  { label: "草稿", value: "draft" }
];

export const adminCollectionConfigs: Record<CmsCollection, AdminCollectionConfig> = {
  articles: {
    collection: "articles",
    label: "文章管理",
    singularLabel: "文章",
    description: "管理新闻中心文章、正文、发布时间和文章主图。",
    titleField: "title",
    fields: [
      { key: "title", label: "文章标题", type: "text", required: true },
      { key: "slug", label: "URL 标识", type: "text", required: true, placeholder: "例如 crushing-plant-guide" },
      { key: "category", label: "文章分类", type: "text", required: true },
      { key: "summary", label: "文章摘要", type: "textarea", required: true, rows: 3 },
      { key: "publishedAt", label: "发布日期", type: "date", required: true },
      { key: "readTime", label: "阅读时长", type: "text", placeholder: "例如 6 min read" },
      { key: "heroImage", label: "文章主图", type: "image", required: true },
      { key: "heroAlt", label: "图片替代文字", type: "text", required: true },
      {
        key: "content",
        label: "文章正文",
        type: "textarea",
        required: true,
        rows: 18,
        help: "使用 ## 标题、空行分段、- 列表项组织文章内容。"
      },
      { key: "takeaways", label: "关键要点", type: "textarea", rows: 6, help: "每行一个要点。" },
      {
        key: "relatedLinks",
        label: "相关链接",
        type: "textarea",
        rows: 5,
        help: "每行格式：链接名称|/链接地址"
      },
      { key: "status", label: "发布状态", type: "select", options: statusOptions }
    ]
  },
  "product-categories": {
    collection: "product-categories",
    label: "产品类目",
    singularLabel: "产品类目",
    description: "管理设备中心的产品分组、描述、排序和类目图片。",
    titleField: "title",
    fields: [
      { key: "title", label: "类目名称", type: "text", required: true },
      { key: "slug", label: "URL 标识", type: "text", required: true },
      { key: "description", label: "类目描述", type: "textarea", required: true, rows: 4 },
      { key: "image", label: "类目图片", type: "image", required: true },
      { key: "sortOrder", label: "排序", type: "number" },
      { key: "status", label: "发布状态", type: "select", options: statusOptions }
    ]
  },
  products: {
    collection: "products",
    label: "产品管理",
    singularLabel: "产品",
    description: "管理产品详情、所属类目、卖点、应用和产品图片。",
    titleField: "title",
    fields: [
      { key: "title", label: "产品名称", type: "text", required: true },
      { key: "slug", label: "URL 标识", type: "text", required: true },
      { key: "category", label: "所属类目", type: "text", required: true },
      { key: "summary", label: "产品摘要", type: "textarea", required: true, rows: 4 },
      { key: "heroImage", label: "产品主图", type: "image", required: true },
      { key: "heroAlt", label: "图片替代文字", type: "text", required: true },
      { key: "processRole", label: "工艺作用", type: "textarea", rows: 4 },
      { key: "advantages", label: "产品优势", type: "textarea", rows: 6, help: "每行一项。" },
      { key: "applications", label: "应用场景", type: "textarea", rows: 6, help: "每行一项。" },
      { key: "selectionFactors", label: "选型因素", type: "textarea", rows: 6, help: "每行一项。" },
      { key: "technicalFocus", label: "技术重点", type: "textarea", rows: 6, help: "每行一项。" },
      { key: "relatedTitles", label: "相关产品", type: "textarea", rows: 6, help: "每行填写一个产品名称。" },
      { key: "sortOrder", label: "排序", type: "number" },
      { key: "status", label: "发布状态", type: "select", options: statusOptions }
    ]
  },
  contacts: {
    collection: "contacts",
    label: "客服联系方式",
    singularLabel: "联系方式",
    description: "管理电话、邮箱、WhatsApp、地址及其他客服入口。",
    titleField: "label",
    fields: [
      { key: "label", label: "显示名称", type: "text", required: true },
      {
        key: "kind",
        label: "联系方式类型",
        type: "select",
        required: true,
        options: [
          { label: "电话", value: "phone" },
          { label: "邮箱", value: "email" },
          { label: "WhatsApp", value: "whatsapp" },
          { label: "地址", value: "address" },
          { label: "其他", value: "other" }
        ]
      },
      { key: "value", label: "联系方式内容", type: "text", required: true },
      { key: "href", label: "点击链接", type: "text", placeholder: "tel:、mailto: 或 https://" },
      { key: "description", label: "备注", type: "textarea", rows: 3 },
      { key: "sortOrder", label: "排序", type: "number" },
      { key: "status", label: "启用状态", type: "select", options: statusOptions }
    ]
  },
  "social-links": {
    collection: "social-links",
    label: "社媒链接",
    singularLabel: "社媒链接",
    description: "管理 TikTok、YouTube、Facebook、微信视频号等官方地址。",
    titleField: "label",
    fields: [
      { key: "platform", label: "平台标识", type: "text", required: true, placeholder: "例如 youtube" },
      { key: "label", label: "显示名称", type: "text", required: true },
      { key: "url", label: "社媒地址", type: "url", required: true },
      { key: "sortOrder", label: "排序", type: "number" },
      { key: "status", label: "启用状态", type: "select", options: statusOptions }
    ]
  },
  "site-settings": {
    collection: "site-settings",
    label: "网站设置",
    singularLabel: "网站设置",
    description: "管理网站名称、公司 Logo、公司名称和默认联系信息。",
    titleField: "siteName",
    singleton: true,
    fields: [
      { key: "siteName", label: "网站名称", type: "text", required: true },
      { key: "legalName", label: "公司主体名称", type: "text", required: true },
      { key: "tagline", label: "网站简短描述", type: "textarea", rows: 3 },
      { key: "logoUrl", label: "公司 Logo", type: "image", required: true },
      { key: "phone", label: "默认电话", type: "text" },
      { key: "email", label: "默认邮箱", type: "text" },
      { key: "whatsapp", label: "WhatsApp 号码", type: "text" },
      { key: "headquarters", label: "总部地址", type: "textarea", rows: 3 },
      { key: "status", label: "启用状态", type: "select", options: statusOptions }
    ]
  },
  media: {
    collection: "media",
    label: "页面图片",
    singularLabel: "图片覆盖",
    description: "按原始图片路径管理全站各页面和板块使用的图片。",
    titleField: "sourcePath",
    fields: [
      { key: "sourcePath", label: "原始图片路径", type: "text", required: true, help: "作为全站图片映射键，请谨慎修改。" },
      { key: "pageKey", label: "页面标识", type: "text", placeholder: "例如 home、equipment" },
      { key: "sectionKey", label: "板块标识", type: "text", placeholder: "例如 hero、manufacturing" },
      { key: "imageUrl", label: "当前图片", type: "image", required: true },
      { key: "alt", label: "图片说明", type: "text" },
      { key: "sortOrder", label: "排序", type: "number" },
      { key: "status", label: "启用状态", type: "select", options: statusOptions }
    ]
  }
};

export const adminCollectionList = Object.values(adminCollectionConfigs);

export function getAdminCollectionConfig(collection: string) {
  return adminCollectionConfigs[collection as CmsCollection];
}
