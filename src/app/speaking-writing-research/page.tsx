import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";
import { featuredMedia } from "@/data/portfolio";

export const metadata: Metadata = { title: "Speaking, Writing & Research", description: "Selected writing, talks, podcasts, research, and recognition featuring Hernán Carvente Martinez." };

export default function IdeasPage() {
  return <>
    <PageHero eyebrow="Speaking · Writing · Research" title="Ideas in public, grounded in lived reality." intro="I write, speak, and contribute to research on leadership, healing, justice, organizational change, and the systems that shape opportunity." />
    <section className="section-space"><div className="shell grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center"><div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gold"><Image src="/images/hernan-speaking.jpg" alt="Hernán speaking into a microphone during a public conversation" fill sizes="(max-width:1024px) 100vw,38vw" className="object-cover" /></div><div><p className="eyebrow text-cobalt">Speaking & facilitation</p><h2 className="section-title mt-5">Conversation that makes room for complexity.</h2><p className="mt-6 text-lg leading-8 text-ink/70">I speak and facilitate across nonprofit, philanthropic, public-sector, and community settings. My work connects personal experience to institutional choices—without reducing either one to a simple story.</p><p className="mt-5 text-lg leading-8 text-ink/70">Topics include responsible AI, leadership and healing, youth justice, organizational transformation, and building with lived expertise.</p><Link href="/contact" className="button button-dark mt-8">Invite me to speak <span aria-hidden="true">↗</span></Link></div></div></section>
    <section className="section-space bg-white"><div className="shell"><div className="section-heading"><div><p className="eyebrow text-cobalt">Selected work</p><h2 className="section-title mt-4">Read, listen, explore.</h2></div><p className="section-intro">A curated selection for the Week 9 portfolio. Additional writing, podcasts, and presentations will be added over time.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2">{featuredMedia.map((item) => <Link key={item.href} href={item.href} target="_blank" rel="noreferrer" className="group bg-cream p-7 transition hover:bg-sand"><p className="eyebrow text-coral">{item.type}</p><h3 className="mt-4 font-display text-2xl leading-snug">{item.title}</h3><p className="mt-5 flex items-center justify-between text-sm font-semibold text-ink/55"><span>{item.publication}</span><span className="text-cobalt transition group-hover:translate-x-1" aria-hidden="true">↗</span></p></Link>)}</div></div></section>
    <section className="section-space bg-sand"><div className="shell max-w-4xl text-center"><p className="eyebrow text-cobalt">Research & policy</p><h2 className="section-title mt-5">Evidence, lived expertise, and public decisions belong in the same room.</h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-ink/70">My contributions to research and policy conversations focus on bringing direct experience into the questions institutions ask, the evidence they value, and the solutions they pursue.</p></div></section>
    <ContactBand />
  </>;
}
