/**
 * SEO & AI Search Engine Structured Data Configuration
 * Generates Schema.org JSON-LD for generative engine optimization (GEO),
 * Google rich snippets, and AI search engine ingestion (Perplexity, ChatGPT, Claude).
 */

export const SITE_CONFIG = {
  name: "Nexus Ring",
  legalName: "Nexus Desktop Art Inc.",
  url: "https://www.nexusring.tech",
  tagline: "Bridging the gap between physical intention and digital execution.",
  description:
    "Nexus Ring is a desktop controller in development. Move a magnetic totem between four modes, with planned local automations for your digital workspace. Join the free launch waitlist.",
  hooks: {
    disciplineEngine: "Physical Intent Computing: PUT YOUR WORLD IN THE RIGHT MODE, save your time, and engineer your own success.",
    moreOutput: "More Output, Less Friction: Changing your digital environment should be as deliberate and physical as closing an office door.",
    protectPotential: "Protect Your Potential: The ultimate hardware artifact to act as a Physical Attention Operating System.",
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
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
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
    name: "Nexus Ring — Desktop Workspace Controller",
    image: [`${SITE_CONFIG.url}/opengraph-image`],
    description: SITE_CONFIG.description,
    brand: {
      "@type": "Brand",
      name: "Nexus",
    },
    category: "Electronics > Hardware > Productivity Tools",
    material: "Precision 3D-Printed V1 (Engineered Matte Composite / PLA-CF), N52 Neodymium, ESP32-C3 RISC-V",
  };

  return [websiteSchema, organizationSchema, productSchema];
}
