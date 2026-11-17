"use client";

import React, { useState } from "react";
import Image from "next/image";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Info,
  ArrowUpRight,
} from "lucide-react";
import {
  KICKSTARTER_FINISHES,
  KICKSTARTER_TIERS,
  KICKSTARTER_URL,
} from "@/lib/kickstarter-data";

export default function PreorderPage() {
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [selectedTier, setSelectedTier] = useState(2); // $109 Kickstarter Special (Featured) default
  const [email, setEmail] = useState("");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const finish = KICKSTARTER_FINISHES[selectedFinish];
  const tier = KICKSTARTER_TIERS[selectedTier];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "early_access",
          email: email.trim(),
          tier: tier.name,
          finish: finish.name,
          price: tier.price,
          source: "/preorder",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to register your email at this moment. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to record your registration. Please try again.";
      setErrorMessage(msg);
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* HERO SECTION */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#35C98A]/40 bg-[#35C98A]/10 text-[#35C98A] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C98A]" />
            Kickstarter First Production Run · Est. Delivery Jul 2027
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter leading-[1.0] text-white">
            CHOOSE YOUR<br />
            <span className="text-[#D83A50]">NEXUS RING REWARD.</span>
          </h1>

          <p className="text-[#A5AFBD] text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Compare all four official Kickstarter reward tiers and choose between{" "}
            <strong className="text-white">Day (Silver)</strong> or{" "}
            <strong className="text-white">Night (Obsidian Black)</strong> metal-body finishes. Every tier includes lifetime core desktop (Windows, macOS, Linux) and mobile (Android, iOS) apps with zero mandatory subscription.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1B222D] border border-[#303A48] text-xs font-mono text-[#A5AFBD]">
            <Info size={14} className="text-[#D83A50]" />
            <span>
              Finish is selected in the post-campaign survey. Worldwide shipping &amp; taxes are collected via the pledge manager.
            </span>
          </div>
        </div>
      </section>

      {/* CONFIGURATOR & PLEDGE PANEL */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Configurator (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Finish Selection */}
            <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest block">
                    Step 01
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">
                    Choose Hardware Finish
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#A5AFBD]">{finish.name}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {KICKSTARTER_FINISHES.map((f, i) => {
                  const isActive = selectedFinish === i;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setSelectedFinish(i)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden cursor-pointer ${
                        isActive
                          ? "border-[#D83A50] bg-[#1B222D] shadow-[0_0_20px_rgba(255,64,90,0.15)]"
                          : "border-[#303A48] bg-[#080A0E] hover:border-[#A5AFBD]/40"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-4 h-4 rounded-full border border-white/20"
                          style={{ backgroundColor: f.color }}
                        />
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: f.accent }}
                        />
                      </div>
                      <p className="font-display font-bold text-xs text-white leading-snug">
                        {f.name}
                      </p>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-[#A5AFBD] font-light leading-relaxed border-l-2 border-[#D83A50] pl-3">
                {finish.desc}
              </p>
            </div>

            {/* 2. Official Kickstarter Tier Selection */}
            <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest block">
                    Step 02
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">
                    Select Kickstarter Reward Tier
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#35C98A]">Official Pricing</span>
              </div>

              <div className="space-y-3">
                {KICKSTARTER_TIERS.map((t, i) => {
                  const isActive = selectedTier === i;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTier(i)}
                      className={`w-full p-5 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                        isActive
                          ? "border-[#D83A50] bg-[#1B222D] shadow-[0_0_20px_rgba(255,64,90,0.1)]"
                          : "border-[#303A48] bg-[#080A0E] hover:border-[#A5AFBD]/40"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-display font-bold text-base text-white">
                            {t.name}
                          </span>
                          <span
                            className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                              t.featured
                                ? "border-[#D83A50]/40 bg-[#D83A50]/15 text-[#D83A50]"
                                : "border-[#303A48] bg-[#11151C] text-[#A5AFBD]"
                            }`}
                          >
                            {t.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#A5AFBD] font-light">{t.description}</p>
                        <p className="text-[10px] font-mono text-[#778292] pt-1">
                          {t.limit} · Est. Delivery {t.delivery} · {t.shipping}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-lg font-mono font-bold text-[#D83A50] block">
                          {t.price}
                        </span>
                        {t.regularPrice && (
                          <span className="text-[10px] font-mono text-[#778292] line-through">
                            {t.regularPrice}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Summary, Direct Kickstarter Link & Update Signup (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="rounded-2xl overflow-hidden border border-[#303A48] bg-black">
                <Image
                  src={tier.image}
                  alt={tier.name}
                  width={680}
                  height={507}
                  className="w-full h-auto block"
                />
              </div>

              <div className="flex items-center justify-between border-b border-[#303A48] pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#A5AFBD] uppercase tracking-widest block">
                    Selected Reward · {finish.name}
                  </span>
                  <p className="font-display font-bold text-lg text-white">{tier.name}</p>
                </div>
                <span className="text-2xl font-mono font-bold text-[#D83A50]">{tier.price}</span>
              </div>

              <ul className="space-y-1.5 text-xs font-mono text-[#F5F6F8]">
                {tier.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#35C98A] shrink-0 mt-0.5" />
                    <span>
                      {item.qty > 1 ? `${item.qty}× ` : ""}
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Direct Kickstarter CTA */}
              <a
                href={KICKSTARTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-bold text-sm tracking-wide text-white bg-[#D83A50] hover:bg-[#EB5268] transition-all duration-200 shadow-[0_0_25px_rgba(255,64,90,0.35)] flex items-center justify-center gap-2"
              >
                <span>Back {tier.price} Tier on Kickstarter</span>
                <ArrowUpRight size={16} />
              </a>

              <div className="border-t border-[#303A48] pt-5">
                {submitted ? (
                  <div className="space-y-4 p-5 rounded-2xl border border-[#35C98A]/30 bg-[#35C98A]/10 text-center">
                    <CheckCircle2 size={32} className="text-[#35C98A] mx-auto" />
                    <h4 className="text-lg font-display font-bold text-white">
                      Campaign Alerts Activated!
                    </h4>
                    <p className="text-xs text-[#A5AFBD] font-light leading-relaxed">
                      We added <span className="font-mono text-white font-semibold">{email}</span> for updates on{" "}
                      <span className="text-white font-semibold">{tier.name}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setEmail("");
                      }}
                      className="mt-2 px-4 py-2 rounded-xl border border-[#303A48] bg-[#1B222D] text-xs font-mono text-white hover:border-[#A5AFBD] transition-colors cursor-pointer"
                    >
                      Register another email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {errorMessage && (
                      <div className="p-3 rounded-xl border border-red-500/40 bg-red-500/10 text-red-200 text-xs flex items-start gap-2">
                        <AlertCircle size={15} className="shrink-0 text-red-400 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <label
                      htmlFor="preorder-email"
                      className="text-[11px] font-mono text-[#A5AFBD] uppercase tracking-wider block"
                    >
                      Or get Kickstarter &amp; production updates by email
                    </label>
                    <input
                      id="preorder-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage("");
                      }}
                      placeholder="you@domain.com"
                      required
                      className="w-full bg-[#080A0E] border border-[#303A48] rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#D83A50] text-sm font-mono transition-colors"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl font-mono font-bold text-xs tracking-wide text-white bg-[#1B222D] border border-[#303A48] hover:border-[#D83A50] disabled:opacity-60 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Saving..." : (
                        <>
                          <span>Notify Me of Production Milestones</span>
                          <ChevronRight size={14} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-2 pt-3 border-t border-[#303A48] text-xs font-mono text-[#A5AFBD]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#35C98A]" />
                  <span>Lifetime core desktop &amp; mobile apps · Zero subscription</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-[#D83A50]" />
                  <span>Built &amp; tested hardware · Est. delivery Jul 2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-[#A5AFBD]" />
                  <span>Metal-body USB-C dock · No lithium-ion battery degradation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        tierName={`${tier.name} (${finish.name})`}
        initialEmail={email}
        initialSubmitted={submitted}
      />
    </main>
  );
}
