import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "daeguroom.kr";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // daegu.hsweb.pics 또는 www 등 canonical이 아닌 도메인 접근 시 301 리다이렉트
  if (host !== CANONICAL_HOST) {
    const url = new URL(request.url);
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 정적 파일과 내부 경로 제외
    "/((?!_next/static|_next/image|favicon.ico|icon|images|robots.txt|sitemap.xml).*)",
  ],
};
