import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { getLocalDevelopmentPassword, hasAdminSession, isAdminAuthConfigured } from "@/lib/cms/auth";

export default async function AdminLoginPage() {
  if (await hasAdminSession()) redirect("/admin");
  const localPassword = getLocalDevelopmentPassword();

  return (
    <main className="admin-login-page">
      <section className="admin-login-panel">
        <div className="admin-login-brand">
          <span>V</span>
          <div>
            <strong>VICMACH</strong>
            <small>网站内容管理后台</small>
          </div>
        </div>
        <div className="admin-login-copy">
          <p>ADMIN CONSOLE</p>
          <h1>后台登录</h1>
          <span>登录后可管理文章、产品、联系方式、社媒链接、网站设置和页面图片。</span>
        </div>
        <AdminLoginForm />
        {localPassword ? (
          <p className="admin-dev-note">本地开发默认密码：<code>{localPassword}</code></p>
        ) : null}
        {!isAdminAuthConfigured() && !localPassword ? (
          <p className="admin-form-error">生产环境需要配置 ADMIN_PASSWORD 和 ADMIN_SESSION_SECRET。</p>
        ) : null}
      </section>
      <aside className="admin-login-visual" aria-hidden>
        <div>
          <span>CONTENT OPERATIONS</span>
          <strong>统一管理官网内容与品牌资产</strong>
          <p>所有修改通过结构化内容接口保存，并在前台缓存刷新后生效。</p>
        </div>
      </aside>
    </main>
  );
}
