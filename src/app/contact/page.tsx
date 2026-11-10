import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { identity } from "@/data/portfolio";

export const metadata: Metadata = { title: "Contact", description: "Contact Hernán Carvente Martinez about strategy, workshops, speaking, leadership development, and AI product work." };

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="Let’s work on something that matters." intro="If you are navigating a mission-driven challenge, exploring responsible AI, designing a leadership experience, or looking for a speaker or advisor, I would like to hear what you are building." /><section className="section-space"><div className="shell grid gap-12 lg:grid-cols-[1.12fr_.88fr]"><div className="rounded-[2rem] bg-cobalt p-8 text-white sm:p-12"><p className="eyebrow text-sky">Start here</p><h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Send a short note about the challenge and the outcome you hope to create.</h2><Link href={`mailto:${identity.email}?subject=Let%27s%20work%20together`} className="button button-light mt-9">Email {identity.email} <span aria-hidden="true">↗</span></Link></div><aside className="space-y-8"><div><p className="eyebrow text-cobalt">Helpful context</p><ul className="mt-5 space-y-4 text-lg leading-7 text-ink/70"><li>• What your organization or initiative does</li><li>• The challenge or opportunity you are exploring</li><li>• Who needs to be involved</li><li>• Your ideal timeline or next milestone</li></ul></div><div className="border-t border-ink/10 pt-8"><p className="eyebrow text-cobalt">Connect elsewhere</p><div className="mt-5 flex flex-wrap gap-4"><Link href={identity.linkedin} target="_blank" rel="noreferrer" className="button button-outline">LinkedIn</Link><Link href={identity.github} target="_blank" rel="noreferrer" className="button button-outline">GitHub</Link></div></div></aside></div></section></>;
}
