export const KICKSTARTER_URL =
  "https://www.kickstarter.com/projects/naqash/1134359888?ref=9p7zyz&token=d99c42f6";

export const KICKSTARTER_CAMPAIGN = {
  title: "Nexus Ring: Physical Switch for You",
  blurb:
    "Dock the totem. Open your work tools. Restrict distractions across Windows, macOS, Linux, Android & iOS. No subscription.",
  creator: "Naqash Afzal Zakria",
  category: "Gadgets",
  location: "Lahore, Pakistan",
  fundingGoal: "US$ 10,000",
  durationDays: 48,
  estimatedDelivery: "July 2027",
  heroPoster: "/images/kickstarter/ks-hero-poster.png",
  deskPrototypeHero: "/images/kickstarter/ks-desk-prototype-hero.jpg",
} as const;

export interface KickstarterTier {
  id: string;
  name: string;
  shortName: string;
  price: string;
  priceNumber: number;
  regularPrice?: string;
  badge: string;
  limit: string;
  delivery: string;
  shipping: string;
  image: string;
  featured?: boolean;
  description: string;
  items: { label: string; qty: number }[];
}

export const KICKSTARTER_TIERS: KickstarterTier[] = [
  {
    id: "maker-kit",
    name: "Nexus: Digital Maker Kit",
    shortName: "Digital Maker Kit",
    price: "$39",
    priceNumber: 39,
    badge: "Digital DIY",
    limit: "Unlimited",
    delivery: "Jul 2027",
    shipping: "Digital fulfillment (no shipping)",
    image: "/images/kickstarter/ks-tier-maker-39.jpg",
    description:
      "Kickstarter-exclusive price. Build your own Nexus Ring and run the full distraction-blocking ecosystem. Includes 3D-printable enclosure files (STL/STEP), bill of materials (BOM), embedded firmware & flashing guide, desktop (Windows, macOS, Linux) & mobile (Android, iOS) companion apps (no mandatory subscription), and a step-by-step assembly guide.",
    items: [
      { label: "Digital Maker Kit — print files, BOM, guides and firmware", qty: 1 },
      { label: "Nexus Companion Apps (Desktop & Mobile — Lifetime Core)", qty: 1 },
    ],
  },
  {
    id: "early-bird",
    name: "Early Bird: Nexus & App",
    shortName: "Early Bird",
    price: "$89",
    priceNumber: 89,
    regularPrice: "$199",
    badge: "First 50 Backers",
    limit: "Limited to 50 backers",
    delivery: "Jul 2027",
    shipping: "Worldwide shipping (post-campaign survey)",
    image: "/images/kickstarter/ks-tier-early-bird-89.jpg",
    description:
      "Kickstarter-only Early Bird price (limited to 50 backers). Get the complete, assembled metal-body Nexus Ring physical switch & docking totem, plus lifetime core access to the desktop (Windows, macOS, Linux) and mobile (Android, iOS) companion software with zero recurring subscription fees. Choose between Day (Silver) or Night (Obsidian Black) finish in the post-campaign survey.",
    items: [
      { label: "Metal-body Nexus Ring desk dock", qty: 1 },
      { label: "Magnetic totem", qty: 1 },
      { label: "USB-C cable", qty: 1 },
      { label: "Nexus Companion Apps (Desktop & Mobile — Lifetime Core)", qty: 1 },
    ],
  },
  {
    id: "kickstarter-special",
    name: "Nexus + Apps",
    shortName: "Kickstarter Special",
    price: "$109",
    priceNumber: 109,
    regularPrice: "$199",
    badge: "Featured",
    limit: "Limited to 200 backers",
    delivery: "Jul 2027",
    shipping: "Worldwide shipping (post-campaign survey)",
    image: "/images/kickstarter/ks-tier-special-109.jpg",
    featured: true,
    description:
      "Kickstarter-exclusive price (limited to 200 backers). One complete, assembled metal-body Nexus Ring physical switch and magnetic docking totem, ready to dock and take back control of your workday right out of the box. Includes lifetime core access to the desktop (Windows, macOS, Linux) and mobile (Android, iOS) companion apps with zero mandatory subscription fees. Choose between Day (Silver) or Night (Obsidian Black) finish in the post-campaign survey.",
    items: [
      { label: "Metal-body Nexus Ring desk dock", qty: 1 },
      { label: "Magnetic totem", qty: 1 },
      { label: "USB-C cable", qty: 1 },
      { label: "Nexus Companion Apps (Desktop & Mobile — Lifetime Core)", qty: 1 },
    ],
  },
  {
    id: "duo-pack",
    name: "Nexus Ring Duo Pack — 2x Units",
    shortName: "Duo Pack (Day & Night)",
    price: "$199",
    priceNumber: 199,
    regularPrice: "$398",
    badge: "2x Units · 50 Backers",
    limit: "Limited to 50 backers",
    delivery: "Jul 2027",
    shipping: "Worldwide shipping (post-campaign survey)",
    image: "/images/kickstarter/ks-tier-duo-199.jpg",
    description:
      "Kickstarter-exclusive bundle price (limited to 50 backers). Get both the Day (Silver) and Night (Obsidian Black) editions in one exclusive Duo Pack—keep one Nexus Ring at your home desk and one at the office, or share with a teammate. Includes two complete, assembled Nexus Ring hardware units, two magnetic docking totems, two USB-C cables, and lifetime core desktop (Windows, macOS, Linux) & mobile (Android, iOS) companion software access for both setups.",
    items: [
      { label: "Metal-body Nexus Ring desk dock (Day Silver + Night Obsidian Black)", qty: 2 },
      { label: "Magnetic totem", qty: 2 },
      { label: "USB-C cable", qty: 2 },
      { label: "Nexus Companion Apps (Desktop & Mobile — Lifetime Core)", qty: 2 },
    ],
  },
];

export const KICKSTARTER_FINISHES = [
  {
    id: "night",
    name: "Night (Obsidian Black)",
    color: "#0D1016",
    accent: "#D83A50",
    desc: "Durable metal-body desk enclosure in deep Obsidian Black with a high-contrast ambient LED ring and matching magnetic totem. Selectable in the post-campaign survey.",
  },
  {
    id: "day",
    name: "Day (Silver)",
    color: "#D8DCE3",
    accent: "#F0B35A",
    desc: "Clean brushed Silver metal-body enclosure designed for bright studio and minimalist desks, with warm ambient ring feedback. Selectable in the post-campaign survey.",
  },
  {
    id: "duo",
    name: "Day & Night Duo Pack",
    color: "#1B222D",
    accent: "#35C98A",
    desc: "Both the Day (Silver) and Night (Obsidian Black) assembled metal-body units—one for your home desk and one for the office, or to share with a teammate.",
  },
] as const;

export const KICKSTARTER_MODES = [
  {
    name: "Deep Work",
    color: "#D83A50",
    summary:
      "Writing, coding, and demanding tasks, with selected distractions out of the way.",
  },
  {
    name: "Creative",
    color: "#A855F7",
    summary:
      "Your design, editing, music, or 3D tools ready together.",
  },
  {
    name: "Meeting",
    color: "#38BDF8",
    summary:
      "Your call tools available and supported notification interruptions reduced.",
  },
  {
    name: "Break",
    color: "#F0B35A",
    summary: "A clear change of pace between work sessions.",
  },
] as const;

export const KICKSTARTER_TOOL_GROUPS = [
  {
    title: "Physical control",
    bullets: [
      "Magnetic totem and four physical mode positions: Deep Work, Creative, Meeting, and Break.",
      "Lift-to-undock control to end the focus configuration.",
      "USB-C connection for power and communication; no dock battery to recharge.",
      "Mode lighting, audible feedback, and hardware connection status.",
    ],
  },
  {
    title: "A workspace for each kind of work",
    bullets: [
      "Configure apps to launch, apps to close, apps to keep available, and websites to open or restrict.",
      "Customize mode names and settings, with role presets for different workflows.",
      "Set supported desktop notification, volume, mute, wallpaper, theme, and visual-cleanliness controls by mode.",
      "Review affected apps during a docking transition and keep needed tools available.",
    ],
  },
  {
    title: "Add friction where distraction begins",
    bullets: [
      "Soft, Strict, and Lockdown settings let you choose the strength of your focus rules.",
      "App restrictions, domain blocking, and optional network restrictions use supported OS permissions.",
      "Intent checks add a deliberate pause before eligible override requests; strict rules can reject software overrides.",
      "Mindful reminders and recorded interruption attempts help you notice when you drift.",
    ],
  },
  {
    title: "Purposeful browsing",
    bullets: [
      "Hide supported YouTube homepage recommendations, Shorts surfaces, and related-video distractions.",
      "Keep direct videos and search accessible when your configured rules allow them.",
      "Reduce supported Reddit and X home-feed distractions without blocking every useful page.",
      "Synchronize browser rules with the desktop through the Intent Gateway extension.",
    ],
  },
  {
    title: "Mobile companion (Android & iOS)",
    bullets: [
      "Pair your phone with the desktop over your local network.",
      "Follow the active desktop mode with an approved-app launcher and permission-based focus shield.",
      "Request Do Not Disturb during focus sessions and retain access to system settings and essential phone functions.",
      "Manage paired devices, reconnect sessions, and revoke a device from the desktop.",
    ],
  },
  {
    title: "Projects and daily planning",
    bullets: [
      "Organize work into projects and a task board with backlog, active, and completed tasks.",
      "Assign priorities, time estimates, mode associations, and Today or Tomorrow schedules.",
      "Break tasks into subtasks, search and filter the board, and see planned workload.",
      "Arrange work on a visual day timeline and review recorded time logs.",
    ],
  },
  {
    title: "Focus sprints",
    bullets: [
      "Choose 15, 25, 45, 60, or 90-minute sprints and anchor a session to a task.",
      "Pause, resume, complete, or cancel supported sprint sessions.",
      "See your mode, shield status, and countdown in the floating status display.",
      "Park distracting thoughts in the sprint scratchpad; track consistency with XP, levels, and streaks.",
    ],
  },
  {
    title: "Notes and knowledge",
    bullets: [
      "Write and preview Markdown notes in the built-in knowledge base.",
      "Turn checklist entries in notes into tasks on your board.",
      "See word and character counts and estimated reading time.",
      "Copy or export supported notes and session summaries in Markdown for your own records.",
    ],
  },
  {
    title: "Focus audio",
    bullets: [
      "Generate rain, brown-noise, drone, and binaural soundscapes locally.",
      "Choose a soundscape, adjust its volume, or mute it.",
      "Coordinate audio with your focus sprint without streaming an audio service.",
    ],
  },
  {
    title: "Session review and optional AI",
    bullets: [
      "Review recorded focus duration, interruptions, task time, project distribution, and session history.",
      "Use daily debriefs and activity-derived indicators such as Flow Depth and Peak Focus Window to reflect on your sessions.",
      "Optional AI helps break down tasks, assess eligible intent requests, and summarize sessions.",
      "Choose Gemini, OpenAI, or a compatible local model endpoint. Cloud-provider charges and accounts are separate; analytics are activity summaries, not medical or cognitive measurements.",
    ],
  },
  {
    title: "Connections to your existing tools",
    bullets: [
      "Read supported Google Calendar events and upcoming Zoom meetings, find accessible Notion pages, and view assigned GitHub or Linear work after connecting the required accounts.",
      "Browse a configured local Obsidian vault and use supported focus-log automation.",
      "Configure optional Slack status, Spotify playback, or Home Assistant lighting actions around mode changes.",
      "Third-party features require the relevant credentials, permissions, services, and applicable account access.",
    ],
  },
  {
    title: "Local control and ownership",
    bullets: [
      "Keep core configuration, tasks, and session records on your device.",
      "Use the core focus experience without enabling cloud AI.",
      "Every reward tier (Early Bird, Kickstarter Special, Duo Pack, and Maker Kit) includes lifetime core app access without a mandatory Nexus subscription.",
      "Use diagnostics to inspect hardware, pairing, and policy status across Windows, macOS, Linux, Android, and iOS; browser filtering supports desktop Chromium browsers.",
    ],
  },
] as const;

export const KICKSTARTER_COMPATIBILITY = [
  {
    platform: "Windows, macOS & Linux (All Desktop PC OS)",
    details:
      "Desktop workspace automation, app launch and restrictions, website/domain blocking, and supported focus, audio, and appearance controls across Windows, macOS, and Linux (standard OS permissions apply).",
  },
  {
    platform: "Android & iOS (All Mobile Devices)",
    details:
      "Local desktop pairing, mode synchronization, an approved-app launcher, and permission-based distraction shielding and Do Not Disturb across Android and iOS devices.",
  },
  {
    platform: "Browser Extension",
    details:
      "Purposeful browsing and feed filtering controls through the Nexus Intent Gateway extension on supported desktop Chromium browsers (hiding YouTube recommendations/Shorts, Reddit & X home feeds while keeping direct links & search).",
  },
] as const;

export const KICKSTARTER_FAQS = [
  {
    q: "What is Nexus Ring?",
    a: "Nexus Ring is a USB-C desk dock and magnetic totem that switches your PC (Windows, macOS, or Linux) and paired phone (Android or iOS) into the workspace you configure. It is a desk device, not a wearable ring.",
  },
  {
    q: "What comes with the assembled Nexus Ring tiers ($89, $109, and $199 Duo Pack)?",
    a: "The $89 Early Bird and $109 Kickstarter Special each include one assembled metal-body Nexus Ring dock, one magnetic totem, a USB-C cable, and lifetime core access to the desktop (Windows, macOS, Linux) and mobile (Android, iOS) companion apps—you will choose Day (Silver) or Night (Obsidian Black) finish in the post-campaign survey. The $199 Duo Pack (Day & Night Edition) includes two complete assembled Nexus Ring docks (both Day Silver and Night Obsidian Black finishes), two magnetic totems, two USB-C cables, and lifetime core app access for both setups. Estimated hardware delivery is July 2027. Worldwide shipping and applicable taxes are charged separately after the campaign through the pledge manager.",
  },
  {
    q: "What does the $39 Maker Kit include?",
    a: "Digital 3D-print files (STL/STEP), a bill of materials, assembly and wiring instructions, firmware and flashing guidance, and ongoing core app access. No physical parts, printing, tools, or assembly are included. The kit is ready for digital fulfillment after the campaign.",
  },
  {
    q: "Which devices does it work with?",
    a: "Nexus Ring works across all major desktop PC operating systems (Windows, macOS, and Linux) and mobile platforms (Android and iOS). Desktop workspace automation, website blocking, and local mobile pairing/focus sync are controlled from your physical desk dock, subject to standard OS permissions and supported browser extensions for feed filtering.",
  },
  {
    q: "Is there a subscription?",
    a: "No mandatory Nexus subscription is required for the core apps included with any reward. Optional cloud AI or third-party services may require separate accounts, API keys, or charges.",
  },
  {
    q: "How is shipping charged?",
    a: "The assembled device is offered with worldwide shipping. Shipping is not included in the assembled hardware pledges ($89, $109, or $199 Duo Pack); charges will be collected separately after the campaign through the pledge manager. Final charges depend on destination. The digital Maker Kit requires no physical shipping.",
  },
  {
    q: "Is AI required?",
    a: "No. The core focus controls work without cloud AI. Optional AI can assist with task breakdowns, eligible intent assessments, and session summaries through Gemini, OpenAI, or a compatible local model endpoint. A ChatGPT subscription does not include OpenAI API usage.",
  },
  {
    q: "Are the product images photographs?",
    a: "This site uses three clearly labeled types of visual: actual prototype footage, real app screen recordings, and design concept banners. The prototype photos and feature GIFs show the recorded hardware and software; design banners illustrate the intended production device appearance and are not photographs of manufactured production units. Final production appearance may vary.",
  },
] as const;

export const KICKSTARTER_RISKS = [
  {
    title: "Production & Supply",
    desc: "Component lead times, supplier availability, enclosure manufacturing, and assembly capacity can affect the schedule. We will inspect incoming parts and check assembled units before shipping, and keep backers informed if any supplier or production issue affects delivery.",
  },
  {
    title: "Quality & Compatibility",
    desc: "A tested product still needs consistent quality across every manufactured unit. Nexus works across Windows, macOS, Linux, Android, and iOS through supported OS capabilities, user configuration, and permissions. Browser and OS updates can require compatibility updates. Save your work before using rules that close applications.",
  },
  {
    title: "Fulfillment & Shipping",
    desc: "Packaging, international shipping, customs, and local taxes can affect cost and delivery time. Worldwide shipping and applicable taxes for assembled hardware pledges ($89, $109, $199) are collected separately after the campaign through the pledge manager. Estimated delivery is July 2027.",
  },
  {
    title: "Maker Kit & Focus Outcomes",
    desc: "The $39 Maker Kit is digital only (no physical hardware, components, printing, tools, or assembly). Nexus helps create boundaries around work; individual results vary and no fixed productivity multiplier is guaranteed. Optional cloud AI and third-party services may carry separate charges.",
  },
] as const;

export const KICKSTARTER_ENVIRONMENTAL =
  "Nexus Ring is built around a durable metal-body desk enclosure and magnetic physical switching with a wired USB-C connection—eliminating internal lithium-ion batteries that degrade over time and extending the functional lifespan of the hardware.";
