"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { BrainCircuit, Cpu, ShieldCheck, Download, Sparkles, BookOpen } from "lucide-react";

export default function ResearchPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-32 bg-[#030508] text-[#E2E8F0] font-sans overflow-x-hidden">
      {/* Background Dot Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Hero Section */}
      <section className="relative w-full max-w-[1100px] mx-auto px-6 md:px-12 mb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00FF9D]/[0.05] blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/[0.06] text-[#00FF9D] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
            Nexus Research & Cognitive Science
          </div>

          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
            THE SCIENCE OF<br />
            <span style={{ background: "linear-gradient(120deg,#00FF9D 0%,#00E5FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              SPATIAL FOCUS.
            </span>
          </h1>

          <p className="text-[#94a3b8] text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            A deep dive into cognitive psychology, ego depletion, hall-sensor telemetry, and local-first quantized AI architecture powering the Nexus Ring.
          </p>

          <div className="pt-4">
            <button
              onClick={() => alert("Downloading Nexus Spatial Focus Whitepaper (PDF)...")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#00FF9D]/40 bg-[#00FF9D]/10 text-[#00FF9D] font-bold text-xs font-mono tracking-wider hover:bg-[#00FF9D]/20 transition-all"
            >
              <Download size={14} /> Download Whitepaper (PDF v2.4)
            </button>
          </div>
        </motion.div>
      </section>

      {/* Section 1: Cognitive Psychology */}
      <section className="w-full max-w-[1100px] mx-auto px-6 md:px-12 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-4 sticky top-32">
            <div className="w-12 h-12 rounded-xl bg-[#070A10] border border-[#00FF9D]/30 flex items-center justify-center mb-4">
              <BrainCircuit className="text-[#00FF9D]" size={24} />
            </div>
            <h2 className="text-2xl font-display font-bold text-white tracking-tight mb-2">01. Cognitive Psychology</h2>
            <p className="text-[#00FF9D] text-xs uppercase tracking-widest font-mono">Ego Depletion Bypass</p>
          </div>

          <div className="md:col-span-8 space-y-6 text-[#94a3b8] text-sm md:text-base leading-relaxed font-light">
            <p>
              The fundamental flaw in traditional productivity software is its reliance on purely digital friction. App blockers, timers, and specialized desktop spaces require the user to actively configure them using the mouse and screen—the exact same interface that delivers distractions.
            </p>
            <p>
              Psychological studies on <strong className="text-white font-semibold">Ego Depletion</strong> prove that willpower is a finite cognitive energy store. Every time you consciously choose to launch a focus app instead of a social media tab, you drain mental reserves.
            </p>
            <div className="p-6 bg-[#070A10] border border-[#00FF9D]/30 rounded-2xl border-l-4 border-l-[#00FF9D] space-y-2">
              <h4 className="text-white font-display font-bold text-base">The Tactile Bypass Principle</h4>
              <p className="text-xs text-[#cbd5e1] font-light leading-relaxed">
                By introducing a physical totem, the Nexus Ring bypasses digital friction entirely. The tactile sensation of picking up machined billet aluminum and the haptic resonance of the magnetic snap establish spatial muscle memory, dramatically accelerating entry into deep work flow states.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Hardware Architecture */}
      <section className="w-full max-w-[1100px] mx-auto px-6 md:px-12 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-4 sticky top-32">
            <div className="w-12 h-12 rounded-xl bg-[#070A10] border border-[#00E5FF]/30 flex items-center justify-center mb-4">
              <Cpu className="text-[#00E5FF]" size={24} />
            </div>
            <h2 className="text-2xl font-display font-bold text-white tracking-tight mb-2">02. Hardware Architecture</h2>
            <p className="text-[#00E5FF] text-xs uppercase tracking-widest font-mono">Zero-Latency Polling</p>
          </div>

          <div className="md:col-span-8 space-y-6 text-[#94a3b8] text-sm md:text-base leading-relaxed font-light">
            <p>
              The Nexus Ring is engineered for instantaneous response. Standard Bluetooth protocol overhead was rejected in favor of a direct serial/Wi-Fi hybrid architecture driven by the <strong className="text-white font-semibold">ESP32-C3 RISC-V microcontroller</strong>.
            </p>
            <p>
              Inside the dock, an array of <strong className="text-white font-semibold">KY-003 Hall-effect sensors</strong> reads 3D magnetic flux vectors. When a totem enters the dock, the sensors detect field polarity and strength instantly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl border border-[#151D2A] bg-[#070A10] text-center">
                <p className="text-xl font-display font-bold text-[#00E5FF]">1000Hz</p>
                <p className="text-[10px] font-mono text-[#64748b] uppercase">Polling Rate</p>
              </div>
              <div className="p-4 rounded-xl border border-[#151D2A] bg-[#070A10] text-center">
                <p className="text-xl font-display font-bold text-[#00E5FF]">4.2N</p>
                <p className="text-[10px] font-mono text-[#64748b] uppercase">Actuation Force</p>
              </div>
              <div className="p-4 rounded-xl border border-[#151D2A] bg-[#070A10] text-center">
                <p className="text-xl font-display font-bold text-[#00E5FF]">&lt;24ms</p>
                <p className="text-[10px] font-mono text-[#64748b] uppercase">Daemon Response</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Local AI & Privacy */}
      <section className="w-full max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-4 sticky top-32">
            <div className="w-12 h-12 rounded-xl bg-[#070A10] border border-[#B026FF]/30 flex items-center justify-center mb-4">
              <ShieldCheck className="text-[#B026FF]" size={24} />
            </div>
            <h2 className="text-2xl font-display font-bold text-white tracking-tight mb-2">03. Local AI & Privacy</h2>
            <p className="text-[#B026FF] text-xs uppercase tracking-widest font-mono">100% Air-Gapped NPU</p>
          </div>

          <div className="md:col-span-8 space-y-6 text-[#94a3b8] text-sm md:text-base leading-relaxed font-light">
            <p>
              To provide intelligent context awareness, the Nexus software utilizes a quantized vision-language model. Sending desktop screenshots to external cloud servers is a non-negotiable privacy violation.
            </p>
            <p>
              The Nexus Guardian runs an optimized 4-bit quantization of <strong className="text-white font-semibold">Gemini 1.5</strong> directly on your machine's GPU or NPU. Zero screen pixels or keystrokes leave your machine.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 border border-[#151D2A] rounded-xl bg-[#070A10]">
                <h4 className="text-white font-display font-bold text-sm mb-1">Zero Cloud Scraping</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Screen buffer data is processed in local RAM and immediately overwritten. No telemetric payload exists.
                </p>
              </div>
              <div className="p-5 border border-[#151D2A] rounded-xl bg-[#070A10]">
                <h4 className="text-white font-display font-bold text-sm mb-1">Air-Gapped Operation</h4>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  The core hardware daemon functions continuously even when your machine is completely offline.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
