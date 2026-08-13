"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "am";

export const business = {
  name: "Eliana Cinema",
  address: "Eliana Hotel, Churchill Avenue, Piassa (2nd Floor), Addis Ababa, Ethiopia",
  phone: "+251 92 608 0808",
  phoneHref: "tel:+251926080808",
  telegram: "@Elianacinema",
  telegramHref: "https://t.me/BireshCinePlus",
  tiktok: "@eliana_cinema",
  tiktokHref: "https://www.tiktok.com/@eliana_cinema",
  facebookHref: "https://www.facebook.com/elianacinema/",
  instagramHref: "https://www.instagram.com/elianacinema/",
  bookingHref: "https://getus.cnetcommerce.com/",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Eliana+Cinema,+Churchill+Avenue,+Piassa,+Addis+Ababa&output=embed",
  ticketStandard: "300 Birr",
  ticketVip: "500 Birr",
};

/**
 * All translatable UI copy, keyed en/am. Written and checked for meaning by
 * the assistant; per the program's workflow guide it still needs a
 * native-speaker read-through on the live page before outreach.
 */
export const content = {
  en: {
    nav: { about: "About", experience: "The Experience", tickets: "Tickets", snacks: "Snack Bar", reviews: "Reviews", gallery: "Gallery", visit: "Visit", book: "Book Tickets" },
    hero: {
      eyebrow: "Piassa's Home for the Big Screen",
      headline: "Experience the Perfect Cinema Moment",
      sub: "Dolby Atmos sound, a silver screen, and comfortable recliner seats — Addis Ababa's classic movie night, done right.",
      cta1: "Book Tickets",
      cta2: "See Showtimes on Telegram",
      tagline: "Comfortable Seats · Big Screen · Great Movies",
    },
    about: {
      eyebrow: "Our Story",
      title: "A Classic Movie Night, in the Heart of Piassa",
      p1: "Eliana Cinema sits on the 2nd floor of the Eliana Hotel on Churchill Avenue, right in the heart of Piassa — a familiar, easy-to-reach spot locals have made their go-to for catching the latest films, from local productions to international blockbusters.",
      p2: "Dolby Atmos surround sound and a silver screen with crisp, clear images mean the picture and sound hold up against any modern multiplex in the city, all without leaving the neighborhood everyone already knows.",
      stat1Value: "Dolby Atmos",
      stat1Label: "Surround Sound",
      stat2Value: "2nd Floor",
      stat2Label: "Eliana Hotel, Piassa",
    },
    insider: {
      items: [
        "Standard tickets 300 Birr · VIP recliners 500 Birr",
        "New movies every week — check Telegram for this week's schedule",
        "Book online or by phone before popular new releases sell out",
        "Snack bar: popcorn, fries, fresh juice, ice cream, and more",
      ],
    },
    experience: {
      eyebrow: "The Experience",
      title: "Built for the Big Screen",
      items: [
        { title: "Dolby Atmos Sound", description: "Surround sound that fills the room — every scene lands the way it was mixed to." },
        { title: "Silver Screen", description: "A crisp, clear picture with true blacks and bright, accurate color." },
        { title: "Comfortable Recliners", description: "VIP recliner seating for the shows worth settling in for." },
        { title: "Snack Bar", description: "Popcorn, fries, fresh juice, and ice cream — all made to order inside." },
        { title: "New Releases Weekly", description: "Local productions and international blockbusters, on rotation every week." },
        { title: "Easy to Reach", description: "Right on Churchill Avenue in Piassa — no need to cross town for a good screen." },
      ],
    },
    tickets: {
      eyebrow: "Tickets",
      title: "Simple, Straightforward Pricing",
      note: "Prices confirmed as of this listing — always worth a quick check before you go, since showtimes and pricing can shift with new releases.",
      standard: {
        name: "Standard",
        price: business.ticketStandard,
        description: "Comfortable cinema seating with the full Dolby Atmos and silver-screen experience.",
      },
      vip: {
        name: "VIP",
        price: business.ticketVip,
        description: "Reclining VIP seats for the shows you want to properly sink into.",
      },
      cta: "Book on Telegram",
    },
    snacks: {
      eyebrow: "Snack Bar",
      title: "Concessions Worth the Trip",
      items: [
        { title: "Popcorn", description: "Fresh, buttery, and topped up before the trailers even start." },
        { title: "Fries", description: "Golden and crisp, served with ketchup on the side." },
        { title: "Fresh Juice", description: "Cold-pressed and poured tall — the perfect pair for a matinee." },
        { title: "Ice Cream", description: "Three scoops, three flavors — a cool finish to any showing." },
        { title: "Soft Drinks", description: "Fanta and other classics, ice cold." },
        { title: "Slushies", description: "Fruit-forward and refreshing, finished with a wedge of lime." },
      ],
    },
    reviews: {
      eyebrow: "In Our Guests' Words",
      title: "What Piassa Is Saying",
      subtitle: "Real guest feedback from public reviews.",
      items: [
        { quote: "A great place for movie lovers — appealing lobby, superior screen and sound quality.", author: "Guest review" },
        { quote: "The theater itself is well-maintained and looks nice, and the sound system is good.", author: "Guest review" },
        { quote: "VIP is equipped with comfortable recliner seats.", author: "Guest review" },
        { quote: "It's very nice and cozy — I really enjoyed my first time at the cinema.", author: "Guest review" },
      ],
    },
    gallery: {
      eyebrow: "Take a Look Inside",
      title: "The Full Eliana Experience",
      items: [
        { label: "The Hall", image: "/images/photos/hall-front-view.webp" },
        { label: "Recliner Seating", image: "/images/photos/hall-seats-wide.jpg" },
        { label: "Silver Screen", image: "/images/photos/screen-wide.jpg" },
        { label: "The Lobby", image: "/images/photos/lobby-chandelier.webp" },
        { label: "Concessions", image: "/images/photos/lobby-benches.webp" },
        { label: "Popcorn & 3D", image: "/images/photos/popcorn-3dglasses.jpg" },
        { label: "Snack Bar", image: "/images/photos/fanta-popcorn-slushie.webp" },
        { label: "Ice Cream", image: "/images/photos/icecream-promo.jpg" },
      ],
    },
    cta: {
      title: "Your Seat Is Waiting",
      sub: "New movies every week — check this week's schedule and book your seat before it fills up.",
      call: `Call ${business.phone}`,
      book: "Book on Telegram",
    },
    visit: {
      eyebrow: "Visit Us",
      title: "Find Us in Piassa",
      addressLabel: "Address",
      phoneLabel: "Phone",
      hoursLabel: "Showtimes",
      hoursValue: "New movies weekly — check Telegram for this week's schedule",
      book: "Book Tickets",
    },
    footer: {
      thanks: "See you at the movies",
      navigate: "Navigate",
      contact: "Contact",
      social: "Follow Along",
      rights: "All rights reserved.",
    },
    langToggle: "አማርኛ",
  },
  am: {
    nav: { about: "ስለ እኛ", experience: "ተሞክሮው", tickets: "ትኬቶች", snacks: "የመክሰስ ባር", reviews: "አስተያየቶች", gallery: "ፎቶዎች", visit: "ይጎብኙን", book: "ትኬት ይያዙ" },
    hero: {
      eyebrow: "የፒያሳ አካባቢ የትልቁ ስክሪን መገኛ",
      headline: "ፍጹም የሲኒማ ቅጽበትን ይለማመዱ",
      sub: "ዶልቢ አትሞስ ድምጽ እና ምቹ  ወንበሮች — የአዲስ አበባ ክላሲክ የፊልም ምሽት፣ በትክክለኛው መንገድ።",
      cta1: "ትኬት ይያዙ",
      cta2: "የዕለቱን መርሃ ግብር በቴሌግራም ይመልከቱ",
      tagline: "ምቹ ወንበሮች · ትልቅ ስክሪን · ግሩም ፊልሞች",
    },
    about: {
      eyebrow: "የእኛ ታሪክ",
      title: "ክላሲክ የፊልም ምሽት፣ በፒያሳ ልብ ውስጥ",
      p1: "ኤሊያና ሲኒማ በቸርችል አቬኑ በሚገኘው ኤሊያና ሆቴል 2ኛ ፎቅ ላይ ትገኛለች — በፒያሳ ልብ ውስጥ ያለች፣ ነዋሪዎች ከአካባቢ ፕሮዳክሽኖች እስከ ዓለም አቀፍ ፊልሞች ድረስ ለማየት የሚመርጡት ቀላል የሚደረስበት ቦታ።",
      p2: "ዶልቢ አትሞስ ሰራውንድ ድምጽ እና ግልጽ ምስል ያለው የብር ስክሪን — ምስሉና ድምጹ ከከተማው ዘመናዊ ሲኒማዎች ጋር እኩል ደረጃ ላይ ናቸው፣ ሁሉም ሰው ከሚያውቀው አካባቢ ሳይወጡ።",
      stat1Value: "ዶልቢ አትሞስ",
      stat1Label: "ሰራውንድ ድምጽ",
      stat2Value: "2ኛ ፎቅ",
      stat2Label: "ኤሊያና ሆቴል፣ ፒያሳ",
    },
    insider: {
      items: [
        "መደበኛ ትኬት 300 ብር · ቪአይፒ  500 ብር",
        "በየሳምንቱ አዲስ ፊልሞች — የዚህን ሳምንት መርሃ ግብር በቴሌግራም ይመልከቱ",
        "ተወዳጅ አዳዲስ ፊልሞች ከማለቃቸው በፊት በመስመር ላይ ወይም በስልክ ይያዙ",
        "የመክሰስ ባር፦ ፖፕኮርን፣ ችብስ፣ ትኩስ ጭማቂ፣ አይስ ክሬም እና ሌሎችም",
      ],
    },
    experience: {
      eyebrow: "ተሞክሮው",
      title: "ለትልቅ ስክሪን የተሰራ",
      items: [
        { title: "ዶልቢ አትሞስ ድምጽ", description: "ክፍሉን የሚሞላ ሰራውንድ ድምጽ — እያንዳንዱ ትዕይንት እንደታሰበው ይደርሳል።" },
        { title: "የብር ስክሪን", description: "ግልጽ ምስል ከትክክለኛ ጥቁርነት እና ደማቅ ቀለም ጋር።" },
        { title: "ምቹ ሪክላይነሮች", description: "ለሚገባቸው ትዕይንቶች ቪአይፒ  መቀመጫዎች።" },
        { title: "የመክሰስ ባር", description: "ፖፕኮርን፣ ችብስ፣ ትኩስ ጭማቂ እና አይስ ክሬም — ሁሉም በቦታው ላይ የሚዘጋጅ።" },
        { title: "በየሳምንቱ አዳዲስ ፊልሞች", description: "የአካባቢ ፕሮዳክሽኖች እና ዓለም አቀፍ ፊልሞች፣ በየሳምንቱ የሚቀያየሩ።" },
        { title: "ቀላል መዳረሻ", description: "በፒያሳ በቸርችል ጎዳና ላይ በቀጥታ — ጥሩ ስክሪን ለማግኘት ከተማውን መሻገር አያስፈልግም።" },
      ],
    },
    tickets: {
      eyebrow: "ትኬቶች",
      title: "ቀላል፣ ግልጽ ዋጋ",
      note: "ዋጋዎቹ በዚህ ዝርዝር መሰረት የተረጋገጡ ናቸው — ከመሄድዎ በፊት ማረጋገጥ ይመከራል፣ ምክንያቱም መርሃ ግብር እና ዋጋ ከአዳዲስ ፊልሞች ጋር ሊቀያየር ይችላል።",
      standard: {
        name: "መደበኛ",
        price: business.ticketStandard,
        description: "ምቹ የሲኒማ መቀመጫ ከሙሉ ዶልቢ አትሞስ እና የብር ስክሪን ተሞክሮ ጋር።",
      },
      vip: {
        name: "ቪአይፒ",
        price: business.ticketVip,
        description: "በታም ምቹ ከሆኑ መቀመቻዎች እና ማይታመን ጥራት ጋር።",
      },
      cta: "በቴሌግራም ይያዙ",
    },
    snacks: {
      eyebrow: "የመክሰስ ባር",
      title: "የሚያስጎመዡ መክሰሶች",
      items: [
        { title: "ፖፕኮርን", description: "ትኩስ፣ ቅቤ ያለበት፣ ትሬይለሮቹ ከመጀመራቸው በፊት ተሞልቶ የሚቀርብ።" },
        { title: "ችብስ", description: "ወርቃማ እና ጥርት ያለ፣ ከካቻፕ ጋር የሚቀርብ።" },
        { title: "ትኩስ ጭማቂ", description: "በቀዝቃዛ የተጨመቀ እና ሙሉ ብርጭቆ የሚቀርብ — ለቀትር ፊልም ተስማሚ ጥምረት።" },
        { title: "አይስ ክሬም", description: "ሶስት ስኩፕ፣ ሶስት ጣዕም — ለማንኛውም ፊልም ማጠቃለያ ቀዝቃዛ ፍጻሜ።" },
        { title: "ለስላሳ መጠጦች", description: "ፋንታ እና ሌሎች ክላሲኮች፣ የበረዶ ቅዝቃዜ ያላቸው።" },
        { title: "ስሉሺዎች", description: "የፍራፍሬ ጣዕም ያለው እና የሚያድስ፣ በሎሚ ቁራጭ የተጠናቀቀ።" },
      ],
    },
    reviews: {
      eyebrow: "በእንግዶቻችን ቃል",
      title: "ፒያሳ ምን ትላለች",
      subtitle: "ትክክለኛ የእንግዶች አስተያየት ከህዝባዊ ግምገማዎች።",
      items: [
        { quote: "ለፊልም አፍቃሪዎች ግሩም ቦታ — ማራኪ አዳራሽ፣ ከፍተኛ ጥራት ያለው ስክሪን እና ድምጽ።", author: "የእንግዳ አስተያየት" },
        { quote: "ቲያትር ቤቱ በደንብ የተያዘ እና ማራኪ ይመስላል፣ የድምጽ ስርዓቱም ጥሩ ነው።", author: "የእንግዳ አስተያየት" },
        { quote: "ቪአይፒ ምቹ  መቀመጫዎች የተገጠመለት ነው።", author: "የእንግዳ አስተያየት" },
        { quote: "በጣም ደስ የሚል እና አስደሳች ነው — የመጀመሪያ ጊዜዬን በጣም ወደድኩት።", author: "የእንግዳ አስተያየት" },
      ],
    },
    gallery: {
      eyebrow: "ውስጡን ይመልከቱ",
      title: "ሙሉ የኤሊያና ተሞክሮ",
      items: [
        { label: "አዳራሹ", image: "/images/photos/hall-front-view.webp" },
        { label: " መቀመጫ", image: "/images/photos/hall-seats-wide.jpg" },
        { label: "የብር ስክሪን", image: "/images/photos/screen-wide.jpg" },
        { label: "አዳራሽ መግቢያ", image: "/images/photos/lobby-chandelier.webp" },
        { label: "የመክሰስ ቦታ", image: "/images/photos/lobby-benches.webp" },
        { label: "ፖፕኮርን እና 3ዲ", image: "/images/photos/popcorn-3dglasses.jpg" },
        { label: "የመክሰስ ባር", image: "/images/photos/fanta-popcorn-slushie.webp" },
        { label: "አይስ ክሬም", image: "/images/photos/icecream-promo.jpg" },
      ],
    },
    cta: {
      title: "መቀመጫዎ በመጠባበቅ ላይ ነው",
      sub: "በየሳምንቱ አዲስ ፊልሞች — የዚህን ሳምንት መርሃ ግብር ይመልከቱ እና ከመሙላቱ በፊት ቦታዎን ያስይዙ።",
      call: `ይደውሉ ${business.phone}`,
      book: "በቴሌግራም ይያዙ",
    },
    visit: {
      eyebrow: "ይጎብኙን",
      title: "በፒያሳ ያግኙን",
      addressLabel: "አድራሻ",
      phoneLabel: "ስልክ",
      hoursLabel: "የዕለቱ መርሃ ግብር",
      hoursValue: "በየሳምንቱ አዲስ ፊልሞች — የዚህን ሳምንት መርሃ ግብር በቴሌግራም ይመልከቱ",
      book: "ትኬት ይያዙ",
    },
    footer: {
      thanks: "በሲኒማ እንገናኝ",
      navigate: "ማውጫ",
      contact: "አድራሻ",
      social: "ይከተሉን",
      rights: "መብቱ በህግ የተጠበቀ ነው።",
    },
    langToggle: "English",
  },
} as const;

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
  t: (typeof content)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("am");
  const toggle = () => setLang((prev) => (prev === "en" ? "am" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
