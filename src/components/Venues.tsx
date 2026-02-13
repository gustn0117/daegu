"use client";

const venueGroups = [
  {
    district: "수성구",
    gradient: "from-primary to-emerald-400",
    icon: "from-primary/20 to-emerald-500/20",
    locations: [
      { name: "황금동", desc: "수성구 대표 주점 밀집 지역" },
      { name: "중동", desc: "다양한 유흥업소 밀집" },
    ],
  },
  {
    district: "달서구",
    gradient: "from-accent to-cyan-400",
    icon: "from-accent/20 to-cyan-500/20",
    locations: [
      { name: "상인동", desc: "달서구 핵심 유흥 상권" },
      { name: "성당동", desc: "다양한 업종의 주점 운영" },
      { name: "감삼동", desc: "접근성 좋은 유흥 지역" },
    ],
  },
  {
    district: "서구",
    gradient: "from-neon-purple to-violet-400",
    icon: "from-purple-500/20 to-violet-500/20",
    locations: [
      { name: "내당동", desc: "서구 대표 유흥 지역" },
    ],
  },
  {
    district: "동구",
    gradient: "from-yellow-400 to-orange-400",
    icon: "from-yellow-500/20 to-orange-500/20",
    locations: [
      { name: "동대구역", desc: "출장객 밀집, 다국적 주점 활성화" },
      { name: "신천동", desc: "다양한 코스의 주점 운영" },
    ],
  },
  {
    district: "중구",
    gradient: "from-neon-pink to-rose-400",
    icon: "from-red-500/20 to-rose-500/20",
    locations: [
      { name: "동성로", desc: "대구 최대 번화가 유흥 상권" },
    ],
  },
  {
    district: "북구 / 칠곡",
    gradient: "from-neon-blue to-indigo-400",
    icon: "from-blue-500/20 to-indigo-500/20",
    locations: [
      { name: "복현동", desc: "경북대 인근 유흥 상권" },
      { name: "칠곡 일대", desc: "북구 지역 주점 밀집" },
    ],
  },
];

export default function Venues() {
  return (
    <section id="venues" className="py-24 px-4 relative overflow-hidden">
      {/* Bg decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/[0.015] rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-6 inline-flex">AVAILABLE VENUES</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            이용 가능 <span className="gradient-text">업소</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            구별 이용 가능한 업소 지역을 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {venueGroups.map((group) => (
            <div key={group.district} className="glass-card rounded-2xl overflow-hidden group">
              {/* Header with gradient */}
              <div className={`relative bg-gradient-to-r ${group.gradient} p-5 overflow-hidden`}>
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <h3 className="text-black font-bold text-lg">{group.district}</h3>
                  <span className="text-black/40 text-xs font-bold">
                    {group.locations.length}개 지역
                  </span>
                </div>
              </div>

              {/* Locations */}
              <div className="p-5">
                <div className="space-y-2">
                  {group.locations.map((loc) => (
                    <div
                      key={loc.name}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/[0.05] transition-all duration-300"
                    >
                      <div className={`mt-0.5 p-1.5 rounded-lg bg-gradient-to-br ${group.icon}`}>
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{loc.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{loc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
