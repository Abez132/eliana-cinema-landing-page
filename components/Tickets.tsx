"use client";

import Reveal from "./Reveal";
import { Clapper } from "./Ornaments";
import { useLanguage, business } from "@/lib/i18n";

export default function Tickets() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  const tiers = [
    { ...t.tickets.standard, accent: "cyan" as const },
    { ...t.tickets.vip, accent: "orange" as const },
  ];

  return (
    <section id="tickets" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.tickets.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl uppercase text-white sm:text-4xl ${ethiopic}`}>{t.tickets.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div
                className={`relative overflow-hidden rounded-2xl border p-8 text-center ${
                  tier.accent === "orange" ? "border-orange/40 bg-orange/5" : "border-cyan/40 bg-cyan/5"
                }`}
              >
                <Clapper className={`mx-auto h-10 w-10 ${tier.accent === "orange" ? "text-orange" : "text-cyan"}`} />
                <h3 className={`mt-4 font-display text-2xl uppercase text-white ${ethiopic}`}>{tier.name}</h3>
                <p className={`mt-3 font-display text-3xl ${tier.accent === "orange" ? "text-orange" : "text-cyan"}`}>{tier.price}</p>
                <p className={`mt-4 text-sm leading-relaxed text-white/70 ${ethiopic}`}>{tier.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={2}>
          <a
            href={business.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-orange-deep ${ethiopic}`}
          >
            {t.tickets.cta}
          </a>
          <p className={`mx-auto mt-6 max-w-lg text-xs leading-relaxed text-white/50 ${ethiopic}`}>{t.tickets.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
