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
  ".authority-shell",
  ".authority-proof-grid div",
  ".trust-proof-grid article",
  ".capability-card",
  ".project-card",
  ".ore-pathway-card",
  ".ore-solution-card",
  ".ore-support-grid article",
  ".certificate-card",
  ".service-step-card",
  ".news-card",
  ".process-card",
  ".highlight-card",
  ".case-card",
  ".timeline-grid article",
  ".gallery-section",
  ".tour-grid article",
  ".video-card",
  ".cert-grid article",
  ".about-facts div",
  ".visit-support-grid div",
  ".contact-card",
  ".form-panel",
  ".epc-card"
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

      const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      if (finePointer) {
        cards
          .filter((card) => !card.matches(".form-panel, .authority-shell"))
          .forEach((card) => {
            const media = card.querySelector<HTMLElement>("img, video");

            const onMove = (event: PointerEvent) => {
              const rect = card.getBoundingClientRect();
              const px = (event.clientX - rect.left) / rect.width - 0.5;
              const py = (event.clientY - rect.top) / rect.height - 0.5;

              card.style.setProperty("--gsap-x", `${event.clientX - rect.left}px`);
              card.style.setProperty("--gsap-y", `${event.clientY - rect.top}px`);

              gsap.to(card, {
                rotateY: px * 5,
                rotateX: -py * 5,
                y: -4,
                boxShadow: "0 22px 48px rgba(21, 25, 28, 0.16)",
                duration: 0.34,
                ease: "power2.out"
              });

              if (media) {
                gsap.to(media, {
                  scale: 1.045,
                  x: px * -8,
                  y: py * -8,
                  duration: 0.45,
                  ease: "power2.out"
                });
              }
            };

            const onLeave = () => {
              gsap.to(card, {
                rotateY: 0,
                rotateX: 0,
                y: 0,
                boxShadow: "0 0 0 rgba(21, 25, 28, 0)",
                duration: 0.5,
                ease: "elastic.out(1, 0.55)",
                clearProps: "boxShadow"
              });

              if (media) {
                gsap.to(media, {
                  scale: 1,
                  x: 0,
                  y: 0,
                  duration: 0.5,
                  ease: "power3.out"
                });
              }
            };

            card.addEventListener("pointermove", onMove);
            card.addEventListener("pointerleave", onLeave);

            cleanupFns.push(() => {
              card.removeEventListener("pointermove", onMove);
              card.removeEventListener("pointerleave", onLeave);
            });
          });
      }

      const heroDataItems = gsap.utils.toArray<HTMLElement>(".hero-data-strip div");

      if (heroDataItems.length > 0) {
        gsap.to(heroDataItems, {
          y: -8,
          duration: 1.4,
          stagger: 0.15,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
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
