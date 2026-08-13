"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { FilmstripDivider } from "./Ornaments";
import { useLanguage } from "@/lib/i18n";

export default function Gallery() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";
  const items = t.gallery.items;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const activeItem = selectedIndex !== null ? items[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + items.length) % items.length : null
    );
  }, [items.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % items.length : null
    );
  }, [items.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

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
            {items.map((item, i) => (
              <Reveal key={item.label} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(i)}
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

      {selectedIndex !== null && activeItem && (
        <div
          className="gallery-lightbox fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-hidden"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            aria-label="Close gallery image"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedIndex(null)}
          />
          <div
            className="relative z-10 flex flex-col w-full max-w-5xl max-h-[92vh] sm:max-h-[88vh] overflow-hidden rounded-[1.25rem] sm:rounded-[2rem] border border-white/15 bg-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Header bar */}
            <div className="flex-shrink-0 flex items-center justify-between border-b border-white/10 bg-black/40 px-4 sm:px-6 py-2.5 sm:py-3 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-bold text-gold">
                  {selectedIndex + 1} / {items.length}
                </span>
                <span className={`font-medium text-white ${ethiopic}`}>
                  {activeItem.label}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.15em] text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                Close
              </button>
            </div>

            {/* Image viewer container with prev/next arrows */}
            <div className="relative flex-1 min-h-[220px] sm:min-h-[320px] h-[50vh] sm:h-[60vh] max-h-[65vh] w-full bg-black/70 group flex items-center justify-center overflow-hidden">
              <Image
                src={activeItem.image}
                alt={activeItem.label}
                fill
                priority
                className="object-contain p-2 sm:p-4 transition-all duration-300"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous Image"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/90 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-gold/60 hover:bg-black/80 hover:text-gold focus:outline-none z-10"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next Image"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/90 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-gold/60 hover:bg-black/80 hover:text-gold focus:outline-none z-10"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Bottom thumbnail strip scrollbar */}
            <div className="flex-shrink-0 flex items-center gap-2 overflow-x-auto border-t border-white/10 bg-black/50 p-2 sm:p-3 scrollbar-thin scrollbar-thumb-white/20">
              {items.map((item, idx) => (
                <button
                  key={item.label + idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(idx);
                  }}
                  className={`relative h-12 w-16 sm:h-14 sm:w-20 flex-shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${
                    idx === selectedIndex
                      ? "border-gold ring-2 ring-gold/40 scale-105 opacity-100"
                      : "border-white/15 opacity-50 hover:opacity-100 hover:border-white/40"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
