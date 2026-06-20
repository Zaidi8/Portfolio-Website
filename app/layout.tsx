import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/index.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://zaid-zaheer.vercel.app";
const DESCRIPTION =
  "Frontend-focused Software Engineer building real-time, AI-powered web apps with React, Next.js, and TypeScript. Lead SE at BlueSoft. Open to remote.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zaid Zaheer — Lead Software Engineer (Frontend)",
    template: "%s · Zaid Zaheer",
  },
  description: DESCRIPTION,
  keywords: [
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "TypeScript",
    "Software Engineer",
    "Lahore",
    "Pakistan",
    "remote",
  ],
  authors: [{ name: "Zaid Zaheer", url: SITE_URL }],
  creator: "Zaid Zaheer",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zaid Zaheer — Lead Software Engineer (Frontend)",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Zaid Zaheer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaid Zaheer — Lead Software Engineer (Frontend)",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zaid Zaheer",
  jobTitle: "Lead Software Engineer",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/zaidzaheer",
    "https://github.com/Zaidi8",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Engineering",
    "Go",
    "AI Integration",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zaid Zaheer",
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
