"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Boxes,
  ContactRound,
  FileText,
  FolderTree,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Share2,
  X
} from "lucide-react";

const adminNavItems = [
  { href: "/admin", label: "后台概览", icon: LayoutDashboard },
  { href: "/admin/content/articles", label: "文章管理", icon: FileText },
  { href: "/admin/content/product-categories", label: "产品类目", icon: FolderTree },
  { href: "/admin/content/products", label: "产品管理", icon: Boxes },
  { href: "/admin/content/media", label: "页面图片", icon: ImageIcon },
  { href: "/admin/content/contacts", label: "客服联系方式", icon: ContactRound },
  { href: "/admin/content/social-links", label: "社媒链接", icon: Share2 },
  { href: "/admin/content/site-settings", label: "网站设置", icon: Settings }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  async function logout() {
    await fetch("/api/admin/session", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="admin-sidebar-brand">
          <span>V</span>
          <div><strong>VICMACH</strong><small>内容管理后台</small></div>
          <button type="button" aria-label="关闭后台菜单" onClick={() => setMenuOpen(false)}>
            <X size={20} aria-hidden />
          </button>
        </div>
        <nav aria-label="后台功能导航">
          {adminNavItems.map((item) => {
            const active = item.href === "/admin" ? pathname === item.href : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link className={active ? "is-active" : undefined} href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
                <Icon size={19} aria-hidden />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="admin-sidebar-footer">
          <Link href="/" target="_blank">查看网站</Link>
          <button type="button" onClick={logout}><LogOut size={18} aria-hidden /> 退出登录</button>
        </div>
      </aside>

      {menuOpen ? <button className="admin-sidebar-scrim" type="button" aria-label="关闭后台菜单" onClick={() => setMenuOpen(false)} /> : null}

      <div className="admin-main-column">
        <header className="admin-topbar">
          <button className="admin-menu-button" type="button" aria-label="打开后台菜单" onClick={() => setMenuOpen(true)}>
            <Menu size={21} aria-hidden />
          </button>
          <div><strong>网站内容管理</strong><span>中文管理界面</span></div>
          <span className="admin-online-status"><i /> 系统正常</span>
        </header>
        <main className="admin-main">{children}</main>
      </div>
    </div>
  );
}
