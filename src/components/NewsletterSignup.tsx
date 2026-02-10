"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Placeholder - would integrate with an email service
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-700 to-navy">
      {/* Neural pattern overlay */}
      <div className="absolute inset-0 neural-pattern opacity-60 pointer-events-none" />

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative section-padding">
        <div className="container-max text-center max-w-2xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Informed
          </h2>

          {/* Subtitle */}
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Get the latest on AI policy, party updates, and how you can make a
            difference.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-0 max-w-lg mx-auto mb-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white text-navy rounded-lg sm:rounded-l-lg sm:rounded-r-none text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0"
            />
            <button
              type="submit"
              className="btn-cta rounded-lg sm:rounded-l-none sm:rounded-r-lg px-8 py-3.5 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-accent text-sm font-medium mb-2 animate-fade-in-up">
              Thanks for subscribing! We&apos;ll be in touch.
            </p>
          )}

          {/* Privacy Note */}
          <p className="text-sm text-white/50">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
