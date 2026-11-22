import React from "react";

// Line-art illustration for Hero: Transmission Tower, Industrial Transformer, and Electrical Control Panels
export const HeroEngineeringIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      <svg
        viewBox="0 0 680 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl"
        aria-label="Technical line art of transmission tower, transformer, and electrical panels"
      >
        <defs>
          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A6FD1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0B4EA2" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B4EA2" stopOpacity="0" />
            <stop offset="50%" stopColor="#0B4EA2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0B4EA2" stopOpacity="0" />
          </linearGradient>
          <pattern id="diagHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#1A6FD1" strokeWidth="1" strokeOpacity="0.15" />
          </pattern>
        </defs>

        {/* Blueprint background grid frame */}
        <rect x="20" y="20" width="640" height="460" rx="6" fill="#F0F6FD" stroke="#0B4EA2" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.4" />
        
        {/* Technical Coordinate Markers */}
        <text x="36" y="44" fontFamily="monospace" fontSize="10" fill="#0B4EA2" fillOpacity="0.6">SEC // E-410 · HIGH VOLTAGE WINDING ARCHITECTURE</text>
        <text x="560" y="44" fontFamily="monospace" fontSize="10" fill="#0B4EA2" fillOpacity="0.6">PUNE (MH) · IN</text>
        
        {/* Ground reference line */}
        <line x1="40" y1="440" x2="640" y2="440" stroke="#0B1F3A" strokeWidth="2" strokeDasharray="6 3" />
        <line x1="40" y1="446" x2="640" y2="446" stroke="#0B4EA2" strokeWidth="1" strokeOpacity="0.4" />

        {/* ================= LEFT: HIGH VOLTAGE TRANSMISSION TOWER ================= */}
        <g id="transmission-tower">
          {/* Main legs */}
          <line x1="140" y1="60" x2="80" y2="440" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" />
          <line x1="140" y1="60" x2="200" y2="440" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" />
          
          {/* Peak mast */}
          <line x1="140" y1="35" x2="140" y2="60" stroke="#0B4EA2" strokeWidth="2.5" />
          <circle cx="140" cy="32" r="3" fill="#1A6FD1" />
          
          {/* Horizontal cross-arms */}
          {/* Arm 1 (top) */}
          <line x1="100" y1="120" x2="180" y2="120" stroke="#0B1F3A" strokeWidth="2" />
          <line x1="85" y1="130" x2="100" y2="120" stroke="#0B4EA2" strokeWidth="1.5" />
          <line x1="195" y1="130" x2="180" y2="120" stroke="#0B4EA2" strokeWidth="1.5" />
          {/* Arm 2 (middle wide) */}
          <line x1="60" y1="180" x2="220" y2="180" stroke="#0B1F3A" strokeWidth="2.5" />
          <line x1="50" y1="195" x2="60" y2="180" stroke="#0B4EA2" strokeWidth="1.5" />
          <line x1="230" y1="195" x2="220" y2="180" stroke="#0B4EA2" strokeWidth="1.5" />
          {/* Arm 3 (lower) */}
          <line x1="75" y1="240" x2="205" y2="240" stroke="#0B1F3A" strokeWidth="2" />
          
          {/* Bracing diagonals (K and X bracing) */}
          <line x1="125" y1="80" x2="155" y2="80" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="125" y1="80" x2="155" y2="120" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="155" y1="80" x2="125" y2="120" stroke="#0B4EA2" strokeWidth="1.2" />

          <line x1="110" y1="120" x2="170" y2="180" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="170" y1="120" x2="110" y2="180" stroke="#0B4EA2" strokeWidth="1.2" />

          <line x1="100" y1="180" x2="180" y2="240" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="180" y1="180" x2="100" y2="240" stroke="#0B4EA2" strokeWidth="1.2" />

          <line x1="90" y1="240" x2="190" y2="330" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="190" y1="240" x2="90" y2="330" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="88" y1="330" x2="192" y2="330" stroke="#0B1F3A" strokeWidth="1.5" />

          <line x1="82" y1="330" x2="198" y2="440" stroke="#0B4EA2" strokeWidth="1.5" />
          <line x1="198" y1="330" x2="82" y2="440" stroke="#0B4EA2" strokeWidth="1.5" />
          <line x1="140" y1="330" x2="140" y2="440" stroke="#1A6FD1" strokeWidth="1" strokeDasharray="3 3" />

          {/* Insulators strings hanging from cross arms */}
          <line x1="60" y1="180" x2="60" y2="215" stroke="#1A6FD1" strokeWidth="2.5" strokeDasharray="3 2" />
          <circle cx="60" cy="218" r="3.5" fill="#0B4EA2" />
          <line x1="220" y1="180" x2="220" y2="215" stroke="#1A6FD1" strokeWidth="2.5" strokeDasharray="3 2" />
          <circle cx="220" cy="218" r="3.5" fill="#0B4EA2" />

          <line x1="75" y1="240" x2="75" y2="270" stroke="#1A6FD1" strokeWidth="2.5" strokeDasharray="3 2" />
          <circle cx="75" cy="273" r="3.5" fill="#0B4EA2" />
          <line x1="205" y1="240" x2="205" y2="270" stroke="#1A6FD1" strokeWidth="2.5" strokeDasharray="3 2" />
          <circle cx="205" cy="273" r="3.5" fill="#0B4EA2" />

          {/* Catenary power transmission lines spanning across */}
          <path d="M 60 218 Q 180 260 280 230" stroke="#0B4EA2" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
          <path d="M 220 218 Q 300 240 370 210" stroke="#1A6FD1" strokeWidth="1.5" fill="none" />
        </g>

        {/* ================= CENTER: INDUSTRIAL TRANSFORMER ================= */}
        <g id="industrial-transformer">
          {/* Transformer Plinth Base */}
          <rect x="250" y="415" width="180" height="25" fill="#E2EDF8" stroke="#0B1F3A" strokeWidth="2" rx="2" />
          <line x1="255" y1="422" x2="425" y2="422" stroke="#0B4EA2" strokeWidth="1" strokeDasharray="4 2" />
          <line x1="260" y1="427" x2="275" y2="440" stroke="#0B1F3A" strokeWidth="1.5" />
          <line x1="420" y1="427" x2="405" y2="440" stroke="#0B1F3A" strokeWidth="1.5" />

          {/* Main Transformer Tank */}
          <rect x="265" y="240" width="150" height="175" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="2.5" rx="4" />
          <rect x="275" y="250" width="130" height="155" fill="url(#diagHatch)" opacity="0.7" />

          {/* Radiator Cooling Fins (Left & Right) */}
          <g id="cooling-fins-left">
            <line x1="255" y1="260" x2="265" y2="260" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="255" y1="280" x2="265" y2="280" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="255" y1="300" x2="265" y2="300" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="255" y1="320" x2="265" y2="320" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="255" y1="340" x2="265" y2="340" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="255" y1="360" x2="265" y2="360" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="255" y1="380" x2="265" y2="380" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="255" y1="255" x2="255" y2="385" stroke="#0B1F3A" strokeWidth="2" />
          </g>
          
          <g id="cooling-fins-right">
            <line x1="415" y1="260" x2="425" y2="260" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="415" y1="280" x2="425" y2="280" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="415" y1="300" x2="425" y2="300" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="415" y1="320" x2="425" y2="320" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="415" y1="340" x2="425" y2="340" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="415" y1="360" x2="425" y2="360" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="415" y1="380" x2="425" y2="380" stroke="#0B4EA2" strokeWidth="2" />
            <line x1="425" y1="255" x2="425" y2="385" stroke="#0B1F3A" strokeWidth="2" />
          </g>

          {/* Conservator Tank (Cylindrical tank mounted on top) */}
          <rect x="290" y="195" width="100" height="28" rx="14" fill="#E8F1FC" stroke="#0B1F3A" strokeWidth="2" />
          <line x1="340" y1="223" x2="340" y2="240" stroke="#0B1F3A" strokeWidth="2.5" />
          <line x1="310" y1="223" x2="310" y2="240" stroke="#0B4EA2" strokeWidth="1.5" />
          {/* Buchholz relay on pipe */}
          <circle cx="340" cy="231" r="5" fill="#1A6FD1" stroke="#0B1F3A" strokeWidth="1.5" />
          {/* Oil level gauge */}
          <circle cx="365" cy="209" r="6" fill="#FFFFFF" stroke="#0B4EA2" strokeWidth="1.5" />
          <line x1="365" y1="209" x2="368" y2="206" stroke="#1A6FD1" strokeWidth="1.5" />

          {/* High Voltage Bushings on Top Tank Cover */}
          {/* Bushing 1 */}
          <g transform="translate(285, 175)">
            <polygon points="10,65 5,30 15,30" fill="#E8F1FC" stroke="#0B1F3A" strokeWidth="1.5" />
            <ellipse cx="10" cy="30" rx="6" ry="2" fill="#0B4EA2" />
            <ellipse cx="10" cy="40" rx="8" ry="2.5" fill="#1A6FD1" />
            <ellipse cx="10" cy="50" rx="9" ry="2.5" fill="#1A6FD1" />
            <line x1="10" y1="30" x2="10" y2="15" stroke="#0B1F3A" strokeWidth="2" />
            <circle cx="10" cy="15" r="3" fill="#1A6FD1" />
          </g>
          {/* Bushing 2 */}
          <g transform="translate(325, 168)">
            <polygon points="10,72 5,30 15,30" fill="#E8F1FC" stroke="#0B1F3A" strokeWidth="1.5" />
            <ellipse cx="10" cy="30" rx="6" ry="2" fill="#0B4EA2" />
            <ellipse cx="10" cy="40" rx="8" ry="2.5" fill="#1A6FD1" />
            <ellipse cx="10" cy="50" rx="9" ry="2.5" fill="#1A6FD1" />
            <line x1="10" y1="30" x2="10" y2="12" stroke="#0B1F3A" strokeWidth="2" />
            <circle cx="10" cy="12" r="3" fill="#1A6FD1" />
          </g>
          {/* Bushing 3 */}
          <g transform="translate(365, 175)">
            <polygon points="10,65 5,30 15,30" fill="#E8F1FC" stroke="#0B1F3A" strokeWidth="1.5" />
            <ellipse cx="10" cy="30" rx="6" ry="2" fill="#0B4EA2" />
            <ellipse cx="10" cy="40" rx="8" ry="2.5" fill="#1A6FD1" />
            <ellipse cx="10" cy="50" rx="9" ry="2.5" fill="#1A6FD1" />
            <line x1="10" y1="30" x2="10" y2="15" stroke="#0B1F3A" strokeWidth="2" />
            <circle cx="10" cy="15" r="3" fill="#1A6FD1" />
          </g>

          {/* Marshalling box / Inspection window */}
          <rect x="290" y="275" width="45" height="50" rx="2" fill="#F4F8FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <line x1="295" y1="285" x2="330" y2="285" stroke="#0B4EA2" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="295" y1="295" x2="330" y2="295" stroke="#0B4EA2" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="295" y1="305" x2="320" y2="305" stroke="#0B4EA2" strokeWidth="1" />
          <circle cx="327" cy="305" r="2" fill="#1A6FD1" />

          {/* Copper Winding Schematics Callout on Tank */}
          <g transform="translate(345, 275)">
            <circle cx="20" cy="15" r="12" fill="none" stroke="#0B4EA2" strokeWidth="1.5" />
            <circle cx="32" cy="15" r="12" fill="none" stroke="#0B4EA2" strokeWidth="1.5" />
            <text x="5" y="42" fontFamily="monospace" fontSize="8" fill="#0B1F3A" fontWeight="600">COPPER VPI</text>
          </g>

          {/* Earth ground symbol */}
          <line x1="400" y1="415" x2="400" y2="435" stroke="#0B1F3A" strokeWidth="1.5" />
          <line x1="395" y1="435" x2="405" y2="435" stroke="#0B1F3A" strokeWidth="1.5" />
          <line x1="397" y1="438" x2="403" y2="438" stroke="#0B1F3A" strokeWidth="1.5" />
          <line x1="399" y1="441" x2="401" y2="441" stroke="#0B1F3A" strokeWidth="1.5" />
        </g>

        {/* ================= RIGHT: ELECTRICAL CONTROL & SWITCHGEAR PANELS ================= */}
        <g id="electrical-control-panels">
          {/* Main Switchgear Cabinet */}
          <rect x="465" y="210" width="165" height="230" rx="3" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="2.5" />
          <rect x="470" y="215" width="75" height="220" fill="#F8FAFC" stroke="#0B4EA2" strokeWidth="1.5" />
          <rect x="550" y="215" width="75" height="220" fill="#F8FAFC" stroke="#0B4EA2" strokeWidth="1.5" />

          {/* Panel Top Canopy */}
          <polygon points="460,210 635,210 630,200 465,200" fill="#E2EDF8" stroke="#0B1F3A" strokeWidth="1.5" />
          {/* Eye bolts for crane lifting */}
          <circle cx="485" cy="195" r="5" fill="none" stroke="#0B4EA2" strokeWidth="2" />
          <circle cx="610" cy="195" r="5" fill="none" stroke="#0B4EA2" strokeWidth="2" />

          {/* Bay 1: Meters, Pushbuttons & Display */}
          {/* Digital Multifunction Meter */}
          <rect x="480" y="230" width="55" height="40" rx="2" fill="#0B1F3A" stroke="#1A6FD1" strokeWidth="1.5" />
          <text x="486" y="246" fontFamily="monospace" fontSize="8" fill="#38BDF8" fontWeight="bold">415.2 V</text>
          <text x="486" y="258" fontFamily="monospace" fontSize="8" fill="#4ADE80" fontWeight="bold">50.00 Hz</text>
          <path d="M 486 264 L 498 264 L 504 261 L 512 265 L 525 264" stroke="#FBBF24" strokeWidth="1" fill="none" />

          {/* Indicator Lamps (R-Y-B Phases) */}
          <circle cx="488" cy="285" r="4" fill="#EF4444" stroke="#991B1B" strokeWidth="1" />
          <circle cx="507" cy="285" r="4" fill="#EAB308" stroke="#854D0E" strokeWidth="1" />
          <circle cx="526" cy="285" r="4" fill="#3B82F6" stroke="#1E40AF" strokeWidth="1" />

          {/* Rotary selector switch */}
          <circle cx="507" cy="312" r="9" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <line x1="507" y1="312" x2="512" y2="307" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" />

          {/* Louvers / Air Ventilation grilles on lower door */}
          <g id="bay1-louvers">
            <line x1="480" y1="360" x2="535" y2="360" stroke="#0B4EA2" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="480" y1="368" x2="535" y2="368" stroke="#0B4EA2" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="480" y1="376" x2="535" y2="376" stroke="#0B4EA2" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="480" y1="384" x2="535" y2="384" stroke="#0B4EA2" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="480" y1="392" x2="535" y2="392" stroke="#0B4EA2" strokeWidth="1.5" strokeOpacity="0.7" />
          </g>

          {/* Bay 2: Circuit Breaker / Isolator Compartment */}
          <rect x="560" y="230" width="55" height="70" rx="2" fill="#FFFFFF" stroke="#0B4EA2" strokeWidth="1.5" />
          {/* Main Breaker Handle (Red) */}
          <rect x="580" y="245" width="15" height="30" rx="2" fill="#DC2626" stroke="#7F1D1D" strokeWidth="1.5" />
          <line x1="587" y1="250" x2="587" y2="270" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="568" y="290" fontFamily="monospace" fontSize="7" fill="#0B1F3A" fontWeight="bold">ACB 1600A</text>

          {/* Cable busbar connection link to transformer */}
          <path d="M 425 320 C 445 320, 445 340, 465 340" stroke="#1A6FD1" strokeWidth="3" fill="none" strokeDasharray="6 3" />
          <path d="M 425 330 C 445 330, 445 350, 465 350" stroke="#0B4EA2" strokeWidth="2" fill="none" />
          
          {/* Base channel */}
          <rect x="460" y="435" width="175" height="10" fill="#0B1F3A" />
        </g>

        {/* Technical Callout Badges with pointer lines */}
        <g id="technical-annotations">
          {/* Tower Annotation */}
          <circle cx="140" cy="120" r="3" fill="#1A6FD1" />
          <line x1="140" y1="120" x2="200" y2="80" stroke="#1A6FD1" strokeWidth="1" />
          <line x1="200" y1="80" x2="250" y2="80" stroke="#1A6FD1" strokeWidth="1" />
          <text x="202" y="74" fontFamily="monospace" fontSize="8" fill="#0B4EA2" fontWeight="600">GRID TRANSMISSION</text>

          {/* Transformer Annotation */}
          <circle cx="340" cy="270" r="3" fill="#1A6FD1" />
          <line x1="340" y1="270" x2="380" y2="135" stroke="#1A6FD1" strokeWidth="1" />
          <line x1="380" y1="135" x2="450" y2="135" stroke="#1A6FD1" strokeWidth="1" />
          <text x="382" y="129" fontFamily="monospace" fontSize="8" fill="#0B4EA2" fontWeight="600">STEP-UP / ISOLATION</text>

          {/* Switchgear Annotation */}
          <circle cx="560" cy="240" r="3" fill="#1A6FD1" />
          <line x1="560" y1="240" x2="520" y2="160" stroke="#1A6FD1" strokeWidth="1" />
          <line x1="520" y1="160" x2="470" y2="160" stroke="#1A6FD1" strokeWidth="1" />
          <text x="472" y="154" fontFamily="monospace" fontSize="8" fill="#0B4EA2" fontWeight="600">ATS & REGULATION</text>
        </g>
      </svg>
    </div>
  );
};

// Line-art illustration for Export Execution: Cargo Ship, Container Terminal Crane & Shipping Containers
export const ExportShippingIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <svg
        viewBox="0 0 900 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
        aria-label="Line art illustration of cargo container ship, harbor crane and shipping containers"
      >
        <defs>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B4EA2" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0B4EA2" stopOpacity="0.25" />
          </linearGradient>
          <pattern id="contHatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="4" stroke="#0B4EA2" strokeWidth="0.8" strokeOpacity="0.3" />
          </pattern>
        </defs>

        {/* Sky / Grid Background Line */}
        <line x1="20" y1="260" x2="880" y2="260" stroke="#0B1F3A" strokeWidth="1.5" strokeDasharray="6 3" />
        <rect x="20" y="260" width="860" height="50" fill="url(#waterGrad)" />
        {/* Ocean waves */}
        <path d="M 20 270 Q 80 264 140 270 T 260 270 T 380 270 T 500 270 T 620 270 T 740 270 T 860 270" stroke="#1A6FD1" strokeWidth="1" fill="none" opacity="0.6" />
        <path d="M 40 282 Q 100 276 160 282 T 280 282 T 400 282 T 520 282 T 640 282 T 760 282 T 880 282" stroke="#0B4EA2" strokeWidth="1" fill="none" opacity="0.4" />

        {/* ================= LEFT: HARBOR QUAY & DOCKSIDE GANTRY CRANE ================= */}
        <g id="dock-crane">
          {/* Concrete quay wall */}
          <rect x="20" y="240" width="260" height="25" fill="#E2EDF8" stroke="#0B1F3A" strokeWidth="2" />
          <line x1="20" y1="248" x2="280" y2="248" stroke="#0B4EA2" strokeWidth="1" strokeDasharray="3 3" />
          {/* Mooring bollards */}
          <rect x="60" y="232" width="10" height="8" rx="2" fill="#0B1F3A" />
          <rect x="180" y="232" width="10" height="8" rx="2" fill="#0B1F3A" />
          <rect x="260" y="232" width="10" height="8" rx="2" fill="#0B1F3A" />

          {/* Crane rail tracks */}
          <line x1="30" y1="240" x2="270" y2="240" stroke="#0B4EA2" strokeWidth="2" />

          {/* Gantry Crane Portal Frame */}
          {/* Front leg */}
          <line x1="80" y1="240" x2="110" y2="100" stroke="#0B1F3A" strokeWidth="3" />
          {/* Back leg */}
          <line x1="200" y1="240" x2="170" y2="100" stroke="#0B1F3A" strokeWidth="3" />
          {/* Crane lower tie beam */}
          <line x1="93" y1="180" x2="187" y2="180" stroke="#0B4EA2" strokeWidth="2" />
          <line x1="93" y1="180" x2="170" y2="100" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="187" y1="180" x2="110" y2="100" stroke="#0B4EA2" strokeWidth="1.2" />
          {/* Wheel bogies */}
          <circle cx="75" cy="240" r="4" fill="#0B1F3A" />
          <circle cx="85" cy="240" r="4" fill="#0B1F3A" />
          <circle cx="195" cy="240" r="4" fill="#0B1F3A" />
          <circle cx="205" cy="240" r="4" fill="#0B1F3A" />

          {/* Horizontal Boom / Jib extending out over the ship */}
          <rect x="70" y="90" width="300" height="12" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="2" />
          {/* Boom trusses */}
          <line x1="70" y1="102" x2="90" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="90" y1="102" x2="110" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="110" y1="102" x2="130" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="130" y1="102" x2="150" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="150" y1="102" x2="170" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="170" y1="102" x2="190" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="190" y1="102" x2="210" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="210" y1="102" x2="230" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="230" y1="102" x2="250" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="250" y1="102" x2="270" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="270" y1="102" x2="290" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="290" y1="102" x2="310" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="310" y1="102" x2="330" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="330" y1="102" x2="350" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />
          <line x1="350" y1="102" x2="370" y2="90" stroke="#0B4EA2" strokeWidth="1.2" />

          {/* Crane A-frame Tower Top */}
          <polygon points="120,90 140,40 160,90" fill="#E8F1FC" stroke="#0B1F3A" strokeWidth="2" />
          <line x1="140" y1="40" x2="330" y2="90" stroke="#0B4EA2" strokeWidth="1.8" />
          <line x1="140" y1="40" x2="75" y2="90" stroke="#0B4EA2" strokeWidth="1.8" />

          {/* Operator Cab & Trolley */}
          <rect x="290" y="102" width="22" height="14" fill="#0B4EA2" stroke="#0B1F3A" strokeWidth="1.5" />
          <circle cx="296" cy="108" r="2.5" fill="#FFFFFF" />

          {/* Hoist Cables & Container Spreader */}
          <line x1="295" y1="116" x2="295" y2="155" stroke="#0B1F3A" strokeWidth="1.2" />
          <line x1="307" y1="116" x2="307" y2="155" stroke="#0B1F3A" strokeWidth="1.2" />
          <rect x="282" y="155" width="38" height="6" fill="#1A6FD1" stroke="#0B1F3A" strokeWidth="1.5" />
          
          {/* Suspended 20ft container in air */}
          <rect x="280" y="161" width="42" height="24" rx="1" fill="#EBF3FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <line x1="288" y1="161" x2="288" y2="185" stroke="#0B4EA2" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="296" y1="161" x2="296" y2="185" stroke="#0B4EA2" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="304" y1="161" x2="304" y2="185" stroke="#0B4EA2" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="312" y1="161" x2="312" y2="185" stroke="#0B4EA2" strokeWidth="1" strokeOpacity="0.6" />
          <text x="284" y="176" fontFamily="monospace" fontSize="6" fill="#0B4EA2" fontWeight="bold">ITEC-EXP</text>
        </g>

        {/* Quay Stacked Containers */}
        <g id="dock-stacked-containers">
          {/* Bottom row */}
          <rect x="30" y="216" width="46" height="24" fill="#E8F1FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <text x="34" y="231" fontFamily="monospace" fontSize="6" fill="#0B4EA2" fontWeight="bold">IN-MH-01</text>
          
          {/* Top row */}
          <rect x="35" y="192" width="46" height="24" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <text x="39" y="207" fontFamily="monospace" fontSize="6" fill="#0B1F3A" fontWeight="bold">PUNE-FCL</text>
        </g>

        {/* ================= RIGHT: OCEAN CARGO CONTAINER VESSEL ================= */}
        <g id="container-ship">
          {/* Ship Hull Silhouette */}
          <path
            d="M 330 240 L 400 280 L 800 280 L 850 250 L 855 240 L 330 240 Z"
            fill="#0B1F3A"
            stroke="#0B1F3A"
            strokeWidth="2"
          />
          {/* Waterline Stripe */}
          <path d="M 380 270 L 815 270" stroke="#1A6FD1" strokeWidth="3" />
          
          {/* Bulwark & deck line */}
          <line x1="330" y1="240" x2="855" y2="240" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Stern Superstructure / Bridge Tower */}
          <rect x="740" y="160" width="70" height="80" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="2" rx="1" />
          {/* Bridge Windows */}
          <rect x="745" y="165" width="60" height="10" fill="#0B1F3A" />
          <line x1="755" y1="165" x2="755" y2="175" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="765" y1="165" x2="765" y2="175" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="775" y1="165" x2="775" y2="175" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="785" y1="165" x2="785" y2="175" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="795" y1="165" x2="795" y2="175" stroke="#FFFFFF" strokeWidth="1" />
          {/* Bridge levels */}
          <line x1="740" y1="185" x2="810" y2="185" stroke="#0B4EA2" strokeWidth="1.5" />
          <line x1="740" y1="205" x2="810" y2="205" stroke="#0B4EA2" strokeWidth="1.5" />
          {/* Portholes */}
          <circle cx="755" cy="195" r="2.5" fill="#0B4EA2" />
          <circle cx="770" cy="195" r="2.5" fill="#0B4EA2" />
          <circle cx="785" cy="195" r="2.5" fill="#0B4EA2" />
          <circle cx="800" cy="195" r="2.5" fill="#0B4EA2" />

          {/* Funnel / Smokestack */}
          <polygon points="765,160 762,130 788,130 785,160" fill="#1A6FD1" stroke="#0B1F3A" strokeWidth="1.5" />
          <rect x="763" y="130" width="24" height="6" fill="#0B1F3A" />
          {/* Radar Mast on top */}
          <line x1="755" y1="160" x2="755" y2="120" stroke="#0B1F3A" strokeWidth="1.5" />
          <line x1="747" y1="130" x2="763" y2="130" stroke="#0B1F3A" strokeWidth="1.5" />
          <circle cx="755" cy="118" r="2" fill="#1A6FD1" />

          {/* STACKED ISO CONTAINERS ON SHIP DECK */}
          {/* Bay 1: Tier 1, 2, 3 */}
          {/* Tier 1 (Deck level) */}
          <rect x="360" y="215" width="55" height="25" fill="#E8F1FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <text x="365" y="231" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="600">TRANSF</text>
          
          <rect x="420" y="215" width="55" height="25" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <text x="425" y="231" fontFamily="monospace" fontSize="7" fill="#0B1F3A" fontWeight="600">SERVO</text>

          <rect x="480" y="215" width="55" height="25" fill="#E8F1FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <text x="485" y="231" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="600">STATIC</text>

          <rect x="540" y="215" width="55" height="25" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <text x="548" y="231" fontFamily="monospace" fontSize="7" fill="#0B1F3A" fontWeight="600">UPS-INV</text>

          <rect x="600" y="215" width="55" height="25" fill="#E8F1FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <text x="606" y="231" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="600">CHOKES</text>

          <rect x="660" y="215" width="55" height="25" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <text x="666" y="231" fontFamily="monospace" fontSize="7" fill="#0B1F3A" fontWeight="600">RECTIF</text>

          {/* Tier 2 (Middle) */}
          <rect x="370" y="190" width="55" height="25" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <text x="375" y="206" fontFamily="monospace" fontSize="7" fill="#0B1F3A" fontWeight="600">EXPORT</text>

          <rect x="430" y="190" width="55" height="25" fill="#E8F1FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <text x="435" y="206" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="600">ITEC-01</text>

          <rect x="490" y="190" width="55" height="25" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <text x="495" y="206" fontFamily="monospace" fontSize="7" fill="#0B1F3A" fontWeight="600">ITEC-02</text>

          <rect x="550" y="190" width="55" height="25" fill="#E8F1FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <text x="555" y="206" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="600">LOADBNK</text>

          <rect x="610" y="190" width="55" height="25" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <text x="618" y="206" fontFamily="monospace" fontSize="7" fill="#0B1F3A" fontWeight="600">PANELS</text>

          <rect x="670" y="190" width="55" height="25" fill="#E8F1FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <text x="678" y="206" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="600">CE/ISO</text>

          {/* Tier 3 (Top row) */}
          <rect x="440" y="165" width="55" height="25" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <text x="448" y="181" fontFamily="monospace" fontSize="7" fill="#0B1F3A" fontWeight="600">INSPECTION</text>

          <rect x="500" y="165" width="55" height="25" fill="#E8F1FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <text x="508" y="181" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="600">QUALITY</text>

          <rect x="560" y="165" width="55" height="25" fill="#FFFFFF" stroke="#0B1F3A" strokeWidth="1.5" />
          <text x="568" y="181" fontFamily="monospace" fontSize="7" fill="#0B1F3A" fontWeight="600">LOGISTICS</text>

          <rect x="620" y="165" width="55" height="25" fill="#E8F1FC" stroke="#0B4EA2" strokeWidth="1.5" />
          <text x="628" y="181" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="600">GLOBAL</text>
        </g>

        {/* Global Route Trajectory Arcs */}
        <path d="M 320 160 C 450 60, 650 60, 820 120" stroke="#1A6FD1" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
        <circle cx="820" cy="120" r="3.5" fill="#0B4EA2" />
        <text x="730" y="110" fontFamily="monospace" fontSize="8" fill="#0B4EA2" fontWeight="bold">GLOBAL DESTINATION DISCHARGE</text>
      </svg>
    </div>
  );
};

// Line-art illustration for India Map & Pune Manufacturing Pinpoint
export const IndiaMapPuneIllustration: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      <svg
        viewBox="0 0 400 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Map illustration highlighting Pune, India manufacturing hub"
      >
        <defs>
          <radialGradient id="punePulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1A6FD1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1A6FD1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Technical Coordinate Grid Box */}
        <rect x="10" y="10" width="380" height="420" rx="4" fill="#F4F8FD" stroke="#0B4EA2" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.5" />
        <text x="24" y="32" fontFamily="monospace" fontSize="9" fill="#0B4EA2" fontWeight="bold">COORD // 18.5204° N, 73.8567° E</text>
        <text x="24" y="44" fontFamily="monospace" fontSize="8" fill="#0B1F3A" fillOpacity="0.7">PUNE MANUFACTURING & EXPORT CORRIDOR</text>

        {/* Stylized vector outline of India subcontinent */}
        <path
          d="M 160 50
             L 180 58 L 210 50 L 225 65 L 215 85 L 235 95 L 255 85 L 285 100 L 290 120 L 260 135 L 270 150 L 250 160
             L 240 185 L 260 210 L 230 230 L 210 270 L 195 320 L 175 375 L 160 360 L 150 320 L 135 285 L 125 240
             L 105 220 L 115 195 L 140 190 L 130 165 L 115 155 L 110 130 L 135 110 L 145 75 Z"
          fill="#FFFFFF"
          stroke="#0B1F3A"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* State border / Maharashtra regional boundary hint */}
        <path
          d="M 130 200 Q 160 215 180 230 Q 155 260 140 255 Z"
          fill="#E8F1FC"
          stroke="#0B4EA2"
          strokeWidth="1.5"
          strokeDasharray="3 2"
        />

        {/* Shipping / Flight outward connection arcs from Pune */}
        <path d="M 142 232 C 100 200, 50 160, 30 120" stroke="#1A6FD1" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
        <circle cx="30" cy="120" r="3" fill="#0B4EA2" />
        <text x="25" y="110" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="bold">EUROPE / UK</text>

        <path d="M 142 232 C 90 270, 40 310, 25 360" stroke="#1A6FD1" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
        <circle cx="25" cy="360" r="3" fill="#0B4EA2" />
        <text x="25" y="375" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="bold">MIDDLE EAST & AFRICA</text>

        <path d="M 142 232 C 220 280, 310 320, 370 330" stroke="#1A6FD1" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
        <circle cx="370" cy="330" r="3" fill="#0B4EA2" />
        <text x="290" y="348" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="bold">SOUTHEAST ASIA / APAC</text>

        <path d="M 142 232 C 200 160, 280 100, 360 80" stroke="#1A6FD1" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
        <circle cx="360" cy="80" r="3" fill="#0B4EA2" />
        <text x="290" y="72" fontFamily="monospace" fontSize="7" fill="#0B4EA2" fontWeight="bold">AMERICAS & OCEANIA</text>

        {/* PUNE PINPOINT MARKER */}
        <circle cx="142" cy="232" r="24" fill="url(#punePulse)" />
        <circle cx="142" cy="232" r="14" fill="#1A6FD1" fillOpacity="0.2" stroke="#1A6FD1" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="142" cy="232" r="6" fill="#0B4EA2" />
        <circle cx="142" cy="232" r="2.5" fill="#FFFFFF" />

        {/* Pune Callout Label Card */}
        <g transform="translate(155, 218)">
          <rect x="0" y="0" width="130" height="34" rx="3" fill="#0B1F3A" stroke="#1A6FD1" strokeWidth="1.2" />
          <text x="8" y="14" fontFamily="sans-serif" fontSize="9" fill="#FFFFFF" fontWeight="bold">PUNE, INDIA</text>
          <text x="8" y="26" fontFamily="sans-serif" fontSize="7.5" fill="#93C5FD">Manufacturing Partner Facility</text>
        </g>
      </svg>
    </div>
  );
};
