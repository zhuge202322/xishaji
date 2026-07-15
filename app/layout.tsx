import type { Metadata } from "next";
import "./globals.css";
import { CmsMediaProvider } from "@/components/cms/CmsMediaProvider";
import { SiteChrome } from "@/components/SiteChrome";
import { getPublicChromeData, getPublicSiteSettings } from "@/lib/cms/public-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getPublicSiteSettings();
  const description = `${settings.legalName} manufactures crushing, sand making, mineral processing, grinding, building material, and washing equipment for global mining projects.`;
  return {
    metadataBase: new URL(siteUrl),
    title: `${settings.siteName} | Crushing, Sand Making & Mineral Processing Equipment`,
    description,
    keywords: [settings.siteName, settings.legalName, "crushing equipment", "sand making plant", "mineral processing", "grinding mill", "washing equipment", "EPC mining plant"],
    openGraph: {
      title: `${settings.siteName} | Industrial Crushing & Mineral Processing Solutions`,
      description,
      images: ["/images/hero-factory.webp"]
    }
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const chromeData = await getPublicChromeData();
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <CmsMediaProvider mediaMap={chromeData.mediaMap}>
          <SiteChrome
            settings={chromeData.settings}
            contacts={chromeData.contacts}
            socialLinks={chromeData.socialLinks}
            productCategories={chromeData.productCategories}
            products={chromeData.products}
          >
            {children}
          </SiteChrome>
        </CmsMediaProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: chromeData.settings.legalName,
              alternateName: chromeData.settings.siteName,
              email: chromeData.settings.email,
              telephone: chromeData.settings.phone,
              address: chromeData.settings.headquarters,
              url: siteUrl
            })
          }}
        />
      </body>
    </html>
  );
}
