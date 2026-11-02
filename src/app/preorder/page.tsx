"use client";

import React, { useState } from "react";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Info,
} from "lucide-react";

// ─── Finish Options (Prototype Directions) ──────────────────────────

const FINISHES = [
  {
    id: "charcoal",
    name: "Matte Charcoal Anodized",
    color: "#080A0E",
    accent: "#D83A50",
    desc: "Low-glare deep charcoal finish with a micro-textured surface designed to blend cleanly onto developer and designer desks.",
  },
  {
    id: "graphite",
    name: "Dark Graphite Alloy",
    color: "#11151C",
    accent: "#F5F6F8",
    desc: "Machined dark alloy totem paired with a diffuse optical ring for clear, screen-free ambient mode feedback.",
  },
  {
    id: "maker",
    name: "Maker Edition / Raw Chassis",
    color: "#1B222D",
    accent: "#35C98A",
    desc: "Chassis files optimized for personal FDM printing (PLA-CF / PETG) with exposed fastener design and open hardware mounting points.",
  },
];

// ─── Pledge Tier Options (Provisional Targets) ─────────────────────

const TIERS = [
  {
    id: "maker",
    name: "Maker Digital & BOM Pack",
    price: "$15 (Est.)",
    badge: "DIY Tier",
    desc: "Complete digital package: parametric STEP/STL CAD files, 3D print slicer profiles, bill of materials, and assembly documentation.",
  },
  {
    id: "hacker",
    name: "Hacker Core Electronics",
    price: "$49 (Est.)",
    badge: "Hardware Kit",
    desc: "Custom PCB, ESP32-C3 controller module, Hall-effect sensor array, neodymium magnets, and addressable ambient LED system. You print the chassis.",
  },
  {
    id: "adopter",
    name: "Nexus Ring Desk Set",
    price: "$129 (Est.)",
    badge: "Most Popular",
    desc: "Fully assembled Nexus Ring hardware controller with weighted magnetic totem, braided USB-C cable, and Nexus Companion software access.",
    popular: true,
  },
  {
    id: "founder",
    name: "Founder's Early Batch",
    price: "$169 (Est.)",
    badge: "Limited Run",
    desc: "First validated production batch with custom serial engraving, early firmware access, and direct feedback channel with the development team.",
  },
];

export default function PreorderPage() {
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [selectedTier, setSelectedTier] = useState(2); // Adopter default
  const [email, setEmail] = useState("");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const finish = FINISHES[selectedFinish];
  const tier = TIERS[selectedTier];

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
        throw new Error(data.error || "Unable to register your interest at this moment. Please try again.");
      }

      // ONLY show success when the server has actually confirmed success
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to record your registration. Please try again.";
      setErrorMessage(msg);
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans pt-28 pb-32 overflow-x-hidden selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      {/* ════════════════ HERO SECTION ═════════════════════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
            Development Stage · Early Access Interest
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-[#1D1D1F]">
            Register your interest.
          </h1>

          <p className="text-[#6E6E73] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Nexus Ring is currently in active hardware and software development. Select your preferred tier and finish direction to help us forecast manufacturing batches and receive early notification before public availability.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E5E5E7] text-xs font-mono text-[#6E6E73]">
            <Info size={14} className="text-[#C93E50]" />
            <span>No payment is collected today. Pricing shown represents provisional targets.</span>
          </div>
        </div>
      </section>

      {/* ════════════════ CONFIGURATOR & REGISTRATION FORM ═════════════ */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── LEFT: Hardware Configurator (7 cols) ── */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Hardware Finish Direction */}
            <div className="rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#C93E50] uppercase tracking-widest block font-semibold">Step 01</span>
                  <h3 className="text-xl font-display font-bold text-[#1D1D1F]">Select Material Direction</h3>
                </div>
                <span className="text-xs font-mono text-[#6E6E73]">{finish.name}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {FINISHES.map((f, i) => {
                  const isActive = selectedFinish === i;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setSelectedFinish(i)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-150 relative overflow-hidden cursor-pointer ${
                        isActive
                          ? "border-[#1D1D1F] bg-[#FFFFFF] shadow-sm ring-1 ring-[#1D1D1F]"
                          : "border-[#E5E5E7] bg-[#F8F9FA] hover:bg-[#FFFFFF]"
                      }`}
                    >
                      <div className="w-3.5 h-3.5 rounded-full mb-3" style={{ backgroundColor: f.accent }} />
                      <p className="font-display font-bold text-xs text-[#1D1D1F] leading-snug">{f.name}</p>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-[#6E6E73] font-light leading-relaxed border-l-2 border-[#C93E50] pl-3">
                {finish.desc}
              </p>
            </div>

            {/* 2. Tier Selection */}
            <div className="rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#C93E50] uppercase tracking-widest block font-semibold">Step 02</span>
                  <h3 className="text-xl font-display font-bold text-[#1D1D1F]">Select Edition Interest</h3>
                </div>
                <span className="text-xs font-mono text-[#6E6E73]">Target Specs</span>
              </div>

              <div className="space-y-3">
                {TIERS.map((t, i) => {
                  const isActive = selectedTier === i;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTier(i)}
                      className={`w-full p-5 rounded-2xl border text-left transition-all duration-150 flex items-center justify-between gap-4 cursor-pointer ${
                        isActive
                          ? "border-[#1D1D1F] bg-[#FFFFFF] shadow-sm ring-1 ring-[#1D1D1F]"
                          : "border-[#E5E5E7] bg-[#F8F9FA] hover:bg-[#FFFFFF]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-base text-[#1D1D1F]">{t.name}</span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-[#E5E5E7] bg-[#FFFFFF] text-[#6E6E73]">
                            {t.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#6E6E73] font-light">{t.desc}</p>
                      </div>
                      <span className="text-sm font-mono font-bold text-[#1D1D1F] shrink-0">{t.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ── RIGHT: Registration Form (5 cols) ── */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-3xl border border-[#E5E5E7] bg-[#FFFFFF] p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#E5E5E7] pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#6E6E73] uppercase tracking-widest block">Selected Interest</span>
                  <p className="font-display font-bold text-lg text-[#1D1D1F]">{tier.name}</p>
                </div>
                <span className="text-base font-mono font-bold text-[#1D1D1F]">{tier.price}</span>
              </div>

              {submitted ? (
                <div className="space-y-4 p-6 rounded-2xl border border-[#34A853]/20 bg-[#E6F4EA] text-center">
                  <CheckCircle2 size={36} className="text-[#34A853] mx-auto" />
                  <h4 className="text-xl font-display font-bold text-[#1D1D1F]">Interest Registered!</h4>
                  <p className="text-xs text-[#6E6E73] font-light leading-relaxed">
                    Thank you for supporting Nexus Ring. We have added <span className="font-mono text-[#1D1D1F] font-semibold">{email}</span> to our early notification list for the <span className="text-[#1D1D1F] font-semibold">{tier.name}</span>.
                  </p>
                  <p className="text-xs text-[#6E6E73] font-light leading-relaxed">
                    You will receive direct engineering milestones and early access before public crowdfunding launch. No payment has been taken.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setEmail("");
                    }}
                    className="mt-2 px-4 py-2 rounded-full border border-[#E5E5E7] bg-[#FFFFFF] text-xs font-mono text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                  >
                    Register another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/10 text-red-700 text-xs flex items-start gap-2.5">
                      <AlertCircle size={16} className="shrink-0 text-red-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold">Submission failed</p>
                        <p className="mt-0.5 text-red-600">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="preorder-email" className="text-[11px] font-mono text-[#6E6E73] uppercase tracking-wider block mb-2 font-medium">
                      Email Address for Notification
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
                      className="w-full bg-[#FFFFFF] border border-[#E5E5E7] rounded-full px-4 py-3 text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#1D1D1F] text-sm font-sans transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full font-medium text-sm tracking-wide text-white bg-[#1D1D1F] hover:bg-[#000000] disabled:opacity-60 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Registering Interest...</span>
                      </>
                    ) : (
                      <>
                        <span>Register Interest</span>
                        <ChevronRight size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="space-y-2.5 pt-4 border-t border-[#E5E5E7] text-xs font-mono text-[#6E6E73]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#34A853]" />
                  <span>No payment or deposit required today</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-[#C93E50]" />
                  <span>Honest prototype &amp; firmware progress updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-[#86868B]" />
                  <span>Notification before public campaign opening</span>
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
