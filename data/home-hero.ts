export type HomeHeroScene = {
  id: string;
  label: string;
  tabText: string;
  eyebrow: string;
  title: string;
  text: string;
  media:
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; poster: string; alt: string };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const homeHeroScenes: HomeHeroScene[] = [
  {
    id: "manufacturer-direct",
    label: "Manufacturer Direct",
    tabText: "R&D, production, and delivery under one team",
    eyebrow: "Source Manufacturer · Direct Accountability",
    title: "Direct From the Source. No Middle Layers.",
    text:
      "From R&D and manufacturing to commissioning and installation, one accountable team delivers stronger value for every mineral processing project.",
    media: {
      type: "image",
      src: "/images/hero-scenes/manufacturer-direct.webp?v=3fc25d35",
      alt: "VICMACH mineral processing equipment inside the manufacturing workshop"
    },
    primaryCta: { label: "Get Equipment Plan & Quote", href: "/contact#inquiry-title" },
    secondaryCta: { label: "Send Material Parameters", href: "/contact#inquiry-title" }
  },
  {
    id: "epc-delivery",
    label: "EPC Line Delivery",
    tabText: "Turnkey quality control from design to commissioning",
    eyebrow: "Process Design · Complete Equipment · EPC Delivery",
    title: "Turnkey EPC Delivery. Quality Controlled End to End.",
    text:
      "Process design, complete equipment manufacturing, installation, and commissioning come together in one turnkey project path.",
    media: {
      type: "image",
      src: "/images/hero-scenes/epc-delivery.webp?v=5c64568c",
      alt: "VICMACH turnkey crushing and mineral processing production line at a quarry"
    },
    primaryCta: { label: "Get EPC Solution & Quote", href: "/contact#inquiry-title" },
    secondaryCta: { label: "Send Site Requirements", href: "/contact#inquiry-title" }
  },
  {
    id: "custom-engineering",
    label: "Custom Engineering",
    tabText: "From ore testing to a line built for your site",
    eyebrow: "Ore Testing · Model Selection · Custom Development",
    title: "Custom Mineral Processing. No Blind Equipment Selection.",
    text:
      "From early ore testing to core equipment development, we build a high-output production line around your actual material, targets, and site conditions.",
    media: {
      type: "image",
      src: "/images/hero-scenes/custom-engineering.webp?v=035ff7f1",
      alt: "VICMACH engineers reviewing a customized mineral processing production line"
    },
    primaryCta: { label: "Request a Custom Process Route", href: "/contact#inquiry-title" },
    secondaryCta: { label: "Send Ore & Capacity Data", href: "/contact#inquiry-title" }
  }
];
