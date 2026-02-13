"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "영업시간", href: "#hours" },
  { label: "이용가능업소", href: "#venues" },
  { label: "수성구", href: "#suseong" },
  { label: "문의", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-glass py-0"
            : "bg-transparent py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-9 h-9 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/30 transition-colors" />
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full relative z-10">
                  <path d="M20 2L8 14L20 26L32 14L20 2Z" fill="#00e676" />
                  <path d="M20 14L8 26L20 38L32 26L20 14Z" fill="#00e676" opacity="0.5" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-wider font-display">
                <span className="text-primary neon-text">DAEGU</span>{" "}
                <span className="text-white/90">ROOM</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm text-gray-400 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/5 group"
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA + Mobile button */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-neon"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                문의하기
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all duration-300"
              >
                <span className="text-sm font-medium">메뉴</span>
                <div className="w-5 h-5 flex flex-col items-center justify-center gap-1">
                  <span
                    className={`block h-px w-4 bg-primary transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-[3px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-4 bg-primary transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-[2px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-full" />
        )}
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-dark-800/95 backdrop-blur-xl border-l border-white/5 p-6 pt-24 animate-slide-in-right">
            <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

            <div className="flex flex-col gap-1 relative z-10">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-3.5 text-gray-300 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 group"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-primary group-hover:shadow-neon transition-all" />
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 px-4 relative z-10">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-xl hover:shadow-neon-lg transition-all"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
