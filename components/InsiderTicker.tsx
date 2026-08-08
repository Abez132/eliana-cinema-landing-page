"use client";

import { useLanguage } from "@/lib/i18n";

const icons = ["🎟️", "🎬", "📱", "🍿"];

export default function InsiderTicker() {
  const { t, lang } = useLanguage();
  const items = t.insider.items;
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-orange/30 bg-ink py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} lang={lang} className={`flex items-center gap-2 text-sm text-white/80 ${lang === "am" ? "font-ethiopic" : ""}`}>
            <span aria-hidden="true">{icons[i % items.length]}</span>
            {item}
            <span className="ml-8 text-cyan/50" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
