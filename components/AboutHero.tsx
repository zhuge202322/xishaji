import Image from "next/image";
import { AboutNav } from "./AboutNav";

type AboutHeroProps = {
  current: string;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

export function AboutHero({ current, eyebrow, title, text, image, imageAlt }: AboutHeroProps) {
  return (
    <>
      <section className="about-page-hero">
        <Image src={image} alt={imageAlt} fill sizes="100vw" priority />
        <div className="about-page-hero-shade" />
        <div className="container about-page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </section>
      <AboutNav current={current} />
    </>
  );
}
