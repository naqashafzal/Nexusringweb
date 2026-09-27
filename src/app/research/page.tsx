"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, FileText, Beaker, GitPullRequest, BrainCircuit, Play, Pause } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function ResearchPage() {
  const [showComingSoon, setShowComingSoon] = React.useState(false);

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HERO */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/[0.06] text-accent text-[11px] font-mono tracking-widest uppercase mb-4">
            Research & Design Principles
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] text-white">
            DESIGNING FOR FOCUS<br /><span className="text-slate-400">IN A DISTRACTING WORLD.</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            The behavioral ideas, interface principles and product hypotheses behind Nexus Ring — and what we still need to test.
          </p>
        </motion.div>
      </section>

      {/* 2. RESEARCH PRINCIPLES */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32 space-y-16">
        
        {/* Context Switching */}
        <div className="p-8 border border-slate bg-matte rounded-3xl">
          <h3 className="text-3xl font-display font-bold text-white mb-4">Interruptions have a cost.</h3>
          <p className="text-slate-400 mb-6">Switching repeatedly between work, messages, feeds and alerts can create cognitive overhead.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-vantablack rounded-xl border border-slate">
              <h4 className="text-accent font-bold mb-2 uppercase text-[10px] tracking-widest">Design Principle</h4>
              <p className="text-sm text-white">Reduce the number of manual decisions required to enter a work state.</p>
            </div>
            <div className="p-5 bg-vantablack rounded-xl border border-slate">
              <h4 className="text-accent2 font-bold mb-2 uppercase text-[10px] tracking-widest">Nexus Implementation</h4>
              <p className="text-sm text-white">One physical mode can run several preparation actions together.</p>
            </div>
          </div>
        </div>

        {/* Environmental Cues */}
        <div className="p-8 border border-slate bg-matte rounded-3xl">
          <h3 className="text-3xl font-display font-bold text-white mb-4">Context can help define behavior.</h3>
          <p className="text-slate-400 mb-6">People often use environmental cues and routines to support habits.</p>
          <div className="p-5 bg-vantablack rounded-xl border border-slate">
            <h4 className="text-purple font-bold mb-2 uppercase text-[10px] tracking-widest">Nexus Hypothesis</h4>
            <p className="text-sm text-white">A consistent physical gesture and visible mode state may make transitions between work contexts more deliberate.</p>
          </div>
        </div>

        {/* Physical Friction */}
        <div className="p-8 border border-slate bg-matte rounded-3xl">
          <h3 className="text-3xl font-display font-bold text-white mb-4">Small barriers can change behavior.</h3>
          <p className="text-slate-400 mb-6">Digital actions often require almost no effort. Opening another tab may happen automatically. Nexus introduces a physical step.</p>
          <div className="p-5 bg-vantablack rounded-xl border border-slate">
            <h4 className="text-accent font-bold mb-2 uppercase text-[10px] tracking-widest">Design Principle</h4>
            <p className="text-sm text-white">Breaking a selected focus state should require a deliberate action rather than an accidental click.</p>
          </div>
        </div>

        {/* Choice Reduction */}
        <div className="p-8 border border-slate bg-matte rounded-3xl">
          <h3 className="text-3xl font-display font-bold text-white mb-4">Repeated setup creates unnecessary friction.</h3>
          <p className="text-slate-400 mb-6">Entering Deep Work may require closing chat, muting alerts, opening work apps, starting a timer, and setting a status. Nexus seeks to reduce those repeated configuration steps.</p>
          <div className="p-5 bg-vantablack rounded-xl border border-slate">
            <h4 className="text-purple font-bold mb-2 uppercase text-[10px] tracking-widest">Product Hypothesis</h4>
            <p className="text-sm text-white">One deliberate action can make starting the intended environment easier and more repeatable.</p>
          </div>
        </div>

        {/* Recovery */}
        <div className="p-8 border border-slate bg-matte rounded-3xl">
          <h3 className="text-3xl font-display font-bold text-white mb-4">Work boundaries matter too.</h3>
          <p className="text-slate-400 mb-6">Focus systems shouldn't only help users enter work. They should help users leave work. Break mode is designed around creating a clearer transition between working and recovering.</p>
        </div>

      </section>

      {/* 3. EGO DEPLETION CLARIFICATION */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32 text-center bg-matte border border-slate p-8 rounded-3xl">
        <BrainCircuit className="mx-auto text-slate-500 mb-4" size={32} />
        <p className="text-sm text-slate-400 leading-relaxed">
          Research into willpower and ego depletion has produced mixed findings. Nexus Ring does not depend on the assumption that willpower is a finite resource. The product instead focuses on reducing repetitive decisions and creating clearer environmental transitions.
        </p>
      </section>

      {/* 4. WHAT WE ARE TESTING */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8">Questions Nexus Ring should answer with real users.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Does a physical mode reduce setup time?",
            "Do users switch into focus more consistently?",
            "Which actions provide the most value?",
            "Does the physical totem make users less likely to impulsively abandon a mode?",
            "Do users prefer strict or flexible Deep Work profiles?",
            "Does Break mode improve work/recovery separation?",
            "Which LED feedback is easiest to understand?",
            "Does the device feel useful after novelty wears off?"
          ].map((q, i) => (
            <div key={i} className="p-4 bg-vantablack border border-slate rounded-xl text-slate-300 text-sm">
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* 5. RESEARCH METHOD & PLAN */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <h2 className="text-3xl font-display font-bold text-white mb-8">Research & Testing Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <h4 className="text-white font-bold mb-2">Prototype Testing</h4>
            <span className="text-[10px] font-mono bg-accent/20 text-accent px-2 py-1 rounded">5–20 EARLY USERS</span>
            <p className="text-sm text-slate-400 mt-4">Observe setup time, mode usage, failure points, habit formation, and configuration preferences.</p>
          </div>
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <h4 className="text-white font-bold mb-2">Beta Testing</h4>
            <span className="text-[10px] font-mono bg-amber/20 text-amber px-2 py-1 rounded">EARLY ACCESS GROUP</span>
            <p className="text-sm text-slate-400 mt-4">Measure mode usage, session lengths, manual overrides, favorite automations, and retention.</p>
          </div>
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <h4 className="text-white font-bold mb-2">Production Validation</h4>
            <span className="text-[10px] font-mono bg-purple/20 text-purple px-2 py-1 rounded">AT SCALE</span>
            <p className="text-sm text-slate-400 mt-4">Test performance, stability, hardware reliability, software reliability, and overall user satisfaction.</p>
          </div>
        </div>
      </section>

      {/* 6. SOURCES & WHITEPAPER */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32 space-y-12">
        <div>
          <h2 className="text-3xl font-display font-bold text-white mb-6">Sources & Further Reading</h2>
          <p className="text-sm text-slate-400 italic mb-4">A complete bibliography of cognitive science research and design papers influencing our hypotheses is being compiled.</p>
        </div>
        <div className="p-8 border border-slate bg-matte rounded-3xl text-center">
          <FileText size={32} className="mx-auto text-white mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Whitepaper in Development</h3>
          <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
            We are compiling the product hypotheses, technical architecture, sources and prototype testing methodology into a public whitepaper.
          </p>
          <button className="px-6 py-3 rounded-xl border border-slate text-slate-400 font-mono text-xs cursor-not-allowed">
            Download Whitepaper (Pending)
          </button>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 text-center bg-matte border border-slate p-12 md:p-24 rounded-3xl">
        <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">
          Help us test the hypothesis.
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Nexus Ring is being developed in public. Early testers will help us learn which physical interactions and automation profiles actually improve the experience of transitioning between work states.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setShowComingSoon(true)} className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold tracking-wide hover:bg-[#00ffaa] transition-all">
            Join Early Access
          </button>
          <button className="px-8 py-4 rounded-xl border border-slate text-white hover:bg-slate transition-all font-mono text-sm">
            Join Discord
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
