"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Leaf,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  KICKSTARTER_CAMPAIGN,
  KICKSTARTER_COMPATIBILITY,
  KICKSTARTER_ENVIRONMENTAL,
  KICKSTARTER_FAQS,
  KICKSTARTER_MODES,
  KICKSTARTER_RISKS,
  KICKSTARTER_TIERS,
  KICKSTARTER_TOOL_GROUPS,
  KICKSTARTER_URL,
} from "@/lib/kickstarter-data";

export default function CampaignPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>("Nexus + Apps ($109)");

  const handleNotifyTier = (tierName: string) => {
    setSelectedTier(tierName);
    setShowModal(true);
  };

  return (
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#D83A50]/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. KICKSTARTER HERO */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#35C98A]/40 bg-[#35C98A]/10 text-[#35C98A] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C98A] animate-pulse" />
            Official Kickstarter Campaign · {KICKSTARTER_CAMPAIGN.category} · {KICKSTARTER_CAMPAIGN.location}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.95] text-white uppercase">
            IT&apos;S NOT JUST A DEVICE.<br />
            <span className="text-[#D83A50]">IT&apos;S A SYSTEM BUILT TO FIGHT FOR YOUR FREEDOM.</span>
          </h1>

          <p className="text-[#A5AFBD] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {KICKSTARTER_CAMPAIGN.blurb}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2 text-left font-mono">
            <div className="p-3.5 rounded-2xl border border-[#303A48] bg-[#11151C]">
              <span className="text-[10px] text-[#778292] uppercase block">Funding Goal</span>
              <span className="text-sm font-bold text-white">{KICKSTARTER_CAMPAIGN.fundingGoal}</span>
            </div>
            <div className="p-3.5 rounded-2xl border border-[#303A48] bg-[#11151C]">
              <span className="text-[10px] text-[#778292] uppercase block">Early Bird</span>
              <span className="text-sm font-bold text-[#35C98A]">$89 (49/50 Left)</span>
            </div>
            <div className="p-3.5 rounded-2xl border border-[#303A48] bg-[#11151C]">
              <span className="text-[10px] text-[#778292] uppercase block">Back From</span>
              <span className="text-sm font-bold text-white">$5 Supporter · $39 Maker</span>
            </div>
            <div className="p-3.5 rounded-2xl border border-[#303A48] bg-[#11151C]">
              <span className="text-[10px] text-[#778292] uppercase block">Subscriptions</span>
              <span className="text-sm font-bold text-[#D83A50]">$0 Forever</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={KICKSTARTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold text-sm tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(216,58,80,0.35)] flex items-center gap-2"
            >
              <span>Back on Kickstarter</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#tiers"
              className="px-8 py-4 rounded-xl border border-[#303A48] bg-[#11151C] text-white hover:border-[#D83A50] transition-all font-mono text-sm flex items-center gap-2"
            >
              <span>See All 5 Reward Tiers</span>
              <ChevronRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Official Kickstarter Hero Visual */}
        <div className="mt-12 rounded-3xl border border-[#303A48] bg-[#11151C] p-3 sm:p-4 shadow-2xl">
          <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-[#303A48]/60">
            <Image
              src="/images/kickstarter/ks-fight-for-freedom.jpg"
              alt="It's not just a device. It's a system built to fight for your freedom — Nexus Ring"
              width={1024}
              height={576}
              priority
              className="w-full h-auto block rounded-xl"
            />
          </div>
          <div className="px-3 pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#A5AFBD]">
            <span className="text-white font-bold">LESS SCROLL. MORE LIFE. · DAY (SILVER) &amp; NIGHT (OBSIDIAN BLACK)</span>
            <span>PC · MAC · LINUX · ANDROID · IOS · ZERO SUBSCRIPTIONS</span>
          </div>
        </div>
      </section>

      {/* 2. YOU'RE NOT LAZY — BREAK OUT OF THE DISTRACTION MATRIX */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-24 space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow block">Time to Break Out of the Distraction Matrix</span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
            You&apos;re not lazy. The system is designed to steal your focus.
          </h2>
          <p className="text-base text-[#A5AFBD] leading-relaxed">
            How many times have you sat down to work, study, or build something that actually matters — and five minutes later, one notification or one YouTube Short stole two hours of your life? You&apos;re trying to fight trillion-dollar algorithms using focus apps that live{" "}
            <strong className="text-white">inside the exact screen trapping you</strong>.
          </p>
          <p className="text-base text-[#A5AFBD] leading-relaxed">
            <strong className="text-white">Nexus Ring</strong> moves that decision off your screen onto your desk. One physical move opens your work tools, strips away Shorts and endless scroll traps (while keeping direct tutorials and search working), and syncs focus across your computer and phone —{" "}
            <strong className="text-white">with zero monthly subscriptions, ever.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
            <div className="rounded-2xl overflow-hidden border border-[#303A48]/60 bg-black">
              <Image
                src="/images/kickstarter/ks-less-scroll-more-life.jpg"
                alt="Nexus Ring — Less Scroll. More Life. Day Silver and Night Obsidian Black"
                width={1024}
                height={576}
                className="w-full h-auto block"
              />
            </div>
            <p className="text-xs text-[#A5AFBD] font-mono">
              Day (Silver) &amp; Night (Obsidian Black) — Less Scroll. More Life.
            </p>
          </div>

          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
            <div className="rounded-2xl overflow-hidden border border-[#303A48]/60 bg-black">
              <Image
                src="/images/infographic-trillion-dollar-algorithm.jpg"
                alt="You Can't Fight a Trillion-Dollar Algorithm With Willpower"
                width={1200}
                height={896}
                className="w-full h-auto block"
              />
            </div>
            <p className="text-xs text-[#A5AFBD] font-mono">
              You can&apos;t fight trillion-dollar algorithms with willpower alone — give your focus a physical switch.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CHOOSE. DOCK. WORK. + LIVE PROTOTYPE & APP RECORDINGS */}
      <section id="demo" className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-24 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="eyebrow block">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Choose. Dock. Work.
            </h2>
            <ul className="space-y-4 text-sm text-[#A5AFBD] leading-relaxed">
              <li className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C]">
                <strong className="text-white">Choose your workspace.</strong> Set the apps, websites, and notification settings for each mode.
              </li>
              <li className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C]">
                <strong className="text-white">Place the totem.</strong> Nexus opens your selected tools and applies your focus rules. The light shows your active mode.
              </li>
              <li className="p-4 rounded-2xl border border-[#303A48] bg-[#11151C]">
                <strong className="text-white">Lift it when you finish.</strong> Undocked mode ends the focus configuration.
              </li>
            </ul>
            <p className="text-xs text-[#A5AFBD] leading-relaxed border-l-2 border-[#D83A50] pl-4">
              The totem stays in view while you work. Repeating the same small movement gives each session a familiar beginning—and makes changing your intention a{" "}
              <strong className="text-white">deliberate action</strong>.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 shadow-2xl space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#A5AFBD]">
                <span className="text-[#35C98A] font-bold">● REAL PROTOTYPE FOOTAGE</span>
                <span>DOCK TO CLEAR DIGITAL NOISE</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#303A48]/60 bg-black">
                <Image
                  src="/images/kickstarter/ks-dock-totem-clear-noise.gif"
                  alt="Dock the magnetic totem to clear digital noise and start your configured focus session"
                  width={680}
                  height={383}
                  unoptimized
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-xs text-[#A5AFBD]">
                Dock the magnetic totem to clear digital noise and start your configured focus session.
              </p>
            </div>
          </div>
        </div>

        {/* One Desk. Four Ways to Take Control. */}
        <div className="pt-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="eyebrow block">Four Modes</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              One desk. Four ways to take control.
            </h2>
            <p className="text-sm text-[#A5AFBD] leading-relaxed">
              Build a workspace around your actual work. Open your editor for writing, gather your creative tools, or prepare a call. Configure apps to launch, close, or remain available, with supported{" "}
              <strong className="text-white">website, notification, audio, theme, and wallpaper controls</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {KICKSTARTER_MODES.map((m) => (
              <div key={m.name} className="p-5 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: m.color }} />
                  <strong className="text-white font-display text-base">{m.name}</strong>
                </div>
                <p className="text-xs text-[#A5AFBD] leading-relaxed">{m.summary}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 shadow-2xl">
            <Image
              src="/images/kickstarter/ks-four-modes-rules.png"
              alt="Four Modes. Your Rules — Deep Work, Creative, Meeting, Break"
              width={680}
              height={383}
              className="w-full h-auto block rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
              <span className="text-[10px] font-mono text-[#35C98A] font-bold uppercase block">
                ● REAL PROTOTYPE + REAL WINDOWS APP RECORDING
              </span>
              <div className="rounded-2xl overflow-hidden border border-[#303A48]/60 bg-black">
                <Image
                  src="/images/kickstarter/ks-live-modes-demo.gif"
                  alt="Switching live between Deep Work, Creative, Meeting, and Break modes"
                  width={680}
                  height={383}
                  unoptimized
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-xs text-[#A5AFBD]">
                Switching live between Deep Work, Creative, Meeting, and Break modes.
              </p>
            </div>

            <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
              <span className="text-[10px] font-mono text-[#35C98A] font-bold uppercase block">
                ● REAL WINDOWS APP RECORDING
              </span>
              <div className="rounded-2xl overflow-hidden border border-[#303A48]/60 bg-black">
                <Image
                  src="/images/kickstarter/ks-live-deep-work-app.gif"
                  alt="Docking into Deep Work blocks distracting websites, launches work tools, and starts a Nexus Flow sprint"
                  width={680}
                  height={383}
                  unoptimized
                  className="w-full h-auto block"
                />
              </div>
              <p className="text-xs text-[#A5AFBD]">
                Docking into Deep Work blocks distracting websites, launches your work tools, and starts a Nexus Flow sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DISTRACTION CONTROL, PHONE SYNC & NEXUS FLOW */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-24 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="eyebrow block">Purposeful Browsing &amp; Mobile Sync</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Keep the tutorial. Lose the rabbit hole.
            </h2>
            <p className="text-sm text-[#A5AFBD] leading-relaxed">
              YouTube can be useful without its recommendation feed. The{" "}
              <strong className="text-white">Nexus browser extension</strong> hides{" "}
              <strong className="text-white">supported recommendation and Shorts</strong> surfaces while keeping search and direct videos available. Supported{" "}
              <strong className="text-white">Reddit and X feed filters</strong> offer the same purposeful approach.
            </p>
            <p className="text-sm text-[#A5AFBD] leading-relaxed">
              The mobile companion (<strong className="text-white">Android and iOS</strong>) brings the session to your phone through{" "}
              <strong className="text-white">local pairing</strong>, an{" "}
              <strong className="text-white">approved-app launcher</strong>, and permission-based{" "}
              <strong className="text-white">focus shielding and Do Not Disturb</strong>.
            </p>
          </div>
          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
            <span className="text-[10px] font-mono text-[#35C98A] font-bold uppercase block">
              ● REAL PROTOTYPE · PHONE &amp; DESK SYNC
            </span>
            <div className="rounded-2xl overflow-hidden border border-[#303A48]/60 bg-black">
              <Image
                src="/images/kickstarter/ks-live-phone-sync.gif"
                alt="Docking the totem silences distracting social and video feeds across your paired phone and desk"
                width={680}
                height={383}
                unoptimized
                className="w-full h-auto block"
              />
            </div>
            <p className="text-xs text-[#A5AFBD]">
              Docking the totem silences distracting social and video feeds across your paired phone and desk.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 space-y-3 order-2 lg:order-1">
            <span className="text-[10px] font-mono text-[#35C98A] font-bold uppercase block">
              ● REAL APP RECORDING · NEXUS SHIELD &amp; NEXUS FLOW
            </span>
            <div className="rounded-2xl overflow-hidden border border-[#303A48]/60 bg-black">
              <Image
                src="/images/kickstarter/ks-live-cad-workflow.gif"
                alt="Real App Recording — Nexus Shield and Nexus Flow paired with a 3D CAD workflow"
                width={680}
                height={383}
                unoptimized
                className="w-full h-auto block"
              />
            </div>
            <p className="text-xs text-[#A5AFBD]">
              Nexus Shield and Nexus Flow paired with a real 3D CAD workflow.
            </p>
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <span className="eyebrow block">Nexus Flow</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              A clear next step.
            </h2>
            <p className="text-sm text-[#A5AFBD] leading-relaxed">
              A blocker cannot choose your next step.{" "}
              <strong className="text-white">Nexus Flow</strong> gives your focus a destination: break projects into tasks, choose one, and anchor it to a{" "}
              <strong className="text-white">timed sprint</strong>. Capture stray thoughts in the scratchpad, keep notes close, and review where your time went.
            </p>
            <p className="text-sm text-[#A5AFBD] leading-relaxed">
              Your core tasks and session records{" "}
              <strong className="text-white">stay local</strong>. All rewards include ongoing access to the core Nexus apps{" "}
              <strong className="text-white">without a mandatory Nexus subscription</strong>.{" "}
              <strong className="text-white">Optional AI</strong> can help with task breakdowns and session summaries; external providers may charge separately.
            </p>
          </div>
        </div>
      </section>

      {/* 5. REWARD TIERS (EXACT 4 KICKSTARTER TIERS) */}
      <section id="tiers" className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28">
        <div className="text-center mb-14 space-y-3">
          <span className="eyebrow block">Kickstarter Rewards</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white">
            Choose your Nexus Ring.
          </h2>
          <p className="text-sm text-[#A5AFBD] max-w-2xl mx-auto">
            Every reward tier includes lifetime core access to the desktop (Windows, macOS, Linux) and mobile (Android, iOS) companion apps with zero mandatory subscription fees. Estimated delivery: <strong className="text-white">July 2027</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KICKSTARTER_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden ${
                tier.featured
                  ? "border-[#D83A50]/60 bg-[#1B222D] shadow-[0_0_35px_rgba(216,58,80,0.16)]"
                  : "border-[#303A48] bg-[#11151C]"
              }`}
            >
              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden border border-[#303A48]/70 bg-black">
                  <Image
                    src={tier.image}
                    alt={`${tier.price} ${tier.name}`}
                    width={680}
                    height={507}
                    className="w-full h-auto block"
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`inline-block text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded border mb-2 ${
                        tier.featured
                          ? "bg-[#D83A50]/15 text-[#D83A50] border-[#D83A50]/40"
                          : "bg-[#080A0E] text-[#A5AFBD] border-[#303A48]"
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white">{tier.name}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-3xl font-display font-black text-white">{tier.price}</div>
                    {tier.regularPrice && (
                      <div className="text-xs font-mono text-[#778292] line-through">
                        Reg. {tier.regularPrice}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-xs text-[#A5AFBD] leading-relaxed font-light">
                  {tier.description}
                </p>

                <div className="space-y-2 border-t border-[#303A48] pt-4">
                  <span className="text-[10px] font-mono text-[#778292] uppercase tracking-wider block">
                    Included Items
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#F5F6F8] font-mono">
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
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#A5AFBD] bg-[#080A0E] p-3 rounded-xl border border-[#303A48]">
                  <div>
                    <span className="text-[#778292] block text-[10px]">EST. DELIVERY</span>
                    <span className="text-white font-semibold">{tier.delivery}</span>
                  </div>
                  <div>
                    <span className="text-[#778292] block text-[10px]">AVAILABILITY</span>
                    <span className="text-white font-semibold">{tier.limit}</span>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-[#303A48]/60">
                    <span className="text-[#778292] block text-[10px]">FULFILLMENT</span>
                    <span>{tier.shipping}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={KICKSTARTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-3.5 px-5 rounded-xl text-xs font-mono font-bold text-center transition-colors flex items-center justify-center gap-2 ${
                    tier.featured
                      ? "bg-[#D83A50] text-white hover:bg-[#EB5268]"
                      : "bg-[#1B222D] border border-[#303A48] text-white hover:border-[#D83A50]"
                  }`}
                >
                  <span>Pledge {tier.price} on Kickstarter</span>
                  <ArrowUpRight size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => handleNotifyTier(`${tier.name} (${tier.price})`)}
                  className="py-3.5 px-4 rounded-xl border border-[#303A48] bg-[#080A0E] text-[#A5AFBD] hover:text-white hover:border-[#A5AFBD] text-xs font-mono transition-colors cursor-pointer"
                >
                  Get Updates
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NEXT: YOUR DESK (PRODUCTION RUN + HARDWARE PROOF) */}
      <section id="roadmap" className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-28 space-y-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#303A48] bg-[#11151C] text-[11px] font-mono text-[#35C98A] uppercase">
            <Wrench size={13} />
            <span>Built &amp; Tested · First Production Run</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Next: your desk.
          </h2>
          <p className="text-sm text-[#A5AFBD] leading-relaxed">
            Nexus Ring is <strong className="text-white">built and tested</strong>. We&apos;re launching our{" "}
            <strong className="text-white">first production run</strong>. Choose the assembled device or build your own with the Maker Kit. The production run covers{" "}
            <strong className="text-white">
              component sourcing, enclosure manufacturing, assembly, unit checks, packaging, and delivery
            </strong>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
            <div className="rounded-xl overflow-hidden border border-[#303A48]/60 bg-black">
              <Image
                src="/images/kickstarter/ks-dock-totem-clear-noise.gif"
                alt="Dock the magnetic totem to clear digital noise"
                width={680}
                height={383}
                unoptimized
                className="w-full h-auto block"
              />
            </div>
            <p className="text-xs text-[#A5AFBD]">
              Dock the magnetic totem to clear digital noise and start your configured focus session.
            </p>
          </div>

          <div className="rounded-2xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
            <div className="rounded-xl overflow-hidden border border-[#303A48]/60 bg-black">
              <Image
                src="/images/hero-nexus-ring-intent-control.jpg"
                alt="Nexus Ring Intent Control — physical mode controller with magnetic totem"
                width={1200}
                height={896}
                className="w-full h-auto block"
              />
            </div>
            <p className="text-xs text-[#A5AFBD]">
              Intent Control — one physical motion anchors your intention before screens can hijack your attention.
            </p>
          </div>

          <div className="rounded-2xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
            <div className="rounded-xl overflow-hidden border border-[#303A48]/60 bg-black">
              <Image
                src="/images/hardware-custom-silicon.jpg"
                alt="Custom hardware architecture engineered for tactile, low-latency desktop focus control"
                width={1200}
                height={896}
                className="w-full h-auto block"
              />
            </div>
            <p className="text-xs text-[#A5AFBD]">
              Custom hardware architecture engineered for tactile, low-latency desktop focus control.
            </p>
          </div>
        </div>
      </section>

      {/* 7. THE TOOLS BEHIND A MORE INTENTIONAL WORKDAY (12 GROUPS) */}
      <section className="relative max-w-[1200px] mx-auto px-6 md:px-12 mb-28 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="eyebrow block">Complete Feature Breakdown</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            The tools behind a more intentional workday.
          </h2>
          <p className="text-xs sm:text-sm text-[#A5AFBD]">
            Choose the features that fit your work; connected services and stronger restrictions require their relevant permissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {KICKSTARTER_TOOL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-3"
            >
              <h3 className="text-base font-display font-bold text-white">{group.title}</h3>
              <ul className="space-y-2 text-xs text-[#A5AFBD] leading-relaxed">
                {group.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-[#D83A50] mt-1">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ecosystem & Local Control Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
            <Image
              src="/images/kickstarter/ks-unified-ecosystem.jpg"
              alt="Unified desk ecosystem connecting desktop PC and mobile companion"
              width={680}
              height={383}
              className="w-full h-auto block rounded-2xl"
            />
            <p className="text-xs text-[#A5AFBD]">
              Unified desk ecosystem — Nexus Ring connects your physical workspace, desktop PC (Windows, macOS, Linux), and mobile companion (Android, iOS).
            </p>
          </div>
          <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 space-y-3">
            <Image
              src="/images/kickstarter/ks-local-control.jpg"
              alt="100% local privacy with zero subscriptions ever"
              width={680}
              height={383}
              className="w-full h-auto block rounded-2xl"
            />
            <p className="text-xs text-[#A5AFBD]">
              100% local control — core focus rules and session data stay on your devices with zero mandatory subscriptions.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPATIBILITY AT A GLANCE */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-28 space-y-8">
        <div className="text-center space-y-2">
          <span className="eyebrow block">Supported Platforms</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Compatibility at a glance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {KICKSTARTER_COMPATIBILITY.map((item) => (
            <div
              key={item.platform}
              className="p-6 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-2"
            >
              <h3 className="text-sm font-display font-bold text-white">{item.platform}</h3>
              <p className="text-xs text-[#A5AFBD] leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[#303A48] bg-[#11151C] p-4 max-w-2xl mx-auto space-y-3">
          <Image
            src="/images/kickstarter/ks-undock-privacy.gif"
            alt="Lift the totem to undock cleanly and end your session"
            width={680}
            height={383}
            unoptimized
            className="w-full h-auto block rounded-2xl"
          />
          <p className="text-xs text-[#A5AFBD] text-center">
            100% local privacy with zero mandatory subscriptions — lift the totem to undock cleanly and end your session.
          </p>
        </div>
      </section>

      {/* 9. RISKS, ENVIRONMENTAL & TRANSPARENCY */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-28 space-y-8">
        <div className="text-center space-y-2">
          <span className="eyebrow block">Transparency</span>
          <h2 className="text-3xl font-display font-bold text-white">
            Risks, Challenges &amp; Environmental Commitment.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {KICKSTARTER_RISKS.map((r) => (
            <div key={r.title} className="p-5 border border-[#303A48] bg-[#11151C] rounded-2xl space-y-1.5">
              <strong className="text-white text-sm block">{r.title}</strong>
              <p className="text-xs text-[#A5AFBD] font-light leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl border border-[#35C98A]/30 bg-[#35C98A]/5 space-y-2">
            <div className="flex items-center gap-2 text-[#35C98A] text-xs font-mono font-bold uppercase">
              <Leaf size={14} />
              <span>Environmental Commitment · Long-Lasting Design</span>
            </div>
            <p className="text-xs text-[#A5AFBD] leading-relaxed">{KICKSTARTER_ENVIRONMENTAL}</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-2">
            <div className="flex items-center gap-2 text-[#F5F6F8] text-xs font-mono font-bold uppercase">
              <Sparkles size={14} className="text-[#D83A50]" />
              <span>Visual &amp; AI Transparency</span>
            </div>
            <p className="text-xs text-[#A5AFBD] leading-relaxed">
              Campaign visuals include three clearly labeled categories: actual prototype footage, real app screen recordings, and AI-assisted design concept banners. All hardware CAD, firmware, desktop/mobile software, and prototype recordings are original and owned by us.
            </p>
          </div>
        </div>
      </section>

      {/* 10. KICKSTARTER FAQs */}
      <section className="relative max-w-[960px] mx-auto px-6 md:px-12 mb-28 space-y-6">
        <div className="text-center space-y-2">
          <span className="eyebrow block">Campaign FAQ</span>
          <h2 className="text-3xl font-display font-bold text-white">
            Frequently Asked Questions.
          </h2>
        </div>
        <div className="space-y-3">
          {KICKSTARTER_FAQS.map((faq) => (
            <div
              key={faq.q}
              className="p-5 rounded-2xl border border-[#303A48] bg-[#11151C] space-y-2"
            >
              <h3 className="text-sm sm:text-base font-display font-bold text-white">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#A5AFBD] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="relative max-w-[900px] mx-auto px-6 md:px-12 text-center bg-[#11151C] border border-[#303A48] p-12 md:p-20 rounded-3xl space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#35C98A]">
          <ShieldCheck size={15} />
          <span>ZERO MANDATORY SUBSCRIPTION · LIFETIME CORE APPS INCLUDED</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          Bring Nexus Ring to your desk.
        </h2>
        <p className="text-sm md:text-base text-[#A5AFBD] max-w-xl mx-auto font-light leading-relaxed">
          Choose the $39 Digital Maker Kit, $89 Early Bird (50 backers), $109 Kickstarter Special (200 backers), or $199 Day &amp; Night Duo Pack directly on Kickstarter.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={KICKSTARTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-[#D83A50] text-white font-bold tracking-wide hover:bg-[#EB5268] transition-all shadow-[0_0_25px_rgba(216,58,80,0.35)] inline-flex items-center gap-2"
          >
            <span>Back on Kickstarter</span>
            <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            onClick={() => handleNotifyTier("Kickstarter Campaign Updates")}
            className="px-8 py-4 rounded-xl border border-[#303A48] bg-[#080A0E] text-white hover:border-[#D83A50] font-mono text-sm transition-colors cursor-pointer"
          >
            Subscribe to Updates
          </button>
        </div>
      </section>

      <ComingSoonModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        tierName={selectedTier}
      />
    </main>
  );
}
