"use client";

import Reveal from "./Reveal";
import { useLanguage, business } from "@/lib/i18n";

const icons = [
  // 1. Dolby Atmos Sound
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>,
  // 2. Silver Screen
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <polygon
      points="10 8 16 10 10 12 10 8"
      fill="currentColor"
      className="opacity-40"
    />
  </svg>,
  // 3. Recliners
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 11v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8" />
    <path d="M4 11h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
    <path d="M6 11V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
  </svg>,
  // 4. Snack Bar
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>,
  // 5. New Releases Weekly
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="12" cy="15" r="2" fill="currentColor" className="opacity-40" />
  </svg>,
  // 6. Easy to Reach
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
];

const badgeAccents = [
  "bg-orange/10 text-orange border-orange/20",
  "bg-cyan/10 text-cyan border-cyan/20",
  "bg-gold/10 text-gold border-gold/20",
  "bg-orange/10 text-orange-soft border-orange/20",
  "bg-cyan/10 text-cyan-soft border-cyan/20",
  "bg-gold/10 text-gold-soft border-gold/20",
];

export default function Experience() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-ink py-20 sm:py-28 md:py-36 text-white"
    >
      <div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10"
        lang={lang}
      >
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="text-white/60">•</span>
            <span className={ethiopic}>{t.experience.eyebrow}</span>
            <span className="text-white/60">•</span>
          </div>

          <h2
            className={`mt-5 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl md:text-6xl !leading-[1.25] ${ethiopic}`}
          >
            {t.experience.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-white/20" />
        </Reveal>

        {/* Features Card Grid */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {t.experience.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-ink-soft/70 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-ink-soft active:scale-[0.99]">
                <span className="absolute right-5 top-4 font-display text-4xl text-white/10 select-none">
                  0{i + 1}
                </span>

                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${badgeAccents[i % badgeAccents.length]}`}
                >
                  {icons[i % icons.length]}
                </div>

                <h3
                  className={`mt-6 font-display text-xl uppercase tracking-wide text-white !leading-[1.25] ${ethiopic}`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-relaxed text-white/75 font-light ${ethiopic}`}
                >
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
