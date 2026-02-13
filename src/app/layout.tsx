import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAEGU ROOM - 대구 룸",
  description: "대구 주점, 대구 바의 모든 것 - 가격, 위치, 영업시간 안내",
  keywords: "대구 주점, 대구 룸, 대구 유흥, 동대구역 주점, 수성구 주점",
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
