export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow text-cobalt">{eyebrow}</p><h1 className="display-title mt-5 max-w-5xl">{title}</h1><p className="lede mt-8 max-w-3xl">{intro}</p></div></section>;
}
