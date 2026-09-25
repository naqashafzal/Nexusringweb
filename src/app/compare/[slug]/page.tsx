import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPARISONS } from "@/lib/comparisons-data";
import CompareDetailClient from "./CompareDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(COMPARISONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = COMPARISONS[slug];

  if (!comparison) {
    return {
      title: "Comparison Not Found | Nexus Ring",
    };
  }

  const baseUrl = "https://www.nexusring.tech";

  return {
    title: comparison.metaTitle,
    description: comparison.metaDescription,
    alternates: {
      canonical: `/compare/${slug}`,
    },
    openGraph: {
      title: comparison.metaTitle,
      description: comparison.metaDescription,
      url: `${baseUrl}/compare/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.metaTitle,
      description: comparison.metaDescription,
    },
  };
}

export default async function CompareDetailPage({ params }: Props) {
  const { slug } = await params;
  const comparison = COMPARISONS[slug];

  if (!comparison) {
    notFound();
  }

  // Schema.org FAQPage and BreadcrumbList Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.nexusring.tech",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Compare",
            "item": "https://www.nexusring.tech/compare",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": comparison.heroTitle,
            "item": `https://www.nexusring.tech/compare/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": comparison.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CompareDetailClient comparison={comparison} />
    </>
  );
}
