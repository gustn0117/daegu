import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대구룸 - 대구 다국적주점 · 룸싸롱 · 외국인클럽 · 노래방 추천",
  description:
    "대구룸 | 대구 다국적주점, 다국적클럽, 러시아주점, 룸싸롱, 외국인클럽, 태국노래방, 베트남노래방, 필리핀노래방 정보를 한눈에. 수성구·달서구·서구·중구·북구 지역별 가격, 위치, 영업시간 안내. 회식·모임 장소 추천.",
  keywords:
    "대구룸, 대구 룸, daeguroom, 다국적, 다국적주점, 다국적클럽, 다국적노래방, 외국인클럽, 외국인노래방, 러시아주점, 러시아노래방, 룸싸롱, 외국주점, 태국노래방, 베트남노래방, 필리핀노래방, 회식, 모임, 대밤, 오밤, 오광, 카리브, 이화, 수성구다국적, 달서구다국적, 서구다국적, 중구다국적, 북구다국적, 대구 주점, 대구 유흥, 동대구역 주점, 수성구 주점",
  openGraph: {
    title: "대구룸 - 대구 다국적주점 · 룸싸롱 · 외국인클럽 · 노래방 추천",
    description:
      "대구룸 | 대구 다국적주점, 러시아주점, 룸싸롱, 외국인클럽, 노래방 정보를 한눈에. 지역별 가격·위치·영업시간 안내.",
    url: "https://daeguroom.kr",
    siteName: "대구룸",
    locale: "ko_KR",
    type: "website",
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
              name: "대구룸",
              url: "https://daeguroom.kr",
              description:
                "대구 다국적주점, 룸싸롱, 외국인클럽, 노래방 정보를 한눈에 확인하세요.",
              areaServed: {
                "@type": "City",
                name: "대구",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "대구",
                addressCountry: "KR",
              },
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
