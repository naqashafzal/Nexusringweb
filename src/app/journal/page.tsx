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
    <main className="bg-[#FFFFFF] text-[#1D1D1F] font-sans min-h-screen selection:bg-[#C93E50]/15 selection:text-[#1D1D1F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* ── Breadcrumb Bar ── */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-4 page-container border-b border-[#E5E5E7]">
        <ol className="flex items-center gap-2 text-xs text-[#6E6E73]">
          <li>
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">Home</Link>
          </li>
          <li className="text-[#86868B]">/</li>
          <li className="text-[#1D1D1F] font-medium" aria-current="page">Focus Journal</li>
        </ol>
      </nav>

      {/* ── HEADER ── */}
      <section className="pt-16 pb-16 page-container space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E5E7] bg-[#F5F5F7] text-[#6E6E73] text-[11px] font-medium tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C93E50]" />
          Editorial Essays & Evidence-Based Research
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05]">
          The Focus Journal
        </h1>

        <p className="text-lg sm:text-xl text-[#6E6E73] max-w-3xl leading-relaxed">
          Research, ideas, and practical systems for reclaiming attention in a distracted world.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-[#1D1D1F] text-white border-[#1D1D1F]"
                  : "bg-[#F5F5F7] text-[#6E6E73] border-[#E5E5E7] hover:text-[#1D1D1F] hover:bg-[#E5E5E7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="pb-28 page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="surface-card flex flex-col justify-between p-7 rounded-3xl border border-[#E5E5E7] hover:border-[#1D1D1F]/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#C93E50] font-semibold tracking-wide uppercase">
                    {article.category}
                  </span>
                  <span className="text-[#6E6E73] flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-[#1D1D1F] group-hover:text-[#C93E50] transition-colors leading-snug">
                  <Link href={`/journal/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-[#6E6E73] line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E5E7] flex items-center justify-between text-xs">
                <span className="text-[#6E6E73]">{article.publishedAt}</span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="text-[#1D1D1F] font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} className="text-[#C93E50]" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Roadmap Notice */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F8F9FA] border border-[#E5E5E7] space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#12B76A] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#12B76A]" />
            <span>Editorial Roadmap & Upcoming Research</span>
          </div>
          <p className="text-sm text-[#6E6E73] leading-relaxed max-w-3xl">
            We are actively researching and drafting companion essays on: <em>How Algorithms Personalize Content and Encourage Engagement</em>, <em>The Difference Between Motivation, Discipline, and Environment Design</em>, and <em>Why Your Workspace Influences Your Working Habits</em>.
          </p>
        </div>
      </section>
    </main>
  );
}
