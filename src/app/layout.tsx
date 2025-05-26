"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatePresence mode="wait">
          {children}
          </AnimatePresence>
      </body>
    </html>
  );
}
