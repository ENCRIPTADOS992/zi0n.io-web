import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Zi0n - Seguridad Móvil Avanzada",
  description:
    "Transforma tu Android en un dispositivo encriptado, seguro, controlado y protegido con Zi0n. Gestión de apps verificadas y seguridad avanzada.",
  generator: "v0.app",
  keywords: ["seguridad móvil", "encriptación", "Android", "MDM", "privacidad", "Zi0n"],
  authors: [{ name: "Zi0n" }],
  openGraph: {
    title: "Zi0n - Seguridad Móvil Avanzada",
    description: "Transforma tu Android en un dispositivo encriptado, seguro, controlado y protegido.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/mona-sans"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
