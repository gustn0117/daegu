"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge mb-6 inline-flex">CONTACT</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            지금 바로 <span className="gradient-text">문의하기</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            전화 또는 문자로 편하게 문의해주세요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone */}
          <a
            href="tel:01096802579"
            className="glass-card rounded-2xl p-8 text-center group neon-border cursor-pointer block"
          >
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/15 transition-colors">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-10 h-10 text-primary relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-3">전화 문의</h3>
            <p className="text-primary font-bold text-2xl mb-2 font-display">010-9680-2579</p>
            <p className="text-gray-400 font-medium mb-4">김실장</p>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              바로 전화하기
            </div>
          </a>

          {/* SMS */}
          <a
            href="sms:01096802579"
            className="glass-card rounded-2xl p-8 text-center group cursor-pointer block"
          >
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6 group-hover:bg-accent/15 transition-colors">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-10 h-10 text-accent relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-3">문자 문의</h3>
            <p className="text-accent font-bold text-2xl mb-2 font-display">010-9680-2579</p>
            <p className="text-gray-400 font-medium mb-4">김실장</p>
            <p className="text-gray-500 text-sm">편하게 문자 주세요</p>
          </a>
        </div>
      </div>
    </section>
  );
}
