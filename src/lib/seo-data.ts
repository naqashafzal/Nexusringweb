/**
 * SEO, AI Search Engine (AEO/GEO) & Structured Data Engine
 * Generates Schema.org JSON-LD for generative engine optimization (GEO),
 * Google rich snippets, Perplexity, ChatGPT Search, Bing, and search-grounded LLM crawlers.
 */

import { JournalArticle } from "./journal-data";

export const SITE_CONFIG = {
  name: "Nexus Ring",
  legalName: "Nexus Ring",
  url: "https://www.nexusring.tech",
  tagline: "FORCE YOUR FOCUS. ENGINEER SUCCESS.",
  mission: "Take back control of your attention.",
  supportingStatement:
    "Your time is valuable. Your attention is limited. In a digital world competing to capture both, Nexus Ring is being built to help you choose what matters and protect the environment you need to pursue it.",
  canonicalProductDefinition:
    "Nexus Ring is a physical workspace controller in development that uses a magnetic totem and position sensing to select focus-related modes. Its planned companion software connects those choices with supported desktop automations, helping users create more intentional working environments.",
  description:
    "Meet Nexus Ring, a physical workspace controller in development. Designed to help you reduce digital distractions, choose your work mode with a magnetic totem, and reclaim your attention through local-first automation.",
  keywords: [
    "Nexus Ring",
    "Physical Workspace Controller",
    "Physical Intent Computing",
    "Focus Hardware",
    "Desk Interface",
    "Digital Distraction Solution",
    "Attention Economy",
    "Deep Work Setup",
    "Workspace Automation",
    "Hall Effect Magnetic Totem",
    "Local-First Productivity",
    "ESP32 Hardware Controller",
    "Calm Technology",
  ],
  founder: {
    name: "Naqash Afzal",
    jobTitle: "Founder & Hardware Architect",
    sameAs: [
      "https://github.com/naqashafzal",
      "https://g.dev/naqashafzal",
      "https://makerworld.com/en/@naqash",
      "https://www.linkedin.com/in/naqashafzal/",
      "https://www.freelancer.com/u/naqashafzal",
    ],
  },
  social: {
    github: "https://github.com/naqashafzal",
    googleDeveloper: "https://g.dev/naqashafzal",
    makerworld: "https://makerworld.com/en/@naqash",
    linkedin: "https://www.linkedin.com/in/naqashafzal/",
    freelancer: "https://www.freelancer.com/u/naqashafzal",
    discord: "https://discord.gg/Q3tTGhH4k",
  },
};

export function getStructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      "@id": `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/focus?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/branding/nexus-logo-horizontal.png`,
    description: SITE_CONFIG.description,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.founder.name,
      jobTitle: SITE_CONFIG.founder.jobTitle,
      sameAs: SITE_CONFIG.founder.sameAs,
    },
    sameAs: [
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.googleDeveloper,
      SITE_CONFIG.social.makerworld,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.freelancer,
      SITE_CONFIG.social.discord,
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_CONFIG.url}/#product`,
    name: "Nexus Ring — Physical Workspace Controller",
    image: [`${SITE_CONFIG.url}/opengraph-image`],
    description: SITE_CONFIG.canonicalProductDefinition,
    brand: {
      "@type": "Brand",
      name: "Nexus Ring",
    },
    category: "Electronics > Hardware > Productivity Tools",
    material: "Dual-Shell Modular Prototype Chassis (PLA-CF / PETG), Neodymium Totem, ESP32-C3 Controller Architecture",
    offers: [
      {
        "@type": "Offer",
        name: "Nexus Ring Early Access Waitlist",
        availability: "https://schema.org/PreOrder",
        price: "0.00",
        priceCurrency: "USD",
        url: `${SITE_CONFIG.url}/preorder`,
        description: "Early access waitlist registration. Prototype updates and launch announcements with no payment required.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Nexus Ring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: SITE_CONFIG.canonicalProductDefinition,
        },
      },
      {
        "@type": "Question",
        name: "Is Nexus Ring a wearable smart ring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Nexus Ring is a stationary, desk-based physical interface. It sits on your workspace alongside your keyboard and mouse. It does not track biometric pulses or require wrist wear.",
        },
      },
      {
        "@type": "Question",
        name: "How does the magnetic totem communicate with software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When the weighted magnetic totem is moved into a quadrant slot, internal digital Hall-effect sensors detect the magnetic flux density. The ESP32-C3 microcontroller interprets the position and transmits standard USB HID event packets to the local Nexus Companion software running on your computer.",
        },
      },
      {
        "@type": "Question",
        name: "What are the four operating modes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The four primary operating modes are Deep Work (distraction-free concentration with notification muting and domain filtering), Creative (divergent ideation and creative tool launching), Meeting (conferencing setups and audio status checks), and Break (deliberate boundary between work and cognitive recovery).",
        },
      },
      {
        "@type": "Question",
        name: "Does Nexus Ring require an internet connection or cloud account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Nexus Ring operates on a strict local-first philosophy. Core mode switching, application orchestration, notification muting, and local filtering are performed on-device without cloud telemetry, mandatory remote accounts, or background data collection.",
        },
      },
      {
        "@type": "Question",
        name: "Is Nexus Ring available to purchase today?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nexus Ring is currently under active prototype development. Interested users, developers, and makers can join the free, non-binding waitlist to receive authentic engineering milestones and early crowdfunding launch notice.",
        },
      },
    ],
  };

  return [websiteSchema, organizationSchema, productSchema, faqSchema];
}

/**
 * Generates Schema.org JSON-LD Article structured data for Focus Journal posts
 */
export function getArticleSchema(article: JournalArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_CONFIG.url}/journal/${article.slug}#article`,
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.summary,
    url: `${SITE_CONFIG.url}/journal/${article.slug}`,
    image: [`${SITE_CONFIG.url}/opengraph-image`],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
      url: SITE_CONFIG.founder.sameAs[0],
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/journal/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
    articleSection: article.category,
  };
}

/**
 * Generates BreadcrumbList Schema.org structured data
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}
