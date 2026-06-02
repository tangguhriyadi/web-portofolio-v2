import type { Metadata } from "next";
import { Montserrat, Inter, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://tangguhriyadi.com";

export const metadata: Metadata = {
  verification: {
    google: "D9O3zd2SaiXBnZqirPmd6baOLFf29HwTVjKKeRJuPmY",
  },
  title: "Tangguh Riyadi | AI Automation Engineer",
  description:
    "I help people learn AI automation, build real projects, and land remote jobs without an IT degree.",
  openGraph: {
    title: "Tangguh Riyadi | AI Automation Engineer",
    description:
      "I help people learn AI automation, build real projects, and land remote jobs without an IT degree.",
    url: BASE_URL,
    siteName: "Tangguh Riyadi",
    images: [
      {
        url: `${BASE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tangguh Riyadi | AI Automation Engineer",
    description:
      "I help people learn AI automation, build real projects, and land remote jobs without an IT degree.",
    images: [`${BASE_URL}/opengraph-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${geist.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
