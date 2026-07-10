import Link from "next/link";

export const aboutSections = [
  { label: "Overview", href: "/about" },
  { label: "Company Profile", href: "/about/profile" },
  { label: "Our History", href: "/about/history" },
  { label: "Honors & Certificates", href: "/about/honors" },
  { label: "Patents & R&D", href: "/about/patents" },
  { label: "Company Culture", href: "/about/culture" }
];

export function AboutNav({ current }: { current: string }) {
  return (
    <nav className="about-section-nav" aria-label="About VICMACH sections">
      <div className="container">
        {aboutSections.map((item) => (
          <Link
            className={current === item.href ? "is-active" : undefined}
            href={item.href}
            key={item.href}
            aria-current={current === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
