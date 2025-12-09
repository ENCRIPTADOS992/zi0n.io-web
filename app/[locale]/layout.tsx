import type React from "react"
import type { Metadata, Viewport } from "next"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { Analytics } from "@vercel/analytics/next"
import { locales } from '@/i18n/config'
import "../globals.css"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: "Zi0n - Advanced Mobile Security",
  description:
    "Transform your Android into an encrypted, secure, controlled and protected device with Zi0n.",
  generator: "v0.app",
  keywords: ["mobile security", "encryption", "Android", "MDM", "privacy", "Zi0n"],
  authors: [{ name: "Zi0n" }],
  openGraph: {
    title: "Zi0n - Advanced Mobile Security",
    description: "Transform your Android into an encrypted, secure, controlled and protected device.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#071C59",
  width: "device-width",
  initialScale: 1,
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params }: Props) {
  // Next.js 14+ puede pasar params como Promise
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
