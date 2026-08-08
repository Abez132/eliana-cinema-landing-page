"use client";

import Image from "next/image";
import { useLanguage, business } from "@/lib/i18n";
import { StarField, FilmReel } from "./Ornaments";

export default function Hero() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink">
      {/* Background Auditorium Image with rich opacity and vibrant gradient overlay */}
      <Image
        src="/images/photos/hall-front-view.webp"
        alt="Eliana Cinema auditorium"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
      />

      {/* Vibrant Multi-Layer Ambient Lighting & Gradient Halos */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/65 to-ink/95" />
      
      {/* Projector Beam Cone from top center */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan/35 via-orange/20 to-transparent blur-2xl opacity-80" />
      
      <StarField />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-24 text-center" lang={lang}>
        <p className={`text-sm tracking-[0.2em] text-cyan-soft animate-fade-in-up ${ethiopic}`}>{t.hero.eyebrow}</p>

        <h1
          className="mt-6 font-display text-4xl uppercase !leading-[1.2] text-white animate-fade-in-up sm:text-6xl md:text-7xl tracking-wide"
          style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}
          lang={lang === "am" ? "am" : "en"}
        >
          <span className={`block bg-gradient-to-r from-white via-cream to-gold-soft bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] ${ethiopic} !leading-[1.2]`}>
            {t.hero.headline}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-6 max-w-2xl text-base text-white/90 font-light leading-relaxed animate-fade-in-up sm:text-xl drop-shadow-md ${ethiopic}`}
          style={{ animationDelay: "0.35s", animationFillMode: "backwards" }}
        >
          {t.hero.sub}
        </p>

        {/* Highlight Tagline Pill */}
        <div
          className="mt-5 animate-fade-in-up"
          style={{ animationDelay: "0.45s", animationFillMode: "backwards" }}
        >
          <span className={`inline-block rounded-full bg-ink-soft/70 border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-cyan-soft backdrop-blur-sm ${ethiopic}`}>
            ✦ {t.hero.tagline} ✦
          </span>
        </div>

        {/* Vibrant Glowing Action Buttons */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-in-up sm:flex-row sm:gap-6 w-full max-w-md sm:max-w-none"
          style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
        >
          {/* Primary Telegram CTA */}
          <a
            href={business.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 px-9 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 sm:w-auto ${ethiopic}`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.37-.26-2.05-.48-.83-.27-1.49-.42-1.43-.88.03-.24.38-.49 1.04-.75 4.08-1.78 6.8-2.95 8.16-3.53 3.88-1.62 4.69-1.9 5.22-1.91.11 0 .38.03.55.17.14.12.18.28.2.44-.01.07.01.23 0 .38z"/>
              </svg>
              {t.hero.cta1}
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>

          {/* Secondary Telegram Showtimes CTA */}
          <a
            href={business.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full rounded-full border border-cyan/60 bg-cyan/10 px-9 py-4 text-sm font-bold uppercase tracking-wider text-cyan-soft backdrop-blur-md transition-all duration-300 hover:border-cyan hover:bg-cyan/25 hover:text-white hover:scale-105 sm:w-auto ${ethiopic}`}
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

    </section>
  );
}

