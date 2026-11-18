"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Camera,
  Check,
  Copy,
  Download,
  Film,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  KICKSTARTER_CAMPAIGN,
  KICKSTARTER_ENVIRONMENTAL,
  KICKSTARTER_TIERS,
} from "@/lib/kickstarter-data";

const PRESS_KICKSTARTER_URL =
  "https://www.kickstarter.com/projects/naqash/nexus-ring-physical-switch-for-you?ref=akkdoq";

const PRESS_PITCH = `Software website blockers and focus apps live inside the exact screen causing distraction—and can be disabled in two clicks while charging $40–$100/year in recurring subscriptions. Nexus Ring moves the decision to focus into the physical world: a wired USB-C metal-body desk dock with four recessed mode wells (Deep Work, Creative, Meeting, Break) and a weighted magnetic totem detected via contactless Hall-effect sensors. Dropping the totem launches your work tools, filters YouTube Shorts/recommendations and Reddit/X feeds (while keeping direct tutorials and search accessible), and syncs permission-based focus shielding and Do Not Disturb to your paired Android or iOS phone over your local network—100% locally with zero mandatory subscriptions.`;

const REAL_PROTOTYPE_PHOTOS = [
  {
    title: "Working Desk Prototype (Hero)",
    file: "/images/kickstarter/ks-desk-prototype-hero.jpg",
    filename: "nexus-ring-real-prototype-desk-hero.jpg",
    width: 680,
    height: 383,
  },
  {
    title: "3/4 Angle — Deep Mode Illuminated",
    file: "/images/prototype-desk-angle-lit.jpg",
    filename: "nexus-ring-real-prototype-angled-deep-mode.jpg",
    width: 4032,
    height: 2268,
  },
  {
    title: "Top-Down — 4 Mode Wells Lit",
    file: "/images/prototype-glow-deep-mode.jpg",
    filename: "nexus-ring-real-prototype-topdown-lit.jpg",
    width: 4032,
    height: 2268,
  },
  {
    title: "Unlit Chassis — Magnetic Totem Seated",
    file: "/images/prototype-unlit-totem-docked.jpg",
    filename: "nexus-ring-real-prototype-unlit-docked.jpg",
    width: 4032,
    height: 2268,
  },
];

const LIVE_DEMO_GIFS = [
  {
    title: "Real Prototype + Windows App: 4 Modes Live",
    file: "/images/kickstarter/ks-live-modes-demo.gif",
    filename: "nexus-ring-live-modes-demo.gif",
  },
  {
    title: "Real App: Deep Work Blocks Sites & Starts Sprint",
    file: "/images/kickstarter/ks-live-deep-work-app.gif",
    filename: "nexus-ring-live-deep-work-app.gif",
  },
  {
    title: "Real Prototype: Dock Totem to Clear Noise",
    file: "/images/kickstarter/ks-dock-totem-clear-noise.gif",
    filename: "nexus-ring-dock-totem-clear-noise.gif",
  },
  {
    title: "Real Prototype: Phone & Desk Focus Sync",
    file: "/images/kickstarter/ks-live-phone-sync.gif",
    filename: "nexus-ring-live-phone-sync.gif",
  },
  {
    title: "Real App: 3D CAD + Nexus Shield & Flow",
    file: "/images/kickstarter/ks-live-cad-workflow.gif",
    filename: "nexus-ring-live-cad-workflow.gif",
  },
  {
    title: "Real Prototype: Close-Up Docking Sync",
    file: "/images/kickstarter/ks-live-closeup-sync.gif",
    filename: "nexus-ring-live-closeup-sync.gif",
  },
];

const DESIGN_AND_TIER_BANNERS = [
  {
    title: "Hero — Less Scroll. More Life. (Day & Night)",
    file: "/images/kickstarter/ks-less-scroll-more-life.jpg",
    filename: "nexus-ring-less-scroll-more-life.jpg",
    width: 1024,
    height: 576,
  },
  {
    title: "Hero Banner — Physical Command Center",
    file: "/images/kickstarter/ks-hero-poster.png",
    filename: "nexus-ring-hero-command-center.png",
    width: 1024,
    height: 576,
  },
  {
    title: "Four Modes. Your Rules.",
    file: "/images/kickstarter/ks-four-modes-rules.png",
    filename: "nexus-ring-four-modes-rules.png",
    width: 680,
    height: 383,
  },
  {
    title: "Unified Desk & Mobile Ecosystem",
    file: "/images/kickstarter/ks-unified-ecosystem.jpg",
    filename: "nexus-ring-unified-ecosystem.jpg",
    width: 680,
    height: 383,
  },
  {
    title: "100% Local Privacy · Zero Subscriptions",
    file: "/images/kickstarter/ks-local-control.jpg",
    filename: "nexus-ring-zero-subscriptions.jpg",
    width: 680,
    height: 383,
  },
  {
    title: "$89 Early Bird Banner (First 50 Backers)",
    file: "/images/kickstarter/ks-tier-early-bird-89.jpg",
    filename: "nexus-ring-tier-early-bird-89.jpg",
    width: 680,
    height: 507,
  },
  {
    title: "$109 Kickstarter Special Banner (Featured)",
    file: "/images/kickstarter/ks-tier-special-109.jpg",
    filename: "nexus-ring-tier-special-109.jpg",
    width: 680,
    height: 507,
  },
  {
    title: "$199 Duo Pack — Day Silver & Night Black",
    file: "/images/kickstarter/ks-tier-duo-199.jpg",
    filename: "nexus-ring-tier-duo-pack-199.jpg",
    width: 680,
    height: 507,
  },
  {
    title: "$39 Digital Maker Kit Banner",
    file: "/images/kickstarter/ks-tier-maker-39.jpg",
    filename: "nexus-ring-tier-maker-kit-39.jpg",
    width: 680,
    height: 507,
  },
];

const BRAND_LOGOS = [
  {
    title: "Horizontal Wordmark (PNG)",
    file: "/branding/nexus-logo-horizontal.png",
    filename: "nexus-logo-horizontal.png",
  },
  {
    title: "Vertical Lockup (PNG)",
    file: "/branding/nexus-logo-vertical.png",
    filename: "nexus-logo-vertical.png",
  },
  {
    title: "Vector Emblem (SVG)",
    file: "/branding/nexus-emblem.svg",
    filename: "nexus-emblem.svg",
  },
  {
    title: "Emblem Mark (PNG)",
    file: "/branding/nexus-emblem.png",
    filename: "nexus-emblem.png",
  },
];

export default function PressPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyPitch = async () => {
    try {
      await navigator.clipboard.writeText(PRESS_PITCH);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API fallback ignored cleanly
    }
  };

  return (
    <main className="min-h-screen bg-[#080A0E] text-[#F5F6F8] font-sans pt-32 pb-32 overflow-x-hidden selection:bg-[#D83A50]/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#303A48_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 1. HEADER */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-16">
        <div className="space-y-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C98A]" />
            Official Press &amp; Creator Media Kit
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white leading-[0.98]">
            {KICKSTARTER_CAMPAIGN.title}
          </h1>

          <p className="text-base sm:text-lg text-[#A5AFBD] font-light leading-relaxed">
            {KICKSTARTER_CAMPAIGN.blurb}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={PRESS_KICKSTARTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#D83A50] hover:bg-[#EB5268] text-white font-bold text-xs font-mono tracking-wide inline-flex items-center gap-2 transition-colors"
            >
              <span>View Kickstarter Campaign</span>
              <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              onClick={handleCopyPitch}
              className="px-6 py-3 rounded-xl border border-[#303A48] bg-[#11151C] hover:border-[#D83A50] text-white font-mono text-xs inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? <Check size={14} className="text-[#35C98A]" /> : <Copy size={14} />}
              <span>{copied ? "Copied 1-Paragraph Pitch" : "Copy 1-Paragraph Pitch"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. FACT SHEET & PITCH */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 p-6 rounded-3xl border border-[#303A48] bg-[#11151C] space-y-4">
            <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest block font-bold">
              Quick Facts
            </span>
            <dl className="space-y-3 text-xs font-mono">
              <div className="flex justify-between gap-4 border-b border-[#303A48]/70 pb-2">
                <dt className="text-[#778292]">CREATOR</dt>
                <dd className="text-white text-right">{KICKSTARTER_CAMPAIGN.creator}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#303A48]/70 pb-2">
                <dt className="text-[#778292]">LOCATION</dt>
                <dd className="text-white text-right">{KICKSTARTER_CAMPAIGN.location}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#303A48]/70 pb-2">
                <dt className="text-[#778292]">CATEGORY</dt>
                <dd className="text-white text-right">{KICKSTARTER_CAMPAIGN.category}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#303A48]/70 pb-2">
                <dt className="text-[#778292]">FUNDING GOAL</dt>
                <dd className="text-white text-right">
                  {KICKSTARTER_CAMPAIGN.fundingGoal} ({KICKSTARTER_CAMPAIGN.durationDays} days)
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#303A48]/70 pb-2">
                <dt className="text-[#778292]">EST. DELIVERY</dt>
                <dd className="text-[#35C98A] text-right font-bold">
                  {KICKSTARTER_CAMPAIGN.estimatedDelivery}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#303A48]/70 pb-2">
                <dt className="text-[#778292]">PLATFORMS</dt>
                <dd className="text-white text-right">Win · macOS · Linux · Android · iOS</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#778292]">SUBSCRIPTION</dt>
                <dd className="text-[#35C98A] text-right font-bold">None (Lifetime Core Apps)</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7 p-6 rounded-3xl border border-[#303A48] bg-[#11151C] space-y-4">
            <span className="text-[10px] font-mono text-[#35C98A] uppercase tracking-widest block font-bold">
              Editorial Summary
            </span>
            <p className="text-sm text-[#A5AFBD] leading-relaxed">{PRESS_PITCH}</p>
            <div className="p-4 rounded-2xl border border-[#303A48] bg-[#080A0E] text-xs text-[#A5AFBD] leading-relaxed">
              <strong className="text-white block mb-1">Sustainability &amp; Longevity:</strong>
              {KICKSTARTER_ENVIRONMENTAL}
            </div>
            <div className="p-4 rounded-2xl border border-[#303A48] bg-[#080A0E] text-xs text-[#A5AFBD] leading-relaxed flex items-start gap-2.5">
              <Sparkles size={15} className="text-[#D83A50] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Visual Labeling Transparency:</strong> Assets below are separated into{" "}
                <em>Real Working Prototype Photos</em>, <em>Live Prototype &amp; App Screen Recordings</em>, and{" "}
                <em>Production Design Concept Banners</em> (final production appearance may vary).
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REWARD TIERS TABLE */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-20">
        <h2 className="text-2xl font-display font-bold text-white mb-5">
          Official Kickstarter Reward Tiers
        </h2>
        <div className="rounded-3xl border border-[#303A48] bg-[#11151C] overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#303A48] text-[#778292]">
                <th className="p-4">TIER</th>
                <th className="p-4">PRICE</th>
                <th className="p-4">LIMIT</th>
                <th className="p-4">INCLUDED</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#303A48] text-[#A5AFBD]">
              {KICKSTARTER_TIERS.map((t) => (
                <tr key={t.id}>
                  <td className="p-4 text-white font-bold">{t.name}</td>
                  <td className="p-4 text-[#D83A50] font-bold">
                    {t.price}
                    {t.regularPrice ? ` (Reg. ${t.regularPrice})` : ""}
                  </td>
                  <td className="p-4">{t.limit}</td>
                  <td className="p-4">
                    {t.items.map((i) => `${i.qty > 1 ? `${i.qty}× ` : ""}${i.label}`).join(" · ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. REAL PROTOTYPE PHOTOS */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-20 space-y-6">
        <div className="flex items-center gap-2 text-[#35C98A] text-xs font-mono uppercase font-bold">
          <Camera size={15} />
          <span>01 · Real Working Prototype Photographs (High-Res)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {REAL_PROTOTYPE_PHOTOS.map((img) => (
            <div
              key={img.file}
              className="rounded-2xl border border-[#303A48] bg-[#11151C] p-4 space-y-3"
            >
              <div className="rounded-xl overflow-hidden bg-black border border-[#303A48]/60">
                <Image
                  src={img.file}
                  alt={img.title}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-mono text-white font-semibold">{img.title}</span>
                <a
                  href={img.file}
                  download={img.filename}
                  className="px-3 py-1.5 rounded-lg border border-[#303A48] bg-[#080A0E] hover:border-[#D83A50] text-[11px] font-mono text-white inline-flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  <Download size={12} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LIVE PROTOTYPE & APP RECORDING GIFS */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-20 space-y-6">
        <div className="flex items-center gap-2 text-[#35C98A] text-xs font-mono uppercase font-bold">
          <Film size={15} />
          <span>02 · Real Prototype &amp; Live App Recordings (Animated GIFs)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIVE_DEMO_GIFS.map((gif) => (
            <div
              key={gif.file}
              className="rounded-2xl border border-[#303A48] bg-[#11151C] p-4 space-y-3 flex flex-col justify-between"
            >
              <div className="rounded-xl overflow-hidden bg-black border border-[#303A48]/60">
                <Image
                  src={gif.file}
                  alt={gif.title}
                  width={680}
                  height={383}
                  unoptimized
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-[11px] font-mono text-white font-semibold leading-snug">
                  {gif.title}
                </span>
                <a
                  href={gif.file}
                  download={gif.filename}
                  className="px-2.5 py-1.5 rounded-lg border border-[#303A48] bg-[#080A0E] hover:border-[#D83A50] text-[10px] font-mono text-white inline-flex items-center gap-1 shrink-0 transition-colors"
                >
                  <Download size={11} />
                  <span>GIF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DESIGN CONCEPT VISUALS & REWARD BANNERS */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 mb-20 space-y-6">
        <div className="flex items-center gap-2 text-[#D83A50] text-xs font-mono uppercase font-bold">
          <Layers size={15} />
          <span>03 · Production Design Concept Visuals &amp; Reward Banners</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {DESIGN_AND_TIER_BANNERS.map((img) => (
            <div
              key={img.file}
              className="rounded-2xl border border-[#303A48] bg-[#11151C] p-4 space-y-3"
            >
              <div className="rounded-xl overflow-hidden bg-black border border-[#303A48]/60">
                <Image
                  src={img.file}
                  alt={img.title}
                  width={img.width}
                  height={img.height}
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-mono text-white font-semibold">{img.title}</span>
                <a
                  href={img.file}
                  download={img.filename}
                  className="px-3 py-1.5 rounded-lg border border-[#303A48] bg-[#080A0E] hover:border-[#D83A50] text-[11px] font-mono text-white inline-flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  <Download size={12} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BRAND LOGOS */}
      <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 space-y-6">
        <h2 className="text-xl font-display font-bold text-white">04 · Brand Logos &amp; Marks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BRAND_LOGOS.map((logo) => (
            <div
              key={logo.file}
              className="rounded-2xl border border-[#303A48] bg-[#11151C] p-5 flex flex-col items-center justify-between gap-4"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src={logo.file}
                  alt={logo.title}
                  width={160}
                  height={64}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
              <div className="w-full space-y-2 text-center">
                <span className="text-[11px] font-mono text-[#A5AFBD] block">{logo.title}</span>
                <a
                  href={logo.file}
                  download={logo.filename}
                  className="w-full py-2 rounded-lg border border-[#303A48] bg-[#080A0E] hover:border-[#D83A50] text-[11px] font-mono text-white inline-flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download size={12} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
