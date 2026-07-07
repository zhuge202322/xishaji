import Link from "next/link";
import { FileText, Mail, MessageCircle } from "lucide-react";
import { company } from "@/data/site";

export function FloatingInquiry() {
  const whatsappHref = `https://wa.me/${company.phone.replace(/\D/g, "")}`;

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
      <a href={`mailto:${company.email}`} aria-label="Email VICMACH">
        <Mail size={21} aria-hidden />
        <span>Email</span>
      </a>
    </aside>
  );
}
