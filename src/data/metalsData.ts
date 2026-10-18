/**
 * VEDANTA METAL INC
 * Official Business & Technical Metallurgy Data
 * Strict adherence to provided specifications: NO invented grades or unsupported statistics.
 */

export interface MaterialCategory {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  grades: string[];
  specificationNote: string;
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
    name: "STAINLESS STEEL",
    shortDesc: "Comprehensive stock of austenitic, ferritic, and martensitic stainless steel grades for corrosion-resistant and structural applications.",
    image: "/src/assets/images/stainless_steel_inventory_1792267828128.jpg",
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
    specificationNote: "Available for procurement enquiries across standard sheet, plate, coil, pipe, and bar specifications."
  },
  {
    id: "nickel-alloys",
    name: "NICKEL & HIGH-TEMPERATURE ALLOYS",
    shortDesc: "High-performance nickel, inconel, monel, and hastelloy alloys engineered for extreme thermal resistance and aggressive corrosive environments.",
    image: "/src/assets/images/nickel_alloys_bars_1792267828815.jpg",
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
    specificationNote: "Technical supply for chemical processing, marine, high-pressure, and high-temperature service."
  },
  {
    id: "duplex-steel",
    name: "DUPLEX & SUPER DUPLEX STEEL",
    shortDesc: "Dual-phase austenitic-ferritic microstructures offering superior mechanical tensile yield strength and resistance to pitting and crevice corrosion.",
    image: "/src/assets/images/duplex_steel_pipes_1792267829786.jpg",
    grades: [
      "UNS 31803",
      "1.4462",
      "UNS 32205",
      "2507",
      "UNS 32750",
      "UNS 32760"
    ],
    specificationNote: "Specified for offshore, desalination, subsea, and severe industrial pressure piping systems."
  },
  {
    id: "titanium-alloys",
    name: "TITANIUM ALLOYS",
    shortDesc: "High strength-to-density ratio materials with exceptional corrosion resistance in harsh chlorides, acids, and aerospace environments.",
    image: "/src/assets/images/stainless_flat_bars_patta_patti_1792269000319.jpg",
    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5",
      "Grade 7",
      "Grade 12",
      "Grade 23",
      "6Al-4V"
    ],
    specificationNote: "Commercial pure and alpha-beta alloy grades for precision engineering, chemical vessels, and aerospace components."
  },
  {
    id: "aluminium-copper-brass",
    name: "ALUMINIUM, COPPER & BRASS",
    shortDesc: "High-conductivity copper and corrosion-resistant brass alloys suited for electrical, thermal, marine, and architectural engineering.",
    image: "/src/assets/images/titanium_copper_materials_1792267829308.jpg",
    grades: [
      "DHP Copper",
      "ETP Copper",
      "DPA Copper",
      "OFHC Copper",
      "63/67 Brass",
      "Admiralty Brass"
    ],
    specificationNote: "Electrolytic and deoxidized high-conductivity coppers, plus marine-grade condenser brass alloys."
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
    image: "/src/assets/images/stainless_steel_inventory_1792267828128.jpg"
  },
  {
    title: "Specialty Nickel Alloy Round Bars",
    category: "Nickel & High-Temp",
    tag: "Forged & Turned Stock",
    image: "/src/assets/images/nickel_alloys_bars_1792267828815.jpg"
  },
  {
    title: "Seamless Duplex Steel Pipes",
    category: "Duplex & Super Duplex",
    tag: "Heavy-Wall Industrial Pipes",
    image: "/src/assets/images/duplex_steel_pipes_1792267829786.jpg"
  },
  {
    title: "Precision Metal Flats & Slit Plates (Patta Patti)",
    category: "Flat Bars & Strips",
    tag: "Industrial Flat Stock",
    image: "/src/assets/images/stainless_flat_bars_patta_patti_1792269000319.jpg"
  },
  {
    title: "Heavy Stainless Steel Plate Inventory",
    category: "Stainless Steel",
    tag: "Industrial Cut Plates",
    image: "/src/assets/images/hero_industrial_metals_1792267826893.jpg"
  },
  {
    title: "Industrial Metal Stock & Logistics",
    category: "Material Staging",
    tag: "Engineering Metal Supply",
    image: "/src/assets/images/stainless_steel_inventory_1792267828128.jpg"
  }
];
