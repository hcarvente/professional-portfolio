import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card group">
      <div className={`project-visual project-visual-${project.tone}`}>
        <span className="project-index" aria-hidden="true">0{index + 1}</span>
        <div className="browser-frame">
          <div className="browser-bar" aria-hidden="true"><i /><i /><i /></div>
          <div className="project-screenshot">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 767px) 90vw, 40vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-8"><p className="eyebrow text-cobalt">{project.kicker}</p><h2 className="mt-3 font-display text-3xl sm:text-4xl">{project.title}</h2><p className="mt-4 leading-7 text-ink/70">{project.summary}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={`/projects/${project.slug}`} className="text-link">View case study <span aria-hidden="true">↗</span></Link><Link href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link-muted">Visit live project</Link></div></div>
    </article>
  );
}
