"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/policies", label: "Policies" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <nav
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-navy shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-end px-6 pt-6">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            aria-label="Close navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex flex-1 flex-col justify-center px-8">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`group flex items-center rounded-lg px-4 py-3 text-2xl font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-primary/15 text-accent"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {/* Active indicator */}
                    <span
                      className={`mr-3 h-2 w-2 rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-accent"
                          : "bg-transparent group-hover:bg-white/30"
                      }`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA buttons */}
        <div className="space-y-3 border-t border-white/10 px-8 pb-10 pt-6">
          <Link
            href="/join"
            onClick={onClose}
            className="btn-cta block w-full text-center text-lg"
          >
            Join the Party
          </Link>
          <Link
            href="/donate"
            onClick={onClose}
            className="btn-primary block w-full text-center text-lg"
          >
            Donate
          </Link>
        </div>
      </nav>
    </>
  );
}
