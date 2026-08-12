"use client";

import Reveal from "./Reveal";
import { Clapper, FilmstripDivider } from "./Ornaments";
import { useLanguage, business } from "@/lib/i18n";

export default function Tickets() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  const tiers = [
    {
      ...t.tickets.standard,
      accent: "cyan" as const,
      badge: "Full Dolby Atmos",
      cardStyle:
        "border border-white/10 bg-white shadow-sm hover:border-orange/30",
      badgeStyle: "bg-cyan/10 border border-cyan/20 text-cyan-deep",
      priceColor: "text-cyan-deep",
      buttonStyle: "bg-cyan-deep hover:bg-cyan text-white",
      popular: false,
    },
    {
      ...t.tickets.vip,
      accent: "orange" as const,
      badge: "VIP Recliners",
      popular: true,
      cardStyle:
        "border border-orange/30 bg-white shadow-sm hover:border-orange",
      badgeStyle:
        "bg-orange/10 border border-orange/30 text-orange-deep font-semibold",
      priceColor: "text-orange-deep",
      buttonStyle: "bg-orange hover:bg-orange-deep text-white",
    },
  ];

  return (
    <>
      <FilmstripDivider className="relative z-20 shadow-md" />

      <section
        id="tickets"
        className="relative overflow-hidden bg-cream py-20 sm:py-28 md:py-36 text-charcoal"
      >
        <div
          className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10"
          lang={lang}
        >
          {/* Section Header */}
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-deep">
              <span className="text-orange">•</span>
              <span className={ethiopic}>{t.tickets.eyebrow}</span>
              <span className="text-orange">•</span>
            </div>

            <h2
              className={`mt-5 font-display text-3xl uppercase tracking-wide text-ink sm:text-5xl !leading-[1.25] ${ethiopic}`}
            >
              {t.tickets.title}
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-charcoal/15" />
          </Reveal>

          {/* Ticket Tier Cards Grid */}
          <div className="mt-14 sm:mt-16 grid gap-6 sm:grid-cols-2">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 active:scale-[0.99] ${tier.cardStyle}`}
                >
                  {/* Top Popular Tag */}
                  {tier.popular && (
                    <div className="absolute right-0 top-0 rounded-bl-2xl bg-orange px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </div>
                  )}

                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-block rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider ${tier.badgeStyle}`}
                      >
                        {tier.badge}
                      </span>
                      <Clapper
                        className={`h-8 w-8 ${tier.accent === "orange" ? "text-orange" : "text-cyan-deep"}`}
                      />
                    </div>

                    {/* Title & Price */}
                    <h3
                      className={`mt-6 font-display text-2xl uppercase tracking-wide text-ink !leading-[1.25] ${ethiopic}`}
                    >
                      {tier.name}
                    </h3>

                    <div className="mt-3 flex items-baseline gap-2">
                      <span
                        className={`font-display text-4xl sm:text-5xl ${tier.priceColor}`}
                      >
                        {tier.price}
                      </span>
                      <span className="text-xs text-charcoal/60 uppercase tracking-wider">
                        / ticket
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className={`mt-4 text-sm leading-relaxed text-charcoal/80 ${ethiopic}`}
                    >
                      {tier.description}
                    </p>
                  </div>

                  {/* Card Footer Button */}
                  <div className="mt-8 pt-6 border-t border-orange/15">
                    <a
                      href={business.telegramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center rounded-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] ${tier.buttonStyle} ${ethiopic}`}
                    >
                      {t.tickets.cta}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Note Disclaimer */}
          <Reveal className="mt-12 text-center" delay={2}>
            <p
              className={`mx-auto max-w-xl text-xs leading-relaxed text-charcoal/80 bg-white border border-orange/20 rounded-2xl p-4 shadow-sm ${ethiopic}`}
            >
              {t.tickets.note}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
