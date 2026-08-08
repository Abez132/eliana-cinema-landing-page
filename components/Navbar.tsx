"use client";

import { useEffect, useState } from "react";
import { useLanguage, business } from "@/lib/i18n";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, toggle } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.tickets, href: "#tickets" },
    { label: t.nav.snacks, href: "#snacks" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.visit, href: "#visit" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-ink/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <a href="#home" className="font-script text-2xl leading-none md:text-3xl">
          <span className="text-orange">Eliana</span> <span className="text-cyan">Cinema</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex" lang={lang}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide text-white/85 transition-colors hover:text-cyan ${lang === "am" ? "font-ethiopic" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-full border border-white/25 px-3.5 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:border-cyan hover:text-cyan"
          >
            {t.langToggle}
          </button>
          <a
            href={business.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            lang={lang}
            className={`rounded-full bg-orange px-5 py-2 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-orange-deep ${lang === "am" ? "font-ethiopic" : ""}`}
          >
            {t.nav.book}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white/80"
          >
            {t.langToggle}
          </button>
          <button className="text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-6 py-5 lg:hidden" lang={lang}>
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium text-white/85 hover:text-cyan ${lang === "am" ? "font-ethiopic" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={business.telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={`inline-block rounded-full bg-orange px-5 py-2 text-sm font-semibold text-white ${lang === "am" ? "font-ethiopic" : ""}`}
              >
                {t.nav.book}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
