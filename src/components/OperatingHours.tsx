"use client";

const hoursData = [
  {
    district: "수성구",
    areas: "황금동 · 중동",
    open: "PM 8:00",
    close: "AM 5:00",
    highlight: true,
  },
  {
    district: "달서구",
    areas: "상인동 · 성당동 · 감삼동",
    open: "PM 9:00",
    close: "AM 4:00",
    highlight: false,
  },
  {
    district: "서구",
    areas: "내당동",
    open: "PM 9:00",
    close: "AM 4:00",
    highlight: false,
  },
  {
    district: "중구",
    areas: "동성로 일대",
    open: "PM 9:00",
    close: "AM 4:00",
    highlight: false,
  },
  {
    district: "동구",
    areas: "동대구역 · 신천동",
    open: "PM 9:00",
    close: "AM 4:00",
    highlight: false,
  },
  {
    district: "북구",
    areas: "칠곡 일대",
    open: "PM 9:00",
    close: "AM 4:00",
    highlight: false,
  },
];

export default function OperatingHours() {
  return (
    <section id="hours" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-6 inline-flex">OPERATING HOURS</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            동네별 <span className="gradient-text">영업시간</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            각 구별 주점 영업시간을 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {hoursData.map((item) => (
            <div
              key={item.district}
              className={`glass-card rounded-2xl p-6 ${
                item.highlight ? "neon-border" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.district}</h3>
                  <p className="text-gray-500 text-sm">{item.areas}</p>
                </div>
                {item.highlight && (
                  <span className="px-3 py-1.5 bg-primary/15 text-primary text-xs font-bold rounded-full border border-primary/20 neon-text">
                    인기
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-5" />

              {/* Times */}
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <p className="text-[10px] text-gray-600 mb-2 tracking-widest uppercase">Open</p>
                  <p className="text-primary font-bold text-xl font-display">{item.open}</p>
                </div>

                <div className="flex items-center gap-2 text-gray-700 px-4">
                  <div className="w-6 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  <div className="w-2 h-2 rounded-full border border-primary/30" />
                  <div className="w-6 h-px bg-gradient-to-l from-accent/30 to-transparent" />
                </div>

                <div className="text-center flex-1">
                  <p className="text-[10px] text-gray-600 mb-2 tracking-widest uppercase">Close</p>
                  <p className="text-accent font-bold text-xl font-display">{item.close}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
