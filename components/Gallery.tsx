"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { FilmstripDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

export default function Gallery() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";
  const [selectedImage, setSelectedImage] = useState<{
    label: string;
    image: string;
  } | null>(null);

  return (
    <>
      <FilmstripDivider className="relative z-20 shadow-md" />

      <section
        id="gallery"
        className="relative overflow-hidden bg-ink py-20 sm:py-28 md:py-36 text-white border-t border-white/10"
      >
        <div
          className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10"
          lang={lang}
        >
          <Reveal className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 fill-current"
                aria-hidden="true"
              >
                <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h10A2.5 2.5 0 0 1 18 5.5v7.75A2.5 2.5 0 0 1 15.5 15.7H9.74l-3.7 3.7A1 1 0 0 1 4.7 18.4l3.6-3.6H5.5A2.5 2.5 0 0 1 3 12.3V5.5Zm2.5-.25a.75.75 0 0 0-.75.75v6.2a.75.75 0 0 0 .75.75h10a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-10Zm2.7 2.5h4.6a.75.75 0 0 1 0 1.5H8.2a.75.75 0 0 1 0-1.5Zm0 3h6.1a.75.75 0 0 1 0 1.5H8.2a.75.75 0 0 1 0-1.5Z" />
              </svg>
              <span className={ethiopic}>{t.gallery.eyebrow}</span>
            </div>

            <h2
              className={`mt-5 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl !leading-[1.25] ${ethiopic}`}
            >
              {t.gallery.title}
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-white/15" />
          </Reveal>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {t.gallery.items.map((item, i) => (
              <Reveal key={item.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group relative block aspect-square w-full overflow-hidden rounded-3xl border border-white/15 bg-ink-soft text-left shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-ink/35 p-4 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider text-gold-soft ${ethiopic}`}
                    >
                      {item.label}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close gallery image"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedImage(null)}
          />
          <div
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">
              <span className={ethiopic}>{selectedImage.label}</span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.label}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
