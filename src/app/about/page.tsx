"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Zap, Play, Box, CheckCircle2 } from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function AboutPage() {
  const [showComingSoon, setShowComingSoon] = React.useState(false);

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/[0.06] text-accent text-[11px] font-mono tracking-widest uppercase mb-4">
            Our Vision
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] text-white">
            WE ARE RECLAIMING<br /><span className="text-slate-400">HUMAN INTENTION.</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Technology has spent the last decade learning how to perfectly capture our attention. We are building the physical anchor to help you take it back.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Link href="/features" className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold text-sm tracking-wide hover:bg-[#00ffaa] transition-all shadow-[0_0_30px_rgba(0,255,157,0.35)] flex items-center gap-2">
              See the Product <ChevronRight size={16} />
            </Link>
            <button className="px-8 py-4 rounded-xl border border-slate bg-matte text-white hover:bg-slate transition-all font-mono text-sm flex items-center gap-2">
              Join the Mission
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE CORE PROBLEM */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">The screen holding your ambition is the same one holding your distraction.</h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          The machine you use to build your business, write code, design, learn, and create also contains endless feeds, notifications, and interruptions designed by teams of engineers to break your focus.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          The tech industry's answer? Add another app. Another blocker. Another digital switch hidden in the same chaotic screen.
        </p>
        <p className="text-white text-xl font-bold leading-relaxed max-w-3xl mx-auto">
          We asked a different question: What if the decision happened physically first?
        </p>
      </section>

      {/* 3. FOUNDER INSIGHT */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <div className="p-8 md:p-12 border border-slate bg-matte rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-6">It started with a fundamental realization.</h3>
          <div className="space-y-4 text-slate-400">
            <p>Productivity software fails because it lives inside the very environment it is trying to control. It asks you to use willpower to turn on a blocker, while you are already overwhelmed.</p>
            <p>A digital blocker can be easily closed. A setting is easily forgotten. A focus mode is easily bypassed.</p>
            <p className="text-white font-bold text-lg">To truly protect your mind, the moment of intention has to be moved out of the screen and into the physical world.</p>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT PHILOSOPHY */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <span className="text-accent font-mono text-xs uppercase block mb-2">01</span>
            <h4 className="text-white font-bold mb-2">Physical Intent</h4>
            <p className="text-sm text-slate-400">A deliberate, tactile action that tells your brain it's time to shift gears.</p>
          </div>
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <span className="text-accent font-mono text-xs uppercase block mb-2">02</span>
            <h4 className="text-white font-bold mb-2">Digital Execution</h4>
            <p className="text-sm text-slate-400">The entire environment bends to your will automatically.</p>
          </div>
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <span className="text-accent font-mono text-xs uppercase block mb-2">03</span>
            <h4 className="text-white font-bold mb-2">Local Sanctuary</h4>
            <p className="text-sm text-slate-400">Your focus is yours. Automations run locally without surveillance.</p>
          </div>
          <div className="p-6 border border-slate bg-matte rounded-2xl">
            <span className="text-accent font-mono text-xs uppercase block mb-2">04</span>
            <h4 className="text-white font-bold mb-2">Absolute Clarity</h4>
            <p className="text-sm text-slate-400">You always know exactly what mode you are in. No hidden AI guessing your needs.</p>
          </div>
        </div>
      </section>

      {/* 5. NEXUS IS A SYSTEM & CARETAKER VISION */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-3xl font-display font-bold text-white mb-6">More than a desk object.</h3>
            <ul className="space-y-4 mb-8">
              <li><strong className="text-white">Hardware:</strong> <span className="text-slate-400">Represents intent.</span></li>
              <li><strong className="text-white">Software:</strong> <span className="text-slate-400">Executes the selected profile.</span></li>
              <li><strong className="text-white">Ecosystem:</strong> <span className="text-slate-400">Connects supported devices and services.</span></li>
            </ul>
            <div className="p-6 bg-vantablack border border-slate rounded-xl text-center font-mono text-sm text-slate-300">
              HUMAN INTENT<br/>↓<br/>PHYSICAL MODE<br/>↓<br/>NEXUS COMPANION<br/>↓<br/>DIGITAL ENVIRONMENT
            </div>
          </div>
          <div className="p-8 border border-slate bg-matte rounded-3xl">
            <h3 className="text-3xl font-display font-bold text-white mb-6">Technology should adapt to the state you choose.</h3>
            <div className="space-y-4 text-slate-400">
              <p><strong className="text-white">When you're focusing:</strong> reduce distractions.</p>
              <p><strong className="text-white">When you're creating:</strong> prepare creative tools.</p>
              <p><strong className="text-white">When you're meeting:</strong> prepare communication tools.</p>
              <p><strong className="text-white">When you're recovering:</strong> quiet work.</p>
            </div>
            <div className="mt-8 p-6 bg-vantablack border border-slate rounded-xl">
              <h4 className="text-white font-bold mb-2">Four states. Simple enough to become physical.</h4>
              <p className="text-sm text-slate-400">Deep Work · Creative · Meeting · Break</p>
              <p className="text-sm text-slate-400 mt-2">Nexus Ring should not begin with dozens of physical buttons. Four primary states keep the hardware understandable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ROADMAP */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-32 text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-8">One physical interface for digital state.</h2>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          <div className="p-4 border border-slate bg-matte rounded-xl flex items-center justify-between">
            <span className="font-bold text-white">Today</span>
            <span className="text-slate-400">Desktop mode controller.</span>
          </div>
          <div className="p-4 border border-slate bg-matte rounded-xl flex items-center justify-between">
            <span className="font-bold text-white">Next</span>
            <span className="text-slate-400">Desktop companion + customizable automation profiles.</span>
          </div>
          <div className="p-4 border border-slate bg-matte rounded-xl flex items-center justify-between">
            <span className="font-bold text-white">Then</span>
            <span className="text-slate-400">Mobile companion and supported integrations.</span>
          </div>
          <div className="p-4 border border-slate bg-matte rounded-xl flex items-center justify-between">
            <span className="font-bold text-white">Later</span>
            <span className="text-slate-400">Smart workspace coordination.</span>
          </div>
          <div className="p-6 mt-4 border border-accent/30 bg-accent/10 rounded-xl text-center">
            <span className="font-bold text-white block mb-2">Long-Term</span>
            <span className="text-accent text-sm">A physical interface capable of telling an ecosystem of devices: <br/><strong>"This is what I am doing now."</strong></span>
          </div>
        </div>
      </section>

      {/* 7. FOUNDER SECTION */}
      <section className="relative max-w-[800px] mx-auto px-6 md:px-12 mb-32">
        <div className="p-8 md:p-12 border border-slate bg-matte rounded-3xl">
          <h2 className="text-4xl font-display font-bold text-white mb-2">Naqash Afzal</h2>
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-6">Visionary & Founder</p>
          <p className="text-xl text-white font-medium mb-6 leading-relaxed border-l-2 border-accent pl-4">
            "We are not building a gadget. We are building the physical boundary between human intention and algorithmic distraction."
          </p>
          <div className="space-y-4 text-slate-400 mb-8 leading-relaxed">
            <p>
              Naqash recognized a fundamental flaw in modern computing: our machines have infinite willpower, but we do not. After witnessing countless talented people lose hours of their lives fighting their own tools, he realized the solution wasn't another piece of software. 
            </p>
            <p>
              The solution had to be physical. It had to be a tangible anchor that respects human psychology. Naqash combined hardware engineering, industrial design, and an uncompromising philosophy to create the Nexus Ring—a lifeline for a generation exhausted by digital noise.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <Link href="/features" className="px-4 py-2 border border-slate rounded-lg hover:bg-slate hover:text-white transition-colors">Vision</Link>
            <Link href="/hardware" className="px-4 py-2 border border-slate rounded-lg hover:bg-slate hover:text-white transition-colors">Design</Link>
            <a href="https://linkedin.com/in/naqashafzal" className="px-4 py-2 border border-slate rounded-lg hover:bg-slate hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* 8. BUILD IN PUBLIC & TIMELINE */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Built in public, not behind marketing.</h2>
            <p className="text-slate-400 mb-6">Sharing actual CAD renders, 3D prints, sensor tests, PCB development, firmware, software UI, GitHub work, failed prototypes, and manufacturing decisions.</p>
            <div className="space-y-6 mt-8">
              <h3 className="text-xl font-bold text-white border-b border-slate pb-2">Timeline</h3>
              <div className="flex justify-between items-center"><span className="text-white">Concept</span> <span className="text-[10px] bg-slate px-2 py-1 rounded">COMPLETE</span></div>
              <div className="flex justify-between items-center"><span className="text-white">Industrial Design</span> <span className="text-[10px] bg-amber/20 text-amber px-2 py-1 rounded">PROTOTYPE</span></div>
              <div className="flex justify-between items-center"><span className="text-white">Sensor System</span> <span className="text-[10px] bg-amber/20 text-amber px-2 py-1 rounded">TESTING</span></div>
              <div className="flex justify-between items-center"><span className="text-white">Custom PCB</span> <span className="text-[10px] bg-accent/20 text-accent px-2 py-1 rounded">IN DEVELOPMENT</span></div>
              <div className="flex justify-between items-center"><span className="text-white">Desktop Companion</span> <span className="text-[10px] bg-accent/20 text-accent px-2 py-1 rounded">IN DEVELOPMENT</span></div>
              <div className="flex justify-between items-center"><span className="text-white">Mobile Companion</span> <span className="text-[10px] bg-slate/50 px-2 py-1 rounded text-slate-400">PLANNED</span></div>
              <div className="flex justify-between items-center"><span className="text-white">Production</span> <span className="text-[10px] bg-slate/50 px-2 py-1 rounded text-slate-400">PLANNED</span></div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Company Values</h2>
            <div className="space-y-4">
              <div className="p-4 border border-slate bg-matte rounded-xl">
                <strong className="text-white block mb-1">Intentional Technology</strong>
                <span className="text-sm text-slate-400">Technology should follow deliberate human choices.</span>
              </div>
              <div className="p-4 border border-slate bg-matte rounded-xl">
                <strong className="text-white block mb-1">Local Control</strong>
                <span className="text-sm text-slate-400">The user should own their profiles and behavior.</span>
              </div>
              <div className="p-4 border border-slate bg-matte rounded-xl">
                <strong className="text-white block mb-1">Transparent Engineering</strong>
                <span className="text-sm text-slate-400">Prototype capabilities should not be marketed as finished products.</span>
              </div>
              <div className="p-4 border border-slate bg-matte rounded-xl">
                <strong className="text-white block mb-1">Maker Roots</strong>
                <span className="text-sm text-slate-400">Approachable to people who want to understand, build and modify their hardware.</span>
              </div>
              <div className="p-4 border border-slate bg-matte rounded-xl">
                <strong className="text-white block mb-1">Calm Interface</strong>
                <span className="text-sm text-slate-400">Reduce interface noise instead of creating more.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 text-center bg-matte border border-slate p-12 md:p-24 rounded-3xl">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          The goal isn't to add another app. It's to give you your mind back.
        </h2>
        <div className="text-slate-400 text-lg mb-12 space-y-2">
          <p>We are making the transition between intention and action tangible.</p>
          <p className="text-white font-bold">You decide what you are doing.</p>
          <p className="text-white font-bold">The physical environment confirms it.</p>
          <p className="text-white font-bold">The digital environment obeys.</p>
        </div>
        <h3 className="text-4xl md:text-5xl font-display font-black text-accent tracking-tight mb-12">
          YOUR ATTENTION. YOUR RULES.
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/features" className="px-8 py-4 rounded-xl bg-accent text-[#001a0a] font-bold tracking-wide hover:bg-[#00ffaa] transition-all">
            See it in Action
          </Link>
          <button onClick={() => setShowComingSoon(true)} className="px-8 py-4 rounded-xl border border-slate text-white hover:bg-slate transition-all font-mono text-sm">
            Join the Waitlist
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
