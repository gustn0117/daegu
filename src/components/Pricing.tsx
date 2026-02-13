"use client";

const pricingCategories = [
  {
    title: "기본 가격",
    subtitle: "인원수별 기본 요금",
    badge: "BASIC",
    badgeColor: "bg-primary/15 text-primary border-primary/20",
    items: [
      { label: "1인", price: "210,000원" },
      { label: "2인부터 (1인당)", price: "170,000원" },
    ],
    featured: true,
  },
  {
    title: "1시간 코스",
    subtitle: "짧고 알찬 구성",
    badge: "1H",
    badgeColor: "bg-accent/15 text-accent border-accent/20",
    items: [
      { label: "1인", price: "110,000원" },
      { label: "2인부터 (1인당)", price: "90,000원" },
    ],
    featured: false,
  },
  {
    title: "2시간 코스",
    subtitle: "가장 인기 있는 구성",
    badge: "2H BEST",
    badgeColor: "bg-neon-pink/15 text-neon-pink border-neon-pink/20",
    items: [
      { label: "1인", price: "200,000원" },
      { label: "2인부터 (1인당)", price: "160,000원" },
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/[0.02] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-6 inline-flex">PRICING</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            코스 및 <span className="gradient-text">가격표</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            합리적인 가격으로 최고의 서비스를 경험하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {pricingCategories.map((cat) => (
            <div
              key={cat.title}
              className={`glass-card rounded-2xl overflow-hidden ${
                cat.featured ? "neon-border md:scale-[1.02]" : ""
              }`}
            >
              {/* Featured indicator */}
              {cat.featured && (
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              )}

              {/* Header */}
              <div className="p-6 border-b border-white/[0.04]">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-gray-500 text-sm mt-1.5">{cat.subtitle}</p>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold border ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-0 divide-y divide-white/[0.04]">
                  {cat.items.map((item) => (
                    <div
                      key={item.label}
                      className="pricing-row flex items-center justify-between py-3.5 px-3 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-md bg-primary/[0.08] flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                          </svg>
                        </div>
                        <span className="text-gray-300 font-medium">{item.label}</span>
                      </div>
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 문의 안내 */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            자세한 가격 상담은{" "}
            <a href="tel:01096802579" className="text-primary font-bold hover:underline">
              010-9680-2579
            </a>{" "}
            김실장에게 전화/문자 주세요
          </p>
        </div>
      </div>
    </section>
  );
}
