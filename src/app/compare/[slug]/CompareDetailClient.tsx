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
    <main className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      {/* ════════════════ BREADCRUMBS ═════════════════════════════ */}
      <div className="max-w-[1120px] mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-center gap-2 text-xs text-[#6E6E73]">
          <Link href="/" className="hover:text-[#1D1D1F] transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/compare" className="hover:text-[#1D1D1F] transition-colors">
            Compare
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#C93E50] font-medium truncate">VS {comparison.competitorName}</span>
        </div>
      </div>

      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1120px] mx-auto px-6 md:px-12 mb-16">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
            Technical &amp; Workflow Comparison
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05]">
            {comparison.heroTitle}
          </h1>

          <p className="text-lg sm:text-xl text-[#6E6E73] leading-relaxed">
            {comparison.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ════════════════ COMPARISON TABLE (MATRIX) ════════════════ */}
      <section className="relative max-w-[1120px] mx-auto px-6 md:px-12 mb-20">
        <div className="surface-card rounded-3xl border border-[#E5E5E7] p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E7]">
            <div>
              <span className="text-[11px] font-medium text-[#C93E50] uppercase tracking-wide block">
                Direct Feature Matrix
              </span>
              <h2 className="text-2xl font-semibold text-[#1D1D1F]">
                Nexus Ring vs. {comparison.competitorName}
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs text-[#6E6E73]">
              Hardware &amp; Software Architecture
            </span>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E5E7] text-xs text-[#6E6E73]">
                  <th className="py-4 pr-6 font-semibold uppercase tracking-wider">Criteria</th>
                  <th className="py-4 px-6 text-[#C93E50] font-semibold uppercase tracking-wider">Nexus Ring</th>
                  <th className="py-4 pl-6 text-[#6E6E73] font-semibold uppercase tracking-wider">{comparison.competitorName.toUpperCase()}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E7] text-sm">
                {comparison.comparisonMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="py-4 pr-6 font-medium text-xs text-[#1D1D1F] whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-medium text-[#1D1D1F]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#12B76A]" />
                        <span>{row.nexusRing}</span>
                      </div>
                    </td>
                    <td className="py-4 pl-6 text-[#6E6E73]">
                      <div className="flex items-start gap-2">
                        <XCircle size={16} className="shrink-0 mt-0.5 text-[#C93E50]" />
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
      <section className="relative max-w-[1120px] mx-auto px-6 md:px-12 mb-20">
        <div className="rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] p-8 md:p-12 relative overflow-hidden shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C93E50] mb-4">
            <Brain size={16} />
            <span>BEHAVIORAL PSYCHOLOGY &amp; INTERFACE DESIGN</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] tracking-tight mb-6">
            Digital Switches vs. Physical Anchors
          </h3>

          <div className="text-[#6E6E73] leading-relaxed space-y-4 text-base md:text-lg">
            <p>{comparison.cognitiveAnalysis}</p>
          </div>

          <div className="mt-8 p-4 rounded-2xl border border-[#E5E5E7] bg-[#FFFFFF] flex items-center justify-between text-xs text-[#6E6E73]">
            <span className="font-semibold uppercase tracking-wider">Designed For:</span>
            <span className="text-[#1D1D1F] font-semibold">{comparison.targetPersona}</span>
          </div>
        </div>
      </section>

      {/* ════════════════ PROS & CONS BREAKDOWN ════════════════════ */}
      <section className="relative max-w-[1120px] mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nexus Ring Advantages */}
          <div className="surface-card rounded-3xl border border-[#E5E5E7] p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#12B76A]">
              <Sparkles size={16} />
              <span>THE NEXUS RING ADVANTAGE</span>
            </div>
            <h4 className="text-2xl font-semibold text-[#1D1D1F]">
              Why Creators Choose Physical Boundaries
            </h4>
            <ul className="space-y-3">
              {comparison.nexusAdvantages.map((adv, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#1D1D1F]">
                  <CheckCircle2 size={16} className="text-[#12B76A] shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitor Pitfalls */}
          <div className="surface-card rounded-3xl border border-[#E5E5E7] p-8 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C93E50]">
              <XCircle size={16} />
              <span>LIMITATIONS OF {comparison.competitorName.toUpperCase()}</span>
            </div>
            <h4 className="text-2xl font-semibold text-[#1D1D1F]">
              Where {comparison.competitorName} Differs
            </h4>
            <ul className="space-y-3">
              {comparison.consCompetitor.map((con, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#6E6E73]">
                  <XCircle size={16} className="text-[#C93E50] shrink-0 mt-0.5" />
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
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6E6E73]">
              <HelpCircle size={14} className="text-[#C93E50]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F]">
              Nexus Ring vs. {comparison.competitorName} FAQ
            </h3>
          </div>

          <div className="space-y-3">
            {comparison.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="surface-card rounded-2xl border border-[#E5E5E7] p-6 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-semibold text-base text-[#1D1D1F] hover:text-[#6E6E73] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="font-semibold text-base text-[#C93E50]">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-sm text-[#6E6E73] leading-relaxed border-t border-[#E5E5E7] pt-4">
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
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12">
        <div className="rounded-3xl border border-[#E5E5E7] bg-[#F8F9FA] p-8 md:p-12 text-center space-y-6 shadow-sm">
          <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#C93E50]/20 bg-[#FDF2F4] text-[#C93E50]">
            The Engineering Verdict
          </span>

          <h3 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
            Physical intent. Digital workspace automation.
          </h3>

          <p className="text-[#6E6E73] text-base leading-relaxed max-w-2xl mx-auto">
            {comparison.verdict}
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
              href="/compare"
              className="btn-secondary px-6 py-3.5 text-xs font-medium"
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
