import Link from "next/link";
import PlannedTiers from "@/components/PlannedTiers";

export default function EarlyAccessPage() {
  return <main className="min-h-screen bg-vantablack pt-36 pb-24 px-6 md:px-12">
    <section className="max-w-[1200px] mx-auto">
      <div className="max-w-3xl mb-14">
        <p className="eyebrow">In development · Early access</p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">Follow the build.<br />Be first to hear about launch.</h1>
        <p className="text-lg text-slate-400 mt-6 leading-relaxed">Nexus Ring is in hardware and software development. Choose an edition that interests you to receive progress and launch updates. No payment is collected, and orders are not open yet.</p>
      </div>
      <PlannedTiers />
      <Link href="/campaign" className="inline-block text-accent2 underline underline-offset-4 mt-10">View development status and roadmap →</Link>
    </section>
  </main>;
}
