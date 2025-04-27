import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

export const locales = ["en", "ru"]
export const defaultLocale = "en"

function getLocale(request: NextRequest) {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get the best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  // Try to get locale from cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    languages = [cookieLocale, ...languages]
  }

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  // If pathname doesn't have locale, redirect to the preferred locale
  if (!pathnameHasLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en/products or /ru/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`, request.url),
    )
  }

  return NextResponse.next()
}

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - public files (e.g. robots.txt)
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
