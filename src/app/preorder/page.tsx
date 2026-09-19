"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronRight,
  Fingerprint,
  Lock,
} from "lucide-react";

// ─── Finish Options ───────────────────────────────────────────────

const FINISHES = [
  {
    id: "slate",
    name: "Deep Slate Anodized",
    color: "#030508",
    border: "#00FF9D",
    desc: "15-micron hard-anodized matte black billet aluminum with stealth emerald ring accent.",
  },
  {
    id: "neon",
    name: "Cyberpunk Neon Edition",
    color: "#070A10",
    border: "#00E5FF",
    desc: "Brushed dark graphite alloy housing with high-luminescence Electric Blue LED ring beam.",
  },
  {
    id: "ceramic",
    name: "Founder's Ceramic White",
    color: "#151D2A",
    border: "#B026FF",
    desc: "Micro-arc oxidation white ceramic finish. Hand-numbered laser engraving 001–500.",
  },
];

// ─── Pledge Tier Options ──────────────────────────────────────────

const TIERS = [
  {
    id: "maker",
    name: "Maker PCB Kit",
    price: "$15",
    badge: "DIY Tier",
    desc: "Raw ESP32-C3 PCB + 4 Hall-effect sensors. Build your own dock.",
  },
  {
    id: "hacker",
    name: "Hacker Totem Pack",
    price: "$49",
    badge: "Accessories",
    desc: "Set of 4 CNC machined magnetic totems with neodymium cores.",
  },
  {
    id: "adopter",
    name: "Early Adopter Artifact",
    price: "$129",
    badge: "RECOMMENDED",
    desc: "Full Nexus Ring Hardware Controller + 4 Magnetic Totems + Software License.",
    popular: true,
  },
  {
    id: "founder",
    name: "Founder's Collector Tier",
    price: "$289",
    badge: "LIMITED (22 LEFT)",
    desc: "Ceramic White Artifact + Gold-Plated Totems + VIP 1-on-1 Setup Call with Founders.",
  },
];

export default function PreorderPage() {
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [selectedTier, setSelectedTier] = useState(2); // Adopter default
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [accessCode, setAccessCode] = useState("");

  const finish = FINISHES[selectedFinish];
  const tier = TIERS[selectedTier];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const randomHash = "NX-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setAccessCode(randomHash);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#030508] text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden">
      {/* Background Dot Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00FF9D]/[0.05] blur-[140px] rounded-full pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/[0.06] text-[#00FF9D] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
            Protect Your Potential · Batch 01 Queue Open (384 / 500 Reserved)
          </div>

          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white">
            RESERVE YOUR<br />
            <span style={{ background: "linear-gradient(120deg,#00FF9D 0%,#00E5FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              DISCIPLINE ENGINE.
            </span>
          </h1>

          <p className="text-[#94a3b8] text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            The ultimate hardware artifact to lock in your habits and build unbreakable discipline. Batch 01 is strictly limited to 500 units worldwide. Reserve your physical discipline engine now to protect your time and focus.
          </p>
        </div>
      </section>

      {/* ════════════════ CONFIGURATOR & CHECKOUT FORM ═════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── LEFT: Hardware Configurator (7 cols) ── */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Hardware Finish Selector */}
            <div className="rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#00FF9D] uppercase tracking-widest block">Step 01</span>
                  <h3 className="text-xl font-display font-bold text-white">Choose Hardware Finish</h3>
                </div>
                <span className="text-xs font-mono text-[#64748b]">{finish.name}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {FINISHES.map((f, i) => {
                  const isActive = selectedFinish === i;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFinish(i)}
                      className="p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden"
                      style={{
                        borderColor: isActive ? f.border : "#151D2A",
                        backgroundColor: isActive ? f.border + "10" : "#030508",
                        boxShadow: isActive ? `0 0 20px ${f.border}25` : "none",
                      }}
                    >
                      <div className="w-4 h-4 rounded-full border mb-3" style={{ backgroundColor: f.border }} />
                      <p className="font-display font-bold text-xs text-white leading-snug">{f.name}</p>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-[#94a3b8] font-light leading-relaxed border-l-2 pl-3" style={{ borderColor: finish.border }}>
                {finish.desc}
              </p>
            </div>

            {/* 2. Tier Selection */}
            <div className="rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 space-y-6">
              <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest block">Step 02</span>
              <h3 className="text-xl font-display font-bold text-white">Select Pledge Tier</h3>

              <div className="space-y-3">
                {TIERS.map((t, i) => {
                  const isActive = selectedTier === i;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTier(i)}
                      className="w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between gap-4"
                      style={{
                        borderColor: isActive ? "#00FF9D" : "#151D2A",
                        backgroundColor: isActive ? "#00FF9D0a" : "#030508",
                      }}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-base text-white">{t.name}</span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-[#00FF9D]/30 bg-[#00FF9D]/10 text-[#00FF9D]">
                            {t.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#64748b] font-light">{t.desc}</p>
                      </div>
                      <span className="text-xl font-display font-bold text-white shrink-0">{t.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ── RIGHT: Checkout Form & Access Generator (5 cols) ── */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-3xl border border-[#00FF9D]/30 bg-[#070A10] p-8 space-y-6 shadow-[0_0_50px_rgba(0,255,157,0.08)]">
              <div className="flex items-center justify-between border-b border-[#151D2A] pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#64748b] uppercase tracking-widest block">Selected Artifact</span>
                  <p className="font-display font-bold text-lg text-white">{tier.name}</p>
                </div>
                <span className="text-2xl font-display font-black text-[#00FF9D]">{tier.price}</span>
              </div>

              {submitted ? (
                <div className="space-y-4 p-6 rounded-2xl border border-[#00FF9D]/40 bg-[#00FF9D]/10 text-center">
                  <CheckCircle2 size={32} className="text-[#00FF9D] mx-auto" />
                  <h4 className="text-xl font-display font-bold text-white">Batch 01 Slot Confirmed!</h4>
                  <p className="text-xs text-[#cbd5e1] font-light">
                    Your cryptographic reservation key has been generated and dispatched to <span className="font-mono text-[#00FF9D] font-bold">{email}</span>.
                  </p>
                  <div className="p-3 bg-[#030508] rounded-xl border border-[#151D2A] font-mono text-xs text-[#00FF9D]">
                    RESERVATION KEY: <span className="font-bold tracking-widest">{accessCode}</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-mono text-[#64748b] uppercase tracking-wider block mb-2">
                      Email Address for Reservation
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      required
                      className="w-full bg-[#030508] border border-[#151D2A] rounded-xl px-4 py-3.5 text-white placeholder-[#475569] focus:outline-none focus:border-[#00FF9D] text-sm font-mono transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm tracking-wide text-[#001a0a] bg-[#00FF9D] hover:bg-[#00ffaa] transition-all duration-300 shadow-[0_0_30px_rgba(0,255,157,0.4)] flex items-center justify-center gap-2"
                  >
                    Lock In Reservation ({tier.price}) <ChevronRight size={16} />
                  </button>
                </form>
              )}

              <div className="space-y-2 pt-4 border-t border-[#151D2A] text-xs font-mono text-[#64748b]">
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-[#00FF9D]" />
                  <span>Free Express Worldwide Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw size={14} className="text-[#00E5FF]" />
                  <span>30-Day Physical Flow Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#B026FF]" />
                  <span>2-Year Hardware Warranty + Open SDK</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
