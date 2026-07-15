"use client";

import { usePathname } from "next/navigation";
import type { EquipmentProduct } from "@/data/equipment-products";
import type { PublicContact, PublicProductCategory, PublicSiteSettings, PublicSocialLink } from "@/lib/cms/types";
import { Footer } from "./Footer";
import { FloatingInquiry } from "./FloatingInquiry";
import { GsapInteractions } from "./GsapInteractions";
import { Header } from "./Header";

type SiteChromeProps = {
  children: React.ReactNode;
  settings: PublicSiteSettings;
  contacts: PublicContact[];
  socialLinks: PublicSocialLink[];
  productCategories: PublicProductCategory[];
  products: EquipmentProduct[];
};

export function SiteChrome({ children, settings, contacts, socialLinks, productCategories, products }: SiteChromeProps) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header settings={settings} equipmentGroups={productCategories} equipmentProducts={products} />
      <FloatingInquiry settings={settings} contacts={contacts} />
      <div id="main">{children}</div>
      <Footer settings={settings} socialLinks={socialLinks} equipmentGroups={productCategories} />
      <GsapInteractions />
    </>
  );
}
