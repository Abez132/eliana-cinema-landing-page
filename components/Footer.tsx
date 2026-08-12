"use client";

import { useLanguage, business } from "@/lib/i18n";

const iconClass = "h-4 w-4 fill-current";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm4.89 6.74-1.82 8.58c-.13.58-.48.72-1 .45l-2.76-2.03-1.33 1.28c-.15.15-.28.28-.58.28l.2-2.9 5.26-4.75c.23-.2-.05-.31-.35-.11L8.64 12.7 6 11.9c-.56-.18-.57-.56.12-.83l9.75-3.76c.47-.18.88.11.72.73Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.25Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V7.3c0-.88.25-1.48 1.52-1.48H16V3.1c-.28-.04-1.23-.1-2.35-.1-2.33 0-3.93 1.42-3.93 4.04V11H7.5v3h2.22v8h3.78Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path d="M15.7 3c.45 1.7 1.68 3.08 3.42 3.62v2.92c-1.66-.08-3.16-.7-4.41-1.68v6.09c0 3.37-2.54 5.99-5.9 5.99S3 17.3 3 13.93s2.54-5.99 5.9-5.99c.44 0 .86.05 1.27.14v2.9a3.6 3.6 0 0 0-1.27-.28c-1.8 0-3.26 1.45-3.26 3.25 0 1.8 1.46 3.25 3.26 3.25s3.26-1.45 3.26-3.25V3h4.94Z" />
    </svg>
  );
}

const socials = [
  { label: "Telegram", href: business.telegramHref, icon: TelegramIcon },
  { label: "Facebook", href: business.facebookHref, icon: FacebookIcon },
  { label: "TikTok", href: business.tiktokHref, icon: TikTokIcon },
  { label: "Instagram", href: business.instagramHref, icon: InstagramIcon },
];

export default function Footer() {
  const { t, lang } = useLanguage();
  const ethiopic = lang === "am" ? "font-ethiopic" : "";

  return (
    <footer className="border-t border-white/10 bg-ink pb-6 pt-10 text-white/75">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" lang={lang}>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <p className="font-script text-3xl leading-none">
              <span className="text-orange">Eliana</span>{" "}
              <span className="text-cyan">Cinema</span>
            </p>
            <p className={`mt-2 text-sm text-white/60 ${ethiopic}`}>
              {t.footer.thanks}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors hover:border-cyan/40 hover:text-cyan-soft"
            >
              Call
            </a>
            <a
              href={business.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-transform hover:scale-[1.02]"
            >
              Book
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
                title={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <div
            className={`flex flex-col gap-1 sm:flex-row sm:items-center ${ethiopic}`}
          >
            <span>{business.address}</span>
            <span className="hidden sm:inline">•</span>
            <a
              href={business.phoneHref}
              className="transition-colors hover:text-white"
            >
              {business.phone}
            </a>
          </div>
          <p className={ethiopic}>
            © {new Date().getFullYear()} {business.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
