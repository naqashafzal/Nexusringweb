import { NextResponse } from "next/server";
import { COMPARISONS } from "@/lib/comparisons-data";
import { JOURNAL_ARTICLES } from "@/lib/journal-data";

export async function GET() {
  const baseUrl = "https://www.nexusring.tech";
  const now = new Date().toUTCString();

  const comparisonItems = Object.values(COMPARISONS).map((comp) => {
    return `
    <item>
      <title><![CDATA[${comp.heroTitle}]]></title>
      <link>${baseUrl}/compare/${comp.slug}</link>
      <guid>${baseUrl}/compare/${comp.slug}</guid>
      <pubDate>${now}</pubDate>
      <description><![CDATA[${comp.metaDescription}]]></description>
      <category>Product Comparison</category>
    </item>`;
  }).join("\n");

  const journalItems = Object.values(JOURNAL_ARTICLES).map((art) => {
    return `
    <item>
      <title><![CDATA[${art.title}]]></title>
      <link>${baseUrl}/journal/${art.slug}</link>
      <guid>${baseUrl}/journal/${art.slug}</guid>
      <pubDate>${new Date(art.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${art.summary}]]></description>
      <category>${art.category}</category>
    </item>`;
  }).join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nexus Ring — Engineering &amp; Development Feed</title>
    <link>${baseUrl}</link>
    <description>Engineering announcements, architecture milestones, and companion software development updates for Nexus Ring.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title><![CDATA[Nexus Ring Early Access Waitlist Active]]></title>
      <link>${baseUrl}/campaign</link>
      <guid>${baseUrl}/campaign</guid>
      <pubDate>${now}</pubDate>
      <description><![CDATA[Early access registration is open for the Nexus Ring physical workspace controller. Dual-shell prototype chassis with ESP32-C3 RISC-V controller and 4x Hall-effect contactless sensing array.]]></description>
      <category>Hardware Release</category>
    </item>

    <item>
      <title><![CDATA[Behavioral Psychology &amp; Focus Design Principles]]></title>
      <link>${baseUrl}/research</link>
      <guid>${baseUrl}/research</guid>
      <pubDate>${now}</pubDate>
      <description><![CDATA[Investigating physical friction, environmental cues, and workflow automation to reduce context-switching overhead.]]></description>
      <category>Design Research</category>
    </item>

    <item>
      <title><![CDATA[Nexus Companion: Local-First Desktop Automation]]></title>
      <link>${baseUrl}/software</link>
      <guid>${baseUrl}/software</guid>
      <pubDate>${now}</pubDate>
      <description><![CDATA[Connecting physical totem mode events to native desktop automations locally with zero cloud telemetry.]]></description>
      <category>Software Architecture</category>
    </item>

    ${comparisonItems}
    ${journalItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
