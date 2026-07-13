"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { homeHeroScenes } from "@/data/home-hero";
import { stats } from "@/data/site";

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeScene = homeHeroScenes[activeIndex];

  useEffect(() => {
    if (
      paused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 640px)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % homeHeroScenes.length);
    }, 9000);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="home-hero home-hero-conversion"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-scene-media" aria-live="off">
        {homeHeroScenes.map((scene, index) => (
          <div
            className={`hero-media-layer ${index === activeIndex ? "is-active" : ""}`}
            id={`hero-scene-${scene.id}`}
            key={scene.id}
          >
            {scene.media.type === "image" ? (
              <Image
                src={scene.media.src}
                alt={scene.media.alt}
                fill
                priority={index === 0}
                sizes="100vw"
              />
            ) : index === activeIndex ? (
              <video autoPlay muted loop playsInline poster={scene.media.poster} aria-label={scene.media.alt}>
                <source src={scene.media.src} type="video/mp4" />
              </video>
            ) : null}
          </div>
        ))}
      </div>
      <div className="home-hero-overlay" />

      <div className="container home-hero-content">
        <div className="hero-copy hero-scene-copy" key={activeScene.id}>
          <p className="eyebrow">{activeScene.eyebrow}</p>
          <h1>{activeScene.title}</h1>
          <p>{activeScene.text}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={activeScene.primaryCta.href}>
              {activeScene.primaryCta.label} <ArrowRight size={18} aria-hidden />
            </Link>
            <Link className="button button-hero-secondary" href={activeScene.secondaryCta.href}>
              {activeScene.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="container hero-scene-tabs" role="tablist" aria-label="VICMACH project delivery strengths">
        {homeHeroScenes.map((scene, index) => (
          <button
            className={index === activeIndex ? "is-active" : undefined}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`hero-scene-${scene.id}`}
            onClick={() => setActiveIndex(index)}
            key={scene.id}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{scene.label}</strong>
            <small>{scene.tabText}</small>
          </button>
        ))}
      </div>

      <div className="hero-data-strip">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
