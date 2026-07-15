import Link from "next/link";
import { FileText, Mail, MessageCircle } from "lucide-react";
import type { PublicContact, PublicSiteSettings } from "@/lib/cms/types";

export function FloatingInquiry({ settings, contacts }: { settings: PublicSiteSettings; contacts: PublicContact[] }) {
  const whatsappHref = contacts.find((item) => item.kind === "whatsapp")?.href || `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`;
  const emailHref = contacts.find((item) => item.kind === "email")?.href || `mailto:${settings.email}`;

  return (
    <aside className="floating-inquiry" aria-label="Quick inquiry actions">
      <Link href="/contact" aria-label="Request a quote">
        <FileText size={21} aria-hidden />
        <span>Quote</span>
      </Link>
      <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Contact engineer on WhatsApp">
        <MessageCircle size={21} aria-hidden />
        <span>WhatsApp</span>
      </a>
      <a href={emailHref} aria-label={`Email ${settings.siteName}`}>
        <Mail size={21} aria-hidden />
        <span>Email</span>
      </a>
    </aside>
  );
}
