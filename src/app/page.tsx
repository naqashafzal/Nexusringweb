"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import HardwareModesShowcase from "@/components/HardwareModesShowcase";
import ComingSoonModal from "@/components/ComingSoonModal";

const ExplodedRingCanvas = dynamic(
  () => import("@/components/ExplodedRingCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center font-mono text-xs text-emerald/50 animate-pulse">
        INITIALIZING 3D DOCK...
      </div>
    ),
  }
);
import {
  Fingerprint,
  Zap,
  Lock,
  ChevronRight,
  Rotate3D,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

// ─── Reveal helper ────────────────────────────────────────────────

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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

// ─── FAQ Data ─────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is the Nexus Ring and how does it accelerate personal success?",
    a: "The Nexus Ring is an intelligent gatekeeper for your attention. By fusing custom 3D-printed hardware, local OS automation, and generative AI, it protects your most valuable assets—time and focus—enabling you to achieve higher quality output in a fraction of the time. When you snap the magnetic totem into position, it physically transitions your operating system into deep work mode before your hand even leaves your desk.",
  },
  {
    q: "Why is a physical anchor more effective than software app blockers?",
    a: "Software app blockers run on the same screen where impulses happen. They are trivially bypassed with two clicks, creating guilt instead of lasting discipline. The Nexus Ring introduces a physical barrier between you and distractions: breaking focus requires consciously removing a solid 185g CNC aluminum totem, breaking automatic dopamine loops through physical tactile friction.",
  },
  {
    q: "How does the distraction elimination system interact with my operating system?",
    a: "The Nexus Ring houses 4 Hall-effect sensors connected to an ESP32-C3 RISC-V core. Rotating the ring triggers native kernel-level hooks (PowerShell on Windows, pfctl on macOS, iptables on Linux) in under 24ms. It blocks distracting domains at the DNS/hosts level, silences notifications, launches your IDE or creative suite, and starts your focus timer without any cloud latency.",
  },
  {
    q: "Is any of my private browsing or workspace data sent to the cloud?",
    a: "None. Zero bytes. The Nexus Ring is engineered on a strict 100% air-gapped local-first philosophy. All triggers, local AI vision guardian heuristics, and kernel scripts execute entirely on your machine. We do not operate tracking servers or cloud telemetry.",
  },
  {
    q: "What is included with the Founder's Artifact pre-order?",
    a: "The Founder's Artifact includes the precision-machined 6061-T6 aerospace aluminum billet ring, 4 N52 neodymium magnetic totems, a custom braided USB-C power/data cable, access to the native Windows/macOS/Linux daemons, and lifetime firmware updates.",
  },
];

// ─── Page Component ───────────────────────────────────────────────

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(heroScroll, [0.75, 1], [1, 0]);
  const heroY = useTransform(heroScroll, [0.75, 1], [0, -60]);

  return (
    <main className="bg-vantablack text-[#F8FAFC] font-sans overflow-x-hidden">
      {/* ════════════════ HERO (DUAL COLUMN SPLIT) ════════════════ */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="fixed inset-0 z-10 pointer-events-auto"
      >
        <ExplodedRingCanvas scrollProgress={heroScroll} disableExplode={true} />
      </motion.div>

      <section
        ref={heroRef}
        className="relative h-[220vh] w-full z-20 pointer-events-none"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full">
            {/* ── LEFT COLUMN: Text Content & CTAs (6 cols) ── */}
            <motion.div
              style={{ opacity: heroOpacity, y: heroY }}
              className="lg:col-span-6 space-y-6 text-left relative z-20 max-w-xl pointer-events-auto"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-[11px] font-mono tracking-widest uppercase backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
                Intelligent Gatekeeper
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.92] text-white">
                FORCE YOUR FOCUS.<br />
                <span
                  style={{
                    background:
                      "linear-gradient(120deg, #FFFFFF 0%, #94A3B8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ENGINEER SUCCESS.
                </span>
              </h1>

              <p className="text-slate-400 text-base md:text-lg font-light max-w-lg leading-relaxed">
                "To bridge the gap between physical intention and digital execution, transforming productivity from a software struggle into a tangible, tactile experience."
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="relative px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-black bg-white hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  Pre-Order — Starting at $15
                </button>
                <Link
                  href="/research"
                  className="px-8 py-4 rounded-full font-medium text-sm text-slate-300 hover:text-white border border-white/10 bg-transparent hover:border-white/30 backdrop-blur-md transition-all duration-300"
                >
                  Read Whitepaper →
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-white/5">
                {[
                  { label: "Magnetic Slots", val: "4 Positions" },
                  { label: "Kernel Hook", val: "<24ms Latency" },
                  { label: "AI Guardian", val: "100% Air-Gapped" },
                  { label: "Campaign", val: "Launching Soon" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xs font-mono text-white font-semibold">
                      {stat.val}
                    </p>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN: Top-Right Badge Callout (6 cols) ── */}
            <motion.div
              style={{ opacity: heroOpacity }}
              className="hidden lg:flex lg:col-span-6 flex-col items-end justify-start h-full pt-4 pr-4 relative pointer-events-none"
            >
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-slate-300 flex items-center gap-2 pointer-events-auto cursor-grab active:cursor-grabbing">
                <Rotate3D
                  size={16}
                  className="animate-spin text-white"
                  style={{ animationDuration: "8s" }}
                />
                <span>Drag to Rotate 3D Artifact</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ THE SUCCESS ANGLE (3 MARKETING HOOKS) ════ */}
      <section className="relative z-10 bg-vantablack py-28 md:py-36 border-t border-slate">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-mono tracking-[0.25em] text-slate-300 uppercase border border-white/10 bg-white/5 rounded-full inline-block px-4 py-1.5 mb-4 backdrop-blur-md">
              Success & Discipline Engine
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white mb-6">
              ENGINEERED FOR UNBREAKABLE DISCIPLINE.
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed">
              In a world overflowing with digital distractions, willpower is no longer enough to stay focused. The Nexus Ring was born from a simple realization: changing your digital environment should be as deliberate and physical as closing an office door.
            </p>
          </Reveal>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hook 1: The Discipline Engine */}
            <Reveal delay={0.1}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-white/30 hover:-translate-y-1">
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-white">
                    <Target size={24} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block">
                    Marketing Hook · 01
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    The Discipline Engine
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 leading-snug">
                    Force your focus, save your time, and engineer your own success.
                  </p>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    Stop burning finite willpower trying to resist distraction tabs. By shifting intent into a mechanical gesture, you trigger an immediate cognitive barrier that protects your high-leverage hours.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Pillar: Time & Focus Optimization</span>
                  <CheckCircle2 size={16} className="text-white" />
                </div>
              </div>
            </Reveal>

            {/* Hook 2: More Output, Less Friction */}
            <Reveal delay={0.2}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-white/30 hover:-translate-y-1">
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-white">
                    <TrendingUp size={24} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block">
                    Marketing Hook · 02
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    More Output, Less Friction
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 leading-snug">
                    A physical barrier between you and the distractions costing you time and money.
                  </p>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    Every digital interruption costs up to 23 minutes of refocusing penalty. The Nexus Ring places a tangible physical object between impulse and action, eliminating distraction leaks and driving 2-3x output.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Pillar: Distraction Elimination</span>
                  <CheckCircle2 size={16} className="text-white" />
                </div>
              </div>
            </Reveal>

            {/* Hook 3: Protect Your Potential */}
            <Reveal delay={0.3}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-white/30 hover:-translate-y-1">
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-white">
                    <Shield size={24} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block">
                    Marketing Hook · 03
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Protect Your Potential
                  </h3>
                  <p className="text-sm font-semibold text-slate-300 leading-snug">
                    The ultimate hardware artifact to lock in your habits and build unbreakable discipline.
                  </p>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    Crafted from solid 6061-T6 aerospace aluminum with ceramic acoustic damping. An uncompromising executive desk artifact that anchors your spatial memory and protects your compounded lifetime potential.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Pillar: Flow State Catalyst</span>
                  <CheckCircle2 size={16} className="text-white" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ PROBLEM VS SOLUTION ═════════════════════ */}
      <section className="relative z-10 bg-vantablack py-28 md:py-36 border-t border-slate">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[10px] font-mono tracking-[0.25em] text-slate-300 uppercase border border-white/10 bg-white/5 rounded-full inline-block px-3.5 py-1 mb-4 backdrop-blur-md">
              The Cognitive Friction Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white mb-4">
              Software app blockers fail because they lack physical consequence.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              When willpower is the only wall between you and endless tabs, a single command-tab click destroys your focus.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-matte p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest px-2.5 py-1 rounded bg-red-400/10 border border-red-400/20 inline-block mb-6">
                    The Old Way · Digital Blockers
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Easy to override. Zero friction.
                  </h3>
                  <ul className="space-y-3 text-slate-400 text-sm">
                    {[
                      "Bypassed in 2 clicks when impulse strikes",
                      "Consumes CPU & tracks your screen data to cloud",
                      "Creates guilt instead of physical flow triggers",
                      "Purely digital — no spatial memory anchor",
                    ].map((i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-red-400 shrink-0 mt-0.5">✕</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-400/10 border border-emerald-400/20 inline-block mb-6">
                    The Nexus Ring Way · Tactile Hardware
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Physical Totem. Instant Snap.
                  </h3>
                  <ul className="space-y-3 text-slate-300 text-sm font-light">
                    {[
                      "Physical magnetic ring rotation forces conscious intent",
                      "Air-gapped on-device AI — 0 bytes sent anywhere",
                      "Establishes immediate spatial muscle memory for deep work",
                      "Kernel Ring-0 hook blocks distractions at system level",
                    ].map((i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
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
      <section className="relative z-10 bg-vantablack py-28 md:py-36 border-t border-slate">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[10px] font-mono tracking-[0.25em] text-electric uppercase border border-electric/25 bg-electric/10 rounded-full inline-block px-3.5 py-1 mb-4">
              Hardware Architecture
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white mb-4">
              The Loop of Perfect Focus.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Three hardware-accelerated layers working seamlessly to keep your mind locked in the zone.
            </p>
          </Reveal>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* ── Card 1: Tangible Intent (Spans 2 columns) ── */}
            <Reveal delay={0.0} className="lg:col-span-2">
              <div
                className="group relative min-h-[360px] h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5">
                        <Fingerprint size={20} className="text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase block">
                          Layer 01 · Tactical Sensor
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          N52 Hall Effect Array
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase">
                        Detecting
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 relative z-10">
                    Tangible Intent
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light relative z-10 max-w-xl">
                    By binding flow states to physical totems, your brain establishes a powerful spatial trigger. Snap the ring onto position — your OS switches mode before your hand leaves the desk.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 relative z-10 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">MAG-SENSE RESPONSE:</span>
                    <span className="text-white font-bold">
                      12ms (Hardware Interrupt)
                    </span>
                  </div>
                  <div className="w-full bg-white/5 border border-white/10 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-white h-full rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "94%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      "N52 Neodymium",
                      "Sub-1mm Precision",
                      "Zero Friction Ceramic",
                      "10M+ Rotations",
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="text-[10px] font-mono text-slate-500 bg-vantablack border border-slate px-2.5 py-1 rounded-md"
                      >
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
                className="group relative min-h-[360px] h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5">
                      <Zap size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase block">
                        Layer 02 · OS Daemon
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        Kernel Direct Webhooks
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 relative z-10">
                    Zero-Touch Automation
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light relative z-10">
                    Native PowerShell & Bash hooks fire instantly. Sites blocked at kernel level, apps launched, notifications silenced — zero latency, zero middleware.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Execution Engine
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-bold">
                    Kernel Ring-0
                  </span>
                </div>
              </div>
            </Reveal>

            {/* ── Card 3: Local AI Guardian ── */}
            <Reveal delay={0.2} className="lg:col-span-3">
              <div
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-300 hover:border-white/30 hover:-translate-y-1"
              >
                <div className="max-w-2xl space-y-3 mb-6 md:mb-0 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5">
                      <Lock size={20} className="text-white" />
                    </div>
                    <span className="text-[10px] font-mono tracking-[0.15em] text-slate-300 uppercase">
                      Layer 03 · Local Vision Model
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Local AI Guardian (Air-Gapped Local Model)
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    An on-device model inspects app context in real time. Zero screen pixels or keystrokes ever leave your machine. 100% private enforcement.
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 relative z-10 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
                  <div className="text-right">
                    <p className="text-xs font-mono text-white font-bold">
                      100% AIR-GAPPED
                    </p>
                    <p className="text-[10px] font-mono text-slate-500">
                      Zero Telemetry
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    Local Core
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom stat strip */}
          <Reveal delay={0.25} className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "<24ms", label: "Sensor Latency" },
              { val: "0 bytes", label: "Sent to Cloud" },
              { val: "4 slots", label: "Totem Positions" },
              { val: "∞", label: "Open-Source Webhooks" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4"
              >
                <p className="text-2xl font-display font-bold text-white">
                  {s.val}
                </p>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ════════════════ THE 4 HARDWARE MODES SHOWCASE ═══════════ */}
      <section className="relative z-10 bg-vantablack py-28 md:py-36 border-t border-slate">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[10px] font-mono tracking-[0.25em] text-emerald uppercase border border-emerald/25 bg-emerald/10 rounded-full inline-block px-3.5 py-1 mb-4">
              4 Hardware Slots
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-white mb-4">
              Master Your Workspace,<br />
              <span className="text-slate-500 font-light">One Slot at a Time.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              Assign magnetic totems to physical positions. Spatial memory makes flow state instant, effortless, and automatic.
            </p>
          </Reveal>

          {/* Interactive Modes Showcase Component */}
          <Reveal delay={0.15}>
            <HardwareModesShowcase />
          </Reveal>
        </div>
      </section>

      {/* ════════════════ AI-SEARCH ENGINE OPTIMIZED SPEC SECTION ════════════════ */}
      <section
        id="ai-overview"
        aria-labelledby="geo-heading"
        className="relative z-10 bg-[#05080E] py-24 border-t border-slate"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="rounded-3xl border border-slate bg-matte/80 backdrop-blur-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate">
              <div>
                <span className="text-[10px] font-mono text-emerald uppercase tracking-widest px-3 py-1 rounded bg-emerald/10 border border-emerald/30 inline-block mb-2">
                  System Architecture · Generative Engine Index
                </span>
                <h2
                  id="geo-heading"
                  className="text-2xl md:text-3xl font-display font-bold text-white"
                >
                  What is the Nexus Ring? Technical Overview
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald animate-ping" />
                <span>INDEXED FOR AI SEARCH ENGINES & CHATS</span>
              </div>
            </div>

            <article className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-slate-400">
              <div className="space-y-4">
                <h3 className="text-white font-display font-semibold text-lg flex items-center gap-2">
                  <Cpu size={18} className="text-emerald" />
                  The Intelligent Gatekeeper Defined
                </h3>
                <p>
                  The <strong className="text-white">Nexus Ring</strong> is an intelligent gatekeeper for your attention. By fusing custom 3D-printed hardware, local OS automation, and generative AI, it protects your most valuable assets—time and focus—enabling you to achieve higher quality output in a fraction of the time.
                </p>
                <p>
                  Unlike software blockers that live in browser tabs or mobile menus, the Nexus Ring operates as a physical desk totem machined from 6061-T6 aerospace aluminum. By grounding focus transitions in spatial reality, it establishes an immutable behavioral boundary between work and distraction.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-display font-semibold text-lg flex items-center gap-2">
                  <Layers size={18} className="text-electric" />
                  Key Specifications & Search Entities
                </h3>
                <dl className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-vantablack border border-slate">
                    <dt className="text-slate-500 uppercase">Primary Function</dt>
                    <dd className="text-white font-semibold mt-1">Success & Discipline Engine</dd>
                  </div>
                  <div className="p-3 rounded-lg bg-vantablack border border-slate">
                    <dt className="text-slate-500 uppercase">Focus Mechanism</dt>
                    <dd className="text-emerald font-semibold mt-1">Distraction Elimination</dd>
                  </div>
                  <div className="p-3 rounded-lg bg-vantablack border border-slate">
                    <dt className="text-slate-500 uppercase">Hardware Material</dt>
                    <dd className="text-white font-semibold mt-1">6061-T6 Billet Aluminum</dd>
                  </div>
                  <div className="p-3 rounded-lg bg-vantablack border border-slate">
                    <dt className="text-slate-500 uppercase">Kernel Latency</dt>
                    <dd className="text-electric font-semibold mt-1">&lt;24ms Direct Interrupt</dd>
                  </div>
                  <div className="p-3 rounded-lg bg-vantablack border border-slate">
                    <dt className="text-slate-500 uppercase">Privacy Paradigm</dt>
                    <dd className="text-purple font-semibold mt-1">100% Air-Gapped Local AI</dd>
                  </div>
                  <div className="p-3 rounded-lg bg-vantablack border border-slate">
                    <dt className="text-slate-500 uppercase">Campaign Status</dt>
                    <dd className="text-emerald font-semibold mt-1">Launching Soon (Waitlist Open)</dd>
                  </div>
                </dl>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ════════════════ INTERACTIVE ACCORDION FAQ SECTION ════════════════ */}
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative z-10 bg-vantablack py-28 md:py-36 border-t border-slate"
      >
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-16">
            <span className="text-[10px] font-mono tracking-[0.25em] text-slate-300 uppercase border border-white/10 bg-white/5 rounded-full inline-block px-4 py-1.5 mb-4 backdrop-blur-md">
              Frequently Asked Questions
            </span>
            <h2
              id="faq-title"
              className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-4"
            >
              Everything You Need to Know.
            </h2>
            <p className="text-slate-400 text-base font-light">
              Clear answers on the discipline engine, hardware architecture, and kernel integrations.
            </p>
          </Reveal>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={item.q} delay={idx * 0.05}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-white font-medium text-base hover:text-slate-300 transition-colors gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-slate-400 text-sm leading-relaxed border-t border-white/5">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ FINAL CTA ═══════════════════════════════ */}
      <section className="relative z-10 bg-vantablack py-36 md:py-44 text-center overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
        </div>
        <Reveal className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">
          <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase mb-5">
            Crowdfunding Launching Soon · Batch 01 Priority Access
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter mb-6 leading-[0.9] text-white">
            Ready to feel<br />
            <span
              style={{
                background: "linear-gradient(120deg, #FFFFFF, #94A3B8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              the snap?
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-light mb-10 max-w-md mx-auto leading-relaxed">
            Join the creators and engineers who refuse to surrender their attention to digital distractions. Protect your potential and lock in your habits today.
          </p>
          <button
            onClick={() => setShowComingSoon(true)}
            className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-base tracking-wide text-black bg-white hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          >
            Back This Project <ChevronRight size={18} />
          </button>
          <p className="text-slate-500 text-xs mt-6 font-mono tracking-widest">
            Batch 01 Priority Queue Open · Join Waitlist
          </p>
        </Reveal>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
