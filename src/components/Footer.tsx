import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/policies", label: "Policies" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const getInvolvedLinks = [
  { href: "/join", label: "Join the Party" },
  { href: "/donate", label: "Donate" },
  { href: "/join#volunteer", label: "Volunteer" },
  { href: "/news#events", label: "Events" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/electoral-disclosure", label: "Electoral Disclosure" },
];

function TwitterIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115v3.222a9 9 0 0 0-.86-.025c-1.22 0-1.692.462-1.692 1.663v2.583h4.363l-.748 3.667h-3.615v7.98z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.416-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.416 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.04.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.053-.058 1.37-.058 4.04 0 2.672.01 2.988.058 4.042.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.054.058-1.37.058-4.041 0-2.67-.01-2.987-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://twitter.com/AustralianAIParty", label: "Follow us on X (Twitter)", icon: TwitterIcon },
  { href: "https://facebook.com/AustralianAIParty", label: "Follow us on Facebook", icon: FacebookIcon },
  { href: "https://instagram.com/AustralianAIParty", label: "Follow us on Instagram", icon: InstagramIcon },
  { href: "https://youtube.com/@AustralianAIParty", label: "Subscribe on YouTube", icon: YouTubeIcon },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white" role="contentinfo">
      {/* Neural pattern overlay */}
      <div className="neural-pattern absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="container-max relative">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-10 px-4 pb-12 pt-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-12 lg:px-8 lg:pt-20">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Australian AI Party - Home">
              {/* Inline logo mark for footer */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
                aria-hidden="true"
              >
                <line x1="8" y1="8" x2="18" y2="4" stroke="#00D4FF" strokeWidth="1.2" opacity="0.6" />
                <line x1="8" y1="8" x2="18" y2="18" stroke="#00D4FF" strokeWidth="1.2" opacity="0.5" />
                <line x1="18" y1="4" x2="28" y2="8" stroke="#0066FF" strokeWidth="1.2" opacity="0.6" />
                <line x1="28" y1="8" x2="18" y2="18" stroke="#0066FF" strokeWidth="1.2" opacity="0.6" />
                <line x1="12" y1="30" x2="24" y2="30" stroke="#0066FF" strokeWidth="1.2" opacity="0.5" />
                <line x1="12" y1="30" x2="18" y2="18" stroke="#00D4FF" strokeWidth="1.2" opacity="0.3" />
                <line x1="24" y1="30" x2="18" y2="18" stroke="#0066FF" strokeWidth="1.2" opacity="0.3" />
                <circle cx="8" cy="8" r="2.5" fill="#00D4FF" opacity="0.8" />
                <circle cx="18" cy="4" r="2" fill="#0066FF" opacity="0.7" />
                <circle cx="28" cy="8" r="2.5" fill="#0066FF" opacity="0.8" />
                <circle cx="12" cy="30" r="2.5" fill="#00D4FF" opacity="0.7" />
                <circle cx="24" cy="30" r="2.5" fill="#0066FF" opacity="0.7" />
                <circle cx="18" cy="18" r="4" fill="#00D4FF" />
                <circle cx="18" cy="18" r="6" fill="#00D4FF" opacity="0.15" />
              </svg>
              <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-accent">
                Australian AI Party
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Harnessing the power of artificial intelligence for smarter,
              more transparent, and more effective governance for all
              Australians.
            </p>
            {/* Social media icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-all duration-200 hover:bg-accent/20 hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {getInvolvedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Connect
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <a
                  href="mailto:info@aaip.org.au"
                  className="flex items-center gap-2.5 text-sm text-white/50 transition-colors duration-200 hover:text-accent"
                >
                  <EmailIcon />
                  <span>info@aaip.org.au</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+61261001234"
                  className="flex items-center gap-2.5 text-sm text-white/50 transition-colors duration-200 hover:text-accent"
                >
                  <PhoneIcon />
                  <span>(02) 6100 1234</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-lg font-semibold text-white">
              Stay informed with our newsletter
            </h3>
            <p className="mt-2 text-sm text-white/50">
              Get the latest on AI policy, party news, and upcoming events
              delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            {/* Copyright */}
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Australian AI Party. All rights reserved.
            </p>

            {/* Legal links */}
            <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-white/40 transition-colors duration-200 hover:text-white/70"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Electoral authorisation */}
          <p className="mt-4 text-center text-[11px] leading-relaxed text-white/30">
            Authorised by the Australian AI Party, Suite 1, 123 Innovation Drive, Canberra ACT 2601.
          </p>
        </div>
      </div>
    </footer>
  );
}
