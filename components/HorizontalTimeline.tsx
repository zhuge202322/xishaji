"use client";

import { useEffect, useLayoutEffect, useRef, type KeyboardEvent, type PointerEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !sectionRef.current || !viewportRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from(".decade-card", {
        y: 32,
        opacity: 0,
        rotateX: 4,
        transformOrigin: "center bottom",
        duration: 0.72,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: viewportRef.current,
          start: "top 82%",
          once: true
        }
      });
    }, sectionRef);

    return () => context.revert();
  }, [items.length]);

  function scrollTimeline(direction: -1 | 1) {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollBy({
      left: direction * Math.min(viewport.clientWidth * 0.78, 520),
      behavior: "smooth"
    });
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.pointerType !== "mouse") return;

    const viewport = event.currentTarget;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: viewport.scrollLeft
    };
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add("is-dragging");
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragRef.current.active || event.pointerType !== "mouse") return;

    event.currentTarget.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
  }

  function stopDragging(event: PointerEvent<HTMLDivElement>) {
    if (!dragRef.current.active) return;

    dragRef.current.active = false;
    event.currentTarget.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollTimeline(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollTimeline(1);
    }
  }

  return (
    <section className="section decade-section" ref={sectionRef}>
      <div className="container decade-header">
        <SectionHeading
          eyebrow="A Decade of Progress"
          title="From Mining Machinery Roots to Global EPC Delivery"
        />
        <div className="decade-controls" aria-label="Timeline controls">
          <button
            type="button"
            onPointerDown={(event) => {
              event.preventDefault();
              scrollTimeline(-1);
            }}
            onClick={(event) => {
              if (event.detail === 0) scrollTimeline(-1);
            }}
            aria-label="Scroll timeline left"
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            type="button"
            onPointerDown={(event) => {
              event.preventDefault();
              scrollTimeline(1);
            }}
            onClick={(event) => {
              if (event.detail === 0) scrollTimeline(1);
            }}
            aria-label="Scroll timeline right"
          >
            <ChevronRight size={20} aria-hidden />
          </button>
        </div>
      </div>
      <div
        className="decade-viewport"
        ref={viewportRef}
        role="region"
        aria-label="VICMACH company timeline"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <div className="decade-track">
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
