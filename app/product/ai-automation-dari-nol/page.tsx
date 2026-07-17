import type { Metadata } from "next";
import LandingClient from "./landing-client";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://tangguhriyadi.com";

const TITLE = "AI Automation Dari Nol | Tangguh Riyadi";
const DESCRIPTION =
  "AI Automation Dari Nol (Level Basic). Playbook 67 halaman yang nuntun kamu dari nol banget sampe bikin AI automation beneran. Tanpa gelar IT, tanpa bootcamp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/product/ai-automation-dari-nol`,
    siteName: "Tangguh Riyadi",
    images: [
      {
        url: `${BASE_URL}/ebook-cover-idn.png`,
        width: 1024,
        height: 1024,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${BASE_URL}/ebook-cover-idn.png`],
  },
};

export default function Page() {
  return <LandingClient />;
}
