import { Roboto, Roboto_Mono } from "next/font/google";
import { Tomorrow } from "next/font/google";
import { FrameInit } from "@/components/FrameInit";
import Navigation from "@/components/Navigation";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["500"], // 500 is Medium/Semi Bold in Roboto
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tomorrow",
});

export const metadata = {
  title: "Mint Frame",
  description: "Frame-enabled NFT minting experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} ${tomorrow.variable}`}>
        <div>
          {children}
          <FrameInit />
        </div>
      </body>
    </html>
  );
}