import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { LEGACY_REDIRECTS } from "@/config/routes";

/**
 * 기존 단축 URL(/비용, /faq 등) → 새 한글 URL 308 permanent redirect.
 */
export function proxy(request: NextRequest) {
  let pathname = request.nextUrl.pathname;

  try {
    pathname = decodeURIComponent(pathname).normalize("NFC");
  } catch {
    pathname = pathname.normalize("NFC");
  }

  const target = LEGACY_REDIRECTS[pathname];
  if (target) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
