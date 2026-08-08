"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { FilmstripDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

export default function Gallery() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <>
      <FilmstripDivider className="relative z-20 shadow-md" />

      <section id="gallery" className="relative overflow-hidden bg-ink py-20 sm:py-28 md:py-36 text-white border-t border-white/10">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-cyan/15 via-transparent to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10" lang={lang}>
          
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft backdrop-blur-md">
              <span>🖼️</span>
              <span className={ethiopic}>{t.gallery.eyebrow}</span>
            </div>

            <h2 className={`mt-5 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl !leading-[1.25] ${ethiopic}`}>
              <span className="bg-gradient-to-r from-white via-cream to-gold-soft bg-clip-text text-transparent">
                {t.gallery.title}
              </span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange via-gold to-cyan" />
          </Reveal>

          {/* Gallery Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {t.gallery.items.map((item, i) => (
              <Reveal key={item.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="group relative aspect-square overflow-hidden rounded-3xl border border-white/15 bg-ink-soft shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-4 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    <span className={`text-xs font-bold uppercase tracking-wider text-gold-soft ${ethiopic}`}>
                      {item.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}


