"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DiscordIcon from "@/components/DiscordIcon";
import {
  Cpu,
  Fingerprint,
  Zap,
  ShieldCheck,
  Layers,
  Sparkles,
  ChevronRight,
  Terminal,
  Lock,
  Eye,
  Activity,
  Code2,
  CheckCircle2,
  Globe,
  Radio,
  HardDrive,
  Users,
  Award,
  Mail,
  MapPin,
  Share2,
  Compass,
  HeartHandshake,
  Microscope,
  Building2,
  ExternalLink,
  Send,
  MessageSquare,
} from "lucide-react";

// ─── FOUNDERS & CORE TEAM DATA ────────────────────────────────────

const TEAM = [
  {
    name: "Naqash Afzal",
    role: "Founder & Chief Hardware Architect",
    bio: "Pioneer in ESP32 RISC-V embedded firmware, Hall-effect magnetic vector tracking, and 5-axis aerospace CNC billet engineering. Obsessed with building zero-latency physical interfaces that eliminate digital friction.",
    location: "San Francisco / Remote",
    accent: "#00FF9D",
    badge: "FOUNDER",
    github: "https://github.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    skills: ["Embedded C/C++", "FreeRTOS", "5-Axis CNC Milling", "RISC-V Architecture"],
  },
  {
    name: "Dr. Evelyn Vance",
    role: "Co-Founder & Chief Cognitive Scientist",
    bio: "PhD in Spatial Cognition from MIT. Specialized in ego depletion mitigation, haptic sensory resonance, and tactile muscle memory triggers that accelerate entry into deep work flow states.",
    location: "Boston, MA",
    accent: "#00E5FF",
    badge: "RESEARCH LEAD",
    github: "https://github.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    skills: ["Spatial Psychology", "Haptic Physics", "EEG Data Analysis", "Ego Depletion"],
  },
  {
    name: "Kaelen Voss",
    role: "Lead Local AI Architect",
    bio: "Former AI Systems Researcher specializing in 4-bit NPU quantization, air-gapped Gemini 1.5 vision inference, and native OS kernel socket firewall engineering.",
    location: "Tokyo, Japan",
    accent: "#B026FF",
    badge: "AI ENGINE",
    github: "https://github.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    skills: ["Local VRAM Models", "Gemini Quantization", "OS Kernel Webhooks", "Rust/C++"],
  },
];

// ─── COMPANY VALUES / MANIFESTO DATA ──────────────────────────────

const VALUES = [
  {
    num: "01",
    title: "100% Air-Gapped Privacy",
    desc: "We believe screen pixels and keystrokes should never touch external cloud servers. Our local AI guardian executes 100% on your machine's VRAM/NPU with zero telemetry payload.",
    accent: "#00FF9D",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Physical Over Digital Friction",
    desc: "Willpower is a finite resource. Software app blockers fail because they rely on the same mouse-and-screen interface that delivers distractions. We replace digital friction with cold, tactile aerospace metal.",
    accent: "#00E5FF",
    icon: Zap,
  },
  {
    num: "03",
    title: "Open Source Developer SDK",
    desc: "No proprietary lock-in. Our FreeRTOS firmware, PowerShell/Zsh hook scripts, and 3MF Bambu Lab print profiles are completely open for developers to inspect, fork, and hack.",
    accent: "#B026FF",
    icon: Code2,
  },
  {
    num: "04",
    title: "Zero Planned Obsolescence",
    desc: "Buttonless KY-003 Hall-effect sensors mean zero mechanical contacts, zero wear, and infinite cycle lifespan. Engineered out of billet 6061-T6 aluminum to last a lifetime.",
    accent: "#FF9F1C",
    icon: HardDrive,
  },
];

// ─── COMPANY MILESTONES ───────────────────────────────────────────

const MILESTONES = [
  { year: "2025 Q1", title: "Nexus Labs Founded", note: "R&D initiated on Hall-effect magnetic spatial tracking." },
  { year: "2025 Q3", title: "ESP32-C3 Firmware v1.0", note: "Achieved sub-24ms local OS kernel webhook execution." },
  { year: "2026 Q1", title: "Air-Gapped Gemini 1.5 AI", note: "Quantized 4-bit vision model for zero-cloud local focus monitoring." },
  { year: "2026 Q2", title: "Global Batch 01 Launch", note: "500-unit limited aerospace production launch worldwide." },
];

export default function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactMessage) return;
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#030508] text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#00FF9D]/30 selection:text-white">
      {/* Background Dot Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Ambient Top Glow Spheres */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00FF9D]/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[600px] right-10 w-[500px] h-[300px] bg-[#00E5FF]/[0.03] blur-[140px] rounded-full pointer-events-none" />

      {/* ════════════════ 1. HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto space-y-6 relative z-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/[0.06] text-[#00FF9D] text-[11px] font-mono tracking-widest uppercase">
              <Building2 size={14} /> Nexus Desktop Art Inc. · Founded 2025
            </div>
            <a
              href="https://discord.gg/N82CpZtGu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#5865F2]/50 bg-[#5865F2]/10 text-white text-[11px] font-mono font-bold tracking-widest uppercase hover:bg-[#5865F2] transition-colors"
            >
              <DiscordIcon className="w-3.5 h-3.5 text-[#5865F2]" />
              <span>Join Discord</span>
            </a>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] text-white">
            ARCHITECTS OF<br />
            <span style={{ background: "linear-gradient(120deg,#00FF9D 0%,#00E5FF 50%,#B026FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              TACTILE INTENT.
            </span>
          </h1>

          <p className="text-[#94a3b8] text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We are an elite team of hardware engineers, cognitive scientists, and open-source developers building physical anchors for deep work in a hyper-distracted digital world.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-[#151D2A] font-mono text-xs">
            <div className="p-4 bg-[#070A10] border border-[#151D2A] rounded-2xl">
              <p className="text-[#00FF9D] font-bold text-2xl font-display">0 Bytes</p>
              <p className="text-[#64748b] text-[10px] uppercase tracking-wider mt-1">Cloud Telemetry</p>
            </div>
            <div className="p-4 bg-[#070A10] border border-[#151D2A] rounded-2xl">
              <p className="text-[#00E5FF] font-bold text-2xl font-display">&lt;24ms</p>
              <p className="text-[#64748b] text-[10px] uppercase tracking-wider mt-1">Kernel Response</p>
            </div>
            <div className="p-4 bg-[#070A10] border border-[#151D2A] rounded-2xl">
              <p className="text-[#B026FF] font-bold text-2xl font-display">100%</p>
              <p className="text-[#64748b] text-[10px] uppercase tracking-wider mt-1">Open Source SDK</p>
            </div>
            <div className="p-4 bg-[#070A10] border border-[#151D2A] rounded-2xl">
              <p className="text-[#FF9F1C] font-bold text-2xl font-display">6061-T6</p>
              <p className="text-[#64748b] text-[10px] uppercase tracking-wider mt-1">Aerospace Billet</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════ 2. OUR MISSION & PHILOSOPHY ═════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#00FF9D] border border-[#00FF9D]/20 bg-[#00FF9D]/10 px-3 py-1 rounded-full">
                Core Engineering Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                Why We Built The Nexus Ring
              </h2>
              <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed font-light">
                Modern operating systems are intentionally engineered by ad-tech giants to fracture human attention. Digital focus apps fail because launching an app requires using the mouse and screen—the exact same interface delivering notification triggers.
              </p>
              <p className="text-[#cbd5e1] text-sm md:text-base leading-relaxed font-light border-l-2 border-[#00FF9D] pl-4">
                The Nexus Ring breaks the digital loop. Picking up a machined 185-gram billet aluminum totem and snapping it into the magnetic dock uses spatial muscle memory to bypass mental friction.
              </p>
            </div>

            {/* Philosophy Visual Card */}
            <div className="lg:col-span-6 bg-[#030508] border border-[#151D2A] rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#64748b] border-b border-[#151D2A] pb-4">
                <span>SYSTEM MANIFESTO</span>
                <span className="text-[#00FF9D]">NEXUS_CORE_v2.4</span>
              </div>
              <div className="space-y-4 text-xs font-mono text-[#cbd5e1]">
                <div className="p-3 bg-[#070A10] border border-[#151D2A] rounded-xl flex items-center justify-between">
                  <span className="text-[#FF5F56]">OLD WAY: Digital App Blockers</span>
                  <span className="text-[#64748b]">Fails via Ego Depletion</span>
                </div>
                <div className="p-3 bg-[#070A10] border border-[#00FF9D]/40 rounded-xl flex items-center justify-between shadow-[0_0_15px_rgba(0,255,157,0.1)]">
                  <span className="text-[#00FF9D] font-bold">NEXUS WAY: Physical Magnetic Totem</span>
                  <span className="text-white font-bold">Sub-24ms OS Lock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ 3. FOUNDERS & CORE TEAM ═════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#00E5FF] uppercase border border-[#00E5FF]/20 bg-[#00E5FF]/5 rounded-full inline-block px-3 py-1 mb-4">
            Meet The Inventors
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white">
            Founders & Core Engineers
          </h2>
          <p className="text-[#94a3b8] text-sm mt-3 font-light">
            Multidisciplinary experts bridging hardware physics, spatial neuroscience, and local AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 space-y-6 relative overflow-hidden group hover:border-[#00FF9D]/40 transition-all duration-500 shadow-xl"
            >
              {/* Member Avatar / Initial Badge Visual */}
              <div className="flex items-center justify-between">
                <div
                  className="w-14 h-14 rounded-2xl border flex items-center justify-center font-display font-black text-xl shadow-lg"
                  style={{
                    borderColor: member.accent + "60",
                    backgroundColor: member.accent + "10",
                    color: member.accent,
                  }}
                >
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>

                <span
                  className="text-[9px] font-mono font-bold tracking-widest px-3 py-1 rounded-full border uppercase"
                  style={{
                    color: member.accent,
                    borderColor: member.accent + "40",
                    backgroundColor: member.accent + "10",
                  }}
                >
                  {member.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-white">{member.name}</h3>
                <p className="text-xs font-mono mt-1" style={{ color: member.accent }}>
                  {member.role}
                </p>
              </div>

              <p className="text-[#94a3b8] text-xs leading-relaxed font-light">{member.bio}</p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#151D2A]">
                {member.skills.map((sk) => (
                  <span
                    key={sk}
                    className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#151D2A] bg-[#030508] text-[#cbd5e1]"
                  >
                    {sk}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2 font-mono text-xs text-[#64748b]">
                <a href={member.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Repository">
                  <Code2 size={16} />
                </a>
                <a href={member.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Website">
                  <Globe size={16} />
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="External Link">
                  <ExternalLink size={16} />
                </a>
                <span className="ml-auto text-[10px] flex items-center gap-1">
                  <MapPin size={12} className="text-[#64748b]" /> {member.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════ 4. COMPANY VALUES & MANIFESTO ═══════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#B026FF] uppercase border border-[#B026FF]/20 bg-[#B026FF]/5 rounded-full inline-block px-3 py-1 mb-4">
            Company Pillars
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white">
            Our Guiding Engineering Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VALUES.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <motion.div
                key={val.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-[#151D2A] bg-[#070A10] space-y-4 relative overflow-hidden group hover:border-[#00FF9D]/30 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest" style={{ color: val.accent }}>
                    PILLAR {val.num}
                  </span>
                  <IconComp size={22} style={{ color: val.accent }} />
                </div>

                <h3 className="text-2xl font-display font-bold text-white">{val.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed font-light">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ════════════════ 5. DEVELOPER & COMPANY CONTACT FORM ═════════ */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-[#00FF9D]/30 bg-[#070A10] p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,255,157,0.08)]">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#00FF9D] border border-[#00FF9D]/20 bg-[#00FF9D]/10 px-3 py-1 rounded-full">
              Developer & Founder Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Get in Touch with the Founders
            </h2>
            <p className="text-[#94a3b8] text-sm font-light">
              Have questions about custom SDK webhooks, enterprise licensing, or press inquiries? Send a direct message to our engineering leads or chat live on our Discord server.
            </p>
            <div className="pt-2">
              <a
                href="https://discord.gg/N82CpZtGu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-mono text-xs font-bold shadow-[0_0_20px_rgba(88,101,242,0.4)] transition-all"
              >
                <DiscordIcon className="w-4 h-4" />
                <span>Join Official Discord Server</span>
              </a>
            </div>
          </div>

          {formSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 rounded-2xl border border-[#00FF9D]/40 bg-[#00FF9D]/10 text-center space-y-4"
            >
              <CheckCircle2 size={40} className="text-[#00FF9D] mx-auto" />
              <h3 className="text-2xl font-display font-bold text-white">Message Dispatched!</h3>
              <p className="text-xs text-[#cbd5e1] font-mono max-w-md mx-auto">
                Thank you, <span className="text-[#00FF9D] font-bold">{contactName || "Developer"}</span>. Our founders will get back to your inbox (<span className="text-[#00FF9D] font-bold">{contactEmail}</span>) within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-mono text-[#64748b] uppercase tracking-wider block mb-2">
                    Your Name / Developer Alias
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Alex Vance"
                    required
                    className="w-full bg-[#030508] border border-[#151D2A] rounded-xl px-4 py-3.5 text-white placeholder-[#475569] focus:outline-none focus:border-[#00FF9D] text-sm font-mono transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-[#64748b] uppercase tracking-wider block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="alex@domain.com"
                    required
                    className="w-full bg-[#030508] border border-[#151D2A] rounded-xl px-4 py-3.5 text-white placeholder-[#475569] focus:outline-none focus:border-[#00FF9D] text-sm font-mono transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#64748b] uppercase tracking-wider block mb-2">
                  Message / Inquiries (SDK, Hardware, Press, Partnership)
                </label>
                <textarea
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Hey Nexus team, I'd love to build a custom Home Assistant IoT webhook module..."
                  required
                  className="w-full bg-[#030508] border border-[#151D2A] rounded-xl px-4 py-3.5 text-white placeholder-[#475569] focus:outline-none focus:border-[#00FF9D] text-sm font-mono transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm tracking-wide text-[#001a0a] bg-[#00FF9D] hover:bg-[#00ffaa] transition-all duration-300 shadow-[0_0_30px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2"
              >
                Send Direct Message to Founders <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
