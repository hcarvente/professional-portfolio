import Link from "next/link";
import { identity, navigation } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="name-mark" aria-label={`${identity.name}, home`}>
          Hernán<span className="text-cobalt">.</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>)}
        </nav>
        <details className="mobile-menu lg:hidden">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
