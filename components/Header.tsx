"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { company, navItems, solutionLinks } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-dropdown">
            <button className="nav-link nav-button" type="button">
              Solutions <ChevronDown size={14} aria-hidden />
            </button>
            <div className="mega-menu" aria-label="Solution links">
              <div>
                <p className="eyebrow">Core Equipment</p>
                {solutionLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <div>
                <p className="eyebrow">Project Services</p>
                <Link href="/#epc">EPC Turnkey Delivery</Link>
                <Link href="/#trust-evidence">Factory Evidence</Link>
                <Link href="/about#certificates">Certificates</Link>
                <Link href="/factory-visit">Client Reception</Link>
                <Link href="/contact">Technical Support</Link>
              </div>
            </div>
          </div>
          {navItems.slice(1).map((item) => (
            <Link className="nav-link" key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <span className="language-pill">EN</span>
          <Link className="button button-primary button-small" href="/contact">
            Consultation
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="mobile-nav-group">
            <p className="eyebrow">Solutions</p>
            {solutionLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mobile-nav-group">
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <a className="mobile-contact" href={`tel:${company.phone.replaceAll(" ", "")}`}>
            {company.phone}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
