"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { FilmReel, FilmstripDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <>
      <FilmstripDivider className="relative z-20 shadow-md" />

      <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-28 md:py-36 text-charcoal">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center" lang={lang}>
          
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
              <span>🏛️</span>
              <span className={ethiopic}>{t.about.eyebrow}</span>
            </div>

            <h2 className={`mt-5 font-display text-3xl uppercase text-ink sm:text-4xl md:text-5xl !leading-[1.25] ${ethiopic}`}>
              {t.about.title}
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-orange to-gold" />

            <p className={`mt-6 text-base leading-relaxed text-charcoal/85 ${ethiopic}`}>{t.about.p1}</p>
            <p className={`mt-4 text-base leading-relaxed text-charcoal/85 ${ethiopic}`}>{t.about.p2}</p>

            {/* Stat Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-orange/20 bg-white p-4 shadow-sm hover:border-orange/40 transition-colors">
                <p className="font-display text-2xl text-orange">{t.about.stat1Value}</p>
                <p className={`mt-1 text-xs uppercase tracking-wider text-charcoal/60 ${ethiopic}`}>{t.about.stat1Label}</p>
              </div>
              <div className="rounded-2xl border border-cyan-deep/20 bg-white p-4 shadow-sm hover:border-cyan-deep/40 transition-colors">
                <p className="font-display text-2xl text-cyan-deep">{t.about.stat2Value}</p>
                <p className={`mt-1 text-xs uppercase tracking-wider text-charcoal/60 ${ethiopic}`}>{t.about.stat2Label}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border-2 border-orange/30 shadow-[0_20px_50px_rgba(242,128,30,0.2)]">
              <Image 
                src="/images/photos/hall-seats-wide.jpg" 
                alt="Eliana Cinema recliner seating" 
                fill 
                sizes="(max-width: 768px) 100vw, 450px" 
                className="object-cover transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between backdrop-blur-md bg-ink/70 border border-white/20 p-4 rounded-2xl text-white">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold-soft font-semibold">Location</p>
                  <p className="text-sm font-medium">Eliana Hotel, Piassa 2nd Floor</p>
                </div>
                <FilmReel spin className="h-10 w-10 text-orange shrink-0" />
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <FilmstripDivider className="relative z-20 shadow-md" />
    </>
  );
}

