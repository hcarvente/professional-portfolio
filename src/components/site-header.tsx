"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { identity, navigation } from "@/data/portfolio";

export function SiteHeader() {
  const [menuMode, setMenuMode] = useState<"closed" | "hover" | "pinned">("closed");
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const menuOpen = menuMode !== "closed";

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenuMode("closed");
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && menuRef.current?.contains(document.activeElement)) {
        setMenuMode("closed");
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="name-mark" aria-label={`${identity.name}, home`}>
          Hernán<span className="text-cobalt">.</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} className={`nav-link${isActive(item.href) ? " nav-link-active" : ""}`} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <div
          ref={menuRef}
          className="mobile-menu lg:hidden"
          onMouseEnter={() => setMenuMode((mode) => mode === "closed" ? "hover" : mode)}
          onMouseLeave={() => setMenuMode((mode) => mode === "hover" ? "closed" : mode)}
        >
          <button
            ref={triggerRef}
            type="button"
            className="menu-trigger"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuMode((mode) => mode === "pinned" ? "closed" : "pinned")}
          >
            <span className="hamburger-glyph" aria-hidden="true">☰</span>
            <span>Menu</span>
          </button>
          {menuOpen && (
            <nav id="mobile-navigation" aria-label="Mobile navigation">
              {navigation.map((item) => <Link key={item.href} href={item.href} className={isActive(item.href) ? "mobile-nav-active" : undefined} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setMenuMode("closed")}>{item.label}</Link>)}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
