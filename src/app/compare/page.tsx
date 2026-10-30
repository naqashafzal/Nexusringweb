"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { COMPARISONS } from "@/lib/comparisons-data";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function CompareDirectoryPage() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const comparisonList = Object.values(COMPARISONS);

  return (
    <main className="min-h-screen bg-[#080B12] text-[#F8FAFC] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#FF405A]/30 selection:text-white">
      {/* Background Dot Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#283141_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#283141] bg-[#101723] text-[#A5AFBF] text-[11px] font-mono tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF405A]" />
          Product Architecture Comparison
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-[1.05] max-w-4xl mx-auto">
          WHY PHYSICAL INTENT{" "}
          <span className="text-[#A5AFBF]">
            DIFFERS FROM SOFTWARE ALONE.
          </span>
        </h1>

        <p className="mt-6 text-[#A5AFBF] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Software blockers live on the same screen that distracts you. Compare the Nexus Ring physical approach against conventional blockers and desk accessories.
        </p>
      </section>

      {/* ════════════════ COMPARISON CARDS GRID ════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisonList.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-3xl border border-[#283141] bg-[#101723] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#FF405A]/40 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-[#FF405A]/30 bg-[#FF405A]/10 text-[#FF405A]">
                    VS. {item.competitorName.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-[#A5AFBF]">{item.competitorType}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#FF405A] transition-colors">
                    {item.heroTitle}
                  </h3>
                  <p className="text-sm text-[#A5AFBF] font-light leading-relaxed">
                    {item.heroSubtitle}
                  </p>
                </div>

                {/* Quick Contrast Snapshot */}
                <div className="space-y-2.5 pt-4 border-t border-[#283141] text-xs font-mono">
                  <div className="flex items-start gap-2.5 text-white">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#35C98A]" />
                    <span>Nexus Ring: {item.nexusAdvantages[0]}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[#A5AFBF]">
                    <XCircle size={16} className="shrink-0 mt-0.5 text-[#FF405A]" />
                    <span>{item.competitorName}: {item.consCompetitor[0]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#283141] flex items-center justify-between">
                <Link
                  href={`/compare/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#FF405A] hover:text-white transition-colors group/link"
                >
                  <span>Read Full Comparison</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] font-mono text-[#A5AFBF]">Analysis</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════ COGNITIVE SCIENCE MANIFESTO ══════════════ */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12 mb-28">
        <div className="rounded-3xl border border-[#283141] bg-[#101723] p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-[#FF405A]/10 border border-[#FF405A]/30 text-[#FF405A] flex items-center justify-center mx-auto">
            <Sparkles size={22} />
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            Physical Anchors for Cognitive Transitions.
          </h3>

          <p className="text-[#A5AFBF] text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Digital app blockers ask an already-distracted mind to voluntarily navigate software menus to enforce discipline. Nexus Ring provides a physical boundary: moving the totem shifts your workspace tools and locks in your decision.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-3.5 rounded-xl bg-[#FF405A] hover:bg-[#e0354e] text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] flex items-center gap-2 cursor-pointer"
            >
              <span>Join Early Access Waitlist</span> <ChevronRight size={16} />
            </button>
            <Link
              href="/research"
              className="px-6 py-3.5 rounded-xl border border-[#283141] bg-[#080B12] hover:border-[#FF405A] text-xs font-mono text-[#A5AFBF] hover:text-white transition-colors"
            >
              Read Design Principles
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
