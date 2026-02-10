"use client";

export default function NewsletterForm() {
  return (
    <form
      className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        required
        autoComplete="email"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-200 focus:border-accent/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent/20 sm:max-w-xs"
      />
      <button
        type="submit"
        className="btn-cta shrink-0 px-6 py-3 text-sm"
      >
        Subscribe
      </button>
    </form>
  );
}
