"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Gallery() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.gallery.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl uppercase text-ink sm:text-4xl ${ethiopic}`}>{t.gallery.title}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {t.gallery.items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="group relative aspect-square overflow-hidden rounded-lg border border-orange/20">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-black/0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className={`text-xs font-medium text-white ${ethiopic}`}>{item.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
