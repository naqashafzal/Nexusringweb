"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ComparisonItem } from "@/lib/comparisons-data";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  ChevronRight,
  CheckCircle2,
  XCircle,
  Zap,
  ShieldCheck,
  Brain,
  HelpCircle,
  ArrowLeft,
  Sparkles,
  Lock,
} from "lucide-react";

export default function CompareDetailClient({
  comparison,
}: {
  comparison: ComparisonItem;
}) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#030508] text-[#E2E8F0] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#00FF9D]/30 selection:text-white">
      {/* Background Dot Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#151D2A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#00FF9D]/[0.06] blur-[150px] rounded-full pointer-events-none" />

      {/* ════════════════ BREADCRUMBS ═════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/compare" className="hover:text-white transition-colors">
            Compare
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#00FF9D] truncate">VS {comparison.competitorName}</span>
        </div>
      </div>

      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/[0.06] text-[#00FF9D] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
            Technical & Cognitive Benchmark
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-[1.05]">
            {comparison.heroTitle}
          </h1>

          <p className="text-lg sm:text-2xl text-[#94A3B8] font-light leading-relaxed">
            {comparison.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ════════════════ COMPARISON TABLE (MATRIX) ════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-24">
        <div className="rounded-3xl border border-[#151D2A] bg-[#070A10] p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 border-b border-[#151D2A]">
            <div>
              <span className="text-[10px] font-mono text-[#00FF9D] uppercase tracking-widest block">
                Direct Feature Matrix
              </span>
              <h2 className="text-2xl font-display font-bold text-white">
                Nexus Ring vs. {comparison.competitorName}
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-[#64748B]">
              Verified Hardware & OS Specs
            </span>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#151D2A] text-xs font-mono text-[#64748B]">
                  <th className="py-4 pr-6 font-medium">CRITERIA</th>
                  <th className="py-4 px-6 text-[#00FF9D] font-bold">NEXUS RING</th>
                  <th className="py-4 pl-6 text-[#94A3B8] font-medium">{comparison.competitorName.toUpperCase()}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#151D2A]/60 text-sm">
                {comparison.comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#030508]/40 transition-colors">
                    <td className="py-4 pr-6 font-mono text-xs text-[#CBD5E1] whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-medium text-white">
                      <div className="flex items-start gap-2 text-[#00FF9D]">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                        <span>{row.nexusRing}</span>
                      </div>
                    </td>
                    <td className="py-4 pl-6 text-[#94A3B8]">
                      <div className="flex items-start gap-2">
                        <XCircle size={16} className="shrink-0 mt-0.5 text-[#FF5F56]" />
                        <span>{row.competitor}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════ COGNITIVE SCIENCE ANALYSIS ═══════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-24">
        <div className="rounded-3xl border border-[#00FF9D]/30 bg-[#070A10] p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,255,157,0.08)]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00FF9D] mb-4">
            <Brain size={16} />
            <span>COGNITIVE NEUROSCIENCE BREAKDOWN</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-6">
            Why Willpower Fails: Ego Depletion vs. Spatial Anchors
          </h3>

          <div className="prose prose-invert max-w-none text-[#CBD5E1] font-light leading-relaxed space-y-4 text-base md:text-lg">
            <p>{comparison.cognitiveAnalysis}</p>
          </div>

          <div className="mt-8 p-4 rounded-2xl border border-[#151D2A] bg-[#030508] flex items-center justify-between text-xs font-mono text-[#64748B]">
            <span>PRIMARY BENEFICIARY:</span>
            <span className="text-[#00FF9D] font-bold">{comparison.targetPersona}</span>
          </div>
        </div>
      </section>

      {/* ════════════════ PROS & CONS BREAKDOWN ════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nexus Ring Advantages */}
          <div className="rounded-3xl border border-[#00FF9D]/30 bg-[#070A10] p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00FF9D]">
              <Sparkles size={16} />
              <span>THE NEXUS RING EDGE</span>
            </div>
            <h4 className="text-2xl font-display font-bold text-white">
              Why Professionals Choose Nexus Ring
            </h4>
            <ul className="space-y-3">
              {comparison.nexusAdvantages.map((adv, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#CBD5E1] font-light">
                  <CheckCircle2 size={16} className="text-[#00FF9D] shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitor Pitfalls */}
          <div className="rounded-3xl border border-[#151D2A] bg-[#070A10] p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF5F56]">
              <XCircle size={16} />
              <span>LIMITATIONS OF {comparison.competitorName.toUpperCase()}</span>
            </div>
            <h4 className="text-2xl font-display font-bold text-white">
              Where {comparison.competitorName} Falls Short
            </h4>
            <ul className="space-y-3">
              {comparison.consCompetitor.map((con, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#94A3B8] font-light">
                  <XCircle size={16} className="text-[#FF5F56] shrink-0 mt-0.5" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════ FAQ SECTION ══════════════════════════════ */}
      {comparison.faqs.length > 0 && (
        <section className="relative max-w-[900px] mx-auto px-6 md:px-12 mb-24">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00E5FF]">
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-3xl font-display font-bold text-white">
              Nexus Ring vs. {comparison.competitorName} FAQ
            </h3>
          </div>

          <div className="space-y-4">
            {comparison.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#151D2A] bg-[#070A10] p-6 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-display font-bold text-base text-white hover:text-[#00FF9D] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="font-mono text-xs text-[#00FF9D]">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-sm text-[#94A3B8] font-light leading-relaxed border-t border-[#151D2A] pt-4">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ════════════════ FINAL VERDICT & CTA ══════════════════════ */}
      <section className="relative max-w-[1000px] mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-[#00FF9D]/40 bg-gradient-to-b from-[#070A10] to-[#030508] p-8 md:p-12 text-center space-y-6 shadow-[0_0_80px_rgba(0,255,157,0.15)]">
          <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-[#00FF9D]/30 bg-[#00FF9D]/10 text-[#00FF9D]">
            The Engineering Verdict
          </span>

          <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
            Stop Subscribing to Screen Pixels.
          </h3>

          <p className="text-[#CBD5E1] text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {comparison.verdict}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-4 rounded-xl bg-[#00FF9D] hover:bg-[#00ffaa] text-[#030508] font-bold text-sm tracking-wide transition-all shadow-[0_0_35px_rgba(0,255,157,0.4)] flex items-center gap-2 cursor-pointer"
            >
              Lock In Early Adopter Spot <ChevronRight size={16} />
            </button>
            <Link
              href="/compare"
              className="px-6 py-4 rounded-xl border border-[#151D2A] bg-[#030508] hover:border-[#00FF9D]/50 text-xs font-mono text-[#94A3B8] hover:text-white transition-colors"
            >
              Explore All Comparisons
            </Link>
          </div>
        </div>
      </section>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        tierName={`Priority Waitlist (VS ${comparison.competitorName})`}
      />
    </main>
  );
}
