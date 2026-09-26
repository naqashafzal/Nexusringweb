"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { COMPARISONS } from "@/lib/comparisons-data";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  ArrowRight,
  ShieldAlert,
  Zap,
  CheckCircle2,
  XCircle,
  Sparkles,
  Layers,
  ChevronRight,
  Clock,
  Smartphone,
  Cpu,
} from "lucide-react";

export default function CompareDirectoryPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const comparisonList = Object.values(COMPARISONS);

  return (
    <main className="min-h-screen bg-vantablack text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-emerald/30 selection:text-white">
      {/* Background Dot Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald/[0.06] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[600px] right-10 w-[500px] h-[300px] bg-electric/[0.04] blur-[140px] rounded-full pointer-events-none" />

      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald/30 bg-emerald/[0.06] text-emerald text-[11px] font-mono tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
          The Head-To-Head Benchmark Matrix
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-[1.05] max-w-4xl mx-auto">
          WHY PHYSICAL DISCIPLINE{" "}
          <span style={{ background: "linear-gradient(120deg, #FFFFFF, #94A3B8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            OUTPERFORMS SOFTWARE.
          </span>
        </h1>

        <p className="mt-6 text-slate-400 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Software blockers live on the same screen that distracts you. Compare the Nexus Ring discipline engine against the world's most popular apps and desk tools.
        </p>
      </section>

      {/* ════════════════ COMPARISON CARDS GRID ════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisonList.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-slate bg-matte p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-emerald/40 transition-all duration-500 shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-emerald/30 bg-emerald/10 text-emerald">
                    VS. {item.competitorName.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{item.competitorType}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-emerald transition-colors">
                    {item.heroTitle}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {item.heroSubtitle}
                  </p>
                </div>

                {/* Quick Contrast Snapshot */}
                <div className="space-y-2.5 pt-4 border-t border-slate text-xs font-mono">
                  <div className="flex items-start gap-2.5 text-emerald">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                    <span>Nexus Ring: {item.nexusAdvantages[0]}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[#FF5F56]">
                    <XCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{item.competitorName}: {item.consCompetitor[0]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate flex items-center justify-between">
                <Link
                  href={`/compare/${item.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-mono text-emerald hover:text-white transition-colors group/link"
                >
                  <span>Read Full Technical Breakdown</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] font-mono text-slate-500">Benchmark Report</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════ COGNITIVE SCIENCE MANIFESTO ══════════════ */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <div className="rounded-3xl border border-emerald/30 bg-matte p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-[0_0_60px_rgba(0,255,157,0.1)]">
          <div className="w-12 h-12 rounded-2xl bg-emerald/10 border border-emerald/40 text-emerald flex items-center justify-center mx-auto">
            <Zap size={24} />
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Stop Fighting Your Prefrontal Cortex.
          </h3>

          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Willpower is an exhaustible biological resource. Digital app blockers fail because they ask an already-depleted brain to voluntarily obey an app timer. The Nexus Ring offloads discipline to a cold, physical desktop anchor that turns focus into an automatic ritual.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-3.5 rounded-xl bg-emerald hover:bg-[#00ffaa] text-vantablack font-bold text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(0,255,157,0.35)] flex items-center gap-2 cursor-pointer"
            >
              Reserve Priority Batch 01 <ChevronRight size={16} />
            </button>
            <Link
              href="/research"
              className="px-6 py-3.5 rounded-xl border border-slate bg-vantablack hover:border-emerald/50 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Read Cognitive Whitepaper
            </Link>
          </div>
        </div>
      </section>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        tierName="Priority Waitlist (Compare Hub)"
      />
    </main>
  );
}
