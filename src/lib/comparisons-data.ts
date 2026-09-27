export interface ComparisonFeature {
  feature: string;
  nexusRing: string;
  competitor: string;
  advantage: "nexus" | "neutral" | "competitor";
}

export interface ComparisonItem {
  slug: string;
  competitorName: string;
  competitorType: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  prosCompetitor: string[];
  consCompetitor: string[];
  nexusAdvantages: string[];
  cognitiveAnalysis: string;
  comparisonMatrix: ComparisonFeature[];
  faqs: { question: string; answer: string }[];
  targetPersona: string;
  verdict: string;
}

export const COMPARISONS: Record<string, ComparisonItem> = {
  "nexus-ring-vs-opal-app": {
    slug: "nexus-ring-vs-opal-app",
    competitorName: "Opal App",
    competitorType: "Screen Time & Mobile Software Blocker",
    tagline: "Physical Transition vs. In-App Controls",
    heroTitle: "Different approaches to digital focus.",
    heroSubtitle:
      "Compare Nexus Ring with software blockers, phone-locking devices and productivity timers to understand which approach fits your workflow.",
    metaTitle: "Nexus Ring vs Opal: Physical Controller vs App Blocker",
    metaDescription:
      "Compare Nexus Ring and Opal App to see how a physical desk controller differs from a mobile-first software subscription.",
    targetPersona: "Professionals who want to reduce screen time and improve focus.",
    cognitiveAnalysis:
      "Software blockers like Opal operate within the same interface you use for daily work. Nexus Ring introduces a physical boundary between intention and distraction, requiring a deliberate movement to change modes.",
    prosCompetitor: [
      "Quick mobile installation from App Store",
      "Screen time statistics & social sharing",
      "Gamified focus scores",
    ],
    consCompetitor: [
      "Operates on the same screen",
      "Requires cloud account",
      "Subscription pricing model",
    ],
    nexusAdvantages: [
      "Physical tactile transition",
      "Local-first execution without cloud dependency",
      "Four distinct physical modes",
      "No recurring subscriptions for hardware",
    ],
    comparisonMatrix: [
      { feature: "Physical trigger", nexusRing: "Yes (Magnetic Totem)", competitor: "No", advantage: "nexus" },
      { feature: "Desktop support", nexusRing: "Native apps (Windows, macOS, Linux)", competitor: "Extension only", advantage: "nexus" },
      { feature: "Mobile support", nexusRing: "Planned", competitor: "Full iOS/Android Support", advantage: "competitor" },
      { feature: "Website blocking", nexusRing: "Yes (Local routing)", competitor: "Yes (Local VPN)", advantage: "neutral" },
      { feature: "App blocking", nexusRing: "Yes", competitor: "Yes", advantage: "neutral" },
      { feature: "Custom automations", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "Multiple modes", nexusRing: "4 Hardware Positions", competitor: "Multiple profiles", advantage: "neutral" },
      { feature: "API", nexusRing: "Planned SDK", competitor: "Yes", advantage: "neutral" },
      { feature: "Local-first", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "Smart-home integration", nexusRing: "Planned", competitor: "No", advantage: "nexus" },
      { feature: "Subscription", nexusRing: "No (Hardware Purchase)", competitor: "$99/year", advantage: "competitor" },
      { feature: "Hardware required", nexusRing: "Yes", competitor: "No", advantage: "competitor" },
    ],
    faqs: [
      {
        question: "Can I use Nexus Ring and Opal together?",
        answer: "Yes. They can be complementary. Opal can manage mobile screen time while Nexus Ring serves as a physical desktop trigger.",
      },
      {
        question: "Does Nexus Ring require an ongoing subscription?",
        answer: "No. You buy the hardware once. (Final software licensing is still under review, but core functionality is local).",
      },
    ],
    verdict: "Who this may suit: Opal is suitable for users looking for mobile-first screen time charts. Nexus Ring suits professionals looking for a physical desktop transition.",
  },

  "nexus-ring-vs-freedom-blocker": {
    slug: "nexus-ring-vs-freedom-blocker",
    competitorName: "Freedom.to",
    competitorType: "Cross-Platform Website & App Blocker",
    tagline: "Hardware Transition vs. Software Extension",
    heroTitle: "Different approaches to digital focus.",
    heroSubtitle:
      "Compare Nexus Ring with software blockers, phone-locking devices and productivity timers to understand which approach fits your workflow.",
    metaTitle: "Nexus Ring vs Freedom.to: Hardware vs Software Blocker",
    metaDescription:
      "Compare the difference between Freedom.to software blocking and Nexus Ring's physical desktop controller approach.",
    targetPersona: "Digital professionals seeking a structured focus environment.",
    cognitiveAnalysis:
      "Software blockers like Freedom use local VPN profiles and browser extensions. Nexus Ring replaces this software interaction with a physical anchor, requiring a physical movement to shift states.",
    prosCompetitor: [
      "Syncs across Windows, Mac, iOS, Android",
      "Scheduled recurring block sessions",
      "Blocklist customization",
    ],
    consCompetitor: [
      "Can conflict with corporate VPNs",
      "Requires recurring subscription",
      "Lacks a physical transition mechanism",
    ],
    nexusAdvantages: [
      "4 distinct tactile focus positions",
      "Local desktop automation triggers",
      "Can trigger smart home and lighting changes",
      "Physical desk presence",
    ],
    comparisonMatrix: [
      { feature: "Physical trigger", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "Desktop support", nexusRing: "Yes", competitor: "Yes", advantage: "neutral" },
      { feature: "Mobile support", nexusRing: "Planned", competitor: "Yes", advantage: "competitor" },
      { feature: "Website blocking", nexusRing: "Yes", competitor: "Yes", advantage: "neutral" },
      { feature: "App blocking", nexusRing: "Yes", competitor: "Yes", advantage: "neutral" },
      { feature: "Custom automations", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "Multiple modes", nexusRing: "4 Hardware Positions", competitor: "Custom blocklists", advantage: "neutral" },
      { feature: "API", nexusRing: "Planned SDK", competitor: "No", advantage: "nexus" },
      { feature: "Local-first", nexusRing: "Yes", competitor: "Optional", advantage: "neutral" },
      { feature: "Smart-home integration", nexusRing: "Planned", competitor: "No", advantage: "nexus" },
      { feature: "Subscription", nexusRing: "No", competitor: "$39/year", advantage: "competitor" },
      { feature: "Hardware required", nexusRing: "Yes", competitor: "No", advantage: "competitor" },
    ],
    faqs: [
      {
        question: "Can Nexus Ring trigger custom scripts?",
        answer: "Yes. By executing a local companion app, moving the totem can execute bash/PowerShell scripts or webhooks.",
      },
    ],
    verdict: "Who this may suit: Freedom suits users who need scheduled cross-device synchronization. Nexus Ring suits professionals who prefer physical desk automation and custom workspace triggers.",
  },

  "nexus-ring-vs-pomodoro-timer": {
    slug: "nexus-ring-vs-pomodoro-timer",
    competitorName: "Traditional Pomodoro Timers",
    competitorType: "Mechanical / Digital Desk Timers",
    tagline: "Automated OS Management vs. Manual Timers",
    heroTitle: "Different approaches to digital focus.",
    heroSubtitle:
      "Compare Nexus Ring with software blockers, phone-locking devices and productivity timers to understand which approach fits your workflow.",
    metaTitle: "Nexus Ring vs Pomodoro Timers: Device Automation vs Clocks",
    metaDescription:
      "Comparing physical Pomodoro timers with Nexus Ring's digital state control and workspace automation.",
    targetPersona: "Knowledge workers using Pomodoro timers.",
    cognitiveAnalysis:
      "A standard Pomodoro timer monitors elapsed time but does not interact with your computer. Nexus Ring integrates a timer with active OS automation (opening apps, managing notifications, blocking domains).",
    prosCompetitor: [
      "Very cheap or free apps available",
      "Simple 25/5 interval concept",
      "Familiar productivity technique",
    ],
    consCompetitor: [
      "Does not interface with your computer",
      "Rigid intervals may break flow",
    ],
    nexusAdvantages: [
      "Integrates timer with OS restrictions",
      "Supports uninterrupted flow states without jarring alarms",
      "4 Spatial Modes (Deep Work, Meeting, Creative, Break)",
      "Controls notifications automatically",
    ],
    comparisonMatrix: [
      { feature: "Physical trigger", nexusRing: "Yes", competitor: "Yes (sometimes)", advantage: "neutral" },
      { feature: "Desktop support", nexusRing: "Yes", competitor: "No (standalone)", advantage: "nexus" },
      { feature: "Mobile support", nexusRing: "Planned", competitor: "Varies", advantage: "neutral" },
      { feature: "Website blocking", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "App blocking", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "Custom automations", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "Multiple modes", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "API", nexusRing: "Planned", competitor: "No", advantage: "nexus" },
      { feature: "Local-first", nexusRing: "Yes", competitor: "Yes", advantage: "neutral" },
      { feature: "Smart-home integration", nexusRing: "Planned", competitor: "No", advantage: "nexus" },
      { feature: "Subscription", nexusRing: "No", competitor: "No", advantage: "neutral" },
      { feature: "Hardware required", nexusRing: "Yes", competitor: "Depends", advantage: "neutral" },
    ],
    faqs: [
      {
        question: "Can I still use 25-minute Pomodoro intervals with Nexus Ring?",
        answer: "Yes. The desktop companion allows you to configure focus duration for Deep Work mode.",
      },
    ],
    verdict: "Who this may suit: Pomodoro timers are great for manual timeboxing. Nexus Ring suits those who want their environment to automatically adapt to their focus state.",
  },

  "nexus-ring-vs-brick-device": {
    slug: "nexus-ring-vs-brick-device",
    competitorName: "Brick Device",
    competitorType: "NFC Smartphone Screen Locker",
    tagline: "Desktop Automation vs. NFC Phone Tap",
    heroTitle: "Different approaches to digital focus.",
    heroSubtitle:
      "Compare Nexus Ring with software blockers, phone-locking devices and productivity timers to understand which approach fits your workflow.",
    metaTitle: "Nexus Ring vs Brick Device: Workstation Controller vs Phone Locker",
    metaDescription:
      "Compare Nexus Ring and Brick to understand the difference between desktop digital-state management and mobile app blocking.",
    targetPersona: "Professionals managing distractions across multiple devices.",
    cognitiveAnalysis:
      "Brick provides a highly effective NFC tap to manage iOS screen time. However, Nexus Ring is designed to manage the entire desktop workspace state (macOS, Windows, Linux), supporting multiple modes beyond just lock/unlock.",
    prosCompetitor: [
      "Satisfying physical NFC tap",
      "Compact portable form factor",
      "Effective iOS integration",
    ],
    consCompetitor: [
      "Does not manage desktop applications",
      "Binary state (on/off) rather than multiple modes",
      "No desktop automation",
    ],
    nexusAdvantages: [
      "Desktop OS management (macOS, Windows, Linux)",
      "4 distinct modes (Deep Work, Meeting, Creative, Break)",
      "Custom local automation capabilities",
      "Integrated ambient LED feedback",
    ],
    comparisonMatrix: [
      { feature: "Physical trigger", nexusRing: "Yes", competitor: "Yes (NFC)", advantage: "neutral" },
      { feature: "Desktop support", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "Mobile support", nexusRing: "Planned", competitor: "Yes", advantage: "competitor" },
      { feature: "Website blocking", nexusRing: "Yes (Desktop)", competitor: "Yes (Mobile)", advantage: "neutral" },
      { feature: "App blocking", nexusRing: "Yes (Desktop)", competitor: "Yes (Mobile)", advantage: "neutral" },
      { feature: "Custom automations", nexusRing: "Yes", competitor: "No", advantage: "nexus" },
      { feature: "Multiple modes", nexusRing: "4 Positions", competitor: "No", advantage: "nexus" },
      { feature: "API", nexusRing: "Planned", competitor: "No", advantage: "nexus" },
      { feature: "Local-first", nexusRing: "Yes", competitor: "Yes", advantage: "neutral" },
      { feature: "Smart-home integration", nexusRing: "Planned", competitor: "No", advantage: "nexus" },
      { feature: "Subscription", nexusRing: "No", competitor: "No", advantage: "neutral" },
      { feature: "Hardware required", nexusRing: "Yes", competitor: "Yes", advantage: "neutral" },
    ],
    faqs: [
      {
        question: "Can Nexus Ring also block phone distractions?",
        answer: "Mobile integration is planned in the ecosystem roadmap. Currently, Nexus Ring is focused on desktop-first automation.",
      },
    ],
    verdict: "Who this may suit: Brick is excellent for mobile phone management. Nexus Ring is suited for users who want to change their complete desktop environment with one physical action.",
  },
};
