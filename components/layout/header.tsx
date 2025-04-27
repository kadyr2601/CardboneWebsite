import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import type { Dictionary } from "@/lib/i18n/dictionaries"

interface HeaderProps {
  dictionary: Dictionary
  lang: string
}

export function Header({ dictionary, lang }: HeaderProps) {
  const { navigation, languageSwitcher } = dictionary
  const oppositeLanguage = lang === "en" ? "ru" : "en"
  const oppositeLanguageText = lang === "en" ? languageSwitcher.ru : languageSwitcher.en

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-carbon/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gold rounded-full"></div>
            <div className="absolute inset-[2px] bg-carbon rounded-full flex items-center justify-center">
              <span className="font-bold text-xl text-gold">C</span>
            </div>
          </div>
          <span className="font-bold text-xl text-white">CarbonX</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href={`/${lang}/products`} className="text-white hover:text-gold transition-colors">
            {navigation.products}
          </Link>
          <Link href={`/${lang}/process`} className="text-white hover:text-gold transition-colors">
            {navigation.process}
          </Link>
          <Link href={`/${lang}/faq`} className="text-white hover:text-gold transition-colors">
            {navigation.faq}
          </Link>
          <Link href={`/${lang}/contact`} className="text-white hover:text-gold transition-colors">
            {navigation.contact}
          </Link>
          <Link
            href={`/${oppositeLanguage}`}
            className="group relative overflow-hidden rounded-full border border-gold/30 bg-carbon px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-gold hover:bg-black hover:text-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            <span className="relative z-10 flex items-center">
              <span className="mr-2 inline-block h-4 w-4 overflow-hidden rounded-full border border-white/20">
                {lang === "en" ? "🇷🇺" : "🇬🇧"}
              </span>
              <span className="tracking-wide">{oppositeLanguageText}</span>
              <span className="ml-1 text-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-t from-gold/10 to-transparent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </Link>
          <Button className="bg-gold hover:bg-gold/90 text-carbon border-none">{navigation.getQuote}</Button>
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          <Link
            href={`/${oppositeLanguage}`}
            className="group relative overflow-hidden rounded-full border border-gold/30 bg-carbon px-3 py-1 text-xs font-medium text-white transition-all duration-300 hover:border-gold hover:bg-black hover:text-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            <span className="relative z-10 flex items-center">
              <span className="mr-1 inline-block h-3 w-3 overflow-hidden rounded-full border border-white/20">
                {lang === "en" ? "🇷🇺" : "🇬🇧"}
              </span>
              <span className="tracking-wide">{oppositeLanguageText}</span>
            </span>
            <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-t from-gold/10 to-transparent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"></span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-carbon border-gray-800">
              <div className="flex flex-col space-y-6 mt-12">
                <Link
                  href={`/${lang}/products`}
                  className="text-xl font-medium text-white hover:text-gold transition-colors"
                >
                  {navigation.products}
                </Link>
                <Link
                  href={`/${lang}/process`}
                  className="text-xl font-medium text-white hover:text-gold transition-colors"
                >
                  {navigation.process}
                </Link>
                <Link
                  href={`/${lang}/faq`}
                  className="text-xl font-medium text-white hover:text-gold transition-colors"
                >
                  {navigation.faq}
                </Link>
                <Link
                  href={`/${lang}/contact`}
                  className="text-xl font-medium text-white hover:text-gold transition-colors"
                >
                  {navigation.contact}
                </Link>
                <Button className="bg-gold hover:bg-gold/90 text-carbon border-none w-full">
                  {navigation.getQuote}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
