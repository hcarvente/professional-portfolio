import Link from "next/link";
import { identity } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div><p className="eyebrow text-sky">Build what the future needs.</p><p className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-4xl">Strategy, technology, and leadership rooted in people.</p></div>
        <div className="md:text-right">
          <Link href={`mailto:${identity.email}`} className="link-line text-lg">{identity.email}</Link>
          <div className="mt-4 flex gap-5 md:justify-end"><Link href={identity.linkedin} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</Link><Link href={identity.github} target="_blank" rel="noreferrer" className="footer-link">GitHub</Link></div>
          <p className="mt-8 text-sm text-cream/55">© 2026 {identity.name}</p>
        </div>
      </div>
    </footer>
  );
}
