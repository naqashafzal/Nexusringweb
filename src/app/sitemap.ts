import type { MetadataRoute } from "next";
import { COMPARISONS } from "@/lib/comparisons-data";
import { JOURNAL_ARTICLES } from "@/lib/journal-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nexusring.tech";

  // Core public pages with stable, authentic last-modified dates
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/digital-distraction`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/focus`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: "2026-10-31",
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/hardware`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/software`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/campaign`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/preorder`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/research`,
      lastModified: "2026-10-31",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-10-31",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Comparison Hub deep-dive pages
  const comparisonRoutes: MetadataRoute.Sitemap = Object.keys(COMPARISONS).map(
    (slug) => ({
      url: `${baseUrl}/compare/${slug}`,
      lastModified: "2026-10-31",
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })
  );

  // Focus Journal educational articles
  const journalRoutes: MetadataRoute.Sitemap = Object.values(JOURNAL_ARTICLES).map(
    (article) => ({
      url: `${baseUrl}/journal/${article.slug}`,
      lastModified: article.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })
  );

  return [...coreRoutes, ...comparisonRoutes, ...journalRoutes];
}
