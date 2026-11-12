# Prompt Log

This log records the major prompts, decisions, and implementation checkpoints used to build the portfolio.

## 2026-11-10 — Discovery and planning

**Prompt:** Plan a long-term multidisciplinary professional portfolio using Next.js, React, and Tailwind CSS. Meet Next Chapter Week 9 requirements with three to four real projects and a separate services landing page.

**Decisions:**

- Use the Next.js App Router, TypeScript, React, and Tailwind CSS.
- Build Home, About, Projects, Services, Speaking/Writing/Research, and Contact routes.
- Feature OpenRaiz, Data USA Snapshot, Alianza Leadership Program, and Monster Interview.
- Use honest product outcomes such as deployed, implemented, and publicly accessible.
- Keep references to being justice-impacted or formerly incarcerated on the About page only.
- Use a warm editorial visual direction without HCM branding.

## 2026-11-10 — Repository setup

**Prompt:** “Implementation approved. Set up the repository and begin the Week 9 MVP.”

**Actions:**

- Standardized the local folder as `professional-portfolio`.
- Connected the local repository to `hcarvente/professional-portfolio`.
- Scaffolded Next.js with TypeScript, Tailwind CSS, ESLint, and the App Router.
- Confirmed the production dependency audit reports zero vulnerabilities.

## 2026-11-10 — Live preview requirement

**Prompt:** “Show me in the cloud browser what you are creating as you go.”

**Decision:** Keep a local development preview open and refresh it at meaningful implementation milestones.

## 2026-11-10 — Week 9 MVP implementation

**Implemented:**

- Created a responsive editorial design system using warm cream, ink, cobalt, sky blue, and terracotta.
- Built Home, About, Projects, Services, Speaking/Writing/Research, and Contact pages.
- Built four data-driven project case studies with the problem, what was built, the result, role, technology, source, and live link.
- Added approved photography and meaningful alternative text.
- Added responsive navigation, skip navigation, reduced-motion support, metadata, robots rules, and a sitemap.
- Documented the content model and the process for adding projects later.

**Verification checkpoint:** ESLint, TypeScript, and the Next.js production build pass. The services landing page and home page were opened in the live cloud-browser preview.

## 2026-11-10 — Visual review and launch preparation

**Prompts:** “Make me entirely visible,” “When I click on the Menu button…,” and “I meant for the previous photos to go in the leadership in practice area.”

**Actions:**

- Restored the approved blue-shirt portrait and displayed the complete photograph on Home and About.
- Rebuilt the mobile menu so it closes after navigation and supports outside click, Escape, hover, and a visible menu glyph.
- Added approved leadership, speaking, and editorial photography to the “Leadership in practice” gallery.
- Removed stale duplicate starter files after confirming they were not used by the application.

## 2026-11-10 — Final audit and release hardening

**Prompt:** “Proceed with the recommended fixes and launch sequence.”

**Actions:**

- Confirmed Monster Interview is publicly accessible without Vercel authentication.
- Replaced hardcoded domain metadata with a Vercel-aware canonical site URL.
- Added generated Open Graph and X/Twitter sharing cards and a custom site icon.
- Restored Next.js image optimization and lazy loading for below-the-fold gallery photographs.
- Added active navigation states, keyboard focus styling, and Escape focus return for the mobile menu.
- Updated the redirected Center for New York City Affairs article URL.
- Documented deployment and custom-domain configuration.

**Release checkpoint:** Production dependency audit, ESLint, TypeScript, production build, internal route smoke tests, social-card review, navigation QA, and all four featured live-project checks passed.

## 2026-11-12 — Project-card screenshots

**Prompt:** “I need to add screenshots to the 4 cards.”

**Actions:**

- Added current screenshots for OpenRaiz, Monster Interview, Data USA Snapshot, and the Alianza Leadership Program.
- Cropped away desktop and browser controls while preserving each product interface.
- Replaced the abstract card placeholders with responsive, optimized Next.js images.
- Added descriptive alternative text for each project screenshot.

**Verification checkpoint:** ESLint and the Next.js production build pass.
