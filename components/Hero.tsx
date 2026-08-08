"use client";

import Image from "next/image";
import { useLanguage, business } from "@/lib/i18n";
import { StarField } from "./Ornaments";

export default function Hero() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <Image
        src="/images/photos/hall-front-view.webp"
        alt="Eliana Cinema auditorium"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      <StarField />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-24 text-center" lang={lang}>
        <p className={`text-sm tracking-[0.2em] text-cyan-soft animate-fade-in-up ${ethiopic}`}>{t.hero.eyebrow}</p>

        <h1
          className="mt-5 font-display text-4xl uppercase leading-tight text-white text-shadow-soft animate-fade-in-up sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}
          lang={lang === "am" ? "am" : "en"}
        >
          <span className={ethiopic}>{t.hero.headline}</span>
        </h1>

        <p
          className={`mt-6 max-w-xl text-base text-white/80 animate-fade-in-up sm:text-lg ${ethiopic}`}
          style={{ animationDelay: "0.35s", animationFillMode: "backwards" }}
        >
          {t.hero.sub}
        </p>

        <p
          className={`mt-4 text-xs uppercase tracking-[0.3em] text-orange-soft animate-fade-in-up ${ethiopic}`}
          style={{ animationDelay: "0.45s", animationFillMode: "backwards" }}
        >
          {t.hero.tagline}
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up sm:flex-row"
          style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
        >
          <a
            href={business.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full rounded-full bg-orange px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-orange-deep sm:w-auto ${ethiopic}`}
          >
            {t.hero.cta1}
          </a>
          <a
            href={business.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full rounded-full border border-cyan/50 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cyan-soft transition-colors duration-300 hover:border-cyan hover:text-cyan sm:w-auto ${ethiopic}`}
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-cyan/70">
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="11" cy="10" r="2" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
}
