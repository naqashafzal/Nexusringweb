"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
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
  Briefcase,
} from "lucide-react";

// ─── FOUNDER & ARCHITECT DATA ─────────────────────────────────────

const TEAM = [
  {
    name: "Naqash Afzal",
    role: "Founder & Chief Hardware Architect",
    bio: "Pioneer in ESP32 RISC-V embedded firmware, Hall-effect magnetic vector tracking, and high-precision rapid physical prototyping. Obsessed with building zero-latency physical discipline artifacts that eliminate digital distraction, protect human attention, and accelerate personal success.",
    location: "Remote / Global",
    accent: "#00FF9D",
    badge: "FOUNDER & ARCHITECT",
    links: [
      { name: "GitHub", url: "https://github.com/naqashafzal", icon: Code2 },
      { name: "Google Developer", url: "https://g.dev/naqashafzal", icon: Globe },
      { name: "MakerWorld", url: "https://makerworld.com/en/@naqash", icon: Layers },
      { name: "Discord Community", url: "https://discord.gg/Q3tTGhH4k", icon: MessageSquare },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/naqashafzal/", icon: ExternalLink },
      { name: "Freelancer", url: "https://www.freelancer.com/u/naqashafzal", icon: Briefcase },
    ],
    skills: ["Embedded C/C++", "FreeRTOS", "3D CAD & Prototyping", "RISC-V Architecture", "Kernel Daemons"],
  },
];

// ─── COMPANY VALUES / MANIFESTO DATA ──────────────────────────────

const VALUES = [
  {
    num: "01",
    title: "Tangible Intent",
    desc: "We are moving away from clicking abstract buttons on a screen to relying on physical, spatial memory. Grabbing a beautifully crafted, sci-fi-inspired totem and feeling it magnetically snap into the dock triggers a psychological shift. The glowing LED feedback serves as a constant, ambient reminder of the current state of mind.",
    accent: "#00FF9D",
    icon: Fingerprint,
  },
  {
    num: "02",
    title: "Ruthless Environment Control",
    desc: "Your PC should adapt to you, not the other way around. The moment the totem connects, the Nexus Ring executes a zero-latency transformation of your operating system. It dynamically rewrites host files to block distracting websites, instantly terminates unauthorized background processes, and silences system notifications.",
    accent: "#00E5FF",
    icon: Zap,
  },
  {
    num: "03",
    title: "An AI-Powered Guardian",
    desc: "The Nexus Ring is self-aware of your workspace. By integrating AI directly into the local enforcement loop, it actively reads the titles of your open windows and dynamically judges if they belong in your current workflow. It acts as a personalized productivity coach.",
    accent: "#B026FF",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Functional Desk Art",
    desc: "Productivity tools shouldn't look like boring office supplies. The Nexus Ring is designed to be a conversation piece—an \"alien artifact\" sitting on your desk. With an organic, bio-hex exoskeleton and a glowing translucent core, it is a piece of high-tech art that demands to be touched.",
    accent: "#FF9F1C",
    icon: Sparkles,
  },
];

// ─── COMPANY MILESTONES ───────────────────────────────────────────

const MILESTONES = [
  { year: "2026 Q1", title: "Nexus Labs Founded", note: "R&D initiated on Hall-effect magnetic spatial tracking." },
  { year: "2026 Q3", title: "ESP32-C3 Firmware v1.0", note: "Achieved sub-24ms local OS kernel webhook execution." },
  { year: "2027 Q1", title: "Air-Gapped Local AI Guardian", note: "Quantized 4-bit vision model for zero-cloud local focus monitoring." },
  { year: "2027 Q2", title: "Global Batch 01 Launch", note: "500-unit limited aerospace production launch worldwide." },
];

export default function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactMessage || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact_inquiry",
          name: contactName,
          email: contactEmail,
          message: contactMessage,
          source: "/about",
        }),
      });
    } catch (err) {
      console.error("Error sending contact message to notify API:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-emerald/30 selection:text-white">
      {/* Background Dot Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Ambient Top Glow Spheres */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[600px] right-10 w-[500px] h-[300px] bg-electric/[0.03] blur-[140px] rounded-full pointer-events-none" />

      {/* ════════════════ 1. HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto space-y-6 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald/30 bg-emerald/[0.06] text-emerald text-[11px] font-mono tracking-widest uppercase">
            <Building2 size={14} /> The Vision of the Nexus Ring
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] text-white">
            PHYSICAL INTENT.<br />
            <span style={{ background: "linear-gradient(120deg, #FFFFFF, #94A3B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              DIGITAL EXECUTION.
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            <span className="italic">"To bridge the gap between physical intention and digital execution, transforming productivity from a software struggle into a tangible, tactile experience."</span>
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate font-mono text-xs">
            <div className="p-4 bg-matte border border-slate rounded-2xl">
              <p className="text-emerald font-bold text-2xl font-display">0 Bytes</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Cloud Telemetry</p>
            </div>
            <div className="p-4 bg-matte border border-slate rounded-2xl">
              <p className="text-electric font-bold text-2xl font-display">&lt;24ms</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Kernel Response</p>
            </div>
            <div className="p-4 bg-matte border border-slate rounded-2xl">
              <p className="text-purple font-bold text-2xl font-display">100%</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Open Source SDK</p>
            </div>
            <div className="p-4 bg-matte border border-slate rounded-2xl">
              <p className="text-amber font-bold text-2xl font-display">V1 3D</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Precision Printed</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════ 2. OUR MISSION & PHILOSOPHY ═════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="rounded-3xl border border-slate bg-matte p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald border border-emerald/20 bg-emerald/10 px-3 py-1 rounded-full">
                Core Engineering Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
                The Ultimate Goal
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                In a world overflowing with digital distractions, willpower is no longer enough to stay focused. The Nexus Ring was born from a simple realization: changing your digital environment should be as deliberate and physical as closing an office door.
              </p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light border-l-2 border-emerald pl-4">
                The Nexus Ring exists to give creators, developers, and designers their time back. It eliminates the friction of "getting into the zone" by automating the setup and guarding the perimeter, allowing you to simply drop the totem and do your best work.
              </p>
            </div>

            {/* Philosophy Visual Card */}
            <div className="lg:col-span-6 bg-vantablack border border-slate rounded-2xl p-8 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate pb-4">
                <span>SYSTEM MANIFESTO</span>
                <span className="text-emerald">NEXUS_CORE_v2.4</span>
              </div>
              <div className="space-y-4 text-xs font-mono text-slate-300">
                <div className="p-3 bg-matte border border-slate rounded-xl flex items-center justify-between">
                  <span className="text-[#FF5F56]">OLD WAY: Digital App Blockers</span>
                  <span className="text-slate-500">Fails via Ego Depletion</span>
                </div>
                <div className="p-3 bg-matte border border-emerald/40 rounded-xl flex items-center justify-between shadow-[0_0_15px_rgba(0,255,157,0.1)]">
                  <span className="text-emerald font-bold">NEXUS WAY: Physical Magnetic Totem</span>
                  <span className="text-white font-bold">Sub-24ms OS Lock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ 3. FOUNDER & INVENTOR ═════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-mono tracking-[0.25em] text-emerald uppercase border border-emerald/20 bg-emerald/5 rounded-full inline-block px-3 py-1 mb-4">
            The Visionary Behind Nexus Ring
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white">
            Founder & Inventor
          </h2>
          <p className="text-slate-400 text-sm mt-3 font-light">
            Engineering tactile physical discipline artifacts to protect human focus and accelerate personal success.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-emerald/40 bg-matte p-8 md:p-10 space-y-6 relative overflow-hidden group hover:border-emerald transition-all duration-500 shadow-[0_0_50px_rgba(0,255,157,0.12)]"
            >
              {/* Member Avatar / Initial Badge Visual */}
              <div className="flex items-center justify-between">
                <div
                  className="w-16 h-16 rounded-2xl border flex items-center justify-center font-display font-black text-2xl shadow-lg"
                  style={{
                    borderColor: member.accent + "60",
                    backgroundColor: member.accent + "15",
                    color: member.accent,
                  }}
                >
                  NA
                </div>

                <span
                  className="text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full border uppercase"
                  style={{
                    color: member.accent,
                    borderColor: member.accent + "50",
                    backgroundColor: member.accent + "15",
                  }}
                >
                  {member.badge}
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-display font-bold text-white">{member.name}</h3>
                <p className="text-xs font-mono mt-1" style={{ color: member.accent }}>
                  {member.role}
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-light">{member.bio}</p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate">
                {member.skills.map((sk) => (
                  <span
                    key={sk}
                    className="text-[10px] font-mono px-2.5 py-1 rounded border border-slate bg-vantablack text-slate-400"
                  >
                    {sk}
                  </span>
                ))}
              </div>

              {/* Verified Developer & Hardware Portfolios */}
              <div className="pt-4 border-t border-slate space-y-3">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                  Verified Engineering & Hardware Profiles
                </span>
                <div className="flex flex-wrap gap-2">
                  {member.links.map((link) => {
                    const IconComp = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate bg-vantablack hover:border-emerald/60 hover:bg-emerald/10 hover:text-white text-slate-400 text-xs font-mono transition-all group"
                      >
                        <IconComp size={14} className="text-emerald group-hover:scale-110 transition-transform" />
                        <span>{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Location & Entity Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-slate/60 font-mono text-xs text-slate-500">
                <span className="text-[10px] text-slate-500">Nexus Desktop Art Inc.</span>
                <span className="text-[11px] flex items-center gap-1.5 text-slate-400">
                  <MapPin size={13} className="text-emerald" /> {member.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════ 4. COMPANY VALUES & MANIFESTO ═══════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] font-mono tracking-[0.25em] text-purple uppercase border border-purple/20 bg-purple/5 rounded-full inline-block px-3 py-1 mb-4">
            The 4 Pillars of the Nexus Ring
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
                className="p-8 rounded-3xl border border-slate bg-matte space-y-4 relative overflow-hidden group hover:border-emerald/30 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest" style={{ color: val.accent }}>
                    PILLAR {val.num}
                  </span>
                  <IconComp size={22} style={{ color: val.accent }} />
                </div>

                <h3 className="text-2xl font-display font-bold text-white">{val.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ════════════════ 5. DEVELOPER & COMPANY CONTACT FORM ═════════ */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-emerald/30 bg-matte p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,255,157,0.08)]">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-emerald border border-emerald/20 bg-emerald/10 px-3 py-1 rounded-full">
              Developer & Founder Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Get in Touch with the Founders
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Have questions about custom SDK webhooks, enterprise licensing, or press inquiries? Send a direct message to our engineering leads.
            </p>
          </div>

          {formSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 rounded-2xl border border-emerald/40 bg-emerald/10 text-center space-y-4"
            >
              <CheckCircle2 size={40} className="text-emerald mx-auto" />
              <h3 className="text-2xl font-display font-bold text-white">Message Dispatched!</h3>
              <p className="text-xs text-slate-300 font-mono max-w-md mx-auto">
                Thank you, <span className="text-emerald font-bold">{contactName || "Developer"}</span>. Our founders will get back to your inbox (<span className="text-emerald font-bold">{contactEmail}</span>) within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                    Your Name / Developer Alias
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Alex Vance"
                    required
                    className="w-full bg-vantablack border border-slate rounded-xl px-4 py-3.5 text-white placeholder-[#475569] focus:outline-none focus:border-emerald text-sm font-mono transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="alex@domain.com"
                    required
                    className="w-full bg-vantablack border border-slate rounded-xl px-4 py-3.5 text-white placeholder-[#475569] focus:outline-none focus:border-emerald text-sm font-mono transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                  Message / Inquiries (SDK, Hardware, Press, Partnership)
                </label>
                <textarea
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Hey Nexus team, I'd love to build a custom Home Assistant IoT webhook module..."
                  required
                  className="w-full bg-vantablack border border-slate rounded-xl px-4 py-3.5 text-white placeholder-[#475569] focus:outline-none focus:border-emerald text-sm font-mono transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-bold text-sm tracking-wide text-[#001a0a] bg-emerald hover:bg-[#00ffaa] disabled:opacity-60 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#001a0a] border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    Send Direct Message to Founders <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
