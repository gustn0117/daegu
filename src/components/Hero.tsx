"use client";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - z-0 so it stays behind navbar */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background photo - 은은하게 */}
        <div
          className="absolute inset-0 bg-contain bg-top bg-no-repeat opacity-60"
          style={{ backgroundImage: "url(/images/background.png)" }}
        />
        {/* Dark overlay on photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/20 via-dark-900/50 to-dark-900" />

        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at center, rgba(0,230,118,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(0,188,212,0.06) 0%, transparent 40%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(131,56,236,0.04) 0%, transparent 40%), linear-gradient(180deg, rgba(5,5,8,0.6) 0%, rgba(13,13,20,0.4) 50%, rgba(5,5,8,0.8) 100%)",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />

        {/* Floating particles */}
        <div className="absolute top-[15%] left-[20%] w-2 h-2 bg-primary/40 rounded-full animate-drift" />
        <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-primary/30 rounded-full animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[60%] right-[15%] w-2.5 h-2.5 bg-neon-purple/20 rounded-full animate-drift" style={{ animationDelay: "3s" }} />

        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-[100px] animate-float-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/[0.03] rounded-full blur-[80px] animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        {/* Logo Icon */}
        <div className="flex justify-center mb-10 animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150" />
            <svg viewBox="0 0 60 60" fill="none" className="w-16 h-16 relative z-10 animate-float">
              <path d="M30 5L15 20L30 35L45 20L30 5Z" fill="#00e676" />
              <path d="M30 20L15 35L30 50L45 35L30 20Z" fill="#00e676" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up delay-100">
          <span className="section-badge">
            Premium Room Guide
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-wider mb-6 animate-fade-in-up delay-200 font-display">
          <span className="text-primary neon-text">DAEGU</span>
          <br className="sm:hidden" />{" "}
          <span className="text-white">ROOM</span>
        </h1>

        <p className="text-xl sm:text-2xl text-accent/80 font-light mb-4 animate-fade-in-up delay-300 tracking-widest">
          대구 룸
        </p>

        <div className="animate-fade-in-up delay-300">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6" />
        </div>

        <p className="text-gray-400 text-base sm:text-lg mb-2 animate-fade-in-up delay-400">
          대구 다국적의 모든것
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 animate-fade-in-up delay-400">
          대구 <span className="gradient-text">프리미엄</span> 룸
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mb-14 animate-fade-in-up delay-500">
          김실장 <a href="tel:01096802579" className="text-primary font-bold hover:underline">010-9680-2579</a>
        </p>

        {/* Pricing Table */}
        <div className="glass rounded-2xl p-6 sm:p-8 max-w-md mx-auto animate-fade-in-up delay-500 neon-border">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <h3 className="text-sm font-semibold text-gray-300 tracking-widest uppercase">인원수별 기본가격</h3>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          <div className="space-y-0 divide-y divide-white/[0.06]">
            {[
              { people: "1인", price: "210,000" },
              { people: "2인부터", price: "1인 170,000" },
            ].map((item, i) => (
              <div
                key={item.people}
                className="pricing-row flex items-center justify-between py-4 px-4 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-white font-semibold">{item.people}</span>
                </div>
                <span className="text-primary font-bold text-lg">{item.price}원</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phone Number */}
        <div className="mt-12 animate-fade-in-up delay-600">
          <p className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-wide">
            <span className="text-primary">010-9680-2579</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="tel:01096802579"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full hover:shadow-neon-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              전화문의
            </a>

            <a
              href="sms:01096802579"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-primary/40 text-primary font-bold rounded-full hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              문자문의
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}
