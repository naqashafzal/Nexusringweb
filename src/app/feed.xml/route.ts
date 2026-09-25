import { NextResponse } from "next/server";
import { COMPARISONS } from "@/lib/comparisons-data";

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

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Nexus Ring | Intelligent Gatekeeper &amp; Focus Artifact</title>
    <link>${baseUrl}</link>
    <description>Engineering announcements, cognitive science research, and distraction elimination system updates for Nexus Ring.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title><![CDATA[Nexus Ring V1 Launch & Priority Queue Open]]></title>
      <link>${baseUrl}/campaign</link>
      <guid>${baseUrl}/campaign</guid>
      <pubDate>${now}</pubDate>
      <description><![CDATA[Batch 01 Priority Queue opens for the Nexus Ring intelligent gatekeeper. Precision 3D-printed chassis with ESP32-C3 RISC-V and 4x Hall-effect sensing array.]]></description>
      <category>Hardware Release</category>
    </item>

    <item>
      <title><![CDATA[Cognitive Science Whitepaper: Ego Depletion vs Spatial Habit Anchors]]></title>
      <link>${baseUrl}/research</link>
      <guid>${baseUrl}/research</guid>
      <pubDate>${now}</pubDate>
      <description><![CDATA[Why willpower fails and physical consequence succeeds: A scientific investigation into spatial focus anchors and digital dopamine loop interruption.]]></description>
      <category>Cognitive Science</category>
    </item>

    <item>
      <title><![CDATA[100% Air-Gapped Local Focus Guardian & Kernel Firewall]]></title>
      <link>${baseUrl}/software</link>
      <guid>${baseUrl}/software</guid>
      <pubDate>${now}</pubDate>
      <description><![CDATA[Sub-24ms local hardware interrupts, native OS socket firewalling, and local on-device AI focus inference with zero cloud telemetry.]]></description>
      <category>Software Architecture</category>
    </item>

    ${comparisonItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
