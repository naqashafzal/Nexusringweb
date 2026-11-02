"use client";

import React, { useState } from "react";
import Link from "next/link";
import ComingSoonModal from "@/components/ComingSoonModal";
import {
  ShieldAlert,
  SlidersHorizontal,
  Flame,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function DigitalDistractionPage() {
  const [showModal, setShowModal] = useState(false);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Digital Distraction", url: "/digital-distraction" },
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Digital Distraction: Why Feeds Compete for Your Time & How to Reclaim Focus",
    description:
      "Understand how feeds, notifications, and engagement-driven design compete for your attention, and explore practical ways to protect your focus.",
    author: {
      "@type": "Person",
      name: "Naqash Afzal",
      jobTitle: "Founder & Hardware Architect",
    },
    publisher: {
      "@type": "Organization",
      name: "Nexus Ring",
      logo: {
        "@type": "ImageObject",
        url: "https://www.nexusring.tech/icon.svg",
      },
    },
    datePublished: "2026-03-01",
    dateModified: "2026-10-30",
    mainEntityOfPage: "https://www.nexusring.tech/digital-distraction",
  };

  return (
    <main className="bg-[#FFFFFF] text-[#1D1D1F] font-sans min-h-screen selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* ── Breadcrumb Bar ── */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-4 px-6 md:px-12 max-w-[1120px] mx-auto border-b border-[#E5E5E7]">
        <ol className="flex items-center gap-2 text-xs text-[#6E6E73]">
          <li>
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">Home</Link>
          </li>
          <li className="text-[#86868B]">/</li>
          <li className="text-[#1D1D1F] font-medium" aria-current="page">Digital Distraction</li>
        </ol>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="pt-16 pb-20 px-6 md:px-12 max-w-[1120px] mx-auto">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
            Attention Economy & Cognitive Resilience
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05]">
            The world is competing for your attention.
          </h1>

          <p className="text-2xl sm:text-3xl font-medium text-[#C93E50] tracking-tight">
            It&apos;s time to take control of it.
          </p>

          <p className="text-lg text-[#6E6E73] leading-relaxed border-l-2 border-[#C93E50] pl-4 bg-[#F8F9FA] p-5 rounded-r-2xl">
            Digital platforms are engineered to compete for engagement. Notifications, endless feeds, autoplay, and personalized recommendations can make distraction feel effortless. Nexus Ring is being developed to make intentional work easier to begin and easier to protect.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="btn-primary cursor-pointer flex items-center gap-2"
            >
              <span>Join Early Access</span>
              <ChevronRight size={16} />
            </button>
            <Link
              href="#the-problem"
              className="btn-secondary flex items-center gap-2"
            >
              Explore the Research ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ── BRAND MANIFESTO CALLOUT ── */}
      <section className="bg-[#F8F9FA] border-y border-[#E5E5E7] py-20 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <span className="text-[12px] font-semibold text-[#C93E50] tracking-wide uppercase block">
            The Nexus Ring Manifesto
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F]">
            The World is Fighting for Your Attention.
          </h2>

          <div className="space-y-4 text-[#6E6E73] text-base sm:text-lg leading-relaxed text-left max-w-2xl mx-auto pt-4">
            <p className="border-b border-[#E5E5E7] pb-3">Every notification wants a response.</p>
            <p className="border-b border-[#E5E5E7] pb-3">Every feed wants another scroll.</p>
            <p className="border-b border-[#E5E5E7] pb-3">Every advertisement wants another moment.</p>
            <p className="border-b border-[#E5E5E7] pb-3">Every recommendation system wants to predict what will keep you engaged.</p>
            <p className="text-[#1D1D1F] font-medium pt-2">But your goals need that attention too.</p>
            <p>Your ambitions need time. Your creativity needs space. Your most meaningful work requires intention.</p>
            <p className="text-[#1D1D1F] bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E5E7] shadow-sm">
              We believe technology should support human purpose, not constantly compete against it. We believe discipline becomes easier to practice when our environments support our decisions. We believe distraction should be a choice, not the default.
            </p>
            <div className="pt-2 text-[#1D1D1F] space-y-1">
              <p className="font-semibold text-lg">That is why we are building Nexus Ring.</p>
              <p className="text-sm text-[#6E6E73]">A physical interface designed to transform a deliberate decision into a change in your digital workspace.</p>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-xs font-semibold tracking-wider text-[#6E6E73] uppercase">
              Your Attention. Your Time. Your Decision.
            </p>
            <p className="text-lg font-semibold text-[#1D1D1F] pt-1">
              Nexus Ring — Force Your Focus. Engineer Success.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: THE PROBLEM ── */}
      <section id="the-problem" className="py-24 px-6 md:px-12 max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider">Section 01</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
              How digital environments compete for your attention.
            </h2>
            <p className="text-[#6E6E73] leading-relaxed">
              When all tasks—work, communication, news, entertainment, and shopping—converge onto a single display, boundary lines blur. The devices we use to build our careers are simultaneously connected to the most potent notification streams in history.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: ShieldAlert,
                title: "Flattened Sensory Context",
                desc: "A spreadsheet, a Slack debate, and a viral feed share the identical glass surface. The brain receives no spatial signal that focus mode has begun.",
              },
              {
                icon: SlidersHorizontal,
                title: "Frictionless Switching",
                desc: "Switching from deep writing to casual browsing takes 0.2 seconds and a single mouse click. Without friction, impulsive behaviors dominate.",
              },
              {
                icon: Flame,
                title: "Asymmetric Competition",
                desc: "An individual’s cognitive willpower competes against data centers processing trillions of user data points to maximize retention time.",
              },
              {
                icon: Clock,
                title: "Constant State Fragmentation",
                desc: "An interruption every 3 minutes forces working memory into continuous garbage collection, creating persistent cognitive fatigue.",
              },
            ].map((item, idx) => (
              <div key={idx} className="surface-card p-6 rounded-2xl border border-[#E5E5E7] space-y-3">
                <item.icon size={22} className="text-[#C93E50]" />
                <h3 className="text-base font-semibold text-[#1D1D1F]">{item.title}</h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE ATTENTION ECONOMY ── */}
      <section className="py-24 px-6 md:px-12 bg-[#F8F9FA] border-y border-[#E5E5E7]">
        <div className="max-w-[1120px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider">Section 02</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
              The economics of engagement algorithms.
            </h2>
            <p className="text-[#6E6E73] leading-relaxed">
              Software interfaces reflect the business models of the organizations that create them. In an ad-supported framework, active user minutes directly govern platform valuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] shadow-sm space-y-4">
              <span className="text-2xl font-bold text-[#C93E50]">01</span>
              <h3 className="text-lg font-semibold text-[#1D1D1F]">Variable Reward Schedules</h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                Borrowing from behavioral operant conditioning research (B.F. Skinner), modern recommendation feeds deliver high-value insights interspersed unpredictably with mundane updates, encouraging repetitive pull-to-refresh actions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] shadow-sm space-y-4">
              <span className="text-2xl font-bold text-[#1D1D1F]">02</span>
              <h3 className="text-lg font-semibold text-[#1D1D1F]">The Loss of Stopping Cues</h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                Traditional media featured chapters, page numbers, and television end-credits that served as natural pause points. Infinite scroll and automatic video playback eliminate these cognitive boundaries entirely.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] shadow-sm space-y-4">
              <span className="text-2xl font-bold text-[#6E6E73]">03</span>
              <h3 className="text-lg font-semibold text-[#1D1D1F]">Engagement-Weighted Delivery</h3>
              <p className="text-sm text-[#6E6E73] leading-relaxed">
                Content that triggers moral outrage, novelty, or urgency receives higher distribution weight than calm, analytical information, increasing background anxiety during working hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THE HIDDEN COST ── */}
      <section className="py-24 px-6 md:px-12 max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider">Section 03</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
              The hidden cost of task switching and attention residue.
            </h2>
            <p className="text-[#6E6E73] leading-relaxed">
              Dr. Gloria Mark&apos;s empirical research at UC Irvine demonstrated that knowledge workers switch tasks or get interrupted approximately every 3 minutes. Re-engaging full cognitive flow following an interruption requires an average of over 20 minutes.
            </p>
            <p className="text-[#6E6E73] leading-relaxed">
              When you glance at an incoming notification while programming, designing, or drafting an agreement, your brain does not instantaneously return to peak processing. A fragment of attention remains stuck on the secondary context—a phenomenon psychologist Sophie Leroy termed <em>attention residue</em>.
            </p>
            <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#E5E5E7] flex items-start gap-3">
              <BookOpen size={20} className="text-[#C93E50] mt-0.5 shrink-0" />
              <p className="text-xs text-[#6E6E73]">
                Source: Mark, G., Gudith, D., & Klocke, U. (2008). <em>The Cost of Interrupted Work: More Speed and Stress</em>. Proceedings of ACM CHI 2008.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#F8F9FA] border border-[#E5E5E7] space-y-6">
            <h3 className="text-lg font-semibold text-[#1D1D1F]">The Anatomy of a Disrupted Work Hour</h3>
            <div className="space-y-4">
              {[
                { time: "00:00 - 00:15", title: "Ramping up flow state", status: "Focus building" },
                { time: "00:16", title: "Non-urgent desktop toast notification", status: "Interruption" },
                { time: "00:17 - 00:23", title: "Check 'quick' message + related social tab", status: "Context drift" },
                { time: "00:24 - 00:45", title: "Attempting to reconstruct mental stack", status: "Attention residue" },
                { time: "00:46", title: "Incoming calendar notification alert", status: "Interruption" },
                { time: "00:47 - 01:00", title: "Superficial task completion with cognitive fatigue", status: "Suboptimal output" },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7] text-xs">
                  <span className="text-[#6E6E73] font-medium">{step.time}</span>
                  <span className="text-[#1D1D1F] font-medium">{step.title}</span>
                  <span className={`px-2.5 py-0.5 rounded-full font-medium text-[11px] ${
                    step.status === "Interruption" ? "bg-[#FDF2F4] text-[#C93E50] border border-[#C93E50]/20" :
                    step.status === "Context drift" ? "bg-[#FEF7EA] text-[#B54708] border border-[#B54708]/20" :
                    step.status === "Focus building" ? "bg-[#EDFDF5] text-[#12B76A] border border-[#12B76A]/20" :
                    "bg-[#F5F5F7] text-[#6E6E73]"
                  }`}>
                    {step.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DISCIPLINE NEEDS AN ENVIRONMENT ── */}
      <section className="py-24 px-6 md:px-12 bg-[#F8F9FA] border-y border-[#E5E5E7]">
        <div className="max-w-[1120px] mx-auto space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider">Section 04</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
              Discipline is an environmental design problem.
            </h2>
            <p className="text-[#6E6E73] leading-relaxed">
              Decades of behavioral psychology (e.g., Wendy Wood, James Clear) show that sustained high performance rarely relies on raw willpower alone. High performers do not have infinite self-control; they intentionally engineer environments that make distraction difficult and intentional work frictionless.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              {
                step: "01",
                title: "Tangible Cues",
                desc: "Prominent physical artifacts anchor the subconscious to an intentional state before software is touched.",
              },
              {
                step: "02",
                title: "Constructive Friction",
                desc: "Placing physical resistance between yourself and distraction creates time for executive judgment to intervene.",
              },
              {
                step: "03",
                title: "Sensory Boundary",
                desc: "A glanceable change in ambient lighting or totem position establishes external spatial accountability.",
              },
              {
                step: "04",
                title: "Context Isolation",
                desc: "Separating working tools from communication feeds isolates working memory from extraneous stimuli.",
              },
            ].map((card, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] shadow-sm space-y-3">
                <span className="text-xs font-bold text-[#C93E50]">{card.step}</span>
                <h3 className="text-base font-semibold text-[#1D1D1F]">{card.title}</h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE NEXUS RING APPROACH ── */}
      <section className="py-24 px-6 md:px-12 max-w-[1120px] mx-auto">
        <div className="space-y-12">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider">Section 05</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
              The Nexus Ring approach: Physical Intent Computing.
            </h2>
            <p className="text-[#6E6E73] leading-relaxed">
              Nexus Ring bridges the gap between your physical workspace and your digital operating system. Rather than fighting distraction inside an app, you move a physical magnetic totem to initiate a mode transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "DECIDE",
                subtitle: "Choose Intention",
                desc: "Decide whether your next block is Deep Work, Creative ideation, Meeting collaboration, or Cognitive recovery.",
                color: "#C93E50",
              },
              {
                step: "MOVE",
                subtitle: "Physical Action",
                desc: "Lift and position the weighted magnetic totem into the corresponding quadrant. Magnetic pull snaps it into position.",
                color: "#1D1D1F",
              },
              {
                step: "SWITCH MODE",
                subtitle: "Hardware Sensing",
                desc: "Solid-state Hall-effect sensors detect magnetic flux and send a standard USB HID event to your local machine.",
                color: "#6E6E73",
              },
              {
                step: "PROTECT",
                subtitle: "Local Automation",
                desc: "Nexus Companion mutes notifications, routes distracting domains to localhost, and prepares your IDE or canvas.",
                color: "#12B76A",
              },
            ].map((node, idx) => (
              <div key={idx} className="surface-card p-6 rounded-2xl border border-[#E5E5E7] space-y-3">
                <span className="text-xs font-bold tracking-wider" style={{ color: node.color }}>
                  {node.step}
                </span>
                <h3 className="text-lg font-semibold text-[#1D1D1F]">{node.subtitle}</h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-semibold text-[#6E6E73] uppercase tracking-wider">Engineering Status</span>
              <p className="text-sm font-medium text-[#1D1D1F]">
                Contactless Hall-effect array and ESP32-C3 firmware validated. Companion OS automations in active engineering.
              </p>
            </div>
            <Link
              href="/hardware"
              className="btn-secondary text-xs px-5 py-2.5 shrink-0 flex items-center gap-2"
            >
              <span>Explore Hardware Specs</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PRACTICAL STRATEGIES ── */}
      <section className="py-24 px-6 md:px-12 bg-[#F8F9FA] border-y border-[#E5E5E7]">
        <div className="max-w-[1120px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider">Section 06</span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
              Actionable focus strategies you can use today.
            </h2>
            <p className="text-[#6E6E73] leading-relaxed">
              Reclaiming attention does not require purchasing any device. You can begin redesigning your digital workspace immediately with these evidence-backed protocols:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "1. The Default-Deny Notification Audit",
                desc: "Open OS notification settings. Toggle off all desktop notifications except direct person-to-person emergencies. News, social apps, sales promotions, and email digests must never produce alert sounds or banner toasts.",
              },
              {
                title: "2. Physical Device Separation",
                desc: "Place your smartphone outside arm's reach during deep work sprints. Empirical data shows having a smartphone in visual range exerts cognitive strain even when muted and powered down.",
              },
              {
                title: "3. Single-Task Browser Windows",
                desc: "Never conduct analytical work inside a browser window that holds social feeds or email tabs. Dedicate a clean, extension-free profile strictly to your active project.",
              },
              {
                title: "4. Physical Anchor Sessions",
                desc: "Before opening a text editor or IDE, write your single target objective on a physical index card. Place the card immediately below your monitor as an external visual anchor.",
              },
            ].map((strategy, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] shadow-sm space-y-3">
                <CheckCircle2 size={20} className="text-[#12B76A]" />
                <h3 className="text-base font-semibold text-[#1D1D1F]">{strategy.title}</h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">{strategy.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C93E50] hover:underline"
            >
              <span>Explore our comprehensive Discipline & Focus Research</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: JOIN DEVELOPMENT JOURNEY ── */}
      <section className="py-28 px-6 md:px-12 max-w-[800px] mx-auto text-center space-y-8">
        <span className="text-xs font-semibold text-[#C93E50] uppercase tracking-wider block">
          Take Back Control of Your Attention
        </span>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
          Reclaim your attention.
        </h2>
        <p className="text-lg text-[#6E6E73] leading-relaxed max-w-xl mx-auto">
          Follow the development of Nexus Ring. Receive genuine prototype milestones, CAD engineering updates, and early notification when the crowdfunding campaign launches.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="w-full sm:w-auto btn-accent px-8 py-3.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Join Early Access</span>
            <ChevronRight size={18} />
          </button>
          <Link
            href="/journal"
            className="w-full sm:w-auto btn-secondary px-8 py-3.5 flex items-center justify-center gap-2"
          >
            <BookOpen size={16} />
            <span>Read The Focus Journal</span>
          </Link>
        </div>

        <p className="text-xs text-[#6E6E73] pt-2">
          Free waitlist. Zero payment required. Unsubscribe anytime.
        </p>
      </section>

      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}
