"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ExplodedRingCanvas from "@/components/ExplodedRingCanvas";
import HardwareModesShowcase from "@/components/HardwareModesShowcase";
import { Fingerprint, Zap, Lock, ChevronRight, Rotate3D } from "lucide-react";

// ─── Reveal helper ────────────────────────────────────────────────

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Page Component ───────────────────────────────────────────────

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(heroScroll, [0.75, 1], [1, 0]);
  const heroY = useTransform(heroScroll, [0.75, 1], [0, -60]);

  return (
    <main className="bg-[#030508] text-[#F8FAFC] font-sans overflow-x-hidden">

      {/* ════════════════ HERO (DUAL COLUMN SPLIT) ════════════════ */}
      <div className="fixed inset-0 z-10 pointer-events-auto">
        <ExplodedRingCanvas scrollProgress={heroScroll} disableExplode={true} />
      </div>

      <section ref={heroRef} className="relative h-[220vh] w-full z-20 pointer-events-none">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden pointer-events-none">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full">
            {/* ── LEFT COLUMN: Text Content & CTAs (6 cols) ── */}
            <motion.div style={{ opacity: heroOpacity, y: heroY }} className="lg:col-span-6 space-y-6 text-left relative z-20 max-w-xl pointer-events-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00FF9D]/40 bg-[#00FF9D]/[0.08] text-[#00FF9D] text-[11px] font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,157,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
                The Physical Anchor for Digital Intent
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.92] text-white">
                STOP FIGHTING<br />
                <span style={{ background: "linear-gradient(120deg,#00FF9D 0%,#00E5FF 50%,#B026FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  DISTRACTIONS.
                </span>
              </h1>

              <p className="text-[#94A3B8] text-base md:text-lg font-light max-w-lg leading-relaxed">
                The tactile, AI-powered desktop artifact that physically locks your OS into flow state. Zero latency. 100% private.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/campaign"
                  className="relative group px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-[#030508] bg-[#00FF9D] hover:bg-[#00ffaa] transition-all duration-300 shadow-[0_0_40px_rgba(0,255,157,0.45)] hover:shadow-[0_0_65px_rgba(0,255,157,0.75)] hover:scale-[1.02]"
                >
                  Pre-Order Artifact — $129
                </Link>
                <Link
                  href="/research"
                  className="px-8 py-4 rounded-xl font-medium text-sm text-[#94A3B8] hover:text-white border border-[#151D2A] hover:border-[#00FF9D]/40 bg-[#070A10]/90 backdrop-blur-md transition-all duration-300"
                >
                  Read Whitepaper →
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#151D2A]">
                {[
                  { label: "Magnetic Slots", val: "4 Positions" },
                  { label: "Kernel Hook", val: "<50ms Latency" },
                  { label: "AI Guardian", val: "Local Gemini 1.5" },
                  { label: "Crowdfunded", val: "452% Target" },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="text-xs font-mono text-[#00FF9D] font-semibold">{stat.val}</p>
                    <p className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN: Top-Right Badge Callout (6 cols) ── */}
            <motion.div style={{ opacity: heroOpacity }} className="hidden lg:flex lg:col-span-6 flex-col items-end justify-start h-full pt-4 pr-4 relative pointer-events-none">
              <div className="px-4 py-2 rounded-2xl border border-[#00FF9D]/30 bg-[#070A10]/90 backdrop-blur-md text-xs font-mono text-[#00FF9D] flex items-center gap-2 shadow-2xl pointer-events-auto cursor-grab active:cursor-grabbing">
                <Rotate3D size={16} className="animate-spin text-[#00FF9D]" style={{ animationDuration: "8s" }} />
                <span>Drag to Rotate 3D Artifact</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ════════════════ PROBLEM VS SOLUTION ═════════════════════ */}
      <section className="relative z-10 bg-[#030508] py-28 md:py-36 border-t border-[#151D2A]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#00FF9D] uppercase border border-[#00FF9D]/25 bg-[#00FF9D]/10 rounded-full inline-block px-3.5 py-1 mb-4">
              The Cognitive Friction Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white mb-4">
              Software app blockers fail because they lack physical consequence.
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed">
              When willpower is the only wall between you and endless tabs, a single command tab click destroys your focus.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-[#FF5F56]/30 bg-[#FF5F56]/[0.02] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#FF5F56] uppercase tracking-widest px-2.5 py-1 rounded bg-[#FF5F56]/10 border border-[#FF5F56]/20 inline-block mb-6">
                    The Old Way · Digital Blockers
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Easy to override. Zero friction.</h3>
                  <ul className="space-y-3 text-[#94A3B8] text-sm">
                    {["Bypassed in 2 clicks when impulse strikes", "Consumes CPU & tracks your screen data to cloud", "Creates guilt instead of physical flow triggers", "Purely digital — no spatial memory anchor"].map(i => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#FF5F56] shrink-0 mt-0.5">✕</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full rounded-2xl border border-[#00FF9D]/40 bg-[#00FF9D]/[0.05] p-8 md:p-10 flex flex-col justify-between shadow-[0_0_60px_rgba(0,255,157,0.12)]">
                <div>
                  <span className="text-[10px] font-mono text-[#00FF9D] uppercase tracking-widest px-2.5 py-1 rounded bg-[#00FF9D]/10 border border-[#00FF9D]/30 inline-block mb-6">
                    The Nexus Ring Way · Tactile Hardware
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Physical Totem. Instant Snap.</h3>
                  <ul className="space-y-3 text-[#CBD5E1] text-sm font-light">
                    {["Physical magnetic ring rotation forces conscious intent", "Air-gapped on-device AI — 0 bytes sent anywhere", "Establishes immediate spatial muscle memory for deep work", "Kernel Ring-0 hook blocks distractions at system level"].map(i => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#00FF9D] shrink-0 mt-0.5">✓</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ BENTO GRID: LOOP OF PERFECT FOCUS ══════ */}
      <section className="relative z-10 bg-[#030508] py-28 md:py-36 border-t border-[#151D2A]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#00E5FF] uppercase border border-[#00E5FF]/25 bg-[#00E5FF]/10 rounded-full inline-block px-3.5 py-1 mb-4">
              Hardware Architecture
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white mb-4">
              The Loop of Perfect Focus.
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed">
              Three hardware-accelerated layers working seamlessly to keep your mind locked in the zone.
            </p>
          </Reveal>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* ── Card 1: Tangible Intent (Spans 2 columns) ── */}
            <Reveal delay={0.0} className="lg:col-span-2">
              <div
                className="group relative min-h-[360px] h-full rounded-2xl border border-[#151D2A] bg-[#070A10] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 cursor-default hover:-translate-y-1"
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#00FF9D60"; el.style.boxShadow = "0 0 60px #00FF9D18"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = ""; el.style.boxShadow = ""; }}
              >
                <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#00FF9D]/[0.08] blur-[60px] group-hover:bg-[#00FF9D]/[0.15] transition-all duration-700 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00FF9D]/40 to-transparent" />

                <div>
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#00FF9D]/40 bg-[#00FF9D]/[0.1]">
                        <Fingerprint size={20} className="text-[#00FF9D]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.15em] text-[#00FF9D] uppercase block">Layer 01 · Tactical Sensor</span>
                        <span className="text-xs text-[#94A3B8] font-mono">N52 Hall Effect Array</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-pulse" />
                      <span className="text-[10px] font-mono text-[#00FF9D] tracking-wider uppercase">Detecting</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 relative z-10">Tangible Intent</h3>
                  <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed font-light relative z-10 max-w-xl">
                    By binding flow states to physical totems, your brain establishes a powerful spatial trigger. Snap the ring onto position — your OS switches mode before your hand leaves the desk.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#151D2A] relative z-10 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#64748B]">MAG-SENSE RESPONSE:</span>
                    <span className="text-[#00FF9D] font-bold">12ms (Hardware Interrupt)</span>
                  </div>
                  <div className="w-full bg-[#151D2A] h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#00FF9D] to-[#00E5FF] h-full rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "94%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["N52 Neodymium", "Sub-1mm Precision", "Zero Friction Ceramic", "10M+ Rotations"].map(chip => (
                      <span key={chip} className="text-[10px] font-mono text-[#64748B] bg-[#030508] border border-[#151D2A] px-2.5 py-1 rounded-md">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── Card 2: Zero-Touch Automation ── */}
            <Reveal delay={0.1} className="lg:col-start-3">
              <div
                className="group relative min-h-[360px] h-full rounded-2xl border border-[#151D2A] bg-[#070A10] p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 cursor-default hover:-translate-y-1"
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#00E5FF60"; el.style.boxShadow = "0 0 60px #00E5FF18"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = ""; el.style.boxShadow = ""; }}
              >
                <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-[#00E5FF]/[0.08] blur-[60px] group-hover:bg-[#00E5FF]/[0.15] transition-all duration-700 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00E5FF]/40 to-transparent" />

                <div>
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#00E5FF]/40 bg-[#00E5FF]/[0.1]">
                      <Zap size={20} className="text-[#00E5FF]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.15em] text-[#00E5FF] uppercase block">Layer 02 · OS Daemon</span>
                      <span className="text-xs text-[#94A3B8] font-mono">Kernel Direct Webhooks</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 relative z-10">Zero-Touch Automation</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed font-light relative z-10">
                    Native PowerShell & Bash hooks fire instantly. Sites blocked at kernel level, apps launched, notifications silenced — zero latency, zero middleware.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#151D2A] relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest">Execution Engine</span>
                  <span className="text-[10px] font-mono text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3 py-1 rounded-full font-bold">
                    Kernel Ring-0
                  </span>
                </div>
              </div>
            </Reveal>

            {/* ── Card 3: Local AI Guardian ── */}
            <Reveal delay={0.2} className="lg:col-span-3">
              <div
                className="group relative rounded-2xl border border-[#151D2A] bg-[#070A10] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-500 cursor-default hover:-translate-y-1"
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "#B026FF60"; el.style.boxShadow = "0 0 60px #B026FF18"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = ""; el.style.boxShadow = ""; }}
              >
                <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#B026FF]/[0.08] blur-[60px] group-hover:bg-[#B026FF]/[0.15] transition-all duration-700 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B026FF]/40 to-transparent" />

                <div className="max-w-2xl space-y-3 mb-6 md:mb-0 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#B026FF]/40 bg-[#B026FF]/[0.1]">
                      <Lock size={20} className="text-[#B026FF]" />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.15em] text-[#B026FF] uppercase">Layer 03 · Local Vision Model</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">Local AI Guardian (Air-Gapped Gemini 1.5)</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed font-light">
                    An on-device model inspects app context in real time. Zero screen pixels or keystrokes ever leave your machine. 100% private enforcement.
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 relative z-10 border-t md:border-t-0 md:border-l border-[#151D2A] pt-4 md:pt-0 md:pl-8">
                  <div className="text-right">
                    <p className="text-xs font-mono text-[#B026FF] font-bold">100% AIR-GAPPED</p>
                    <p className="text-[10px] font-mono text-[#64748B]">Zero Telemetry</p>
                  </div>
                  <span className="text-xs font-mono text-[#B026FF] bg-[#B026FF]/10 border border-[#B026FF]/30 px-4 py-2 rounded-xl">
                    Local Core
                  </span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Bottom stat strip */}
          <Reveal delay={0.25} className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "<24ms", label: "Sensor Latency", accent: "#00FF9D" },
              { val: "0 bytes", label: "Sent to Cloud", accent: "#00E5FF" },
              { val: "4 slots", label: "Totem Positions", accent: "#B026FF" },
              { val: "∞", label: "Open-Source Webhooks", accent: "#FF9F1C" },
            ].map(s => (
              <div key={s.label} className="rounded-xl border border-[#151D2A] bg-[#070A10] px-5 py-4">
                <p className="text-2xl font-display font-bold" style={{ color: s.accent }}>{s.val}</p>
                <p className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ════════════════ THE 4 HARDWARE MODES SHOWCASE ═══════════ */}
      <section className="relative z-10 bg-[#030508] py-28 md:py-36 border-t border-[#151D2A]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#00FF9D] uppercase border border-[#00FF9D]/25 bg-[#00FF9D]/10 rounded-full inline-block px-3.5 py-1 mb-4">
              4 Hardware Slots
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white mb-4">
              Master Your Workspace,<br />
              <span className="text-[#64748B] font-light">One Slot at a Time.</span>
            </h2>
            <p className="text-[#64748B] leading-relaxed text-sm md:text-base">
              Assign magnetic totems to physical positions. Spatial memory makes flow state instant, effortless, and automatic.
            </p>
          </Reveal>

          {/* Interactive Modes Showcase Component */}
          <Reveal delay={0.15}>
            <HardwareModesShowcase />
          </Reveal>
        </div>
      </section>

      {/* ════════════════ FINAL CTA ═══════════════════════════════ */}
      <section className="relative z-10 bg-[#030508] py-36 md:py-44 text-center overflow-hidden border-t border-[#151D2A]">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[#00FF9D]/[0.05] blur-[120px]" />
        </div>
        <Reveal className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
          <p className="text-[10px] font-mono tracking-[0.3em] text-[#00FF9D] uppercase mb-5">
            Crowdfunding Now Live · 452% Funded
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter mb-6 leading-[0.9] text-white">
            Ready to feel<br />
            <span style={{ background: "linear-gradient(120deg,#00FF9D,#00E5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              the snap?
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base md:text-lg font-light mb-10 max-w-md mx-auto leading-relaxed">
            Join the backers who refuse to surrender their attention to digital distractions. Limited Founder's Artifact tier available now.
          </p>
          <Link
            href="/campaign"
            className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-base tracking-wide text-[#030508] bg-[#00FF9D] hover:bg-[#00ffaa] transition-colors duration-200 hover:shadow-[0_0_65px_rgba(0,255,157,0.6),0_0_120px_rgba(0,255,157,0.2)]"
          >
            Back This Project <ChevronRight size={18} />
            <span className="absolute inset-0 rounded-2xl animate-ping opacity-[0.1] bg-[#00FF9D]" />
          </Link>
          <p className="text-[#64748B] text-xs mt-6 font-mono tracking-widest">$45,000 raised · 28 days left</p>
        </Reveal>
      </section>

    </main>
  );
}
