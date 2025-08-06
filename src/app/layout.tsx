import "./globals.css";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Navbar } from "@/ui/navbar/NavBar";
import { Sidebar } from "@/ui/sidebar/SideBar";

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
      <body className="bg-neutral-light text-black font-plex min-h-screen">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Flex container with Sidebar and Page */}
        <div className="flex pt-[56px]"> {/* 56px matches navbar height */}
          <Sidebar />
          <main className="ml-64 w-full p-8">
            <div className="bg-white rounded-lg border-2 border-black shadow-[8px_8px_0px_black] p-6 max-w-4xl">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

