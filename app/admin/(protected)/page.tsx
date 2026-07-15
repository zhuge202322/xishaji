import Link from "next/link";
import { ArrowRight, Database, FileText, ImageIcon, Settings, TriangleAlert } from "lucide-react";
import { getCmsStats, getCmsStorageMode } from "@/lib/cms/storage";

const dashboardItems = [
  { collection: "articles", label: "文章", href: "/admin/content/articles", icon: FileText },
  { collection: "products", label: "产品", href: "/admin/content/products", icon: Database },
  { collection: "product-categories", label: "产品类目", href: "/admin/content/product-categories", icon: Settings },
  { collection: "media", label: "页面图片", href: "/admin/content/media", icon: ImageIcon }
] as const;

export default async function AdminDashboardPage() {
  const stats = await getCmsStats();
  const storageMode = getCmsStorageMode();

  return (
    <div className="admin-page">
      <div className="admin-page-heading">
        <div><p>OVERVIEW</p><h1>后台概览</h1><span>管理官网内容、产品资料、联系入口与页面视觉资产。</span></div>
        <Link className="admin-primary-button" href="/admin/content/articles">新建文章 <ArrowRight size={17} aria-hidden /></Link>
      </div>

      {storageMode === "readonly-seed" ? (
        <div className="admin-warning-banner" role="status">
          <TriangleAlert size={20} aria-hidden />
          <div><strong>生产数据库尚未配置</strong><span>当前显示默认内容，配置 DATABASE_URL 后才可持久保存后台修改。</span></div>
        </div>
      ) : null}

      <section className="admin-stat-grid" aria-label="内容统计">
        {dashboardItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.href} key={item.collection}>
              <span><Icon size={22} aria-hidden /></span>
              <strong>{stats[item.collection]}</strong>
              <small>{item.label}</small>
              <ArrowRight size={17} aria-hidden />
            </Link>
          );
        })}
      </section>

      <section className="admin-dashboard-layout">
        <div className="admin-dashboard-section">
          <div className="admin-section-title"><div><p>CONTENT WORKFLOW</p><h2>常用管理入口</h2></div></div>
          <div className="admin-quick-list">
            <Link href="/admin/content/articles"><FileText size={20} aria-hidden /><span><strong>发布技术文章</strong><small>维护新闻中心文章与正文内容</small></span><ArrowRight size={17} aria-hidden /></Link>
            <Link href="/admin/content/products"><Database size={20} aria-hidden /><span><strong>维护产品资料</strong><small>修改类目、产品介绍和技术卖点</small></span><ArrowRight size={17} aria-hidden /></Link>
            <Link href="/admin/content/media"><ImageIcon size={20} aria-hidden /><span><strong>替换页面图片</strong><small>上传图片并覆盖全站原始图片路径</small></span><ArrowRight size={17} aria-hidden /></Link>
            <Link href="/admin/content/site-settings"><Settings size={20} aria-hidden /><span><strong>网站与品牌设置</strong><small>修改网站名称、Logo 和默认联系方式</small></span><ArrowRight size={17} aria-hidden /></Link>
          </div>
        </div>
        <aside className="admin-system-panel">
          <p>SYSTEM STATUS</p>
          <h2>内容存储</h2>
          <div><Database size={22} aria-hidden /><span><strong>{storageMode === "postgres" ? "PostgreSQL" : storageMode === "local-json" ? "本地开发存储" : "只读默认数据"}</strong><small>{storageMode === "postgres" ? "适用于 Vercel 生产环境" : storageMode === "local-json" ? ".cms-data/content.json" : "请配置 DATABASE_URL"}</small></span></div>
          <ul>
            <li>后台登录采用签名 Cookie</li>
            <li>图片支持本地上传和 Vercel Blob</li>
            <li>内容修改后自动刷新前台缓存</li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
