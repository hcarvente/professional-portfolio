import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/contact-band";
import { projects } from "@/data/portfolio";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);

  return <>
    <section className={`project-detail-hero project-visual-${project.tone}`}><div className="shell py-20 sm:py-28"><Link href="/projects" className="text-link-muted">← All projects</Link><p className="eyebrow mt-12">{project.kicker}</p><h1 className="display-title mt-5 max-w-5xl">{project.title}</h1><p className="mt-7 max-w-3xl text-xl leading-8 text-ink/72">{project.summary}</p><div className="mt-9 flex flex-wrap gap-4"><Link href={project.liveUrl} target="_blank" rel="noreferrer" className="button button-dark">Open live project <span aria-hidden="true">↗</span></Link><Link href={project.repoUrl} target="_blank" rel="noreferrer" className="button button-outline">View source</Link></div></div></section>
    <section className="section-space"><div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><aside><p className="eyebrow text-cobalt">Project 0{index + 1}</p><dl className="mt-7 divide-y divide-ink/10 border-y border-ink/10"><div className="py-5"><dt className="text-xs font-bold uppercase tracking-widest text-ink/45">Role</dt><dd className="mt-2 font-semibold">{project.role}</dd></div><div className="py-5"><dt className="text-xs font-bold uppercase tracking-widest text-ink/45">Technology</dt><dd className="mt-3 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full bg-white px-3 py-1 text-sm">{technology}</span>)}</dd></div><div className="py-5"><dt className="text-xs font-bold uppercase tracking-widest text-ink/45">Status</dt><dd className="mt-2 font-semibold">Deployed and publicly accessible</dd></div></dl></aside><div className="space-y-12"><article><p className="eyebrow text-coral">The problem</p><h2 className="mt-4 font-display text-4xl">What needed to change</h2><p className="mt-5 text-lg leading-8 text-ink/70">{project.problem}</p></article><article><p className="eyebrow text-cobalt">What I built</p><h2 className="mt-4 font-display text-4xl">From question to working product</h2><p className="mt-5 text-lg leading-8 text-ink/70">{project.built}</p></article><article><p className="eyebrow text-green">The result</p><h2 className="mt-4 font-display text-4xl">A real, usable release</h2><p className="mt-5 text-lg leading-8 text-ink/70">{project.result}</p></article><div className="rounded-2xl border border-ink/10 bg-white p-7"><p className="font-display text-2xl">Built transparently with AI-assisted development.</p><p className="mt-3 leading-7 text-ink/65">I owned the problem research, product direction, design decisions, and deployment while using AI tools to accelerate development and learning.</p></div></div></div></section>
    <ContactBand />
  </>;
}
