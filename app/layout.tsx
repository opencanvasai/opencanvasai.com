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
  title: "OpenCanvas AI — The Visual AI Workflow Builder for Creators",
  description:
    "Open-source node-based AI editor. Bring your own API keys. No subscriptions. No markups. Just pure creativity. Build AI workflows visually with drag-and-drop nodes.",
  keywords: [
    "AI workflow",
    "visual editor",
    "open source",
    "node editor",
    "image generation",
    "video generation",
    "fal.ai",
    "Replicate",
  ],
  openGraph: {
    title: "OpenCanvas AI — The Visual AI Workflow Builder for Creators",
    description:
      "Open-source node-based AI editor. Bring your own API keys. No subscriptions. Just pure creativity.",
    url: "https://opencanvasai.com",
    siteName: "OpenCanvas AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCanvas AI — The Visual AI Workflow Builder",
    description:
      "Open-source node-based AI editor. Bring your own API keys. No subscriptions.",
    creator: "@opencanvasai",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
