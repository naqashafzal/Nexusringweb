"use client";

import React, { useState } from "react";
import Link from "next/link";
import { JOURNAL_ARTICLES } from "@/lib/journal-data";
import { Clock, ArrowRight } from "lucide-react";

export default function JournalIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const articles = Object.values(JOURNAL_ARTICLES);
  const categories = ["All", "Attention Economy", "Behavioral Science", "Digital Workspace", "Engineering & Hardware"];

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Focus Journal", url: "/journal" },
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

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The Focus Journal — Research, Ideas & Practical Systems",
    description: "Research, ideas, and practical systems for reclaiming attention in a distracted world.",
    url: "https://www.nexusring.tech/journal",
    publisher: {
      "@type": "Organization",
      name: "Nexus Ring",
      logo: {
        "@type": "ImageObject",
        url: "https://www.nexusring.tech/icon.svg",
      },
    },
  };

  return (
    <main className="bg-[#080B12] text-[#F8FAFC] font-sans min-h-screen selection:bg-[#FF405A]/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* ── Breadcrumb Bar ── */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-4 px-6 md:px-12 max-w-[1200px] mx-auto border-b border-[#283141]/50">
        <ol className="flex items-center gap-2 text-xs font-mono text-[#A5AFBF]">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li className="text-[#283141]">/</li>
          <li className="text-white font-medium" aria-current="page">Focus Journal</li>
        </ol>
      </nav>

      {/* ── HEADER ── */}
      <section className="pt-16 pb-16 px-6 md:px-12 max-w-[1200px] mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#283141] bg-[#101723] text-[#A5AFBF] text-[11px] font-mono tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF405A]" />
          EDITORIAL ESSAYS & EVIDENCE-BASED RESEARCH
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.02]">
          THE FOCUS JOURNAL
        </h1>

        <p className="text-lg sm:text-xl text-[#A5AFBF] max-w-2xl font-light leading-relaxed">
          Research, ideas, and practical systems for reclaiming attention in a distracted world.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-[#FF405A] text-white border-[#FF405A] shadow-[0_0_15px_rgba(255,64,90,0.35)]"
                  : "bg-[#101723] text-[#A5AFBF] border-[#283141] hover:text-white hover:border-[#A5AFBF]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="pb-28 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between p-7 rounded-3xl bg-[#101723] border border-[#283141] hover:border-[#FF405A]/50 transition-all duration-300 group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#FF405A] font-bold tracking-wider uppercase">
                    {article.category}
                  </span>
                  <span className="text-[#A5AFBF] flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-display font-bold text-white group-hover:text-[#FF405A] transition-colors leading-snug">
                  <Link href={`/journal/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-xs text-[#A5AFBF] line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#283141] flex items-center justify-between text-xs font-mono">
                <span className="text-[#A5AFBF]">{article.publishedAt}</span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="text-white font-medium flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} className="text-[#FF405A]" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Roadmap Notice */}
        <div className="mt-16 p-8 rounded-3xl bg-[#101723]/50 border border-[#283141] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#35C98A] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#35C98A]" />
            <span>Editorial Roadmap & Upcoming Research</span>
          </div>
          <p className="text-sm text-[#A5AFBF] leading-relaxed max-w-3xl">
            We are actively researching and drafting companion essays on: <em>How Algorithms Personalize Content and Encourage Engagement</em>, <em>The Difference Between Motivation, Discipline, and Environment Design</em>, and <em>Why Your Workspace Influences Your Working Habits</em>.
          </p>
        </div>
      </section>
    </main>
  );
}
