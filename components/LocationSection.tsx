"use client";

import Reveal from "./Reveal";
import { useLanguage, business } from "@/lib/i18n";

export default function LocationSection() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-cream py-20 sm:py-28 md:py-36 text-charcoal"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" lang={lang}>
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
            <span className="text-orange">•</span>
            <span className={ethiopic}>{t.visit.eyebrow}</span>
          </div>

          <h2
            className={`mt-5 font-display text-3xl uppercase text-ink sm:text-5xl !leading-[1.25] ${ethiopic}`}
          >
            {t.visit.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-charcoal/15" />
        </Reveal>

        {/* Location & Map Container */}
        <div className="mt-12 sm:mt-16 grid gap-0 overflow-hidden rounded-3xl border-2 border-orange/20 bg-white shadow-2xl md:grid-cols-5">
          {/* Info Side */}
          <Reveal
            className="flex flex-col justify-between gap-6 bg-white p-6 sm:p-10 md:col-span-2"
            delay={1}
          >
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange font-bold text-lg">
                  📍
                </div>
                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-wider text-orange-deep ${ethiopic}`}
                  >
                    {t.visit.addressLabel}
                  </p>
                  <p className="mt-1 text-sm sm:text-base text-charcoal leading-relaxed">
                    {business.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-deep/10 text-cyan-deep font-bold text-lg">
                  📞
                </div>
                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-wider text-orange-deep ${ethiopic}`}
                  >
                    {t.visit.phoneLabel}
                  </p>
                  <a
                    href={business.phoneHref}
                    className="mt-1 block text-sm sm:text-base font-semibold text-charcoal hover:text-orange transition-colors"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              {/* Hours / Schedule */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold-soft font-bold text-lg">
                  🕒
                </div>
                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-wider text-orange-deep ${ethiopic}`}
                  >
                    {t.visit.hoursLabel}
                  </p>
                  <p
                    className={`mt-1 text-sm sm:text-base text-charcoal/90 leading-relaxed ${ethiopic}`}
                  >
                    {t.visit.hoursValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Telegram Booking Action */}
            <div className="pt-4 border-t border-orange/15">
              <a
                href={business.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center rounded-full bg-orange py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02] ${ethiopic}`}
              >
                {t.visit.book}
              </a>
            </div>
          </Reveal>

          {/* Interactive Google Map iframe */}
          <Reveal
            className="min-h-[350px] md:col-span-3 bg-cream-dark"
            delay={2}
          >
            <iframe
              title="Eliana Cinema location map"
              src={business.mapEmbedSrc}
              className="h-full min-h-[350px] w-full border-0 grayscale focus:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
