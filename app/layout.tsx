import type { Metadata } from "next";
import { Roboto_Condensed, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/MenuBar";
import GlobalAurora from "@/components/GlobalAurora";

const robotoCondensed = Roboto_Condensed({ variable: "--font-roboto-condensed", subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADELOS Corp. | Engineering solutions that solve tomorrow.",
  description: "ADELOS Corp. builds advanced systems, research architectures, and engineering solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${robotoCondensed.variable} ${geistMono.variable}`}>
      <body>
        <GlobalAurora />
        <MenuBar />
        {children}
      </body>
    </html>
  );
}
