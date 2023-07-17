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
  title: {
    default: "Iwwwan",
    template: "%s | Iwwwan",
  },
  description: "Iwwwan site",
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
