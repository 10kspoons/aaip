"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import MobileMenu from "@/components/MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/policies", label: "Policies" },
  { href: "/blog", label: "Blog" },
  { href: "/news", label: "News" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function AILogoMark() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {/* Connecting lines forming neural network */}
      <line x1="8" y1="8" x2="18" y2="4" stroke="#00D4FF" strokeWidth="1.2" opacity="0.6" />
      <line x1="8" y1="8" x2="18" y2="18" stroke="#00D4FF" strokeWidth="1.2" opacity="0.5" />
      <line x1="8" y1="8" x2="6" y2="20" stroke="#00D4FF" strokeWidth="1.2" opacity="0.4" />
      <line x1="18" y1="4" x2="28" y2="8" stroke="#0066FF" strokeWidth="1.2" opacity="0.6" />
      <line x1="18" y1="4" x2="18" y2="18" stroke="#0066FF" strokeWidth="1.2" opacity="0.5" />
      <line x1="28" y1="8" x2="18" y2="18" stroke="#0066FF" strokeWidth="1.2" opacity="0.6" />
      <line x1="28" y1="8" x2="30" y2="20" stroke="#0066FF" strokeWidth="1.2" opacity="0.4" />
      <line x1="6" y1="20" x2="18" y2="18" stroke="#00D4FF" strokeWidth="1.2" opacity="0.5" />
      <line x1="6" y1="20" x2="12" y2="30" stroke="#00D4FF" strokeWidth="1.2" opacity="0.4" />
      <line x1="30" y1="20" x2="18" y2="18" stroke="#0066FF" strokeWidth="1.2" opacity="0.5" />
      <line x1="30" y1="20" x2="24" y2="30" stroke="#0066FF" strokeWidth="1.2" opacity="0.4" />
      <line x1="12" y1="30" x2="18" y2="18" stroke="#00D4FF" strokeWidth="1.2" opacity="0.3" />
      <line x1="24" y1="30" x2="18" y2="18" stroke="#0066FF" strokeWidth="1.2" opacity="0.3" />
      <line x1="12" y1="30" x2="24" y2="30" stroke="#0066FF" strokeWidth="1.2" opacity="0.5" />

      {/* Outer nodes */}
      <circle cx="8" cy="8" r="2.5" fill="#00D4FF" opacity="0.8" />
      <circle cx="18" cy="4" r="2" fill="#0066FF" opacity="0.7" />
      <circle cx="28" cy="8" r="2.5" fill="#0066FF" opacity="0.8" />
      <circle cx="6" cy="20" r="2" fill="#00D4FF" opacity="0.6" />
      <circle cx="30" cy="20" r="2" fill="#0066FF" opacity="0.6" />
      <circle cx="12" cy="30" r="2.5" fill="#00D4FF" opacity="0.7" />
      <circle cx="24" cy="30" r="2.5" fill="#0066FF" opacity="0.7" />

      {/* Central node - larger, brighter */}
      <circle cx="18" cy="18" r="4" fill="#00D4FF" />
      <circle cx="18" cy="18" r="6" fill="#00D4FF" opacity="0.15" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-navy/90 shadow-lg shadow-navy/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          {/* Logo and Party Name */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Australian AI Party - Home"
          >
            <AILogoMark />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-accent sm:text-xl">
                Australian AI Party
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-accent/70 sm:block">
                Smarter decisions for all
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Hover underline animation */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-accent transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                  {/* Hover state underline - only show when not active */}
                  {!isActive && (
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-white/40 transition-transform duration-300 hover:scale-x-100 group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/join"
              className="btn-cta px-5 py-2 text-sm"
            >
              Join
            </Link>
            <Link
              href="/donate"
              className="btn-primary px-5 py-2 text-sm"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent/50 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-y-2 rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMobileMenuOpen
                  ? "-translate-y-2 -rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
