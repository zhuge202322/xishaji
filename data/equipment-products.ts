import { equipmentGroups } from "@/data/site";

type CategoryBlueprint = {
  heroImage: string;
  processRole: string;
  applications: string[];
  selectionFactors: string[];
  technicalFocus: string[];
};

type ProductSeed = {
  summary: string;
  advantages: string[];
  applications?: string[];
  technicalFocus?: string[];
};

export type EquipmentProduct = {
  slug: string;
  title: string;
  category: string;
  categoryHref: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  processRole: string;
  advantages: string[];
  applications: string[];
  selectionFactors: string[];
  technicalFocus: string[];
  relatedTitles: string[];
};

const categoryBlueprints: Record<string, CategoryBlueprint> = {
  "Crushing & Screening": {
    heroImage: "/images/workshop-wide.webp",
    processRole:
      "Placed in the front-end reduction and classification stage, this equipment helps stabilize feed size, product grading, and downstream plant load.",
    applications: ["Quarry aggregates", "Hard rock crushing", "Manufactured sand", "Ore preparation"],
    selectionFactors: ["Material hardness and abrasiveness", "Maximum feed size", "Target output size", "Required hourly capacity"],
    technicalFocus: ["Wear part life", "Feed stability", "Discharge control", "Maintenance access"]
  },
  "Grinding & Classification": {
    heroImage: "/images/grinding-equipment.webp",
    processRole:
      "Used after crushing to liberate valuable minerals or control powder size before classification, separation, and collection.",
    applications: ["Ore grinding", "Mineral liberation", "Powder preparation", "Closed-circuit classification"],
    selectionFactors: ["Feed particle size", "Required fineness", "Wet or dry operation", "Circulating load and classification target"],
    technicalFocus: ["Grinding efficiency", "Liner and media wear", "Classification accuracy", "Energy planning"]
  },
  "Beneficiation Equipment": {
    heroImage: "/images/product-inspection.webp",
    processRole:
      "Installed in the separation stage to improve concentrate grade, mineral recovery, and tailings value recovery.",
    applications: ["Gold recovery", "Copper and lead-zinc flotation", "Iron and manganese separation", "Nonmetallic purification"],
    selectionFactors: ["Ore mineral composition", "Liberation size", "Pulp density", "Target grade and recovery"],
    technicalFocus: ["Separation efficiency", "Recovery stability", "Process matching", "Operating adjustment range"]
  },
  "Thickening & Dewatering": {
    heroImage: "/images/gallery/workshop-assembly-03.webp",
    processRole:
      "Used after concentration or washing to control slurry water, improve solids handling, and prepare concentrate or tailings for transport.",
    applications: ["Concentrate dewatering", "Tailings thickening", "Water recycling", "Sludge and mud treatment"],
    selectionFactors: ["Slurry concentration", "Particle size distribution", "Required underflow density", "Filtrate or overflow clarity"],
    technicalFocus: ["Moisture reduction", "Water recovery", "Automation readiness", "Wear and corrosion resistance"]
  },
  "Supporting Systems": {
    heroImage: "/images/workshop-line.webp",
    processRole:
      "Connects crushing, grinding, separation, dosing, and discharge equipment so the full plant can run as one stable process.",
    applications: ["Material conveying", "Slurry conditioning", "Reagent preparation", "Plant process connection"],
    selectionFactors: ["Layout height difference", "Material flow rate", "Slurry density", "Automation and maintenance requirements"],
    technicalFocus: ["Continuous operation", "Process continuity", "Low maintenance", "Layout compatibility"]
  },
  "Wet Washing": {
    heroImage: "/images/washing-equipment.webp",
    processRole:
      "Used before or after crushing to remove mud, recover fine sand, control moisture, and support cleaner aggregate or ore preparation.",
    applications: ["Ore washing", "Sand washing", "Fine sand recovery", "Mud-water treatment"],
    selectionFactors: ["Mud content", "Feed size", "Required cleanliness", "Water supply and recycling plan"],
    technicalFocus: ["Cleaning efficiency", "Fine material recovery", "Water saving", "Wear resistance"]
  }
};

const productSeeds: Record<string, ProductSeed> = {
  "HST single-cylinder cone crusher": {
    summary:
      "A hydraulic cone crusher for secondary and tertiary hard-rock reduction, combining crushing force, hydraulic adjustment, and intelligent protection.",
    advantages: ["High capacity with lower energy consumption", "Hydraulic overload protection and automatic cavity clearing", "Stable product size for aggregate and ore plants"],
    technicalFocus: ["Hydraulic setting adjustment", "Laminated crushing chamber", "Remote-control readiness"]
  },
  "CS multi-cylinder cone crusher": {
    summary:
      "A multi-cylinder cone crusher for high-capacity hard rock crushing where finished particle shape and wear cost matter.",
    advantages: ["Laminated crushing improves cubic product shape", "Multiple hydraulic cylinders support clearing and adjustment", "Suitable for high-quality aggregate and ore reduction"],
    technicalFocus: ["Multi-cylinder hydraulic system", "Thin-oil lubrication", "High-load frame structure"]
  },
  "C series impact crusher": {
    summary:
      "An impact crusher for medium-hard materials and aggregate shaping, using rotor impact energy to produce controlled cubic output.",
    advantages: ["Large inlet and strong rotor inertia", "Good particle shape for construction aggregate", "Adjustable impact gap for output control"],
    technicalFocus: ["Rotor balance", "Impact plate adjustment", "Wear liner selection"]
  },
  "PF impact crusher": {
    summary:
      "A classic impact crusher for limestone, concrete aggregate, and medium-hard rock applications requiring good shape and simple maintenance.",
    advantages: ["High crushing ratio with compact structure", "Convenient discharge adjustment", "Low stone powder content in suitable materials"],
    technicalFocus: ["Blow bar wear life", "Impact chamber geometry", "Feed size control"]
  },
  "PCZ/X heavy hammer crusher": {
    summary:
      "A heavy hammer crusher for large reduction ratio and shorter crushing flows, often used when one machine can replace multi-stage reduction.",
    advantages: ["Large crushing ratio reduces process stages", "Simple flow with fewer supporting machines", "Strong impact crushing for limestone and similar materials"],
    technicalFocus: ["Hammer head material", "Rotor load", "Discharge grate configuration"]
  },
  "VSI sand maker": {
    summary:
      "A vertical shaft impact crusher for manufactured sand and aggregate shaping, using rock-on-rock or rock-on-iron crushing modes.",
    advantages: ["Improves particle shape and grading", "Supports fine crushing and sand making", "Works with screening and washing modules in complete sand lines"],
    technicalFocus: ["Rotor speed", "Crushing mode selection", "Finished sand gradation"]
  },
  "YK vibrating screen": {
    summary:
      "A circular vibrating screen for aggregate and ore classification, designed for stable grading in crushing and sand production lines.",
    advantages: ["High screening efficiency and clean classification", "Durable exciter and anti-vibration structure", "Low noise and stable continuous operation"],
    technicalFocus: ["Screen layer configuration", "Mesh aperture", "Vibration amplitude"]
  },
  "HD / HD-S heavy vibrating screen": {
    summary:
      "A heavy-duty vibrating screen for high-load screening after primary crushing or in large aggregate production.",
    advantages: ["Strong exciter structure for large materials", "Wear protection in key contact areas", "Oil lubrication reduces routine maintenance effort"],
    technicalFocus: ["Heavy-duty deck structure", "Exciter lubrication", "Feed impact protection"]
  },
  "VHS three-axis elliptical screen": {
    summary:
      "A three-axis elliptical vibrating screen for difficult screening duties where high acceleration and anti-blocking performance are required.",
    advantages: ["Elliptical motion combines circular and linear screening benefits", "High vibration intensity improves stratification", "Adjustable external eccentric blocks support site tuning"],
    technicalFocus: ["Three-axis gear synchronization", "High-G screening", "Anti-blocking deck design"]
  },
  "GS heavy bar screen": {
    summary:
      "A heavy bar screen for pre-screening and scalping large feed before crushing, helping protect downstream crushers.",
    advantages: ["Stepped bars reduce material jamming", "High vibration intensity improves coarse separation", "Suitable for heavy feed and harsh site conditions"],
    technicalFocus: ["Bar spacing", "Feed impact load", "Scalping efficiency"]
  },
  "ZSG heavy linear screen": {
    summary:
      "A heavy linear vibrating screen for dry or wet classification, suitable for high-throughput mineral and aggregate processes.",
    advantages: ["Linear motion supports efficient material travel", "Multiple screen surface options fit different duties", "Compact body with strong processing capacity"],
    technicalFocus: ["Linear vibration drive", "Deck modularity", "Screening angle"]
  },
  "FYB square tumbler screen": {
    summary:
      "A square tumbler screen for precision screening where fine particle separation and gentle material movement are important.",
    advantages: ["High-precision screening for fine materials", "Gentle motion helps reduce screen blinding", "Multiple deck options for narrow grading requirements"],
    technicalFocus: ["Screening precision", "Deck sealing", "Fine-particle throughput"]
  },
  "TS high-frequency dewatering screen": {
    summary:
      "A high-frequency dewatering screen for removing water, slime, and fine particles from sand, concentrate, or tailings streams.",
    advantages: ["Polyurethane screen panels resist wear and impact", "High-frequency vibration improves moisture reduction", "Compact equipment for washing and dewatering circuits"],
    technicalFocus: ["Screen panel aperture", "Vibration frequency", "Final moisture target"]
  },
  "Trommel screen": {
    summary:
      "A rotary trommel screen for washing, sizing, and separating sticky or clay-bearing materials before downstream processing.",
    advantages: ["Rotary action handles sticky feed more gently", "Good for ore washing and coarse classification", "Simple structure for continuous screening duty"],
    technicalFocus: ["Drum length and diameter", "Screen hole size", "Spray and washing arrangement"]
  },
  "High-efficiency autogenous mill": {
    summary:
      "A self-grinding mill that uses ore itself as grinding media, reducing auxiliary crushing stages for suitable materials.",
    advantages: ["Can combine crushing and grinding duties", "Lower dust and fewer auxiliary machines", "Useful for large reduction ratio grinding circuits"],
    technicalFocus: ["Ore competency", "Mill filling rate", "Discharge particle control"]
  },
  "Grid-type ball mill": {
    summary:
      "A grid-discharge ball mill for faster ore discharge and coarse grinding duties in mineral processing plants.",
    advantages: ["Grid discharge improves throughput", "Jack-up device supports maintenance", "Stable operation with dynamic and static pressure bearings"],
    technicalFocus: ["Grinding media loading", "Grid plate configuration", "Discharge size"]
  },
  "Overflow ball mill": {
    summary:
      "An overflow ball mill for fine grinding where smooth discharge and stable product size are preferred.",
    advantages: ["Suitable for fine grinding and regrinding", "Simple overflow discharge structure", "Reliable bearing and slow-drive maintenance design"],
    technicalFocus: ["Overflow level", "Grinding fineness", "Circulating load"]
  },
  "Rod mill": {
    summary:
      "A rod mill for controlled coarse grinding and sand preparation, reducing over-grinding through line-contact grinding.",
    advantages: ["Reduces excessive fines in suitable circuits", "Good for sand preparation and ore grinding", "Can save power compared with some traditional flows"],
    technicalFocus: ["Rod charge", "Feed size", "Open or closed circuit use"]
  },
  "Dry ball mill": {
    summary:
      "A dry grinding ball mill for materials that cannot use water or require dry powder output before classification and collection.",
    advantages: ["Dry process avoids slurry handling", "Can pair with air classification and dust collection", "Suitable for mineral powder production lines"],
    technicalFocus: ["Ventilation and dust collection", "Liner selection", "Output fineness"]
  },
  "Long-cylinder ball mill": {
    summary:
      "A long-cylinder ball mill for multi-stage grinding, often used when longer retention time and fine output are needed.",
    advantages: ["Multi-chamber grinding supports finer products", "Strong capacity for continuous industrial production", "Easy to integrate into closed-circuit grinding systems"],
    technicalFocus: ["Chamber grading", "Mill length ratio", "Classifier matching"]
  },
  Hydrocyclone: {
    summary:
      "A hydrocyclone for slurry classification, desliming, and concentration in grinding, washing, and beneficiation circuits.",
    advantages: ["Tangential feed improves centrifugal classification", "Wear-resistant lining extends service life", "Compact footprint with high classification efficiency"],
    technicalFocus: ["Apex and vortex finder size", "Feed pressure", "Cut size control"]
  },
  "Spiral classifier": {
    summary:
      "A spiral classifier for wet mineral classification, returning coarse particles to the mill while sending qualified slurry onward.",
    advantages: ["Simple structure and stable operation", "Useful in closed-circuit grinding", "Helps control particle size before separation"],
    technicalFocus: ["Spiral speed", "Overflow fineness", "Tank slope"]
  },
  "Cyclone powder separator": {
    summary:
      "A cyclone powder separator for dry powder classification, improving finished powder fineness control in grinding systems.",
    advantages: ["High classification efficiency", "Lower energy use than many traditional separators", "Compact system arrangement with fan and discharge components"],
    technicalFocus: ["Air volume", "Rotor or baffle adjustment", "Collection efficiency"]
  },
  "SF mechanical agitation flotation cell": {
    summary:
      "A self-aspirating mechanical flotation cell for mineral separation in gold, copper, lead-zinc, and nonmetallic ore circuits.",
    advantages: ["Double-sided impeller supports slurry circulation", "Large air intake and good bubble dispersion", "Forward-inclined tank reduces dead zones"],
    technicalFocus: ["Impeller clearance", "Air intake", "Froth movement"]
  },
  "XCF air inflation flotation cell": {
    summary:
      "An air-inflation flotation cell with strong agitation, often used with KYF cells for efficient mineral separation.",
    advantages: ["Strong agitation and even air dispersion", "Low tailing deposition", "Can create negative pressure for slurry suction"],
    technicalFocus: ["Air distribution", "Stator configuration", "Reagent matching"]
  },
  "KYF air inflation flotation cell": {
    summary:
      "An external-air flotation cell for large-capacity separation, designed for lower power use and stable gas-slurry mixing.",
    advantages: ["Small impeller diameter reduces energy consumption", "Air distributor improves bubble uniformity", "Suitable for continuous flotation sections"],
    technicalFocus: ["External air supply", "Impeller speed", "Cell arrangement"]
  },
  "Diaphragm jig": {
    summary:
      "A diaphragm jig for gravity concentration of coarse, medium, and fine mineral particles where density difference is clear.",
    advantages: ["Wide stroke adjustment for different ore sizes", "High enrichment ratio and recovery", "Compact structure with simple operation"],
    technicalFocus: ["Stroke and frequency", "Bed layer control", "Particle size range"]
  },
  "Sawtooth wave jig": {
    summary:
      "A sawtooth wave jig for gravity separation with strong pulsation control and broad particle-size adaptability.",
    advantages: ["Large processing capacity", "High recovery for heavy minerals", "Easy installation and maintenance"],
    technicalFocus: ["Sawtooth pulsation", "Water supply", "Discharge control"]
  },
  "Centrifugal concentrator": {
    summary:
      "A centrifugal concentrator for enhanced gravity recovery of fine heavy minerals such as gold, tin, tungsten, and tantalum.",
    advantages: ["Centrifugal force improves fine-particle recovery", "Compact footprint and automated operation options", "Low operating cost with wear-resistant parts"],
    technicalFocus: ["Bowl speed", "Rinse water", "Feed density"]
  },
  "Bowl concentrator": {
    summary:
      "A bowl concentrator for high enrichment gravity separation, commonly used for fine gold and heavy mineral recovery.",
    advantages: ["High enrichment ratio", "Helps recover fine valuable particles", "Self-cleaning groove options reduce manual work"],
    technicalFocus: ["Bowl groove design", "Cleaning cycle", "Feed consistency"]
  },
  "Shaking table": {
    summary:
      "A shaking table for final gravity concentration, giving visible mineral bands and high-grade concentrate separation.",
    advantages: ["High enrichment ratio in one pass", "Clear mineral zoning makes operation intuitive", "Suitable for gold, tin, tungsten, and other heavy minerals"],
    technicalFocus: ["Deck slope", "Stroke frequency", "Wash water control"]
  },
  "Spiral chute": {
    summary:
      "A spiral chute for gravity separation without external power, used for mineral pre-concentration and tailings recovery.",
    advantages: ["No power required for separation", "Lightweight and corrosion resistant", "Accurate splitting with high recovery potential"],
    technicalFocus: ["Feed density", "Splitter position", "Spiral pitch"]
  },
  "CT permanent magnetic drum separator": {
    summary:
      "A permanent magnetic drum separator for recovering magnetic minerals and removing magnetic impurities from slurry streams.",
    advantages: ["Optimized magnetic circuit improves recovery", "Multiple tank types fit different process duties", "Heavy-duty structure handles abrasive mineral slurry"],
    technicalFocus: ["Magnetic field intensity", "Tank type", "Drum speed"]
  },
  "High-gradient magnetic separator": {
    summary:
      "A high-gradient magnetic separator for weakly magnetic minerals and fine impurity removal in metallic and nonmetallic processing.",
    advantages: ["High background magnetic field for fine separation", "Water-cooled design supports stable operation", "Pulsation and backwash help prevent matrix blockage"],
    technicalFocus: ["Matrix selection", "Background field strength", "Pulsation settings"]
  },
  "Permanent magnetic pulley": {
    summary:
      "A permanent magnetic pulley for belt conveyor head-end separation, removing magnetic material before or after crushing.",
    advantages: ["Large magnetic wrap angle improves separation", "Permanent magnets keep operating cost low", "Protects downstream equipment from magnetic tramp material"],
    technicalFocus: ["Belt width", "Magnetic depth", "Material layer thickness"]
  },
  "Hydraulic center-drive high-efficiency thickener": {
    summary:
      "A center-drive thickener with hydraulic drive and automatic rake lifting for slurry clarification and concentration.",
    advantages: ["Large handling capacity and high thickening efficiency", "Hydraulic overload protection", "PLC pressure sensing can trigger automatic rake lifting"],
    technicalFocus: ["Rake torque", "Underflow density", "Flocculant system"]
  },
  "Peripheral drive thickener": {
    summary:
      "A peripheral drive thickener for first-stage wet concentrate or tailings dewatering in mineral and chemical plants.",
    advantages: ["Bridge structure provides strong rigidity", "Peripheral drive offers low energy use and stable running", "Simple operation with remote-control options"],
    technicalFocus: ["Tank diameter", "Peripheral drive type", "Overflow clarity"]
  },
  "Deep cone thickener": {
    summary:
      "A deep cone thickener for high-concentration underflow and clean overflow in tailings, concentrate, and wastewater duties.",
    advantages: ["Vertical cone structure supports high underflow density", "Flocculant addition accelerates settling", "Can achieve much higher capacity than traditional thickeners in suitable duties"],
    technicalFocus: ["Feedwell design", "Flocculant dosing", "Underflow rheology"]
  },
  "Ceramic vacuum filter": {
    summary:
      "A ceramic vacuum filter using microporous ceramic plates for energy-saving solid-liquid separation and clear filtrate recovery.",
    advantages: ["Very low energy consumption compared with traditional vacuum filtration", "High vacuum supports low cake moisture", "Clear filtrate can be recycled back into the system"],
    technicalFocus: ["Ceramic plate cleaning", "Vacuum level", "Cake moisture"]
  },
  "Disc vacuum filter": {
    summary:
      "A disc vacuum filter for fine concentrate and tailings dewatering, especially in flotation and nonferrous metal circuits.",
    advantages: ["Compact footprint with strong adsorption capacity", "Plastic fan-shaped sectors improve service life", "Convenient speed regulation for different materials"],
    technicalFocus: ["Disc area", "Vacuum system", "Filter cake discharge"]
  },
  "Filter press": {
    summary:
      "A filter press for pressure-driven solid-liquid separation, producing low-moisture cakes and clear filtrate.",
    advantages: ["High pressure creates drier filter cake", "Strong frame and corrosion-resistant plates", "Automatic plate pulling options reduce labor intensity"],
    technicalFocus: ["Filtration pressure", "Plate size and chamber count", "Cycle time"]
  },
  "Belt conveyor": {
    summary:
      "A belt conveyor for continuous material transfer between crushing, screening, grinding, and stockpile points.",
    advantages: ["Large conveying capacity and long-distance transport", "Works with dry, wet, powder, lump, and packaged materials", "Simple structure with easy maintenance"],
    technicalFocus: ["Belt width and speed", "Transfer height", "Dust and spillage control"]
  },
  "High-efficiency agitation tank": {
    summary:
      "A high-efficiency agitation tank for slurry and reagent mixing before flotation, leaching, or other separation stages.",
    advantages: ["Special impeller improves uniform mixing", "Directional circulation reduces dead zones", "Better conditioning can support downstream recovery"],
    technicalFocus: ["Impeller diameter", "Tank volume", "Mixing intensity"]
  },
  "Slurry lifting agitation tank": {
    summary:
      "A slurry lifting agitation tank that mixes and raises slurry where gravity flow height is insufficient.",
    advantages: ["Solves process elevation gaps without a separate pump in suitable layouts", "Keeps solids suspended while lifting slurry", "Improves reagent contact before flotation"],
    technicalFocus: ["Lift height", "Slurry density", "Overflow arrangement"]
  },
  "Standard agitation tank": {
    summary:
      "A standard agitation tank for keeping slurry suspended and evenly mixed in mineral processing circuits.",
    advantages: ["Simple structure with low operating cost", "Prevents slurry settlement", "Stable operation with low maintenance requirements"],
    technicalFocus: ["Tank volume", "Impeller speed", "Residence time"]
  },
  "Reagent agitation tank": {
    summary:
      "A reagent agitation tank for preparing and mixing flotation reagents, helping maintain stable dosing concentration.",
    advantages: ["Strong mixing keeps reagent solution uniform", "Compact structure with good sealing", "Flexible water adjustment supports different reagent requirements"],
    technicalFocus: ["Reagent concentration", "Anti-settlement mixing", "Dosing connection"]
  },
  "RX series ore washer": {
    summary:
      "A double-shaft ore washer for removing clay and mud before crushing, screening, or beneficiation.",
    advantages: ["High-chromium blades resist wear", "Large shaft design improves running stability", "Spiral paddles distribute load across the shaft and shell"],
    technicalFocus: ["Mud content", "Blade material", "Residence time"]
  },
  "Spiral sand washer": {
    summary:
      "A spiral sand washer for washing, grading, and impurity removal in sand, aggregate, and mineral processing lines.",
    advantages: ["Stable operation and clean washed product", "Optimized drainage reduces final moisture", "Wear-resistant spiral blades reduce operating cost"],
    technicalFocus: ["Spiral speed", "Overflow weir", "Washed sand cleanliness"]
  },
  "Wheel sand washer": {
    summary:
      "A wheel sand washer for high-grade sand cleaning with low sand loss and simple mechanical structure.",
    advantages: ["Bearing isolation reduces water and sand contamination", "Low fine sand and stone powder loss", "Large capacity with low power consumption"],
    technicalFocus: ["Wheel speed", "Screen opening", "Discharge chute design"]
  },
  "Sand washing, dewatering and recovery unit": {
    summary:
      "An integrated unit combining sand washing, dewatering, and fine sand recovery for cleaner finished sand and higher yield.",
    advantages: ["One machine combines three washing-stage functions", "Reduces finished sand moisture and mud content", "Improves fine sand recovery and overall product quality"],
    technicalFocus: ["Cyclone matching", "Dewatering screen aperture", "Fine sand return rate"]
  },
  "Fine sand recovery machine": {
    summary:
      "A fine sand recovery machine for reclaiming particles above about 0.075 mm from slurry and reducing valuable sand loss.",
    advantages: ["Combines hydrocyclone separation and dewatering", "Improves resource utilization in washing lines", "Polyurethane liners and panels resist wear"],
    technicalFocus: ["Pump flow", "Cyclone cut size", "Recovered fines moisture"]
  },
  "Rotary ore washer": {
    summary:
      "A rotary ore washer for clay-rich ore and stone washing, using drum tumbling and water flushing to separate mud from valuable material.",
    advantages: ["Strong washing action for mud-coated ore", "Can accept large feed size in suitable designs", "Integrated frame supports easier site arrangement"],
    technicalFocus: ["Drum speed", "Spray water pressure", "Feed clay content"]
  },
  Scrubber: {
    summary:
      "A scrubber for high-intensity washing and attrition of mineral slurry, especially silica sand and clay-bearing materials.",
    advantages: ["Strong attrition improves surface cleaning", "Useful before separation or purification", "Tank and impeller layout can be matched to site needs"],
    technicalFocus: ["Pulp density", "Scrubbing time", "Impeller arrangement"]
  }
};

export function slugifyEquipmentTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSeed(title: string, category: string): ProductSeed {
  const blueprint = categoryBlueprints[category];

  return (
    productSeeds[title] ?? {
      summary: `${title} is configured for ${category.toLowerCase()} duties in complete mining and aggregate production lines.`,
      advantages: blueprint.technicalFocus.slice(0, 3).map((focus) => `Engineered around ${focus.toLowerCase()} for stable site operation.`)
    }
  );
}

export const equipmentProducts: EquipmentProduct[] = Array.from(
  equipmentGroups
    .flatMap((group) =>
      group.items.map((title) => {
        const blueprint = categoryBlueprints[group.title];
        const seed = getSeed(title, group.title);

        return {
          slug: slugifyEquipmentTitle(title),
          title,
          category: group.title,
          categoryHref: group.href,
          summary: seed.summary,
          heroImage: blueprint.heroImage,
          heroAlt: `${title} for ${group.title.toLowerCase()} applications`,
          processRole: blueprint.processRole,
          advantages: seed.advantages,
          applications: [...new Set([...(seed.applications ?? []), ...blueprint.applications])],
          selectionFactors: blueprint.selectionFactors,
          technicalFocus: [...new Set([...(seed.technicalFocus ?? []), ...blueprint.technicalFocus])],
          relatedTitles: group.items.filter((item) => item !== title).slice(0, 6)
        } satisfies EquipmentProduct;
      })
    )
    .reduce((map, product) => {
      if (!map.has(product.slug)) {
        map.set(product.slug, product);
      }

      return map;
    }, new Map<string, EquipmentProduct>())
    .values()
);

export function getEquipmentProductBySlug(slug: string) {
  return equipmentProducts.find((product) => product.slug === slug);
}

export function getEquipmentProductByTitle(title: string) {
  const slug = slugifyEquipmentTitle(title);
  return getEquipmentProductBySlug(slug);
}
