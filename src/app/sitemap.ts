import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/services", "/speaking-writing-research", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
