import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingInquiry } from "@/components/FloatingInquiry";
import { GsapInteractions } from "@/components/GsapInteractions";
import { company } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VICMACH | Crushing, Sand Making & Mineral Processing Equipment",
  description:
    "Henan Victory Machinery Co., Ltd. manufactures crushing, sand making, mineral processing, grinding, building material, and washing equipment for global mining projects.",
  keywords: [
    "VICMACH",
    "Henan Victory Machinery",
    "crushing equipment",
    "sand making plant",
    "mineral processing",
    "grinding mill",
    "washing equipment",
    "EPC mining plant"
  ],
  openGraph: {
    title: "VICMACH | Industrial Crushing & Mineral Processing Solutions",
    description:
      "Heavy-duty mining machinery and EPC production lines from Henan Victory Machinery Co., Ltd.",
    images: ["/images/hero-factory.webp"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <FloatingInquiry />
        <div id="main">{children}</div>
        <Footer />
        <GsapInteractions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: company.legalName,
              alternateName: company.brand,
              email: company.email,
              telephone: company.phone,
              address: company.headquarters,
              url: siteUrl
            })
          }}
        />
      </body>
    </html>
  );
}
