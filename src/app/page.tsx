"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import HardwareModesShowcase from "@/components/HardwareModesShowcase";
import ComingSoonModal from "@/components/ComingSoonModal";

const ExplodedRingCanvas = dynamic(
  () => import("@/components/ExplodedRingCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center font-mono text-xs text-accent/50 animate-pulse">
        INITIALIZING 3D DOCK...
      </div>
    ),
  }
);
import { ChevronRight, Rotate3D, ChevronDown } from "lucide-react";

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
      initial={false}
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
  {q: "What is Nexus Ring?", a: "Nexus Ring is a physical intent computing device designed to connect your intention with your digital workspace. Moving a magnetic totem between four positions selects a workflow mode."},
  {q: "Can I customize the four modes?", a: "The product vision includes configurable workflows for Deep Work, Creative, Meeting and Break. Supported actions and integrations will be confirmed as development progresses."},
  {q: "Is Nexus Ring available to buy?", a: "Nexus Ring is currently in development. The waitlist is for launch updates, with no payment required. Final specifications, availability and pricing will be announced when ready."},
  {q: "What does local-first mean?", a: "Core workspace automation is designed to run on your own devices. Zero friction, privacy by architecture, and keeping personal automation local."},
  {q: "How can I follow development?", a: "Visit the development page for the project direction, join the community, or sign up for email updates."},
];

// ─── Page Component ───────────────────────────────────────────────

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });


  return (
    <main className="bg-vantablack text-[#F8FAFC] font-sans overflow-x-hidden">
      {/* ════════════════ HERO (DUAL COLUMN SPLIT) ════════════════ */}
      <motion.div
        className="absolute top-0 right-0 w-full lg:w-[55%] h-[460px] lg:h-screen z-10 pointer-events-auto"
      >
        <ExplodedRingCanvas scrollProgress={heroScroll} disableExplode={true} centerPosition={true} />
      </motion.div>

      <section
        ref={heroRef}
        className="relative min-h-screen w-full z-20 pointer-events-none"
      >
        <div className="relative min-h-screen w-full flex flex-col justify-between pt-[460px] lg:pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto w-full">
            {/* ── LEFT COLUMN: Text Content & CTAs (6 cols) ── */}
            <motion.div
              className="lg:col-span-6 space-y-6 text-left relative z-20 max-w-xl pointer-events-auto"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-[11px] font-mono tracking-widest uppercase backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                Physical Intent Computing
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.92] text-white">
                A physical switch<br />
                <span
                  style={{
                    background:
                      "linear-gradient(120deg, #ff334f 0%, #ff6a7d 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  for a focused workspace.
                </span>
              </h1>

              <p className="text-slate-400 text-base md:text-lg font-light max-w-lg leading-relaxed border-l-2 border-accent pl-4 bg-white/5 p-4 rounded-r-xl">
                We spend our days fighting our own screens just to get our work done. Nexus Ring is a desktop controller in development. Move a magnetic totem to select a mode, with planned automations for your apps, notifications, and workspace.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="relative px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-black bg-white hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  Join the Waitlist
                </button>
                <Link
                  href="#modes"
                  className="px-8 py-4 rounded-full font-medium text-sm text-slate-300 hover:text-white border border-white/10 bg-transparent hover:border-white/30 backdrop-blur-md transition-all duration-300"
                >
                  Explore the modes ↓
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-8 border-t border-white/5">
                {[
                  { label: "Deep Work · Creative · Meeting · Break", val: "Default Modes" },
                  { label: "Protect, Never Control", val: "Local First" },
                  { label: "One Ring. Every device.", val: "Cross-Device State" },
                  { label: "Digital, DIY and Pro editions", val: "Maker Ecosystem" },
                ].map((stat) => (
                  <div key={stat.val}>
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

      <section id="how-it-works" className="relative z-20 bg-obsidian py-24 border-y border-slate">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Top part: Problem and Principle */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <Reveal>
              <p className="eyebrow text-accent2 tracking-widest uppercase text-xs font-bold mb-2">The Silent Crisis</p>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6">Willpower was never going to be enough.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-4">Notifications and open tabs make it hard to stay with one task. Nexus Ring explores a simpler way to mark the boundary between focused work, collaboration, creativity, and rest.</p>
              <p className="text-slate-400 text-lg leading-relaxed font-medium border-l-2 border-accent pl-4 bg-white/5 p-4 rounded-r-xl mt-6">You don&apos;t lack discipline. You lack a boundary. You shouldn&apos;t have to fight your own computer just to do your job.</p>
            </Reveal>
            <Reveal delay={0.2} className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
              <p className="eyebrow text-accent2 tracking-widest uppercase text-xs font-bold mb-2">The Nexus Philosophy</p>
              <h3 className="text-3xl font-semibold mt-2 mb-6 text-white leading-tight">Make the right decision exactly once. We’ll protect it.</h3>
              <p className="text-slate-300 leading-relaxed mb-4">The Nexus Ring isn&apos;t another productivity app demanding your attention. It&apos;s a physical anchor for your intention.</p>
              <p className="text-slate-300 leading-relaxed">The planned experience starts with a magnetic totem. Place it in a mode position, and the companion software runs the workspace actions you have configured. Supported integrations will be confirmed through testing.</p>
            </Reveal>
          </div>

          {/* Bottom part: Promise */}
          <Reveal className="max-w-2xl mb-12 border-t border-white/10 pt-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white">How the planned experience works.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: "Choose & Place", text: "Decide what you need to do, and slide the physical totem into the corresponding mode. The tactile feedback tells your brain it’s time to shift gears."},
              {title: "Transform & Protect", text: "The planned companion runs your configured actions, such as opening tools or changing supported notification settings. Availability depends on your operating system and integrations."},
              {title: "Disconnect & Recover", text: "Move the totem to Break to signal a pause. Planned profiles can help you leave work behind and make room to recover."},
            ].map((step, i) => <Reveal key={step.title} delay={i * 0.08} className="border-t border-white/15 pt-7"><span className="text-accent text-sm font-mono">0{i + 1}</span><h3 className="text-xl font-semibold mt-5 mb-3 text-white">{step.title}</h3><p className="text-slate-400 leading-relaxed">{step.text}</p></Reveal>)}
          </div>
        </div>
      </section>
      <section id="modes" className="relative z-20 bg-vantablack py-24 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow tracking-widest uppercase text-xs font-bold mb-2">Your Rhythm</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Four modes. Infinite control.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">Your day isn&apos;t just &quot;work&quot; and &quot;not work.&quot; Give every part of your day a physical home. These previews illustrate the product vision; integrations are still in development.</p>
          </Reveal>
          <HardwareModesShowcase />
        </div>
      </section>
      <section className="relative z-20 bg-obsidian py-24 border-y border-slate">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <Reveal><p className="eyebrow tracking-widest uppercase text-xs font-bold mb-2 text-accent2">Calm Technology</p><h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">We built a sanctuary,<br /><span className="text-slate-400">not a surveillance tool.</span></h2><p className="text-slate-400 text-lg mt-6 leading-relaxed">Nexus isn&apos;t here to lock you in a digital cage or make you feel guilty. It’s here to quietly guard the door so you can work in peace.</p></Reveal>
          <div className="space-y-4">
            <Link href="/hardware" className="product-link"><span><span className="eyebrow block">Zero Screens</span><span className="text-2xl font-semibold text-white">You look at enough screens</span><span className="block text-slate-400 mt-3">Nexus communicates through weight, magnetic resistance, and a soft, calming glow.</span></span><ChevronRight className="shrink-0" /></Link>
            <Link href="/software" className="product-link"><span><span className="eyebrow block">Local-First Privacy</span><span className="text-2xl font-semibold text-white">Your rules, on your device</span><span className="block text-slate-400 mt-3">We don&apos;t want your data. Core automations are being designed to run on your own devices.</span></span><ChevronRight className="shrink-0" /></Link>
          </div>
        </div>
      </section>
      <section id="development" className="relative z-20 bg-vantablack py-24">
        <Reveal className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12 flex flex-col md:flex-row gap-10 md:items-center justify-between">
            <div className="max-w-xl"><p className="eyebrow">Follow the build</p><h2 className="text-3xl md:text-4xl font-semibold tracking-tight">An idea taking physical form.</h2><p className="text-slate-400 mt-5 leading-relaxed">Nexus Ring is in development. Hardware, companion software and integrations are evolving. Follow progress and help shape what comes next.</p></div>
            <Link href="/campaign" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 hover:border-accent transition-colors shrink-0">View development <ChevronRight size={18} /></Link>
          </div>
        </Reveal>
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
              The essentials, before you join the waitlist.
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
            In development · Get launch updates
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter mb-6 leading-[0.9] text-white">
            Your attention has an<br />
            <span
              style={{
                background: "linear-gradient(120deg, #FFFFFF, #94A3B8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              off switch.
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-light mb-10 max-w-md mx-auto leading-relaxed">
            You deserve to finish your workday feeling accomplished, not drained. Be part of the journey and get behind-the-scenes updates.
          </p>
          <button
            onClick={() => setShowComingSoon(true)}
            className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-base tracking-wide text-black bg-white hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          >
            Join the Waitlist <ChevronRight size={18} />
          </button>
          <p className="text-slate-500 text-xs mt-6 font-mono tracking-widest">
            No payment required.
          </p>
        </Reveal>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
