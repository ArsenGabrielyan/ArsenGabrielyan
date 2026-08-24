import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { absoluteURL, createMetaAlternates } from "@/lib/utils";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

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

export interface RootLayoutProps{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}

// Todo: Add OpenGraph, and Twitter
export async function generateMetadata({params}: RootLayoutProps): Promise<Metadata> {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) return notFound();
  const t = await getTranslations("index")
  return {
    metadataBase: new URL(absoluteURL()),
    title: {
      template: `%s | ${t("title")}`,
      "absolute": t("title")
    },
    description: t("description"),
    authors: {
      name: t("title"),
      url: "https://github.com/ArsenGabrielyan"
    },
    alternates: createMetaAlternates(locale),
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
        <NextIntlClientProvider>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
