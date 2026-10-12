
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ReportsLayoutContent from "./components/ReportsLayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lewis TMS | Reports",
  description: "Explore transport operational statistics and trends",
};


export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Suspense fallback={<div>Loading Reports...</div>}>
          <ReportsLayoutContent>
            {children}
          </ReportsLayoutContent>
        </Suspense>
      </body>
    </html>
  );
}