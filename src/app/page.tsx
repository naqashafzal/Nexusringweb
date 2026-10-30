"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import HardwareModesShowcase from "@/components/HardwareModesShowcase";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  ChevronRight,
  Rotate3D,
  ChevronDown,
  ArrowRight,
  Cpu,
  Layers,
  ShieldCheck,
  Compass,
  HardDrive,
  CloudOff,
} from "lucide-react";

const ExplodedRingCanvas = dynamic(
  () => import("@/components/ExplodedRingCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-[#A5AFBF] gap-3">
        <div className="w-6 h-6 border-2 border-[#FF405A] border-t-transparent rounded-full animate-spin" />
        <span className="tracking-widest uppercase">Loading 3D Hardware Model...</span>
      </div>
    ),
  }
);

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const FAQ_ITEMS = [
  {
    q: "What is Nexus Ring?",
    a: "Nexus Ring is a desk-based physical interface designed to connect deliberate physical actions with digital workspace automation. A user moves a magnetic totem into one of four designated positions to select their intended working mode.",
  },
  {
    q: "How does the magnetic totem communicate with software?",
    a: "When the totem is placed into a slot, internal Hall-effect sensors detect the magnetic field change without requiring physical push-buttons. The onboard controller interprets the selected position and transmits the mode event to Nexus Companion software running on your computer.",
  },
  {
    q: "Can I customize what happens in each mode?",
    a: "Yes. In the product vision for Nexus Companion, users will be able to customize profile rules for each mode position—such as website filters, notification silencing, application launches, or project setup scripts.",
  },
  {
    q: "Is Nexus Ring available to purchase today?",
    a: "Nexus Ring is currently in active hardware and software development. We have opened a non-binding waitlist so interested builders, makers, and focus enthusiasts can receive genuine prototype milestones and early notice when production batches open. No payment is required.",
  },
  {
    q: "What does local-first mean for privacy?",
    a: "Core mode switching and workspace automation rules are designed to execute locally on your machine. We believe basic tool switching should not require external cloud routing or telemetry to function.",
  },
  {
    q: "What editions will be available?",
    a: "We are designing three paths: a Maker Edition for 3D-printing enthusiasts with CAD files and BOM; a Hacker Kit supplying the custom PCB and electronics; and a fully assembled Pro Desk Set.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="bg-[#080B12] text-[#F8FAFC] font-sans overflow-x-hidden selection:bg-[#FF405A]/30 selection:text-white">
      {/* ════════════════ SECTION A: HERO ════════════════ */}
      <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center pt-28 pb-16 lg:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* ── LEFT COLUMN: Text Content & CTAs (6 cols) ── */}
          <div className="lg:col-span-6 space-y-6 text-left relative z-20 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#283141] bg-[#101723] text-[#A5AFBF] text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF405A]" />
              PHYSICAL INTENT COMPUTING
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.94] text-white">
              One physical move.<br />
              <span className="text-[#A5AFBF]">
                Your workspace follows.
              </span>
            </h1>

            <p className="text-[#A5AFBF] text-base md:text-lg font-light leading-relaxed border-l-2 border-[#FF405A] pl-4 bg-[#101723]/60 p-4 rounded-r-2xl">
              Your work deserves your full attention. Nexus Ring is being developed to turn a simple physical action into a deliberate change in your digital workspace.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowComingSoon(true)}
                className="px-8 py-4 rounded-full font-bold text-sm tracking-wide text-white bg-[#FF405A] hover:bg-[#e0354e] transition-all duration-200 shadow-[0_0_25px_rgba(255,64,90,0.35)] cursor-pointer flex items-center gap-2"
              >
                <span>Join the Waitlist</span>
                <ChevronRight size={16} />
              </button>
              <Link
                href="#how-it-works"
                className="px-8 py-4 rounded-full font-medium text-sm text-[#F8FAFC] hover:text-white border border-[#283141] bg-[#101723] hover:border-[#A5AFBF]/50 transition-all duration-200"
              >
                Explore Nexus Ring ↓
              </Link>
            </div>

            <p className="text-[11px] font-mono text-[#A5AFBF] tracking-wider pt-1">
              Currently in development. Join for prototype updates and launch news. No payment required.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#283141]">
              <div>
                <p className="text-xs font-mono text-white font-semibold">
                  Four Operating Modes
                </p>
                <p className="text-[10px] font-mono text-[#A5AFBF] uppercase tracking-wider mt-1">
                  Deep Work · Creative · Meeting · Break
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-white font-semibold">
                  Contactless Sensing
                </p>
                <p className="text-[10px] font-mono text-[#A5AFBF] uppercase tracking-wider mt-1">
                  Hall-Effect Magnetic Detection
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Interactive 3D Model (6 cols) ── */}
          <div className="lg:col-span-6 relative w-full h-[460px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-[#283141] bg-[#101723]/60 backdrop-blur-sm shadow-2xl">
            {/* Top-right hint */}
            <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full border border-[#283141] bg-[#080B12]/80 backdrop-blur-md text-xs font-mono text-[#A5AFBF] flex items-center gap-2 pointer-events-none">
              <Rotate3D size={14} className="text-[#FF405A] animate-spin" style={{ animationDuration: "10s" }} />
              <span>Drag to Rotate</span>
            </div>

            {/* 3D Canvas */}
            <div className="w-full h-full">
              <ExplodedRingCanvas disableExplode={true} centerPosition={true} />
            </div>

            {/* Bottom-left status badge */}
            <div className="absolute bottom-4 left-4 z-20 text-[10px] font-mono text-[#A5AFBF]/80 uppercase tracking-widest bg-[#080B12]/90 px-3 py-1.5 rounded-full border border-[#283141] backdrop-blur-sm pointer-events-none">
              Interactive 3D CAD Visualization · Public Prototype Model
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION B: HOW IT WORKS ════════════════ */}
      <section id="how-it-works" className="relative z-20 bg-[#101723] py-28 border-y border-[#283141]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow block">The Workflow</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
              From intention to action.
            </h2>
            <p className="text-[#A5AFBF] text-lg leading-relaxed">
              Software switches live inside the very screens that interrupt you. Nexus Ring shifts the decision out into the physical world through three clear steps.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose your work mode",
                desc: "Identify what kind of work you intend to do: focused deep work, open exploration, team communication, or rest.",
                tag: "Cognitive Intention",
              },
              {
                step: "02",
                title: "Move the magnetic totem",
                desc: "Place the weighted totem into the corresponding position. Contactless Hall-effect sensors detect the position change without mechanical wear.",
                tag: "Physical Trigger",
              },
              {
                step: "03",
                title: "Nexus Companion responds",
                desc: "The local companion software executes the matching profile, adjusting website filters, muting alerts, and opening target tools.",
                tag: "Workspace Automation",
              },
            ].map((s, idx) => (
              <Reveal key={s.step} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl border border-[#283141] bg-[#172130] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-display font-black text-[#FF405A]">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-[#A5AFBF] uppercase border border-[#283141] px-2.5 py-1 rounded-full bg-[#080B12]">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#A5AFBF] leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#283141] text-[11px] font-mono text-[#A5AFBF]">
                    {idx === 2 ? "Integrations in active development" : "Firmware prototype demonstrated"}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION C: FOUR OPERATING MODES ════════════════ */}
      <section id="modes" className="relative z-20 bg-[#080B12] py-28 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-2xl mb-12">
            <span className="eyebrow block">The Modes</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-4">
              Four modes. Built for purpose.
            </h2>
            <p className="text-[#A5AFBF] text-lg leading-relaxed">
              Your workday is not one uniform state. Nexus Ring provides dedicated physical anchors for the distinct modes of modern technical and creative work.
            </p>
          </Reveal>

          <HardwareModesShowcase />
        </div>
      </section>

      {/* ════════════════ SECTION D: PRODUCT HARDWARE PREVIEW ════════════════ */}
      <section className="relative z-20 bg-[#101723] py-28 border-y border-[#283141]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 space-y-6">
            <span className="eyebrow block">Industrial Architecture</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Engineered for intention.
            </h2>
            <p className="text-[#A5AFBF] text-lg leading-relaxed">
              Nexus Ring is designed as a substantial desk object. A weighted magnetic totem provides tactile resistance, seating into precision Hall-sensor quadrants connected to an ESP32 microcontroller.
            </p>
            <p className="text-sm text-[#A5AFBF] leading-relaxed border-l-2 border-[#FF405A] pl-4">
              No screens, no notifications, and no micro-menus. Status is communicated through diffuse ambient light that you can read from the corner of your eye.
            </p>
            <div className="pt-2">
              <Link
                href="/hardware"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[#172130] border border-[#283141] text-white hover:border-[#FF405A] transition-colors"
              >
                <span>Explore the Engineering</span>
                <ArrowRight size={16} className="text-[#FF405A]" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-[#283141] bg-[#172130] space-y-3">
                <Cpu size={24} className="text-[#FF405A]" />
                <h4 className="font-display font-bold text-white text-base">Local Controller</h4>
                <p className="text-xs text-[#A5AFBF] leading-relaxed">
                  ESP32-C3 architecture reading Hall-effect sensor inputs and managing LED ring state locally.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#283141] bg-[#172130] space-y-3">
                <Compass size={24} className="text-[#35C98A]" />
                <h4 className="font-display font-bold text-white text-base">Contactless Sensing</h4>
                <p className="text-xs text-[#A5AFBF] leading-relaxed">
                  Magnetic field detection replaces fragile mechanical switches with smooth, repeatable positioning.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#283141] bg-[#172130] space-y-3">
                <Layers size={24} className="text-[#F8FAFC]" />
                <h4 className="font-display font-bold text-white text-base">Weighted Totem</h4>
                <p className="text-xs text-[#A5AFBF] leading-relaxed">
                  Engineered with deliberate heft so mode transitions require intentional physical action.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-[#283141] bg-[#172130] space-y-3">
                <ShieldCheck size={24} className="text-[#F0B35A]" />
                <h4 className="font-display font-bold text-white text-base">Screen-Free Feedback</h4>
                <p className="text-xs text-[#A5AFBF] leading-relaxed">
                  360° light ring provides glanceable state confirmation without adding another glowing display.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ SECTION E: LOCAL-FIRST PHILOSOPHY ════════════════ */}
      <section className="relative z-20 bg-[#080B12] py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal className="space-y-6">
            <span className="eyebrow block">Architecture Principle</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Your workspace.<br />Your rules.
            </h2>
            <p className="text-[#A5AFBF] text-lg leading-relaxed">
              We believe a productivity controller should serve you, not collect behavioral metrics. Core mode switching runs locally on your computer via Nexus Companion.
            </p>
            <div className="space-y-3 text-sm text-[#A5AFBF]">
              <div className="flex items-start gap-3">
                <HardDrive size={18} className="text-[#35C98A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Local-First Automations:</strong> Mode triggers, local scripts, and app launching execute directly on your host machine.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CloudOff size={18} className="text-[#A5AFBF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Clear Network Boundaries:</strong> No cloud connection is needed for basic operation. Only optional integrations (such as calendar sync) require external network access.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="space-y-4">
            <Link href="/hardware" className="product-link">
              <div>
                <span className="eyebrow block mb-1">Hardware Engineering</span>
                <span className="text-xl font-bold text-white">Physical Dock Architecture</span>
                <span className="block text-xs text-[#A5AFBF] mt-2">
                  Examine the controller, Hall-effect sensors, magnetic totem, and printable chassis.
                </span>
              </div>
              <ChevronRight className="shrink-0 text-[#FF405A]" />
            </Link>

            <Link href="/software" className="product-link">
              <div>
                <span className="eyebrow block mb-1">Software Companion</span>
                <span className="text-xl font-bold text-white">Nexus Companion Profiles</span>
                <span className="block text-xs text-[#A5AFBF] mt-2">
                  Discover how physical mode triggers connect to local operating system automations.
                </span>
              </div>
              <ChevronRight className="shrink-0 text-[#FF405A]" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ SECTION F: DEVELOPMENT TRANSPARENCY ════════════════ */}
      <section id="development" className="relative z-20 bg-[#101723] py-28 border-t border-[#283141]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="p-8 md:p-12 rounded-3xl border border-[#283141] bg-[#172130] flex flex-col md:flex-row gap-10 md:items-center justify-between">
            <div className="max-w-xl space-y-4">
              <span className="eyebrow block">Built In The Open</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
                Built in the open. Developed with purpose.
              </h2>
              <p className="text-[#A5AFBF] text-sm md:text-base leading-relaxed">
                Nexus Ring is not a mass-produced product yet. We are actively refining 3D chassis designs, testing Hall sensor PCB layouts, and writing Companion software. Follow every milestone honestly.
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#A5AFBF] pt-2">
                <span className="px-2.5 py-1 rounded bg-[#080B12] border border-[#283141]">Industrial CAD: Validated</span>
                <span className="px-2.5 py-1 rounded bg-[#080B12] border border-[#283141]">Magnetic Totem: Functional Prototype</span>
                <span className="px-2.5 py-1 rounded bg-[#080B12] border border-[#283141]">ESP32 Firmware: In Testing</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/campaign"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#080B12] border border-[#283141] hover:border-[#FF405A] text-white px-6 py-4 text-xs font-mono tracking-wider uppercase transition-colors"
              >
                <span>View Development Roadmap</span>
                <ChevronRight size={14} className="text-[#FF405A]" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ INTERACTIVE FAQ ════════════════ */}
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative z-10 bg-[#080B12] py-28 border-t border-[#283141]"
      >
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-16 space-y-3">
            <span className="eyebrow block">Questions &amp; Answers</span>
            <h2
              id="faq-title"
              className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white"
            >
              Frequently Asked Questions.
            </h2>
            <p className="text-[#A5AFBF] text-sm font-light">
              Clear facts about the product, architecture, and development status.
            </p>
          </Reveal>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={item.q} delay={idx * 0.04}>
                  <div className="rounded-2xl border border-[#283141] bg-[#101723] overflow-hidden transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-white font-medium text-sm sm:text-base hover:text-[#A5AFBF] transition-colors gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-bold">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#A5AFBF] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#FF405A]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-[#A5AFBF] text-xs sm:text-sm leading-relaxed border-t border-[#283141]">
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

      {/* ════════════════ SECTION G: FINAL WAITLIST CTA ════════════════ */}
      <section className="relative z-10 bg-[#101723] py-32 text-center overflow-hidden border-t border-[#283141]">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full bg-[#FF405A]/[0.05] blur-[100px]" />
        </div>
        <Reveal className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 space-y-6">
          <span className="eyebrow block">Early Access</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white leading-tight">
            Build a more intentional workspace.
          </h2>
          <p className="text-[#A5AFBF] text-base md:text-lg font-light max-w-md mx-auto leading-relaxed">
            Follow Nexus Ring&apos;s development, get prototype updates, and hear when early access becomes available.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-sm tracking-wide text-white bg-[#FF405A] hover:bg-[#e0354e] transition-all duration-200 shadow-[0_0_30px_rgba(255,64,90,0.4)] cursor-pointer"
            >
              <span>Join the Waitlist</span>
              <ChevronRight size={18} />
            </button>
          </div>
          <p className="text-[#A5AFBF] text-xs font-mono tracking-widest pt-2">
            Currently in development · No payment required
          </p>
        </Reveal>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
