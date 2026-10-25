"use client";
import { useState } from "react";
import { PLANNED_TIERS } from "@/lib/tiers";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function PlannedTiers() {
  const [interest, setInterest] = useState<string | null>(null);
  return <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {PLANNED_TIERS.map(tier => <article key={tier.id} className="flex flex-col rounded-3xl border border-slate bg-matte p-7">
        <p className="eyebrow">{tier.format}</p>
        <h3 className="text-2xl font-semibold">{tier.name}</h3>
        <p className="text-4xl font-display font-bold mt-5">{tier.price}<span className="block text-xs font-sans font-normal text-slate-400 mt-2">Indicative USD price</span></p>
        <p className="text-slate-300 my-6">{tier.description}</p>
        <ul className="list-disc pl-5 space-y-3 text-sm text-slate-400 mb-6">{tier.items.map(item => <li key={item}>{item}</li>)}</ul>
        <p className="text-xs text-slate-400 mt-auto mb-6">{tier.note}</p>
        <button onClick={() => setInterest(tier.name)} className="rounded-full bg-white text-black py-3 px-5 font-semibold text-sm hover:bg-slate-200">Get {tier.name} updates</button>
      </article>)}
    </div>
    <p className="text-sm text-slate-400 mt-6 leading-relaxed">These are proposed tiers, not products available to order. Prices, contents, shipping costs, availability, and delivery dates may change. Joining the waitlist is free and does not reserve stock.</p>
    <ComingSoonModal isOpen={interest !== null} onClose={() => setInterest(null)} tierName={interest ?? undefined} />
  </>;
}
