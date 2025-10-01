import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "PayYoYo - AI-Powered Autonomous Payment Platform | Revolutionize Gift Card Payments",
  description: "Transform your payment experience with PayYoyo Wallet's AI-driven automation. GPS-triggered intelligence analyzes your gift cards and executes optimal payments automatically. Join the future of frictionless commerce.",
  keywords: "AI payment automation, autonomous payments, gift card optimization, GPS payment, fintech, payment automation",
  authors: [{ name: "PayYoyo Wallet Team" }],
  creator: "PayYoyo Wallet",
  publisher: "PayYoyo Wallet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PayYoYo - AI-Powered Autonomous Payment Platform",
    description: "Revolutionary AI-driven payment automation that eliminates payment friction forever. GPS-triggered intelligence optimizes gift card payments automatically.",
    url: "https://PayYoYo.com",
    siteName: "PayYoYo",
    images: [
      {
        url: "https://PayYoyo Wallet.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PayYoyo Wallet AI Payment Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayYoyo Wallet - AI-Powered Autonomous Payment Platform",
    description: "Revolutionary AI-driven payment automation that eliminates payment friction forever. GPS-triggered intelligence optimizes gift card payments automatically.",
    creator: "@PayYoyo Wallet",
    images: ["https://PayYoyo Wallet.com/images/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
