/**
 * SEO, AI Search Engine (AEO/GEO) & Structured Data Engine
 * Generates Schema.org JSON-LD for generative engine optimization (GEO),
 * Google rich snippets, Perplexity, ChatGPT Search, Bing, and search-grounded LLM crawlers.
 */

import { JournalArticle } from "./journal-data";
import { KICKSTARTER_FAQS, KICKSTARTER_TIERS, KICKSTARTER_URL } from "./kickstarter-data";

export const SITE_CONFIG = {
  name: "Nexus Ring",
  legalName: "Nexus Ring",
  url: "https://www.nexusring.tech",
  tagline: "NEXUS RING: PHYSICAL SWITCH FOR YOU.",
  mission: "Stop giving your best hours away.",
  supportingStatement:
    "Dock the totem. Open your work tools. Restrict distractions across Windows, macOS, Linux, Android & iOS. No subscription.",
  canonicalProductDefinition:
    "Nexus Ring is a USB-C desk dock and magnetic totem that switches your PC (Windows, macOS, or Linux) and paired phone (Android or iOS) into the workspace you configure across Deep Work, Creative, Meeting, and Break modes—with lifetime core apps and zero mandatory subscription.",
  description:
    "Dock the totem. Open your work tools. Restrict distractions across Windows, macOS, Linux, Android & iOS. Built and tested physical focus switch launching on Kickstarter ($39–$199), no subscription.",
  keywords: [
    // Core Brand & Product Identity
    "Nexus Ring",
    "Nexus Ring hardware",
    "Physical Workspace Controller",
    "Physical Intent Computing",
    "Desk Interface",
    "Tactile Workspace Controller",
    "Calm Technology",
    "Desk Object Controller",
    "Magnetic Totem Controller",
    "Hall Effect Magnetic Totem",
    "Local-First Productivity",
    "ESP32 Hardware Controller",

    // Focus Assistance & Concentration Aids
    "focus assistance",
    "focus assistant device",
    "focus assistance tool",
    "deep focus tools",
    "concentration gadget for desk",
    "study focus device",
    "deep work setup",
    "flow state trigger device",
    "tools to get into flow state",
    "ADHD focus desk controller",
    "ADHD concentration tools for adults",
    "tactile focus anchor",
    "sensory concentration aid",
    "focus stamina builder",
    "daily focus routine",
    "monk mode desk setup",
    "focus rituals for knowledge workers",
    "tools to stay focused on computer",
    "deep concentration desk accessory",
    "focus aids for developers",
    "designer focus workspace",
    "student study concentration tool",
    "writer deep focus tool",
    "pomodoro alternative physical tool",
    "analog focus aid for digital work",
    "cognitive stamina tools",
    "focus booster hardware",
    "mental clarity desk setup",
    "screen-free focus assistant",
    "ambient focus indicator",

    // Distraction Killer & Anti-Doomscrolling
    "distraction killer",
    "digital distraction killer",
    "distraction killer device",
    "kill digital distractions",
    "how to stop doomscrolling while working",
    "stop checking phone while working",
    "stop social media addiction at desk",
    "website blocker hardware",
    "physical distraction blocker",
    "anti-procrastination device",
    "how to break dopamine loops",
    "dopamine detox desk setup",
    "physical switch to block youtube",
    "unhackable distraction shield",
    "stop getting distracted by notifications",
    "distraction free workstation",
    "feed blocker hardware",
    "stop context switching while coding",
    "friction against impulsive browsing",
    "phone lockbox alternative for pc",
    "relapse prevention productivity",
    "screen fatigue relief",
    "calm workspace distraction eliminator",
    "stop browsing reddit at work",
    "block distracting websites permanently during deep work",
    "impulse control desk tool",
    "stop mindless tab switching",
    "hardware website blocker",
    "physical barrier to distraction",
    "remove digital noise at desk",
    "how to kill distractions while studying",
    "anti-doomscroll gadget",

    // Self-Discipline & Habit Architecture
    "discipline without willpower",
    "how to be disciplined every day",
    "build self discipline for work",
    "friction principle productivity",
    "environmental habit triggers",
    "James Clear atomic habits desk tools",
    "tactile habit loop",
    "physical cue for productive habits",
    "stopping cues for work",
    "intentional living desk accessories",
    "work ethic habit anchors",
    "behavioral design for productivity",
    "executive function support tools",
    "overcome lack of willpower",
    "structured workday habits",
    "physical boundary for remote work",
    "work life separation at desk",
    "discipline habit controller",
    "daily deep work discipline",
    "effortless discipline systems",
    "friction design for bad habits",
    "habit stacking desk anchor",
    "context dependent memory productivity",
    "how to resist digital temptation",
    "self control desk gadgets",
    "discipline enforcement device",
    "sustainable work discipline",
    "how to stop procrastinating hard tasks",
    "behavioral momentum for deep work",
    "end procrastination with physical cues",

    // Task Execution & Desk Automation
    "physical task switcher",
    "workspace mode controller",
    "one move workspace setup",
    "focus session hardware",
    "desk automation controller",
    "physical productivity controller",
    "hardware desk interface",
    "magnetic totem mode selector",
    "desk setup for high output",
    "mechanical workspace switcher",
    "stream deck alternative for focus",
    "desk macro controller for productivity",
    "automate deep work profile",
    "mute notifications with physical gesture",
    "launch coding workspace automatically",
    "custom desk peripheral for work",
    "physical trigger for computer profiles",
    "USB desk controller for focus",
    "local workspace automation",
    "one touch deep work setup",
    "desktop workflow orchestrator",
    "tactile mode switcher",
    "operating mode controller",
    "four states of mind desk controller",
    "meeting mode auto mute tool",
    "creative mode desk launcher",
    "break mode rest reminder",
    "screen time limiter physical interface",
    "desk task manager hardware",
    "workspace context switcher",

    // Natural Language Search Questions & Prompts
    "how do I stop getting distracted while working on my computer",
    "is there a physical device to help you focus",
    "best desk accessories for ADHD and focus",
    "how to block distracting websites without an app subscription",
    "how to create a distraction free desk environment",
    "what is a physical intent controller",
    "how to stop impulsive phone checking during deep work",
    "hardware vs software website blockers",
    "tools to help software engineers focus on coding",
    "calm technology tools for home office",
    "how to build focus stamina for 4 hours of deep work",
    "device that switches computer modes physically",
    "how to separate work and rest on the same computer",
    "tactile tools to get started on difficult tasks",
    "how to reduce context switching at work",
    "physical anchor to defeat doomscrolling",
    "best productivity tools without recurring subscription",
    "how to enter flow state using physical cues",
    "gadgets that help you focus without a screen",
    "how to stop opening new tabs when stuck",
    "physical tools for remote work productivity",
    "hardware gadgets for deep work",
    "best focus tools for programmers",
    "how to stop wasting time on twitter while working",
    "tactile productivity devices",

    // Professional Archetype Queries
    "focus tools for software engineers",
    "focus setup for UI UX designers",
    "study focus aid for medical students",
    "focus systems for startup founders",
    "deep work routine for academic researchers",
    "distraction free writing desk setup",
    "flow state controller for music producers",
    "focus habits for technical writers",
    "focus setup for remote workers",
    "coding distraction blocker",
    "designer moodboard distraction filter",
    "law student study focus accessory",
    "financial analyst focus workstation",
    "high output desk setup",

    // Maker, CAD & Open Engineering
    "3D printed focus device",
    "ESP32 desk controller",
    "Hall effect magnetic totem",
    "open source productivity hardware",
    "maker edition focus controller",
    "CAD files for desk accessories",
    "BOM for DIY productivity controller",
    "custom silicon focus interface",
    "local first desk daemon",
    "privacy first workspace controller",
    "screen-free desk gadget",
    "diffuse ambient light focus indicator",
    "calm desk lighting for focus",
    "billet aluminum desk totem",
    "tactile desktop interface",
    "FDM printable productivity controller",
    "PLA-CF desk interface",
    "RISC-V embedded productivity gadget",
    "USB HID local daemon",
    "offline productivity controller",
  ],
  founder: {
    name: "Naqash Afzal Zakria",
    jobTitle: "Founder & Hardware Architect",
    sameAs: [
      KICKSTARTER_URL,
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
    name: "Nexus Ring: Physical Switch for You",
    image: [
      `${SITE_CONFIG.url}/images/kickstarter/ks-hero-poster.png`,
      `${SITE_CONFIG.url}/images/kickstarter/ks-desk-prototype-hero.jpg`,
    ],
    description: SITE_CONFIG.canonicalProductDefinition,
    brand: {
      "@type": "Brand",
      name: "Nexus Ring",
    },
    category: "Electronics > Hardware > Productivity Tools",
    material: "Metal-body desk enclosure (Day Silver / Night Obsidian Black), Magnetic Totem, Wired USB-C",
    offers: KICKSTARTER_TIERS.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      availability: "https://schema.org/PreOrder",
      price: tier.priceNumber.toFixed(2),
      priceCurrency: "USD",
      url: KICKSTARTER_URL,
      description: tier.description,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KICKSTARTER_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
