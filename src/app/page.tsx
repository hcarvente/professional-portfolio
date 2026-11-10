import Image from "next/image";
import Link from "next/link";
import { ContactBand } from "@/components/contact-band";
import { ProjectCard } from "@/components/project-card";
import { identity, projects, services } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <section id="hero" className="hero overflow-hidden">
        <div className="shell grid min-h-[calc(100svh-5rem)] gap-12 py-14 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:py-20">
          <div className="relative z-10">
            <p className="eyebrow text-cobalt">Technology × leadership × social impact</p>
            <h1 className="hero-title mt-6">Building systems that help <em>people and ideas</em> move forward.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">I&apos;m {identity.name}—a social entrepreneur, nonprofit executive, leadership-development strategist, and AI builder connecting bold ideas to practical action.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/projects" className="button button-dark">Explore my work <span aria-hidden="true">↗</span></Link>
              <Link href="/services" className="button button-outline">How I can help</Link>
            </div>
            <p className="mt-10 max-w-xl border-l-2 border-coral pl-5 text-sm leading-6 text-ink/60">Currently exploring how responsible AI and human-centered product development can strengthen mission-driven organizations.</p>
          </div>
          <div className="hero-portrait-wrap">
            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-portrait"><Image src="/images/hernan-portrait.jpg" alt="Hernán Carvente Martinez wearing a light blue shirt and hat" fill preload sizes="(max-width: 1024px) 90vw, 29rem" className="object-contain" /></div>
            <div className="hero-note"><span className="block font-display text-2xl">Purpose, translated.</span><span className="mt-1 block text-sm text-ink/60">From lived insight to useful systems.</span></div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white"><div className="shell grid gap-6 py-8 text-sm font-semibold uppercase tracking-[.14em] text-ink/55 sm:grid-cols-2 lg:grid-cols-4"><span>AI product development</span><span>Nonprofit leadership</span><span>Leadership development</span><span>Social-impact strategy</span></div></section>

      <section className="section-space">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow text-cobalt">Selected work</p><h2 className="section-title mt-4">Ideas made tangible.</h2></div><p className="section-intro">Products and platforms shaped through research, design, experimentation, and AI-assisted development.</p></div>
          <div className="mt-12 grid gap-7 md:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
          <div className="mt-10"><Link href="/projects" className="text-link">View all project details <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section-space bg-ink text-cream">
        <div className="shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28"><p className="eyebrow text-sky">What I bring</p><h2 className="mt-5 max-w-xl font-display text-5xl leading-[1.05] sm:text-6xl">Strategy that stays close to people.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-cream/65">I help mission-driven teams move from complexity to clarity—and from clarity to something they can use.</p><Link href="/services" className="button button-light mt-9">Explore services <span aria-hidden="true">↗</span></Link></div>
          <div className="divide-y divide-cream/15 border-y border-cream/15">{services.map((service) => <article key={service.number} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr]"><span className="font-mono text-sm text-sky">{service.number}</span><div><h3 className="font-display text-2xl sm:text-3xl">{service.title}</h3><p className="mt-3 max-w-2xl leading-7 text-cream/60">{service.description}</p></div></article>)}</div>
        </div>
      </section>

      <section id="leadership-in-practice" className="section-space bg-sand">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="leadership-gallery">
            <figure className="leadership-gallery-main"><Image src="/images/leadership-circle.jpg" alt="Hernán facilitating an outdoor leadership circle" fill sizes="(max-width: 1024px) 100vw, 34vw" className="object-cover" /></figure>
            <figure><Image src="/images/hernan-conference-speaking.jpg" alt="Hernán speaking to participants at a conference" fill sizes="(max-width: 640px) 50vw, 17vw" className="object-cover" /></figure>
            <figure><Image src="/images/hernan-editorial.jpg" alt="Hernán seated thoughtfully in a sunlit room lined with books" fill sizes="(max-width: 640px) 50vw, 17vw" className="object-cover" /></figure>
          </div>
          <div className="lg:pl-8"><p className="eyebrow text-cobalt">Leadership in practice</p><h2 className="section-title mt-5">The work is technical. The work is human.</h2><p className="mt-6 text-lg leading-8 text-ink/70">Across product development, organizational leadership, and facilitation, I start with the people closest to the challenge. The goal is not novelty for its own sake—it is useful change that teams and communities can carry forward.</p><Link href="/about" className="text-link mt-8 inline-flex">More about my approach <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
