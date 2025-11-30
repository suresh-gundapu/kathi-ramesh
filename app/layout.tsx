import type { Metadata } from "next";
import { Inter, Sree_Krushnadevaraya } from "next/font/google"; // ఫాంట్ ఇంపోర్ట్
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// శ్రీకృష్ణదేవరాయ ఫాంట్ లోడ్ చేస్తున్నాం
const skFont = Sree_Krushnadevaraya({ 
  weight: "400", 
  subsets: ["telugu"],
  variable: '--font-sk' // ఇది మనం CSS లో వాడుకోవడానికి
});

export const metadata: Metadata = {
  title: "Kathi Ramesh - Sarpanch Campaign",
  description: "Madannapet Village Sarpanch Candidate Campaign Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="te">
      {/* బాడీలో రెండు ఫాంట్లు కలుపుతున్నాం */}
      <body className={`${inter.className} ${skFont.variable}`}>{children}</body>
    </html>
  );
}