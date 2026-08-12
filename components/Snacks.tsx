"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { FilmstripDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

const images = [
  {
    src: "/images/photos/popcorn-3dglasses.jpg",
    label: "Popcorn & 3D Glasses",
  },
  {
    src: "/images/photos/fanta-popcorn-slushie.webp",
    label: "Fresh Slushies & Popcorn",
  },
  { src: "/images/photos/icecream-promo.jpg", label: "Artisanal Ice Cream" },
];

export default function Snacks() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <>
      <FilmstripDivider className="relative z-20 shadow-md" />

      <section
        id="snacks"
        className="relative overflow-hidden bg-ink py-20 sm:py-28 md:py-36 text-white border-t border-white/10"
      >
        <div
          className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10"
          lang={lang}
        >
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <span className="text-white/70">•</span>
              <span className={ethiopic}>{t.snacks.eyebrow}</span>
            </div>

            <h2
              className={`mt-5 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl !leading-[1.25] ${ethiopic}`}
            >
              {t.snacks.title}
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-white/15" />
          </Reveal>

          {/* Photo Gallery Grid */}
          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-3">
            {images.map((img, i) => (
              <Reveal key={img.src} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-ink-soft shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40">
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-ink/35 p-5 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider text-gold-soft ${ethiopic}`}
                    >
                      {img.label}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Snack Menu Items */}
          <div className="mt-14 sm:mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.snacks.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-soft/75 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-lg">
                  <span className="mt-1.5 flex h-3 w-3 shrink-0 rounded-full bg-orange" />
                  <div>
                    <h3
                      className={`font-display text-lg uppercase text-white group-hover:text-gold-soft transition-colors !leading-[1.25] ${ethiopic}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm leading-relaxed text-white/75 font-light ${ethiopic}`}
                    >
                      {item.description}
                    </p>
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
