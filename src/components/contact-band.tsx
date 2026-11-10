import Link from "next/link";

export function ContactBand() {
  return <section className="bg-cobalt text-white"><div className="shell grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center lg:py-20"><div><p className="eyebrow text-sky">Have a challenge worth building around?</p><h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Let&apos;s turn purpose into a practical next move.</h2></div><Link href="/contact" className="button button-light">Let&apos;s work together <span aria-hidden="true">↗</span></Link></div></section>;
}
