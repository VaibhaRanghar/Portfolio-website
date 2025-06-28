import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaibhav Ranghar - Full-Stack Developer",
  description:
    "Frontend-focused developer with exceptional debugging skills and a passion for crafting performant user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
