import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dasiel - Fullstack Developer",
  description:
    "Desarrollador Fullstack especializado en crear aplicaciones web modernas y escalables. Experiencia en frontend y backend, desde la interfaz de usuario hasta las APIs y bases de datos.",
  keywords: [
    "fullstack developer",
    "desarrollador fullstack",
    "web development",
    "frontend development",
    "backend development",
    "react developer",
    "nextjs developer",
    "nodejs developer",
    "typescript",
    "javascript",
  ],
  authors: [{ name: "Dasiel" }],
  creator: "Dasiel",
  publisher: "Dasiel",
  generator: "Next.js",
  metadataBase: new URL("https://dasiel.dev"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dasiel.dev",
    title: "Dasiel - Fullstack Developer",
    description:
      "Desarrollador Fullstack especializado en crear aplicaciones web modernas y escalables. Experiencia en frontend y backend.",
    siteName: "Dasiel",
    images: [
      {
        url: "/images/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Dasiel - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dasiel - Fullstack Developer",
    description:
      "Desarrollador Fullstack especializado en crear aplicaciones web modernas y escalables.",
    creator: "@dasiel",
    images: ["/images/me.jpeg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
