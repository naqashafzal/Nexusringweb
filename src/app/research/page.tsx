"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, FileText } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function ResearchPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      {/* 1. HERO */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
            Cognitive Science &amp; Hypotheses
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.04] text-[#1D1D1F]">
            Designing for focus in a distracting world.
          </h1>
          <p className="text-[#6E6E73] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            The behavioral ideas, environmental psychology principles, and product hypotheses behind Nexus Ring—and what we are testing with real users.
          </p>
        </motion.div>
      </section>

      {/* 2. RESEARCH PRINCIPLES */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28 space-y-8">
        {/* Context Switching */}
        <div className="surface-card p-8 border border-[#E5E5E7] rounded-3xl space-y-4">
          <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider block">Principle 01</span>
          <h3 className="text-2xl font-semibold text-[#1D1D1F]">Context switching carries a high cognitive overhead.</h3>
          <p className="text-sm text-[#6E6E73] leading-relaxed">
            Switching repeatedly between work, browser feeds, team chats, and alerts fragments attention. Manual session preparation creates unnecessary decision fatigue before deep work even begins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#E5E5E7]">
              <h4 className="text-[#C93E50] font-semibold mb-1 uppercase text-[11px] tracking-wide">Design Principle</h4>
              <p className="text-xs text-[#1D1D1F] leading-relaxed">Reduce the number of manual clicks required to transition into a productive state.</p>
            </div>
            <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#E5E5E7]">
              <h4 className="text-[#12B76A] font-semibold mb-1 uppercase text-[11px] tracking-wide">Nexus Implementation</h4>
              <p className="text-xs text-[#1D1D1F] leading-relaxed">One physical mode transition applies application, website, and notification rules simultaneously.</p>
            </div>
          </div>
        </div>

        {/* Physical Friction */}
        <div className="surface-card p-8 border border-[#E5E5E7] rounded-3xl space-y-4">
          <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider block">Principle 02</span>
          <h3 className="text-2xl font-semibold text-[#1D1D1F]">Physical friction breaks impulsive digital habits.</h3>
          <p className="text-sm text-[#6E6E73] leading-relaxed">
            Digital software toggles can be closed in a fraction of a second. Nexus Ring introduces physical resistance: moving an intentional totem anchors the mental decision in the physical environment.
          </p>
          <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#E5E5E7]">
            <h4 className="text-[#C93E50] font-semibold mb-1 uppercase text-[11px] tracking-wide">Behavioral Hypothesis</h4>
            <p className="text-xs text-[#1D1D1F] leading-relaxed">
              Exiting a focus mode should require an intentional physical movement rather than an accidental click.
            </p>
          </div>
        </div>

        {/* Work / Recovery Boundaries */}
        <div className="surface-card p-8 border border-[#E5E5E7] rounded-3xl space-y-4">
          <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider block">Principle 03</span>
          <h3 className="text-2xl font-semibold text-[#1D1D1F]">Work boundaries protect recovery as much as focus.</h3>
          <p className="text-sm text-[#6E6E73] leading-relaxed">
            Focus systems should not only help users enter work; they should help users leave work. Break mode creates a tangible boundary that quiets work communications so rest remains restorative.
          </p>
        </div>
      </section>

      {/* 3. SCIENTIFIC HONESTY */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-28 text-center bg-[#F8F9FA] border border-[#E5E5E7] p-8 rounded-3xl space-y-3">
        <BrainCircuit className="mx-auto text-[#C93E50] mb-2" size={28} />
        <h4 className="text-[#1D1D1F] font-semibold text-base">Ego Depletion &amp; Scientific Honesty</h4>
        <p className="text-xs text-[#6E6E73] leading-relaxed max-w-xl mx-auto">
          Academic research into willpower and ego depletion has shown mixed replication results. Nexus Ring does not make dogmatic claims that willpower is an exhaustible battery. Instead, it focuses on pragmatic workflow automation and environmental cues that reduce repetitive friction.
        </p>
      </section>

      {/* 4. WHAT WE ARE TESTING */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] mb-2 text-center">
          Questions Nexus Ring is testing with early users.
        </h2>
        <p className="text-xs text-[#6E6E73] text-center mb-8">
          Hypotheses currently under validation in prototype feedback sessions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            "Does a physical totem reduce setup time before entering focus sessions?",
            "Do users switch into Deep Work more consistently with physical anchors?",
            "Which automation actions provide the highest perceived value to developers?",
            "Does physical resistance reduce impulsive mid-session tab switching?",
            "Do users prefer strict local enforcement or advisory notifications?",
            "Does Break mode effectively improve work/recovery separation?",
            "Which ambient LED light behaviors communicate mode state most clearly?",
            "Does the physical interface maintain long-term utility once novelty fades?",
          ].map((q, i) => (
            <div key={i} className="p-4 bg-[#FFFFFF] border border-[#E5E5E7] rounded-xl text-[#1D1D1F] shadow-sm">
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHITEPAPER NOTICE */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-28 text-center bg-[#F8F9FA] border border-[#E5E5E7] p-10 rounded-3xl space-y-4">
        <FileText size={32} className="mx-auto text-[#C93E50]" />
        <h3 className="text-xl font-semibold text-[#1D1D1F]">Whitepaper &amp; Bibliography in Progress</h3>
        <p className="text-xs text-[#6E6E73] leading-relaxed max-w-md mx-auto">
          We are compiling our experimental test data, design principles, and literature references into a public engineering paper.
        </p>
        <button
          type="button"
          disabled
          className="px-6 py-2.5 rounded-full border border-[#E5E5E7] bg-[#FFFFFF] text-[#86868B] text-xs cursor-not-allowed"
        >
          Whitepaper Publication (Pending)
        </button>
      </section>

      {/* 6. CTA */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 text-center bg-[#F8F9FA] border border-[#E5E5E7] p-12 md:p-16 rounded-3xl space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
          Help us test the hypotheses.
        </h2>
        <p className="text-sm md:text-base text-[#6E6E73] mb-6 max-w-xl mx-auto leading-relaxed">
          Nexus Ring is developed in public. Join early testing groups to help validate physical mode interactions and shape companion software profiles.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="btn-accent px-8 py-3.5 cursor-pointer"
          >
            Join Early Testing List
          </button>
          <a
            href="https://discord.gg/Q3tTGhH4k"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-3.5 flex items-center gap-2 text-sm"
          >
            Join Discord Community
          </a>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
