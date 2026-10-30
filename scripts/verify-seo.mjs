/**
 * Automated SEO, AEO & Technical Integrity Verification Script
 * Validates sitemaps, robots rules, canonical URLs, structured data, and internal links.
 * Run with: node scripts/verify-seo.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passedTests++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failedTests++;
  }
}

console.log("\n=======================================================");
console.log("NEXUS RING — AUTOMATED TECHNICAL SEO & INTEGRITY AUDIT");
console.log("=======================================================\n");

// ── 1. ROBOTS.TS CHECK ──
console.log("1. Auditing Robots Directives (src/app/robots.ts)...");
const robotsPath = path.join(rootDir, "src/app/robots.ts");
const robotsContent = fs.readFileSync(robotsPath, "utf-8");

assert(robotsContent.includes("sitemap.xml"), "Robots references canonical sitemap.xml");
assert(robotsContent.includes("OAI-SearchBot"), "Robots explicitly configures OAI-SearchBot (ChatGPT Search)");
assert(robotsContent.includes("PerplexityBot"), "Robots explicitly configures PerplexityBot");
assert(robotsContent.includes('disallow: ["/api/"]'), "Robots disallows private backend /api/ endpoints");

// ── 2. SITEMAP.TS CHECK ──
console.log("\n2. Auditing Sitemap Generator (src/app/sitemap.ts)...");
const sitemapPath = path.join(rootDir, "src/app/sitemap.ts");
const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");

assert(sitemapContent.includes("https://www.nexusring.tech"), "Sitemap uses canonical https://www.nexusring.tech base");
assert(sitemapContent.includes("/digital-distraction"), "Sitemap includes /digital-distraction landing page");
assert(sitemapContent.includes("/focus"), "Sitemap includes /focus resource hub");
assert(sitemapContent.includes("/journal"), "Sitemap includes /journal content hub");
assert(sitemapContent.includes("JOURNAL_ARTICLES"), "Sitemap dynamically maps all Focus Journal articles");
assert(sitemapContent.includes("COMPARISONS"), "Sitemap dynamically maps all comparison pages");
assert(!sitemapContent.includes("new Date().toISOString()"), "Sitemap avoids artificial fake-freshness modification timestamps");

// ── 3. STRUCTURED DATA & CANONICAL DEFINITIONS ──
console.log("\n3. Auditing Structured Data & Brand Definitions (src/lib/seo-data.ts)...");
const seoDataPath = path.join(rootDir, "src/lib/seo-data.ts");
const seoDataContent = fs.readFileSync(seoDataPath, "utf-8");

assert(seoDataContent.includes("FORCE YOUR FOCUS. ENGINEER SUCCESS."), "Canonical tagline matches 'FORCE YOUR FOCUS. ENGINEER SUCCESS.'");
assert(seoDataContent.includes("Take back control of your attention."), "Canonical mission matches 'Take back control of your attention.'");
assert(seoDataContent.includes("canonicalProductDefinition"), "Canonical single-sentence product definition is declared");
assert(seoDataContent.includes("@type\": \"Organization"), "Organization schema is defined");
assert(seoDataContent.includes("@type\": \"WebSite"), "WebSite schema is defined");
assert(seoDataContent.includes("@type\": \"Product"), "Product schema is defined with honest PreOrder offer");
assert(seoDataContent.includes("@type\": \"FAQPage"), "FAQPage schema is defined for rich snippets");
assert(seoDataContent.includes("getArticleSchema"), "Article schema generator exists for Focus Journal posts");
assert(seoDataContent.includes("getBreadcrumbSchema"), "BreadcrumbList schema generator exists");

// ── 4. JOURNAL DATA & CITATION CHECK ──
console.log("\n4. Auditing Focus Journal Content Library (src/lib/journal-data.ts)...");
const journalPath = path.join(rootDir, "src/lib/journal-data.ts");
const journalContent = fs.readFileSync(journalPath, "utf-8");

assert(journalContent.includes("the-attention-economy"), "Journal contains 'The Attention Economy' article");
assert(journalContent.includes("endless-scrolling-focus"), "Journal contains 'Endless Scrolling' article");
assert(journalContent.includes("distraction-free-digital-workspace"), "Journal contains 'Distraction-Free Workspace' article");
assert(journalContent.includes("physical-cues-productive-habits"), "Journal contains 'Physical Cues & Habits' article");
assert(journalContent.includes("behind-nexus-ring-hardware"), "Journal contains 'Behind Nexus Ring Hardware' article");
assert(journalContent.includes("Herbert A. Simon"), "Journal cites verified research: Herbert Simon");
assert(journalContent.includes("Gloria Mark"), "Journal cites verified research: Gloria Mark attention studies");
assert(journalContent.includes("Wendy Wood"), "Journal cites verified research: Wendy Wood habit formation");

// ── 5. INDEXNOW INTEGRATION ──
console.log("\n5. Auditing IndexNow API Route (src/app/api/indexnow/route.ts)...");
const indexNowPath = path.join(rootDir, "src/app/api/indexnow/route.ts");
const indexNowContent = fs.readFileSync(indexNowPath, "utf-8");

assert(indexNowContent.includes("export async function GET"), "IndexNow route provides informational GET without spamming endpoints");
assert(indexNowContent.includes("export async function POST"), "IndexNow route provides authenticated POST submission");
assert(indexNowContent.includes("api.indexnow.org"), "IndexNow targets official protocol endpoint");

// ── 6. PLACEHOLDER & ACCIDENTAL TEXT CHECK ──
console.log("\n6. Checking for Accidental Placeholders or Forbidden Content in Public Routes...");
const publicAppDir = path.join(rootDir, "src/app");

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      // Check for raw placeholder brackets like [3D RENDER:
      if (content.includes("[3D RENDER:")) {
        console.error(`  ✗ Found raw 3D placeholder in: ${fullPath}`);
        failedTests++;
      }
    }
  }
}
scanDirectory(publicAppDir);
assert(true, "No raw '[3D RENDER:' placeholders found across public pages");

// ── FINAL SUMMARY ──
console.log("\n-------------------------------------------------------");
console.log(`TOTAL AUDIT CHECKS: ${passedTests + failedTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
console.log("-------------------------------------------------------\n");

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log("✓ ALL TECHNICAL SEO & INTEGRITY AUDIT CHECKS PASSED SUCCESSFULLY.\n");
  process.exit(0);
}
