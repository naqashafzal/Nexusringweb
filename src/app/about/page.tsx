"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function AboutPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#D83A50]/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D83A50]" />
            Vision &amp; Philosophy
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-[#F5F6F8] uppercase leading-[0.96]">
            YOUR ATTENTION BELONGS TO YOU.
          </h1>
          <p className="text-[#A5AFBD] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We&apos;re building tools for a world where technology serves human intention.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/hardware"
              className="px-8 py-3.5 rounded-full bg-[#D83A50] text-[#F5F6F8] font-semibold text-sm tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_20px_rgba(216,58,80,0.25)] flex items-center gap-2"
            >
              Explore the Hardware <ChevronRight size={15} />
            </Link>
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-3.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#F5F6F8] hover:border-[#A5AFBD] transition-all font-mono text-sm cursor-pointer"
            >
              Join Early Access
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE CORE PROBLEM */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 mb-28 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
          The screen holding your ambition is the same one holding your distraction.
        </h2>
        <p className="text-[#A5AFBD] text-base leading-relaxed max-w-2xl mx-auto">
          The computer you use to design, write software, solve problems, and learn also contains endless feeds, notifications, and context switches.
        </p>
        <p className="text-[#A5AFBD] text-base leading-relaxed max-w-2xl mx-auto">
          The software industry&apos;s answer has often been another app: another digital toggle hidden inside the very screen demanding your attention.
        </p>
        <p className="text-white text-lg font-bold leading-relaxed pt-2">
          We asked a different question: What if the decision happened physically first?
        </p>
      </section>

      {/* 3. FOUNDER INSIGHT */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <div className="p-8 md:p-12 border border-[#303A48] bg-[#11151C] rounded-3xl space-y-4">
          <span className="eyebrow block">The Origin</span>
          <h3 className="text-2xl font-bold text-white">Why software blockers fail alone.</h3>
          <div className="space-y-4 text-sm text-[#A5AFBD] leading-relaxed font-light">
            <p>
              Productivity software often struggles because it lives inside the environment it is attempting to control. It asks you to exert willpower while you are already overwhelmed by digital noise.
            </p>
            <p>
              A digital setting can be closed in a split-second impulse. A focus mode is easily bypassed.
            </p>
            <p className="text-white font-medium text-base pt-2 border-l-2 border-[#D83A50] pl-4">
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
            <div key={item.step} className="p-6 border border-[#303A48] bg-[#11151C] rounded-2xl">
              <span className="text-[#D83A50] font-mono text-xs uppercase block mb-2">{item.step}</span>
              <h4 className="text-white font-bold mb-2 text-base">{item.title}</h4>
              <p className="text-xs text-[#A5AFBD] leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ROADMAP */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 mb-28 text-center">
        <span className="eyebrow block">Evolution</span>
        <h2 className="text-3xl font-display font-bold text-white mb-8">
          One physical interface for digital state.
        </h2>
        <div className="flex flex-col gap-3 max-w-xl mx-auto text-left text-xs font-mono">
          <div className="p-4 border border-[#303A48] bg-[#11151C] rounded-xl flex items-center justify-between">
            <span className="font-bold text-white">Current Focus</span>
            <span className="text-[#A5AFBD]">Desktop hardware prototype &amp; Hall sensor testing.</span>
          </div>
          <div className="p-4 border border-[#303A48] bg-[#11151C] rounded-xl flex items-center justify-between">
            <span className="font-bold text-white">Next Stage</span>
            <span className="text-[#A5AFBD]">Desktop companion daemon + configurable profiles.</span>
          </div>
          <div className="p-4 border border-[#303A48] bg-[#11151C] rounded-xl flex items-center justify-between">
            <span className="font-bold text-white">Maker Release</span>
            <span className="text-[#A5AFBD]">Open CAD files, BOM, and assembly guides for makers.</span>
          </div>
          <div className="p-4 border border-[#303A48] bg-[#11151C] rounded-xl flex items-center justify-between">
            <span className="font-bold text-white">Production</span>
            <span className="text-[#A5AFBD]">Tooling, pilot manufacturing, and backer fulfillment.</span>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER SECTION */}
      <section id="founder" className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-28">
        <div className="p-8 md:p-12 border border-[#303A48] bg-[#11151C] rounded-3xl">
          <span className="eyebrow block">The Creator</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-1">Naqash Afzal</h2>
          <p className="text-[#D83A50] font-mono text-xs tracking-widest uppercase mb-6">
            Founder &amp; Hardware Architect
          </p>
          <div className="space-y-4 text-sm text-[#A5AFBD] mb-8 leading-relaxed font-light">
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
              className="px-4 py-2 border border-[#303A48] bg-[#080A0E] rounded-lg hover:border-[#D83A50] text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://makerworld.com/en/@naqash"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#303A48] bg-[#080A0E] rounded-lg hover:border-[#D83A50] text-white transition-colors"
            >
              MakerWorld
            </a>
            <a
              href="https://www.linkedin.com/in/naqashafzal/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#303A48] bg-[#080A0E] rounded-lg hover:border-[#D83A50] text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 text-center bg-[#11151C] border border-[#303A48] p-12 md:p-20 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Follow the journey from prototype to production.
        </h2>
        <p className="text-sm md:text-base text-[#A5AFBD] mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Join our waitlist for genuine engineering updates, 3D printing files, and notification when early access batches open.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] cursor-pointer"
          >
            Join the Waitlist
          </button>
          <Link
            href="/hardware"
            className="px-8 py-4 rounded-xl border border-[#303A48] text-white hover:border-[#D83A50] transition-all font-mono text-sm"
          >
            Explore the Hardware
          </Link>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
