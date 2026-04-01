import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { Navbar } from "@/components/layout/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baitussalam.com.pk"),
  title: {
    default: "Bait Us Salam Pvt Ltd | Premium Hajj & Umrah Journeys from Karachi",
    template: "%s | Bait Us Salam Pvt Ltd",
  },
  description:
    "Bait Us Salam Pvt Ltd offers premium Hajj and Umrah packages from Karachi with structured guidance, curated hotel tiers, and trusted support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(201,162,39,0.12),transparent_22%),linear-gradient(180deg,#07111f_0%,#081423_44%,#091522_100%)]" />
          <Navbar />
          <main className="relative z-10 flex-1 pb-28 md:pb-0">{children}</main>
          <Footer />
          <MobileStickyBar />
        </div>
      </body>
    </html>
  );
}
