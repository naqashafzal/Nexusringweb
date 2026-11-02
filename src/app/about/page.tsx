"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function AboutPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans pt-28 pb-32 overflow-x-hidden selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      {/* 1. HERO */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
            Vision &amp; Philosophy
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#1D1D1F] leading-tight">
            Technology should work for you.
          </h1>
          <p className="text-[#6E6E73] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We&apos;re building physical and digital tools for a world where technology serves human purpose rather than competing for attention.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <Link
              href="/hardware"
              className="px-7 py-3 rounded-full bg-[#1D1D1F] text-white font-medium text-sm hover:bg-[#000000] transition-all shadow-sm flex items-center gap-2"
            >
              <span>Explore the Hardware</span>
              <ChevronRight size={14} />
            </Link>
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="px-7 py-3 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E5E5E7] text-sm font-medium transition-all cursor-pointer"
            >
              Join Early Access
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE CORE PROBLEM */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 mb-28 text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1D1D1F] leading-tight">
          The screen holding your ambition is the same one holding your distraction.
        </h2>
        <p className="text-[#6E6E73] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          The computer you use to design, write software, solve problems, and learn also contains endless feeds, notifications, and context switches.
        </p>
        <p className="text-[#6E6E73] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          The software industry&apos;s answer has often been another app: another digital toggle hidden inside the very screen demanding your attention.
        </p>
        <p className="text-[#1D1D1F] text-lg font-semibold leading-relaxed pt-2">
          We asked a different question: What if the decision happened physically first?
        </p>
      </section>

      {/* 3. FOUNDER INSIGHT */}
      <section className="relative max-w-[1040px] mx-auto px-6 md:px-12 mb-28">
        <div className="p-8 md:p-12 border border-[#E5E5E7] bg-[#F8F9FA] rounded-3xl space-y-4 shadow-sm">
          <span className="eyebrow block">The Origin</span>
          <h3 className="text-2xl font-bold text-[#1D1D1F]">Why software blockers fail alone.</h3>
          <div className="space-y-4 text-sm md:text-base text-[#6E6E73] leading-relaxed font-light">
            <p>
              Productivity software often struggles because it lives inside the environment it is attempting to control. It asks you to exert willpower while you are already overwhelmed by digital noise.
            </p>
            <p>
              A digital setting can be closed in a split-second impulse. A focus mode is easily bypassed.
            </p>
            <p className="text-[#1D1D1F] font-medium text-base pt-2 border-l-2 border-[#C93E50] pl-4">
              To create an intentional boundary, the moment of decision should be moved into the physical world.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT PHILOSOPHY */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: "01",
              title: "Physical Intent",
              desc: "A deliberate tactile action that marks a clear transition in your workday.",
            },
            {
              step: "02",
              title: "Digital Execution",
              desc: "Your companion software coordinates the corresponding applications, filters, and timers.",
            },
            {
              step: "03",
              title: "Local Sanctuary",
              desc: "Core automations run locally on your machine without mandatory cloud routing.",
            },
            {
              step: "04",
              title: "Glanceable State",
              desc: "Always know your active mode at a glance through ambient light without checking another screen.",
            },
          ].map((item) => (
            <div key={item.step} className="p-6 border border-[#E5E5E7] bg-[#FFFFFF] rounded-2xl shadow-xs">
              <span className="text-[#C93E50] font-mono text-xs uppercase block mb-2 font-semibold">{item.step}</span>
              <h4 className="text-[#1D1D1F] font-bold mb-2 text-base">{item.title}</h4>
              <p className="text-xs text-[#6E6E73] leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ROADMAP */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 mb-28 text-center">
        <span className="eyebrow block">Evolution</span>
        <h2 className="text-3xl font-display font-bold text-[#1D1D1F] mb-8">
          One physical interface for digital state.
        </h2>
        <div className="flex flex-col gap-3 max-w-xl mx-auto text-left text-xs font-mono">
          <div className="p-4 border border-[#E5E5E7] bg-[#FFFFFF] rounded-xl flex items-center justify-between shadow-xs">
            <span className="font-bold text-[#1D1D1F]">Current Focus</span>
            <span className="text-[#6E6E73]">Desktop hardware prototype &amp; Hall sensor testing.</span>
          </div>
          <div className="p-4 border border-[#E5E5E7] bg-[#FFFFFF] rounded-xl flex items-center justify-between shadow-xs">
            <span className="font-bold text-[#1D1D1F]">Next Stage</span>
            <span className="text-[#6E6E73]">Desktop companion daemon + configurable profiles.</span>
          </div>
          <div className="p-4 border border-[#E5E5E7] bg-[#FFFFFF] rounded-xl flex items-center justify-between shadow-xs">
            <span className="font-bold text-[#1D1D1F]">Maker Release</span>
            <span className="text-[#6E6E73]">Open CAD files, BOM, and assembly guides for makers.</span>
          </div>
          <div className="p-4 border border-[#E5E5E7] bg-[#FFFFFF] rounded-xl flex items-center justify-between shadow-xs">
            <span className="font-bold text-[#1D1D1F]">Production</span>
            <span className="text-[#6E6E73]">Tooling, pilot manufacturing, and backer fulfillment.</span>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER SECTION */}
      <section id="founder" className="relative max-w-[840px] mx-auto px-6 md:px-12 mb-28">
        <div className="p-8 md:p-12 border border-[#E5E5E7] bg-[#FFFFFF] rounded-3xl shadow-sm">
          <span className="eyebrow block">The Creator</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1D1D1F] mb-1">Naqash Afzal</h2>
          <p className="text-[#C93E50] font-mono text-xs tracking-widest uppercase mb-6 font-semibold">
            Founder &amp; Hardware Architect
          </p>
          <div className="space-y-4 text-sm text-[#6E6E73] mb-8 leading-relaxed font-light">
            <p>
              Naqash recognized that software alone cannot solve screen-induced distraction when the solution lives in the same chaotic window.
            </p>
            <p>
              By combining industrial design, 3D additive fabrication, microcontroller firmware, and native desktop automation, he created Nexus Ring as a tangible bridge between human intention and digital workspaces.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <a
              href="https://github.com/naqashafzal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#E5E5E7] bg-[#F5F5F7] rounded-full hover:bg-[#E5E5E7] text-[#1D1D1F] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://makerworld.com/en/@naqash"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#E5E5E7] bg-[#F5F5F7] rounded-full hover:bg-[#E5E5E7] text-[#1D1D1F] transition-colors"
            >
              MakerWorld
            </a>
            <a
              href="https://www.linkedin.com/in/naqashafzal/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#E5E5E7] bg-[#F5F5F7] rounded-full hover:bg-[#E5E5E7] text-[#1D1D1F] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="relative max-w-[960px] mx-auto px-6 md:px-12 text-center bg-[#F5F5F7] border border-[#E5E5E7] p-12 md:p-18 rounded-3xl shadow-sm">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1D1D1F] mb-4">
          Follow the journey from prototype to production.
        </h2>
        <p className="text-sm md:text-base text-[#6E6E73] mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Join our waitlist for genuine engineering updates, 3D printing files, and notification when early access batches open.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="px-7 py-3 rounded-full bg-[#1D1D1F] text-white font-medium text-sm hover:bg-[#000000] transition-all shadow-sm cursor-pointer"
          >
            Join the Waitlist
          </button>
          <Link
            href="/hardware"
            className="px-7 py-3 rounded-full border border-[#E5E5E7] bg-[#FFFFFF] text-[#1D1D1F] hover:bg-[#E5E5E7] transition-all text-sm font-medium"
          >
            Explore the Hardware
          </Link>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
