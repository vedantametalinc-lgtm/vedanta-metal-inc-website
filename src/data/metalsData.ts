/**
 * VEDANTA METAL INC
 * Official Business & Technical Metallurgy Data
 * Strict adherence to provided specifications: NO invented grades or unsupported statistics.
 */

import duplexSteelPipesImage from "../assets/images/duplex_steel_pipes_1792267829786.jpg";
import heroIndustrialMetalsImage from "../assets/images/hero_industrial_metals_1792267826893.jpg";
import nickelAlloysBarsImage from "../assets/images/nickel_alloys_bars_1792267828815.jpg";
import stainlessFlatBarsImage from "../assets/images/stainless_flat_bars_patta_patti_1792269000319.jpg";
import stainlessSteelInventoryImage from "../assets/images/stainless_steel_inventory_1792267828128.jpg";
import titaniumCopperMaterialsImage from "../assets/images/titanium_copper_materials_1792267829308.jpg";

export interface MaterialCategory {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  detailedDesc: string;
  image: string;
  grades: string[];
  specificationNote: string;
  availableForms: string[];
  keyProperties: string[];
  serviceEnvironments: string[];
}

export const COMPANY_INFO = {
  name: "VEDANTA METAL INC",
  positioning: "Stockist & Supplier of Stainless Steel, Duplex, Nickel Alloys & Titanium Alloys",
  eyebrow: "INDUSTRIAL METALS STOCKIST & SUPPLIER",
  headline: "Premium Stainless Steel & Specialty Alloy Solutions for Demanding Industries",
  subheading: "Stockist & Supplier of Stainless Steel, Duplex, Nickel Alloys & Titanium Alloys",
  supportingText: "Supplying industrial metal products and alloy materials for engineering, manufacturing and demanding industrial applications.",
  phone: "+91 96366 36229",
  phoneRaw: "+919636636229",
  emails: [
    "sales@vedantametalinc.com",
    "vedantametalinc@gmail.com"
  ],
  address: "1st Floor, 408/428, 2A, Harharwala Building, Patthe Baburao Marg, Gol Pittha Junction, Girgaon, Mumbai - 400004, India",
  gstin: "27ABBFV9309F1Z0",
  whatsappPrefilledMessage: "Hello VEDANTA METAL INC, I would like to enquire about your metal products."
};

export const MATERIAL_CATEGORIES: MaterialCategory[] = [
  {
    id: "stainless-steel",
    slug: "stainless-steel",
    name: "STAINLESS STEEL",
    shortDesc: "Comprehensive stock of austenitic, ferritic, and martensitic stainless steel grades for corrosion-resistant and structural applications.",
    detailedDesc: "VEDANTA METAL INC supplies high-integrity stainless steel materials designed for engineering resilience across chemical, marine, architectural, food-grade, and severe atmospheric environments. Stocked across an exhaustive spectrum of standard austenitic, ferritic, and martensitic specifications.",
    image: stainlessSteelInventoryImage,
    grades: [
      "AISI 304",
      "AISI 316",
      "316L",
      "321",
      "309S",
      "317L",
      "409M",
      "410S",
      "430",
      "202",
      "202L"
    ],
    specificationNote: "Available for procurement enquiries across standard sheet, plate, coil, pipe, flat bar (patta patti), and round bar specifications.",
    availableForms: [
      "Hot & Cold Rolled Sheets",
      "Heavy Industrial Plates",
      "Slit Coils & Strips",
      "Flat Bars (Patta Patti)",
      "Round Bars & Hex Bars",
      "Seamless & ERW Pipes",
      "Butt-Weld Fittings & Flanges"
    ],
    keyProperties: [
      "Pitting and general corrosion resistance",
      "High cryogenic and high-temperature ductility",
      "Excellent machinability and weldability",
      "Hygienic and easily sanitizable finish"
    ],
    serviceEnvironments: [
      "Chemical & Acid Processing Plants",
      "Marine & Coastal Infrastructure",
      "Food, Dairy & Beverage Processing",
      "Architectural Panels & Structural Supports"
    ]
  },
  {
    id: "nickel-alloys",
    slug: "nickel-alloys",
    name: "NICKEL & HIGH-TEMPERATURE ALLOYS",
    shortDesc: "High-performance nickel, inconel, monel, and hastelloy alloys engineered for extreme thermal resistance and aggressive corrosive environments.",
    detailedDesc: "Specialty high-temperature and extreme-corrosion superalloys supplied by VEDANTA METAL INC to withstand oxidizing acids, reducing chemical media, stress corrosion cracking, and severe service temperatures exceeding 1000°C.",
    image: nickelAlloysBarsImage,
    grades: [
      "Nickel 200",
      "Nickel 201",
      "Monel 400",
      "Monel K500",
      "Alloy 600",
      "Alloy 601",
      "Alloy 800",
      "Alloy 800H",
      "Inconel 625",
      "Inconel X-750",
      "Hastelloy C276",
      "Hastelloy C22"
    ],
    specificationNote: "Technical supply for chemical processing, marine, high-pressure, and high-temperature service.",
    availableForms: [
      "Precision Turned Round Bars",
      "Heavy Forged Billets & Blocks",
      "High-Temperature Pressure Plates",
      "Seamless Heavy-Wall Tubes",
      "Custom Machined Precision Blanks",
      "Flanges & Fastener Stock"
    ],
    keyProperties: [
      "Thermal oxidation resistance up to 1150°C",
      "Immunity to chloride stress corrosion cracking",
      "Exceptional resistance to hydrofluoric and sulfuric acids",
      "Superior creep-rupture tensile strength"
    ],
    serviceEnvironments: [
      "Aerospace Afterburners & Turbine Casing",
      "Chemical Synthesis & Chlorination Scrubbers",
      "Sour Gas / Oilfield Downhole Equipment",
      "Nuclear Steam Generators & Reheaters"
    ]
  },
  {
    id: "duplex-steel",
    slug: "duplex-steel",
    name: "DUPLEX & SUPER DUPLEX STEEL",
    shortDesc: "Dual-phase austenitic-ferritic microstructures offering superior mechanical tensile yield strength and resistance to pitting and crevice corrosion.",
    detailedDesc: "Engineered dual-phase metallurgical alloys balancing approximately equal proportions of austenite and ferrite. Duplex and super duplex steels stocked by VEDANTA METAL INC provide more than double the mechanical yield strength of standard austenitic 316L, coupled with high PREN (Pitting Resistance Equivalent Number) ratings.",
    image: duplexSteelPipesImage,
    grades: [
      "UNS 31803",
      "1.4462",
      "UNS 32205",
      "2507",
      "UNS 32750",
      "UNS 32760"
    ],
    specificationNote: "Specified for offshore, desalination, subsea, and severe industrial pressure piping systems.",
    availableForms: [
      "Seamless Process Pipes",
      "Heavy Wall Riser Tubes",
      "Hot Rolled Pressure Plates",
      "Forged Flanges & Spectacle Blinds",
      "Precision Round Bars & Shafts",
      "Fittings & Manifold Tubulars"
    ],
    keyProperties: [
      "High yield strength (≥ 450 - 550 MPa)",
      "High critical pitting temperature (CPT)",
      "Resistance to erosion and sour gas cracking",
      "Significant weight-saving potential in piping design"
    ],
    serviceEnvironments: [
      "Offshore Oil & Gas Production Flowlines",
      "Reverse Osmosis Desalination Plants",
      "Subsea Manifolds & Christmas Trees",
      "Chemical Tankers & Marine Cargo Holds"
    ]
  },
  {
    id: "titanium-alloys",
    slug: "titanium-alloys",
    name: "TITANIUM ALLOYS",
    shortDesc: "High strength-to-density ratio materials with exceptional corrosion resistance in harsh chlorides, acids, and aerospace environments.",
    detailedDesc: "High-integrity titanium materials supplied by VEDANTA METAL INC for precision aerospace, offshore energy, and aggressive chemical processing. Demonstrates absolute immunity to ambient seawater corrosion and outstanding strength-to-weight performance.",
    image: stainlessFlatBarsImage,
    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5",
      "Grade 7",
      "Grade 12",
      "Grade 23",
      "6Al-4V"
    ],
    specificationNote: "Commercial pure and alpha-beta alloy grades for precision engineering, chemical vessels, and aerospace components.",
    availableForms: [
      "Precision Round Bars",
      "Titanium Flats & Strips (Patta Patti)",
      "Plates & Mill Cut Blanks",
      "Seamless Heat Exchanger Tubing",
      "Precision Wire & Fastener Rods",
      "Custom Waterjet Cut Profiles"
    ],
    keyProperties: [
      "Outstanding strength-to-weight ratio (45% lighter than steel)",
      "Total immunity to marine seawater corrosion",
      "Excellent resistance to oxidizing acids and chlorates",
      "High fracture toughness at cryogenic temperatures"
    ],
    serviceEnvironments: [
      "Aerospace Structural & Engine Mounts",
      "Chlor-Alkali & Bleaching Process Vessels",
      "Seawater Heat Exchangers & Condensers",
      "Precision Medical & Engineering Instruments"
    ]
  },
  {
    id: "aluminium-copper-brass",
    slug: "aluminium-copper-brass",
    name: "ALUMINIUM, COPPER & BRASS",
    shortDesc: "High-conductivity copper and corrosion-resistant brass alloys suited for electrical, thermal, marine, and architectural engineering.",
    detailedDesc: "Supplying premium commercial and engineering grades of deoxidized and electrolytic high-conductivity coppers, alongside marine-grade condenser and architectural brasses. Engineered for superior electrical conduction, thermal dissipation, and marine anti-fouling.",
    image: titaniumCopperMaterialsImage,
    grades: [
      "DHP Copper",
      "ETP Copper",
      "DPA Copper",
      "OFHC Copper",
      "63/67 Brass",
      "Admiralty Brass"
    ],
    specificationNote: "Electrolytic and deoxidized high-conductivity coppers, plus marine-grade condenser brass alloys.",
    availableForms: [
      "Electrical Busbars & Flat Strips",
      "Seamless Condenser & Heat Exchanger Tubes",
      "Round Solid Bars & Drawn Rods",
      "Sheets & Cold Rolled Foil Stock",
      "Precision Machining Hexagon Bars",
      "Extruded Engineering Profiles"
    ],
    keyProperties: [
      "100% IACS high electrical conductivity (ETP / OFHC)",
      "High thermal transfer coefficient",
      "Natural biofouling and antimicrobial resistance",
      "Superior cold forming and deep drawing workability"
    ],
    serviceEnvironments: [
      "Electrical Switchgear & Power Distribution",
      "Marine Condenser & Evaporator Tubing",
      "Heat Exchanger Shell & Tube Assemblies",
      "Precision Turned Fasteners & Plumbing Fittings"
    ]
  }
];

export const VALUE_STRIP_ITEMS = [
  { name: "STAINLESS STEEL", code: "304 / 316L / 321 / 430" },
  { name: "Nickel & High-Temperature Alloys", code: "Inconel / Hastelloy / Monel" },
  { name: "Duplex & Super Duplex Steel", code: "UNS 31803 / 2205 / 2507" },
  { name: "Titanium Alloys", code: "Gr 1 / Gr 2 / Gr 5 / 6Al-4V" },
  { name: "Aluminium, Copper & Brass", code: "ETP / OFHC / Admiralty" }
];

export const WHY_CHOOSE_FACTS = [
  {
    title: "Wide Material Portfolio",
    description: "A broad range of stainless steel and specialty alloy materials available to meet diverse industrial procurement requirements."
  },
  {
    title: "Industrial Product Focus",
    description: "Materials suited to engineering and industrial requirements with high structural, thermal, and chemical integrity."
  },
  {
    title: "Multiple Alloy Categories",
    description: "Comprehensive sourcing across stainless steel, nickel alloys, duplex, super duplex and titanium alloys."
  },
  {
    title: "Specification-Based Enquiries",
    description: "Support for enquiries based on required grade, dimension, form, and precise engineering material specification."
  },
  {
    title: "Professional B2B Approach",
    description: "Designed specifically around business-to-business procurement workflows, tender requirements, and EPC contractor needs."
  },
  {
    title: "Direct RFQ Communication",
    description: "Procurement teams can directly submit their material schedules and specifications for prompt enquiry handling."
  }
];

export const INDUSTRIES = [
  {
    name: "Oil & Gas",
    description: "Specialty metal materials for demanding industrial applications.",
    application: "Offshore platforms, subsea flowlines, valves, heat exchangers and wellhead equipment."
  },
  {
    name: "Petrochemical",
    description: "Materials for demanding industrial and engineering applications.",
    application: "Hydrocarbon processing units, cracking towers, reactor vessels and transfer lines."
  },
  {
    name: "Power",
    description: "Materials for demanding industrial and engineering applications.",
    application: "Thermal boilers, steam turbine systems, condensers and nuclear service piping."
  },
  {
    name: "Chemical",
    description: "Materials for demanding industrial and engineering applications.",
    application: "Corrosive acid handling, storage tanks, distillation columns and scrubbers."
  },
  {
    name: "Engineering & Manufacturing",
    description: "Materials for demanding industrial and engineering applications.",
    application: "Precision CNC machining, forged flanges, fasteners, pump shafts and heavy machinery components."
  },
  {
    name: "Construction",
    description: "Materials for demanding industrial and engineering applications.",
    application: "Structural frameworks, industrial building supports, architectural facades and heavy infrastructure."
  },
  {
    name: "Process Industries",
    description: "Materials for demanding industrial and engineering applications.",
    application: "Food and pharmaceutical processing, water desalination plants and pulp & paper mills."
  }
];

export const GALLERY_ITEMS = [
  {
    title: "Stainless Steel Coils & Slit Strip",
    category: "Stainless Steel",
    tag: "Cold & Hot Rolled Coils",
    image: stainlessSteelInventoryImage
  },
  {
    title: "Specialty Nickel Alloy Round Bars",
    category: "Nickel & High-Temp",
    tag: "Forged & Turned Stock",
    image: nickelAlloysBarsImage
  },
  {
    title: "Seamless Duplex Steel Pipes",
    category: "Duplex & Super Duplex",
    tag: "Heavy-Wall Industrial Pipes",
    image: duplexSteelPipesImage
  },
  {
    title: "Precision Metal Flats & Slit Plates (Patta Patti)",
    category: "Flat Bars & Strips",
    tag: "Industrial Flat Stock",
    image: stainlessFlatBarsImage
  },
  {
    title: "Heavy Stainless Steel Plate Inventory",
    category: "Stainless Steel",
    tag: "Industrial Cut Plates",
    image: heroIndustrialMetalsImage
  },
  {
    title: "Industrial Metal Stock & Logistics",
    category: "Material Staging",
    tag: "Engineering Metal Supply",
    image: stainlessSteelInventoryImage
  }
];
