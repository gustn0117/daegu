import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대구다국적클럽 | 대구다국적룸 · 대구룸 - 다국적주점 가격 위치 안내",
  description:
    "대구다국적클럽 전문 안내 | 대구다국적룸, 대구룸, 다국적주점, 외국인클럽, 러시아주점, 베트남노래방, 필리핀노래방, 태국노래방 정보를 한눈에. 수성구·달서구·서구·중구·북구 지역별 가격, 위치, 영업시간, 시스템 안내. 대구 다국적클럽 김실장 010-9680-2579",
  keywords:
    "대구다국적클럽, 대구 다국적클럽, 대구다국적룸, 대구 다국적룸, 대구룸, 대구 룸, 다국적클럽, 다국적룸, 다국적주점, 대구 다국적주점, 외국인클럽, 대구 외국인클럽, 러시아주점, 대구 러시아주점, 다국적노래방, 외국인노래방, 태국노래방, 베트남노래방, 필리핀노래방, 룸싸롱, 대구 룸싸롱, 수성구 다국적클럽, 수성구 다국적룸, 달서구 다국적, 서구 다국적, 중구 다국적, 북구 다국적, 대구 주점, 대구 유흥, 동대구역 주점, 수성구 주점, daeguroom",
  openGraph: {
    title: "대구다국적클럽 | 대구다국적룸 · 대구룸 - 다국적주점 가격 위치 안내",
    description:
      "대구다국적클럽 전문 안내 | 대구다국적룸, 대구룸, 다국적주점, 외국인클럽 정보를 한눈에. 지역별 가격·위치·영업시간 안내. 김실장 010-9680-2579",
    url: "https://daeguroom.kr",
    siteName: "대구다국적클럽 - 대구룸",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "대구다국적클럽 | 대구다국적룸 · 대구룸",
    description:
      "대구다국적클럽 전문 안내 | 대구다국적룸, 대구룸, 다국적주점, 외국인클럽 가격·위치·영업시간 안내",
  },
  alternates: {
    canonical: "https://daeguroom.kr",
  },
  other: {
    "naver-site-verification": "",
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "대구다국적클럽 - 대구룸",
              alternateName: ["대구다국적룸", "대구룸", "대구 다국적클럽"],
              url: "https://daeguroom.kr",
              description:
                "대구다국적클럽 전문 안내. 대구다국적룸, 대구룸, 다국적주점, 외국인클럽, 러시아주점, 노래방 정보를 한눈에 확인하세요. 김실장 010-9680-2579",
              telephone: "010-9680-2579",
              areaServed: {
                "@type": "City",
                name: "대구",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "대구",
                addressRegion: "대구광역시",
                addressCountry: "KR",
              },
              sameAs: "https://daeguroom.kr",
            }),
          }}
        />
      </head>
      <body className="antialiased bg-dark-900 text-white noise-overlay">
        {children}
      </body>
    </html>
  );
}
