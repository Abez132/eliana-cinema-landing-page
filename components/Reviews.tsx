"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Reviews() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="reviews" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.reviews.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl uppercase text-white sm:text-4xl ${ethiopic}`}>{t.reviews.title}</h2>
          <p className={`mt-5 text-sm text-white/60 ${ethiopic}`}>{t.reviews.subtitle}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {t.reviews.items.map((r, i) => (
            <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <figure className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-cyan/40">
                <span className="font-display text-4xl leading-none text-orange/60">&ldquo;</span>
                <blockquote className={`mt-2 text-[15px] leading-relaxed text-white/85 ${ethiopic}`}>{r.quote}</blockquote>
                <figcaption className={`mt-5 text-xs uppercase tracking-wider text-cyan-soft/80 ${ethiopic}`}>{r.author}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
