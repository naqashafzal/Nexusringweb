"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ComparisonItem } from "@/lib/comparisons-data";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  ChevronRight,
  CheckCircle2,
  XCircle,
  Brain,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export default function CompareDetailClient({
  comparison,
}: {
  comparison: ComparisonItem;
}) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#080B12] text-[#F8FAFC] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#FF405A]/30 selection:text-white">
      {/* Background Dot Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#283141_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* ════════════════ BREADCRUMBS ═════════════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-[#A5AFBF]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/compare" className="hover:text-white transition-colors">
            Compare
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#FF405A] truncate">VS {comparison.competitorName}</span>
        </div>
      </div>

      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-16">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#283141] bg-[#101723] text-[#A5AFBF] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF405A]" />
            Technical &amp; Workflow Comparison
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white leading-[1.05]">
            {comparison.heroTitle}
          </h1>

          <p className="text-lg sm:text-xl text-[#A5AFBF] font-light leading-relaxed">
            {comparison.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ════════════════ COMPARISON TABLE (MATRIX) ════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-20">
        <div className="rounded-3xl border border-[#283141] bg-[#101723] p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 border-b border-[#283141]">
            <div>
              <span className="text-[10px] font-mono text-[#FF405A] uppercase tracking-widest block">
                Direct Feature Matrix
              </span>
              <h2 className="text-2xl font-display font-bold text-white">
                Nexus Ring vs. {comparison.competitorName}
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-[#A5AFBF]">
              Hardware &amp; Software Architecture
            </span>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#283141] text-xs font-mono text-[#A5AFBF]">
                  <th className="py-4 pr-6 font-medium">CRITERIA</th>
                  <th className="py-4 px-6 text-[#FF405A] font-bold">NEXUS RING</th>
                  <th className="py-4 pl-6 text-[#A5AFBF] font-medium">{comparison.competitorName.toUpperCase()}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#283141] text-sm">
                {comparison.comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#172130] transition-colors">
                    <td className="py-4 pr-6 font-mono text-xs text-white whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-medium text-white">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#35C98A]" />
                        <span>{row.nexusRing}</span>
                      </div>
                    </td>
                    <td className="py-4 pl-6 text-[#A5AFBF]">
                      <div className="flex items-start gap-2">
                        <XCircle size={16} className="shrink-0 mt-0.5 text-[#FF405A]" />
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
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-20">
        <div className="rounded-3xl border border-[#283141] bg-[#101723] p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF405A] mb-4">
            <Brain size={16} />
            <span>BEHAVIORAL PSYCHOLOGY &amp; INTERFACE DESIGN</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-6">
            Digital Switches vs. Physical Anchors
          </h3>

          <div className="text-[#A5AFBF] font-light leading-relaxed space-y-4 text-base md:text-lg">
            <p>{comparison.cognitiveAnalysis}</p>
          </div>

          <div className="mt-8 p-4 rounded-2xl border border-[#283141] bg-[#080B12] flex items-center justify-between text-xs font-mono text-[#A5AFBF]">
            <span>DESIGNED FOR:</span>
            <span className="text-white font-bold">{comparison.targetPersona}</span>
          </div>
        </div>
      </section>

      {/* ════════════════ PROS & CONS BREAKDOWN ════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nexus Ring Advantages */}
          <div className="rounded-3xl border border-[#283141] bg-[#101723] p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#35C98A]">
              <Sparkles size={16} />
              <span>THE NEXUS RING ADVANTAGE</span>
            </div>
            <h4 className="text-2xl font-display font-bold text-white">
              Why Creators Choose Physical Boundaries
            </h4>
            <ul className="space-y-3">
              {comparison.nexusAdvantages.map((adv, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#F8FAFC] font-light">
                  <CheckCircle2 size={16} className="text-[#35C98A] shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitor Pitfalls */}
          <div className="rounded-3xl border border-[#283141] bg-[#101723] p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF405A]">
              <XCircle size={16} />
              <span>LIMITATIONS OF {comparison.competitorName.toUpperCase()}</span>
            </div>
            <h4 className="text-2xl font-display font-bold text-white">
              Where {comparison.competitorName} Differs
            </h4>
            <ul className="space-y-3">
              {comparison.consCompetitor.map((con, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#A5AFBF] font-light">
                  <XCircle size={16} className="text-[#FF405A] shrink-0 mt-0.5" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════ FAQ SECTION ══════════════════════════════ */}
      {comparison.faqs.length > 0 && (
        <section className="relative max-w-[900px] mx-auto px-6 md:px-12 mb-20">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A5AFBF]">
              <HelpCircle size={14} className="text-[#FF405A]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Nexus Ring vs. {comparison.competitorName} FAQ
            </h3>
          </div>

          <div className="space-y-3">
            {comparison.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#283141] bg-[#101723] p-6 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-display font-bold text-base text-white hover:text-[#A5AFBF] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="font-mono text-xs text-[#FF405A]">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-sm text-[#A5AFBF] font-light leading-relaxed border-t border-[#283141] pt-4">
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
        <div className="rounded-3xl border border-[#283141] bg-[#101723] p-8 md:p-12 text-center space-y-6 shadow-2xl">
          <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-[#FF405A]/30 bg-[#FF405A]/10 text-[#FF405A]">
            The Engineering Verdict
          </span>

          <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight">
            Physical Intent. Digital Workspace Automation.
          </h3>

          <p className="text-[#A5AFBF] text-base font-light leading-relaxed max-w-2xl mx-auto">
            {comparison.verdict}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="px-8 py-4 rounded-xl bg-[#FF405A] hover:bg-[#e0354e] text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(255,64,90,0.35)] flex items-center gap-2 cursor-pointer"
            >
              <span>Join Early Access Waitlist</span> <ChevronRight size={16} />
            </button>
            <Link
              href="/compare"
              className="px-6 py-4 rounded-xl border border-[#283141] bg-[#080B12] hover:border-[#FF405A] text-xs font-mono text-[#A5AFBF] hover:text-white transition-colors"
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
