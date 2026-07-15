"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const cardSelector = [
  ".category-card",
  ".equipment-directory-card",
  ".equipment-catalog-card",
  ".equipment-index a",
  ".hero-command-panel",
  ".authority-stage",
  ".authority-proof-item",
  ".trust-proof-grid article",
  ".capability-card",
  ".project-card",
  ".ore-pathway-card",
  ".ore-solution-card",
  ".ore-support-grid article",
  ".ore-source-card",
  ".ore-process-card",
  ".ore-gallery-card",
  ".ore-equipment-panel",
  ".certificate-card",
  ".service-step-card",
  ".news-list-item",
  ".process-card",
  ".highlight-card",
  ".case-card",
  ".timeline-grid article",
  ".gallery-section",
  ".home-evidence-item",
  ".project-showcase-card",
  ".compact-certificate-files a",
  ".global-contact-grid article",
  ".tour-grid article",
  ".video-card",
  ".cert-grid article",
  ".about-facts div",
  ".about-directory-card",
  ".company-profile-stats div",
  ".company-office-grid article",
  ".honors-summary-grid article",
  ".patent-theme-grid article",
  ".culture-value-grid article",
  ".culture-gallery-layout article",
  ".visit-support-grid div",
  ".contact-card",
  ".form-panel",
  ".epc-process-item"
].join(", ");

export function GsapInteractions() {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const cleanupFns: Array<() => void> = [];

      const context = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(cardSelector);
        const headings = gsap.utils.toArray<HTMLElement>(".section-heading");
        const compactViewport = window.matchMedia("(max-width: 640px)").matches;

      cards.forEach((card) => {
        card.classList.add("is-gsap-card");
        cleanupFns.push(() => card.classList.remove("is-gsap-card"));
      });

      if (cards.length > 0) {
        gsap.set(cards, {
          opacity: 0,
          y: compactViewport ? 24 : 34,
          rotateX: compactViewport ? 0 : 5,
          transformPerspective: 900,
          transformOrigin: "center bottom",
          willChange: "transform, opacity"
        });

        ScrollTrigger.batch(cards, {
          start: "top 86%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.72,
              stagger: 0.055,
              ease: "power3.out",
              clearProps: "willChange"
            });
          }
        });
      }

      if (headings.length > 0) {
        gsap.set(headings, {
          opacity: 0,
          y: 28
        });

        ScrollTrigger.batch(headings, {
          start: "top 88%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.68,
              stagger: 0.06,
              ease: "power3.out"
            });
          }
        });
      }

      ScrollTrigger.refresh();
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [pathname]);

  return null;
}
