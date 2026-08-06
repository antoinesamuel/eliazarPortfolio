import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const NohemiMedium = LocalFont({
  variable: "--font-nohemi-medium",
  src: "../public/Fonts/Nohemi/NohemiMedium.ttf",
});

const NohemiRegular = LocalFont({
  variable: "--font-nohemi-regular",
  src: "../public/Fonts/Nohemi/NohemiRegular.ttf",
});

export const metadata: Metadata = {
  title: "LAYEBE Eliazar",
  description:
    "LAYEBE Eliazar is a software engineer and web developer with a passion for creating innovative and user-friendly applications. With expertise in front-end and back-end development, Eliazar has a proven track record of delivering high-quality software solutions that meet the needs of clients and users alike.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${NohemiMedium.variable} ${NohemiRegular.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
