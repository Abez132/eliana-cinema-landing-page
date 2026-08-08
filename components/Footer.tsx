"use client";

import { useLanguage, business } from "@/lib/i18n";

export default function Footer() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.tickets, href: "#tickets" },
    { label: t.nav.snacks, href: "#snacks" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.visit, href: "#visit" },
  ];

  const socials = [
    { label: "Telegram", href: business.telegramHref },
    { label: "Facebook", href: business.facebookHref },
    { label: "TikTok", href: business.tiktokHref },
    { label: "Instagram", href: business.instagramHref },
  ];

  return (
    <footer className="border-t-4 border-cyan/60 bg-ink pb-8 pt-16 text-white/75">
      <div className="mx-auto max-w-6xl px-6" lang={lang}>
        <div className="flex flex-col items-center text-center">
          <p className="font-script text-3xl">
            <span className="text-orange">Eliana</span> <span className="text-cyan">Cinema</span>
          </p>
          <p className={`mt-4 text-sm text-white/60 ${ethiopic}`}>{t.footer.thanks}</p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 text-sm sm:grid-cols-3">
          <div>
            <p className={`font-semibold text-cyan-soft ${ethiopic}`}>{t.footer.navigate}</p>
            <ul className="mt-3 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={`transition-colors hover:text-white ${ethiopic}`}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`font-semibold text-cyan-soft ${ethiopic}`}>{t.footer.contact}</p>
            <ul className="mt-3 space-y-2">
              <li>{business.address}</li>
              <li>
                <a href={business.phoneHref} className="transition-colors hover:text-white">{business.phone}</a>
              </li>
            </ul>
          </div>
          <div>
            <p className={`font-semibold text-cyan-soft ${ethiopic}`}>{t.footer.social}</p>
            <ul className="mt-3 space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={`mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50 ${ethiopic}`}>
          © {new Date().getFullYear()} {business.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
