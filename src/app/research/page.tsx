"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, FileText } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function ResearchPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="min-h-screen bg-[#080B12] text-[#F8FAFC] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#FF405A]/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#283141_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28 text-center">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#283141] bg-[#101723] text-[#A5AFBF] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF405A]" />
            Cognitive Science &amp; Hypotheses
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
            DESIGNING FOR FOCUS<br />
            <span className="text-[#A5AFBF]">IN A DISTRACTING WORLD.</span>
          </h1>
          <p className="text-[#A5AFBF] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            The behavioral ideas, environmental psychology principles, and product hypotheses behind Nexus Ring—and what we are testing with real users.
          </p>
        </motion.div>
      </section>

      {/* 2. RESEARCH PRINCIPLES */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28 space-y-8">
        {/* Context Switching */}
        <div className="p-8 border border-[#283141] bg-[#101723] rounded-3xl space-y-4">
          <span className="eyebrow block">Principle 01</span>
          <h3 className="text-2xl font-bold text-white">Context switching carries a high cognitive overhead.</h3>
          <p className="text-sm text-[#A5AFBF] leading-relaxed font-light">
            Switching repeatedly between work, browser feeds, team chats, and alerts fragments attention. Manual session preparation creates unnecessary decision fatigue before deep work even begins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#080B12] rounded-xl border border-[#283141]">
              <h4 className="text-[#FF405A] font-bold mb-1 uppercase text-[10px] tracking-widest font-mono">Design Principle</h4>
              <p className="text-xs text-white leading-relaxed">Reduce the number of manual clicks required to transition into a productive state.</p>
            </div>
            <div className="p-4 bg-[#080B12] rounded-xl border border-[#283141]">
              <h4 className="text-[#35C98A] font-bold mb-1 uppercase text-[10px] tracking-widest font-mono">Nexus Implementation</h4>
              <p className="text-xs text-white leading-relaxed">One physical mode transition applies application, website, and notification rules simultaneously.</p>
            </div>
          </div>
        </div>

        {/* Physical Friction */}
        <div className="p-8 border border-[#283141] bg-[#101723] rounded-3xl space-y-4">
          <span className="eyebrow block">Principle 02</span>
          <h3 className="text-2xl font-bold text-white">Physical friction breaks impulsive digital habits.</h3>
          <p className="text-sm text-[#A5AFBF] leading-relaxed font-light">
            Digital software toggles can be closed in a fraction of a second. Nexus Ring introduces physical resistance: moving an intentional totem anchors the mental decision in the physical environment.
          </p>
          <div className="p-4 bg-[#080B12] rounded-xl border border-[#283141]">
            <h4 className="text-[#FF405A] font-bold mb-1 uppercase text-[10px] tracking-widest font-mono">Behavioral Hypothesis</h4>
            <p className="text-xs text-white leading-relaxed">
              Exiting a focus mode should require an intentional physical movement rather than an accidental click.
            </p>
          </div>
        </div>

        {/* Work / Recovery Boundaries */}
        <div className="p-8 border border-[#283141] bg-[#101723] rounded-3xl space-y-4">
          <span className="eyebrow block">Principle 03</span>
          <h3 className="text-2xl font-bold text-white">Work boundaries protect recovery as much as focus.</h3>
          <p className="text-sm text-[#A5AFBF] leading-relaxed font-light">
            Focus systems should not only help users enter work; they should help users leave work. Break mode creates a tangible boundary that quiets work communications so rest remains restorative.
          </p>
        </div>
      </section>

      {/* 3. SCIENTIFIC HONESTY */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-28 text-center bg-[#101723] border border-[#283141] p-8 rounded-3xl space-y-3">
        <BrainCircuit className="mx-auto text-[#FF405A] mb-2" size={28} />
        <h4 className="text-white font-bold text-base">Ego Depletion &amp; Scientific Honesty</h4>
        <p className="text-xs text-[#A5AFBF] leading-relaxed font-light max-w-xl mx-auto">
          Academic research into willpower and ego depletion has shown mixed replication results. Nexus Ring does not make dogmatic claims that willpower is an exhaustible battery. Instead, it focuses on pragmatic workflow automation and environmental cues that reduce repetitive friction.
        </p>
      </section>

      {/* 4. WHAT WE ARE TESTING */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 text-center">
          Questions Nexus Ring is testing with early users.
        </h2>
        <p className="text-xs text-[#A5AFBF] text-center mb-8">
          Hypotheses currently under validation in prototype feedback sessions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
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
            <div key={i} className="p-4 bg-[#101723] border border-[#283141] rounded-xl text-[#F8FAFC]">
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHITEPAPER NOTICE */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-28 text-center bg-[#101723] border border-[#283141] p-10 rounded-3xl space-y-4">
        <FileText size={32} className="mx-auto text-[#FF405A]" />
        <h3 className="text-xl font-bold text-white">Whitepaper &amp; Bibliography in Progress</h3>
        <p className="text-xs text-[#A5AFBF] leading-relaxed max-w-md mx-auto font-light">
          We are compiling our experimental test data, design principles, and literature references into a public engineering paper.
        </p>
        <button
          type="button"
          disabled
          className="px-6 py-2.5 rounded-xl border border-[#283141] text-[#A5AFBF] font-mono text-xs opacity-60 cursor-not-allowed"
        >
          Whitepaper Publication (Pending)
        </button>
      </section>

      {/* 6. CTA */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 text-center bg-[#101723] border border-[#283141] p-12 md:p-20 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-4 uppercase tracking-tight">
          Help us test the hypotheses.
        </h2>
        <p className="text-sm md:text-base text-[#A5AFBF] mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Nexus Ring is developed in public. Join early testing groups to help validate physical mode interactions and shape companion software profiles.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowComingSoon(true)}
            className="px-8 py-4 rounded-xl bg-[#FF405A] text-white font-bold tracking-wide hover:bg-[#e0354e] transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] cursor-pointer"
          >
            Join Early Testing List
          </button>
          <a
            href="https://discord.gg/Q3tTGhH4k"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-[#283141] text-white hover:border-[#FF405A] transition-all font-mono text-sm flex items-center gap-2"
          >
            Join Discord Community
          </a>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
