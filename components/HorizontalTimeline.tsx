"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "./SectionHeading";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type TimelineItem = {
  year: string;
  title: string;
  text: string;
};

type HorizontalTimelineProps = {
  items: TimelineItem[];
};

export function HorizontalTimeline({ items }: HorizontalTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !sectionRef.current || !viewportRef.current || !trackRef.current) {
      return;
    }

    const context = gsap.context(() => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 768px)", () => {
        const section = sectionRef.current;
        const viewport = viewportRef.current;
        const track = trackRef.current;

        if (!section || !viewport || !track) {
          return undefined;
        }

        const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

        gsap.set(track, { x: 0 });

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance() + window.innerHeight * 0.45}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        gsap.from(".decade-card", {
          y: 36,
          opacity: 0,
          rotateX: 6,
          transformOrigin: "center bottom",
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: viewport,
            start: "top 72%"
          }
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      matchMedia.add("(max-width: 767px)", () => {
        gsap.from(".decade-card", {
          y: 28,
          opacity: 0,
          duration: 0.65,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: viewportRef.current,
            start: "top 80%"
          }
        });
      });

      return () => matchMedia.revert();
    }, sectionRef);

    return () => context.revert();
  }, [items.length]);

  return (
    <section className="section decade-section" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="A Decade of Progress"
          title="From Mining Machinery Roots to Global EPC Delivery"
        />
      </div>
      <div className="decade-viewport" ref={viewportRef}>
        <div className="decade-track" ref={trackRef}>
          {items.map((item, index) => (
            <article className="decade-card" key={`${item.year}-${item.title}`}>
              <span className="decade-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.year}</strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
