"use client";

/* ====================================================
 * [룸 이미지 수정 방법]
 * /public/images/ 폴더의 이미지를 교체하세요
 * theme: "light" = 흰색 오버레이 / "dark" = 검은색 오버레이
 * 이미지 추가/삭제: roomImages 배열을 수정하세요
 * ==================================================== */

const roomImages = [
  { src: "/images/3.png", theme: "dark" as const },
  { src: "/images/5.png", theme: "light" as const },
  { src: "/images/4.png", theme: "dark" as const },
  { src: "/images/1.png", theme: "light" as const },
];

export default function RoomShowcase() {
  return (
    <section className="py-16 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <span className="section-badge mb-4 inline-flex">ROOM INTERIOR</span>
          <p className="text-gray-500 text-sm">프리미엄 룸 내부 모습</p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {roomImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group room-image-card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* 이미지 */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 animate-ken-burns"
                style={{
                  backgroundImage: `url(${img.src})`,
                  animationDelay: `${i * 2}s`,
                }}
              />

              {/* Theme overlay - 흰색/검은색 */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  img.theme === "light"
                    ? "bg-gradient-to-b from-white/15 via-transparent to-white/20 group-hover:opacity-0"
                    : "bg-gradient-to-b from-black/30 via-transparent to-black/50 group-hover:opacity-60"
                }`}
              />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-primary/20 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-white/80 text-xs font-medium backdrop-blur-sm bg-black/30 rounded-lg px-3 py-1.5 inline-block">
                  Room {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
