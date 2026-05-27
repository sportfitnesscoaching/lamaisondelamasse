import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Maison de la Masse — Coaching Musculation & Nutrition",
  description:
    "Coaching musculation et nutrition sur-mesure pour transformer votre corps. Programmes personnalisés, suivi hebdomadaire et accompagnement expert.",
  keywords: "musculation, coaching, nutrition, prise de masse, sport, fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
