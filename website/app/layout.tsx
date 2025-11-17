import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---- METADATA ----
export const metadata: Metadata = {
  title: "Icarus DEX - Trade Fearlessly",
  description:
    "A next-generation perpetual DEX built for speed, transparency, and unstoppable execution.",
  keywords: [
    "DEX",
    "perpetual exchange",
    "crypto trading",
    "DeFi",
    "AMM",
    "Icarus",
    "blockchain",
    "leverage trading",
  ],
  openGraph: {
    title: "Icarus DEX",
    description:
      "Lightning-fast perpetual trading. Zero trust. Full transparency.",
    siteName: "Icarus DEX",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Icarus DEX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Icarus DEX",
    description: "Trade fearlessly with on-chain transparency.",
    images: ["/og.png"],
  },
};

// ---- ROOT LAYOUT ----
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-white`}
      >
        {/* Background Layer */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,60,255,0.25),transparent_70%)]" />

        {/* Subtle Grid Overlay */}
        <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Page Content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
