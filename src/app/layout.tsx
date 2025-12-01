import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hosh Tunes",
  description: "Premium audio experiences curated for the modern listener.",
  icons: {
    icon: "/hosh-favicon.png",
    apple: "/hosh-favicon.png",
  },
  openGraph: {
    title: "Hosh Tunes",
    description: "Premium audio experiences curated for the modern listener.",
    images: ["/hosh-favicon.png"],
  },
  twitter: {
    card: "summary",
    title: "Hosh Tunes",
    description: "Premium audio experiences curated for the modern listener.",
    images: ["/hosh-favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
