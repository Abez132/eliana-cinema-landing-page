"use client";

import Reveal from "./Reveal";
import { StarField } from "./Ornaments";
import { useLanguage, business } from "@/lib/i18n";

export default function ReservationCTA() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section className="relative overflow-hidden bg-orange py-20">
      <StarField />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center" as="div">
        <div lang={lang} className="flex flex-col items-center">
          <h2 className={`font-display text-3xl uppercase text-white sm:text-4xl ${ethiopic}`}>{t.cta.title}</h2>
          <p className={`mt-4 max-w-lg text-white/90 ${ethiopic}`}>{t.cta.sub}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={business.phoneHref}
              className="w-full rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
            >
              {t.cta.call}
            </a>
            <a
              href={business.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full rounded-full border border-white/50 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:border-white sm:w-auto ${ethiopic}`}
            >
              {t.cta.book}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
