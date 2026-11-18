"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import HardwareModesShowcase from "@/components/HardwareModesShowcase";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Layers,
  ShieldCheck,
  Compass,
  HardDrive,
  CloudOff,
  Camera,
  CheckCircle2,
  Smartphone,
  Monitor,
  Globe,
} from "lucide-react";
import {
  KICKSTARTER_CAMPAIGN,
  KICKSTARTER_COMPATIBILITY,
  KICKSTARTER_FAQS,
  KICKSTARTER_TIERS,
  KICKSTARTER_URL,
} from "@/lib/kickstarter-data";

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
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main className="bg-[#080A0E] text-[#F5F6F8] font-sans overflow-x-hidden selection:bg-[#D83A50]/20 selection:text-white">
      {/* ════════════════ SECTION A: KICKSTARTER HERO ════════════════ */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-6 md:px-12 max-w-[1500px] mx-auto overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,58,80,0.12)_0%,rgba(17,21,28,0.05)_50%,transparent_75%)] pointer-events-none blur-3xl z-0" />
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="relative z-20 text-center max-w-4xl mx-auto space-y-5">
          <a
            href={KICKSTARTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#35C98A]/40 bg-[#11151C]/90 hover:border-[#35C98A] backdrop-blur-md text-[#35C98A] text-[11px] font-mono tracking-widest uppercase shadow-lg transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#35C98A] animate-pulse" />
            <span>KICKSTARTER FIRST PRODUCTION RUN · STARTING AT $39</span>
            <ArrowUpRight size={13} />
          </a>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.92] text-[#F5F6F8] uppercase">
              STOP GIVING YOUR BEST HOURS AWAY.
            </h1>
            <p className="text-lg sm:text-2xl font-display font-bold text-[#D83A50] tracking-wider uppercase">
              NEXUS RING: THE PHYSICAL OFF-SWITCH FOR DISTRACTIONS.
            </p>
          </div>

          <p className="text-[#A5AFBD] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {KICKSTARTER_CAMPAIGN.blurb}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={KICKSTARTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide text-[#F5F6F8] bg-[#D83A50] hover:bg-[#EB5268] transition-all duration-150 shadow-[0_0_25px_rgba(216,58,80,0.35)] cursor-pointer flex items-center gap-2"
            >
              <span>Back on Kickstarter</span>
              <ArrowUpRight size={15} />
            </a>
            <Link
              href="#rewards"
              className="px-8 py-3.5 rounded-full font-medium text-sm text-[#F5F6F8] hover:text-white border border-[#303A48] bg-[#11151C]/80 hover:border-[#A5AFBD] transition-all duration-150 cursor-pointer flex items-center gap-2 backdrop-blur-sm"
            >
              <span>Explore Reward Tiers ($39–$199)</span>
              <ChevronDown size={14} />
            </Link>
          </div>

          <p className="text-[11px] font-mono text-[#778292] tracking-wider">
            Built &amp; tested hardware · Windows, macOS, Linux, Android &amp; iOS · Lifetime core apps · No mandatory subscription
          </p>
        </div>

        {/* Official Kickstarter Hero Visual */}
        <div className="relative z-10 w-full max-w-5xl mx-auto my-8 p-2.5 sm:p-4 rounded-3xl border border-[#303A48] bg-[#11151C]/90 backdrop-blur-xl shadow-[0_0_80px_rgba(216,58,80,0.2)] transition-all duration-300 hover:border-[#D83A50]/50 group">
          <div className="flex flex-wrap items-center justify-between px-3 sm:px-4 py-2 mb-3 border-b border-[#303A48]/80 text-xs font-mono text-[#A5AFBD] gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D83A50] animate-pulse" />
              <span className="text-[#F5F6F8] font-bold tracking-wider uppercase text-[11px] sm:text-xs">
                NEXUS RING // THE PHYSICAL OFF-SWITCH FOR DISTRACTIONS
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-[#778292]">
              <span className="hidden md:inline">DAY (SILVER) &amp; NIGHT (OBSIDIAN BLACK)</span>
              <span className="text-[#35C98A] font-semibold">● BUILT &amp; TESTED</span>
              <span className="px-2 py-0.5 rounded bg-[#080A0E] border border-[#303A48] text-[#D83A50] font-bold">
                KICKSTARTER
              </span>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl bg-[#080A0E] border border-[#303A48]/60">
            <Image
              src={KICKSTARTER_CAMPAIGN.heroPoster}
              alt="Nexus Ring — A Physical Command Center for Digital Discipline"
              width={1024}
              height={576}
              priority
              quality={95}
              className="w-full h-auto block rounded-2xl group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between px-3 sm:px-4 py-3 mt-3 border-t border-[#303A48]/80 text-[10px] sm:text-[11px] font-mono text-[#A5AFBD] gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#D83A50] font-bold uppercase">FOUR MODES:</span>
              <span className="text-[#F5F6F8]">DEEP WORK · CREATIVE · MEETING · BREAK</span>
            </div>
            <div className="text-[#778292] uppercase tracking-wider">
              WINDOWS · MACOS · LINUX · ANDROID · IOS · NO SUBSCRIPTION
            </div>
          </div>
        </div>

        {/* Bottom Spec Strip */}
        <div className="relative z-20 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#303A48]/80 max-w-5xl mx-auto">
          <div className="space-y-1 text-left">
            <p className="text-xs font-mono text-[#F5F6F8] font-bold">Four Physical Modes</p>
            <p className="text-[11px] font-mono text-[#778292] uppercase tracking-wider">
              Deep Work · Creative · Meeting · Break
            </p>
          </div>
          <div className="space-y-1 text-left">
            <p className="text-xs font-mono text-[#F5F6F8] font-bold">Every Major Platform</p>
            <p className="text-[11px] font-mono text-[#778292] uppercase tracking-wider">
              Windows, macOS, Linux, Android &amp; iOS
            </p>
          </div>
          <div className="space-y-1 text-left">
            <p className="text-xs font-mono text-[#F5F6F8] font-bold">100% Local &amp; Owned</p>
            <p className="text-[11px] font-mono text-[#778292] uppercase tracking-wider">
              Zero Mandatory Subscriptions Ever
            </p>
          </div>
          <div className="space-y-1 text-left">
            <p className="text-xs font-mono text-[#F5F6F8] font-bold">Metal-Body USB-C</p>
            <p className="text-[11px] font-mono text-[#778292] uppercase tracking-wider">
              No Internal Battery to Degrade
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION B: CHOOSE. DOCK. WORK. + LIVE DEMOS ════════════════ */}
      <section id="how-it-works" className="relative z-20 bg-[#11151C] py-28 border-y border-[#303A48]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6F8] mb-4">
              Choose. Dock. Work.
            </h2>
            <p className="text-[#A5AFBD] text-lg leading-relaxed font-light">
              The totem stays in view while you work. Repeating the same small movement gives each session a familiar beginning—and makes changing your intention a <strong className="text-white">deliberate action</strong>.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose your workspace.",
                desc: "Set the apps, websites, and notification settings for each mode across Windows, macOS, Linux, Android, and iOS.",
                tag: "Configure Rules",
              },
              {
                step: "02",
                title: "Place the totem.",
                desc: "Nexus opens your selected tools and applies your focus rules. The illuminated ring shows your active mode at a glance.",
                tag: "Physical Trigger",
              },
              {
                step: "03",
                title: "Lift it when you finish.",
                desc: "Undocked mode ends the focus configuration cleanly—returning full control with zero friction.",
                tag: "Deliberate Boundary",
              },
            ].map((s, idx) => (
              <Reveal key={s.step} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl border border-[#303A48] bg-[#1B222D] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-display font-black text-[#D83A50]">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-[#778292] uppercase border border-[#303A48] px-2.5 py-1 rounded-full bg-[#080A0E]">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#F5F6F8] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#A5AFBD] leading-relaxed font-light">{s.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#303A48] text-[11px] font-mono text-[#35C98A]">
                    Built &amp; tested on real hardware
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Real Kickstarter Prototype & Live Windows App GIF Recordings */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <Reveal className="p-5 rounded-3xl border border-[#303A48] bg-[#1B222D]/80 backdrop-blur-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A5AFBD] mb-3">
                  <span className="text-[#35C98A] font-bold uppercase tracking-wider">
                    ● REAL PROTOTYPE + APP RECORDING
                  </span>
                  <span>LIVE MODE SWITCHING</span>
                </div>
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#303A48] bg-black">
                  <Image
                    src="/images/kickstarter/ks-live-modes-demo.gif"
                    alt="Real Prototype + Real Windows App Recording switching live between Deep Work, Creative, Meeting, and Break modes"
                    width={680}
                    height={383}
                    className="w-full h-auto block"
                    unoptimized
                  />
                </div>
              </div>
              <p className="text-xs text-[#A5AFBD] leading-relaxed pt-2 border-t border-[#303A48]/60">
                <strong className="text-white">Real Prototype + Real Windows App Recording</strong> — switching live between Deep Work, Creative, Meeting, and Break modes.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="p-5 rounded-3xl border border-[#303A48] bg-[#1B222D]/80 backdrop-blur-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A5AFBD] mb-3">
                  <span className="text-[#35C98A] font-bold uppercase tracking-wider">
                    ● REAL WINDOWS APP RECORDING
                  </span>
                  <span>DEEP WORK + NEXUS FLOW</span>
                </div>
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#303A48] bg-black">
                  <Image
                    src="/images/kickstarter/ks-live-deep-work-app.gif"
                    alt="Docking into Deep Work blocks distracting websites, launches work tools, and starts a Nexus Flow sprint"
                    width={680}
                    height={383}
                    className="w-full h-auto block"
                    unoptimized
                  />
                </div>
              </div>
              <p className="text-xs text-[#A5AFBD] leading-relaxed pt-2 border-t border-[#303A48]/60">
                <strong className="text-white">Real Windows App Recording</strong> — docking into Deep Work blocks distracting websites, launches your work tools, and starts a Nexus Flow sprint.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <Reveal className="p-5 rounded-3xl border border-[#303A48] bg-[#1B222D]/80 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A5AFBD] mb-3">
                  <span className="text-[#D83A50] font-bold uppercase tracking-wider">
                    ● REAL PROTOTYPE
                  </span>
                  <span>DOCK TO CLEAR DIGITAL NOISE</span>
                </div>
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#303A48] bg-black">
                  <Image
                    src="/images/kickstarter/ks-dock-totem-clear-noise.gif"
                    alt="Dock the magnetic totem to clear digital noise and start your configured focus session"
                    width={680}
                    height={383}
                    className="w-full h-auto block"
                    unoptimized
                  />
                </div>
              </div>
              <p className="text-xs text-[#A5AFBD] leading-relaxed pt-2 border-t border-[#303A48]/60">
                Dock the magnetic totem to clear digital noise and start your configured focus session.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="p-5 rounded-3xl border border-[#303A48] bg-[#1B222D]/80 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A5AFBD] mb-3">
                  <span className="text-[#35C98A] font-bold uppercase tracking-wider">
                    ● REAL PROTOTYPE · PHONE &amp; DESK
                  </span>
                  <span>ANDROID &amp; IOS SYNC</span>
                </div>
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#303A48] bg-black">
                  <Image
                    src="/images/kickstarter/ks-live-phone-sync.gif"
                    alt="Docking the totem silences distracting social and video feeds across your paired phone and desk"
                    width={680}
                    height={383}
                    className="w-full h-auto block"
                    unoptimized
                  />
                </div>
              </div>
              <p className="text-xs text-[#A5AFBD] leading-relaxed pt-2 border-t border-[#303A48]/60">
                Docking the totem silences distracting social and video feeds across your paired phone (Android &amp; iOS) and desk.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ BRAND MANIFESTO + MADE TO TAKE YOUR MIND BACK ════════════════ */}
      <section className="relative z-20 bg-[#080A0E] py-28 border-b border-[#303A48]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-6 space-y-6 text-left">
            <span className="eyebrow block">Keep the Tutorial. Lose the Rabbit Hole.</span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#F5F6F8] uppercase leading-[1.05]">
              You Can&apos;t Fight a Trillion-Dollar Algorithm With Willpower.
            </h2>
            <div className="space-y-3 text-[#A5AFBD] text-base leading-relaxed">
              <p className="border-b border-[#303A48]/80 pb-2.5">
                <strong className="text-white">Purposeful browsing:</strong> The Nexus browser extension hides supported YouTube recommendations &amp; Shorts, Reddit, and X feeds while keeping search and direct videos available.
              </p>
              <p className="border-b border-[#303A48]/80 pb-2.5">
                <strong className="text-white">Mobile companion (Android &amp; iOS):</strong> Local pairing, an approved-app launcher, and permission-based focus shielding and Do Not Disturb.
              </p>
              <p className="border-b border-[#303A48]/80 pb-2.5">
                <strong className="text-white">Nexus Flow:</strong> Break projects into tasks, anchor a 15–90 minute timed sprint, capture stray thoughts in the scratchpad, and keep Markdown notes close.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/campaign"
                className="px-6 py-3 rounded-full text-xs font-mono text-[#D83A50] border border-[#D83A50]/40 hover:bg-[#D83A50]/10 transition-colors flex items-center gap-2"
              >
                <span>Read the Full Kickstarter Story</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/digital-distraction"
                className="px-6 py-3 rounded-full text-xs font-mono text-[#A5AFBD] border border-[#303A48] hover:border-[#A5AFBD] hover:text-white transition-colors"
              >
                Why Software Blockers Fail
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl border border-[#303A48] bg-[#11151C] p-3 sm:p-4 shadow-2xl group">
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#080A0E] border border-[#303A48]/60">
                <Image
                  src="/images/infographic-trillion-dollar-algorithm.jpg"
                  alt="You Can't Fight a Trillion-Dollar Algorithm With Willpower - Nexus Ring Infographic"
                  width={1200}
                  height={896}
                  className="w-full h-auto block rounded-2xl group-hover:scale-[1.01] transition-transform duration-700"
                />
              </div>
              <div className="p-3 bg-[#11151C] flex items-center justify-between text-[11px] font-mono text-[#A5AFBD]">
                <span className="text-[#D83A50] font-bold">PHYSICAL INTENT</span>
                <span>DESIGN CONCEPT VISUALIZATION</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ SECTION C: FOUR OPERATING MODES ════════════════ */}
      <section id="modes" className="relative z-20 bg-[#11151C] py-28 border-b border-[#303A48]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-12">
          <Reveal className="max-w-2xl">
            <span className="eyebrow block">Four Modes. Your Rules.</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6F8] mb-4">
              One desk. Four ways to take control.
            </h2>
            <p className="text-[#A5AFBD] text-lg leading-relaxed font-light">
              Configure apps to launch, close, or remain available, with supported website, notification, audio, theme, and wallpaper controls for <strong className="text-white">Deep Work, Creative, Meeting, and Break</strong>.
            </p>
          </Reveal>

          <Reveal className="rounded-3xl border border-[#303A48] bg-[#080A0E] p-3 sm:p-4 shadow-2xl">
            <Image
              src="/images/kickstarter/ks-four-modes-rules.png"
              alt="Four Modes. Your Rules — Deep Work, Creative, Meeting, Break"
              width={680}
              height={383}
              className="w-full h-auto block rounded-2xl"
            />
          </Reveal>

          <HardwareModesShowcase />
        </div>
      </section>

      {/* ════════════════ WORKING PROTOTYPE GALLERY ════════════════ */}
      <section className="relative z-20 bg-[#080A0E] py-28 border-b border-[#303A48]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#35C98A]/40 bg-[#35C98A]/10 text-[#35C98A] text-[11px] font-mono uppercase tracking-widest">
              <Camera size={13} />
              <span>REAL PROTOTYPE FOOTAGE &amp; BENCH PHOTOS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-[#F5F6F8]">
              Built and tested. Launching our first production run.
            </h2>
            <p className="text-[#A5AFBD] text-base sm:text-lg font-light leading-relaxed">
              See actual working prototype photos and live app screen recordings from our desk. The Kickstarter production run covers component sourcing, metal-body enclosure manufacturing, assembly, unit checks, packaging, and delivery.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <Reveal className="md:col-span-7 flex flex-col">
              <div className="h-full rounded-3xl border border-[#303A48] bg-[#11151C] overflow-hidden shadow-2xl relative group flex flex-col justify-between p-3 sm:p-4">
                <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-[#303A48]/50">
                  <Image
                    src="/images/kickstarter/ks-desk-prototype-hero.jpg"
                    alt="Nexus Ring hardware prototype on a working desk"
                    width={680}
                    height={383}
                    className="w-full h-auto block rounded-xl group-hover:scale-[1.01] transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-[#080A0E] rounded-2xl border border-[#303A48] mt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#35C98A] font-bold">● REAL HARDWARE PROTOTYPE</span>
                    <span className="text-[#778292]">USB-C · MAGNETIC TOTEM</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white">
                    Working Desk Prototype &amp; Illuminated Mode Ring
                  </h3>
                  <p className="text-xs text-[#A5AFBD] leading-relaxed">
                    Actual working prototype connected over USB-C with the magnetic totem docked into Deep Mode, synchronizing workspace rules across desktop and paired mobile devices.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="md:col-span-5 grid grid-cols-1 gap-6">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 shadow-xl space-y-3">
                  <div className="rounded-2xl overflow-hidden bg-black border border-[#303A48]/50">
                    <Image
                      src="/images/kickstarter/ks-live-closeup-sync.gif"
                      alt="Real Prototype — close-up docking sync across your desk devices"
                      width={680}
                      height={383}
                      unoptimized
                      className="w-full h-auto block"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-white">Close-Up Docking Sync</h4>
                  <p className="text-[11px] text-[#A5AFBD] leading-snug">
                    Real prototype footage showing immediate mode recognition across connected desk devices.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 shadow-xl space-y-3">
                  <div className="rounded-2xl overflow-hidden bg-black border border-[#303A48]/50">
                    <Image
                      src="/images/kickstarter/ks-live-cad-workflow.gif"
                      alt="Real App Recording — Nexus Shield and Nexus Flow paired with a 3D CAD workflow"
                      width={680}
                      height={383}
                      unoptimized
                      className="w-full h-auto block"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-white">Real 3D CAD + Nexus Flow Recording</h4>
                  <p className="text-[11px] text-[#A5AFBD] leading-snug">
                    Nexus Shield and Nexus Flow operating live alongside a real 3D CAD workflow.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bench Photo Strip */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Reveal delay={0.2} className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-3">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#303A48] bg-black">
                <Image
                  src="/images/prototype-desk-angle-lit.jpg"
                  alt="Working 3D-printed Nexus Ring hardware prototype in Deep Mode"
                  width={4032}
                  height={2268}
                  className="w-full h-auto block"
                />
              </div>
              <div>
                <h5 className="text-xs font-mono font-bold text-white">3D-Printed Bench Prototype</h5>
                <p className="text-[11px] text-[#A5AFBD] mt-1">
                  Magnetic totem docked in Deep Mode with active peripheral LED confirmation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25} className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-3">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#303A48] bg-black">
                <Image
                  src="/images/prototype-glow-deep-mode.jpg"
                  alt="Top-down prototype view showing four mode wells and lit status ring"
                  width={4032}
                  height={2268}
                  className="w-full h-auto block"
                />
              </div>
              <div>
                <h5 className="text-xs font-mono font-bold text-white">Four Physical Mode Wells</h5>
                <p className="text-[11px] text-[#A5AFBD] mt-1">
                  Top-down prototype view showing all four wells and contactless magnetic sensing.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-3">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#303A48] bg-black">
                <Image
                  src="/images/hardware-custom-silicon.jpg"
                  alt="Custom hardware architecture engineered for tactile, low-latency desktop focus control"
                  width={1200}
                  height={896}
                  className="w-full h-auto block"
                />
              </div>
              <div>
                <h5 className="text-xs font-mono font-bold text-white">Custom Hardware Architecture</h5>
                <p className="text-[11px] text-[#A5AFBD] mt-1">
                  Durable metal-body USB-C production design with no lithium-ion battery to degrade.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION D: OFFICIAL KICKSTARTER REWARD TIERS ════════════════ */}
      <section id="rewards" className="relative z-20 bg-[#11151C] py-28 border-b border-[#303A48]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="eyebrow block">Kickstarter Exclusive Rewards</span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-[#F5F6F8]">
              Choose your Nexus Ring.
            </h2>
            <p className="text-[#A5AFBD] text-base font-light">
              Every tier includes lifetime core access to the desktop (Windows, macOS, Linux) and mobile (Android, iOS) apps with zero mandatory subscription. Estimated delivery: <strong className="text-white">July 2027</strong>.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {KICKSTARTER_TIERS.map((tier) => (
              <Reveal key={tier.id}>
                <div
                  className={`h-full rounded-3xl border p-5 flex flex-col justify-between ${
                    tier.featured
                      ? "border-[#D83A50]/60 bg-[#1B222D] shadow-[0_0_30px_rgba(216,58,80,0.16)]"
                      : "border-[#303A48] bg-[#080A0E]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden border border-[#303A48] bg-black">
                      <Image
                        src={tier.image}
                        alt={`${tier.price} ${tier.name}`}
                        width={680}
                        height={507}
                        className="w-full h-auto block"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span
                          className={`inline-block text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border mb-1.5 ${
                            tier.featured
                              ? "bg-[#D83A50]/15 text-[#D83A50] border-[#D83A50]/40"
                              : "bg-[#11151C] text-[#A5AFBD] border-[#303A48]"
                          }`}
                        >
                          {tier.badge}
                        </span>
                        <h3 className="text-lg font-display font-bold text-white leading-tight">
                          {tier.shortName}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-2xl font-display font-black text-white block">
                          {tier.price}
                        </span>
                        {tier.regularPrice && (
                          <span className="text-[10px] font-mono text-[#778292] line-through">
                            {tier.regularPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-[11px] font-mono text-[#A5AFBD]">
                      {tier.items.map((item) => (
                        <li key={item.label} className="flex items-start gap-1.5">
                          <CheckCircle2 size={13} className="text-[#35C98A] shrink-0 mt-0.5" />
                          <span>
                            {item.qty > 1 ? `${item.qty}× ` : ""}
                            {item.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#303A48] space-y-2">
                    <div className="text-[10px] font-mono text-[#778292]">
                      {tier.limit} · Est. {tier.delivery}
                    </div>
                    <a
                      href={KICKSTARTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors ${
                        tier.featured
                          ? "bg-[#D83A50] text-white hover:bg-[#EB5268]"
                          : "bg-[#1B222D] border border-[#303A48] text-white hover:border-[#D83A50]"
                      }`}
                    >
                      <span>Back {tier.price}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/campaign"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A5AFBD] hover:text-white transition-colors"
            >
              <span>View full reward breakdown, 12 tool categories &amp; shipping details</span>
              <ChevronRight size={14} className="text-[#D83A50]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ SECTION E: ECOSYSTEM, LOCAL PRIVACY & COMPATIBILITY ════════════════ */}
      <section className="relative z-20 bg-[#080A0E] py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal className="space-y-6">
              <span className="eyebrow block">Local Control &amp; Ownership</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#F5F6F8] leading-tight">
                100% Local Privacy.<br />Zero Subscriptions.
              </h2>
              <p className="text-[#A5AFBD] text-lg leading-relaxed font-light">
                Keep core configuration, tasks, and session records on your device. Use the core focus experience without enabling cloud AI—and every reward tier includes lifetime core app access with no mandatory Nexus subscription.
              </p>
              <div className="space-y-3 text-sm text-[#A5AFBD]">
                <div className="flex items-start gap-3">
                  <HardDrive size={18} className="text-[#35C98A] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#F5F6F8]">All Core Data Stays Local:</strong> Mode triggers, tasks, Markdown notes, focus audio, and session records execute directly on your devices.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CloudOff size={18} className="text-[#778292] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#F5F6F8]">Optional AI &amp; Integrations:</strong> Connect Gemini, OpenAI, or a local model endpoint, plus optional Google Calendar, Zoom, Notion, GitHub, Linear, Obsidian, Slack, Spotify, or Home Assistant.
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C] flex items-center gap-3">
                  <Cpu size={18} className="text-[#D83A50] shrink-0" />
                  <span className="text-xs font-mono text-white">Metal-Body USB-C Dock</span>
                </div>
                <div className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C] flex items-center gap-3">
                  <Compass size={18} className="text-[#35C98A] shrink-0" />
                  <span className="text-xs font-mono text-white">Magnetic Contactless Sensing</span>
                </div>
                <div className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C] flex items-center gap-3">
                  <Layers size={18} className="text-[#F0B35A] shrink-0" />
                  <span className="text-xs font-mono text-white">Day Silver &amp; Night Black</span>
                </div>
                <div className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C] flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#38BDF8] shrink-0" />
                  <span className="text-xs font-mono text-white">Soft / Strict / Lockdown</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="space-y-4">
              <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-3 shadow-xl">
                <Image
                  src="/images/kickstarter/ks-unified-ecosystem.jpg"
                  alt="Unified desk ecosystem connecting desktop PC and mobile companion"
                  width={680}
                  height={383}
                  className="w-full h-auto block rounded-2xl"
                />
              </div>
              <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-3 shadow-xl">
                <Image
                  src="/images/kickstarter/ks-local-control.jpg"
                  alt="100% Local Privacy — Zero Subscriptions Ever"
                  width={680}
                  height={383}
                  className="w-full h-auto block rounded-2xl"
                />
              </div>
            </Reveal>
          </div>

          {/* Compatibility at a glance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KICKSTARTER_COMPATIBILITY.map((c, idx) => (
              <Reveal key={c.platform} delay={idx * 0.08}>
                <div className="h-full p-6 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-3">
                  {idx === 0 && <Monitor size={22} className="text-[#D83A50]" />}
                  {idx === 1 && <Smartphone size={22} className="text-[#35C98A]" />}
                  {idx === 2 && <Globe size={22} className="text-[#38BDF8]" />}
                  <h3 className="text-base font-display font-bold text-white">{c.platform}</h3>
                  <p className="text-xs text-[#A5AFBD] leading-relaxed">{c.details}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ INTERACTIVE KICKSTARTER FAQ (ALL 8) ════════════════ */}
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative z-10 bg-[#11151C] py-28 border-t border-[#303A48]"
      >
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <Reveal className="text-center mb-16 space-y-3">
            <span className="eyebrow block">Campaign Questions &amp; Answers</span>
            <h2
              id="faq-title"
              className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#F5F6F8]"
            >
              Frequently Asked Questions.
            </h2>
            <p className="text-[#A5AFBD] text-sm font-light">
              Exact answers matching our Kickstarter campaign terms, rewards, devices, and shipping.
            </p>
          </Reveal>

          <div className="space-y-3">
            {KICKSTARTER_FAQS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={item.q} delay={idx * 0.03}>
                  <div className="rounded-2xl border border-[#303A48] bg-[#080A0E] overflow-hidden transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-[#F5F6F8] font-medium text-sm sm:text-base hover:text-[#A5AFBD] transition-colors gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-bold">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#778292] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#D83A50]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-[#A5AFBD] text-xs sm:text-sm leading-relaxed border-t border-[#303A48]">
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

      {/* ════════════════ FINAL KICKSTARTER CTA ════════════════ */}
      <section className="relative z-10 bg-[#080A0E] py-32 text-center overflow-hidden border-t border-[#303A48]">
        <Reveal className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 space-y-6">
          <div className="flex justify-center mb-2">
            <Image
              src="/branding/nexus-logo-vertical.png"
              alt="Nexus Ring Vertical Mark"
              width={72}
              height={64}
              className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <span className="eyebrow block">Kickstarter First Production Run</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-[#F5F6F8] leading-tight">
            Next: your desk.
          </h2>
          <p className="text-[#A5AFBD] text-base md:text-lg font-light max-w-lg mx-auto leading-relaxed">
            Back Nexus Ring on Kickstarter starting at $39 (Digital Maker Kit), $89 (Early Bird), $109 (Kickstarter Special), or $199 (Day &amp; Night Duo Pack).
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={KICKSTARTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-sm tracking-wide text-[#F5F6F8] bg-[#D83A50] hover:bg-[#EB5268] transition-all duration-150 shadow-[0_0_20px_rgba(216,58,80,0.3)]"
            >
              <span>Back on Kickstarter</span>
              <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs tracking-wide text-[#F5F6F8] border border-[#303A48] bg-[#11151C] hover:border-[#D83A50] transition-colors cursor-pointer"
            >
              <span>Get Production Updates</span>
              <ChevronRight size={15} />
            </button>
          </div>
          <p className="text-[#778292] text-xs font-mono tracking-widest pt-2">
            US$ 10,000 Goal · 48 Days · Est. Delivery July 2027 · Zero Mandatory Subscription
          </p>
        </Reveal>
      </section>

      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </main>
  );
}
