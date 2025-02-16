import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Toaster from "@/components/toast";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE MOUTHPIECE TECHSPHERE ASSESSMENT",
  description: "TGet ready to be assessed and showcase your knowledge!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
