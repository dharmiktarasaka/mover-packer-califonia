// Northvault Relocation Master Data Architecture
// Premium editorial photography, service specifications, interactive routes, and mock data

export const BRAND = {
  name: "NORTHVAULT",
  fullName: "Northvault Relocation",
  legalName: "Northvault Global Logistics & Relocation S.A.",
  tagline: "Moving lives forward.",
  subTagline: "Premium relocation, handled from door to destination.",
  phone: "+1 (800) 555-0198",
  directDesk: "+1 (512) 894-3200",
  email: "hello@northvault.com",
  conciergeEmail: "concierge@northvault.com",
  headquarters: "401 Congress Ave, Suite 2800, Austin, TX 78701",
  estYear: 2009,
  metrics: {
    movesCompleted: "2,500+",
    onTimeRate: "98.7%",
    yearsExperience: "15+",
    citiesCovered: "50+",
    customerRating: "4.9/5",
    totalPropertyMoved: "$500M+",
    claimsRate: "< 0.02%",
    dedicatedVehicles: "140+"
  }
};

export const SERVICES = [
  {
    id: "residential-moving",
    number: "01",
    title: "Residential Moving",
    shortTitle: "Residential",
    tagline: "Bespoke home relocation for distinguished properties.",
    description: "From historic estates to luxury high-rise penthouses, we coordinate residential moves with white-glove attentiveness, bespoke crating, and complete interior staging.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    detailHeroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Dedicated Move Concierge as single point of contact",
      "Custom protective floor runners and wall shielding",
      "Architectural crating for chandeliers and marble tops",
      "Full valet wardrobe hanging and unboxing services",
      "Same-day bed assembly and audio-visual reconnections"
    ],
    tiers: [
      { name: "Executive Suite", size: "1 - 2 Bedrooms", idealFor: "Penthouses & Urban Condos", duration: "1 - 2 Days" },
      { name: "Estate Sovereign", size: "3 - 5 Bedrooms", idealFor: "Single Family & Suburban Mansions", duration: "2 - 4 Days" },
      { name: "Private Compound", size: "6+ Bedrooms", idealFor: "Multi-structure Estates & Ranched", duration: "Custom Project" }
    ],
    stats: { avgCrew: "4 - 8 Specialists", transitType: "Dedicated Air-Ride Van", insurance: "Full Replacement Value ($2M+)" }
  },
  {
    id: "commercial-moving",
    number: "02",
    title: "Office & Corporate Relocation",
    shortTitle: "Corporate",
    tagline: "Zero-downtime enterprise and headquarters transitions.",
    description: "Engineered corporate relocation strategies for tech companies, law firms, financial institutions, and corporate headquarters with zero operational disruption.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    detailHeroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Weekend and overnight phased deployments",
      "Server room migration and anti-static IT transit pods",
      "Chain-of-custody tracking for confidential archives",
      "Commercial furniture disassembly and re-anchoring",
      "Decommissioning of previous office lease space"
    ],
    tiers: [
      { name: "Boutique Firm", size: "Up to 30 Desks", idealFor: "Creative & Legal Practices", duration: "Weekend" },
      { name: "Enterprise Floor", size: "30 - 150 Desks", idealFor: "Tech & Corporate Branches", duration: "Phased 48h" },
      { name: "Headquarters Transfer", size: "150+ Workstations", idealFor: "Multi-floor Corporate Campuses", duration: "Master Plan" }
    ],
    stats: { avgCrew: "8 - 25 Specialists", transitType: "Fleet Convoys", insurance: "$10M Commercial Umbrella" }
  },
  {
    id: "international-moving",
    number: "03",
    title: "International Relocation",
    shortTitle: "International",
    tagline: "Border-to-border global mobility with customs orchestration.",
    description: "Comprehensive cross-continent moves with dedicated customs clearance, export-grade vapor barrier crating, international air & sea freight, and in-country destination concierge.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    detailHeroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Global customs documentation & diplomatic clearances",
      "Fumigated heat-treated ISPM-15 export wooden crates",
      "Climate-monitored maritime containers & express air-freight",
      "Multilingual destination liaison upon arrival",
      "Vehicle shipping and bonded luxury auto transport"
    ],
    tiers: [
      { name: "Air Express Cargo", size: "Select Belongings", idealFor: "Immediate Relocations", duration: "5 - 9 Days" },
      { name: "Direct Sea Container", size: "Full Household (20ft / 40ft)", idealFor: "Intercontinental Estates", duration: "3 - 5 Weeks" },
      { name: "Global Diplomatic", size: "Unrestricted", idealFor: "Expatriate & Ambassador Mobility", duration: "End-to-End Managed" }
    ],
    stats: { avgCrew: "Global Network", transitType: "Intermodal Air & Maritime", insurance: "Lloyd's of London Underwritten" }
  },
  {
    id: "packing",
    number: "04",
    title: "Packing & White-Glove Unpacking",
    shortTitle: "Packing & Valet",
    tagline: "Curated archival packing, acid-free protection, full valet setup.",
    description: "Our certified packers use museum-grade packing materials, acid-free tissue, customized double-wall corrugated cartons, and velvet-padded containers to protect your treasures.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    detailHeroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Inventory cataloging with barcode scan labels",
      "Acid-free glassine wrapping for fine oils and canvases",
      "Wardrobe box transport with cedar aroma protection",
      "Full kitchen placement according to original layout",
      "Zero waste haul-away: complete recycling of cartons"
    ],
    tiers: [
      { name: "Fragile Treasures", size: "Select Valuables", idealFor: "China, Glassware & Art Only", duration: "Half-Day" },
      { name: "Turnkey Packing", size: "Complete Home", idealFor: "Total Pre-Move Packing", duration: "1 - 2 Days" },
      { name: "Valet Settle-In", size: "Full Unpack & Placement", idealFor: "Turnkey Ready-to-Live", duration: "Full Unpack" }
    ],
    stats: { avgCrew: "3 - 6 Specialists", transitType: "Eco-Archival Materials", insurance: "Included 100%" }
  },
  {
    id: "storage-solutions",
    number: "05",
    title: "Storage & Private Vaults",
    shortTitle: "Private Vaults",
    tagline: "High-security private storage units with 24/7 biometric monitoring.",
    description: "Ultra-secure, humidity-controlled, and temperature-stabilized private storage facilities engineered for long-term storage of fine furnishings, antiquities, and archives.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    detailHeroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Strict 68°F (20°C) and 45% relative humidity stabilization",
      "Private keycard & biometric access controls",
      "Dust-free sealed palletized vaults and private rooms",
      "Digital photo-inventory accessible through client portal",
      "Comprehensive fire suppression and clean-agent gas systems"
    ],
    tiers: [
      { name: "Private Container Vault", size: "250 - 500 cu ft", idealFor: "Seasonal & Renovations", duration: "Flexible Monthly" },
      { name: "Collector's Room", size: "1,000+ cu ft", idealFor: "Furniture & Estate Storage", duration: "Short/Long Term" },
      { name: "Wine & Art Cellar", size: "Regulated Atmosphere", idealFor: "Sommelier & Gallery Assets", duration: "Annual Agreement" }
    ],
    stats: { avgCrew: "Facility Custodians", transitType: "Direct Dock Loading", insurance: "Bonded & Insured $5M" }
  },
  {
    id: "specialty-moving",
    number: "06",
    title: "Specialty & High-Value Moving",
    shortTitle: "Specialty & Art",
    tagline: "Concert grand pianos, museum antiquities, and collector wine cellars.",
    description: "Rigging, hoist cranes, custom crating, and climate-monitored shock-absorption transit specifically designed for one-of-a-kind art collections, sculptures, and rare instruments.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    detailHeroImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Concert Steinway & Bösendorfer piano dismounting & skid transit",
      "Fine wine collection temperature-locked transportation",
      "External crane rigging for balconies & penthouse terraces",
      "Custom laser-cut closed-cell foam cushioned crates",
      "Courier escort with discrete non-branded security vehicles"
    ],
    tiers: [
      { name: "Fine Art Single Piece", size: "1 - 5 Items", idealFor: "Galleries & Private Collectors", duration: "Precision Dispatch" },
      { name: "Grand Piano & Instruments", size: "Concert Pianos", idealFor: "Musicians & Conservatories", duration: "Direct Air-Ride" },
      { name: "Rare Cellar & Library", size: "500 - 10,000 Bottles", idealFor: "Wine Cellars & Rare Books", duration: "Thermal Supervised" }
    ],
    stats: { avgCrew: "Master Riggers", transitType: "Air-Suspension Van", insurance: "Agreed Stated Value" }
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    phase: "PLAN",
    title: "Consultation & Blueprint",
    subtitle: "We understand your move.",
    description: "A Senior Relocation Architect conducts an in-person or 3D LiDAR digital home walkthrough. Every piece is inventoried, access points surveyed, and a bespoke timeline is engineered.",
    detailList: ["3D volumetric survey", "Custom crating specifications", "Permit & elevator reservation", "Dedicated move coordinator assigned"]
  },
  {
    step: "02",
    phase: "PACK",
    title: "Archival Preservation",
    subtitle: "Every item protected with precision.",
    description: "Our certified white-glove specialists arrive equipped with museum-grade packing supplies, custom timber crates, and color-coded room labeling for flawless traceability.",
    detailList: ["Acid-free paper & glassine", "Custom timber crating built on-site", "Barcoded itemized inventory", "Floor & millwork protective runners"]
  },
  {
    step: "03",
    phase: "MOVE",
    title: "Air-Ride Secure Transit",
    subtitle: "Professional handling from origin to destination.",
    description: "Your belongings travel inside our proprietary fleet of air-suspension, climate-controlled transport vehicles equipped with real-time GPS satellite tracking and dual-driver teams.",
    detailList: ["Air-ride suspension protection", "Temperature monitoring 65°F - 72°F", "Real-time client location beacon", "Direct uninterrupted transit"]
  },
  {
    step: "04",
    phase: "DELIVER",
    title: "Room-by-Room Placement",
    subtitle: "Everything arrives where it belongs.",
    description: "Upon arrival, our crew places every single piece of furniture and box into its designated room according to your architectural floor plan. No heavy lifting on your part.",
    detailList: ["Architectural floor plan execution", "Careful uncrating of fine pieces", "Assembly of beds, tables & shelving", "Visual check against inventory manifest"]
  },
  {
    step: "05",
    phase: "SETTLE IN",
    title: "Valet Unpack & Settle In",
    subtitle: "We help you start the next chapter.",
    description: "We unpack your wardrobes onto velvet hangers, arrange your glassware, reconnect your audiovisual gear, and clear away 100% of packing debris. You walk in to a finished home.",
    detailList: ["Wardrobe hanging & kitchen organization", "Audiovisual & lamp reconnections", "Art hanging & mirror installation", "100% carton & crating removal"]
  }
];

export const MOVE_JOURNEY_STAGES = [
  {
    id: "home",
    stageNumber: "01",
    label: "Origin Estate",
    title: "Preparation & White-Glove Staging",
    summary: "Comprehensive property protection, floor coverings, and pre-move inventory verification.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    metrics: { status: "Protected", duration: "Day 1", team: "4 Specialists" }
  },
  {
    id: "packing",
    stageNumber: "02",
    label: "Archival Crating",
    title: "Museum-Grade Item Wrapping",
    summary: "Fragile heirlooms, artwork, and designer furnishings encased in custom built-to-order timber crates.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    metrics: { status: "100% Barcoded", duration: "Day 1 - 2", crates: "18 Handcrafted" }
  },
  {
    id: "transport",
    stageNumber: "03",
    label: "Active Transit",
    title: "Air-Ride Highway & Intermodal",
    summary: "Climate-stabilized van fleet with pneumatic suspension, satellite telematics, and shock sensors.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    metrics: { status: "In-Transit", satellite: "GPS Active", speed: "Regulated" }
  },
  {
    id: "storage",
    stageNumber: "04",
    label: "Vault Staging",
    title: "Climate-Controlled Waypoint (Optional)",
    summary: "Biometrically secured staging in our private regional vault prior to final estate completion.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    metrics: { temp: "68°F / 20°C", humidity: "45% RH", security: "Biometric 24/7" }
  },
  {
    id: "new-home",
    stageNumber: "05",
    label: "Destination",
    title: "Arrival, Valet Unpack & Turnkey Living",
    summary: "Complete unpacking, bed-making, wardrobe staging, and complete removal of all packaging materials.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    metrics: { status: "Turnkey Ready", debris: "0% Left Behind", satisfaction: "100%" }
  }
];

export const WHY_NORTHVAULT = [
  {
    number: "01",
    title: "Trained Moving Specialists",
    description: "Every crew member undergoes a 120-hour intensive white-glove certification academy in delicate handling, crate engineering, and customer discretion."
  },
  {
    number: "02",
    title: "Premium Archival Materials",
    description: "We use only acid-free tissue paper, double-fluted heavy grade boxes, velvet-lined padded blankets, and heat-treated export lumber."
  },
  {
    number: "03",
    title: "Real-Time Move Updates",
    description: "Direct telematics let you view vehicle coordinates, temperature levels, and crew estimated time of arrival with complete transparency."
  },
  {
    number: "04",
    title: "Fully Insured & Bonded",
    description: "Comprehensive Full Value Protection with coverage available up to $20M+ per transit underwritten by top-tier international marine syndicates."
  },
  {
    number: "05",
    title: "Dedicated Move Coordinator",
    description: "One senior single point of contact oversees your move from first inquiry to the last picture hung on your new gallery wall."
  },
  {
    number: "06",
    title: "Careful Handling of Valuables",
    description: "Specialized procedures for high-value fine art, sommelier wine cellars, antique timepieces, grand pianos, and luxury classic automobiles."
  }
];

export const TESTIMONIALS = [
  {
    quote: "From the first consultation to the final box, everything felt effortless. Our four-story brownstone move to Austin was completed without a single glass scuffed.",
    author: "Sarah Mitchell",
    role: "Senior Partner, Venture Capital",
    route: "Manhattan, NY → Austin, TX",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    homeType: "Brownstone Estate"
  },
  {
    quote: "Relocating our 90-person software headquarters seemed daunting. Northvault executed over a single holiday weekend. On Tuesday 8 AM, our team logged in without a hiccup.",
    author: "David Chen",
    role: "Chief Operating Officer, Lumina AI",
    route: "San Francisco, CA → Denver, CO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    homeType: "Corporate Campus"
  },
  {
    quote: "Their team moved my family's extensive wine cellar and contemporary art collection across country. The temperature sensors recorded steady 55°F the entire 2,200 miles.",
    author: "Dr. Alistair Sterling",
    role: "Private Art Collector",
    route: "Chicago, IL → Miami Beach, FL",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    homeType: "Waterfront Villa"
  }
];

export const CASE_STUDY = {
  tag: "FEATURED CASE STUDY",
  title: "Executive Family Relocation: Austin to Manhattan",
  route: "Austin, TX → New York, NY",
  property: "4 Bedroom Historic Estate to Central Park Penthouse",
  duration: "3 Days Execution",
  distance: "1,750 Miles",
  heirloomsMoved: "18 Custom Crates, 9-ft Grand Piano, 1,200 Bottle Wine Cellar",
  summary: "A seamless transition coordinating interstate permits, freight elevator hoists in Tribeca, and zero downtime for executive parents with three school-aged children.",
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  outcome: "100% On-time delivery, zero claims, valet setup completed 6 hours ahead of schedule."
};

export const LOCATIONS = [
  {
    slug: "austin",
    name: "Austin",
    state: "Texas",
    region: "Southwest / HQ",
    address: "401 Congress Ave, Suite 2800, Austin, TX 78701",
    phone: "+1 (512) 894-3200",
    fleetSize: "28 Vehicles",
    vaultCapacity: "45,000 sq ft",
    popularRoutes: ["Austin → New York", "Austin → Los Angeles", "Austin → Aspen"],
    keyAreas: ["Westlake Hills", "Tarrytown", "Pemberton", "Barton Creek", "Downtown Penthouse District"],
    movesCount: "680+ completed",
    leadTime: "3 - 5 business days",
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "new-york",
    name: "New York",
    state: "New York",
    region: "Northeast",
    address: "590 Madison Ave, 21st Floor, New York, NY 10022",
    phone: "+1 (212) 490-8800",
    fleetSize: "32 Vehicles",
    vaultCapacity: "60,000 sq ft",
    popularRoutes: ["New York → Miami", "New York → London", "New York → Los Angeles"],
    keyAreas: ["Upper East Side", "Tribeca", "SoHo", "Brooklyn Heights", "Greenwich, CT Corridor"],
    movesCount: "940+ completed",
    leadTime: "2 - 4 business days",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    region: "West Coast",
    address: "9601 Wilshire Blvd, Beverly Hills, CA 90210",
    phone: "+1 (310) 775-4300",
    fleetSize: "26 Vehicles",
    vaultCapacity: "55,000 sq ft",
    popularRoutes: ["Los Angeles → Austin", "Los Angeles → Hawaii", "Los Angeles → New York"],
    keyAreas: ["Beverly Hills", "Bel Air", "Malibu", "Pacific Palisades", "Brentwood"],
    movesCount: "710+ completed",
    leadTime: "3 - 5 business days",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    region: "Southeast",
    address: "1111 Brickell Ave, Suite 1900, Miami, FL 33131",
    phone: "+1 (305) 612-9100",
    fleetSize: "22 Vehicles",
    vaultCapacity: "40,000 sq ft",
    popularRoutes: ["Miami → New York", "Miami → Madrid", "Miami → Chicago"],
    keyAreas: ["Star Island", "Coconut Grove", "Coral Gables", "Bal Harbour", "Palm Beach"],
    movesCount: "520+ completed",
    leadTime: "3 - 5 business days",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "chicago",
    name: "JK Moving Services Chicago",
    shortName: "Chicago",
    state: "Illinois",
    region: "Midwest",
    address: "3047 N Lincoln Ave #400, Chicago, Illinois, 60657",
    phone: "(773) 913-2569",
    email: "chicago@jkmovingservice.com",
    fleetSize: "20 Vehicles",
    vaultCapacity: "38,000 sq ft",
    popularRoutes: ["Chicago → Naples, FL", "Chicago → Phoenix", "Chicago → New York", "Chicago → Austin"],
    keyAreas: ["The Loop", "River North", "Lincoln Park", "Lakeview", "Wicker Park", "West Loop", "Evanston", "Naperville"],
    movesCount: "490+ completed",
    leadTime: "3 - 5 business days",
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "dallas",
    name: "Dallas",
    state: "Texas",
    region: "Southwest",
    address: "2121 N Pearl St, Dallas, TX 75201",
    phone: "+1 (214) 720-9900",
    fleetSize: "18 Vehicles",
    vaultCapacity: "35,000 sq ft",
    popularRoutes: ["Dallas → New York", "Dallas → Los Angeles", "Dallas → Vail"],
    keyAreas: ["Highland Park", "University Park", "Preston Hollow", "Turtle Creek"],
    movesCount: "430+ completed",
    leadTime: "2 - 4 business days",
    image: "https://images.unsplash.com/photo-1545193544-312983719627?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "houston",
    name: "Houston",
    state: "Texas",
    region: "Southwest",
    address: "1000 Louisiana St, Houston, TX 77002",
    phone: "+1 (713) 482-6600",
    fleetSize: "16 Vehicles",
    vaultCapacity: "32,000 sq ft",
    popularRoutes: ["Houston → London", "Houston → Denver", "Houston → Miami"],
    keyAreas: ["River Oaks", "Memorial", "Tanglewood", "West University Place"],
    movesCount: "380+ completed",
    leadTime: "2 - 4 business days",
    image: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    region: "Mountain West",
    address: "1801 California St, Denver, CO 80202",
    phone: "+1 (303) 590-4100",
    fleetSize: "15 Vehicles",
    vaultCapacity: "30,000 sq ft",
    popularRoutes: ["Denver → Aspen", "Denver → Austin", "Denver → Seattle"],
    keyAreas: ["Cherry Creek", "Country Club", "Aspen Corridor", "Vail Valley", "Boulder"],
    movesCount: "340+ completed",
    leadTime: "3 - 5 business days",
    image: "https://images.unsplash.com/photo-1546955870-9fc64205eb61?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "seattle",
    name: "Seattle",
    state: "Washington",
    region: "Pacific Northwest",
    address: "1201 Third Ave, Seattle, WA 98101",
    phone: "+1 (206) 670-3300",
    fleetSize: "14 Vehicles",
    vaultCapacity: "28,000 sq ft",
    popularRoutes: ["Seattle → San Francisco", "Seattle → Vancouver", "Seattle → Austin"],
    keyAreas: ["Medina", "Mercer Island", "Queen Anne", "Windermere", "Bellevue"],
    movesCount: "310+ completed",
    leadTime: "3 - 5 business days",
    image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    state: "Arizona",
    region: "Southwest",
    address: "2415 E Camelback Rd, Phoenix, AZ 85016",
    phone: "+1 (602) 412-7800",
    fleetSize: "14 Vehicles",
    vaultCapacity: "26,000 sq ft",
    popularRoutes: ["Phoenix → Chicago", "Phoenix → San Diego", "Phoenix → Denver"],
    keyAreas: ["Paradise Valley", "Silverleaf", "Arcadia", "North Scottsdale"],
    movesCount: "290+ completed",
    leadTime: "3 - 5 business days",
    image: "https://images.unsplash.com/photo-1542314831-c6a4d2757270?auto=format&fit=crop&w=800&q=80"
  }
];

export const BLOG_POSTS = [
  {
    slug: "how-to-prepare-for-stress-free-move",
    title: "How to Prepare for an Effortless High-End Relocation",
    category: "Relocation Guide",
    readTime: "6 min read",
    date: "March 18, 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    summary: "A master blueprint for homeowners navigating estate transitions, high-value asset inventory, and concierge coordination.",
    content: [
      "The secret to a peaceful relocation is not doing more; it is delegating with precision. When moving a large estate or an architectural residence, standard packing checklists fall short.",
      "Begin by auditing collections 8 weeks out. High-value art, vintage wine, and delicate pianos require specialized crating and climatic telemetry rather than generic bubble wrap.",
      "Assigning a dedicated Move Concierge ensures elevator bookings, security gate authorizations, and municipality permits are secured well before loading day."
    ]
  },
  {
    slug: "complete-moving-checklist",
    title: "The Sovereign Moving Checklist: The 8-Week Timeline",
    category: "Checklist",
    readTime: "8 min read",
    date: "February 27, 2026",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    summary: "Week-by-week benchmarks from first volumetric survey to the final valet unpack in your new residence.",
    content: [
      "Week 8: Conduct the architectural scan and separate essential personal transit bags from cargo shipments.",
      "Week 4: Confirm custom crating blueprints for oversized artwork and notify wine transport specialists.",
      "Week 1: Final walk-through with your Northvault Move Director. All surfaces mapped, floor runners prepared."
    ]
  },
  {
    slug: "safely-pack-fragile-and-art-items",
    title: "Preserving Heritage: How Fine Art, Wine & Antiquities Travel",
    category: "Specialty Care",
    readTime: "5 min read",
    date: "January 14, 2026",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
    summary: "Discover the science behind museum-grade ISPM-15 wooden crating, archival tissue, and vibration damping.",
    content: [
      "Vibration and micro-climates are the primary enemies of oil paintings and rare vintages. Northvault utilizes pneumatic air-suspension transports with constant thermal tracking.",
      "Every frame is photographed, barcoded, and encased in acid-free glassine before resting inside custom-cut shock-absorbing foam."
    ]
  },
  {
    slug: "how-much-does-professional-moving-cost",
    title: "Understanding Luxury Relocation Investments: What Drives the Cost?",
    category: "Pricing & Value",
    readTime: "7 min read",
    date: "January 02, 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
    summary: "A transparent breakdown of full-service relocation fees, replacement insurance, and white-glove valet unboxing.",
    content: [
      "Quality relocation is an investment in peace of mind. Unlike budget haulers who charge by arbitrary hourly estimates with surprise fees, Northvault quotes all-inclusive binding projects.",
      "Factors include dedicated transport capacity (no co-mingling of your goods with other families), specialized rigging, and white-glove unboxing."
    ]
  },
  {
    slug: "moving-across-the-country-what-to-know",
    title: "Coast-to-Coast Mobility: The Executive Guide to Interstate Moving",
    category: "Interstate",
    readTime: "6 min read",
    date: "December 19, 2025",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    summary: "Cross-country transitions require synchronizing real estate closings, interstate transit permits, and family travel.",
    content: [
      "When crossing multiple state lines, direct transport eliminates intermediate cross-docking where 80% of freight damage typically occurs.",
      "Our team delivers guaranteed arrival windows so you can land, enter your finished home, and sleep in made beds on your first night."
    ]
  }
];

export const FAQS = [
  {
    q: "How far in advance should I book my move?",
    a: "For bespoke domestic estate moves, we recommend initiating your consultation 4 to 8 weeks in advance to ensure preferred transit dates and dedicated vehicle allocation. For urgent executive relocations or corporate transfers, our Rapid Deployment Team can often mobilize in as little as 72 hours."
  },
  {
    q: "Do you provide complete packing and unpacking services?",
    a: "Yes. Our signature White-Glove service includes 100% turnkey packing prior to move day using archival, museum-grade materials, as well as complete valet unboxing at your destination—hanging clothes in wardrobes, organizing kitchen glassware, reassembling furnishings, and recycling all packing debris."
  },
  {
    q: "Are my belongings insured during transit?",
    a: "Every Northvault relocation is protected by comprehensive Full Value Replacement Coverage underwritten by premier marine syndicates. Unlike standard moving companies that offer statutory 60 cents per pound, your items are insured up to agreed stated value, up to $20,000,000+ upon request."
  },
  {
    q: "Do you offer international moving and customs handling?",
    a: "Yes. Our International Mobility division oversees global relocations across Europe, Asia, the Middle East, and the Americas. We handle customs declarations, diplomatic documentation, ISPM-15 export crating, ocean and air transport, and destination concierge unboxing."
  },
  {
    q: "Can you move fragile, high-value art, or musical instruments?",
    a: "Specialty logistics is at our core. We routinely relocate concert grand pianos, fine art collections, bronze sculptures, and temperature-controlled wine cellars. Each piece receives custom CAD-measured crating and travels in air-suspension, climate-monitored vehicles."
  },
  {
    q: "Do you provide short-term and long-term storage?",
    a: "Our private regional storage vaults are climate-stabilized at 68°F and 45% relative humidity, protected by 24/7 biometric authentication, clean-agent fire suppression, and digital asset tracking accessible anytime via your client portal."
  },
  {
    q: "Can I adjust or reschedule my moving date?",
    a: "We understand real estate closings and renovations can shift. We offer flexible scheduling adjustments with your dedicated Move Coordinator up to 7 days before deployment without penalty."
  }
];
