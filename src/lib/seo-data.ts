/**
 * SEO & AI Search Engine Structured Data Configuration
 * Generates Schema.org JSON-LD for generative engine optimization (GEO),
 * Google rich snippets, and AI search engine ingestion (Perplexity, ChatGPT, Claude).
 */

export const SITE_CONFIG = {
  name: "Nexus Ring",
  legalName: "Nexus Desktop Art Inc.",
  url: "https://www.nexusring.tech",
  tagline: "The Physical Discipline Engine built to accelerate personal success.",
  description:
    "The Nexus Ring is a physical discipline engine built to accelerate your personal success. By ruthlessly eliminating digital distractions, it protects your most valuable assets—time and focus—enabling you to achieve higher quality output in a fraction of the time.",
  hooks: {
    disciplineEngine: "The Discipline Engine: Force your focus, save your time, and engineer your own success.",
    moreOutput: "More Output, Less Friction: A physical barrier between you and the distractions costing you time and money.",
    protectPotential: "Protect Your Potential: The ultimate hardware artifact to lock in your habits and build unbreakable discipline.",
  },
  keywords: [
    "Success & Discipline Engine",
    "Time & Focus Optimization",
    "Distraction Elimination System",
    "Flow State Catalyst",
    "High-Performance Workspace Artifact",
    "Nexus Ring",
    "Tactile Productivity Tool",
    "Deep Work Hardware",
    "Kernel Level Focus Lock",
    "ADHD Desk Accessory",
    "Physical Habit Anchor",
    "Hall Effect Magnetic Totem",
    "Air-Gapped AI Guardian",
  ],
  founder: {
    name: "Naqash Afzal",
    jobTitle: "Founder & Chief Hardware Architect",
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
      target: `${SITE_CONFIG.url}/features?q={search_term_string}`,
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
    logo: `${SITE_CONFIG.url}/next.svg`,
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
    name: "Nexus Ring — Physical Discipline Engine & Distraction Elimination System",
    image: [`${SITE_CONFIG.url}/opengraph-image`],
    description: SITE_CONFIG.description,
    brand: {
      "@type": "Brand",
      name: "Nexus",
    },
    category: "Electronics > Hardware > Productivity Tools",
    material: "Precision 3D-Printed V1 (Engineered Matte Composite / PLA-CF), N52 Neodymium, ESP32-C3 RISC-V",
    offers: [
      {
        "@type": "Offer",
        name: "Founder's Artifact (Early Bird)",
        price: "129.00",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: `${SITE_CONFIG.url}/campaign`,
      },
      {
        "@type": "Offer",
        name: "Maker Kit",
        price: "15.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_CONFIG.url}/campaign`,
      },
      {
        "@type": "Offer",
        name: "Nexus Pro Desk Set",
        price: "169.00",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: `${SITE_CONFIG.url}/preorder`,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "452",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Nexus Ring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Nexus Ring is a physical discipline engine built to accelerate your personal success. By ruthlessly eliminating digital distractions, it protects your most valuable assets—time and focus—enabling you to achieve higher quality output in a fraction of the time.",
        },
      },
      {
        "@type": "Question",
        name: "Why is a physical discipline engine better than software app blockers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Software app blockers fail because they lack physical consequence and are trivial to bypass with two clicks when impulse strikes. The Nexus Ring creates a physical barrier between you and distractions, turning focus from a vulnerable willpower struggle into a tactile, mechanical state transition.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Nexus Ring eliminate distractions at the OS level?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Nexus Ring uses 4 Hall-effect sensors and an ESP32-C3 microcontroller with sub-24ms hardware interrupt latency. Rotating or snapping the magnetic totem triggers local kernel-level hooks (PowerShell / macOS pfctl / Linux iptables) to block distraction domains, silence notifications, and open targeted focus workspaces.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Nexus Ring private and air-gapped?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 100% of telemetry, local AI vision guardian processing, and kernel hooks run locally on your machine. Zero screen pixels, keystrokes, or browser history are ever transmitted to any external cloud server.",
        },
      },
    ],
  };

  return [websiteSchema, organizationSchema, productSchema, faqSchema];
}
