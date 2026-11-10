import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/portfolio";

export const metadata: Metadata = { title: "Services", description: "Strategy, responsible AI, organizational development, leadership design, facilitation, and advisory services." };

const audiences = ["Nonprofits", "Foundations", "Public agencies", "Social entrepreneurs"];
const outcomes = ["A clearer definition of the problem", "A practical roadmap your team can use", "Stronger alignment across people and priorities", "A prototype, program, or learning experience ready to test"];

export default function ServicesPage() {
  return <>
    <PageHero eyebrow="Services" title="Practical strategy for people doing consequential work." intro="I partner with mission-driven leaders and teams to navigate complexity, build responsible approaches to technology, and create programs and products that people can actually use." />
    <section className="section-space"><div className="shell grid gap-12 lg:grid-cols-[.82fr_1.18fr]"><div><p className="eyebrow text-cobalt">What I offer</p><h2 className="section-title mt-5">From uncertainty to an actionable next step.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-ink/70">Engagements are shaped around the real challenge—not a one-size-fits-all package. We can begin with a focused session, a workshop, or a longer strategy and design partnership.</p></div><div className="divide-y divide-ink/10 border-y border-ink/10">{services.map((service) => <article key={service.number} className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr]"><span className="font-mono text-sm text-coral">{service.number}</span><div><h3 className="font-display text-3xl">{service.title}</h3><p className="mt-4 max-w-2xl leading-7 text-ink/65">{service.description}</p></div></article>)}</div></div></section>
    <section className="section-space bg-ink text-cream"><div className="shell grid gap-12 lg:grid-cols-2"><div><p className="eyebrow text-sky">Who I help</p><h2 className="mt-5 font-display text-5xl leading-tight">Teams with a public purpose and a hard problem.</h2><div className="mt-8 flex flex-wrap gap-3">{audiences.map((audience) => <span key={audience} className="rounded-full border border-cream/20 px-4 py-2 text-sm">{audience}</span>)}</div></div><div><p className="eyebrow text-sky">The value</p><ul className="mt-6 divide-y divide-cream/15 border-y border-cream/15">{outcomes.map((outcome, index) => <li key={outcome} className="flex gap-4 py-5"><span className="text-sky">0{index + 1}</span><span className="text-lg">{outcome}</span></li>)}</ul></div></div></section>
    <section className="section-space bg-sand"><div className="shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src="/images/hernan-facilitating.jpg" alt="Hernán facilitating a strategy session with collaborators" fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover" /></div><div><p className="eyebrow text-cobalt">How we can begin</p><h2 className="section-title mt-5">Start with the question you cannot solve alone.</h2><p className="mt-6 text-lg leading-8 text-ink/70">Tell me what your organization is navigating, who is affected, and what a useful outcome would make possible. We will identify a right-sized first step together.</p><Link href="/contact" className="button button-dark mt-8">Start a conversation <span aria-hidden="true">↗</span></Link></div></div></section>
    <ContactBand />
  </>;
}
