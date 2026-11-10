"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  Code,
  Palette,
  GraduationCap,
  Briefcase,
  CheckCircle,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

export default function FocusHubPage() {
  const [showModal, setShowModal] = useState(false);
  const [activePersona, setActivePersona] = useState<"developers" | "designers" | "students" | "founders">("developers");

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Focus & Discipline Hub", url: "/focus" },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: `https://www.nexusring.tech${crumb.url}`,
    })),
  };

  const personas = {
    developers: {
      title: "Focus Systems for Software Engineers",
      icon: Code,
      challenge: "High context-switching between IDE, terminal, pull requests, Slack, and Stack Overflow.",
      strategies: [
        "Group pull-request reviews into two designated 30-minute daily windows rather than responding to GitHub alerts in real time.",
        "Use local domain redirection to block social feeds and tech forums during local compilation and test cycles.",
        "Establish an end-of-day git branch note detailing the exact next line to write tomorrow to eliminate start-of-day ramp latency.",
      ],
      nexusRole: "Deep Work mode routes distraction domains to 127.0.0.1 and silences communication alerts during uninterrupted debugging blocks.",
    },
    designers: {
      title: "Focus Systems for Product & Visual Designers",
      icon: Palette,
      challenge: "Divergent exploration (moodboards, inspiration) bleeding unchecked into passive feed scrolling.",
      strategies: [
        "Timebox initial visual research to 25 minutes using an alarm before opening Figma or Blender.",
        "Work full-screen without side panels or communication apps visible in peripheral vision.",
        "Distinguish between divergent ideation sprints and convergent production polish sprints.",
      ],
      nexusRole: "Creative mode provides calm, non-intrusive peripheral illumination while keeping messaging banners suppressed.",
    },
    students: {
      title: "Focus Systems for Students & Researchers",
      icon: GraduationCap,
      challenge: "Information overload, multi-tab sprawl, and the illusion of competence from passive reading.",
      strategies: [
        "Apply the Feynman Technique: synthesize concepts on paper before searching the web for pre-digested answers.",
        "Maintain a maximum limit of 5 active research tabs per paper to avoid working-memory thrashing.",
        "Study with physical analog books or dedicated offline PDFs with network Wi-Fi disabled.",
      ],
      nexusRole: "Physical totem provides tangible boundaries between study blocks and leisure periods.",
    },
    founders: {
      title: "Focus Systems for Founders & Operators",
      icon: Briefcase,
      challenge: "Constant firefighting, reactive inbox management, and anxiety around asynchronous messages.",
      strategies: [
        "Reserve the first 90 minutes of the day exclusively for strategic, needle-moving priorities before opening email.",
        "Batch operational communications (Slack, emails, financial approvals) into an afternoon sprint.",
        "Establish explicit asynchronous communication SLAs with your team to eliminate expectation of instant replies.",
      ],
      nexusRole: "Meeting mode instantly prepares communication setups; Deep Work mode protects strategic thinking from reactive alerts.",
    },
  };

  return (
    <main className="bg-[#080A0E] text-[#F5F6F8] font-sans min-h-screen selection:bg-[#D83A50]/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Breadcrumb Bar ── */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-4 px-6 md:px-12 max-w-[1200px] mx-auto border-b border-[#303A48]/50">
        <ol className="flex items-center gap-2 text-xs font-mono text-[#A5AFBD]">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li className="text-[#303A48]">/</li>
          <li className="text-white font-medium" aria-current="page">Focus & Discipline Hub</li>
        </ol>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="pt-16 pb-20 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#303A48] bg-[#11151C] text-[#A5AFBD] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C98A]" />
            EVIDENCE-BASED PRACTICES & SYSTEMS
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white leading-[1.02]">
            The Discipline & Focus Resource Hub
          </h1>

          <p className="text-lg text-[#A5AFBD] leading-relaxed border-l-2 border-[#35C98A] pl-4 bg-[#11151C]/60 p-5 rounded-r-2xl">
            Focus is not an innate genetic superpower. It is a trainable practice supported by environmental design, thoughtful boundaries, and deliberate habit loops. Explore practical frameworks to protect your cognitive stamina.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#frameworks"
              className="px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#D83A50] hover:bg-[#EB5268] transition-all shadow-[0_0_20px_rgba(255,64,90,0.3)]"
            >
              Explore Core Frameworks
            </Link>
            <Link
              href="/journal"
              className="px-8 py-3.5 rounded-full font-medium text-sm text-[#F5F6F8] hover:text-white border border-[#303A48] bg-[#11151C] hover:border-[#A5AFBD]/50 transition-all flex items-center gap-2"
            >
              <BookOpen size={16} />
              <span>Read The Focus Journal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CORE FOCUS FRAMEWORKS ── */}
      <section id="frameworks" className="py-20 px-6 md:px-12 bg-[#11151C] border-y border-[#303A48]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono text-[#35C98A] uppercase tracking-widest">Foundations</span>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              Four pillars of sustainable concentration.
            </h2>
            <p className="text-sm text-[#A5AFBD] leading-relaxed">
              Before introducing any tool or software, establishing these structural pillars creates a resilient foundation for daily deep work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "1. Environmental Cues",
                desc: "Anchor concentration to stable sensory inputs (a specific desk location, a tactile totem, clean lighting). Context-dependent memory helps the brain transition quickly into flow.",
                tag: "Spatial Habit",
              },
              {
                title: "2. The Friction Principle",
                desc: "Increase physical and digital friction for distractions (log out of accounts, place phone in another room) while reducing start-up friction for your primary creative tools.",
                tag: "Friction Design",
              },
              {
                title: "3. Ultradian Pacing",
                desc: "Human cognitive performance peaks in 60- to 90-minute ultradian cycles. Honor natural fatigue with deliberate analog breaks rather than feed scrolling.",
                tag: "Biological Rhythm",
              },
              {
                title: "4. Default-Deny Boundaries",
                desc: "Shift your communication policy from immediate reactive availability to scheduled asynchronous batches. Protect your highest cognitive hours fiercely.",
                tag: "System Design",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#080A0E] border border-[#303A48] space-y-3">
                <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-widest">{pillar.tag}</span>
                <h3 className="text-base font-bold text-white font-display">{pillar.title}</h3>
                <p className="text-xs text-[#A5AFBD] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Mindful Rescue Visual Card (100% Uncropped Display) */}
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080A0E] border border-[#303A48] rounded-3xl p-6 sm:p-8">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#303A48] relative bg-black p-1">
              <Image
                src="/images/product-card-mindful-rescue.jpg"
                alt="Nexus Ring Mindful Rescue - Gently pulls you back from lost doomscroll hours"
                width={1200}
                height={896}
                className="w-full h-auto block rounded-xl"
              />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-mono text-[#35C98A] uppercase tracking-widest px-3 py-1 rounded-full border border-[#35C98A]/30 bg-[#35C98A]/10 inline-block">
                Environmental Rescue Protocol
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                Mindful Rescue via Tactile Feedback
              </h3>
              <p className="text-sm text-[#A5AFBD] leading-relaxed font-light">
                When attention fractures into passive feeds, soft ambient illumination and physical totem resistance gently redirect your gaze back toward what matters.
              </p>
              <div className="pt-2">
                <span className="text-xs font-mono text-[#778292]">GENTLE COGNITIVE RESET · ZERO INVASIVE POPUPS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROLE-SPECIFIC FOCUS STRATEGIES (INTERACTIVE) ── */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono text-[#D83A50] uppercase tracking-widest">Role-Specific Guides</span>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Tailored focus workflows for demanding disciplines.
          </h2>
          <p className="text-sm text-[#A5AFBD] leading-relaxed">
            Different types of knowledge work face unique distraction profiles. Select your discipline to view targeted protocols:
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-3">
          {[
            { id: "developers", label: "Software Developers", icon: Code },
            { id: "designers", label: "Designers & Creators", icon: Palette },
            { id: "students", label: "Students & Researchers", icon: GraduationCap },
            { id: "founders", label: "Founders & Operators", icon: Briefcase },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActivePersona(tab.id as typeof activePersona)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 cursor-pointer border ${
                activePersona === tab.id
                  ? "bg-[#D83A50] text-white border-[#D83A50] shadow-[0_0_15px_rgba(255,64,90,0.3)]"
                  : "bg-[#11151C] text-[#A5AFBD] border-[#303A48] hover:text-white hover:border-[#A5AFBD]/50"
              }`}
            >
              <tab.icon size={15} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Selected Persona Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#11151C] border border-[#303A48] space-y-6">
          <div className="flex items-center gap-3">
            {React.createElement(personas[activePersona].icon, { size: 24, className: "text-[#D83A50]" })}
            <h3 className="text-2xl font-display font-bold text-white">
              {personas[activePersona].title}
            </h3>
          </div>

          <div className="p-4 rounded-xl bg-[#080A0E] border border-[#303A48]/60 text-xs text-[#A5AFBD] flex items-start gap-2">
            <span className="text-white font-semibold shrink-0">Primary Challenge:</span>
            <span>{personas[activePersona].challenge}</span>
          </div>

          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Recommended Protocol</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {personas[activePersona].strategies.map((strategy, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#1B222D] border border-[#303A48] space-y-2">
                  <span className="text-xs font-mono font-bold text-[#35C98A]">0{idx + 1}</span>
                  <p className="text-xs text-[#F5F6F8] leading-relaxed">{strategy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1B222D]/60 border border-[#303A48] text-xs font-mono text-[#A5AFBD]">
            <span className="text-[#D83A50] font-bold">Planned Nexus Ring Companion Integration: </span>
            <span>{personas[activePersona].nexusRole}</span>
          </div>
        </div>
      </section>

      {/* ── ETHICAL & HEALTH BOUNDARIES (NO MEDICAL CLAIMS) ── */}
      <section className="py-20 px-6 md:px-12 bg-[#11151C] border-y border-[#303A48]">
        <div className="max-w-[900px] mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <AlertTriangle size={24} className="text-[#F0B35A] shrink-0" />
            <h2 className="text-2xl font-display font-bold text-white">
              Important Perspective: Focus is Multi-Factorial
            </h2>
          </div>

          <div className="space-y-4 text-sm text-[#A5AFBD] leading-relaxed">
            <p>
              Human focus and attention are governed by biological, psychological, and environmental systems. No physical hardware device, productivity tool, or software extension can replace the essential biological requirements for cognitive performance:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-white pt-2">
              <li className="flex items-center gap-2 p-3 rounded-lg bg-[#080A0E] border border-[#303A48]">
                <CheckCircle size={15} className="text-[#35C98A] shrink-0" />
                <span>Adequate sleep (7–9 hours nightly)</span>
              </li>
              <li className="flex items-center gap-2 p-3 rounded-lg bg-[#080A0E] border border-[#303A48]">
                <CheckCircle size={15} className="text-[#35C98A] shrink-0" />
                <span>Physical movement & hydration</span>
              </li>
              <li className="flex items-center gap-2 p-3 rounded-lg bg-[#080A0E] border border-[#303A48]">
                <CheckCircle size={15} className="text-[#35C98A] shrink-0" />
                <span>Realistic, manageable workload bounds</span>
              </li>
              <li className="flex items-center gap-2 p-3 rounded-lg bg-[#080A0E] border border-[#303A48]">
                <CheckCircle size={15} className="text-[#35C98A] shrink-0" />
                <span>Professional medical/psychological care</span>
              </li>
            </ul>
            <p className="text-xs pt-2">
              <strong>Medical Disclaimer:</strong> Nexus Ring is an environmental desk interface and companion automation controller under development. It is not a medical device, therapeutic apparatus, or clinical treatment for ADHD, depression, anxiety, or compulsive disorders.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXPLORE FURTHER CTA ── */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
          Build a More Intentional Workspace.
        </h2>
        <p className="text-base text-[#A5AFBD] max-w-xl mx-auto leading-relaxed">
          Read deep-dive research in The Focus Journal, explore the digital distraction landscape, or follow Nexus Ring’s open prototype development.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/journal"
            className="px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#D83A50] hover:bg-[#EB5268] transition-all shadow-[0_0_20px_rgba(255,64,90,0.3)] flex items-center gap-2"
          >
            <BookOpen size={16} />
            <span>The Focus Journal</span>
          </Link>
          <Link
            href="/digital-distraction"
            className="px-8 py-3.5 rounded-full font-medium text-sm text-[#F5F6F8] hover:text-white border border-[#303A48] bg-[#11151C] hover:border-[#A5AFBD]/50 transition-all"
          >
            Digital Distraction Explained
          </Link>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="px-8 py-3.5 rounded-full font-medium text-sm text-[#A5AFBD] hover:text-white border border-[#303A48] transition-all cursor-pointer"
          >
            Join Early Access
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}
