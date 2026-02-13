"use client";

import { useState } from "react";

const tabs = [
  { id: "intro", label: "업소 소개", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: "system", label: "시스템", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
  { id: "hours", label: "영업시간", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: "location", label: "위치", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
  { id: "pricing", label: "코스 & 가격", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const systemTypes = [
  {
    title: "한국식 주점",
    icon: "K",
    gradient: "from-primary to-emerald-400",
    description:
      "어린 연령대의 아가씨들과 높은 수준의 서비스를 자랑합니다. 구미식 서비스, 북창동식 서비스 등 코스에 따라 정해진 시간동안 노래방에서 술과 노래를 부르며 즐긴 뒤 세부 서비스가 나눠집니다.",
  },
  {
    title: "다국적 외국인 주점",
    icon: "G",
    gradient: "from-accent to-cyan-400",
    description:
      "필리핀, 베트남, 태국, 라오스 등 다양한 외국인 여성들이 근무하고 있으며 높은 수준의 서비스와 기대이상의 외모, 저렴한 가격대로 높은 만족도를 제공합니다.",
  },
  {
    title: "북한식 주점",
    icon: "N",
    gradient: "from-neon-purple to-violet-400",
    description:
      "대구 최초 북한식 주점으로, 100% 북한 아가씨를 자랑합니다. 정중한 태도와 좋은 서비스로 재방문율이 높습니다.",
  },
];

const dongguPricing = [
  {
    category: "기본 가격",
    badge: "기본",
    badgeColor: "bg-primary/15 text-primary border-primary/20",
    items: [
      { label: "1인", price: "210,000원" },
      { label: "2인부터 (1인당)", price: "170,000원" },
    ],
  },
  {
    category: "1시간 코스",
    badge: "1H",
    badgeColor: "bg-accent/15 text-accent border-accent/20",
    items: [
      { label: "1인", price: "110,000원" },
      { label: "2인부터 (1인당)", price: "90,000원" },
    ],
  },
  {
    category: "2시간 코스",
    badge: "2H BEST",
    badgeColor: "bg-neon-pink/15 text-neon-pink border-neon-pink/20",
    items: [
      { label: "1인", price: "200,000원" },
      { label: "2인부터 (1인당)", price: "160,000원" },
    ],
  },
];

export default function DongguSection() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <section id="donggu" className="py-24 px-4 relative overflow-hidden">
      {/* Bg */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-purple/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-6 inline-flex">DAEGU DONGGU</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            대구 동구 <span className="gradient-text">주점</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            동대구역이라는 지리적 특성으로 출장객 비율이 높으며, 다국적 주점과 한국식 주점 모두 높은 수준을 자랑합니다.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-primary text-black border-primary shadow-neon"
                  : "bg-white/[0.03] text-gray-400 border-white/[0.06] hover:text-white hover:bg-white/[0.06] hover:border-white/10"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} />
              </svg>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 neon-border">
          {/* Intro */}
          {activeTab === "intro" && (
            <div className="space-y-8">
              {/* 대표 이미지 - /public/images/image.png 교체 가능 */}
              <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center animate-ken-burns transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url(/images/image.png)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-900/40 to-transparent" />
                <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8">
                  <span className="px-3 py-1 text-[10px] font-bold bg-primary/20 text-primary border border-primary/30 rounded-full backdrop-blur-sm">
                    DAEGU DONGGU
                  </span>
                  <h4 className="text-white font-bold text-lg sm:text-xl mt-2">대구 동구 프리미엄 주점</h4>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  대구 동구 주점 소개
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  대구 동구 주점은 동대구역이라는 지리적 특성으로 인해 다른 지역과 비교했을때 출장객의 비율이 높습니다.
                  그러므로 다국적 주점, 외국인 주점이 활성화 되어 있고 한국식 주점 또한 높은 수준을 자랑하기 때문에
                  실속과 다양한 선택지를 원하는 출장객들에게 동대구역 주점들이 많은 사랑을 받고 있습니다.
                </p>
              </div>

              {/* 시스템별 이미지 카드 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { src: "/images/2.png", label: "한국식 주점", desc: "높은 수준의 서비스" },
                  { src: "/images/1.png", label: "다국적 주점", desc: "다양한 선택지" },
                  { src: "/images/5.png", label: "프리미엄 룸", desc: "최상급 시설" },
                ].map((item) => (
                  <div key={item.label} className="relative rounded-xl overflow-hidden group aspect-[3/4]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.src})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-sm">{item.label}</p>
                      <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                    </div>
                    <div className="absolute inset-0 border border-white/[0.04] rounded-xl group-hover:border-primary/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System */}
          {activeTab === "system" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                대구 동구 주점 시스템
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {systemTypes.map((type) => (
                  <div
                    key={type.title}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/20 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-5`}>
                      <span className="text-black font-bold text-lg">{type.icon}</span>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-3 group-hover:text-primary transition-colors">{type.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hours */}
          {activeTab === "hours" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                대구 동구 주점 영업시간
              </h3>
              <div className="flex items-center justify-center gap-8 sm:gap-16 py-12 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-center">
                  <p className="text-[10px] text-gray-600 mb-3 tracking-widest uppercase">Open</p>
                  <p className="text-primary text-4xl sm:text-5xl font-bold font-display neon-text">PM 9:00</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-px bg-gradient-to-r from-primary/30 to-accent/30" />
                  <div className="w-3 h-3 rounded-full border-2 border-primary/30" />
                  <div className="w-12 h-px bg-gradient-to-r from-primary/30 to-accent/30" />
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-600 mb-3 tracking-widest uppercase">Close</p>
                  <p className="text-accent text-4xl sm:text-5xl font-bold font-display">AM 4:00</p>
                </div>
              </div>
              <p className="text-gray-400 text-center text-lg">
                저녁 9시부터 새벽 4시까지 운영되며, 출장객들과 주변 주민들이 많이 이용합니다.
              </p>
            </div>
          )}

          {/* Location */}
          {activeTab === "location" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                대구 동구 주점 위치
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                대구 동구 주점의 위치는 다양한 곳에서 영업중입니다. 대표적으로 동대구역 주점, 대구 신천동 주점 등
                대구 동구 주점은 다양한 위치에서 영업중이므로 동구 어디에 계시던 이용 할 수 있는 주점들이 많습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { area: "동대구역", desc: "교통 접근성 최고, 출장객 선호" },
                  { area: "신천동", desc: "다양한 코스의 주점 밀집" },
                ].map((loc) => (
                  <div key={loc.area} className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-primary/20 transition-colors group">
                    <div className="p-4 rounded-xl bg-primary/[0.08] group-hover:bg-primary/15 transition-colors">
                      <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">{loc.area}</p>
                      <p className="text-gray-500 text-sm mt-1">{loc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing */}
          {activeTab === "pricing" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                대구 동구 주점 코스 및 가격
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {dongguPricing.map((cat) => (
                  <div key={cat.category} className="rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-primary/15 transition-colors">
                    <div className="flex items-center justify-between p-5 border-b border-white/[0.04]">
                      <h4 className="text-white font-bold">{cat.category}</h4>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${cat.badgeColor}`}>
                        {cat.badge}
                      </span>
                    </div>
                    <div className="p-5 space-y-0 divide-y divide-white/[0.04]">
                      {cat.items.map((item) => (
                        <div key={item.label} className="pricing-row flex items-center justify-between py-3 px-2 rounded">
                          <span className="text-gray-400 text-sm">{item.label}</span>
                          <span className="text-primary font-semibold text-sm">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
