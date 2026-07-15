export type NewsArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type NewsArticleLink = {
  label: string;
  href: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  publishedAt: string;
  publishedLabel: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  lead: string;
  sections: NewsArticleSection[];
  takeaways: string[];
  relatedLinks: NewsArticleLink[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "crushing-plant-quotation-checklist",
    title: "What to Prepare Before Requesting a Crushing Plant Quotation",
    category: "Procurement Guide",
    summary:
      "Material hardness, feed size, target capacity, final grading, site layout, and power conditions help engineers select the right crushing and screening route.",
    publishedAt: "2026-07-08",
    publishedLabel: "July 8, 2026",
    readTime: "6 min read",
    heroImage: "/images/hero-scenes/epc-delivery.webp?v=5c64568c",
    heroAlt: "Complete aggregate crushing and screening plant configured for project delivery",
    lead:
      "A useful crushing plant quotation is more than a machine price. It should define a complete process route, the duty of each machine, expected product grading, installed power, supporting structures, and the limits of supply. Clear project inputs allow an engineering team to prepare that level of proposal from the beginning.",
    sections: [
      {
        heading: "Start With Representative Material Data",
        paragraphs: [
          "Identify the material and provide any available laboratory or operating data. Compressive strength, abrasiveness, clay content, moisture, and bulk density influence crusher type, wear-part selection, screening efficiency, and whether pre-washing is required.",
          "The maximum feed size should describe the largest regular lump entering the plant, not only the average size. Oversized rock can change the required feed opening, feeder arrangement, and primary crushing stage."
        ],
        bullets: [
          "Material name and source",
          "Maximum and typical feed size",
          "Moisture, clay, and visible contamination",
          "Hardness or compressive-strength data when available"
        ]
      },
      {
        heading: "Define Capacity and Finished Products",
        paragraphs: [
          "State whether the requested capacity is the hourly feed rate or the saleable finished-product output. The difference matters when the circuit includes recirculating load, removal of soil, or multiple product fractions.",
          "List each required output size and its expected proportion. A plant making one road-base product is configured differently from a plant producing several commercial aggregates or manufactured sand with strict shape requirements."
        ]
      },
      {
        heading: "Describe the Site and Utility Conditions",
        paragraphs: [
          "Site elevation, available footprint, terrain, climate, dust restrictions, and local foundation conditions affect the layout and supporting structures. A simple site drawing with approximate dimensions is more useful than a general statement that space is sufficient.",
          "Confirm the available electrical frequency, voltage, and power limit. Also note water availability, fuel constraints, access-road limits, and the preferred control level, from local panels to a centralized PLC system."
        ]
      },
      {
        heading: "Ask for a Comparable Scope of Supply",
        paragraphs: [
          "When comparing suppliers, request a clear equipment list, process flow, motor power schedule, layout assumptions, wear-part allowance, delivery boundary, installation responsibility, and commissioning scope. This prevents a low initial price from hiding major exclusions.",
          "Share the same project inputs with every shortlisted supplier. Comparable inputs produce proposals that can be evaluated on process logic, equipment duty, service responsibility, and total project value."
        ]
      }
    ],
    takeaways: [
      "Use representative material and feed-size data.",
      "Separate feed capacity from saleable output capacity.",
      "List every required finished-product fraction.",
      "Confirm site, power, water, and delivery constraints.",
      "Compare complete scopes, not isolated machine prices."
    ],
    relatedLinks: [
      { label: "Browse crushing equipment", href: "/equipment" },
      { label: "Review crushing solutions", href: "/solutions/crushing" },
      { label: "Send project parameters", href: "/contact#inquiry-title" }
    ]
  },
  {
    slug: "ore-samples-beneficiation-process-flow",
    title: "How Ore Samples Shape a Beneficiation Process Flow",
    category: "Ore Processing",
    summary:
      "Recovery targets depend on mineral composition, liberation size, mud content, and water conditions, so sample testing and process review should happen before model selection.",
    publishedAt: "2026-06-26",
    publishedLabel: "June 26, 2026",
    readTime: "7 min read",
    heroImage: "/images/ore-docx/gold-ore-02.jpg",
    heroAlt: "Spiral chute equipment used in a gravity beneficiation process",
    lead:
      "Beneficiation equipment should follow the ore, not the other way around. Two deposits carrying the same valuable mineral can require different crushing, grinding, classification, gravity, magnetic, flotation, or leaching routes because the mineral association and liberation behavior are different.",
    sections: [
      {
        heading: "Build a Representative Sample",
        paragraphs: [
          "A test sample should reflect the expected mining zones, grades, oxidation levels, and clay content of future plant feed. A small hand-picked high-grade sample can produce attractive test results while failing to represent normal operation.",
          "Record where each portion was collected and how it was combined. For variable deposits, separate test campaigns may be needed before a blended design basis can be established."
        ],
        bullets: [
          "Deposit zones and expected grade range",
          "Oxide, transition, and fresh-ore proportions",
          "Clay, weathering, and moisture conditions",
          "Planned mining blend and annual variability"
        ]
      },
      {
        heading: "Understand Mineralogy and Liberation",
        paragraphs: [
          "Mineralogical analysis identifies valuable minerals, gangue minerals, oxidation products, and harmful elements. Liberation tests then show the particle size at which valuable minerals become sufficiently separate for concentration.",
          "Grinding finer than necessary increases power use and can create slimes that reduce downstream recovery. Grinding too coarsely leaves locked particles that gravity or flotation equipment cannot separate effectively."
        ]
      },
      {
        heading: "Select Tests Around the Ore Response",
        paragraphs: [
          "Gravity separation is evaluated when density differences and liberated coarse particles make it practical. Magnetic separation depends on magnetic susceptibility. Flotation requires reagent and pulp-condition testing, while leaching requires careful review of mineralogy, consumption, residence time, and environmental controls.",
          "The test program should compare technically credible routes rather than force every ore through the same standard flowsheet."
        ]
      },
      {
        heading: "Translate Test Results Into Plant Design",
        paragraphs: [
          "Engineering uses recovery curves, mass yield, concentrate grade, grind size, settling behavior, and water balance to size the main equipment and recirculating loads. The resulting process flow should also allow sampling, control, maintenance, and future tuning.",
          "Before equipment selection, provide the target throughput, feed-size distribution, water quality, available utilities, concentrate requirements, and tailings-disposal concept alongside the test data."
        ]
      }
    ],
    takeaways: [
      "Representative sampling is the foundation of reliable testwork.",
      "Mineralogy and liberation determine the credible process routes.",
      "Avoid unnecessary overgrinding and slime generation.",
      "Use test results to size equipment and circulating loads.",
      "Include water, tailings, and concentrate requirements early."
    ],
    relatedLinks: [
      { label: "Explore ore solutions", href: "/ore-solutions" },
      { label: "View gold ore processing", href: "/ore-solutions/gold-ore" },
      { label: "Request a process review", href: "/contact#inquiry-title" }
    ]
  },
  {
    slug: "factory-visit-checklist-overseas-buyers",
    title: "Factory Visit Checklist for Overseas Machinery Buyers",
    category: "Supplier Verification",
    summary:
      "Workshop scale, equipment stock, inspection routines, certificates, export support, and service response are practical signals for judging supplier reliability.",
    publishedAt: "2026-06-12",
    publishedLabel: "June 12, 2026",
    readTime: "6 min read",
    heroImage: "/images/gallery/client-visit-03.webp",
    heroAlt: "Overseas mining machinery buyers reviewing equipment during a factory visit",
    lead:
      "A factory visit should verify whether the supplier can convert a proposal into equipment that is manufactured, inspected, documented, shipped, installed, and supported. A prepared checklist keeps the visit focused on evidence rather than presentation alone.",
    sections: [
      {
        heading: "Confirm the Manufacturer and Its Scope",
        paragraphs: [
          "Verify the legal company name, operating address, export entity, and relationship between the sales team and manufacturing base. Ask which equipment is produced directly, which components are purchased, and which work is subcontracted.",
          "A capable supplier should explain its engineering, procurement, production, inspection, documentation, and after-sales responsibilities without ambiguity."
        ]
      },
      {
        heading: "Inspect Real Production Activity",
        paragraphs: [
          "Walk through material preparation, fabrication, machining, assembly, painting, testing, and storage areas where applicable. Look for active work orders, component identification, drawings, inspection records, and completed equipment rather than relying only on showroom samples.",
          "Discuss the production schedule for a project similar in scale to yours and identify the operations that control delivery time."
        ],
        bullets: [
          "Workshop lifting and assembly capacity",
          "Machining and fabrication resources",
          "Component traceability and work-order control",
          "Finished-equipment inspection and storage",
          "Packing and container-loading arrangements"
        ]
      },
      {
        heading: "Review Engineering and Quality Evidence",
        paragraphs: [
          "Ask to see representative process flows, general arrangement drawings, equipment data sheets, quality plans, certificates, and operating manuals. Confirm how revisions are approved and how final documents are handed over.",
          "For critical equipment, discuss material certificates, welding controls, dimensional checks, no-load testing, purchased-component brands, and the method used to close inspection findings."
        ]
      },
      {
        heading: "Test the Service Plan Before Ordering",
        paragraphs: [
          "Clarify who supports installation and commissioning, what the buyer must prepare, how remote troubleshooting works, and which spare parts are recommended for initial operation. Response responsibility should be documented before the contract is signed.",
          "End the visit with a written list of technical clarifications, open items, owners, and target dates. This turns factory evidence into decisions that can be reflected in the final proposal."
        ]
      }
    ],
    takeaways: [
      "Verify legal, sales, and manufacturing responsibilities.",
      "Inspect active production and traceable work orders.",
      "Review drawings, quality records, and certificates.",
      "Confirm packing, shipment, installation, and spare parts.",
      "Close the visit with a documented action list."
    ],
    relatedLinks: [
      { label: "Plan a factory visit", href: "/factory-visit" },
      { label: "Review company credentials", href: "/about/honors" },
      { label: "Contact the project team", href: "/contact#inquiry-title" }
    ]
  },
  {
    slug: "washing-water-recovery-sand-production",
    title: "Why Washing and Water Recovery Matter in Sand Production",
    category: "Sand and Aggregate",
    summary:
      "Integrated washing, dewatering, fine recovery, and mud-water treatment help control finished sand quality while reducing site discharge pressure.",
    publishedAt: "2026-05-29",
    publishedLabel: "May 29, 2026",
    readTime: "6 min read",
    heroImage: "/images/washing-equipment.webp",
    heroAlt: "Sand washing, dewatering, and fine recovery equipment arranged for production",
    lead:
      "Washing is not a single machine added at the end of a sand plant. It is a connected water and solids circuit that controls clay removal, fine-particle retention, product moisture, water reuse, and the volume of material sent to settling or filtration.",
    sections: [
      {
        heading: "Match Washing Intensity to the Feed",
        paragraphs: [
          "The amount and type of contamination determine whether simple rinsing is sufficient or whether scrubbing, classification, and staged washing are required. Plastic clay attached to aggregate surfaces needs different treatment from loose silt already dispersed in water.",
          "Feed grading and the desired cut point also influence the choice of wheel washers, spiral washers, screens, hydrocyclones, scrubbers, and attrition equipment."
        ]
      },
      {
        heading: "Control Fine Loss and Product Moisture",
        paragraphs: [
          "Uncontrolled overflow can carry saleable fine sand into the settling system. A fine recovery circuit uses classification and dewatering to return a controlled fraction to the product while rejecting excessive mud-sized particles.",
          "Dewatering screens reduce free moisture before stockpiling, helping the product drain faster and reducing water carried away from the process circuit."
        ],
        bullets: [
          "Target product grading and allowable fines",
          "Feed solids concentration and clay content",
          "Required stockpile moisture",
          "Expected variation during wet seasons"
        ]
      },
      {
        heading: "Design Water Recovery as Part of the Plant",
        paragraphs: [
          "Thickeners, settling tanks, flocculation systems, and filters separate process water from fine solids so that water can return to washing. The correct combination depends on flow rate, particle settling behavior, site area, climate, and discharge requirements.",
          "A stable return-water system reduces dependence on fresh water, but water quality must remain suitable for washing and classification. Excessive recirculated ultrafines can reduce efficiency and affect finished-product cleanliness."
        ]
      },
      {
        heading: "Provide the Data Needed for Circuit Selection",
        paragraphs: [
          "Share the feed capacity, grading curve, clay percentage, water availability, required product sizes, moisture target, and local discharge constraints. If possible, provide a representative sample for settling and washing tests.",
          "The proposal should show the complete water path, expected overflow, recovered fines, sludge handling, installed power, and the responsibility for civil tanks, pumps, and piping."
        ]
      }
    ],
    takeaways: [
      "Treat washing as a connected solids and water circuit.",
      "Select scrubbing intensity from actual contamination.",
      "Recover useful fines without returning excessive mud.",
      "Size water treatment from settling and flow behavior.",
      "Define tanks, pumps, piping, and sludge responsibility."
    ],
    relatedLinks: [
      { label: "View washing equipment", href: "/equipment#wet-washing" },
      { label: "Explore sand-making solutions", href: "/solutions/sand-making" },
      { label: "Request a washing circuit", href: "/contact#inquiry-title" }
    ]
  }
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
