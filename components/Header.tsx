"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { company, equipmentGroups, navItems, oreSolutionGroups } from "@/data/site";
import { Logo } from "./Logo";

const dropdownLabels = new Set(["Ore Solutions", "Equipment Center"]);

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            if (item.label === "Ore Solutions") {
              return (
                <div className="nav-dropdown" key={item.href}>
                  <Link className="nav-link nav-button" href={item.href}>
                    {item.label} <ChevronDown size={14} aria-hidden />
                  </Link>
                  <div className="mega-menu mega-menu-ore" aria-label="Ore solution links">
                    {oreSolutionGroups.map((group) => (
                      <Link className="mega-card" key={group.title} href={group.href}>
                        <strong>{group.title}</strong>
                        <span>{group.text}</span>
                        <small>{group.ores.join(" / ")}</small>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            if (item.label === "Equipment Center") {
              return (
                <div className="nav-dropdown" key={item.href}>
                  <Link className="nav-link nav-button" href={item.href}>
                    {item.label} <ChevronDown size={14} aria-hidden />
                  </Link>
                  <div className="mega-menu mega-menu-equipment" aria-label="Equipment category links">
                    {equipmentGroups.map((group) => (
                      <div className="mega-equipment-column" key={group.title}>
                        <Link className="mega-group-link" href={group.href}>
                          {group.title}
                        </Link>
                        <p>{group.text}</p>
                        <ul>
                          {group.items.slice(0, 6).map((product) => (
                            <li key={product}>{product}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link className="nav-link" key={item.href} href={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <span className="language-pill">EN</span>
          <Link className="button button-primary button-small" href="/contact">
            Request Quote
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
            {navItems
              .filter((item) => !dropdownLabels.has(item.label))
              .map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
          </div>

          <div className="mobile-nav-group">
            <p className="eyebrow">Ore Solutions</p>
            {oreSolutionGroups.map((group) => (
              <Link key={group.title} href={group.href} onClick={() => setOpen(false)}>
                {group.title}
              </Link>
            ))}
          </div>

          <div className="mobile-nav-group">
            <p className="eyebrow">Equipment Center</p>
            {equipmentGroups.map((group) => (
              <Link key={group.title} href={group.href} onClick={() => setOpen(false)}>
                {group.title}
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
