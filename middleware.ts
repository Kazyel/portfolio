import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const locale = request.cookies.get("locale")?.value;

  if (!locale) {
    const acceptLang = request.headers.get("accept-language") || "";
    const detectedLocale = acceptLang.includes("pt") ? "pt-br" : "en-us";

    const response = NextResponse.next();
    response.cookies.set("locale", detectedLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  return NextResponse.next();
}
