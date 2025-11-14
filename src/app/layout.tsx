import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Kamar = localFont({
  src: "../fonts/kamar.ttf",
  display: "swap",
  preload: true,
  variable: "--font-kamar",
})

const Montserrat = localFont({
  src: "../fonts/montserrat.otf",
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
})

// Todo: Add MetadataBase, Alternates (Languages, Canonical), OpenGraph, and Twitter
export const metadata: Metadata = {
  title: {
    template: "%s | Արսեն Գ․",
    "absolute": "Արսեն Գ․"
  },
  description: "Արսեն Գ․-ի անձնական Վեբ Կայքը",
  authors: {
    name: "Արսեն Գ.",
    url: "https://github.com/ArsenGabrielyan"
  },
  icons: {
    apple: "/app-icon.png",
    icon: "/app-icon.png",
  }
}

export const viewport: Viewport = {
  themeColor: "#00aaff"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Kamar.variable} ${Montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
