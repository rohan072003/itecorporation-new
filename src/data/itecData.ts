export interface ProductItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  standardRating?: string;
  iconName: string;
  image: string;
  keySpecs: string[];
  applications: string;
  compliance?: string;
}

export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  applicationNote: string;
  iconName: string;
}

export interface CertItem {
  id: string;
  title: string;
  scope: string;
  badge: string;
}

export interface ExportStepItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyAction: string;
}

export interface CapabilityLifecycleStep {
  step: string;
  title: string;
  description: string;
}

export interface RequirementSpec {
  name: string;
  example: string;
  icon: string;
}

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "servo-controlled-voltage-stabilizer",
    name: "Servo Controlled Voltage Stabilizer",
    category: "Voltage Regulation",
    shortDesc: "High-precision servo motor driven voltage regulation for industrial machinery, CNCs, and sensitive loads with fast correction speed.",
    standardRating: "1 kVA to 3000 kVA (1-Ph & 3-Ph)",
    iconName: "Cpu",
    image: "/Products/servo-controlled-voltage-stabilizer.png",
    keySpecs: [
      "Correction Speed: > 35 V/sec (balanced & unbalanced)",
      "Output Regulation: ± 1.0% with zero waveform distortion",
      "Efficiency: > 98.5% at nominal load",
      "Protection: Over/Under Voltage, Overload, Single Phasing",
    ],
    applications: "CNC Machines, Medical Imaging, Textile Plants, Large Commercial Facilities",
    compliance: "IS 9815 / IEC 60076 / CE",
  },
  {
    id: "static-frequency-converter",
    name: "Static Frequency Converter",
    category: "Power Conversion",
    shortDesc: "Solid-state 50 Hz, 60 Hz, and 400 Hz power conversion units for export machinery testing, aviation, and naval applications.",
    standardRating: "50 Hz / 60 Hz / 400 Hz bi-directional options",
    iconName: "Zap",
    image: "/Products/static-frequency-converter.png",
    keySpecs: [
      "Input / Output Frequency: 50 Hz ⇄ 60 Hz ⇄ 400 Hz",
      "THD Voltage: < 2.5% pure sine wave output",
      "Overload Capacity: 150% for 60 seconds",
      "IGBT PWM Inverter with DSP Microcontroller",
    ],
    applications: "Aviation Ground Support, Naval & Marine Test Bays, Machinery Export Testing",
    compliance: "MIL-STD-704 / IEC 62040 / CE",
  },
  {
    id: "ups-inverters",
    name: "UPS / Inverters",
    category: "Uninterruptible Power",
    shortDesc: "Heavy-duty industrial online double conversion UPS systems and rugged inverters designed for harsh utility conditions.",
    standardRating: "True Online Industrial Grade (up to 500 kVA)",
    iconName: "BatteryCharging",
    image: "/Products/ups-inverters.png",
    keySpecs: [
      "Topology: True Online Double Conversion (VFI-SS-111)",
      "Galvanic Isolation: Built-in Inverter Output Transformer",
      "Transfer Time: 0 ms seamless transition",
      "Battery Cold Start & Intelligent Battery Management",
    ],
    applications: "Continuous Process Automation, Data Centers, Oil & Gas Platforms, Hospitals",
    compliance: "IEC 62040-1 / IEC 62040-3 / ISO 9001",
  },
  {
    id: "battery-charger",
    name: "Battery Charger",
    category: "DC Systems",
    shortDesc: "Float and boost SCR/Thyristor & Switch-mode automatic battery chargers for substations, power plants, and telecom banks.",
    standardRating: "12V to 220V DC output, dual mode float/boost",
    iconName: "BatteryMedium",
    image: "/Products/battery-charger.png",
    keySpecs: [
      "Modes: Automatic Float & Boost Charging Dual Channel",
      "DC Output Ripple: < 1% RMS without battery connected",
      "Thyristor (SCR) Bridge with Fast Phase-Angle Control",
      "Alarms: DC Under/Over Voltage, Earth Fault, Mains Fail",
    ],
    applications: "High Voltage Substations, Power Generating Plants, Telecommunication Exchanges",
    compliance: "IS 4540 / IEC 60146 / IEEE 485",
  },
  {
    id: "ats-automatic-transfer-switch",
    name: "ATS – Automatic Transfer Switch",
    category: "Switchgear & Control",
    shortDesc: "Intelligent automatic transition switches providing seamless power source switching between grid and backup generators.",
    standardRating: "40A to 4000A 4-Pole with micro-controller logic",
    iconName: "GitCompare",
    image: "/Products/ats-automatic-transfer-switch.png",
    keySpecs: [
      "Pole Configuration: 3-Pole & 4-Pole with switched neutral",
      "Transition: Open / Delayed / Closed Transition options",
      "Transfer Speed: < 80 ms rapid changeover",
      "Microprocessor Logic with Phase Failure Detection",
    ],
    applications: "Mission-Critical Facilities, Generator Synchronisation, Hospitals, Industrial Plants",
    compliance: "IEC 60947-6-1 / UL 1008 / CE",
  },
  {
    id: "dc-power-supply",
    name: "DC Power Supply",
    category: "DC Systems",
    shortDesc: "Regulated linear and high-efficiency switched DC power solutions with low ripple for testing, aerospace, and OEM integration.",
    standardRating: "High stability, custom voltage & current ratings",
    iconName: "Activity",
    image: "/Products/dc-power-supply.png",
    keySpecs: [
      "Output Regulation: Line & Load regulation < 0.05%",
      "Ultra-low Ripple & Noise: < 5 mV RMS",
      "Programmable Current & Voltage Limiting Controls",
      "Remote Sensing & RS485 / Modbus Telemetry Integration",
    ],
    applications: "Defense Testing, Electro-plating, Component Burn-in Labs, Aerospace Ground Systems",
    compliance: "IEC 61204 / CE / RoHS Compliant",
  },
  {
    id: "transformer",
    name: "Transformer",
    category: "Winding Components",
    shortDesc: "Isolation transformers, ultra-isolation, step-up/step-down, K-factor rated transformers, and auto-transformers.",
    standardRating: "Dry-type & oil-cooled custom K-factor windings",
    iconName: "Layers",
    image: "/Products/transformer.png",
    keySpecs: [
      "Winding Material: 99.9% Pure Electrolytic Grade Copper",
      "Core: Low-loss cold rolled grain oriented (CRGO) steel",
      "Insulation Class: Class F (155°C) & Class H (180°C)",
      "Treatment: Vacuum Pressure Impregnation (VPI) Resin",
    ],
    applications: "Grid Substations, Harmonic Isolation for VFDs, Renewable Solar/Wind Plants",
    compliance: "IS 2026 / IEC 60076 / IEEE C57",
  },
  {
    id: "dimmer-variac",
    name: "Dimmer / Variac",
    category: "Voltage Regulation",
    shortDesc: "Continuously variable autotransformers (Variacs) for precision manual or motorised AC voltage adjustments.",
    standardRating: "Manual & motorised drive, single & multi-gang",
    iconName: "Sliders",
    image: "/Products/dimmer-variac.png",
    keySpecs: [
      "Carbon Brush Track: Specially polished silver-plated track",
      "Waveform: Smooth distortion-free variable output",
      "Configurations: 1-Phase, 3-Phase Open or Enclosed Ganged",
      "Motorised Options: 24V DC / 230V AC servo drive control",
    ],
    applications: "Electrical R&D Testing, High Voltage Test Sets, Furnace Control, Calibration Labs",
    compliance: "IS 5142 / IEC Standards",
  },
  {
    id: "line-choke",
    name: "Line Choke",
    category: "Power Conditioning",
    shortDesc: "AC input/output line chokes and DC link chokes for harmonic attenuation, VFD protection, and surge suppression.",
    standardRating: "1% to 5% impedance ratings for VFD/drive systems",
    iconName: "ShieldAlert",
    image: "/Products/line-choke.png",
    keySpecs: [
      "Impedance: 3% or 5% standard (custom design on request)",
      "Harmonic Attenuation: Mitigates IEEE 519 line disturbances",
      "Insulation: Class H copper foil or wire windings",
      "DV/DT Filter Capability: Protects motor winding insulation",
    ],
    applications: "Variable Frequency Drives (VFD), Motor Protection, Elevators, Solar Inverters",
    compliance: "IEC 61558-2-20 / CE Compliant",
  },
  {
    id: "cvt-constant-voltage-transformer",
    name: "CVT – Constant Voltage Transformer",
    category: "Voltage Regulation",
    shortDesc: "Ferro-resonant constant voltage transformers providing instantaneous voltage correction, noise rejection, and spike elimination.",
    standardRating: "Pure sinusoidal wave with galvanic isolation",
    iconName: "RefreshCw",
    image: "/Products/cvt-constant-voltage-transformer.png",
    keySpecs: [
      "Response Time: Instantaneous (under 1 millisecond)",
      "Line Attenuation: Up to 120 dB common-mode noise rejection",
      "Short-Circuit Proof: Built-in natural foldback current limit",
      "Total Harmonic Distortion: < 3% under linear load",
    ],
    applications: "Bio-medical Instrumentation, High-End Audio Systems, Sensitive Analytical Weighing",
    compliance: "IS 9815 / IEC 61558",
  },
  {
    id: "load-bank",
    name: "Load Bank",
    category: "Testing & Validation",
    shortDesc: "Resistive, inductive, and reactive load bank systems for generator commissioning, UPS capacity testing, and factory FAT.",
    standardRating: "Stationary & portable trailer-mounted units",
    iconName: "Gauge",
    image: "/Products/load-bank.png",
    keySpecs: [
      "Element Material: Stainless Steel Nickel-Chromium Grids",
      "Step Resolution: Fine KW / KVAR step loading controls",
      "Cooling: Forced-air cooling with high-velocity blowers",
      "Safety: Airflow interlock, over-temperature cut-offs",
    ],
    applications: "Genset Factory Testing, Marine Vessel Commissioning, Data Center Heat Loads",
    compliance: "IEC 60947 / CE Standards",
  },
  {
    id: "dc-rectifier",
    name: "DC Rectifier",
    category: "Power Conversion",
    shortDesc: "High-current industrial rectifiers for electroplating, anodizing, water treatment, electrolysis, and battery formation lines.",
    standardRating: "Thyristor-controlled & IGBT high-current setups",
    iconName: "Maximize2",
    image: "/Products/dc-rectifier.png",
    keySpecs: [
      "Current Output: Up to 25,000 Amperes DC continuous",
      "Cooling Options: Air Cooled or Deionised Water Cooled",
      "Control: Constant Current (CC) & Constant Voltage (CV)",
      "Protection: Electronic Fast Trip, Thermal Overload, Phase Fail",
    ],
    applications: "Electroplating & Anodizing, Hydrogen Electrolysis, Metal Refining, Chemical Plants",
    compliance: "IEC 60146 / IS 4540",
  },
  {
    id: "static-voltage-stabiliser",
    name: "Static Voltage Stabiliser",
    category: "Voltage Regulation",
    shortDesc: "Microcontroller/IGBT-based solid-state voltage stabilizers with zero moving parts and millisecond-level correction speed.",
    standardRating: "IGBT PWM technology, <20ms correction time",
    iconName: "Radio",
    image: "/Products/static-voltage-stabiliser.png",
    keySpecs: [
      "Correction Time: Ultra-fast < 20 milliseconds",
      "Moving Parts: 0 (Solid-state IGBT architecture)",
      "Efficiency: > 98% with low standby consumption",
      "Digital Display: Real-time True RMS V/I/Hz metering",
    ],
    applications: "SMT Electronics Assembly, Laser Cutting Machines, High-Speed Printing Presses",
    compliance: "IEC 61000 / CE Mark",
  },
  {
    id: "single-phase-to-three-phase-converter",
    name: "Single Phase to Three Phase Converter",
    category: "Power Conversion",
    shortDesc: "Static and rotary phase converters allowing 3-phase machinery to operate reliably from 1-phase electrical utility grids.",
    standardRating: "Balanced 3-phase output for motors and machine tools",
    iconName: "Network",
    image: "/Products/single-phase-to-three-phase-converter.png",
    keySpecs: [
      "Input: 230V 1-Phase 50/60 Hz",
      "Output: 400V / 415V 3-Phase balanced sine wave",
      "Phase Shift Angle: 120° precision displacement",
      "Starting Torque: Full motor rated starting torque support",
    ],
    applications: "Rural Fabrication Shops, Agricultural Pumps, Machine Tools Without 3-Phase Grid",
    compliance: "IEC Standards / CE",
  },
  {
    id: "din-rail-electronic-enclosures",
    name: "DIN Rail & Electronic Enclosures",
    category: "Industrial Enclosures",
    shortDesc: "Precision sheet metal and polycarbonate enclosures, terminal junction boxes, and modular DIN-rail housing assemblies.",
    standardRating: "IP54 / IP65 / IP66 rated custom punching & finishes",
    iconName: "Box",
    image: "/Products/din-rail-electronic-enclosures.png",
    keySpecs: [
      "Ingress Protection: IP54, IP65, IP66 sealed gaskets",
      "Material: Cold Rolled Sheet Steel (CRCA) or Polycarbonate",
      "Finishing: 7-tank pre-treatment with 80+ micron powder coat",
      "Customization: Laser cutout punching for glands, meters & switches",
    ],
    applications: "PLC Automation Panels, Outdoor Solar Combiner Boxes, Industrial Power Distribution",
    compliance: "IEC 60529 / UL 508A Standards",
  },
];


export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "aviation",
    number: "01",
    title: "Aviation",
    applicationNote: "Ground power units (400 Hz), hangar testing, avionics power racks & runway lighting conditioning.",
    iconName: "Plane",
  },
  {
    id: "machine-tools",
    number: "02",
    title: "Machine Tools",
    applicationNote: "Servo stabilizers & line chokes for high-precision CNC routers, milling centres, and laser cutting heads.",
    iconName: "Wrench",
  },
  {
    id: "food-processing",
    number: "03",
    title: "Food Processing",
    applicationNote: "Hygienic enclosure power conditioners, packaging line backup & continuous conveyor drive protection.",
    iconName: "Utensils",
  },
  {
    id: "automotive",
    number: "04",
    title: "Automotive",
    applicationNote: "Robotic welding cell voltage stabilisers, paint shop rectifiers & assembly line continuous power.",
    iconName: "Car",
  },
  {
    id: "oil-natural-gas",
    number: "05",
    title: "Oil & Natural Gas",
    applicationNote: "Explosion-resistant control supply, offshore drilling rig UPS systems & pipeline cathodic protection.",
    iconName: "Flame",
  },
  {
    id: "chemical-petrochemical",
    number: "06",
    title: "Chemical & Petrochemical",
    applicationNote: "Harsh-environment transformers, continuous process controls & chemical batching backup power.",
    iconName: "FlaskConical",
  },
  {
    id: "pharmaceutical",
    number: "07",
    title: "Pharmaceutical",
    applicationNote: "Clean-room power conditioning, sterile filling machines & GMP-compliant compliance documentation.",
    iconName: "Pill",
  },
  {
    id: "textile",
    number: "08",
    title: "Textile",
    applicationNote: "Spinning loom surge protection, electronic knitting machine isolation & weaving plant harmonic filters.",
    iconName: "Scissors",
  },
  {
    id: "aerospace-defence",
    number: "09",
    title: "Aerospace & Defence",
    applicationNote: "Custom military-spec winding components, radar testing converters & ruggedised tactical power chassis.",
    iconName: "Shield",
  },
  {
    id: "research-institutions",
    number: "10",
    title: "Research Institutions",
    applicationNote: "Ultra-low noise linear DC supplies, physics laboratory load banks & synchrotron precision variacs.",
    iconName: "GraduationCap",
  },
  {
    id: "oem-applications",
    number: "11",
    title: "OEM Applications",
    applicationNote: "Custom-branded transformers, tailored chassis form factors & private-label winding solutions.",
    iconName: "Component",
  },
  {
    id: "general-industrial",
    number: "12",
    title: "General Industrial",
    applicationNote: "Heavy manufacturing, steel fabrication, plastic extrusion, HVAC chiller plants & switchyard support.",
    iconName: "Factory",
  },
];

export const MANUFACTURING_CERTIFICATIONS: CertItem[] = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015 QMS",
    scope: "Certified Quality Management System for design, manufacturing & inspection of winding components & electrical equipment",
    badge: "Quality Standard",
  },
  {
    id: "ce-compliance",
    title: "CE Compliance",
    scope: "Compliance with European health, safety, and environmental protection directives for international markets",
    badge: "European Conformity",
  },
  {
    id: "msme-udyam",
    title: "MSME / Udyam Registration",
    scope: "Officially registered enterprise under the Ministry of Micro, Small & Medium Enterprises, Govt. of India",
    badge: "Govt. of India",
  },
  {
    id: "nsic-reg",
    title: "NSIC Registration",
    scope: "National Small Industries Corporation certified facility for industrial manufacturing competencies",
    badge: "Govt. Recognized",
  },
  {
    id: "eepc-rcmc",
    title: "EEPC India RCMC",
    scope: "Engineering Export Promotion Council of India Registration-Cum-Membership Certificate for export legitimacy",
    badge: "Export Council",
  },
  {
    id: "govt-statutory",
    title: "Government of India Statutory Registrations",
    scope: "All statutory GST, PAN, IEC (Import Export Code) & industrial labor compliance registrations",
    badge: "Statutory",
  },
  {
    id: "ecgc-reg",
    title: "ECGC Registration",
    scope: "Export Credit Guarantee Corporation registered framework ensuring financial transparency and overseas export security",
    badge: "Export Credit",
  },
];

export const FURNISHED_DOCUMENTS: string[] = [
  "MSDS (Material Safety Data Sheets)",
  "Technical Datasheets & Schematics",
  "Certificate of Conformity (CoC)",
  "Routine Test Certificates",
  "Type-Test Reports",
  "FAT (Factory Acceptance Test) Reports",
  "Test Certificates per applicable IS/IEC standards",
  "STQC Test Reports",
  "ARAI Test Reports",
  "IRCLASS Inspection & Test Documentation",
  "Product Inspection Reports",
  "Quality-Control (QC) Reports",
  "Warranty Certificate",
  "Certificate of Origin (CoO)",
  "Packing List & Commercial Invoice",
  "Product-Specific Compliance Documentation",
];

export const EXPORT_STEPS: ExportStepItem[] = [
  {
    step: "01",
    title: "Inspection",
    subtitle: "Partner-side verification",
    description: "Multi-point visual, dimensional, and functional testing verified against project engineering specifications before dispatch.",
    keyAction: "Factory Inspection",
  },
  {
    step: "02",
    title: "Local Transport",
    subtitle: "Safe inland movement",
    description: "Secure transit from partner manufacturing facility in Pune to designated inland container depots (ICD) or port terminals.",
    keyAction: "Inland Haulage",
  },
  {
    step: "03",
    title: "CHA / Customs",
    subtitle: "Indian customs clearance",
    description: "Coordination with licensed Custom House Agents (CHA) for seamless customs assessment, examination, and 'Let Export Order' (LEO).",
    keyAction: "Customs Brokering",
  },
  {
    step: "04",
    title: "Documentation",
    subtitle: "Complete export paperwork",
    description: "Preparation of Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, HS-code alignment, and test certificates.",
    keyAction: "Compliance Dossier",
  },
  {
    step: "05",
    title: "Insurance",
    subtitle: "Comprehensive transit risk cover",
    description: "Marine cargo insurance policy coverage safeguarding the shipment from factory gate to designated overseas port of discharge.",
    keyAction: "Marine Insurance",
  },
  {
    step: "06",
    title: "Freight",
    subtitle: "Ocean / Air carrier booking",
    description: "Negotiated vessel space allocation with leading ocean carriers (FCL/LCL) or scheduled air freight for urgent project deliveries.",
    keyAction: "Carrier Allocation",
  },
  {
    step: "07",
    title: "Shipment Coordination",
    subtitle: "Tracking & arrival notice",
    description: "End-to-end milestone tracking, container status telemetry, pre-alert notices to consignee, and handover to foreign port.",
    keyAction: "Consignee Handover",
  },
];

export const LIFECYCLE_STEPS: CapabilityLifecycleStep[] = [
  {
    step: "01",
    title: "Technical Specification",
    description: "Comprehensive review of buyer application demands, duty cycle, regional voltage standards, and engineering drawings.",
  },
  {
    step: "02",
    title: "Custom Design",
    description: "Electromagnetic, thermal, and enclosure engineering tailored to specific site conditions and physical dimensions.",
  },
  {
    step: "03",
    title: "Manufacturing",
    description: "High-grade copper/aluminum winding, precision vacuum impregnation, robust core laminations, and quality assembly.",
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Routine insulation, dielectric strength, temperature rise, and functional load testing before sign-off.",
  },
  {
    step: "05",
    title: "After-Sales Support",
    description: "Remote technical troubleshooting, commissioning guidance, schematic documentation, and spare parts coordination.",
  },
];

export const REQUIREMENT_PARAMETERS: RequirementSpec[] = [
  { name: "Capacity", example: "Fractional kVA to Mega-Watt scale", icon: "Zap" },
  { name: "Voltage", example: "110V, 220V, 380V, 415V, 480V, 690V & custom", icon: "Activity" },
  { name: "Frequency", example: "50 Hz, 60 Hz, 400 Hz or dual switchable", icon: "Radio" },
  { name: "Operating Conditions", example: "Extreme ambient temp, humidity, dust & seismic", icon: "Shield" },
  { name: "Cooling Method", example: "AN (Air Natural), AF (Forced Air), ONAN (Oil)", icon: "Wind" },
  { name: "Duty Cycle", example: "100% continuous industrial vs intermittent ratings", icon: "Clock" },
  { name: "Application", example: "OEM integration, harsh industrial or marine service", icon: "Cpu" },
];

export const QUALITY_PROCESS_CARDS = [
  {
    id: "checks",
    title: "Quality Checks",
    subtitle: "Partner-Side Inspections",
    description: "ITEC coordinates partner-side inspections tailored per project needs—auditing raw copper grade, core lamination quality, varnish impregnation, and enclosure fabrication tolerances.",
    points: [
      "Incoming material quality verification",
      "In-process dimensional & winding checks",
      "Pre-dispatch aesthetic and mechanical clearance",
    ],
  },
  {
    id: "testing",
    title: "Testing Documentation",
    subtitle: "Verification & Compliance Dossier",
    description: "Rigorous collection and independent review of partner test documents—ensuring no unit leaves the facility without documented dielectric, load, and thermal verification against benchmark standards.",
    points: [
      "Routine & type test report collection",
      "Factory Acceptance Test (FAT) coordination",
      "IS / IEC / CE international standard conformity",
    ],
  },
  {
    id: "customisation",
    title: "Customisation",
    subtitle: "Application-Specific Engineering",
    description: "Application-specific customisation coordinated with manufacturing partners to meet distinct overseas voltage regimes, enclosure IP ratings, and mechanical installation footprints.",
    points: [
      "Custom footprint & ingress protection ratings",
      "Tailored terminal configurations & taps",
      "OEM private-labelling and color-coded finishes",
    ],
  },
];

export const QUALITY_COMMITMENTS = [
  {
    title: "Careful Raw-Material Selection",
    desc: "Electrolytic grade 99.9% copper, low-loss CRGO silicon steel laminations, and class H/F thermal insulating materials.",
  },
  {
    title: "Controlled Manufacturing Processes",
    desc: "Standard operating procedures, automated winding machines, vacuum pressure impregnation (VPI), and temperature-controlled curing ovens.",
  },
  {
    title: "Thorough Inspection & Testing",
    desc: "High-voltage breakdown tests, no-load & full-load loss verification, harmonic distortion analysis, and vibration checks.",
  },
  {
    title: "Continuous Process Improvement",
    desc: "Systematic partner auditing, defect root-cause analysis, and adoption of modern testing instruments.",
  },
];

export const CONTACT_DETAILS = {
  companyName: "ITEC – Indian Trading & Exports Corporation",
  tagline: "Your India Sourcing & Export Partner",
  location: "Pune, India",
  phone: "+91 78754 97964",
  phoneRaw: "+917875497964",
  phoneDisplay: "78754 97964",
  email: "Sales@itecorporation.com",
  whatsappLink:
    "https://wa.me/917875497964?text=Hello%20ITEC%2C%20I%20am%20interested%20in%20sourcing%20electrical%20solutions%20from%20India.",
};


