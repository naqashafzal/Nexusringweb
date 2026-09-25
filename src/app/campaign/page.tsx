"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DiscordIcon from "@/components/DiscordIcon";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  Play,
  Check,
  ChevronDown,
  Lock,
  Unlock,
  Zap,
  Monitor,
  Code,
  Users,
  Clock,
  ShieldCheck,
  Truck,
  Sparkles,
  Layers,
  ChevronRight,
  CheckCircle2,
  X,
  Radio,
  Flame,
  Globe,
  Award,
} from "lucide-react";

// ─── PLEDGE TIERS DATA ────────────────────────────────────────────

const TIERS = [
  {
    id: "maker",
    name: "The Maker (Digital Kit)",
    price: "$15",
    desc: "Everything you need to 3D print and flash the ESP32-C3 firmware yourself.",
    badge: "DIY TIER",
    badgeColor: "#00E5FF",
    includes: [
      "Official 3MF Print Profiles (Bambu Lab / Prusa)",
      "Nexus Software Suite License (React/Electron)",
      "Detailed Circuit Schematics & Wiring Guide",
      "Open Webhook Daemon Source Code",
    ],
    delivery: "Instant Digital Download",
  },
  {
    id: "hacker",
    name: "The Hacker (Electronics Pack)",
    price: "$49",
    desc: "Pre-soldered custom electronics pack. You print the shell.",
    badge: "MAKER FAVORITE",
    badgeColor: "#B026FF",
    includes: [
      "Custom ESP32-C3 PCB with Pre-flashed Kernel",
      "4x KY-003 zero-latency Hall effect sensors",
      "16-LED NeoPixel RGB ring & N52 Neodymium Magnets",
      "All Digital Suite files (STLs, 3MF Profiles, Guides)",
    ],
    delivery: "Estimated Shipping: May 2026",
  },
  {
    id: "adopter",
    name: "The Early Adopter Artifact",
    price: "$129",
    desc: "Fully assembled, plug-and-play precision 3D-printed V1 focus ring dock.",
    badge: "MOST POPULAR",
    badgeColor: "#00FF9D",
    popular: true,
    includes: [
      "Fully Assembled Nexus V1 Dock (Engineered Matte 3D Print)",
      "4x Modular Bio-Hex Magnetic Totems",
      "Braided Sci-Fi USB-C Cable (1.8m)",
      "Full Local AI Guardian Software License",
      "Express Global Priority Shipping Included",
    ],
    delivery: "Batch 01 Shipping: July 2026",
  },
  {
    id: "founder",
    name: "The Founder's Collector Edition",
    price: "$289",
    desc: "The ultimate collector artifact with laser-engraved serials.",
    badge: "LIMITED (22 LEFT)",
    badgeColor: "#FF9F1C",
    includes: [
      "CNC 6061-T6 Billet Aluminum Dock with Gold Accents",
      "4x UV Resin-Cast Voronoi Totems with N52 Core",
      "Laser-Engraved Metal Authenticity Card (#001-#500)",
      "Lifetime VIP Software License + NPU Cloud Fallback",
      "1-on-1 Setup Call with Founders & Core Team",
    ],
    delivery: "Priority Batch 01 Shipping: June 2026",
  },
];

// ─── STRETCH GOALS DATA ───────────────────────────────────────────

const STRETCH_GOALS = [
  {
    target: "$25,000",
    title: "Project Fully Funded!",
    desc: "Minimum required budget to begin CNC tooling, PCB fabrication, and mass production.",
    status: "unlocked",
    progress: 100,
    icon: Unlock,
    accent: "#00FF9D",
  },
  {
    target: "$50,000",
    title: "Open API & IoT Webhook Engine",
    desc: "Allow custom Next.js, Home Assistant, and MQTT webhooks for developers to build integrations.",
    status: "unlocked",
    progress: 92,
    icon: Code,
    accent: "#00E5FF",
  },
  {
    target: "$100,000",
    title: "Micro-OLED Status Display Upgrade",
    desc: "Sub-surface Micro-OLED display added to Early Adopter & Founder tiers for live telemetry.",
    status: "locked",
    progress: 45,
    icon: Monitor,
    accent: "#B026FF",
  },
  {
    target: "$250,000",
    title: "Native Cross-Platform Linux Kernel Driver",
    desc: "Native Linux daemon support via custom kernel module for Arch, Ubuntu, and Fedora.",
    status: "locked",
    progress: 18,
    icon: Zap,
    accent: "#FF9F1C",
  },
];

// ─── RECENT BACKER LIVE FEED DATA ─────────────────────────────────

const LIVE_BACKERS = [
  { name: "Alex K.", location: "San Francisco, CA", tier: "Founder's Edition ($289)", time: "3 mins ago" },
  { name: "Elena R.", location: "Tokyo, Japan", tier: "Early Adopter Artifact ($129)", time: "12 mins ago" },
  { name: "Marcus V.", location: "Berlin, Germany", tier: "Hacker Pack ($49)", time: "24 mins ago" },
  { name: "David S.", location: "London, UK", tier: "Early Adopter Artifact ($129)", time: "38 mins ago" },
  { name: "Kenji M.", location: "Singapore", tier: "Founder's Edition ($289)", time: "1 hour ago" },
];

// ─── PRODUCTION ROADMAP TIMELINE DATA ────────────────────────────

const ROADMAP = [
  {
    phase: "PHASE 01",
    date: "Q4 2025",
    title: "R&D & ESP32-C3 PCB Validation",
    status: "Completed",
    desc: "Validated 4x Hall sensor magnetic tracking array and FreeRTOS local daemon websocket protocol.",
    color: "#00FF9D",
  },
  {
    phase: "PHASE 02",
    date: "Q1 2026",
    title: "Crowdfunding & Batch 01 Booking",
    status: "Active Now",
    desc: "Reserving initial 500-unit Batch 01 queue worldwide with exclusive backer discounts.",
    color: "#00E5FF",
  },
  {
    phase: "PHASE 03",
    date: "Q2 2026",
    title: "5-Axis CNC Tooling & PCB Assembly",
    status: "Scheduled",
    desc: "Machining aerospace billet shells and SMT assembly of customized ESP32-C3 boards.",
    color: "#B026FF",
  },
  {
    phase: "PHASE 04",
    date: "Q3 2026",
    title: "Express Shipping & Open SDK Release",
    status: "Scheduled",
    desc: "Global express courier delivery to backers and public GitHub release of open local webhooks.",
    color: "#FF9F1C",
  },
];

// ─── FAQS DATA ────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Does the Nexus software work on macOS and Windows 10/11?",
    a: "Yes! The Nexus Guardian daemon is fully cross-platform and runs natively on macOS (Apple Silicon & Intel) and Windows 10/11 without requiring administrative privileges for basic webhooks.",
  },
  {
    q: "Do I need a 3D printer for the Hacker Electronics Kit?",
    a: "Yes. The Hacker Kit includes pre-soldered custom ESP32-C3 electronics, Hall sensors, and magnets, but you will need a FDM printer to print the enclosure using our pre-tuned 3MF Bambu Lab files.",
  },
  {
    q: "Is the Local AI Guardian truly 100% private?",
    a: "Absolutely. The 4-bit quantized Gemini 1.5 vision model executes inside your machine's VRAM or NPU. Zero screen images or telemetry data are uploaded to cloud servers.",
  },
  {
    q: "What happens if the stretch goal for the Micro-OLED display is met?",
    a: "If we reach $100,000, all Early Adopter and Founder tiers will automatically receive the Micro-OLED display upgrade free of charge!",
  },
  {
    q: "What is your refund and warranty policy?",
    a: "All physical artifacts come with a 30-Day Flow Guarantee and a 2-Year Full Hardware Warranty covering sensor and PCB replacement.",
  },
];

export default function CampaignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedTierForModal, setSelectedTierForModal] = useState("");
  const [videoModal, setVideoModal] = useState(false);
  const [backerIndex, setBackerIndex] = useState(0);

  // Auto-cycle live backer ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setBackerIndex((prev) => (prev + 1) % LIVE_BACKERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeBacker = LIVE_BACKERS[backerIndex];

  return (
    <main className="min-h-screen pt-32 pb-32 bg-[#030508] text-[#E2E8F0] font-sans overflow-x-hidden selection:bg-[#00FF9D]/30 selection:text-white">
      {/* Background Dot Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00FF9D]/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[600px] right-10 w-[500px] h-[300px] bg-[#00E5FF]/[0.03] blur-[140px] rounded-full pointer-events-none" />

      {/* ════════════════ HERO CAMPAIGN SHOWCASE ═════════════════════ */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        {/* Top Campaign Status HUD Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-3 px-6 rounded-full border border-[#151D2A] bg-[#070A10]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D] animate-pulse shadow-[0_0_10px_rgba(0,255,157,0.8)]" />
            <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">
              CROWDFUNDING CAMPAIGN LIVE
            </span>
          </div>

          {/* Animated Live Backer Ticker */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#94a3b8]">
            <Globe size={14} className="text-[#00E5FF] animate-spin" style={{ animationDuration: "10s" }} />
            <span>Latest Backer:</span>
            <span className="text-white font-bold">{activeBacker.name}</span>
            <span className="text-[#00FF9D]">({activeBacker.location})</span>
            <span className="text-[#64748b]">• {activeBacker.tier}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://discord.gg/N82CpZtGu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[#5865F2] hover:text-white transition-colors"
            >
              <DiscordIcon className="w-3.5 h-3.5" />
              <span>JOIN DISCORD</span>
            </a>
            <span className="text-[#151D2A]">|</span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#00FF9D]">
              <Clock size={14} />
              <span>28 DAYS REMAINING</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/[0.06] text-[#00FF9D] text-[11px] font-mono tracking-widest uppercase">
              <Sparkles size={14} /> The Discipline Engine · Official Crowdfunding Campaign
            </div>

            <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
              FORCE YOUR FOCUS.<br />
              <span style={{ background: "linear-gradient(120deg,#00FF9D 0%,#00E5FF 50%,#B026FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                ENGINEER SUCCESS.
              </span>
            </h1>

            <p className="text-[#94a3b8] text-base sm:text-xl font-light leading-relaxed">
              The Nexus Ring is a physical discipline engine built to accelerate your personal success. By ruthlessly eliminating digital distractions, it protects your most valuable assets—time and focus—enabling higher quality output in a fraction of the time.
            </p>

            {/* Launch Status Box */}
            <div className="bg-[#070A10] border border-[#151D2A] rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl relative overflow-hidden">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">BATCH 01</p>
                  <p className="text-xs font-mono text-[#00FF9D] uppercase tracking-widest mt-1">
                    CROWDFUNDING LAUNCHING SOON
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30">
                    PRIORITY QUEUE OPEN
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#030508] border border-[#151D2A] text-xs font-mono text-[#94A3B8] leading-relaxed">
                Crowdfunding pledges are opening shortly. Join the priority waitlist to get immediate notification and lock in limited early-bird adopter pricing.
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2 font-mono text-xs text-[#64748b] text-center">
                <div className="p-2.5 bg-[#030508] rounded-xl border border-[#151D2A]">
                  <p className="text-white font-bold">V1</p>
                  <p className="text-[10px] uppercase">3D-Printed</p>
                </div>
                <div className="p-2.5 bg-[#030508] rounded-xl border border-[#151D2A]">
                  <p className="text-[#00FF9D] font-bold">Priority</p>
                  <p className="text-[10px] uppercase">Early Access</p>
                </div>
                <div className="p-2.5 bg-[#030508] rounded-xl border border-[#151D2A]">
                  <p className="text-[#00E5FF] font-bold">Q3 2026</p>
                  <p className="text-[10px] uppercase">Delivery</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedTierForModal("Batch 01 Early Adopter");
                  setShowComingSoon(true);
                }}
                className="flex-1 py-4 rounded-xl font-bold text-sm tracking-wide text-[#001a0a] bg-[#00FF9D] hover:bg-[#00ffaa] transition-all duration-300 shadow-[0_0_30px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                Back This Project Now <ChevronRight size={18} />
              </button>
              <a
                href="https://discord.gg/N82CpZtGu"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 rounded-xl font-bold text-sm tracking-wide text-white bg-[#5865F2] hover:bg-[#4752C4] border border-[#5865F2] transition-all duration-300 shadow-[0_0_25px_rgba(88,101,242,0.4)] flex items-center justify-center gap-2"
              >
                <DiscordIcon className="w-4 h-4" />
                <span>Join Discord</span>
              </a>
            </div>
          </motion.div>

          {/* Right Video / Interactive Visual Teaser (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-[#070A10] border border-[#151D2A] shadow-2xl group cursor-pointer flex flex-col justify-between p-6"
            onClick={() => setVideoModal(true)}
          >
            {/* Background Image / Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF9D]/20 via-[#00E5FF]/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 flex justify-between items-center text-xs font-mono text-[#64748b]">
              <span className="text-[#00FF9D] font-bold flex items-center gap-1.5">
                <Radio size={14} className="animate-pulse" /> LAUNCH FILM
              </span>
              <span className="px-2.5 py-0.5 rounded-full border border-white/10 bg-black/40 text-white text-[10px]">
                4K HDR • 02:45
              </span>
            </div>

            {/* Play Button HUD Icon */}
            <div className="relative z-10 self-center my-auto w-20 h-20 rounded-full bg-black/70 border border-[#00FF9D]/40 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:border-[#00FF9D] transition-all duration-500 shadow-[0_0_30px_rgba(0,255,157,0.3)]">
              <Play className="text-white ml-1.5 group-hover:text-[#00FF9D] transition-colors" fill="currentColor" size={28} />
            </div>

            <div className="relative z-10 flex justify-between items-end font-mono text-xs text-[#cbd5e1]">
              <div>
                <p className="text-white font-bold">Watch Official Launch Trailer</p>
                <p className="text-[10px] text-[#64748b]">Click to play video presentation</p>
              </div>
              <span className="text-[10px] text-[#00FF9D] uppercase tracking-widest font-bold">
                REC 4K 60FPS
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ VIDEO MODAL OVERLAY ═════════════════════════ */}
      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-[#070A10] border border-[#00FF9D]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-center items-center p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full border border-white/20 bg-black/60 text-white hover:text-[#00FF9D] transition-colors"
              >
                <X size={20} />
              </button>

              <Play size={48} className="text-[#00FF9D] animate-bounce mb-4" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">Nexus Ring Launch Film Demo</h3>
              <p className="text-xs font-mono text-[#94a3b8] max-w-md">
                Demonstrating 4.2N magnetic snap resonance, ESP32-C3 local daemon interrupts, and local Gemini 1.5 focus guardian.
              </p>
              <button
                onClick={() => setVideoModal(false)}
                className="mt-6 px-6 py-2.5 rounded-xl border border-[#00FF9D] bg-[#00FF9D]/10 text-[#00FF9D] font-mono text-xs font-bold hover:bg-[#00FF9D]/20 transition-all"
              >
                Close Cinema Viewer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════ STRETCH GOALS TRACKER ═══════════════════════ */}
      <section className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#00FF9D] uppercase border border-[#00FF9D]/20 bg-[#00FF9D]/5 rounded-full inline-block px-3 py-1 mb-4">
            Ecosystem Unlocks
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Campaign Stretch Goals
          </h2>
          <p className="text-[#94a3b8] text-sm mt-3 font-light">
            Every unlocked milestone upgrades hardware specs and software licenses for all backers.
          </p>
        </div>

        <div className="relative border-l-2 border-[#151D2A] ml-4 md:ml-8 space-y-10 py-4">
          {STRETCH_GOALS.map((goal, idx) => {
            const isUnlocked = goal.status === "unlocked";
            const IconComp = goal.icon;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-10"
              >
                {/* Milestone Node Badge */}
                <div
                  className="absolute -left-[21px] top-1 w-10 h-10 rounded-full border-4 border-[#030508] flex items-center justify-center shadow-lg transition-all"
                  style={{
                    backgroundColor: isUnlocked ? "#070A10" : "#030508",
                    borderColor: isUnlocked ? goal.accent : "#151D2A",
                    boxShadow: isUnlocked ? `0 0 20px ${goal.accent}40` : "none",
                  }}
                >
                  <IconComp size={18} style={{ color: isUnlocked ? goal.accent : "#64748b" }} />
                </div>

                <div
                  className="p-6 md:p-8 rounded-3xl border transition-all duration-300 space-y-4"
                  style={{
                    borderColor: isUnlocked ? goal.accent + "40" : "#151D2A",
                    backgroundColor: isUnlocked ? "#070A10" : "#030508",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span
                        className="text-[10px] font-mono tracking-widest uppercase font-bold px-2.5 py-0.5 rounded border inline-block mb-1"
                        style={{
                          color: isUnlocked ? goal.accent : "#64748b",
                          borderColor: isUnlocked ? goal.accent + "33" : "#151D2A",
                          backgroundColor: isUnlocked ? goal.accent + "10" : "transparent",
                        }}
                      >
                        {isUnlocked ? "UNLOCKED MILESTONE" : "LOCKED GOAL"}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white">{goal.title}</h3>
                    </div>

                    <span className="text-sm font-mono font-bold tracking-widest text-white border border-[#151D2A] bg-[#030508] px-4 py-1.5 rounded-full shrink-0">
                      TARGET: <span style={{ color: goal.accent }}>{goal.target}</span>
                    </span>
                  </div>

                  <p className="text-[#94a3b8] text-sm leading-relaxed font-light">{goal.desc}</p>

                  {/* Progress Indicator */}
                  <div className="w-full bg-[#030508] h-2 rounded-full overflow-hidden border border-[#151D2A]">
                    <div
                      className="h-full transition-all duration-1000 rounded-full"
                      style={{
                        width: `${goal.progress}%`,
                        backgroundColor: goal.accent,
                        boxShadow: `0 0 10px ${goal.accent}`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ════════════════ PRODUCTION ROADMAP TIMELINE ═════════════════ */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#00E5FF] uppercase border border-[#00E5FF]/20 bg-[#00E5FF]/5 rounded-full inline-block px-3 py-1 mb-4">
            Production Roadmap
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Manufacturing Timeline
          </h2>
          <p className="text-[#94a3b8] text-sm mt-3 font-light">
            Transparent execution milestones from initial R&D prototypes to global express delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {ROADMAP.map((st, idx) => (
            <motion.div
              key={st.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl border border-[#151D2A] bg-[#070A10] space-y-4 relative overflow-hidden group hover:border-[#00FF9D]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest" style={{ color: st.color }}>
                  {st.phase}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-white/10 bg-black/40 text-[#cbd5e1]">
                  {st.date}
                </span>
              </div>

              <h3 className="text-base font-display font-bold text-white">{st.title}</h3>
              <p className="text-[#94a3b8] text-xs leading-relaxed font-light">{st.desc}</p>

              <div className="pt-2 border-t border-[#151D2A]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: st.color }} />
                  {st.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════ PLEDGE TIERS SELECTOR ═══════════════════════ */}
      <section id="pledge-tiers" className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#B026FF] uppercase border border-[#B026FF]/20 bg-[#B026FF]/5 rounded-full inline-block px-3 py-1 mb-4">
            Select Your Pledge Tier
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Back The Nexus Project
          </h2>
          <p className="text-[#94a3b8] text-sm mt-3 font-light">
            Lock in exclusive crowdfunding discounts and secure your Batch 01 hardware reservation slot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                tier.popular
                  ? "border-[#00FF9D]/50 bg-[#070A10] shadow-[0_0_40px_rgba(0,255,157,0.12)]"
                  : "border-[#151D2A] bg-[#070A10]"
              }`}
            >
              {tier.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded-full border shadow-lg whitespace-nowrap"
                  style={{
                    backgroundColor: tier.badgeColor + "20",
                    borderColor: tier.badgeColor,
                    color: tier.badgeColor,
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <h3 className="text-xl font-display font-bold mb-1 text-white">{tier.name}</h3>
              <p className="text-4xl font-display font-black text-white mb-3" style={{ color: tier.badgeColor }}>
                {tier.price}
              </p>
              <p className="text-[#94a3b8] text-xs font-light leading-relaxed mb-6 flex-grow">
                {tier.desc}
              </p>

              <div className="space-y-3 mb-8 pt-4 border-t border-[#151D2A]">
                {tier.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#cbd5e1] font-light">
                    <Check size={14} className="shrink-0 mt-0.5" style={{ color: tier.badgeColor }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-[10px] font-mono text-[#64748b] mb-4 text-center">
                {tier.delivery}
              </div>

              <button
                onClick={() => {
                  setSelectedTierForModal(tier.name);
                  setShowComingSoon(true);
                }}
                className="w-full py-3.5 rounded-xl font-bold text-xs tracking-wide transition-all shadow-md cursor-pointer"
                style={{
                  backgroundColor: tier.popular ? "#00FF9D" : "#151D2A",
                  color: tier.popular ? "#001a0a" : "#FFFFFF",
                }}
              >
                Pledge {tier.price}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        tierName={selectedTierForModal}
      />

      {/* ════════════════ EXPANDED FAQ SECTION ════════════════════════ */}
      <section className="relative z-10 max-w-[800px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#00FF9D] uppercase border border-[#00FF9D]/20 bg-[#00FF9D]/5 rounded-full inline-block px-3 py-1 mb-4">
            Crowdfunding FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-[#151D2A] rounded-2xl bg-[#070A10] overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#64748b] transition-transform duration-300 shrink-0 ml-4 ${
                    openFaq === idx ? "rotate-180 text-[#00FF9D]" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-[#94a3b8] font-light text-xs sm:text-sm leading-relaxed border-t border-[#151D2A] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
