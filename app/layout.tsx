import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { Toaster } from "react-hot-toast";

import { ActiveSectionContextProvider } from "@/context/activeSectionContext";
import ThemeSwitch from "@/components/theme-switch";
import Footer from "@/components/footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sedy | Personal Portfolio",
  description:
    "Sedy is a full stack developer and web designer with nearly 2 years of experience in building responsive and user-friendly web applications using modern technologies like React, Node.js, Tailwind CSS, TypeScript, and JavaScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
