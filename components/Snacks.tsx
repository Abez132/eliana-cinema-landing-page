"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

const images = [
  "/images/photos/popcorn-3dglasses.jpg",
  "/images/photos/fanta-popcorn-slushie.webp",
  "/images/photos/icecream-promo.jpg",
];

export default function Snacks() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="snacks" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <Reveal className="text-center">
          <p className={`eyebrow ${ethiopic}`}>{t.snacks.eyebrow}</p>
          <h2 className={`mt-4 font-display text-3xl uppercase text-ink sm:text-4xl ${ethiopic}`}>{t.snacks.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {images.map((src, i) => (
            <Reveal key={src} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={src} alt="Eliana Cinema snack bar" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.snacks.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                <div>
                  <h3 className={`font-display text-base uppercase text-ink ${ethiopic}`}>{item.title}</h3>
                  <p className={`mt-1 text-sm leading-relaxed text-charcoal/70 ${ethiopic}`}>{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
