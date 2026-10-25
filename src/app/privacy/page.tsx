import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How the Nexus Ring development website handles waitlist information and website analytics.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <main className="min-h-screen pt-36 pb-24 px-6 md:px-12">
    <article className="max-w-3xl mx-auto space-y-8 text-slate-300 leading-relaxed">
      <header><p className="eyebrow">Nexus Ring website</p><h1 className="text-4xl sm:text-5xl font-semibold text-white">Privacy notice</h1><p className="mt-4 text-sm text-slate-400">Updated October 25, 2026</p></header>
      <section><h2 className="text-2xl text-white mb-3">Information you provide</h2><p>When you join the waitlist, we collect your email address, your edition of interest if selected, the page you signed up from, and a submission timestamp. We use this information to send Nexus Ring development and launch updates. Joining does not create an order or reserve stock.</p></section>
      <section><h2 className="text-2xl text-white mb-3">Where signup information goes</h2><p>Signup details are sent to the project team through a Discord webhook. Discord processes and stores those messages under its own privacy policy. This website is hosted by Vercel, which processes requests and may retain technical request logs to operate and protect the service.</p></section>
      <section><h2 className="text-2xl text-white mb-3">Website analytics</h2><p>We use Vercel Web Analytics to understand aggregate website visits and page usage. Analytics are separate from the email address you submit to the waitlist. Learn more in <a href="https://vercel.com/docs/analytics/privacy-policy" className="text-accent2 underline">Vercel’s analytics privacy documentation</a> and <a href="https://discord.com/privacy" className="text-accent2 underline">Discord’s privacy policy</a>.</p></section>
      <section><h2 className="text-2xl text-white mb-3">Your choices and removal requests</h2><p>Signing up is optional. To stop receiving updates, request a copy of your signup details, or ask us to delete them, contact founder Naqash Afzal through the <a href="https://discord.gg/Q3tTGhH4k" className="text-accent2 underline">official Nexus Ring Discord community</a> or <a href="https://www.linkedin.com/in/naqashafzal/" className="text-accent2 underline">LinkedIn</a>. Request a private conversation before sharing your email address. Signup details remain in the team’s records until removed; service providers may retain their own logs or backups under their policies.</p></section>
      <section><h2 className="text-2xl text-white mb-3">Website and product privacy</h2><p>This notice describes the development website. The planned local automation features are still in development. Details about any future companion software and its data handling will be published before release.</p></section>
      <Link href="/" className="inline-block text-accent2 underline">Back to Nexus Ring</Link>
    </article>
  </main>;
}
