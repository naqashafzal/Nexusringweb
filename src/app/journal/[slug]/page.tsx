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
      <nav aria-label="Breadcrumb" className="pt-24 pb-4 page-container border-b border-[#E5E5E7]">
        <ol className="flex items-center gap-2 text-xs text-[#6E6E73] overflow-x-auto whitespace-nowrap">
          <li>
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">Home</Link>
          </li>
          <li className="text-[#86868B]">/</li>
          <li>
            <Link href="/journal" className="hover:text-[#1D1D1F] transition-colors">Focus Journal</Link>
          </li>
          <li className="text-[#86868B]">/</li>
          <li className="text-[#1D1D1F] font-medium truncate max-w-[240px] sm:max-w-none" aria-current="page">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* ── ARTICLE HEADER ── */}
      <header className="pt-12 pb-12 editorial-container space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-[#FDF2F4] border border-[#C93E50]/20 text-[#C93E50] font-semibold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-[#6E6E73] flex items-center gap-1.5">
            <Clock size={13} />
            {article.readTime}
          </span>
          <span className="text-[#86868B]">·</span>
          <span className="text-[#6E6E73] flex items-center gap-1.5">
            <Calendar size={13} />
            Published {article.publishedAt}
          </span>
          {article.updatedAt !== article.publishedAt && (
            <span className="text-[11px] text-[#86868B]">
              (Updated {article.updatedAt})
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.08]">
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#6E6E73] leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author Bio Box */}
        <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E7] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1D1D1F] text-white flex items-center justify-center font-semibold text-sm">
              NA
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1D1D1F]">{article.author.name}</p>
              <p className="text-xs text-[#6E6E73]">{article.author.role}</p>
            </div>
          </div>
          <Link
            href="/about"
            className="text-xs text-[#6E6E73] hover:text-[#1D1D1F] transition-colors flex items-center gap-1"
          >
            <span>Author Bio</span>
            <ChevronRight size={13} />
          </Link>
        </div>
      </header>

      {/* ── TABLE OF CONTENTS ── */}
      <section className="editorial-container mb-12">
        <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#E5E5E7] space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1D1D1F]">
            <BookOpen size={14} className="text-[#C93E50]" />
            <span>Table of Contents</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6E6E73]">
            {article.tableOfContents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-[#1D1D1F] hover:underline transition-colors">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="editorial-container prose prose-slate prose-headings:font-semibold prose-headings:text-[#1D1D1F] prose-p:text-[#6E6E73] prose-p:leading-relaxed prose-li:text-[#6E6E73] prose-strong:text-[#1D1D1F] prose-blockquote:border-[#C93E50] prose-blockquote:bg-[#F8F9FA] prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-blockquote:text-[#1D1D1F]">
        <div className="space-y-6 text-[#6E6E73] text-base leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </article>

      {/* ── SOURCES & CITATIONS ── */}
      <section className="editorial-container mt-16 pt-10 border-t border-[#E5E5E7]">
        <div className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
            References & Primary Sources
          </h2>
          <ul className="space-y-2 text-xs text-[#6E6E73]">
            {article.sources.map((src, idx) => (
              <li key={idx} className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E5E5E7] flex items-start justify-between gap-4">
                <span>
                  <strong className="text-[#1D1D1F] font-semibold">{src.author}</strong> ({src.year}). <em>{src.title}</em>.
                </span>
                {src.link && (
                  <a
                    href={src.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C93E50] hover:underline shrink-0 flex items-center gap-1 font-medium"
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
      <section className="page-container my-16">
        <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-[#E5E5E7] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-[11px] font-semibold text-[#C93E50] uppercase tracking-wider block">
              Connecting Philosophy to Hardware
            </span>
            <h3 className="text-xl font-semibold text-[#1D1D1F]">
              Nexus Ring: Physical Intent Computing
            </h3>
            <p className="text-xs text-[#6E6E73] max-w-xl leading-relaxed">
              We are engineering a physical desk controller to make intentional work easier to begin and protect. Solid-state magnetic sensing, local-first companion software, and zero external telemetry.
            </p>
          </div>
          <Link
            href="/hardware"
            className="btn-primary text-xs px-6 py-3 shrink-0"
          >
            Explore Hardware Specs
          </Link>
        </div>
      </section>

      {/* ── RELATED READING ── */}
      {relatedArticles.length > 0 && (
        <section className="page-container pb-24 border-t border-[#E5E5E7] pt-12 space-y-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
            Related Research & Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/journal/${rel.slug}`}
                className="surface-card p-5 rounded-2xl border border-[#E5E5E7] hover:border-[#1D1D1F]/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-[#C93E50] uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-semibold text-[#1D1D1F] group-hover:text-[#C93E50] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-4 text-xs text-[#6E6E73] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-medium">
                  <span>Read Article</span>
                  <ArrowRight size={12} className="text-[#C93E50]" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
