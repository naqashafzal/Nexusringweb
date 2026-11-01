import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JOURNAL_ARTICLES } from "@/lib/journal-data";
import { getArticleSchema, getBreadcrumbSchema, SITE_CONFIG } from "@/lib/seo-data";
import {
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(JOURNAL_ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES[slug];
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/journal/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE_CONFIG.url}/journal/${slug}`,
      siteName: SITE_CONFIG.name,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES[slug];

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Focus Journal", url: "/journal" },
    { name: article.title, url: `/journal/${slug}` },
  ];

  const breadcrumbJsonLd = getBreadcrumbSchema(breadcrumbs);
  const articleJsonLd = getArticleSchema(article);

  const relatedArticles = article.relatedSlugs
    .map((rSlug) => JOURNAL_ARTICLES[rSlug])
    .filter(Boolean);

  return (
    <main className="bg-[#080A0E] text-[#F5F6F8] font-sans min-h-screen selection:bg-[#D83A50]/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* ── Breadcrumb Bar ── */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-4 px-6 md:px-12 max-w-[1000px] mx-auto border-b border-[#303A48]/50">
        <ol className="flex items-center gap-2 text-xs font-mono text-[#A5AFBD] overflow-x-auto whitespace-nowrap">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </li>
          <li className="text-[#303A48]">/</li>
          <li>
            <Link href="/journal" className="hover:text-white transition-colors">Focus Journal</Link>
          </li>
          <li className="text-[#303A48]">/</li>
          <li className="text-white font-medium truncate max-w-[240px] sm:max-w-none" aria-current="page">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* ── ARTICLE HEADER ── */}
      <header className="pt-12 pb-12 px-6 md:px-12 max-w-[1000px] mx-auto space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-[#11151C] border border-[#303A48] text-[#D83A50] font-bold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-[#A5AFBD] flex items-center gap-1.5">
            <Clock size={13} />
            {article.readTime}
          </span>
          <span className="text-[#303A48]">·</span>
          <span className="text-[#A5AFBD] flex items-center gap-1.5">
            <Calendar size={13} />
            Published {article.publishedAt}
          </span>
          {article.updatedAt !== article.publishedAt && (
            <span className="text-[11px] text-[#A5AFBD]/70 font-mono">
              (Updated {article.updatedAt})
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white leading-[1.08]">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#A5AFBD] font-light leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author Bio Box */}
        <div className="p-4 rounded-2xl bg-[#11151C] border border-[#303A48] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D83A50]/20 border border-[#D83A50]/40 flex items-center justify-center text-[#D83A50] font-bold text-sm">
              NA
            </div>
            <div>
              <p className="text-sm font-bold text-white font-display">{article.author.name}</p>
              <p className="text-xs font-mono text-[#A5AFBD]">{article.author.role}</p>
            </div>
          </div>
          <Link
            href="/about"
            className="text-xs font-mono text-[#A5AFBD] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Author Bio</span>
            <ChevronRight size={13} />
          </Link>
        </div>
      </header>

      {/* ── TABLE OF CONTENTS ── */}
      <section className="px-6 md:px-12 max-w-[1000px] mx-auto mb-12">
        <div className="p-6 rounded-2xl bg-[#11151C]/60 border border-[#303A48] space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-white uppercase tracking-wider font-semibold">
            <BookOpen size={14} className="text-[#D83A50]" />
            <span>Table of Contents</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#A5AFBD]">
            {article.tableOfContents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-white hover:underline transition-colors">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="px-6 md:px-12 max-w-[1000px] mx-auto prose prose-invert prose-slate prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-p:text-[#A5AFBD] prose-p:leading-relaxed prose-li:text-[#A5AFBD] prose-strong:text-white prose-blockquote:border-[#D83A50] prose-blockquote:bg-[#11151C] prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-blockquote:text-[#F5F6F8]">
        <div className="space-y-6 text-[#A5AFBD] text-base leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </article>

      {/* ── SOURCES & CITATIONS ── */}
      <section className="px-6 md:px-12 max-w-[1000px] mx-auto mt-16 pt-10 border-t border-[#303A48]">
        <div className="space-y-4">
          <h2 className="text-sm font-mono text-white uppercase tracking-wider font-semibold">
            References & Primary Sources
          </h2>
          <ul className="space-y-2 text-xs font-mono text-[#A5AFBD]">
            {article.sources.map((src, idx) => (
              <li key={idx} className="p-3 rounded-lg bg-[#11151C] border border-[#303A48]/60 flex items-start justify-between gap-4">
                <span>
                  <strong className="text-white">{src.author}</strong> ({src.year}). <em>{src.title}</em>.
                </span>
                {src.link && (
                  <a
                    href={src.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D83A50] hover:underline shrink-0 flex items-center gap-1"
                  >
                    <span>Source</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PRODUCT CONNECTION BOX ── */}
      <section className="px-6 md:px-12 max-w-[1000px] mx-auto my-16">
        <div className="p-8 rounded-3xl bg-[#11151C] border border-[#303A48] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#D83A50] uppercase tracking-wider block font-bold">
              Connecting Philosophy to Hardware
            </span>
            <h3 className="text-xl font-display font-bold text-white">
              Nexus Ring: Physical Intent Computing
            </h3>
            <p className="text-xs text-[#A5AFBD] max-w-lg leading-relaxed">
              We are engineering a physical desk controller to make intentional work easier to begin and protect. Solid-state magnetic sensing, local-first companion software, and zero external telemetry.
            </p>
          </div>
          <Link
            href="/hardware"
            className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#D83A50] hover:bg-[#EB5268] transition-all shrink-0 shadow-[0_0_20px_rgba(255,64,90,0.3)]"
          >
            Explore Hardware Specs
          </Link>
        </div>
      </section>

      {/* ── RELATED READING ── */}
      {relatedArticles.length > 0 && (
        <section className="px-6 md:px-12 max-w-[1000px] mx-auto pb-24 border-t border-[#303A48] pt-12 space-y-6">
          <h2 className="text-sm font-mono text-white uppercase tracking-wider font-semibold">
            Related Research & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/journal/${rel.slug}`}
                className="p-5 rounded-2xl bg-[#11151C] border border-[#303A48] hover:border-[#D83A50]/50 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#D83A50] uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#D83A50] transition-colors font-display line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-4 text-xs font-mono text-[#A5AFBD] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight size={12} className="text-[#D83A50]" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
