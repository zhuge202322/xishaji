import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Cog,
  Factory,
  FileCheck2,
  Gem,
  Globe2,
  Hammer,
  Handshake,
  Mountain,
  Settings2,
  ShieldCheck,
  Truck,
  Users2,
  Waves,
  Wrench
} from "lucide-react";

export const company = {
  brand: "VICMACH",
  legalName: "Henan Victory Machinery Co., Ltd.",
  cnName: "Henan Yingpai Intelligent Equipment Co., Ltd.",
  indonesiaName: "PT. HEAVY VICMACH MACHINERY",
  phone: "+86 137 0088 2178",
  email: "vicmach2019@gmail.com",
  headquarters: "No.16, Industrial Road, Erqi District, Zhengzhou, Henan, China",
  indonesiaOffice:
    "Ebony Island, Ruko Soho Rodeo Drive 2 No.010, Kamal Muara, Penjaringan, North Jakarta, Indonesia",
  vietnamOffice: "Louis City, Hoang Mai District, Hanoi, Vietnam",
  founded: "2019",
  patents: "25+",
  projects: "100+"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "One-stop Plant Service", href: "/one-stop-service" },
  { label: "Ore Solutions", href: "/ore-solutions" },
  { label: "Equipment Center", href: "/equipment" },
  { label: "Projects", href: "/projects" },
  { label: "News Center", href: "/news" },
  { label: "Contact Us", href: "/contact" }
];

export const solutionLinks = [
  { label: "Sand Making", href: "/solutions/sand-making" },
  { label: "Crushing", href: "/solutions/crushing" },
  { label: "Mineral Processing", href: "/solutions/mineral-processing" },
  { label: "Grinding & Milling", href: "/solutions/grinding-milling" }
];

export const equipmentGroups = [
  {
    title: "Crushing & Screening",
    href: "/equipment#crushing-screening",
    text: "Primary, secondary, shaping, feeding, and screening equipment for hard rock and aggregate plants.",
    items: [
      "HST single-cylinder cone crusher",
      "CS multi-cylinder cone crusher",
      "C series impact crusher",
      "PF impact crusher",
      "PCZ/X heavy hammer crusher",
      "VSI sand maker",
      "YK vibrating screen",
      "HD / HD-S heavy vibrating screen",
      "VHS three-axis elliptical screen",
      "GS heavy bar screen",
      "ZSG heavy linear screen",
      "FYB square tumbler screen",
      "TS high-frequency dewatering screen",
      "Trommel screen"
    ]
  },
  {
    title: "Grinding & Classification",
    href: "/equipment#grinding-classification",
    text: "Milling and particle-size control systems for ore liberation and powder preparation.",
    items: [
      "High-efficiency autogenous mill",
      "Grid-type ball mill",
      "Overflow ball mill",
      "Rod mill",
      "Dry ball mill",
      "Long-cylinder ball mill",
      "Hydrocyclone",
      "Spiral classifier",
      "Cyclone powder separator"
    ]
  },
  {
    title: "Beneficiation Equipment",
    href: "/equipment#beneficiation-equipment",
    text: "Gravity, flotation, and magnetic separation equipment for metallic and nonmetallic ores.",
    items: [
      "SF mechanical agitation flotation cell",
      "XCF air inflation flotation cell",
      "KYF air inflation flotation cell",
      "Diaphragm jig",
      "Sawtooth wave jig",
      "Centrifugal concentrator",
      "Bowl concentrator",
      "Shaking table",
      "Spiral chute",
      "CT permanent magnetic drum separator",
      "High-gradient magnetic separator",
      "Permanent magnetic pulley"
    ]
  },
  {
    title: "Thickening & Dewatering",
    href: "/equipment#thickening-dewatering",
    text: "Concentrate and tailings water-control equipment for stable downstream handling.",
    items: [
      "Hydraulic center-drive high-efficiency thickener",
      "Peripheral drive thickener",
      "Deep cone thickener",
      "Ceramic vacuum filter",
      "Disc vacuum filter",
      "Filter press",
      "TS high-frequency dewatering screen"
    ]
  },
  {
    title: "Supporting Systems",
    href: "/equipment#supporting-systems",
    text: "Plant auxiliary systems connecting crushing, milling, separation, dosing, and discharge.",
    items: [
      "Belt conveyor",
      "High-efficiency agitation tank",
      "Slurry lifting agitation tank",
      "Standard agitation tank",
      "Reagent agitation tank"
    ]
  },
  {
    title: "Wet Washing",
    href: "/equipment#wet-washing",
    text: "Ore washing, sand washing, scrubbing, recovery, and mud-water treatment systems.",
    items: [
      "RX series ore washer",
      "Spiral sand washer",
      "Wheel sand washer",
      "Sand washing, dewatering and recovery unit",
      "Fine sand recovery machine",
      "Rotary ore washer",
      "Scrubber"
    ]
  }
];

export const newsItems = [
  {
    title: "What to prepare before requesting a crushing plant quotation",
    category: "Procurement Guide",
    text: "Material hardness, feed size, target capacity, final grading, site layout, and power conditions help engineers select the right crushing and screening route.",
    href: "/contact"
  },
  {
    title: "How ore samples shape a beneficiation process flow",
    category: "Ore Processing",
    text: "Recovery targets depend on mineral composition, liberation size, mud content, and water conditions, so sample testing and process review should happen before model selection.",
    href: "/ore-solutions"
  },
  {
    title: "Factory visit checklist for overseas machinery buyers",
    category: "Supplier Verification",
    text: "Workshop scale, equipment stock, inspection routines, certificates, export support, and service response are practical signals for judging supplier reliability.",
    href: "/factory-visit"
  },
  {
    title: "Why washing and water recovery matter in sand production",
    category: "Sand & Aggregate",
    text: "Integrated washing, dewatering, fine recovery, and mud-water treatment help control finished sand quality while reducing site discharge pressure.",
    href: "/equipment#wet-washing"
  }
];

export const oreSolutionGroups = [
  {
    title: "Precious & Polymetallic",
    href: "/ore-solutions#precious-polymetallic",
    text: "Gold, lead-zinc-silver, and tailings reprocessing flows combining crushing, grinding, gravity, flotation, and leaching routes.",
    ores: ["Gold ore", "Lead-zinc-silver ore", "Tailings reprocessing"]
  },
  {
    title: "Nonferrous & Rare Metals",
    href: "/ore-solutions#nonferrous-rare",
    text: "Copper, tin, tungsten, tantalum, niobium, lithium, and molybdenum projects configured around liberation and recovery targets.",
    ores: ["Copper ore", "Tin-tungsten-tantalum-niobium ore", "Lithium ore", "Molybdenum ore"]
  },
  {
    title: "Ferrous Metals",
    href: "/ore-solutions#ferrous-metals",
    text: "Iron, manganese, and chromite processing with washing, gravity, magnetic separation, flotation, and tailings recovery options.",
    ores: ["Iron ore magnetic separation", "Manganese ore", "Chromite ore"]
  },
  {
    title: "Nonmetallic Minerals",
    href: "/ore-solutions#nonmetallic-minerals",
    text: "Quartz, graphite, fluorite, feldspar, and barite purification routes for industrial mineral markets.",
    ores: ["Quartz / silica", "Graphite", "Fluorite", "Feldspar", "Barite"]
  }
];

export const stats = [
  { value: "100+", label: "Full-chain mining projects" },
  { value: "25+", label: "National patents" },
  { value: "2019", label: "Independent VICMACH launch" },
  { value: "3", label: "Regional service hubs" }
];

export const categories = [
  {
    title: "Sand Making",
    href: "/solutions/sand-making",
    text: "VSI sand makers, screening, washing, and fine recovery systems for high-quality aggregates.",
    icon: Mountain,
    image: "/images/workshop-line.webp"
  },
  {
    title: "Crushing",
    href: "/solutions/crushing",
    text: "Jaw, cone, impact, and modular crushing plants for demanding quarry and mining sites.",
    icon: Hammer,
    image: "/images/workshop-wide.webp"
  },
  {
    title: "Mineral Processing",
    href: "/solutions/mineral-processing",
    text: "Gravity separation, flotation, magnetic separation, and complete beneficiation lines.",
    icon: Gem,
    image: "/images/product-inspection.webp"
  },
  {
    title: "Grinding & Milling",
    href: "/solutions/grinding-milling",
    text: "Ball mills, classifiers, and powder processing systems calibrated for stable output.",
    icon: Cog,
    image: "/images/grinding-equipment.webp"
  },
  {
    title: "Building Materials",
    href: "/solutions/sand-making",
    text: "Integrated processing equipment for aggregates, cement auxiliaries, lime, and gypsum lines.",
    icon: Building2,
    image: "/images/factory-aerial.webp"
  },
  {
    title: "Washing & Recovery",
    href: "/solutions/sand-making",
    text: "Sand washing, sludge water treatment, and environmental EPC packages for cleaner plants.",
    icon: Waves,
    image: "/images/washing-equipment.webp"
  }
];

export type Product = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  icon: typeof Hammer;
  metrics: { value: string; label: string }[];
  process: { step: string; title: string; text: string }[];
  highlights: { title: string; text: string; icon: typeof ShieldCheck }[];
  equipment: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "sand-making",
    eyebrow: "Sand and Aggregate EPC",
    title: "High-Performance Sand Making Systems",
    intro:
      "Complete crushing, shaping, screening, washing, and water treatment lines for manufactured sand and premium aggregates.",
    heroImage: "/images/workshop-line.webp",
    heroAlt: "VICMACH sand washing and aggregate equipment in the manufacturing workshop",
    icon: Mountain,
    metrics: [
      { value: "30-500", label: "TPH capacity range" },
      { value: "0-5mm", label: "Finished sand grading" },
      { value: "Closed", label: "Water recycling loop" }
    ],
    process: [
      {
        step: "01",
        title: "Raw Feeding",
        text: "Controlled input of granite, basalt, limestone, or river pebble through heavy-duty feeders."
      },
      {
        step: "02",
        title: "Multi-Stage Crushing",
        text: "Jaw and cone crushing prepare stable feed size before precise shaping."
      },
      {
        step: "03",
        title: "VSI Sand Shaping",
        text: "Vertical shaft impact technology improves particle shape and finished aggregate quality."
      },
      {
        step: "04",
        title: "Screening & Washing",
        text: "High-frequency screens, washers, and recovery units control grading and reduce waste."
      }
    ],
    highlights: [
      {
        title: "EPC Output",
        text: "From process design to installation, commissioning, and operator training.",
        icon: Factory
      },
      {
        title: "Cleaner Production",
        text: "Integrated water recovery and sludge treatment reduce site discharge pressure.",
        icon: Waves
      },
      {
        title: "Stable Quality",
        text: "Process control focuses on particle shape, powder content, and finished grading.",
        icon: BadgeCheck
      }
    ],
    equipment: ["VSI sand maker", "Jaw crusher", "Cone crusher", "Vibrating screen", "Sand washer", "Fine recovery unit"],
    specs: [
      { label: "Applications", value: "Concrete aggregate, highway, railway, commercial mixing plants" },
      { label: "Materials", value: "Granite, basalt, limestone, pebble, tailings" },
      { label: "Service Scope", value: "Survey, layout, equipment, installation, commissioning" }
    ]
  },
  {
    slug: "crushing",
    eyebrow: "High-Capacity Systems",
    title: "Crushing & Screening Solutions",
    intro:
      "Modular primary, secondary, and tertiary crushing lines engineered for hard rock, metal ore, and aggregate production.",
    heroImage: "/images/workshop-wide.webp",
    heroAlt: "Heavy crushing and screening equipment on VICMACH production floor",
    icon: Hammer,
    metrics: [
      { value: "98%", label: "Target uptime reliability" },
      { value: "1500mm", label: "Maximum feed size" },
      { value: "24/7", label: "Field support" }
    ],
    process: [
      {
        step: "01",
        title: "Primary Crushing",
        text: "Heavy-duty jaw and gyratory configurations handle massive feed sizes with maximum reliability."
      },
      {
        step: "02",
        title: "Secondary Reduction",
        text: "Cone and impact crushers tune product size, shape, and throughput."
      },
      {
        step: "03",
        title: "Screening",
        text: "Vibrating screens classify products and return oversize material to the circuit."
      },
      {
        step: "04",
        title: "Modular Expansion",
        text: "Containerized and skid-mounted modules scale with future capacity requirements."
      }
    ],
    highlights: [
      {
        title: "Structural Reliability",
        text: "Heavy frames, wear parts, and drive systems are selected for high-load sites.",
        icon: ShieldCheck
      },
      {
        title: "Modular Architecture",
        text: "Integrate with existing flows or create a new plant in a shorter deployment cycle.",
        icon: Settings2
      },
      {
        title: "Output Control",
        text: "Process loops improve final grading, reduce recirculation waste, and protect downstream equipment.",
        icon: Wrench
      }
    ],
    equipment: ["Jaw crusher", "Cone crusher", "Impact crusher", "Hammer crusher", "Vibrating feeder", "Vibrating screen"],
    specs: [
      { label: "Applications", value: "Quarry, metal ore, aggregate, infrastructure materials" },
      { label: "Plant Modes", value: "Stationary, modular, and mobile configurations" },
      { label: "Engineering Focus", value: "Feed stability, wear life, throughput, maintenance access" }
    ]
  },
  {
    slug: "mineral-processing",
    eyebrow: "Beneficiation Lines",
    title: "Mineral Processing & Flotation",
    intro:
      "Complete beneficiation systems for gold, iron, copper, and mixed ores, designed around recovery, grade, and operating stability.",
    heroImage: "/images/product-inspection.webp",
    heroAlt: "VICMACH engineers inspecting heavy mineral processing machinery",
    icon: Gem,
    metrics: [
      { value: "Au/Cu/Fe", label: "Core ore categories" },
      { value: "Lab-to-site", label: "Process validation" },
      { value: "Full line", label: "Turnkey integration" }
    ],
    process: [
      {
        step: "01",
        title: "Ore Testing",
        text: "Material samples and site data define the final process route before equipment selection."
      },
      {
        step: "02",
        title: "Grinding & Classification",
        text: "Controlled liberation prepares valuable minerals for efficient separation."
      },
      {
        step: "03",
        title: "Separation",
        text: "Gravity, flotation, magnetic, and leaching modules are combined for target recovery."
      },
      {
        step: "04",
        title: "Tailings & Water",
        text: "Tailings handling and process water recovery support safer and cleaner operations."
      }
    ],
    highlights: [
      {
        title: "Recovery-Oriented Design",
        text: "Process choices are built around ore properties, target grade, and operating cost.",
        icon: BadgeCheck
      },
      {
        title: "Automation Ready",
        text: "Instrumentation and control plans can support dosing, level, density, and flow monitoring.",
        icon: Settings2
      },
      {
        title: "On-Site Training",
        text: "VICMACH supports commissioning, operator training, and long-term parts planning.",
        icon: Globe2
      }
    ],
    equipment: ["Ball mill", "Spiral classifier", "Flotation cell", "Magnetic separator", "Shaking table", "Thickener"],
    specs: [
      { label: "Applications", value: "Gold ore, copper ore, iron ore, manganese, lead-zinc" },
      { label: "Process Routes", value: "Gravity, flotation, magnetic separation, leaching" },
      { label: "Deliverables", value: "Flowchart, layout, equipment package, commissioning support" }
    ]
  },
  {
    slug: "grinding-milling",
    eyebrow: "Powder Processing",
    title: "Precision Grinding & Milling",
    intro:
      "Grinding systems for mineral powder production, with stable particle distribution and rugged mechanical design.",
    heroImage: "/images/grinding-equipment.webp",
    heroAlt: "Large VICMACH grinding equipment in blue and yellow finish",
    icon: Cog,
    metrics: [
      { value: "325-2500", label: "Mesh output range" },
      { value: "Closed", label: "Air classification circuit" },
      { value: "Low", label: "Wear-focused maintenance" }
    ],
    process: [
      {
        step: "01",
        title: "Crushing Preparation",
        text: "Feed material is reduced to a controlled size for stable mill operation."
      },
      {
        step: "02",
        title: "Grinding",
        text: "Ball mills and powder mills deliver controlled particle reduction."
      },
      {
        step: "03",
        title: "Classification",
        text: "Air classifiers separate finished powder and return coarse particles to the mill."
      },
      {
        step: "04",
        title: "Collection",
        text: "Dust collection, storage, and packing systems keep production efficient and cleaner."
      }
    ],
    highlights: [
      {
        title: "Particle Control",
        text: "Closed-circuit process design keeps final powder distribution consistent.",
        icon: BadgeCheck
      },
      {
        title: "Energy Planning",
        text: "Frequency control and process matching help reduce unnecessary power consumption.",
        icon: Settings2
      },
      {
        title: "Maintenance Access",
        text: "The line is arranged for wear inspection, liner replacement, and safe service routines.",
        icon: Wrench
      }
    ],
    equipment: ["Ball mill", "Raymond mill", "Ultrafine mill", "Air classifier", "Cyclone collector", "Dust collector"],
    specs: [
      { label: "Applications", value: "Calcite, barite, limestone, dolomite, talc, gypsum" },
      { label: "Output", value: "Coarse powder to ultra-fine mineral powder" },
      { label: "System Scope", value: "Feeding, grinding, classifying, collecting, storage" }
    ]
  }
];

export const timeline = [
  {
    year: "2010",
    title: "Mining machinery foundation",
    text: "The core technical team took root in the mining machinery field through Zhengke Machinery, focusing on crushing, beneficiation, and washing systems."
  },
  {
    year: "2010-2019",
    title: "Complete process capability",
    text: "The team built a full process chain from crushing and grinding to flotation and gravity separation, forming a mature heavy-equipment manufacturing base."
  },
  {
    year: "2019",
    title: "VICMACH independent launch",
    text: "Henan Yingpai Intelligent Equipment Co., Ltd. was registered in Zhengzhou, integrating R&D, production, and global sales."
  },
  {
    year: "2020",
    title: "Manufacturing base upgrade",
    text: "Operations and production moved to No.16, Industrial Road, Erqi District, strengthening the company's manufacturing foundation."
  },
  {
    year: "2021",
    title: "International expansion",
    text: "The company accelerated overseas business with export platforms and broader international market coverage."
  },
  {
    year: "2022",
    title: "Dual qualification recognition",
    text: "VICMACH was recognized as a national high-tech enterprise and technology-based SME."
  },
  {
    year: "2024",
    title: "Patent and talent growth",
    text: "The company reached 25 national patents and expanded university cooperation for technical talent development."
  },
  {
    year: "2025-2026",
    title: "Full-line EPC output",
    text: "VICMACH advanced toward international full-line delivery in sand production, washing, water treatment, and solid waste recycling equipment."
  }
];

export const certifications = [
  { title: "High-Tech Enterprise", text: "National recognition for sustained R&D and intelligent equipment innovation." },
  { title: "Technology-Based SME", text: "Certified technical enterprise with focused development capability." },
  { title: "CE Compliant", text: "Export-ready product certification support for international projects." },
  { title: "25+ Patents", text: "Accumulated national patents across process equipment and manufacturing systems." }
];

export const trustProofs = [
  {
    title: "Certified Manufacturer",
    text: "High-tech enterprise credentials, technology-based SME recognition, and export-ready certification files are available for project review.",
    icon: FileCheck2
  },
  {
    title: "Visible Factory Floor",
    text: "Real workshop photos and videos show assembly, equipment stock, inspection, office, and reception scenes from the Zhengzhou base.",
    icon: Factory
  },
  {
    title: "Global Cooperation",
    text: "Customer visits, overseas meetings, and branch support in Indonesia and Vietnam strengthen communication after delivery.",
    icon: Handshake
  },
  {
    title: "Process Accountability",
    text: "From samples and flowcharts to equipment layout, commissioning, and training, the same engineering team supports the full project path.",
    icon: ClipboardCheck
  }
];

export const manufacturingCapabilities = [
  {
    title: "Large Workshop Assembly",
    text: "Heavy equipment is assembled and staged inside a wide-span workshop designed for complete lines and oversized components.",
    image: "/images/gallery/workshop-assembly-01.webp",
    icon: Factory,
    points: ["Screening and washing equipment stock", "Heavy fabrication and assembly area", "Line-ready equipment staging"]
  },
  {
    title: "Equipment Inspection",
    text: "Core machines are reviewed before delivery so the recommended process route can translate into reliable site performance.",
    image: "/images/product-inspection.webp",
    icon: ClipboardCheck,
    points: ["Pre-delivery checks", "Component fit review", "Technical handover support"]
  },
  {
    title: "Client Reception",
    text: "International customers can review equipment, meet engineers, and confirm process details through factory visits and technical meetings.",
    image: "/images/gallery/client-visit-04.webp",
    icon: Users2,
    points: ["Factory tour", "Process discussion", "Project documentation review"]
  },
  {
    title: "Export Coordination",
    text: "The company combines manufacturing, export platforms, and regional branches to support overseas project execution.",
    image: "/images/gallery/client-visit-07.webp",
    icon: Truck,
    points: ["Overseas business channels", "Indonesia and Vietnam presence", "Logistics and parts planning"]
  }
];

export const gallerySections = [
  {
    title: "Workshop & Manufacturing",
    text: "Real production-floor views from the Zhengzhou manufacturing base.",
    items: [
      { src: "/images/gallery/workshop-assembly-01.webp", alt: "VICMACH team and equipment in the manufacturing workshop" },
      { src: "/images/gallery/workshop-assembly-02.webp", alt: "Blue heavy equipment lined up inside the VICMACH workshop" },
      { src: "/images/gallery/workshop-assembly-03.webp", alt: "VICMACH screening and washing equipment assembly area" },
      { src: "/images/gallery/workshop-assembly-04.webp", alt: "Sand washing equipment staged for production line delivery" },
      { src: "/images/gallery/workshop-assembly-05.webp", alt: "Wide workshop view with multiple production-line machines" }
    ]
  },
  {
    title: "Client Visits & Cooperation",
    text: "Customer meetings, overseas cooperation, exhibitions, and technical reviews.",
    items: [
      { src: "/images/gallery/client-visit-01.webp", alt: "Technical discussion with project documents and VICMACH materials" },
      { src: "/images/gallery/client-visit-02.webp", alt: "International visitors holding a VICMACH banner" },
      { src: "/images/gallery/client-visit-03.webp", alt: "VICMACH team meeting customers at an exhibition booth" },
      { src: "/images/gallery/client-visit-05.webp", alt: "Client discussion around project plans and equipment selection" },
      { src: "/images/gallery/client-visit-08.webp", alt: "Overseas customer visit and handover photo" }
    ]
  },
  {
    title: "Office & Support Team",
    text: "Daily office, documentation, and engineering support scenes.",
    items: [
      { src: "/images/gallery/factory-office-01.webp", alt: "VICMACH office support team at workstations" },
      { src: "/images/gallery/factory-office-02.webp", alt: "VICMACH office staff preparing project documents" },
      { src: "/images/service-team.webp", alt: "VICMACH team photo in front of production equipment" }
    ]
  }
];

export const mediaVideos = [
  {
    title: "Factory Workshop Tour",
    text: "A direct look at VICMACH production-floor scale, equipment staging, and workshop environment.",
    src: "/videos/factory-workshop-tour.mp4",
    poster: "/images/workshop-wide.webp",
    meta: "Workshop video"
  },
  {
    title: "Production Line Walkthrough",
    text: "Video material showing equipment arrangement and line-level manufacturing readiness.",
    src: "/videos/production-line-walkthrough.mp4",
    poster: "/images/gallery/workshop-assembly-03.webp",
    meta: "Manufacturing video"
  },
  {
    title: "Equipment Close-Up Demo",
    text: "Close-range machinery footage for buyers who need to inspect build quality and component scale.",
    src: "/videos/equipment-closeup-demo.mp4",
    poster: "/images/grinding-equipment.webp",
    meta: "Equipment video"
  },
  {
    title: "Office & Reception",
    text: "Daily office and customer reception scenes that support project communication and documentation.",
    src: "/videos/office-and-reception.mp4",
    poster: "/images/gallery/factory-office-02.webp",
    meta: "Team video"
  }
];

export const certificateFiles = [
  {
    title: "CE Product Certificate",
    text: "Certificate covering VICMACH mining machinery products for international project review.",
    category: "Product Certification",
    pdf: "/certificates/product-ce-certificate.pdf",
    thumbnail: "/images/certificates/product-ce-certificate.webp"
  },
  {
    title: "High-Tech Enterprise & System Certificate",
    text: "Qualification file supporting the company's R&D and intelligent equipment capability.",
    category: "Company Qualification",
    pdf: "/certificates/system-high-tech-certificate.pdf",
    thumbnail: "/images/certificates/system-high-tech-certificate.webp"
  },
  {
    title: "Mineral Processing Line CE MD/EMC",
    text: "Attestation of conformity for mineral processing line machinery and EMC requirements.",
    category: "Line Certification",
    pdf: "/certificates/mineral-processing-line-ce-md-emc.pdf",
    thumbnail: "/images/certificates/mineral-processing-line-ce-md-emc.webp"
  }
];

export const projects = [
  {
    title: "500 TPH Aggregate Production Line",
    location: "Southeast Asia",
    material: "Granite and basalt",
    scope: "Crushing, VSI shaping, screening, washing, and water recovery",
    image: "/images/workshop-wide.webp"
  },
  {
    title: "Gold Ore Beneficiation Plant",
    location: "Africa",
    material: "Low-grade gold ore",
    scope: "Grinding, gravity concentration, flotation, and commissioning support",
    image: "/images/product-inspection.webp"
  },
  {
    title: "Quartz Sand Processing Project",
    location: "Central Asia",
    material: "Quartz and silica-bearing rock",
    scope: "Fine crushing, shaping, washing, classification, and finished sand control",
    image: "/images/washing-equipment.webp"
  }
];

export const factoryTour = [
  {
    title: "Manufacturing Workshop",
    text: "See large-format fabrication, welding, assembly, and equipment inspection workflows on the production floor.",
    image: "/images/workshop-line.webp"
  },
  {
    title: "Engineering Review",
    text: "Discuss process flow, material characteristics, capacity planning, and equipment layout with technical engineers.",
    image: "/images/engineering-meeting.webp"
  },
  {
    title: "Reception & Logistics",
    text: "VICMACH supports overseas partners with visit scheduling, airport pickup coordination, and bilingual technical discussion.",
    image: "/images/service-team.webp"
  }
];
