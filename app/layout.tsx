import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Maison de la Masse — Dubai's Largest Private Gym",
  description:
    "Dubai's premier private gym. Where elite training meets absolute luxury. State-of-the-art equipment, total discretion, and an unparalleled training experience on ABA Avenue, Dubai.",
  keywords:
    "private gym Dubai, luxury gym Dubai, personal training Dubai, La Maison de la Masse, elite fitness Dubai, ABA Avenue gym",
  openGraph: {
    title: "La Maison de la Masse — Dubai's Largest Private Gym",
    description: "Where Elite Training Meets Absolute Luxury. ABA Avenue, Dubai.",
    siteName: "La Maison de la Masse",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
