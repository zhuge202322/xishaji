export type OreDocxImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type OreProcessStep = {
  title: string;
  text: string;
};

export type OreProduct = {
  slug: string;
  title: string;
  shortTitle: string;
  originalTitle: string;
  category: string;
  categoryHref: string;
  summary: string;
  intro: string;
  sourceIntro: string;
  sourceNotes: string[];
  sourceDocument: string;
  processRoute: string;
  keyEquipment: string[];
  applications: string[];
  processSteps: OreProcessStep[];
  images: OreDocxImage[];
  relatedSlugs: string[];
};

export const oreProducts: OreProduct[] = [
  {
    "slug": "gold-ore",
    "title": "Gold Ore Processing",
    "shortTitle": "Gold Ore",
    "category": "Precious & Polymetallic",
    "categoryHref": "/ore-solutions#precious-polymetallic",
    "summary": "Process routes for placer and rock gold, combining screening, gravity concentration, flotation, cyanidation, CIP/CIL adsorption, and tailings recovery according to ore properties.",
    "intro": "Gold ore beneficiation depends strongly on the occurrence of gold and its association with pyrite, quartz, and other minerals. Placer gold usually favors gravity separation, while rock gold often needs grinding, flotation, cyanide leaching, or combined routes to improve recovery.",
    "processRoute": "Gravity separation, flotation, cyanidation, CIP/CIL, and combined gold recovery routes",
    "keyEquipment": [
      "Trommel screen",
      "YK vibrating screen",
      "Diaphragm jig",
      "Shaking table",
      "Centrifugal concentrator",
      "SF mechanical agitation flotation cell",
      "High-efficiency agitation tank",
      "Hydraulic center-drive high-efficiency thickener",
      "Filter press"
    ],
    "applications": [
      "Placer gold washing",
      "Rock gold flotation",
      "Gold CIL/CIP leaching",
      "Coarse gold pre-recovery"
    ],
    "processSteps": [
      {
        "title": "Screening and desliming",
        "text": "Placer gold flows use trommel screens, vibrating screens, and desliming equipment to break clay lumps and remove oversized waste before concentration."
      },
      {
        "title": "Gravity recovery",
        "text": "Jigs, shaking tables, spiral concentrators, and centrifugal concentrators recover coarse or free gold by density difference."
      },
      {
        "title": "Flotation enrichment",
        "text": "For sulphide-associated gold, grinding and flotation concentrate gold-bearing minerals before final recovery."
      },
      {
        "title": "Cyanidation and adsorption",
        "text": "CIP or CIL routes leach and adsorb dissolved gold in one controlled process for fine-grained or complex ores."
      }
    ],
    "originalTitle": "金矿",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "金矿是含有可经济利用金元素的矿物集合体，主要分为岩金矿和砂金矿。黄金具有极高的化学稳定性、优异的延展性和高导电性，在自然界中多以自然金形式存在，常与黄铁矿、石英等矿物共生。金矿的选矿高度依赖原矿性质：砂金矿多采用重选法，利用金的高比重特性，通过溜槽、跳汰机或摇床等设备进行分离；岩金矿则普遍采用浮选法或氰化浸出法，主要依靠球磨机进行细磨，配合浮选机、搅拌槽及活性炭吸附设备，实现金的高效回收。",
    "sourceNotes": [
      "重选选金：",
      "一般分为碎散、筛分、脱泥、选别等过程，碎散与筛分是将含金的泥团碎散并将不含金的大块砾石筛分的过程，主要设备有圆筒筛、振动筛等。",
      "脱泥是将对选别起干扰过程的细泥洗掉的过程，主要设备有各种规格的脱泥斗;砂金的选别通常是几种重选设备的联合作业，选用的重选设备主要有溜槽、跳汰机、鼓动溜槽、螺旋分选机、摇床、离心选矿机和圆锥选矿机等。",
      "浮选选金："
    ],
    "images": [
      {
        "src": "/images/ore-docx/gold-ore-01.jpg",
        "width": 1256,
        "height": 706,
        "alt": "Gold Ore process image from VICMACH ore document"
      },
      {
        "src": "/images/ore-docx/gold-ore-02.jpg",
        "width": 544,
        "height": 725,
        "alt": "Gold Ore process image from VICMACH ore document"
      },
      {
        "src": "/images/ore-docx/gold-ore-03.jpg",
        "width": 548,
        "height": 725,
        "alt": "Gold Ore process image from VICMACH ore document"
      },
      {
        "src": "/images/ore-docx/gold-ore-04.png",
        "width": 948,
        "height": 527,
        "alt": "Gold Ore process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "lead-zinc-silver-ore",
      "tailings-reprocessing"
    ]
  },
  {
    "slug": "lead-zinc-silver-ore",
    "title": "Lead-Zinc-Silver Polymetallic Ore",
    "shortTitle": "Lead-Zinc-Silver",
    "category": "Precious & Polymetallic",
    "categoryHref": "/ore-solutions#precious-polymetallic",
    "summary": "Selective flotation flows for lead, zinc, and silver-bearing polymetallic ore, with silver enrichment through lead or zinc concentrates and tailings value recovery.",
    "intro": "Lead-zinc-silver deposits contain closely associated galena, sphalerite, and silver minerals. The main processing route is flotation, supported by crushing, grinding, classification, concentrate dewatering, and tailings recovery.",
    "processRoute": "Crushing, grinding, lead-zinc selective flotation, precious metal enrichment, tailings recovery",
    "keyEquipment": [
      "Grid-type ball mill",
      "Overflow ball mill",
      "Spiral classifier",
      "SF mechanical agitation flotation cell",
      "XCF air inflation flotation cell",
      "KYF air inflation flotation cell",
      "Hydraulic center-drive high-efficiency thickener",
      "Filter press"
    ],
    "applications": [
      "Lead-silver concentrate",
      "Zinc concentrate",
      "Polymetallic flotation",
      "Sulphur and tailings recovery"
    ],
    "processSteps": [
      {
        "title": "Crushing and grinding",
        "text": "Multi-stage crushing and controlled grinding liberate galena, sphalerite, and silver-bearing minerals while reducing over-grinding losses."
      },
      {
        "title": "Selective flotation",
        "text": "A typical route suppresses zinc while floating lead-silver concentrate first, then activates and floats zinc minerals."
      },
      {
        "title": "Precious metal recovery",
        "text": "Silver and gold report into lead or zinc concentrates depending on mineral affinity, with gravity recovery used for coarse native silver where suitable."
      },
      {
        "title": "Tailings utilization",
        "text": "Residual sulphur and minor valuable metals can be recovered by scavenging, flotation, or leaching to improve total resource use."
      }
    ],
    "originalTitle": "铅锌银复合矿",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "铅锌银复合矿是指铅、锌、银三种金属在自然界中紧密共生或伴生的多金属矿床，其中银多以类质同象形式赋存于方铅矿或闪锌矿中。该矿种常伴生金、铜、硫及镓、铟等稀散元素。其选矿普遍采用浮选法，核心设备包括破碎机、球磨机、机械或充气式浮选机及浓缩脱水设备。",
    "sourceNotes": [
      "工艺简介：",
      "1. 破碎与磨矿分级（单体解离）",
      "原矿经多段破碎后送入球磨机进行研磨。由于银矿物常呈微细粒嵌布，磨矿细度需严格控制，以确保方铅矿、闪锌矿与脉石矿物充分单体解离，同时避免过磨导致银金属流失。",
      "2. 铅锌分离浮选（核心工艺）"
    ],
    "images": [
      {
        "src": "/images/ore-docx/lead-zinc-silver-ore-01.jpg",
        "width": 1256,
        "height": 706,
        "alt": "Lead-Zinc-Silver process image from VICMACH ore document"
      },
      {
        "src": "/images/ore-docx/lead-zinc-silver-ore-02.png",
        "width": 868,
        "height": 485,
        "alt": "Lead-Zinc-Silver process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "gold-ore",
      "tailings-reprocessing"
    ]
  },
  {
    "slug": "tailings-reprocessing",
    "title": "Tailings Reprocessing",
    "shortTitle": "Tailings Reprocessing",
    "category": "Precious & Polymetallic",
    "categoryHref": "/ore-solutions#precious-polymetallic",
    "summary": "Secondary recovery routes for valuable metals remaining in tailings, using gravity, flotation, leaching, ultra-fine grinding, or adsorption processes.",
    "intro": "Tailings reprocessing targets gold, silver, sulphur, and other residual valuable minerals left by the main process. The route is selected after mineral composition, particle size, and recovery potential are reviewed.",
    "processRoute": "Gravity, flotation, chemical leaching, ultra-fine grinding, and adsorption recovery",
    "keyEquipment": [
      "Shaking table",
      "Centrifugal concentrator",
      "SF mechanical agitation flotation cell",
      "High-gradient magnetic separator",
      "Deep cone thickener",
      "Filter press"
    ],
    "applications": [
      "Gold tailings recovery",
      "Silver-bearing tailings",
      "Sulphur concentrate recovery",
      "Fine-particle scavenging"
    ],
    "processSteps": [
      {
        "title": "Tailings characterization",
        "text": "Sampling checks grade, particle size, sulphur content, and residual valuable minerals before route design."
      },
      {
        "title": "Secondary concentration",
        "text": "Gravity separation, flotation, or combined routes recover remaining valuable minerals from suitable tailings."
      },
      {
        "title": "Fine-particle treatment",
        "text": "Ultra-fine grinding, carrier flotation, or resin adsorption can be introduced for difficult fine tailings."
      },
      {
        "title": "Water and residue management",
        "text": "Thickening, filtration, and dry discharge planning reduce environmental pressure after reprocessing."
      }
    ],
    "originalTitle": "尾矿再选",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "针对主流程尾矿中残留的有价金属，尾矿再选工艺通常采用重选（如毛毯机、摇床）、浮选或化学浸出等联合手段进行二次回收。对于含银、金等贵金属的尾矿，可通过强化浮选或重选-浮选联合流程进行富集；针对含硫尾矿，常通过浮选回收硫精矿以实现资源最大化利用；而对于极细粒或难选尾矿，还可引入超细磨-载体浮选或树脂吸附等非氰浸出技术，从而在降低环保压力的同时，彻底‘榨干’尾矿中的剩余经济价值。",
    "sourceNotes": [],
    "images": [],
    "relatedSlugs": [
      "gold-ore",
      "lead-zinc-silver-ore"
    ]
  },
  {
    "slug": "copper-ore",
    "title": "Copper Ore Processing",
    "shortTitle": "Copper Ore",
    "category": "Nonferrous & Rare Metals",
    "categoryHref": "/ore-solutions#nonferrous-rare",
    "summary": "Copper beneficiation routes for sulphide, oxide, and mixed ore, including flotation, sulphidizing flotation, and leach-extraction-electrowinning options.",
    "intro": "Copper ore occurs mainly as sulphide, oxide, or mixed minerals. Sulphide copper commonly uses flotation, while oxide copper may require sulphidizing flotation or hydrometallurgical leaching routes.",
    "processRoute": "Crushing, grinding, flotation, oxide copper treatment, thickening and dewatering",
    "keyEquipment": [
      "HST single-cylinder cone crusher",
      "Grid-type ball mill",
      "Spiral classifier",
      "XCF air inflation flotation cell",
      "KYF air inflation flotation cell",
      "Hydraulic center-drive high-efficiency thickener",
      "Filter press"
    ],
    "applications": [
      "Sulphide copper flotation",
      "Oxide copper sulphidizing flotation",
      "Copper-polymetallic separation",
      "Concentrate dewatering"
    ],
    "processSteps": [
      {
        "title": "Closed-circuit grinding",
        "text": "Crushing and grinding liberate copper minerals before classification returns coarse particles for regrinding."
      },
      {
        "title": "Flotation enrichment",
        "text": "Collectors, frothers, and pH control allow copper sulphide minerals to attach to bubbles and separate from gangue."
      },
      {
        "title": "Oxide copper treatment",
        "text": "Oxide ore can use sulphidizing flotation or leaching, solvent extraction, and electrowinning depending on grade and mineral type."
      },
      {
        "title": "Concentrate dewatering",
        "text": "Thickeners and filters reduce copper concentrate moisture and recycle process water."
      }
    ],
    "originalTitle": "铜矿",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "铜矿是含有可经济利用铜元素的矿物集合体。铜具有极佳的导电性、导热性和延展性，在自然界中主要以硫化物和氧化物的形式存在。根据矿物性质，铜矿主要分为硫化铜矿、氧化铜矿及混合铜矿。针对天然可浮性好的硫化铜矿，主要采用浮选法；针对可浮性较差的氧化铜矿，常采用硫化浮选法或“浸出-萃取-电积”湿法冶金工艺。",
    "sourceNotes": [
      "工艺介绍：",
      "1. 破碎与磨矿分级（单体解离）",
      "采用闭路破碎与多段磨矿流程，将矿石研磨至微细粉末，确保铜矿物与脉石矿物充分单体解离。磨矿后通过螺旋分级机或水力旋流器进行分级，粗粒返回再磨，合格细粒进入后续选别作业。",
      "2. 浮选富集与分离（核心工艺）"
    ],
    "images": [
      {
        "src": "/images/ore-docx/copper-ore-01.jpg",
        "width": 1256,
        "height": 706,
        "alt": "Copper Ore process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "tin-tungsten-tantalum-niobium-ore",
      "lithium-ore",
      "molybdenum-ore"
    ]
  },
  {
    "slug": "tin-tungsten-tantalum-niobium-ore",
    "title": "Tin-Tungsten-Tantalum-Niobium Ore",
    "shortTitle": "Tin-W-Ta-Nb Ore",
    "category": "Nonferrous & Rare Metals",
    "categoryHref": "/ore-solutions#nonferrous-rare",
    "summary": "Heavy rare-metal ore processing built around washing, desliming, gravity concentration, magnetic separation, flotation, and electric separation.",
    "intro": "Tin, tungsten, tantalum, and niobium minerals are dense and often associated with each other. Gravity separation is usually used for roughing, followed by magnetic, flotation, or electric separation for upgrading.",
    "processRoute": "Washing, gravity roughing, magnetic and flotation cleaning, tailings recleaning",
    "keyEquipment": [
      "RX series ore washer",
      "Diaphragm jig",
      "Sawtooth wave jig",
      "Shaking table",
      "Spiral chute",
      "High-gradient magnetic separator"
    ],
    "applications": [
      "Tin ore gravity recovery",
      "Tungsten pre-concentration",
      "Tantalum-niobium recovery",
      "Heavy mineral cleaning"
    ],
    "processSteps": [
      {
        "title": "Washing and desliming",
        "text": "Clay-rich feed is washed and deslimed before separation to protect gravity performance."
      },
      {
        "title": "Gravity roughing",
        "text": "Jigs, shaking tables, and spiral chutes reject light gangue and enrich heavy minerals quickly."
      },
      {
        "title": "Combined cleaning",
        "text": "Magnetic separation, flotation, or electric separation is used when density difference alone is not enough."
      },
      {
        "title": "Tailings recleaning",
        "text": "High-gradient magnetic separation and slime table recovery help capture fine valuable minerals lost from the main route."
      }
    ],
    "originalTitle": "锡钨钽铌矿",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "锡、钨、钽、铌属于典型的稀有难熔金属，在自然界中常因密度大、物理化学性质相近而“抱团”共生，形成多金属伴生矿。这类矿物普遍具有比重大、硬度高的特点。其选矿工艺以重选法为基础进行粗选富集，辅以磁选、浮选或电选进行精选分离，主要选别设备包括洗矿脱泥设备、跳汰机、摇床、螺旋选矿机以及高梯度磁选机。",
    "sourceNotes": [
      "工艺介绍：",
      "1. 洗矿与重选富集（粗选核心）",
      "针对含泥量大的矿石，先进行洗矿脱泥，随后利用矿物间的密度差异，采用跳汰机、摇床或螺旋选矿机进行重选，快速抛出废石并富集重矿物。",
      "2. 联合工艺精选（深度分离）"
    ],
    "images": [
      {
        "src": "/images/ore-docx/tin-tungsten-tantalum-niobium-ore-01.jpg",
        "width": 1600,
        "height": 900,
        "alt": "Tin-W-Ta-Nb Ore process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "copper-ore",
      "lithium-ore",
      "molybdenum-ore"
    ]
  },
  {
    "slug": "lithium-ore",
    "title": "Lithium Ore Processing",
    "shortTitle": "Lithium Ore",
    "category": "Nonferrous & Rare Metals",
    "categoryHref": "/ore-solutions#nonferrous-rare",
    "summary": "Lithium processing options for hard-rock spodumene and lepidolite ores, plus salt-lake lithium extraction concepts where wet chemical routes are required.",
    "intro": "Lithium is a strategic energy mineral. Hard-rock lithium ores commonly use crushing, grinding, flotation, magnetic separation, and tailings recovery; salt-lake brines use chemical extraction routes.",
    "processRoute": "Hard-rock flotation, magnetic impurity removal, brine chemical extraction, tailings recovery",
    "keyEquipment": [
      "Grid-type ball mill",
      "Hydrocyclone",
      "SF mechanical agitation flotation cell",
      "High-gradient magnetic separator",
      "Hydraulic center-drive high-efficiency thickener",
      "Filter press"
    ],
    "applications": [
      "Spodumene flotation",
      "Lepidolite flotation",
      "Iron impurity removal",
      "Lithium tailings recovery"
    ],
    "processSteps": [
      {
        "title": "Hard-rock flotation",
        "text": "Spodumene and lepidolite flows use grinding and flotation with controlled pH and reagent systems."
      },
      {
        "title": "Brine lithium extraction",
        "text": "Salt-lake lithium is extracted by precipitation, solvent extraction, or ion exchange rather than conventional mineral flotation."
      },
      {
        "title": "Impurity removal",
        "text": "Magnetic separation can remove iron-bearing impurities before flotation or product upgrading."
      },
      {
        "title": "Tailings recovery",
        "text": "Fine lithium minerals in tailings can be recovered through enhanced flotation or chemical leaching."
      }
    ],
    "originalTitle": "锂矿",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "锂被誉为“白色石油”，是支撑全球能源转型的关键战略性矿产。其核心应用是制造锂离子电池，驱动了电动汽车革命和储能系统的发展，预计到2030年电池将占锂总需求的95%以上。全球锂资源主要分为盐湖卤水型和硬岩型，高度集中于南美“锂三角”、澳大利亚和中国。中国是全球最大的锂消费国，近年来通过国内整装勘查（如湖南郴州发现超大型锂矿）及海外积极布局，正加速从“贫锂国”向“锂资源大国”跨越。",
    "sourceNotes": [
      "锂矿的选矿方案因矿石类型而异，硬岩锂矿（如锂辉石、锂云母）通常以浮选法为核心工艺，通过调整矿浆酸碱度与药剂制度实现锂矿物与脉石的分离；盐湖卤水提锂则主要采用化学沉淀、萃取或离子交换等湿法冶金工艺。针对嵌布粒度粗或含铁杂质较多的矿石，常引入重选或磁选作为辅助手段进行预富集与除杂。对于主流程尾矿中流失的微细粒锂矿物，可通过强化浮选或化学浸出等尾矿再选工艺进行二次回收，从而最大化提升锂资源的综合回收率与经济效益。",
      "工艺介绍：",
      "锂矿选矿因矿石类型而异，现代工艺注重物理与化学方法的结合：",
      "1. 硬岩锂矿浮选：针对锂辉石、锂云母等硬岩矿，采用“破碎-磨矿-浮选”核心流程。通过精确调整矿浆酸碱度与捕收剂制度，实现锂矿物与石英、长石等脉石的高效分离。"
    ],
    "images": [
      {
        "src": "/images/ore-docx/lithium-ore-01.jpg",
        "width": 1000,
        "height": 650,
        "alt": "Lithium Ore process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "copper-ore",
      "tin-tungsten-tantalum-niobium-ore",
      "molybdenum-ore"
    ]
  },
  {
    "slug": "molybdenum-ore",
    "title": "Molybdenum Ore Processing",
    "shortTitle": "Molybdenum Ore",
    "category": "Nonferrous & Rare Metals",
    "categoryHref": "/ore-solutions#nonferrous-rare",
    "summary": "Molybdenum flotation flows for molybdenite-bearing ore, including grinding-classification, copper-molybdenum separation, repeated cleaning, and concentrate dewatering.",
    "intro": "Molybdenum is commonly recovered from molybdenite, often associated with copper or tungsten. Flotation is the core process, followed by repeated regrinding and cleaning to reach high concentrate grade.",
    "processRoute": "Crushing, grinding, flotation, copper-moly separation, repeated cleaning, dewatering",
    "keyEquipment": [
      "Grid-type ball mill",
      "Spiral classifier",
      "XCF air inflation flotation cell",
      "KYF air inflation flotation cell",
      "Hydraulic center-drive high-efficiency thickener",
      "Filter press"
    ],
    "applications": [
      "Molybdenite flotation",
      "Copper-moly separation",
      "High-grade molybdenum concentrate",
      "Concentrate dewatering"
    ],
    "processSteps": [
      {
        "title": "Fine grinding",
        "text": "Jaw and cone crushing followed by ball milling and classification liberate molybdenite from gangue."
      },
      {
        "title": "Flotation recovery",
        "text": "Molybdenite has good natural floatability and is recovered by collectors and frothers in flotation cells."
      },
      {
        "title": "Copper-moly separation",
        "text": "For copper-moly ore, mixed concentrate is separated by reagent control such as sodium sulphide systems."
      },
      {
        "title": "Cleaning and dewatering",
        "text": "Multiple regrinding and cleaning stages improve concentrate grade before thickening, filtration, and roasting preparation."
      }
    ],
    "originalTitle": "钼矿",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "钼是一种高熔点、耐腐蚀的难熔金属，被誉为“工业维生素”，自然界中最具工业价值的矿物是辉钼矿（常与铜、钨伴生）。钼矿普遍以浮选法为核心进行富集提纯，主要依靠破碎机、球磨机、螺旋分级机以及充气或机械搅拌式浮选机，通过药剂作用实现矿物的分离。",
    "sourceNotes": [
      "工艺介绍：",
      "1. 破碎与细磨分级（单体解离）",
      "原矿经颚式破碎机、圆锥破碎机进行多段破碎后，送入球磨机进行研磨。配合螺旋分级机或水力旋流器形成闭路循环，将矿石研磨至微细粉末，确保辉钼矿与脉石矿物充分单体解离。",
      "2. 浮选富集与分离（核心工艺）"
    ],
    "images": [
      {
        "src": "/images/ore-docx/molybdenum-ore-01.jpg",
        "width": 1256,
        "height": 706,
        "alt": "Molybdenum Ore process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "copper-ore",
      "tin-tungsten-tantalum-niobium-ore",
      "lithium-ore"
    ]
  },
  {
    "slug": "iron-ore-magnetic-separation",
    "title": "Iron Ore Magnetic Separation",
    "shortTitle": "Iron Ore",
    "category": "Ferrous Metals",
    "categoryHref": "/ore-solutions#ferrous-metals",
    "summary": "Iron ore routes for magnetite, hematite, limonite, and siderite using staged grinding, weak magnetic separation, high-intensity magnetic separation, gravity, and reverse flotation.",
    "intro": "Iron ore processing depends on magnetic behavior and mineral dissemination. Strongly magnetic magnetite favors weak magnetic separation, while weakly magnetic ores often require strong magnetic separation, gravity, flotation, or roasting routes.",
    "processRoute": "Stage crushing and grinding, weak magnetic separation, strong magnetic separation, reverse flotation",
    "keyEquipment": [
      "Grid-type ball mill",
      "Hydrocyclone",
      "CT permanent magnetic drum separator",
      "High-gradient magnetic separator",
      "Spiral chute",
      "SF mechanical agitation flotation cell"
    ],
    "applications": [
      "Magnetite recovery",
      "Hematite upgrading",
      "Iron concentrate silica reduction",
      "Weak magnetic ore upgrading"
    ],
    "processSteps": [
      {
        "title": "Stage grinding",
        "text": "Stage grinding and stage separation reduce over-grinding and reject qualified tailings earlier."
      },
      {
        "title": "Weak magnetic separation",
        "text": "Magnetite can be efficiently recovered by weak magnetic separation, with reverse flotation added when silica is high."
      },
      {
        "title": "Strong magnetic and flotation",
        "text": "Weakly magnetic hematite and similar ores often use strong magnetic separation followed by reverse flotation."
      },
      {
        "title": "Difficult ore options",
        "text": "For very refractory ores, magnetizing roasting can convert weakly magnetic minerals before magnetic separation."
      }
    ],
    "originalTitle": "铁矿磁选",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "铁矿石是提炼生铁和炼钢的核心原材料，主要分为磁铁矿、赤铁矿、褐铁矿和菱铁矿。铁矿石通常具有不同的磁性、比重和表面物理化学性质，且常呈细粒嵌布。针对强磁性的磁铁矿，主要采用弱磁选机进行分选；针对弱磁性的赤铁矿等矿石，则多采用“重选-强磁选-浮选”联合工艺，核心设备包括球磨机、高梯度强磁选机、螺旋选矿机及浮选机，以实现铁矿物与脉石的有效分离。",
    "sourceNotes": [
      "工艺介绍：",
      "1. 破碎与阶段磨矿：采用粗、中、细三段破碎流程，结合“阶段磨矿-阶段选别”工艺，避免过磨现象，及时抛出合格尾矿以降低能耗。",
      "2. 磁选富集（针对磁铁矿）：对于强磁性磁铁矿，采用弱磁选工艺进行高效分选；若精矿中二氧化硅等杂质偏高，则引入反浮选工艺进行深度除杂提纯。",
      "3. 磁-浮联合工艺（针对赤铁矿等弱磁性矿）：针对弱磁性铁矿石，普遍采用“弱磁-强磁-反浮选”联合流程。先通过强磁选提前抛弃大量合格尾矿并富集氧化铁，再通过反浮选获得高品质铁精矿。对于极难选矿石，也可采用磁化焙烧将其转化为强磁性后再进行弱磁选。"
    ],
    "images": [
      {
        "src": "/images/ore-docx/iron-ore-magnetic-separation-01.jpg",
        "width": 1600,
        "height": 900,
        "alt": "Iron Ore process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "manganese-ore-beneficiation",
      "chromite-gravity-separation"
    ]
  },
  {
    "slug": "manganese-ore-beneficiation",
    "title": "Manganese Ore Beneficiation",
    "shortTitle": "Manganese Ore",
    "category": "Ferrous Metals",
    "categoryHref": "/ore-solutions#ferrous-metals",
    "summary": "Manganese beneficiation routes for low-grade, muddy, high-phosphorus, or complex ores using washing, gravity separation, high-intensity magnetic separation, flotation, and thermal enrichment.",
    "intro": "Manganese ore is often low-grade and finely disseminated, with clay, phosphorus, iron, and associated useful metals. Modern flows frequently combine washing, gravity, magnetic, flotation, and sometimes thermal enrichment routes.",
    "processRoute": "Washing, desliming, gravity roughing, strong magnetic separation, flotation, thermal enrichment",
    "keyEquipment": [
      "RX series ore washer",
      "Trommel screen",
      "Diaphragm jig",
      "Shaking table",
      "High-gradient magnetic separator",
      "SF mechanical agitation flotation cell"
    ],
    "applications": [
      "Oxide manganese washing",
      "Manganese gravity roughing",
      "Fine manganese magnetic recovery",
      "High-phosphorus ore treatment"
    ],
    "processSteps": [
      {
        "title": "Washing and desliming",
        "text": "Clay-rich oxide manganese ore is scrubbed and classified before forced desliming removes fine clay impurities."
      },
      {
        "title": "Gravity roughing",
        "text": "Jigs and shaking tables treat coarse and fine fractions to reject waste rock early."
      },
      {
        "title": "Magnetic and flotation cleaning",
        "text": "High-gradient magnetic separation recovers fine weakly magnetic manganese minerals, while flotation removes complex impurities."
      },
      {
        "title": "Thermal enrichment option",
        "text": "For difficult high-phosphorus or high-iron ore, thermal enrichment can produce artificial rich ore feed."
      }
    ],
    "originalTitle": "锰矿选矿",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "我国锰矿绝大多数属于贫矿，且多呈细粒或微细粒嵌布，常伴有高磷、高铁及共伴生有益金属，选矿加工难度极大。针对这一特性，现代锰矿选矿已突破单一的传统机械选（洗矿、重选、强磁选、浮选）和火法富集工艺，广泛采用重-磁-浮联合流程以实现高效分选。同时，为应对复杂难选矿石，还原浸出法与焙烧联合法等高效、清洁的新型选矿技术也日益成熟并逐步投入应用，从而全面提升锰资源的综合回收率与经济效益。",
    "sourceNotes": [
      "工艺介绍：",
      "1. 洗矿与脱泥（选前准备）",
      "针对含泥量大、易泥化的氧化锰矿，采用圆筒洗矿机或槽式洗矿机进行擦洗，并配合直线振动筛进行分级。洗矿后引入脱泥斗或水力旋流器进行强制脱泥，有效去除微细粒黏土杂质，为后续分选创造良好条件。",
      "2. 重选富集（粗粒级处理）"
    ],
    "images": [
      {
        "src": "/images/ore-docx/manganese-ore-beneficiation-01.jpg",
        "width": 800,
        "height": 530,
        "alt": "Manganese Ore process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "iron-ore-magnetic-separation",
      "chromite-gravity-separation"
    ]
  },
  {
    "slug": "chromite-gravity-separation",
    "title": "Chromite Gravity Separation",
    "shortTitle": "Chromite",
    "category": "Ferrous Metals",
    "categoryHref": "/ore-solutions#ferrous-metals",
    "summary": "Chromite processing centered on gravity separation, with crushing, grinding, jigging, shaking table or spiral concentration, strong magnetic separation, flotation, and tailings recovery.",
    "intro": "Chromite has high density and weak magnetic properties, making gravity separation the primary roughing method. Magnetic separation or flotation can be introduced for fine or complex ores.",
    "processRoute": "Crushing, grinding, gravity roughing, magnetic or flotation cleaning, tailings recleaning",
    "keyEquipment": [
      "Diaphragm jig",
      "Sawtooth wave jig",
      "Shaking table",
      "Spiral chute",
      "High-gradient magnetic separator",
      "SF mechanical agitation flotation cell"
    ],
    "applications": [
      "Metallurgical-grade chromite",
      "Fine chromite recovery",
      "Gravity pre-concentration",
      "Chromite tailings recovery"
    ],
    "processSteps": [
      {
        "title": "Liberation",
        "text": "Crushing and ball milling liberate chromite from olivine, serpentine, and other gangue minerals."
      },
      {
        "title": "Gravity concentration",
        "text": "Jigs treat coarse and medium sizes, while shaking tables and spiral chutes treat fine fractions."
      },
      {
        "title": "Cleaning and impurity removal",
        "text": "Strong magnetic separation or flotation removes weakly magnetic or fine locked impurities from gravity concentrate."
      },
      {
        "title": "Tailings recleaning",
        "text": "Slime tables, centrifugal concentrators, or enhanced flotation recover fine chromite from tailings."
      }
    ],
    "originalTitle": "铬矿重选",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "铬矿也称铬铁矿，是提取金属铬的主要矿物原料，被誉为钢铁工业的“维生素”。铬具有极高的硬度、耐磨性、耐高温及抗腐蚀特性。在自然界中，铬铁矿多呈黑色或黑褐色，密度较大（4.2~4.8g/cm³），且带有弱磁性。根据工业用途，铬矿主要分为冶金级、耐火级、化工级和铸石级。铬矿的选矿高度依赖其密度大和弱磁性的物理特征：通常以重选法为主进行粗选富集，辅以强磁选或浮选进行精选分离，核心选别设备包括跳汰机、摇床、螺旋溜槽、高梯度强磁选机及浮选机。",
    "sourceNotes": [
      "工艺介绍：",
      "1. 破碎与磨矿分级（单体解离）",
      "开采出的原矿首先经过颚式破碎机、圆锥破碎机等进行粗碎与细碎，随后送入球磨机进行研磨。通过磨矿将矿石研磨至适宜的细度，使铬铁矿与橄榄石、蛇纹石等脉石矿物充分单体解离，为后续分选创造条件。",
      "2. 重选富集（核心粗选）"
    ],
    "images": [
      {
        "src": "/images/ore-docx/chromite-gravity-separation-01.jpg",
        "width": 1256,
        "height": 706,
        "alt": "Chromite process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "iron-ore-magnetic-separation",
      "manganese-ore-beneficiation"
    ]
  },
  {
    "slug": "quartz-silica",
    "title": "Quartz & Silica Processing",
    "shortTitle": "Quartz / Silica",
    "category": "Nonmetallic Minerals",
    "categoryHref": "/ore-solutions#nonmetallic-minerals",
    "summary": "Quartz and silica purification flows for glass, ceramics, construction materials, photovoltaic, optical fiber, and semiconductor-grade applications.",
    "intro": "Quartz ore is mainly silicon dioxide. Ordinary quartz uses magnetic separation and flotation for impurity removal, while high-purity quartz may require calcination, water quenching, magnetic separation, flotation, and acid leaching.",
    "processRoute": "Crushing, grinding, desliming, magnetic separation, flotation, calcination-water quenching, acid leaching",
    "keyEquipment": [
      "Grid-type ball mill",
      "Hydrocyclone",
      "High-gradient magnetic separator",
      "SF mechanical agitation flotation cell",
      "Scrubber",
      "Filter press"
    ],
    "applications": [
      "Glass sand",
      "Ceramic raw material",
      "High-purity quartz sand",
      "Photovoltaic and semiconductor material"
    ],
    "processSteps": [
      {
        "title": "Pre-treatment",
        "text": "Crushing, grinding, and desliming liberate quartz and remove clay before separation."
      },
      {
        "title": "Magnetic and gravity cleaning",
        "text": "High-gradient magnetic separation removes iron-bearing impurities, with gravity separation used for coarse heavy minerals."
      },
      {
        "title": "Flotation separation",
        "text": "Flotation separates quartz from feldspar, mica, and other silicate impurities using controlled reagent systems."
      },
      {
        "title": "High-purity upgrading",
        "text": "Calcination-water quenching and acid leaching expose micro-cracks and dissolve trace metal impurities."
      }
    ],
    "originalTitle": "1.石英石",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "石英石矿的主要成分为二氧化硅（SiO₂），具有极高的硬度、耐高温、耐腐蚀及优异的透光性。在自然界中，根据成因和物理形态，石英矿主要分为脉石英型、石英岩型、石英砂岩型、伟晶岩型及天然水晶型等。普通石英矿（SiO₂含量90%-99%）多用于玻璃、陶瓷及建筑材料；而高纯石英矿（SiO₂含量>99.9%）则是半导体、光伏、光纤等高科技领域的核心战略资源。石英矿的选矿高度依赖杂质类型：普通石英多采用磁选、浮选除杂；高纯石英则需经过复杂的“破碎-煅烧水淬-磁选-浮选-酸浸”联合提纯工艺，核心设备涵盖破碎机、球磨机、高梯度磁选机、浮选机及高温煅烧炉。",
    "sourceNotes": [
      "石英矿主要成分为二氧化硅，分为脉石英、石英岩、石英砂岩等类型，是玻璃、陶瓷及半导体等产业的重要原料。普通石英多采用磁选、浮选除杂；高纯石英需经“煅烧水淬-磁选-浮选-酸浸”联合提纯，核心设备为破碎机、高梯度磁选机、浮选机及高温煅烧炉。",
      "工艺简介：",
      "破碎、磨矿与脱泥（预处理）",
      "1.原矿经颚式破碎机、圆锥破碎机进行多段破碎，随后送入球磨机细磨至适宜粒度，使石英与杂质矿物充分解离。针对含泥量较大的矿石，需先通过水力旋流器或洗矿设备进行脱泥处理，避免微细粒矿泥干扰后续分选。"
    ],
    "images": [
      {
        "src": "/images/ore-docx/quartz-silica-01.jpg",
        "width": 1600,
        "height": 900,
        "alt": "Quartz / Silica process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "graphite",
      "fluorite",
      "feldspar",
      "barite"
    ]
  },
  {
    "slug": "graphite",
    "title": "Graphite Processing",
    "shortTitle": "Graphite",
    "category": "Nonmetallic Minerals",
    "categoryHref": "/ore-solutions#nonmetallic-minerals",
    "summary": "Graphite beneficiation for flake and amorphous graphite using crushing, grinding, flotation, impurity suppression, concentration, and dewatering.",
    "intro": "Graphite has natural floatability and is usually upgraded by flotation. Reagent selection changes with flake graphite, amorphous graphite, mica, sulphide, and other associated minerals.",
    "processRoute": "Grinding, flotation, impurity suppression, multi-stage cleaning, thickening and filtration",
    "keyEquipment": [
      "Grid-type ball mill",
      "SF mechanical agitation flotation cell",
      "XCF air inflation flotation cell",
      "Hydraulic center-drive high-efficiency thickener",
      "Filter press"
    ],
    "applications": [
      "Flake graphite flotation",
      "Amorphous graphite recovery",
      "Graphite concentrate cleaning",
      "Graphite concentrate dewatering"
    ],
    "processSteps": [
      {
        "title": "Liberation grinding",
        "text": "Controlled grinding protects graphite flakes while exposing graphite from gangue."
      },
      {
        "title": "Flotation recovery",
        "text": "Collectors such as kerosene or diesel and suitable frothers recover naturally floatable graphite."
      },
      {
        "title": "Impurity suppression",
        "text": "Reagents such as starch, dextrin, organic colloids, or lime suppress mica, silicates, and sulphide minerals."
      },
      {
        "title": "Concentrate handling",
        "text": "Thickening and filtration prepare graphite concentrate for drying or further purification."
      }
    ],
    "originalTitle": "2.石墨",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "石墨是碳元素的单质矿物，具有质软滑腻、耐高温、导电及耐腐蚀等特性，主要分为晶质（鳞片状）和隐晶质（土状）两类。其选矿高度依赖结晶形态，普遍采用浮选法进行富集提纯，核心设备包括破碎机、球磨机、浮选机及脱水过滤设备。",
    "sourceNotes": [
      "工艺简介：",
      "鳞片石墨具有较好的可浮性，因此，大都采用浮选法进行分选，在使用浮选药剂中，国内通常用煤油或柴油作捕收剂，二号油或新型浮选油作起泡剂，经过多年的生产实践，四号油被认为是理想的石墨选矿起泡剂。",
      "隐晶质石墨矿石中常有云母等硅酸盐矿物伴生，浮选时，为抑制这类矿物，可以使用水波动，淀粉，糊精，有机胶和纤维素等药剂，如矿石中黄铁矿含量较高，可以加石灰和氧化物。"
    ],
    "images": [
      {
        "src": "/images/ore-docx/graphite-01.jpg",
        "width": 1256,
        "height": 706,
        "alt": "Graphite process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "quartz-silica",
      "fluorite",
      "feldspar",
      "barite"
    ]
  },
  {
    "slug": "fluorite",
    "title": "Fluorite Processing",
    "shortTitle": "Fluorite",
    "category": "Nonmetallic Minerals",
    "categoryHref": "/ore-solutions#nonmetallic-minerals",
    "summary": "Fluorite purification flows for quartz-type, calcite-type, barite-type, and sulphide-associated fluorite ore using flotation and optional pre-concentration.",
    "intro": "Fluorite is calcium fluoride and is widely used in metallurgy, chemical, optical, and new-energy industries. Flotation is the main purification route, with reagent systems selected according to associated minerals.",
    "processRoute": "Crushing, grinding, classification, fluorite flotation, multiple cleaning, dewatering",
    "keyEquipment": [
      "Grid-type ball mill",
      "Spiral classifier",
      "SF mechanical agitation flotation cell",
      "XCF air inflation flotation cell",
      "Hydraulic center-drive high-efficiency thickener",
      "Filter press"
    ],
    "applications": [
      "Quartz-type fluorite",
      "Calcite-type fluorite",
      "Barite-type fluorite",
      "Acid-grade fluorite concentrate"
    ],
    "processSteps": [
      {
        "title": "Grinding and classification",
        "text": "Closed-circuit grinding liberates fluorite from quartz, calcite, barite, and sulphide minerals."
      },
      {
        "title": "Flotation enrichment",
        "text": "Oleic-acid-type collectors float fluorite, while depressants are adjusted for quartz, calcite, or barite gangue."
      },
      {
        "title": "Pre-concentration option",
        "text": "Photoelectric sorting, jigging, or shaking tables can remove coarse waste before flotation for complex ores."
      },
      {
        "title": "Cleaning and dewatering",
        "text": "Multiple cleaning stages raise concentrate grade before thickening and filtration reduce moisture."
      }
    ],
    "originalTitle": "3.萤石",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "萤石（又称氟石）主要成分为氟化钙（CaF₂），是工业上提取氟元素的核心来源，广泛应用于冶金、化工、光学及新能源等领域。自然界中的萤石矿常与石英、方解石、重晶石及硫化矿等共生。其选矿高度依赖矿石的具体伴生类型，普遍以浮选法为核心，主要依靠破碎机、球磨机、机械或充气式浮选机及浓缩脱水设备进行富集提纯。",
    "sourceNotes": [
      "工艺简介：",
      "1. 破碎与磨矿分级（单体解离）",
      "原矿经颚式破碎机或圆锥破碎机进行多段破碎后，送入球磨机研磨，配合螺旋分级机或水力旋流器形成闭路循环，确保萤石与脉石矿物充分单体解离。",
      "2. 浮选富集与分离（核心工艺）"
    ],
    "images": [
      {
        "src": "/images/ore-docx/fluorite-01.jpg",
        "width": 1256,
        "height": 706,
        "alt": "Fluorite process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "quartz-silica",
      "graphite",
      "feldspar",
      "barite"
    ]
  },
  {
    "slug": "feldspar",
    "title": "Feldspar Processing",
    "shortTitle": "Feldspar",
    "category": "Nonmetallic Minerals",
    "categoryHref": "/ore-solutions#nonmetallic-minerals",
    "summary": "Feldspar beneficiation for potassium and sodium feldspar, combining hand sorting, crushing, rod milling or ball milling, desliming, magnetic separation, flotation, optical sorting, and acid washing where required.",
    "intro": "Feldspar is a key flux raw material for glass and ceramics. Simple pegmatite ores may use hand sorting and crushing, while weathered granite-type ores need grinding, magnetic separation, and flotation.",
    "processRoute": "Crushing, grinding, desliming, magnetic iron removal, feldspar-quartz flotation, optical sorting, acid washing",
    "keyEquipment": [
      "Rod mill",
      "Grid-type ball mill",
      "Hydrocyclone",
      "High-gradient magnetic separator",
      "SF mechanical agitation flotation cell",
      "Filter press"
    ],
    "applications": [
      "Potassium feldspar",
      "Sodium feldspar",
      "Glass raw material",
      "Ceramic-grade feldspar powder"
    ],
    "processSteps": [
      {
        "title": "Grinding and desliming",
        "text": "Wet rod milling or ball milling liberates feldspar from quartz and mica before cyclone desliming."
      },
      {
        "title": "Magnetic iron removal",
        "text": "Dry or high-gradient magnetic separators remove magnetite, hematite, biotite, and other iron-bearing impurities."
      },
      {
        "title": "Flotation separation",
        "text": "Acid or alkaline flotation separates feldspar and quartz depending on product requirement and reagent policy."
      },
      {
        "title": "Advanced upgrading",
        "text": "Optical sorting reduces grinding load, while acid washing removes residual iron for high-purity feldspar."
      }
    ],
    "originalTitle": "长石",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "长石是地壳中含量最高的矿物，工业上广泛应用的主要为钾长石和钠长石，是玻璃和陶瓷工业不可或缺的助溶剂原料。长石矿床类型丰富，主要包括伟晶岩型、岩浆岩型、风化斑状花岗岩型和沉积型。其选矿工艺因矿床类型而异，伟晶岩型优质矿多采用简单的“手选-破碎-棒磨-分级”流程；而风化花岗岩型等复杂矿石，则需采用“破碎-磨矿-磁选-浮选”联合工艺，核心设备涵盖颚式破碎机、球磨机、强磁选机及浮选机。",
    "sourceNotes": [
      "工艺简介：",
      "1. 破碎与磨矿分级（单体解离）",
      "原矿经颚式破碎机粗碎和锤式破碎机细碎后，送入湿式棒磨机或球磨机进行研磨。对于风化花岗岩型长石矿，磨矿细度通常需控制在-0.074mm占85%以上，以确保长石与石英等杂质充分解离。",
      "2. 脱泥与磁选除铁（物理除杂）"
    ],
    "images": [
      {
        "src": "/images/ore-docx/feldspar-01.jpg",
        "width": 1600,
        "height": 900,
        "alt": "Feldspar process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "quartz-silica",
      "graphite",
      "fluorite",
      "barite"
    ]
  },
  {
    "slug": "barite",
    "title": "Barite Processing",
    "shortTitle": "Barite",
    "category": "Nonmetallic Minerals",
    "categoryHref": "/ore-solutions#nonmetallic-minerals",
    "summary": "Barite beneficiation routes using crushing, screening, jigging, magnetic separation, and flotation for drilling mud, chemical, medical, and filler applications.",
    "intro": "Barite is barium sulfate with high density and stable chemical properties. Its processing route depends on dissemination size and associated minerals such as fluorite, galena, and quartz.",
    "processRoute": "Crushing, screening, jigging, magnetic separation, flotation, concentrate handling",
    "keyEquipment": [
      "YK vibrating screen",
      "Diaphragm jig",
      "Sawtooth wave jig",
      "CT permanent magnetic drum separator",
      "SF mechanical agitation flotation cell",
      "Filter press"
    ],
    "applications": [
      "Drilling mud barite",
      "Chemical-grade barite",
      "Low-iron barite",
      "Fine-grained barite flotation"
    ],
    "processSteps": [
      {
        "title": "Gravity separation",
        "text": "Crushing and screening followed by jigging can produce high-grade barite concentrate for coarse disseminated ore."
      },
      {
        "title": "Magnetic separation",
        "text": "Wet magnetic separation removes iron-bearing minerals when low iron content is required."
      },
      {
        "title": "Flotation",
        "text": "Fine-grained barite and gravity tailings can be recovered by anionic or cationic collector flotation."
      },
      {
        "title": "Product handling",
        "text": "Dewatering and classification prepare barite concentrate for drilling, chemical, or filler markets."
      }
    ],
    "originalTitle": "重晶石",
    "sourceDocument": "矿石资料（附图）.docx",
    "sourceIntro": "重晶石的主要成分为硫酸钡（BaSO₄），具有密度大（比重4.3-4.6）、化学性质稳定、能吸收X射线及无毒等特性，是石油钻井泥浆的加重剂、医疗“钡餐”及化工钡盐的重要原料。自然界中常与萤石、方铅矿、石英等共生。其选矿工艺高度依赖矿石的嵌布粒度与伴生矿物类型，普遍采用重选、浮选或磁选法，核心设备包括跳汰机、球磨机、浮选机及磁选机。",
    "sourceNotes": [
      "工艺介绍：",
      "1、重选法：",
      "通常的做法是破碎、筛分，经跳汰选矿流程，获得品位较高的精矿，产品品位可达80%以上。破碎流程采用鄂式破碎机，采用两段破碎流程对开采的大块重晶石进行破碎;筛分流程采用处理量大，筛分效率高，简单实用的圆振动筛，该类型振动筛故障率低，处理能力大，筛分效率高，容易操作，是重晶石矿筛分的理想设备;跳汰分选流程采用两种类型的跳汰机分别对破碎后的粗细粒级重晶石物料进行跳汰机分选。",
      "2、磁选法："
    ],
    "images": [
      {
        "src": "/images/ore-docx/barite-01.jpg",
        "width": 1600,
        "height": 900,
        "alt": "Barite process image from VICMACH ore document"
      }
    ],
    "relatedSlugs": [
      "quartz-silica",
      "graphite",
      "fluorite",
      "feldspar"
    ]
  }
];

export const oreProductGroups = [
  {
    "title": "Precious & Polymetallic",
    "href": "/ore-solutions#precious-polymetallic",
    "text": "Gold, lead-zinc-silver, and tailings recovery routes for precious and associated metals.",
    "products": [
      {
        "slug": "gold-ore",
        "title": "Gold Ore Processing",
        "shortTitle": "Gold Ore"
      },
      {
        "slug": "lead-zinc-silver-ore",
        "title": "Lead-Zinc-Silver Polymetallic Ore",
        "shortTitle": "Lead-Zinc-Silver"
      },
      {
        "slug": "tailings-reprocessing",
        "title": "Tailings Reprocessing",
        "shortTitle": "Tailings Reprocessing"
      }
    ]
  },
  {
    "title": "Nonferrous & Rare Metals",
    "href": "/ore-solutions#nonferrous-rare",
    "text": "Copper, lithium, molybdenum, and heavy rare-metal ores configured around liberation and recovery targets.",
    "products": [
      {
        "slug": "copper-ore",
        "title": "Copper Ore Processing",
        "shortTitle": "Copper Ore"
      },
      {
        "slug": "tin-tungsten-tantalum-niobium-ore",
        "title": "Tin-Tungsten-Tantalum-Niobium Ore",
        "shortTitle": "Tin-W-Ta-Nb Ore"
      },
      {
        "slug": "lithium-ore",
        "title": "Lithium Ore Processing",
        "shortTitle": "Lithium Ore"
      },
      {
        "slug": "molybdenum-ore",
        "title": "Molybdenum Ore Processing",
        "shortTitle": "Molybdenum Ore"
      }
    ]
  },
  {
    "title": "Ferrous Metals",
    "href": "/ore-solutions#ferrous-metals",
    "text": "Iron, manganese, and chromite routes using magnetic separation, gravity, flotation, and washing.",
    "products": [
      {
        "slug": "iron-ore-magnetic-separation",
        "title": "Iron Ore Magnetic Separation",
        "shortTitle": "Iron Ore"
      },
      {
        "slug": "manganese-ore-beneficiation",
        "title": "Manganese Ore Beneficiation",
        "shortTitle": "Manganese Ore"
      },
      {
        "slug": "chromite-gravity-separation",
        "title": "Chromite Gravity Separation",
        "shortTitle": "Chromite"
      }
    ]
  },
  {
    "title": "Nonmetallic Minerals",
    "href": "/ore-solutions#nonmetallic-minerals",
    "text": "Quartz, graphite, fluorite, feldspar, and barite purification routes for industrial mineral markets.",
    "products": [
      {
        "slug": "quartz-silica",
        "title": "Quartz & Silica Processing",
        "shortTitle": "Quartz / Silica"
      },
      {
        "slug": "graphite",
        "title": "Graphite Processing",
        "shortTitle": "Graphite"
      },
      {
        "slug": "fluorite",
        "title": "Fluorite Processing",
        "shortTitle": "Fluorite"
      },
      {
        "slug": "feldspar",
        "title": "Feldspar Processing",
        "shortTitle": "Feldspar"
      },
      {
        "slug": "barite",
        "title": "Barite Processing",
        "shortTitle": "Barite"
      }
    ]
  }
];

export function getOreProductBySlug(slug: string) {
  return oreProducts.find((product) => product.slug === slug);
}

export function getRelatedOreProducts(slugs: string[]) {
  return slugs
    .map((slug) => getOreProductBySlug(slug))
    .filter((product): product is OreProduct => Boolean(product));
}
