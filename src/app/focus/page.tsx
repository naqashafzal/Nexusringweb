"use client";

import React, { useState } from "react";
import Link from "next/link";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  Code,
  Palette,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  ArrowRight,
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
    <main className="bg-[#FFFFFF] text-[#1D1D1F] font-sans min-h-screen selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Breadcrumb Bar ── */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-4 page-container border-b border-[#E5E5E7]">
        <ol className="flex items-center gap-2 text-xs text-[#6E6E73]">
          <li>
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">Home</Link>
          </li>
          <li className="text-[#86868B]">/</li>
          <li className="text-[#1D1D1F] font-medium" aria-current="page">Focus &amp; Discipline Hub</li>
        </ol>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="pt-16 pb-20 page-container">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            EVIDENCE-BASED PRACTICES &amp; SYSTEMS
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-[#1D1D1F] leading-[1.05]">
            The Discipline &amp; Focus Resource Hub
          </h1>

          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed border-l-2 border-[#34A853] pl-4 bg-[#F8F9FA] p-5 rounded-r-2xl font-light">
            Focus is not an innate genetic superpower. It is a trainable practice supported by environmental design, thoughtful boundaries, and deliberate habit loops. Explore practical frameworks to protect your cognitive stamina.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#frameworks"
              className="px-8 py-3.5 rounded-full font-medium text-sm text-white bg-[#1D1D1F] hover:bg-[#000000] transition-all shadow-sm"
            >
              Explore Core Frameworks
            </Link>
            <Link
              href="/journal"
              className="px-8 py-3.5 rounded-full font-medium text-sm text-[#1D1D1F] hover:bg-[#EAEAEA] border border-[#E5E5E7] bg-[#F5F5F7] transition-all flex items-center gap-2"
            >
              <BookOpen size={16} />
              <span>Read The Focus Journal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CORE FOCUS FRAMEWORKS ── */}
      <section id="frameworks" className="py-20 page-container border-t border-[#E5E5E7]">
        <div className="space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono text-[#34A853] uppercase tracking-widest font-semibold">Foundations</span>
            <h2 className="text-3xl font-display font-bold text-[#1D1D1F] tracking-tight">
              Four pillars of sustainable concentration.
            </h2>
            <p className="text-sm text-[#6E6E73] leading-relaxed font-light">
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
              <div key={idx} className="p-6 md:p-7 rounded-3xl bg-[#F8F9FA] border border-[#E5E5E7] space-y-3 shadow-xs">
                <span className="text-[10px] font-mono text-[#C93E50] uppercase tracking-widest font-semibold">{pillar.tag}</span>
                <h3 className="text-base font-bold text-[#1D1D1F] font-display">{pillar.title}</h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROLE-SPECIFIC FOCUS STRATEGIES (INTERACTIVE) ── */}
      <section className="py-20 page-container border-t border-[#E5E5E7] space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono text-[#C93E50] uppercase tracking-widest font-semibold">Role-Specific Guides</span>
          <h2 className="text-3xl font-display font-bold text-[#1D1D1F] tracking-tight">
            Tailored focus workflows for demanding disciplines.
          </h2>
          <p className="text-sm text-[#6E6E73] leading-relaxed font-light">
            Different types of knowledge work face unique distraction profiles. Select your discipline to view targeted protocols:
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2.5">
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
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 cursor-pointer border ${
                activePersona === tab.id
                  ? "bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-sm"
                  : "bg-[#F5F5F7] text-[#6E6E73] border-[#E5E5E7] hover:text-[#1D1D1F] hover:bg-[#EAEAEA]"
              }`}
            >
              <tab.icon size={15} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Selected Persona Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5E5E7] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            {React.createElement(personas[activePersona].icon, { size: 24, className: "text-[#C93E50]" })}
            <h3 className="text-2xl font-display font-bold text-[#1D1D1F]">
              {personas[activePersona].title}
            </h3>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E7] text-xs text-[#6E6E73] flex items-start gap-2">
            <span className="text-[#1D1D1F] font-semibold shrink-0">Primary Challenge:</span>
            <span>{personas[activePersona].challenge}</span>
          </div>

          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-mono text-[#6E6E73] uppercase tracking-wider font-semibold">Recommended Protocol</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {personas[activePersona].strategies.map((strategy, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E7] space-y-2">
                  <span className="text-xs font-mono font-bold text-[#34A853]">0{idx + 1}</span>
                  <p className="text-xs text-[#1D1D1F] leading-relaxed font-normal">{strategy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4.5 rounded-2xl bg-[#FDF2F4] border border-[#C93E50]/20 text-xs font-mono text-[#1D1D1F]">
            <span className="text-[#C93E50] font-bold">Planned Nexus Ring Companion Integration: </span>
            <span>{personas[activePersona].nexusRole}</span>
          </div>
        </div>
      </section>

      {/* ── ETHICAL & HEALTH BOUNDARIES (NO MEDICAL CLAIMS) ── */}
      <section className="py-20 page-container border-t border-[#E5E5E7]">
        <div className="max-w-4xl mx-auto space-y-6 bg-[#F8F9FA] border border-[#E5E5E7] p-8 md:p-10 rounded-3xl shadow-xs">
          <div className="flex items-center gap-3">
            <AlertTriangle size={24} className="text-[#FBBC04] shrink-0" />
            <h2 className="text-2xl font-display font-bold text-[#1D1D1F]">
              Important Perspective: Focus is Multi-Factorial
            </h2>
          </div>

          <div className="space-y-4 text-sm text-[#6E6E73] leading-relaxed font-light">
            <p>
              Human focus and attention are governed by biological, psychological, and environmental systems. No physical hardware device, productivity tool, or software extension can replace the essential biological requirements for cognitive performance:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-[#1D1D1F] pt-2">
              <li className="flex items-center gap-2 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7]">
                <CheckCircle2 size={16} className="text-[#34A853] shrink-0" />
                <span>Adequate sleep (7–9 hours nightly)</span>
              </li>
              <li className="flex items-center gap-2 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7]">
                <CheckCircle2 size={16} className="text-[#34A853] shrink-0" />
                <span>Physical movement &amp; hydration</span>
              </li>
              <li className="flex items-center gap-2 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7]">
                <CheckCircle2 size={16} className="text-[#34A853] shrink-0" />
                <span>Realistic, manageable workload bounds</span>
              </li>
              <li className="flex items-center gap-2 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7]">
                <CheckCircle2 size={16} className="text-[#34A853] shrink-0" />
                <span>Professional medical/psychological care</span>
              </li>
            </ul>
            <p className="text-xs pt-2 text-[#86868B] border-t border-[#E5E5E7] mt-4">
              <strong>Medical Disclaimer:</strong> Nexus Ring is an environmental desk interface and companion automation controller under development. It is not a medical device, therapeutic apparatus, or clinical treatment for ADHD, depression, anxiety, or compulsive disorders.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXPLORE FURTHER CTA ── */}
      <section className="py-20 page-container border-t border-[#E5E5E7] text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-[#1D1D1F]">
          Build a More Intentional Workspace.
        </h2>
        <p className="text-base text-[#6E6E73] max-w-xl mx-auto leading-relaxed font-light">
          Read deep-dive research in The Focus Journal, explore the digital distraction landscape, or follow Nexus Ring’s open prototype development.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/journal"
            className="px-8 py-3.5 rounded-full font-medium text-sm text-white bg-[#1D1D1F] hover:bg-[#000000] transition-all shadow-sm flex items-center gap-2"
          >
            <BookOpen size={16} />
            <span>The Focus Journal</span>
          </Link>
          <Link
            href="/digital-distraction"
            className="px-8 py-3.5 rounded-full font-medium text-sm text-[#1D1D1F] hover:bg-[#EAEAEA] border border-[#E5E5E7] bg-[#F5F5F7] transition-all"
          >
            Digital Distraction Explained
          </Link>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="px-8 py-3.5 rounded-full font-medium text-sm text-[#1D1D1F] hover:bg-[#EAEAEA] border border-[#E5E5E7] bg-[#F5F5F7] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Join Early Access</span>
            <ArrowRight size={14} className="text-[#6E6E73]" />
          </button>
        </div>
      </section>

      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}
