# Hernán Carvente Martinez — Professional Portfolio

A multidisciplinary professional portfolio built with Next.js, React, TypeScript, and Tailwind CSS. The Week 9 MVP presents work across AI product development, nonprofit and organizational leadership, social impact, research, writing, speaking, and entrepreneurship.

## Routes

- `/` — Home
- `/about` — Background and working principles
- `/projects` — Four featured projects
- `/projects/[slug]` — Case studies with problem, build, result, and working links
- `/services` — Standalone service landing page
- `/speaking-writing-research` — Selected public work and appearances
- `/contact` — Public contact pathways

## Add a project

Project content lives in `src/data/portfolio.ts`. Add one object to the `projects` array using the existing `Project` type. The projects index, home page, and static case-study route update from that shared data.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

The site is designed for Vercel. It automatically uses Vercel's production URL for metadata, robots rules, and the sitemap. When the custom domain is ready, add this production environment variable in Vercel:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Redeploy after changing the canonical site URL. Keep the existing Squarespace domain connected until the Vercel deployment has passed live review.

## Quality checks

```bash
npm run lint
npm run build
```

## Content notes

- Product outcomes are intentionally stated without unverified impact metrics.
- AI-assisted development is described transparently in the case studies.
- References to being justice-impacted or formerly incarcerated are limited to the About page.
- Approved photographs are stored as web-optimized copies in `public/images`.
- Social-sharing images are generated from `src/app/opengraph-image.tsx` and `src/app/twitter-image.tsx`.

See `PROMPT_LOG.md` for the build record and major decisions.
