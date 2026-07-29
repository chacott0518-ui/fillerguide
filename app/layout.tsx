import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileContactBar } from "@/components/layout/MobilePhoneBar";
import { ScrollToTopOnNavigate } from "@/components/layout/ScrollToTopOnNavigate";
import { HOME_SEO } from "@/content/pages/home";
import { SITE } from "@/config/site";
import {
  buildPageMetadata,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_WIDTH,
} from "@/lib/metadata";

import "./globals.css";
import "@/styles/header.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-ko",
});

const baseMetadata = buildPageMetadata({
  seo: HOME_SEO,
  path: "/",
  type: "website",
});

export const metadata: Metadata = {
  ...baseMetadata,

  metadataBase: new URL("https://fillerguide.co.kr"),

  applicationName: SITE.shortName,

  title: {
    absolute: HOME_SEO.title,
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      ...(process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION
        ? {
            "naver-site-verification":
              process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION,
          }
        : {}),
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : {}),
    },
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://fillerguide.co.kr",
    siteName: "필러가이드",
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: DEFAULT_OG_IMAGE_WIDTH,
        height: DEFAULT_OG_IMAGE_HEIGHT,
        alt: DEFAULT_OG_IMAGE_ALT,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          본문 바로가기
        </a>

        <ScrollToTopOnNavigate />
        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
