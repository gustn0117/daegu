"use client";

const quickNavItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "할인 & 이벤트",
    desc: "대구 주점의 다양한 할인, 이벤트 정보를 확인해보세요! 예약을 통해 더욱 알찬 혜택을 누리실 수 있습니다.",
    href: "#pricing",
    accent: "from-primary to-emerald-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "영업 시간",
    desc: "대구 주점의 영업 시간 정보를 확인해보세요! 편리한 시간에 방문하실 수 있도록 안내해드려요.",
    href: "#hours",
    accent: "from-accent to-cyan-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "인원수별 가격",
    desc: "대구 주점의 인원수별 가격 정보를 확인 하신 후 합리적인 정찰제 가격으로 최고의 서비스를 이용하세요.",
    href: "#pricing",
    accent: "from-neon-purple to-violet-400",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "오시는 길",
    desc: "대구 주점의 위치와 주소를 확인 할 수 있어요. 편리한 교통편 안내로 쉽게 찾아오실 수 있어요.",
    href: "#venues",
    accent: "from-neon-pink to-rose-400",
  },
];

export default function QuickNav() {
  return (
    <section id="guide" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <span className="section-badge mb-6 inline-flex">대구 주점 정보</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
            대구 주점.{" "}
            <span className="gradient-text">직관적으로 빠르게</span> 탐색
          </h2>
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            대구 주점의 궁금한 정보를 빠르게 탐색 할 수 있어요.
            <br />
            아래 섹션에서 화살표를 클릭하여{" "}
            <span className="text-primary font-medium">원하는 정보로 이동</span>{" "}
            해보세요.
          </p>
        </div>

        {/* Quick nav cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
          {quickNavItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
            >
              {/* Card number */}
              <div className="flex items-start justify-between mb-5">
                <div className={`p-3.5 rounded-xl bg-gradient-to-br ${item.accent} bg-opacity-10 text-white group-hover:scale-110 transition-transform duration-300`}
                  style={{ background: `linear-gradient(135deg, rgba(0,230,118,0.1), rgba(0,188,212,0.1))` }}
                >
                  <div className="text-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </div>
                <span className="text-4xl font-black text-white/[0.04] font-display group-hover:text-primary/10 transition-colors">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>

              {/* Arrow link */}
              <div className="flex items-center gap-2 text-gray-600 group-hover:text-primary transition-all">
                <span className="text-xs font-medium">자세히 보기</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
