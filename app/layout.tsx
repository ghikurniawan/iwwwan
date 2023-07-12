import "@/styles/globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import MainNavbar from "@/components/layout/MainNavbar";
import MainFooter from "@/components/layout/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Iwwwan",
    template: "%s | Iwwwan",
  },
  description: "Iwwwan site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#ff0080" showSpinner={false} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainNavbar />
          <main className="min-h-screen flex flex-col justify-center items-center">
            {children}
          </main>
          <MainFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
