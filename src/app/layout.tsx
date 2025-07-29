import "./globals.css";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import type { Metadata } from "next";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Neobrutal UI Library",
  description: "A reusable UI library with a neobrutalist aesthetic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${plexMono.variable}`}>
      <body className="bg-neutral-light text-black font-sans min-h-screen p-8 border-4 border-black">
        <main className="max-w-4xl mx-auto bg-white rounded-lg border-2 border-black shadow-[8px_8px_0px_black] p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
