import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/components/layout/app-providers";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pass My GED — Free GED Study Resource",
  description:
    "Free GED study guides, practice quizzes, flashcards, and timed exams for all 4 GED subjects. No sign-up required.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Pass My GED — Free GED Study Resource",
    description:
      "Free GED study guides, practice quizzes, flashcards, and timed exams for all 4 GED subjects. No sign-up required.",
    url: "https://pass-my-ged.vercel.app/",
    siteName: "Pass My GED",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pass My GED",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description:
    "Free GED study guides, practice tests, flashcards, and timed exams for all 4 GED subjects.",
  url: "https://pass-my-ged.vercel.app/",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AppProviders>{children}</AppProviders>
      </body>
      <Analytics />
    </html>
  );
}
