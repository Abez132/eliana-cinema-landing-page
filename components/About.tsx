"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { FilmReel } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center" lang={lang}>
        <Reveal>
          <p className={`eyebrow ${ethiopic}`}>{t.about.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl uppercase leading-snug text-ink sm:text-4xl ${ethiopic}`}>{t.about.title}</h2>
          <div className="mt-6 h-px w-16 bg-orange" />
          <p className={`mt-6 text-base leading-relaxed text-charcoal/85 ${ethiopic}`}>{t.about.p1}</p>
          <p className={`mt-4 text-base leading-relaxed text-charcoal/85 ${ethiopic}`}>{t.about.p2}</p>
          <div className="mt-8 flex gap-10">
            <div>
              <p className="font-display text-xl text-orange">{t.about.stat1Value}</p>
              <p className={`mt-1 text-xs uppercase tracking-wider text-charcoal/60 ${ethiopic}`}>{t.about.stat1Label}</p>
            </div>
            <div>
              <p className="font-display text-xl text-cyan-deep">{t.about.stat2Value}</p>
              <p className={`mt-1 text-xs uppercase tracking-wider text-charcoal/60 ${ethiopic}`}>{t.about.stat2Label}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-orange/20 shadow-xl">
            <Image src="/images/photos/hall-seats-wide.jpg" alt="Eliana Cinema recliner seating" fill sizes="400px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
            <FilmReel spin className="absolute -bottom-6 -right-6 h-24 w-24 text-orange/70" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
