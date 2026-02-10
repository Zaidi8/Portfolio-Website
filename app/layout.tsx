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

export const metadata: Metadata = {
  title: "Zaid Zaheer — Frontend Engineer",
  description:
    "Portfolio of Zaid Zaheer — Frontend Engineer specializing in React, Next.js, TypeScript, and AI integrations.",
  openGraph: {
    title: "Zaid Zaheer — Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, TypeScript, and AI integrations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaid Zaheer — Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, TypeScript, and AI integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        {children}
      </body>
    </html>
  );
}
