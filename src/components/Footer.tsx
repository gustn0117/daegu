"use client";

const districtLinks = [
  "대구 중구",
  "대구 달서구",
  "대구 수성구",
  "대구 남구",
  "대구 동구",
  "대구 서구",
  "대구 북구 / 칠곡",
  "경산",
];

const tags = [
  "대구 주점",
  "대구 레깅스룸",
  "대구 셔츠룸",
  "수성구 주점",
  "동대구역 주점",
  "대구 다국적 주점",
  "대구 외국인 주점",
  "대구 가라오케",
  "대구 주점 가격",
  "대구 주점 추천",
  "대구 유흥주점",
  "대구 노래방",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-dark-950">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-lg rounded-full" />
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 relative z-10">
                  <path d="M20 2L8 14L20 26L32 14L20 2Z" fill="#00e676" />
                  <path d="M20 14L8 26L20 38L32 26L20 14Z" fill="#00e676" opacity="0.5" />
                </svg>
              </div>
              <span className="text-lg font-bold font-display">
                <span className="text-primary">DAEGU</span>{" "}
                <span className="text-white/80">ROOM</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              대구 주점, 대구 바의 모든 것
              <br />
              가격, 위치, 영업시간 안내
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-xs">
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span>전화/문자 : 010-9680-2579 김실장</span>
            </div>
          </div>

          {/* District Links */}
          <div>
            <h4 className="text-white font-bold mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-primary" />
              지역별 안내
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {districtLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-500 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-white font-bold mb-5 flex items-center gap-2">
              <div className="w-4 h-px bg-primary" />
              태그
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-[11px] bg-white/[0.03] text-gray-500 rounded-full border border-white/[0.04] hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; 2025 DAEGU ROOM. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-xs">
              이용약관
            </a>
            <div className="w-1 h-1 rounded-full bg-gray-800" />
            <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300 text-xs">
              개인정보처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
