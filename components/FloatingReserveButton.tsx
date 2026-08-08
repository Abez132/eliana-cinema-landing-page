"use client";

import { useEffect, useState } from "react";
import { useLanguage, business } from "@/lib/i18n";

export default function FloatingReserveButton() {
  const [show, setShow] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={business.telegramHref}
      target="_blank"
      rel="noopener noreferrer"
      lang={lang}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-orange px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-5px_rgba(242,128,30,0.55)] transition-all duration-500 hover:scale-105 hover:bg-orange-deep animate-float ${
        lang === "am" ? "font-ethiopic" : ""
      } ${show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-flicker">
        <path d="M2 4l6-2 6 2v5c0 3-2.5 5-6 6-3.5-1-6-3-6-6V4Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      {t.nav.book}
    </a>
  );
}
