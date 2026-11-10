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
      {
        "@type": "Question",
        name: "How does Nexus Ring function as a physical distraction killer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nexus Ring acts as a physical distraction killer by introducing real tactile friction against digital impulses. Unlike browser extensions or app blockers that can be bypassed in two clicks, leaving a focus session requires physically reaching across your desk and displacing the weighted magnetic totem, intercepting unconscious doomscrolling loops.",
        },
      },
      {
        "@type": "Question",
        name: "How does physical friction build work discipline without depending on willpower?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cognitive science and behavioral habit research (such as James Clear's Atomic Habits and Wendy Wood's context studies) show willpower is easily depleted. Nexus Ring uses environmental architecture: by assigning stable sensory inputs (a weighted totem, magnetic detent snap, and 360-degree ambient light) to distinct work states, your brain transitions into discipline automatically without struggling against temptation.",
        },
      },
      {
        "@type": "Question",
        name: "Can Nexus Ring provide focus assistance for people with ADHD or executive dysfunction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many neurodivergent individuals and knowledge workers with ADHD experience severe startup friction (task initiation inertia) and context-switching fatigue. The physical sensation of docking the totem provides an immediate tactile cue that signals the start of a deep work sprint, while the peripheral diffuse light provides calm status awareness without another demanding digital display.",
        },
      },
      {
        "@type": "Question",
        name: "How does Nexus Ring automate daily tasks and workspace setup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When you dock the totem into Deep Work, Creative, Meeting, or Break modes, the local companion daemon triggers custom OS workflows: launching your configured IDE or Figma, muting Slack or email notification banners, applying selective website filters, and starting focus timers—all in under 12 milliseconds without opening configuration menus.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose a physical desk controller instead of subscription software like Opal, Freedom, or Cold Turkey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Software-only blockers live inside the exact screen where distraction occurs and charge ongoing monthly fees. Nexus Ring is a one-time-purchase desk object that operates completely offline, enforces boundaries at the hardware level, and requires zero cloud accounts or recurring subscription fees.",
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
