import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAEGU ROOM - 대구 다국적 주점 | 룸싸롱 | 외국인클럽 | 노래방",
  description:
    "대구 다국적의 모든것 - 다국적주점, 다국적클럽, 러시아주점, 룸싸롱, 외국인클럽, 태국노래방, 베트남노래방, 필리핀노래방. 수성구·달서구·서구·중구·북구 지역별 가격, 위치, 영업시간 안내. 회식, 모임 장소 추천.",
  keywords:
    "다국적, 다국적주점, 다국적클럽, 다국적노래방, 외국인클럽, 외국인노래방, 러시아주점, 러시아노래방, 룸싸롱, 외국주점, 태국노래방, 베트남노래방, 필리핀노래방, 회식, 모임, 대밤, 오밤, 오광, 카리브, 이화, 수성구다국적, 달서구다국적, 서구다국적, 중구다국적, 북구다국적, 대구 주점, 대구 룸, 대구 유흥, 동대구역 주점, 수성구 주점",
  openGraph: {
    title: "DAEGU ROOM - 대구 다국적 주점 | 룸싸롱 | 외국인클럽",
    description:
      "대구 다국적의 모든것 - 다국적주점, 러시아주점, 룸싸롱, 외국인클럽, 노래방. 지역별 가격·위치·영업시간 안내.",
    url: "https://daegu-ivory.vercel.app",
    siteName: "DAEGU ROOM",
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://daegu-ivory.vercel.app",
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
      <body className="antialiased bg-dark-900 text-white noise-overlay">
        {children}
      </body>
    </html>
  );
}
