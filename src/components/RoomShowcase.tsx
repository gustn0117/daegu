"use client";

/* ====================================================
 * [룸 이미지 수정 방법]
 * /public/images/ 폴더의 이미지를 교체하세요
 * 이미지 추가/삭제: roomImages 배열을 수정하세요
 * ==================================================== */

const roomImages = [
  "/images/3.png",
  "/images/5.png",
  "/images/4.png",
  "/images/1.png",
  "/images/2.png",
  "/images/image.png",
];

export default function RoomShowcase() {
  // 무한 슬라이드를 위해 이미지를 2번 반복
  const slides = [...roomImages, ...roomImages];

  return (
    <section className="pt-16 pb-12 overflow-hidden relative">
      {/* 무한 슬라이드 */}
      <div className="marquee-track flex gap-3">
        {slides.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-36 sm:w-44 aspect-[3/4] rounded-xl overflow-hidden relative"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent" />
            <div className="absolute inset-0 rounded-xl border border-white/[0.06]" />
          </div>
        ))}
      </div>
    </section>
  );
}
