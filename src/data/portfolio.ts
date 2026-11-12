export const identity = {
  name: "Hernán Carvente Martinez",
  pronouns: "He / They / Él / Elle",
  headline:
    "Social Entrepreneur | Nonprofit Executive | Leadership Development | AI Builder | Bridging Technology & Social Impact",
  email: "carvente.hernan@gmail.com",
  linkedin: "https://www.linkedin.com/in/carventehernan/",
  github: "https://github.com/hcarvente",
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Speaking & Writing", href: "/speaking-writing-research" },
  { label: "Contact", href: "/contact" },
];

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  image: string;
  imageAlt: string;
  summary: string;
  problem: string;
  built: string;
  result: string;
  role: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
  tone: "blue" | "coral" | "gold" | "green";
};

export const projects: Project[] = [
  {
    slug: "openraiz",
    title: "OpenRaiz",
    kicker: "Opportunity discovery platform",
    image: "/images/openraiz-project.png",
    imageAlt: "OpenRaiz opportunity discovery platform with bilingual navigation, search, and opportunity categories",
    summary: "A bilingual platform designed to make professional opportunities easier to discover, understand, and act on.",
    problem: "Mission-driven opportunities are often scattered across websites and described in ways that create unnecessary barriers for emerging leaders.",
    built: "I directed the product concept, researched the problem, designed the experience, and worked with AI-assisted development tools to build a searchable bilingual platform with opportunity filters, account pathways, and interview-practice entry points.",
    result: "The product was implemented, deployed, and made publicly accessible as a working platform that brings multiple opportunity pathways into one experience.",
    role: "Product Lead & AI Builder",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
    liveUrl: "https://openraiz-3.vercel.app/",
    repoUrl: "https://github.com/hcarvente/openraiz-3",
    tone: "blue",
  },
  {
    slug: "monster-interview",
    title: "Monster Interview",
    kicker: "AI interview practice",
    image: "/images/monster-interview-project.png",
    imageAlt: "Monster Interview practice application showing three themed AI interviewer options",
    summary: "An AI-assisted practice experience that helps people prepare for interviews with focused, role-aware feedback.",
    problem: "Interview preparation can feel abstract and inaccessible, especially when people do not have a coach or trusted person available to practice with.",
    built: "I shaped the product direction, designed the user flow, and used AI-assisted development to create an interactive interview-practice application powered by Google Gemini.",
    result: "The application was deployed on Vercel and tested as a complete working flow from interview setup through AI-generated practice and feedback.",
    role: "Product Lead & AI Builder",
    technologies: ["Next.js", "React", "TypeScript", "Google Gemini", "Vercel"],
    liveUrl: "https://monster-interview-b0w3siuqn-alianza10.vercel.app/",
    repoUrl: "https://github.com/hcarvente/monster-interview",
    tone: "coral",
  },
  {
    slug: "data-usa-snapshot",
    title: "Data USA Snapshot",
    kicker: "Public-data exploration",
    image: "/images/data-usa-project.png",
    imageAlt: "Data USA Snapshot dashboard showing workforce size, average earnings, and industry comparisons",
    summary: "A focused data experience that turns public economic data into clear, interactive comparisons.",
    problem: "Large public datasets can be difficult to navigate when someone needs a quick, understandable view of population and economic trends.",
    built: "I researched the Data USA API, designed the interface, and built selectors and charts that let visitors explore live public data without working directly with raw API responses.",
    result: "The project was deployed through GitHub Pages and made publicly accessible as a working snapshot tool connected to the Data USA API.",
    role: "Designer & Developer",
    technologies: ["HTML", "CSS", "JavaScript", "Data USA API", "GitHub Pages"],
    liveUrl: "https://hcarvente.github.io/datausa-snapshot/",
    repoUrl: "https://github.com/hcarvente/datausa-snapshot",
    tone: "gold",
  },
  {
    slug: "alianza-leadership-program",
    title: "Alianza Leadership Program",
    kicker: "Program landing experience",
    image: "/images/alianza-leadership-project.png",
    imageAlt: "Alianza Leadership Program landing page describing the program, stipend, format, and eligibility",
    summary: "A public-facing landing page that introduces Alianza’s leadership-development pathway and invites people into the program.",
    problem: "A strong leadership program needs a clear digital front door that communicates its purpose, audience, and next step without overwhelming visitors.",
    built: "I translated the program’s purpose into a responsive web experience, shaping the information hierarchy, visual presentation, and calls to action.",
    result: "The landing page was implemented and published through GitHub Pages, giving the leadership program a clear and publicly accessible entry point.",
    role: "Program Leader, Designer & Developer",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveUrl: "https://hcarvente.github.io/first-controlled-build/",
    repoUrl: "https://github.com/hcarvente/first-controlled-build",
    tone: "green",
  },
];

export const services = [
  { number: "01", title: "AI & digital-product strategy", description: "Turn a mission-driven challenge into a grounded product direction, practical roadmap, and prototype your team can learn from." },
  { number: "02", title: "Responsible AI workshops", description: "Build shared language, practical confidence, and responsible-use practices for teams beginning to work with AI." },
  { number: "03", title: "Nonprofit strategy & organizational development", description: "Clarify priorities, strengthen internal systems, and align people, programs, and operations around the mission." },
  { number: "04", title: "Leadership programs & curriculum", description: "Design learning experiences that center lived expertise, reflection, practice, and meaningful leadership growth." },
  { number: "05", title: "Facilitation, speaking & advising", description: "Create honest, energizing spaces for strategy, learning, public conversation, and complex decision-making." },
];

export const featuredMedia = [
  { type: "Essay", title: "Self-Isolation May Feel Like Jail—It’s Nothing Compared to Youth Prison", publication: "Teen Vogue", href: "https://www.teenvogue.com/story/self-isolation-is-not-jail" },
  { type: "Essay", title: "Four Steps to an NYC ‘Healing Revolution’", publication: "Center for New York City Affairs", href: "https://www.centernyc.org/publications-collection/four-steps-to-an-nyc-healing-revolution" },
  { type: "Writing", title: "Essays on leadership, healing, and collective liberation", publication: "Medium", href: "https://carventehernan.medium.com/" },
  { type: "Podcast", title: "From Prison to Purpose with Hernan Carvente-Martinez", publication: "Career Cheat Code", href: "https://careercheatcode.buzzsprout.com/305750/episodes/17685093-081-from-prison-to-purpose-with-hernan-carvente-martinez" },
  { type: "Webinar", title: "Advancing Art & Advocacy for Youth and Young Adults", publication: "Grantmakers in the Arts", href: "https://www.giarts.org/webinar/2021/Advancing-Art-%26-Advocacy" },
  { type: "Research & policy", title: "Perspectives on DOJ’s Violent Crime Reduction Roadmap", publication: "Council on Criminal Justice", href: "https://counciloncj.org/perspectives-on-doj-violent-crime-reduction-roadmap/?pdf=5529" },
  { type: "Conversation", title: "Roadmap to Resilience", publication: "Roadmap to Resilience", href: "https://www.roadmaptoresilience.org/guest/hernan-carvente-martinez" },
  { type: "Recognition", title: "2021 Reebok Human Rights Award", publication: "John Jay College", href: "https://www.jjay.cuny.edu/news-events/news/latinx-celebration-john-jay-alumnus-hernan-carvente-martinez-15-wins-2021-reebok-human-rights-award-100000" },
];
