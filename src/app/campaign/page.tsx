"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, PlayCircle } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function CampaignPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>("Maker Edition");

  const handleSelectTier = (tierName: string) => {
    setSelectedTier(tierName);
    setShowComingSoon(true);
  };

  return (
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#D83A50]/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28 text-center">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D83A50]" />
            Development &amp; Crowdfunding Roadmap
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
            FOLLOW THE BUILD.<br />
            <span className="text-[#A5AFBD]">BRING NEXUS RING TO LIFE.</span>
          </h1>
          <p className="text-[#A5AFBD] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We are engineering the Nexus Ring from prototype to production. Follow our open development trail, inspect our CAD and firmware milestones, and register interest for the upcoming backer launch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => handleSelectTier("Priority Launch List")}
              className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold text-sm tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] flex items-center gap-2 cursor-pointer"
            >
              <span>Register Early Interest</span> <ChevronRight size={16} />
            </button>
            <a
              href="#roadmap"
              className="px-8 py-4 rounded-xl border border-[#303A48] bg-[#11151C] text-white hover:border-[#D83A50] transition-all font-mono text-sm flex items-center gap-2"
            >
              View Production Stages
            </a>
          </div>
          <p className="text-[11px] font-mono text-[#A5AFBD]">
            No payment collected today · Transparent milestone updates
          </p>
        </motion.div>
      </section>

      {/* 2. DEMO & STORY */}
      <section id="demo" className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <div className="aspect-video bg-[#11151C] border border-[#303A48] rounded-3xl flex flex-col items-center justify-center shadow-2xl mb-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
          <PlayCircle size={60} className="text-white/80 z-20 group-hover:scale-105 transition-transform" />
          <p className="mt-4 font-mono text-xs text-[#A5AFBD] z-20">Prototype interaction &amp; mode switching demo</p>
          <div className="absolute bottom-4 left-6 z-20 text-[10px] font-mono text-[#A5AFBD] uppercase">
            Functional Prototype Demonstration
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="eyebrow block">The Intention</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Why physical boundaries matter.
            </h2>
            <p className="text-sm text-[#A5AFBD] leading-relaxed font-light">
              Digital app blockers and browser tabs compete for attention inside the exact same screen where distraction lives. A single click closes them.
            </p>
            <p className="text-sm text-[#A5AFBD] leading-relaxed font-light">
              Nexus Ring introduces physical friction: a weighted totem that provides a tangible anchor for your mental state.
            </p>
          </div>
          <div className="p-6 bg-[#11151C] border border-[#303A48] rounded-2xl flex flex-col items-center justify-center font-mono text-xs text-center space-y-2">
            <span className="text-white font-bold">1. PHYSICAL TOTEM SEATING</span>
            <span className="text-[#A5AFBD]">↓</span>
            <span className="text-[#D83A50]">2. HALL-EFFECT CONTACTLESS SENSING</span>
            <span className="text-[#A5AFBD]">↓</span>
            <span className="text-white">3. ESP32-C3 FIRMWARE EVENT</span>
            <span className="text-[#A5AFBD]">↓</span>
            <span className="text-[#35C98A]">4. NEXUS COMPANION AUTOMATION</span>
            <span className="text-[#A5AFBD]">↓</span>
            <span className="text-white font-bold">5. WORKSPACE ADAPTS LOCALLY</span>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPMENT STATUS */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-28">
        <h2 className="text-3xl font-display font-bold text-white mb-2 text-center">
          Where the project stands today.
        </h2>
        <p className="text-xs text-[#A5AFBD] text-center mb-8">
          Verified status of ongoing engineering and software deliverables.
        </p>
        <div className="space-y-2 font-mono text-xs">
          {[
            { f: "Product concept & 4-mode layout", s: "VALIDATED", c: "bg-[#35C98A]/20 text-[#35C98A]" },
            { f: "Industrial CAD modeling & exploded assembly", s: "VALIDATED", c: "bg-[#35C98A]/20 text-[#35C98A]" },
            { f: "3D-printable chassis prototype (FDM)", s: "PROTOTYPE", c: "bg-[#F0B35A]/20 text-[#F0B35A]" },
            { f: "Hall sensor magnetic testing", s: "TESTING", c: "bg-[#F0B35A]/20 text-[#F0B35A]" },
            { f: "ESP32-C3 firmware state machine", s: "IN DEVELOPMENT", c: "bg-[#D83A50]/20 text-[#D83A50]" },
            { f: "Custom PCB integration & routing", s: "IN DEVELOPMENT", c: "bg-[#D83A50]/20 text-[#D83A50]" },
            { f: "Desktop companion software daemon", s: "IN DEVELOPMENT", c: "bg-[#D83A50]/20 text-[#D83A50]" },
            { f: "Manufacturing tooling & pilot run", s: "PLANNED", c: "bg-[#303A48] text-[#A5AFBD]" },
            { f: "Campaign production & fulfillment", s: "PLANNED", c: "bg-[#303A48] text-[#A5AFBD]" },
          ].map((row) => (
            <div key={row.f} className="flex justify-between items-center p-3.5 border-b border-[#303A48] bg-[#11151C] rounded-lg">
              <span className="text-[#F5F6F8]">{row.f}</span>
              <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${row.c}`}>{row.s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PLANNED BACKER TIERS */}
      <section id="tiers" className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="text-center mb-14 space-y-2">
          <span className="eyebrow block">Planned Editions</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Choose your planned tier.
          </h2>
          <p className="text-xs text-[#A5AFBD]">
            Provisional pricing targets for crowdfunding campaign. Final numbers will be announced at launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Maker Tier */}
          <div className="p-8 border border-[#303A48] bg-[#11151C] rounded-3xl relative flex flex-col justify-between">
            <div>
              <span className="absolute top-5 right-5 bg-[#1B222D] text-[#A5AFBD] border border-[#303A48] px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase">
                Digital CAD
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-1">MAKER</h3>
              <div className="text-3xl font-display font-black text-white mb-2">$15 <span className="text-xs text-[#A5AFBD] font-mono font-normal">(Target)</span></div>
              <p className="text-xs text-[#D83A50] font-bold mb-4">Print your own Nexus Ring chassis.</p>
              <p className="text-xs text-[#A5AFBD] mb-6 font-light">Target: 3D printing enthusiasts and DIY builders with their own printers.</p>
              <ul className="space-y-2 text-xs text-[#A5AFBD] mb-8 font-mono">
                <li>✓ Parametric STEP &amp; STL files</li>
                <li>✓ 3D print slicer profiles (Bambu / Prusa)</li>
                <li>✓ Bill of materials &amp; supplier links</li>
                <li>✓ Wiring &amp; assembly documentation</li>
                <li>✓ Open firmware source access</li>
              </ul>
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleSelectTier("Maker Edition ($15 Target)")}
                className="w-full py-3.5 rounded-xl border border-[#303A48] bg-[#1B222D] text-white text-xs font-mono font-bold hover:border-[#D83A50] transition-colors cursor-pointer"
              >
                Register Interest
              </button>
            </div>
          </div>

          {/* Hacker Tier */}
          <div className="p-8 border border-[#D83A50]/40 bg-[#1B222D] rounded-3xl relative flex flex-col justify-between shadow-[0_0_30px_rgba(255,64,90,0.12)]">
            <div>
              <span className="absolute top-5 right-5 bg-[#D83A50]/10 text-[#D83A50] border border-[#D83A50]/30 px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase">
                Hardware Kit
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-1">HACKER</h3>
              <div className="text-3xl font-display font-black text-white mb-2">$49 <span className="text-xs text-[#A5AFBD] font-mono font-normal">(Target)</span></div>
              <p className="text-xs text-[#D83A50] font-bold mb-4">Official electronics kit. You print the body.</p>
              <p className="text-xs text-[#A5AFBD] mb-6 font-light">Target: makers who want official electronics without having to source individual ICs.</p>
              <ul className="space-y-2 text-xs text-[#A5AFBD] mb-8 font-mono">
                <li>✓ Custom Nexus Ring PCB</li>
                <li>✓ ESP32-C3 microcontroller module</li>
                <li>✓ 4x Hall-effect sensor array</li>
                <li>✓ Neodymium magnets &amp; LED ring</li>
                <li>✓ Digital Maker enclosure files</li>
              </ul>
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleSelectTier("Hacker Hardware Kit ($49 Target)")}
                className="w-full py-3.5 rounded-xl bg-[#D83A50] text-white text-xs font-mono font-bold hover:bg-[#EB5268] transition-colors cursor-pointer"
              >
                Register Interest
              </button>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="p-8 border border-[#303A48] bg-[#11151C] rounded-3xl relative flex flex-col justify-between">
            <div>
              <span className="absolute top-5 right-5 bg-[#1B222D] text-[#A5AFBD] border border-[#303A48] px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase">
                Assembled
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-1">PRO DESK SET</h3>
              <div className="text-3xl font-display font-black text-white mb-2">$129 <span className="text-xs text-[#A5AFBD] font-mono font-normal">(Target)</span></div>
              <p className="text-xs text-white font-bold mb-4">Fully assembled hardware. Ready on your desk.</p>
              <p className="text-xs text-[#A5AFBD] mb-6 font-light">Target: developers, designers, and focus enthusiasts who want a plug-and-play experience.</p>
              <ul className="space-y-2 text-xs text-[#A5AFBD] mb-8 font-mono">
                <li>✓ Fully assembled Nexus Ring controller</li>
                <li>✓ Weighted magnetic totem</li>
                <li>✓ Braided USB Type-C cable</li>
                <li>✓ Companion software access</li>
                <li>✓ Setup guide &amp; packaging</li>
              </ul>
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleSelectTier("Pro Desk Set ($129 Target)")}
                className="w-full py-3.5 rounded-xl border border-[#303A48] bg-[#1B222D] text-white text-xs font-mono font-bold hover:border-[#D83A50] transition-colors cursor-pointer"
              >
                Register Interest
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTION ROADMAP */}
      <section id="roadmap" className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <div className="text-center mb-12 space-y-2">
          <span className="eyebrow block">Execution Strategy</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Production Roadmap.
          </h2>
          <p className="text-xs text-[#A5AFBD]">
            Our progressive path from validated prototypes through pilot runs to backer delivery.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              phase: "Phase 01 — Prototype Validation",
              desc: "3D chassis iteration, magnetic flux alignment, Hall-effect debouncing, and local firmware state-machine verification.",
              status: "Current Stage",
            },
            {
              phase: "Phase 02 — Design for Manufacturing (DFM)",
              desc: "PCB revision for automated pick-and-place assembly, enclosure optimization for low-run tooling, supplier selection.",
              status: "Upcoming",
            },
            {
              phase: "Phase 03 — Pilot Batch & QA",
              desc: "Small pre-production run to validate assembly tolerances, sensor consistency, and packaging integrity.",
              status: "Planned",
            },
            {
              phase: "Phase 04 — Backer Manufacturing",
              desc: "PCB production, component sourcing, surface finishing, and quality control verification.",
              status: "Planned",
            },
            {
              phase: "Phase 05 — Fulfillment & Updates",
              desc: "Direct shipping, onboarding documentation, open-source firmware distribution, and software updates.",
              status: "Planned",
            },
          ].map((p, idx) => (
            <div key={p.phase} className="p-5 rounded-2xl border border-[#303A48] bg-[#11151C] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-wider">Step 0{idx + 1}</span>
                <h4 className="font-bold text-white text-sm">{p.phase}</h4>
                <p className="text-xs text-[#A5AFBD] font-light max-w-xl">{p.desc}</p>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#080A0E] border border-[#303A48] text-[#A5AFBD] shrink-0 self-start sm:self-auto">
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. RISKS & CHALLENGES */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <h2 className="text-3xl font-display font-bold text-white mb-2 text-center">
          Risks &amp; Open Engineering Challenges.
        </h2>
        <p className="text-xs text-[#A5AFBD] text-center mb-8">
          Hardware development involves real challenges. Here is what we are actively solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              t: "Magnetic Flux Tolerance",
              d: "Permanent magnets and Hall sensors need repeatable sensor triggering across thermal variations and assembly clearances.",
            },
            {
              t: "PCB Revisions",
              d: "Transitioning from prototype modules to a single integrated custom board requires testing for noise immunity and ESD protection.",
            },
            {
              t: "Cross-Platform Companion",
              d: "Operating systems (Windows, macOS, Linux) have different APIs for notification muting, site filtering, and app launching.",
            },
            {
              t: "Enclosure Material Sourcing",
              d: "Balancing the premium feel of billet CNC parts against the accessible cost of additive manufacturing.",
            },
          ].map((r) => (
            <div key={r.t} className="p-5 border border-[#303A48] bg-[#11151C] rounded-2xl space-y-1">
              <strong className="text-white text-sm block">{r.t}</strong>
              <p className="text-xs text-[#A5AFBD] font-light leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 text-center bg-[#11151C] border border-[#303A48] p-12 md:p-20 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Back the vision before public launch.
        </h2>
        <p className="text-sm md:text-base text-[#A5AFBD] mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Join our notification list to receive behind-the-scenes engineering logs and early backer access when our crowdfunding campaign opens.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => handleSelectTier("Priority Backer List")}
            className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] cursor-pointer"
          >
            Join Priority List
          </button>
        </div>
      </section>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        tierName={selectedTier}
      />
    </main>
  );
}
