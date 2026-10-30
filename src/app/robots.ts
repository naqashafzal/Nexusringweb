import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Search engines, AI search engines, and answer engine retrieval crawlers
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Applebot",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
      // Restrict bulk data-mining / AI model-training bots from scraping backend routes
      {
        userAgent: [
          "GPTBot",
          "CCBot",
          "cohere-ai",
          "Bytespider",
          "Diffbot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.nexusring.tech/sitemap.xml",
    host: "https://www.nexusring.tech",
  };
}
