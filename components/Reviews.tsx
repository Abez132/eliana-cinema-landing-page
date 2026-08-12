"use client";

import Reveal from "./Reveal";
import { FilmstripDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

const reviewSource =
  "https://www.google.com/search?q=Eliana+Cinema+Addis+Ababa";

export default function Reviews() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <>
      <FilmstripDivider className="relative z-20 shadow-md" />

      <section
        id="reviews"
        className="relative overflow-hidden bg-cream py-20 sm:py-28 md:py-36 text-charcoal"
      >
        <div
          className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10"
          lang={lang}
        >
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 fill-current"
                aria-hidden="true"
              >
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H9l-4.5 4.5V5.5Zm2.5-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11Zm2.5 2h6a1 1 0 1 1 0 2h-6a1 1 0 0 1 0-2Zm0 4h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2Z" />
              </svg>
              <span className={ethiopic}>{t.reviews.eyebrow}</span>
            </div>

            <h2
              className={`mt-5 font-display text-3xl uppercase tracking-wide text-ink sm:text-5xl !leading-[1.25] ${ethiopic}`}
            >
              {t.reviews.title}
            </h2>
            <p className={`mt-4 text-sm text-charcoal/70 ${ethiopic}`}>
              {t.reviews.subtitle}
            </p>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-charcoal/15" />
          </Reveal>

          <div className="mt-14 sm:mt-16 grid gap-6 md:grid-cols-2">
            {t.reviews.items.map((r, i) => (
              <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <figure className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-orange/20 bg-white p-7 sm:p-8 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-orange/40 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex gap-1 text-sm text-orange"
                        aria-label="Five star rating"
                      >
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            viewBox="0 0 20 20"
                            className="h-4 w-4 fill-current"
                            aria-hidden="true"
                          >
                            <path d="M10 1.5l2.4 4.86 5.36.78-3.88 3.77.92 5.34L10 0 5.2 16.25l.92-5.34L2.24 7.14l5.36-.78L10 1.5Z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-4xl font-display text-orange/30 transition-colors group-hover:text-orange/60">
                        “
                      </span>
                    </div>

                    <blockquote
                      className={`mt-3 text-base leading-relaxed text-charcoal/90 ${ethiopic}`}
                    >
                      {r.quote}
                    </blockquote>
                  </div>

                  <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-orange/15 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange/30 bg-orange/10 text-xs font-bold uppercase text-orange-deep">
                        {r.author.slice(0, 2)}
                      </div>
                      <div>
                        <p
                          className={`text-xs font-bold uppercase tracking-wider text-orange-deep ${ethiopic}`}
                        >
                          {r.author}
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-charcoal/50">
                          Verified Guest Review
                        </p>
                      </div>
                    </div>
                    <a
                      href={reviewSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-orange/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-deep transition-colors hover:border-orange hover:bg-orange/5"
                    >
                      Source
                    </a>
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
