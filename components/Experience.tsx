"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Experience() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="experience" className="bg-cream-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.experience.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl uppercase text-ink sm:text-4xl ${ethiopic}`}>{t.experience.title}</h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {t.experience.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div>
                <span className={`h-8 w-px ${i % 2 === 0 ? "bg-orange" : "bg-cyan"} block`} />
                <h3 className={`mt-3 font-display text-lg uppercase text-ink ${ethiopic}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed text-charcoal/70 ${ethiopic}`}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
