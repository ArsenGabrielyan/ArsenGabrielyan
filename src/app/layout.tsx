import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { absoluteURL } from "@/lib/utils";

const Kamar = localFont({
  src: "../fonts/kamar.ttf",
  fallback: ["Noto Sans Armenian", "sans-serif"],
  display: "swap",
  preload: true,
  variable: "--font-kamar",
})

const Montserrat = localFont({
  src: "../fonts/montserrat.otf",
  fallback: ["BlinkMacSystemFont", 'Segoe UI', "Roboto", 'Helvetica Neue', "Arial", 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', "sans-serif"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
})

// Todo: Add Alternates (Languages), OpenGraph, and Twitter
export const metadata: Metadata = {
  metadataBase: new URL(absoluteURL()),
  title: {
    template: "%s | Արսեն Գ․",
    "absolute": "Արսեն Գ․"
  },
  description: "Արսեն Գ․-ի անձնական Վեբ Կայքը",
  authors: {
    name: "Արսեն Գ.",
    url: "https://github.com/ArsenGabrielyan"
  },
  alternates: {
    canonical: absoluteURL()
  },
  icons: {
    apple: "/app-icon.png",
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/app-icon.png", sizes: "192x192", type: "image/png"}
    ]
  },
  verification: {
    google: "bVrBx7_N7HVVVrC3gk9CwfbykFwxjjIUSM_Je6SEfkE"
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
    <html lang="hy" suppressHydrationWarning>
      <body
        className={`${Kamar.variable} ${Montserrat.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            richColors
            closeButton
            duration={2500}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
