import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";
import { identity } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Hernán Carvente Martinez’s approach to leadership, technology, and social impact.",
};

const principles = [
  ["Start with lived expertise", "The people closest to a challenge hold essential knowledge about what a useful solution must do."],
  ["Translate across worlds", "Strategy becomes stronger when technology, organizational leadership, and community wisdom can inform one another."],
  ["Build for use", "A powerful idea matters most when people can understand it, test it, and carry it forward."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A builder, strategist, and leader shaped by lived experience." intro="My work sits at the intersection of technology, organizational leadership, healing, and social change. I help turn complex challenges into clearer choices, stronger programs, and useful tools." />
      <section className="section-space">
        <div className="shell grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div className="relative aspect-[3278/4589] overflow-hidden rounded-[2rem] bg-[#050708] lg:sticky lg:top-28"><Image src="/images/hernan-portrait.jpg" alt="Portrait of Hernán Carvente Martinez wearing a light blue shirt and hat" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain" /></div>
          <div className="space-y-7 text-lg leading-8 text-ink/72">
            <p className="font-display text-3xl leading-snug text-ink sm:text-4xl">I believe the best systems are built with people, not simply delivered to them.</p>
            <p>As a social entrepreneur and nonprofit executive, I have led organizations, designed leadership experiences, facilitated difficult conversations, and helped move ideas from vision into practice.</p>
            <p>My perspective is also shaped by lived experience as a formerly incarcerated, justice-impacted person. That experience belongs to my story, but it does not define the full range of what I build, lead, and imagine.</p>
            <p>Today, I am expanding that practice through AI and digital-product development—using technology as another way to reduce barriers, strengthen mission-driven work, and create more room for people to act on their potential.</p>
            <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8"><p className="eyebrow text-cobalt">Professional focus</p><p className="mt-4 leading-7 text-ink">{identity.headline}</p><p className="mt-4 text-sm text-ink/55">Pronouns: {identity.pronouns}</p></div>
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="shell"><p className="eyebrow text-cobalt">How I work</p><h2 className="section-title mt-4 max-w-3xl">Principles before playbooks.</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{principles.map(([title, copy], index) => <article key={title} className="rounded-2xl border border-ink/10 bg-cream p-7"><span className="font-mono text-sm text-coral">0{index + 1}</span><h3 className="mt-6 font-display text-2xl">{title}</h3><p className="mt-4 leading-7 text-ink/65">{copy}</p></article>)}</div></div>
      </section>
      <section className="section-space bg-white">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="eyebrow text-cobalt">Across disciplines</p><h2 className="section-title mt-5">One practice, many forms.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">Product strategy, nonprofit leadership, curriculum design, research, writing, and speaking are not separate lanes for me. They are different ways of asking the same question: what helps people move from constraint toward possibility?</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/projects" className="button button-dark">See my projects</Link><Link href="/speaking-writing-research" className="button button-outline">Explore ideas & appearances</Link></div></div><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src="/images/leadership-workshop.jpg" alt="Hernán leading a group workshop" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" /></div></div>
      </section>
      <ContactBand />
    </>
  );
}
