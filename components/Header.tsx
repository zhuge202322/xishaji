"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { equipmentProducts, getEquipmentProductByTitle } from "@/data/equipment-products";
import { oreProductGroups } from "@/data/ore-products";
import { company, equipmentGroups, navItems } from "@/data/site";
import { Logo } from "./Logo";

const dropdownLabels = new Set(["Ore Solutions", "Equipment Center"]);
const equipmentProductCount = equipmentProducts.length;
const oreRouteCount = oreProductGroups.reduce((total, group) => total + group.products.length, 0);

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"ore" | "equipment" | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function toggleDropdown(dropdown: "ore" | "equipment") {
    setOpen(false);
    setActiveDropdown((current) => (current === dropdown ? null : dropdown));
  }

  function closeDropdown() {
    setActiveDropdown(null);
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            if (item.label === "Ore Solutions") {
              const isOpen = activeDropdown === "ore";

              return (
                <div className={`nav-dropdown ${isOpen ? "is-open" : ""}`} key={item.href}>
                  <button
                    className="nav-link nav-button"
                    type="button"
                    aria-controls="ore-mega-menu"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => toggleDropdown("ore")}
                  >
                    {item.label} <ChevronDown size={14} aria-hidden />
                  </button>
                  <div
                    className={`mega-menu mega-menu-ore ${isOpen ? "is-open" : ""}`}
                    id="ore-mega-menu"
                    aria-label="Ore solution links"
                  >
                    <div className="mega-feature">
                      <span>Ore Solution Center</span>
                      <strong>{oreRouteCount} DOCX-backed ore routes</strong>
                      <p>Choose the mineral type first, then send ore grade, recovery target, capacity, and site water data for a practical process route.</p>
                      <div className="mega-feature-stats">
                        <div>
                          <strong>{oreProductGroups.length}</strong>
                          <span>Categories</span>
                        </div>
                        <div>
                          <strong>{oreRouteCount}</strong>
                          <span>Ore Pages</span>
                        </div>
                      </div>
                      <Link className="mega-feature-link" href="/ore-solutions" onClick={closeDropdown}>
                        View all ore solutions <ArrowRight size={14} aria-hidden />
                      </Link>
                    </div>
                    <div className="mega-content-grid mega-content-grid-ore">
                      {oreProductGroups.map((group) => (
                        <div className="mega-ore-column" key={group.title}>
                          <Link className="mega-group-link" href={group.href} onClick={closeDropdown}>
                            {group.title}
                          </Link>
                          <p>{group.text}</p>
                          <ul className="mega-product-list">
                            {group.products.map((ore) => (
                              <li key={ore.slug}>
                                <Link className="mega-product-link" href={`/ore-solutions/${ore.slug}`} onClick={closeDropdown}>
                                  {ore.shortTitle}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (item.label === "Equipment Center") {
              const isOpen = activeDropdown === "equipment";

              return (
                <div className={`nav-dropdown ${isOpen ? "is-open" : ""}`} key={item.href}>
                  <button
                    className="nav-link nav-button"
                    type="button"
                    aria-controls="equipment-mega-menu"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => toggleDropdown("equipment")}
                  >
                    {item.label} <ChevronDown size={14} aria-hidden />
                  </button>
                  <div
                    className={`mega-menu mega-menu-equipment ${isOpen ? "is-open" : ""}`}
                    id="equipment-mega-menu"
                    aria-label="Equipment category links"
                  >
                    <div className="mega-feature">
                      <span>Equipment Center</span>
                      <strong>{equipmentProductCount} machinery detail pages</strong>
                      <p>Browse the process family first, then open individual product detail pages with DOCX descriptions, images, and selection notes.</p>
                      <div className="mega-feature-stats">
                        <div>
                          <strong>{equipmentGroups.length}</strong>
                          <span>Families</span>
                        </div>
                        <div>
                          <strong>{equipmentProductCount}</strong>
                          <span>Models</span>
                        </div>
                      </div>
                      <Link className="mega-feature-link" href="/equipment" onClick={closeDropdown}>
                        View equipment center <ArrowRight size={14} aria-hidden />
                      </Link>
                    </div>
                    <div className="mega-content-grid mega-content-grid-equipment">
                      {equipmentGroups.map((group) => (
                        <div className="mega-equipment-column" key={group.title}>
                          <Link className="mega-group-link" href={group.href} onClick={closeDropdown}>
                            {group.title}
                          </Link>
                          <p>{group.text}</p>
                          <ul className="mega-product-list">
                            {group.items.slice(0, 6).map((product) => {
                              const equipmentProduct = getEquipmentProductByTitle(product);

                              return (
                                <li key={product}>
                                  {equipmentProduct ? (
                                    <Link className="mega-product-link" href={`/equipment/${equipmentProduct.slug}`} onClick={closeDropdown}>
                                      {product}
                                    </Link>
                                  ) : (
                                    <span>{product}</span>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link className="nav-link" key={item.href} href={item.href} onClick={closeDropdown}>
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
            onClick={() => {
              closeDropdown();
              setOpen((value) => !value);
            }}
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
            {oreProductGroups.map((group) => (
              <div className="mobile-nav-subgroup" key={group.title}>
                <Link href={group.href} onClick={() => setOpen(false)}>
                  {group.title}
                </Link>
                {group.products.map((ore) => (
                  <Link className="mobile-nav-child" key={ore.slug} href={`/ore-solutions/${ore.slug}`} onClick={() => setOpen(false)}>
                    {ore.shortTitle}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="mobile-nav-group">
            <p className="eyebrow">Equipment Center</p>
            {equipmentGroups.map((group) => (
              <div className="mobile-nav-subgroup" key={group.title}>
                <Link href={group.href} onClick={() => setOpen(false)}>
                  {group.title}
                </Link>
                {group.items.slice(0, 4).map((item) => {
                  const equipmentProduct = getEquipmentProductByTitle(item);

                  return equipmentProduct ? (
                    <Link className="mobile-nav-child" key={item} href={`/equipment/${equipmentProduct.slug}`} onClick={() => setOpen(false)}>
                      {item}
                    </Link>
                  ) : null;
                })}
              </div>
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
