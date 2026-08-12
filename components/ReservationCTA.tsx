"use client";

import Reveal from "./Reveal";
import { StarField } from "./Ornaments";
import { useLanguage, business } from "@/lib/i18n";

export default function ReservationCTA() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section className="relative overflow-hidden bg-orange py-20 sm:py-24 text-white shadow-xl">
      <StarField />

      <Reveal
        className="relative mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6 text-center z-10"
        as="div"
      >
        <div lang={lang} className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
            <span className="text-white/70">•</span>
            <span>Eliana CinePlus</span>
          </div>

          <h2
            className={`mt-5 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl md:text-6xl !leading-[1.25] ${ethiopic}`}
          >
            {t.cta.title}
          </h2>

          <p
            className={`mt-4 max-w-xl text-base sm:text-lg text-white/95 leading-relaxed ${ethiopic}`}
          >
            {t.cta.sub}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row w-full max-w-md sm:max-w-none">
            <a
              href={business.phoneHref}
              className={`w-full sm:w-auto rounded-full bg-ink px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-ink-soft ${ethiopic}`}
            >
              {t.cta.call}
            </a>

            <a
              href={business.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-auto rounded-full border-2 border-white bg-white/15 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-white hover:text-orange-deep hover:scale-105 ${ethiopic}`}
            >
              {t.cta.book}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
