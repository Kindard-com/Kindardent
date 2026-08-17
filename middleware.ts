import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

function negotiateLocale(request: NextRequest): string {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && isLocale(cookie)) return cookie;

  const acceptLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptLanguage ?? "en" };
  const languages = new Negotiator({ headers }).languages();

  try {
    return match(languages, [...locales], defaultLocale);
  } catch {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/docs") ||
    pathname.match(/\.[a-zA-Z0-9]+$/)
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const segment = pathname.split("/")[1];
    if (segment && isLocale(segment)) {
      const response = NextResponse.next();
      response.cookies.set("NEXT_LOCALE", segment, { path: "/", maxAge: 60 * 60 * 24 * 365 });
      return response;
    }
    return NextResponse.next();
  }

  const locale = negotiateLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
