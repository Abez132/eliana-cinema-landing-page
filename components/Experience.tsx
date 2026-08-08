"use client";

import Reveal from "./Reveal";
import { useLanguage, business } from "@/lib/i18n";

const icons = [
  // 1. Dolby Atmos Sound
  (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  ),
  // 2. Silver Screen
  (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <polygon points="10 8 16 10 10 12 10 8" fill="currentColor" className="opacity-40" />
    </svg>
  ),
  // 3. Recliners
  (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 11v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8" />
      <path d="M4 11h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
      <path d="M6 11V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
    </svg>
  ),
  // 4. Snack Bar
  (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  // 5. New Releases Weekly
  (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="12" cy="15" r="2" fill="currentColor" className="opacity-40" />
    </svg>
  ),
  // 6. Easy to Reach
  (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
];

const badgeAccents = [
  "from-orange/20 to-orange-soft/10 text-orange border-orange/30 shadow-[0_0_20px_rgba(242,128,30,0.25)]",
  "from-cyan/20 to-cyan-soft/10 text-cyan border-cyan/30 shadow-[0_0_20px_rgba(23,209,234,0.25)]",
  "from-gold/20 to-gold-soft/10 text-gold border-gold/30 shadow-[0_0_20px_rgba(240,180,41,0.25)]",
  "from-orange/20 to-gold/10 text-orange-soft border-orange/30 shadow-[0_0_20px_rgba(242,128,30,0.25)]",
  "from-cyan/20 to-orange/10 text-cyan-soft border-cyan/30 shadow-[0_0_20px_rgba(23,209,234,0.25)]",
  "from-gold/20 to-cyan/10 text-gold-soft border-gold/30 shadow-[0_0_20px_rgba(240,180,41,0.25)]",
];

export default function Experience() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <section id="experience" className="relative overflow-hidden bg-ink py-20 sm:py-28 md:py-36 text-white">
      {/* Dynamic Background Spotlight Halos */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-cyan/15 via-cyan-deep/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-orange/15 via-orange-deep/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10" lang={lang}>
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft backdrop-blur-md">
            <span>✨</span>
            <span className={ethiopic}>{t.experience.eyebrow}</span>
            <span>✨</span>
          </div>

          <h2 className={`mt-5 font-display text-3xl uppercase tracking-wide text-white sm:text-5xl md:text-6xl !leading-[1.25] ${ethiopic}`}>
            <span className="bg-gradient-to-r from-white via-cream to-gold-soft bg-clip-text text-transparent">
              {t.experience.title}
            </span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange via-gold to-cyan" />
        </Reveal>

        {/* Features Card Grid */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          {t.experience.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-ink-soft/70 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-orange/40 hover:bg-ink-soft/90 hover:shadow-[0_15px_40px_-15px_rgba(242,128,30,0.35)] active:scale-[0.99]">
                
                {/* Card Top Ambient Glow Bar */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-orange/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card Number Watermark */}
                <span className="absolute top-4 right-5 font-display text-4xl text-white/10 transition-colors duration-300 group-hover:text-orange/25 select-none">
                  0{i + 1}
                </span>

                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br border backdrop-blur-md ${badgeAccents[i % badgeAccents.length]} transition-transform duration-500 group-hover:scale-110`}>
                  {icons[i % icons.length]}
                </div>

                {/* Card Title */}
                <h3 className={`mt-6 font-display text-xl uppercase tracking-wide text-white group-hover:text-gold-soft transition-colors !leading-[1.25] ${ethiopic}`}>
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className={`mt-3 text-sm leading-relaxed text-white/75 font-light ${ethiopic}`}>
                  {item.description}
                </p>

                {/* Corner Accent Line */}
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-soft opacity-0 transition-all duration-300 transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Explore Feature</span>
                  <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

