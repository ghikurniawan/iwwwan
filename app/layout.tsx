import "@/styles/globals.css";
import "@/styles/prosemirror.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import MainNavbar from "@/components/layout/MainNavbar";
import MainFooter from "@/components/layout/MainFooter";
import Providers from "./providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "Iwwwan",
    template: "%s | Iwwwan",
  },
  description: "Iwwwan site",
  openGraph: {
    title: "Iwwwan",
    description: "Developer, Graphic Designer, writer, and creator.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Iwwwan",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Iwwwan",
    card: "summary_large_image",
  },
  // verification: {
  //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  //   yandex: "14d2e73487fa6c71",
  // },
};

export default async function RootLayout({
  children,
  sheet,
}: {
  children: React.ReactNode;
  sheet: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("antialiased", inter.className)}
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased min-h-screen`}>
        <NextTopLoader color="#ff0080" showSpinner={false} />
        <Providers>
          {sheet}
          <MainNavbar />
          <main className="min-h-[80vh] flex flex-col justify-center items-center">
            {children}
          </main>
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}
