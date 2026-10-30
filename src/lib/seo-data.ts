/**
 * SEO & AI Search Engine Structured Data Configuration
 * Generates Schema.org JSON-LD for generative engine optimization (GEO),
 * Google rich snippets, and AI search engine ingestion (Perplexity, ChatGPT, Claude).
 */

export const SITE_CONFIG = {
  name: "Nexus Ring",
  legalName: "Nexus Ring",
  url: "https://www.nexusring.tech",
  tagline: "One physical move. Your workspace follows.",
  description:
    "Nexus Ring is a physical control interface designed to connect your intention with your digital workspace. Move the magnetic totem to select a mode and let Nexus Companion prepare your environment for the work ahead.",
  hooks: {
    disciplineEngine: "Physical Intent Computing: One physical move. Your workspace follows.",
    moreOutput: "From intention to action: Changing your digital environment through a deliberate physical gesture.",
    protectPotential: "Engineered for intention: A desk-based physical interface connecting deliberate actions with workspace automation.",
  },
  keywords: [
    "Nexus Ring",
    "Physical Workspace Controller",
    "Physical Intent Computing",
    "Focus Hardware",
    "Desk Interface",
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
    logo: `${SITE_CONFIG.url}/icon.svg`,
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
    description: SITE_CONFIG.description,
    brand: {
      "@type": "Brand",
      name: "Nexus Ring",
    },
    category: "Electronics > Hardware > Productivity Tools",
    material: "Prototype 3D-Printed Chassis (PLA-CF / PETG), Neodymium Totem, ESP32-C3 Controller Architecture",
    offers: [
      {
        "@type": "Offer",
        name: "Nexus Ring Early Access",
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
        name: "What is the Nexus Ring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nexus Ring is a desk-based physical interface designed to connect deliberate physical actions with digital workspace automation. A user moves a magnetic totem into one of four designated positions to select their intended working mode.",
        },
      },
      {
        "@type": "Question",
        name: "How does the hardware work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When the weighted magnetic totem is moved into a position, onboard Hall-effect sensors detect the magnetic field change. The microcontroller interprets the position and communicates the selected mode to companion software on your computer.",
        },
      },
      {
        "@type": "Question",
        name: "What are the four operating modes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The four primary operating modes are Deep Work (distraction-free concentration), Creative (exploratory workflow), Meeting (communication-focused setup), and Break (deliberate boundary between work and recovery).",
        },
      },
      {
        "@type": "Question",
        name: "Is Nexus Ring currently available for purchase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nexus Ring is currently under active development. Visitors can join the early access waitlist to receive prototype progress updates and launch news with no payment required.",
        },
      },
      {
        "@type": "Question",
        name: "What does local-first mean for Nexus Ring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Core workspace automation profiles are designed to run locally on your host machine without requiring external cloud servers for basic mode switching.",
        },
      },
    ],
  };

  return [websiteSchema, organizationSchema, productSchema, faqSchema];
}
