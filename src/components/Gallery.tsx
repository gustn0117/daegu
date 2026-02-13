"use client";

const galleryImages = [
  { label: "프라이빗 룸", color: "from-purple-600/40 to-purple-900/60", size: "col-span-1 row-span-1" },
  { label: "VIP 라운지", color: "from-primary/30 to-emerald-900/50", size: "col-span-1 row-span-2 sm:row-span-2" },
  { label: "노래방 룸", color: "from-blue-600/40 to-blue-900/60", size: "col-span-1 row-span-1" },
  { label: "파티 룸", color: "from-pink-600/40 to-pink-900/60", size: "col-span-1 row-span-1" },
  { label: "프리미엄 룸", color: "from-yellow-600/30 to-yellow-900/50", size: "col-span-1 row-span-2 sm:row-span-2" },
  { label: "스탠다드 룸", color: "from-cyan-600/40 to-cyan-900/60", size: "col-span-1 row-span-1" },
  { label: "대형 룸", color: "from-red-600/40 to-red-900/60", size: "col-span-1 row-span-1" },
  { label: "커플 룸", color: "from-indigo-600/40 to-indigo-900/60", size: "col-span-1 row-span-1" },
];

export default function Gallery() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-6 inline-flex">GALLERY</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            시설 <span className="gradient-text">갤러리</span>
          </h2>
          <p className="text-gray-400 text-lg">프리미엄 시설을 미리 확인해보세요</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] stagger-children">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.size}`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${img.color} transition-all duration-500 group-hover:scale-110`} />

              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 grid-pattern opacity-20" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-sm">{img.label}</p>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-white text-xs font-semibold tracking-wide">{img.label}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/20 group-hover:bg-primary/60 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
