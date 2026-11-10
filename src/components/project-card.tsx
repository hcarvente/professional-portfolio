import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card group">
      <div className={`project-visual project-visual-${project.tone}`} aria-hidden="true"><span className="project-index">0{index + 1}</span><div className="browser-frame"><div className="browser-bar"><i /><i /><i /></div><div className="browser-content"><span /><span /><span /></div></div></div>
      <div className="p-6 sm:p-8"><p className="eyebrow text-cobalt">{project.kicker}</p><h2 className="mt-3 font-display text-3xl sm:text-4xl">{project.title}</h2><p className="mt-4 leading-7 text-ink/70">{project.summary}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={`/projects/${project.slug}`} className="text-link">View case study <span aria-hidden="true">↗</span></Link><Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link-muted">Visit live project</Link></div></div>
    </article>
  );
}
