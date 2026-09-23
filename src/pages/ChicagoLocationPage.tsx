import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck2,
  Building2,
  Snowflake,
  Truck,
  MapPin,
  Phone,
  Mail,
  Scale,
  Calendar,
  Sparkles,
  HelpCircle,
  Clock,
  Compass,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ChicagoLocationPageProps {
  onOpenQuoteModal: (defaults?: { origin?: string; service?: string }) => void;
}

export const ChicagoLocationPage: React.FC<ChicagoLocationPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedMoveType, setSelectedMoveType] = useState<'local' | 'long-distance' | 'commercial'>('local');
  const [activePackTab, setActivePackTab] = useState<'full' | 'self'>('full');
  const [chicagoFormSubmitted, setChicagoFormSubmitted] = useState(false);
  const [chicagoForm, setChicagoForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    neighborhood: 'Lincoln Park',
    moveType: 'Local Chicagoland Move',
    buildingType: 'High-Rise / Condo (Needs COI)',
    inventorySurvey: 'Virtual Video Walkthrough',
  });

  useEffect(() => {
    document.title = "JK Moving Services Chicago | Licensed Local, Long-Distance & Commercial Movers";
  }, []);

  const handleChicagoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setChicagoFormSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D6A85F', '#F5F3EE', '#FFFFFF', '#172033'],
      });
    } catch {
      // safe fallback
    }
  };

  const neighborhoods = [
    { name: "Downtown / The Loop", type: "High-Rise & Freight Elevators" },
    { name: "River North", type: "Luxury Condos & Tight Loading" },
    { name: "Lincoln Park", type: "Historic Brownstones & Alleys" },
    { name: "Lakeview", type: "Walk-ups & Permit Parking" },
    { name: "Wicker Park", type: "One-Way Streets & Alley Access" },
    { name: "Bucktown", type: "Residential & Alleys" },
    { name: "Logan Square", type: "Greystones & Walk-ups" },
    { name: "West Loop", type: "Converted Lofts & Freight Docks" },
    { name: "South Loop", type: "High-Rises & Strict COIs" },
    { name: "Hyde Park", type: "Historic & University Housing" },
    { name: "Evanston", type: "Suburban & Shore Properties" },
    { name: "Oak Park", type: "Single-Family & Heritage Estates" },
    { name: "Naperville", type: "Suburban Compounds & Relocations" },
    { name: "Schaumburg", type: "Corporate Campuses & Residential" },
  ];

  return (
    <div className="w-full bg-[#FAF9F6] text-slate-800 pt-28 pb-20">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-slate-200 flex items-center justify-between text-xs font-mono">
        <Link
          to="/locations"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Locations</span>
        </Link>
        <div className="flex items-center gap-2 text-slate-500">
          <span>Chicago, Illinois</span>
          <span>•</span>
          <span className="text-gold font-semibold">Flagship Terminal</span>
        </div>
      </div>

      {/* Main Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=2000&q=85"
            alt="Chicago Skyline and Logistics Corridor"
            className="w-full h-full object-cover filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/85 to-[#FAF9F6]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-gold/10 border border-gold/40 text-gold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold">
                Licensed Local, Long-Distance & Commercial Movers
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tightest uppercase leading-[1.03]">
              JK Moving Services <br />
              <span className="gold-gradient-text font-serif-editorial lowercase text-5xl sm:text-7xl lg:text-8xl tracking-normal">
                Chicago.
              </span>
            </h1>

            {/* The Short Version Callout */}
            <div className="mt-8 p-6 sm:p-8 rounded-sm bg-white border border-slate-200 shadow-md">
              <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block mb-2">
                THE SHORT VERSION
              </span>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                If you’re searching for movers in Chicago, here’s the short version: the right company for your move depends on distance (local vs. long-distance vs. interstate), building type (walk-up, high-rise, or single-family), and how much packing you’re willing to do yourself. <strong>JK Moving and Storage Chicago</strong> handles all three move types with binding, in-home or virtual estimates — <em>no bait-and-switch pricing on move day</em>.
              </p>
            </div>

            {/* 20+ Years Inside Observation Alert */}
            <div className="mt-6 p-5 rounded-sm bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-slate-700 flex items-start gap-3.5 leading-relaxed shadow-sm">
              <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5">20+ Years of Industry Insider Reality:</strong>
                In 20+ years of watching this industry from the inside, the pattern never changes: the moves that go wrong aren’t the ones with the heaviest furniture — they’re the ones where someone picked a mover based on price alone and never asked who’d actually be showing up. Chicago adds its own layer of difficulty on top of that — alley loading, condo insurance paperwork, and winter logistics that out-of-town crews routinely get wrong.
              </div>
            </div>

            {/* Quick Action Strip */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#quote-section"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light hover:shadow-glow-gold transition-all"
              >
                <span>Request Binding Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:7739132569"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-sm bg-white border border-slate-300 text-slate-800 text-xs uppercase tracking-widest hover:bg-slate-50 transition-colors font-semibold shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call (773) 913-2569</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Why Chicago Moves Are Harder Than Movers Admit */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-200">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
            CITY-SPECIFIC LOGISTICS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Why Chicago Moves Are Harder Than Movers Admit
          </h2>
          <p className="mt-4 text-slate-600 font-editorial text-lg leading-relaxed">
            Most moving companies write generic homepage copy that would work for any city. That’s a mistake, because Chicago has three logistical realities that change how a move should be planned:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: COI */}
          <div className="bg-white border border-slate-200 p-8 rounded-sm hover:border-gold/50 transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                High-Rise & Condo COI Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                High-rise and condo buildings require a <strong>Certificate of Insurance (COI)</strong>. Buildings in the Loop, Streeterville, and Lakeview typically won’t let a moving truck near a freight elevator without one on file <strong>48–72 hours in advance</strong>. Movers who don’t ask about this upfront are the ones who show up and get turned away at the door.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-gold flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>We file building COIs proactively</span>
            </div>
          </div>

          {/* Card 2: Parking & Alleys */}
          <div className="bg-white border border-slate-200 p-8 rounded-sm hover:border-gold/50 transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                Street Parking & Alley Access
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Street parking and alley access dictate the timeline, not the movers’ schedule. Neighborhoods like <strong>Wicker Park, Lincoln Park, and Bucktown</strong> often need a temporary no-parking permit from the city, or the truck ends up double-parked and racking up fines that somehow end up on your bill.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-gold flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>City parking permits secured in advance</span>
            </div>
          </div>

          {/* Card 3: Winter Logistics */}
          <div className="bg-white border border-slate-200 p-8 rounded-sm hover:border-gold/50 transition-colors flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                Five Months of Winter Logistics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Winter isn’t optional planning — it’s the default condition for five months a year. Ice on stairwells and loading docks is a liability issue, not just an inconvenience. Crews without proper floor and doorway protection protocol will damage hardwood and drywall, and most homeowners don’t find out until the deposit is already gone.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-gold flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Protective neoprene floor shielding</span>
            </div>
          </div>
        </div>

        {/* The Building Gap Pullquote */}
        <div className="mt-12 p-6 rounded-sm bg-white border border-slate-200 border-l-4 border-l-gold shadow-sm">
          <p className="font-editorial text-lg sm:text-xl text-slate-900 italic">
            “In practice, what we often see is: the mover quoted the move correctly but never planned the building. That’s the gap between a company that’s moved boxes in Chicago and one that’s moved into Chicago buildings.”
          </p>
        </div>
      </section>

      {/* SECTION 2: Is the Cheapest Mover in Chicago Actually Worth It? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-200">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
            PRICE INTEGRITY AUDIT
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Is the Cheapest Mover in Chicago Actually Worth It?
          </h2>
          <p className="mt-4 text-slate-600 font-editorial text-lg leading-relaxed">
            This is the myth that costs people the most money: <strong>the lowest quote is usually the most expensive move you’ll make</strong>.
          </p>
        </div>

        {/* The Mechanism & Hostage Load */}
        <div className="bg-white border border-slate-200 p-8 rounded-sm mb-12 shadow-sm">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
            The Hostage Load Mechanism — Not Just a Warning
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            A non-binding low-ball estimate is built to get you to sign. On move day, the crew re-weighs the shipment, “discovers” extra items, or claims stairs and long carries weren’t disclosed — and the price climbs <strong>30–60% before the truck is even loaded</strong>. At that point, most people pay rather than lose their belongings mid-move.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            This is documented enough by federal regulators that it has a name in the industry: a <strong>“hostage load,”</strong> where an unlicensed or under-bonded mover holds a shipment until the customer pays an inflated final price. It’s more common with movers who can’t produce a USDOT number on request than with established Chicago local moving companies that operate on binding or not-to-exceed estimates.
          </p>
        </div>

        {/* Trade-Off Table */}
        <div className="overflow-x-auto rounded-sm border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-mono uppercase tracking-widest text-slate-600">
                <th className="py-4 px-6 bg-slate-100">Approach</th>
                <th className="py-4 px-6 bg-slate-100">When it works</th>
                <th className="py-4 px-6 bg-slate-100">When it fails</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-semibold text-slate-900">
                  Lowest online quote, no in-home walkthrough
                </td>
                <td className="py-4 px-6 text-slate-600">
                  Very small, single-item moves with nothing to misjudge
                </td>
                <td className="py-4 px-6 text-rose-700 font-medium">
                  Full household moves — almost guaranteed to change on move day
                </td>
              </tr>
              <tr className="bg-amber-50/50 border-l-2 border-l-gold hover:bg-amber-50 transition-colors">
                <td className="py-4 px-6 font-bold text-gold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  Binding estimate after in-home/video survey
                </td>
                <td className="py-4 px-6 text-slate-800 font-medium">
                  Any residential or office move with more than a few rooms
                </td>
                <td className="py-4 px-6 text-emerald-700 font-semibold">
                  Rarely fails — the risk is priced in upfront
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-semibold text-slate-900">
                  Flat “per hour” quote with no minimum stated
                </td>
                <td className="py-4 px-6 text-slate-600">
                  Short local moves under 2 hours
                </td>
                <td className="py-4 px-6 text-rose-700 font-medium">
                  Multi-stop, high-rise, or long-carry moves, where hours pad quickly
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 rounded-sm bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 text-center font-editorial italic shadow-sm">
          “The fix isn’t ‘always pick the most expensive company.’ It’s refusing to book off a number that wasn’t built from an actual look at your home.”
        </div>
      </section>

      {/* SECTION 3: Local, Long-Distance, or Commercial: Which Chicago Move Do You Need? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-200">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
            MOVE CLASSIFICATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Local, Long-Distance, or Commercial: Which Chicago Move Do You Need?
          </h2>
          <p className="mt-4 text-slate-600 font-editorial text-lg leading-relaxed">
            Search intent around “Chicago movers” usually collapses three very different jobs into one search bar. They’re priced, staffed, and scheduled differently.
          </p>
        </div>

        {/* Structured Move Type Comparison Table */}
        <div className="overflow-x-auto mb-10 rounded-sm border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-mono uppercase tracking-widest text-slate-600">
                <th className="py-4 px-6 bg-slate-100">Move Type</th>
                <th className="py-4 px-6 bg-slate-100">Typical Use Case</th>
                <th className="py-4 px-6 bg-slate-100">What Changes</th>
                <th className="py-4 px-6 bg-slate-100 text-gold font-bold">Where JK Moving Chicago Fits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">Residential / Local Moving</td>
                <td className="py-4 px-6 text-slate-700">Apartment-to-apartment or house-to-house within Chicagoland</td>
                <td className="py-4 px-6 text-slate-600">Priced hourly or flat-rate; same-day or next-day scheduling possible</td>
                <td className="py-4 px-6 text-slate-800 font-medium">Local moving companies Chicago clients call for studio, condo, and single-family home moves</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">Long-Distance / Interstate Moving</td>
                <td className="py-4 px-6 text-slate-700">Relocating out of Illinois for work, family, or retirement</td>
                <td className="py-4 px-6 text-slate-600">Priced by weight and distance; binding estimates strongly recommended; delivery windows, not fixed dates</td>
                <td className="py-4 px-6 text-slate-800 font-medium">Cross country movers Chicago and long distance movers Chicago IL clients use for multi-state relocations</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">Commercial / Office Moving</td>
                <td className="py-4 px-6 text-slate-700">Relocating a business, off-hours or weekend moves</td>
                <td className="py-4 px-6 text-slate-600">Priced by scope, often requires after-hours access, IT/equipment handling, minimal downtime</td>
                <td className="py-4 px-6 text-slate-800 font-medium">Office movers Chicago and commercial moving companies Chicago businesses hire to avoid lost workdays</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-sm bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-3 shadow-sm">
          <Scale className="w-5 h-5 text-gold flex-shrink-0" />
          <span>
            <strong>Rule of thumb:</strong> If your move crosses a state line, insist on a <strong>binding estimate</strong>. If it’s local, an accurate hourly rate with a stated minimum is usually fair — as long as it came from someone who actually looked at your inventory.
          </span>
        </div>
      </section>

      {/* SECTION 4: The P.A.C.K. Framework: Vetting Any Chicago Mover in Under 10 Minutes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-200">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
            VETTING METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            The P.A.C.K. Framework
          </h2>
          <p className="mt-3 text-slate-600 font-editorial text-lg">
            Most “how to choose a mover” checklists online are recycled from the same three articles. Here’s a framework we use internally that condenses vetting into four checks — <strong>P.A.C.K.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* P */}
          <div className="bg-white border border-slate-200 p-6 rounded-sm relative group hover:-translate-y-1 transition-transform shadow-sm hover:border-gold/60">
            <span className="text-5xl font-display font-black text-gold/25 group-hover:text-gold transition-colors block mb-2">
              P
            </span>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Paperwork</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Ask for the <strong>USDOT number</strong> (for interstate moves) or <strong>Illinois Commerce Commission (ICC)</strong> registration (for intrastate moves), and confirm it on the FMCSA or ICC site yourself. Legitimate movers give this instantly.
            </p>
          </div>

          {/* A */}
          <div className="bg-white border border-slate-200 p-6 rounded-sm relative group hover:-translate-y-1 transition-transform shadow-sm hover:border-gold/60">
            <span className="text-5xl font-display font-black text-gold/25 group-hover:text-gold transition-colors block mb-2">
              A
            </span>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Actual Estimate</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              In-home, video, or detailed virtual walkthrough — <strong>not a five-question online form</strong>. If a company will give you a binding number without ever seeing your inventory, that’s a red flag, not a convenience.
            </p>
          </div>

          {/* C */}
          <div className="bg-white border border-slate-200 p-6 rounded-sm relative group hover:-translate-y-1 transition-transform shadow-sm hover:border-gold/60">
            <span className="text-5xl font-display font-black text-gold/25 group-hover:text-gold transition-colors block mb-2">
              C
            </span>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Coverage</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Ask specifically what’s covered: released value (statutory minimum, often $0.60/lb) vs. <strong>Full-Value Protection</strong>. Most complaints against movers trace back to someone assuming they had more coverage than they’d actually purchased.
            </p>
          </div>

          {/* K */}
          <div className="bg-white border border-slate-200 p-6 rounded-sm relative group hover:-translate-y-1 transition-transform shadow-sm hover:border-gold/60">
            <span className="text-5xl font-display font-black text-gold/25 group-hover:text-gold transition-colors block mb-2">
              K
            </span>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Knowledge</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              For condo, co-op, or high-rise moves, ask directly: <em>“Do you handle the building’s COI and elevator reservation, or is that on me?”</em> A company that’s moved people into Chicago high-rises before will already have a turnkey process.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          The mistake most people make at this stage: <strong>they compare quotes before they compare paperwork</strong>. Price should be the last filter, not the first.
        </div>
      </section>

      {/* SECTION 5: Full-Service Packing vs. Self-Pack: When Each Actually Pays Off */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-200">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
            PACKING STRATEGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Full-Service Packing vs. Self-Pack: When Each Actually Pays Off
          </h2>
          <p className="mt-4 text-slate-600 font-editorial text-lg leading-relaxed">
            This is one of the most misunderstood trade-offs in the industry, and most companies won’t tell you the honest version because full-service packing is more profitable for them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Full-Service Packing */}
          <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
            <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block mb-2">
              SCENARIO A
            </span>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
              Full-Service Packing & Moving in Chicago Makes Sense When:
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>You’re moving long-distance and repacking damaged items later would cost more than the packing fee.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>You have limited time (e.g. an executive work relocation with a hard start date).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>You have fragile, high-value items — art, wine, instruments — where professional packing materials matter more than the labor cost.</span>
              </li>
            </ul>
          </div>

          {/* Self-Packing */}
          <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold block mb-2">
              SCENARIO B
            </span>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
              Self-Packing Makes More Sense When:
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>It’s a local move under a few miles and boxes can be transported in multiple trips if needed.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>You have the time to pack over 1–2 weeks rather than rushing over a single weekend.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>Your inventory is mostly durable goods (books, kitchenware, clothing) rather than fragile or irregular items.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Where it Fails in Both Directions */}
        <div className="p-6 rounded-sm bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 shadow-sm">
          <strong className="text-gold block mb-1 font-semibold">Where it fails in both directions:</strong>
          Self-packing a long-distance move to save money often backfires — improperly packed boxes are the #1 cause of claims, and many movers’ liability coverage is reduced or voided for customer-packed cartons (<strong>“PBO” — packed by owner</strong>). On the flip side, paying for full packing on a simple two-room local move is usually money spent on convenience, not risk reduction.
        </div>
      </section>

      {/* SECTION 6: How Much Do Movers in Chicago Actually Cost? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-200">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
            REALISTIC CHICAGOLAND PRICING
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            How Much Do Movers in Chicago Actually Cost?
          </h2>
          <p className="mt-4 text-slate-600 font-editorial text-lg leading-relaxed">
            Pricing varies by crew size, distance, and season, but here’s a realistic range based on typical Chicagoland moves:
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto mb-8 rounded-sm border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-mono uppercase tracking-widest text-slate-600">
                <th className="py-4 px-6 bg-slate-100">Move Size</th>
                <th className="py-4 px-6 bg-slate-100">Local Move (within Chicagoland)</th>
                <th className="py-4 px-6 bg-slate-100">Long-Distance (1,000 miles)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-semibold text-slate-900">Studio / 1BR</td>
                <td className="py-4 px-6 text-gold font-mono font-bold">$450 – $900</td>
                <td className="py-4 px-6 text-slate-800 font-mono font-bold">$2,000 – $3,800</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-semibold text-slate-900">2–3 Bedroom Home</td>
                <td className="py-4 px-6 text-gold font-mono font-bold">$1,000 – $2,400</td>
                <td className="py-4 px-6 text-slate-800 font-mono font-bold">$4,500 – $8,500</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-semibold text-slate-900">4+ Bedroom Home</td>
                <td className="py-4 px-6 text-gold font-mono font-bold">$2,200 – $4,500+</td>
                <td className="py-4 px-6 text-slate-800 font-mono font-bold">$8,000 – $15,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mb-6">
          *These are general ranges, not a quote — actual pricing depends on stairs, long carries, packing services, and building requirements like elevator reservations. <strong>JK Moving Services Chicago IL</strong> provides written, itemized quotes after reviewing your inventory, so the number you’re given is the number you pay.
        </p>

        <div className="p-4 rounded-sm bg-white border border-slate-200 text-xs text-slate-700 shadow-sm">
          <strong>Looking for affordable packers and movers in Chicago without cutting corners?</strong> Ask any company for their rate broken into labor, materials, and travel time separately — a transparent breakdown is a stronger trust signal than a low headline number.
        </div>
      </section>

      {/* SECTION 7: Chicago Neighborhoods & Areas We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-200">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
            LOCAL FOOTPRINT
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Chicago Neighborhoods & Areas We Serve
          </h2>
          <p className="mt-4 text-slate-600 font-editorial text-lg leading-relaxed">
            JK Moving and Storage Chicago handles residential and commercial moves throughout the city and suburbs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {neighborhoods.map((n) => (
            <div
              key={n.name}
              className="bg-white border border-slate-200 p-4 rounded-sm hover:border-gold/50 transition-colors shadow-sm"
            >
              <h4 className="text-sm font-display font-bold text-slate-900">{n.name}</h4>
              <span className="text-[11px] text-slate-500 mt-0.5 block">{n.type}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-sm bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-900 font-editorial text-center italic shadow-sm">
          “Whether it’s a high-rise condo downtown or a single-family home in the suburbs, our crews plan the building and the parking before the truck ever leaves the yard.”
        </div>
      </section>

      {/* SECTION 8: What Makes JK Moving Different */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-slate-200">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-gold font-semibold block mb-2">
            OUR STANDARD
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            What Makes JK Moving Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm">
            <span className="font-mono text-xs text-gold font-bold block mb-1">01</span>
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
              Binding & Not-to-Exceed Estimates
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              The number in your quote is the number on your invoice. No move-day rate creep or unexpected surcharge line items.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm">
            <span className="font-mono text-xs text-gold font-bold block mb-1">02</span>
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
              Building-Specific Planning
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              COI coordination, elevator reservations, and parking permits handled before move day, not discovered on it.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm">
            <span className="font-mono text-xs text-gold font-bold block mb-1">03</span>
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
              Trained, Background-Checked Crews
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Permanent salaried professionals — not day-labor subcontractors assembled the morning of your move.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm">
            <span className="font-mono text-xs text-gold font-bold block mb-1">04</span>
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
              Full-Value Protection Options
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent cargo valuation so you know exactly what’s covered before anything is loaded onto the truck.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-sm md:col-span-2 lg:col-span-2 shadow-sm">
            <span className="font-mono text-xs text-gold font-bold block mb-1">05</span>
            <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
              Local & Long-Distance Capability Under One Roof
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct custody without handoffs to third-party van line brokers you’ve never vetted.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: Get a Real Chicago Movers Quote */}
      <section id="quote-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quote Form */}
          <div className="lg:col-span-8 bg-white border border-slate-200 p-8 sm:p-12 rounded-sm shadow-xl">
            {!chicagoFormSubmitted ? (
              <div>
                <div className="border-b border-slate-200 pb-6 mb-8">
                  <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold block mb-1">
                    CHICAGOLAND DISPATCH DESK
                  </span>
                  <h3 className="text-3xl font-display font-bold text-slate-900">
                    Get a Real Chicago Movers Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-editorial mt-2">
                    Most “instant quotes” online are guesses. Ours are built from an actual look at what you’re moving — because that’s the only version of a quote that survives move day.
                  </p>
                </div>

                <form onSubmit={handleChicagoSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Patrick Sullivan"
                        value={chicagoForm.fullName}
                        onChange={(e) => setChicagoForm({ ...chicagoForm, fullName: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(773) 555-0192"
                        value={chicagoForm.phone}
                        onChange={(e) => setChicagoForm({ ...chicagoForm, phone: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="patrick@chicago.com"
                        value={chicagoForm.email}
                        onChange={(e) => setChicagoForm({ ...chicagoForm, email: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Neighborhood / Suburb
                      </label>
                      <select
                        value={chicagoForm.neighborhood}
                        onChange={(e) => setChicagoForm({ ...chicagoForm, neighborhood: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3.5 py-3 rounded-sm text-sm text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      >
                        {neighborhoods.map((n) => (
                          <option key={n.name} value={n.name}>
                            {n.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Move Scope
                      </label>
                      <select
                        value={chicagoForm.moveType}
                        onChange={(e) => setChicagoForm({ ...chicagoForm, moveType: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3 py-3 rounded-sm text-xs text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      >
                        <option value="Local Chicagoland Move">Local Chicagoland Move</option>
                        <option value="Long-Distance / Interstate">Long-Distance / Interstate</option>
                        <option value="Commercial / Office Move">Commercial / Office Move</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Building Type
                      </label>
                      <select
                        value={chicagoForm.buildingType}
                        onChange={(e) => setChicagoForm({ ...chicagoForm, buildingType: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3 py-3 rounded-sm text-xs text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      >
                        <option value="High-Rise / Condo (Needs COI)">High-Rise / Condo (Needs COI)</option>
                        <option value="Walk-Up / Brownstone">Walk-Up / Brownstone</option>
                        <option value="Single-Family Home">Single-Family Home</option>
                        <option value="Commercial Office Space">Commercial Office Space</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Survey Method
                      </label>
                      <select
                        value={chicagoForm.inventorySurvey}
                        onChange={(e) => setChicagoForm({ ...chicagoForm, inventorySurvey: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-slate-300 px-3 py-3 rounded-sm text-xs text-slate-900 focus:border-gold focus:bg-white focus:outline-none transition-colors"
                      >
                        <option value="Virtual Video Walkthrough">Virtual Video Walkthrough</option>
                        <option value="In-Home Survey">In-Home Surveyor Walkthrough</option>
                        <option value="Itemized Photo Inventory">Itemized Photo Inventory</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Binding, no-obligation estimate provided within 4 hours.
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-sm bg-gold text-white font-bold text-xs uppercase tracking-widest hover:bg-gold-light hover:shadow-glow-gold transition-all"
                    >
                      <span>Request My Chicago Estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-gold" />
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                  ✓ Chicago Itinerary Dossier Created
                </span>
                <h3 className="text-3xl font-display font-bold text-slate-900 mt-2">
                  We have received your Chicago relocation request.
                </h3>
                <p className="mt-3 text-slate-600 font-editorial text-lg max-w-lg mx-auto">
                  Thank you, {chicagoForm.fullName}. A local coordinator from our Lincoln Avenue office will review your building parameters and contact you to schedule your {chicagoForm.inventorySurvey}.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                  <button
                    onClick={() => setChicagoFormSubmitted(false)}
                    className="px-6 py-3 rounded-sm bg-slate-100 border border-slate-300 text-xs text-slate-800 uppercase tracking-widest hover:bg-slate-200 transition-colors font-semibold"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 p-8 rounded-sm space-y-6 shadow-md">
            <h4 className="text-xl font-display font-bold text-slate-900 border-b border-slate-200 pb-4">
              JK Moving Services Chicago IL
            </h4>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 uppercase font-mono text-[10px] block">Terminal & Office</span>
                  <span className="text-slate-900 font-medium">3047 N Lincoln Ave #400, Chicago, Illinois, 60657</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 uppercase font-mono text-[10px] block">Direct Telephone</span>
                  <a href="tel:7739132569" className="text-slate-900 text-sm font-bold hover:text-gold">
                    (773) 913-2569
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 uppercase font-mono text-[10px] block">Direct Email</span>
                  <a href="mailto:chicago@jkmovingservice.com" className="text-slate-900 hover:text-gold font-medium">
                    chicago@jkmovingservice.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 uppercase font-mono text-[10px] block">Hours</span>
                  <span className="text-slate-900">Monday – Saturday: 7:00 AM – 7:00 PM</span>
                  <span className="text-slate-500 block text-[11px]">24/7 After-Hours Dispatch Available</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 italic">
              Request your free, no-obligation moving quote today — local, long-distance, or commercial. (This listing uses placeholder contact details for portfolio/demo purposes.)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
