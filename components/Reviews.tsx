"use client";

import Reveal from "./Reveal";
import { FilmstripDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

export default function Reviews() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <>
      <FilmstripDivider className="relative z-20 shadow-md" />

      <section id="reviews" className="relative overflow-hidden bg-cream py-20 sm:py-28 md:py-36 text-charcoal">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10" lang={lang}>
          
          {/* Section Header */}
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
              <span>💬</span>
              <span className={ethiopic}>{t.reviews.eyebrow}</span>
              <span>💬</span>
            </div>

            <h2 className={`mt-5 font-display text-3xl uppercase tracking-wide text-ink sm:text-5xl !leading-[1.25] ${ethiopic}`}>
              {t.reviews.title}
            </h2>
            <p className={`mt-4 text-sm text-charcoal/70 ${ethiopic}`}>{t.reviews.subtitle}</p>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange via-gold to-cyan" />
          </Reveal>

          {/* Reviews Grid */}
          <div className="mt-14 sm:mt-16 grid gap-6 md:grid-cols-2">
            {t.reviews.items.map((r, i) => (
              <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <figure className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-orange/20 bg-white p-7 sm:p-8 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-orange/40 hover:shadow-xl">
                  
                  <div>
                    {/* Star Rating Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex text-orange text-sm gap-1">
                        ★★★★★
                      </div>
                      <span className="text-4xl font-display text-orange/30 group-hover:text-orange/60 transition-colors">
                        “
                      </span>
                    </div>

                    <blockquote className={`mt-3 text-base leading-relaxed text-charcoal/90 ${ethiopic}`}>
                      {r.quote}
                    </blockquote>
                  </div>

                  <figcaption className="mt-6 flex items-center gap-3 pt-4 border-t border-orange/15">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange/10 border border-orange/30 text-orange-deep font-bold text-xs uppercase">
                      {r.author.slice(0, 2)}
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider text-orange-deep ${ethiopic}`}>
                        {r.author}
                      </p>
                      <p className="text-[10px] text-charcoal/50 uppercase tracking-widest">Verified Guest Review</p>
                    </div>
                  </figcaption>

                </figure>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}


