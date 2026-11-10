import type { Metadata } from "next";
import { ContactBand } from "@/components/contact-band";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = { title: "Projects", description: "Selected technology, AI, data, and leadership projects by Hernán Carvente Martinez." };

export default function ProjectsPage() {
  return <><PageHero eyebrow="Projects" title="Products and platforms built around real barriers." intro="Each project begins with a practical problem. I combine research, design, domain knowledge, and AI-assisted development to make a working response available to people." /><section className="section-space"><div className="shell grid gap-8 md:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></section><ContactBand /></>;
}
