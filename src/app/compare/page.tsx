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
    <main className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative page-container mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-medium tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
          Product Architecture Comparison
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] max-w-4xl mx-auto">
          Why physical intent differs from software alone.
        </h1>

        <p className="mt-6 text-[#6E6E73] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Software blockers live on the same screen that distracts you. Compare the Nexus Ring physical approach against conventional blockers and desk accessories.
        </p>
      </section>

      {/* ════════════════ COMPARISON CARDS GRID ════════════════════ */}
      <section className="relative page-container mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisonList.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="surface-card rounded-3xl border border-[#E5E5E7] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#1D1D1F]/30 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full border border-[#C93E50]/20 bg-[#FDF2F4] text-[#C93E50]">
                    VS. {item.competitorName.toUpperCase()}
                  </span>
                  <span className="text-xs text-[#6E6E73]">{item.competitorType}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-[#1D1D1F] group-hover:text-[#C93E50] transition-colors">
                    {item.heroTitle}
                  </h3>
                  <p className="text-sm text-[#6E6E73] leading-relaxed">
                    {item.heroSubtitle}
                  </p>
                </div>

                {/* Quick Contrast Snapshot */}
                <div className="space-y-2.5 pt-4 border-t border-[#E5E5E7] text-xs">
                  <div className="flex items-start gap-2.5 text-[#1D1D1F]">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#12B76A]" />
                    <span className="font-medium">Nexus Ring: {item.nexusAdvantages[0]}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[#6E6E73]">
                    <XCircle size={16} className="shrink-0 mt-0.5 text-[#C93E50]" />
                    <span>{item.competitorName}: {item.consCompetitor[0]}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#E5E5E7] flex items-center justify-between">
                <Link
                  href={`/compare/${item.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#C93E50] hover:text-[#A92F40] transition-colors group/link"
                >
                  <span>Read Full Comparison</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] text-[#6E6E73]">Analysis</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════ COGNITIVE SCIENCE MANIFESTO ══════════════ */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 mb-28">
        <div className="rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] border border-[#C93E50]/20 text-[#C93E50] flex items-center justify-center mx-auto">
            <Sparkles size={22} />
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
            Physical anchors for cognitive transitions.
          </h3>

          <p className="text-[#6E6E73] text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Digital app blockers ask an already-distracted mind to voluntarily navigate software menus to enforce discipline. Nexus Ring provides a physical boundary: moving the totem shifts your workspace tools and locks in your decision.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="btn-accent px-8 py-3.5 cursor-pointer flex items-center gap-2"
            >
              <span>Join Early Access Waitlist</span> <ChevronRight size={16} />
            </button>
            <Link
              href="/research"
              className="btn-secondary px-6 py-3.5 text-xs font-medium"
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
