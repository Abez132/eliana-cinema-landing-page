import type { Metadata } from "next";
import { Anton, Yellowtail, Poppins, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yellowtail",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500"],
  variable: "--font-noto-ethiopic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eliana Cinema | Churchill Avenue, Piassa, Addis Ababa",
  description:
    "Eliana Cinema in Piassa, Addis Ababa — Dolby Atmos sound, a silver screen, comfortable recliner seats, and a full snack bar. New movies every week.",
  keywords: [
    "Eliana Cinema",
    "cinema Addis Ababa",
    "movie theater Piassa",
    "Dolby Atmos cinema Ethiopia",
    "things to do Piassa",
  ],
  openGraph: {
    title: "Eliana Cinema",
    description: "Experience the perfect cinema moment in the heart of Piassa, Addis Ababa.",
    locale: "en_ET",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${yellowtail.variable} ${poppins.variable} ${notoEthiopic.variable} font-body`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
