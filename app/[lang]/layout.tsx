import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { locales } from "@/middleware"
import "../globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const {lang} = await params

  const dictionary = await getDictionary(lang)

  return {
    title: "CarbonX - Premium Carbon Fiber Elements for Automotive and Home",
    description:
      "Discover our range of high-performance carbon fiber elements designed for automotive and home applications. Lightweight, durable, and aesthetically stunning carbon fiber solutions.",
    keywords:
      "carbon fiber, automotive carbon, home carbon elements, lightweight materials, premium carbon, carbon manufacturing",
    openGraph: {
      title: "CarbonX - Premium Carbon Fiber Elements",
      description: "High-performance carbon fiber elements for automotive and home applications",
      url: "https://carbonx.com",
      siteName: "CarbonX",
      images: [
        {
          url: "https://carbonx.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "CarbonX Carbon Fiber Elements",
        },
      ],
      locale: lang === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "CarbonX - Premium Carbon Fiber Elements",
      description: "High-performance carbon fiber elements for automotive and home applications",
      images: ["https://carbonx.com/twitter-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  const {lang} = await params

  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header dictionary={dictionary} lang={lang} />
        <main className="pt-16">{children}</main>
        <Footer dictionary={dictionary} lang={lang} />
      </body>
    </html>
  )
}
