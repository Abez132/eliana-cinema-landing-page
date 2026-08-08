# Eliana Cinema — Landing Page

A bilingual (English + Amharic) landing page built with **Next.js 14 (App Router)** and **Tailwind CSS** for Eliana Cinema, on the 2nd floor of the Eliana Hotel, Churchill Avenue, Piassa, Addis Ababa — built on spec per Possible Technology's Speculative Landing Page Program.

This is a **sample built speculatively**, using Eliana Cinema's real public name, branding, and photography — it has not been commissioned by the venue. See `Eliana_Cinema_Brand_Snapshot.docx` (delivered alongside this project) for the research this build is based on.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server needs internet access on first run to fetch the Google Fonts (Anton, Yellowtail, Poppins, Noto Sans Ethiopic).

## What's real vs. inferred

| Element | Status |
|---|---|
| Logo colors | Real — sampled directly from the venue's own promotional graphics (orange `#F2801E`, cyan `#17D1EA`) |
| Address | Real — Eliana Hotel, Churchill Avenue, Piassa, 2nd floor, confirmed via Google Maps and the venue's own Telegram/Facebook |
| Phone, Telegram, TikTok, Facebook | Real, confirmed across multiple public listings |
| Ticket prices (Standard 300 Birr / VIP 500 Birr) | Real — confirmed via the venue's own public posts |
| Photography (hall, seats, screen, lobby, snacks) | Real — the venue's own promotional photos, provided directly |
| Review quotes | Real, genuine positive excerpts pulled from public review platforms. **Note:** online sentiment for this venue is mixed (some reviews cite service issues); the quotes shown are real but selected, as is standard for a marketing page — see the Brand Snapshot for the full picture |
| Instagram handle | Inferred from the consistent `elianacinema` pattern used on Facebook/Telegram — not independently confirmed, worth verifying before publishing |
| Showtimes | Not fixed — the venue posts a new weekly schedule on Telegram rather than keeping standing hours, so the site points people there rather than listing invented hours |
| Amharic translations | AI-drafted, not yet reviewed by a native speaker |

## ⚠️ Before this goes out as a pitch

- **Amharic review** — every Amharic string lives in `lib/i18n.tsx` under the `am` key. Needs a native-speaker read-through on the live site before outreach.
- **Confirm the Instagram handle** — see note above.
- **Reviews are genuinely mixed for this venue.** The Brand Snapshot documents this honestly; worth deciding internally how to handle that in outreach conversations rather than pretending it isn't the case.

## Project structure

```
app/
  layout.tsx          Fonts (Anton display, Yellowtail script, Poppins body, Noto Sans Ethiopic), metadata
  page.tsx             Assembles all sections
  globals.css          Base styles, scroll-reveal, film-strip divider utility
components/
  Navbar.tsx            Script wordmark, language toggle, sticky nav
  Hero.tsx               Full-height hero over a real auditorium photo
  InsiderTicker.tsx       Scrolling ticker with real practical details (prices, weekly schedule, booking)
  About.tsx               Story section with real stats (Dolby Atmos, 2nd floor)
  Experience.tsx           6-point "what's included" grid
  Tickets.tsx              Standard/VIP pricing cards with real prices
  Snacks.tsx               Snack bar section with real concession photos
  Reviews.tsx              Real, attributed guest quotes
  Gallery.tsx              8-photo grid of the real venue
  ReservationCTA.tsx       Full-width orange CTA band
  LocationSection.tsx      Address/phone + embedded Google Map
  Footer.tsx               Real contact + social links
  FloatingReserveButton.tsx  Persistent floating "Book Tickets" CTA
  Ornaments.tsx            Film-reel, sparkle, and clapperboard motifs — the site's signature visual language
  Reveal.tsx               IntersectionObserver fade-in-on-scroll wrapper
lib/
  i18n.tsx                 Bilingual content dictionary (en/am) + LanguageProvider/useLanguage hook
public/images/photos/      Real venue photography (compressed for mobile)
```

## Design tokens

- **Orange** `#F2801E`, **Cyan** `#17D1EA` — the venue's actual two-tone logo colors
- **Gold** `#F0B429` — accent for stars/VIP touches, pulled from the interior's warm lighting
- **Ink** `#0B0B0F` — the near-black used throughout the venue's own promotional graphics
- **Anton** (bold condensed) for headings — a marquee/poster feel; **Yellowtail** (script) for the wordmark, matching the real logo; **Poppins** for body/UI; **Noto Sans Ethiopic** for Amharic
- Signature visual elements: a film-reel motif (`components/Ornaments.tsx`), scattered gold sparkles on dark sections, and a film-strip perforation divider utility class

## Map

`components/LocationSection.tsx` embeds a Google Maps iframe via a name-based search query in `business.mapEmbedSrc` (`lib/i18n.tsx`). Swap it for the exact place embed URL for pinpoint accuracy.
