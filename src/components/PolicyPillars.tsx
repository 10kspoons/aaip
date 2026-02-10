import Link from "next/link";

const pillars = [
  {
    title: "AI-Assisted Governance",
    description:
      "Harness artificial intelligence to analyse policy outcomes, streamline public services, and make government more responsive to citizens.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Parliament building */}
        <rect x="10" y="28" width="28" height="14" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
        <polygon points="24,8 6,24 42,24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <line x1="16" y1="28" x2="16" y2="42" stroke="currentColor" strokeWidth="2" />
        <line x1="24" y1="28" x2="24" y2="42" stroke="currentColor" strokeWidth="2" />
        <line x1="32" y1="28" x2="32" y2="42" stroke="currentColor" strokeWidth="2" />
        {/* Circuit lines */}
        <circle cx="24" cy="16" r="2" fill="currentColor" />
        <line x1="24" y1="18" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="14" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
        <line x1="15.5" y1="20" x2="22" y2="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="34" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
        <line x1="32.5" y1="20" x2="26" y2="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Digital Rights & Privacy",
    description:
      "Protect every Australian's digital identity with robust privacy laws, data sovereignty, and transparent algorithmic accountability.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield */}
        <path
          d="M24 4L6 12v12c0 11.1 7.7 21.5 18 24 10.3-2.5 18-12.9 18-24V12L24 4z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Lock */}
        <rect x="18" y="22" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M20 22v-4a4 4 0 018 0v4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="27" r="1.5" fill="currentColor" />
        <line x1="24" y1="28.5" x2="24" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Education & Jobs",
    description:
      "Prepare Australia's workforce for the future with AI literacy programs, reskilling pathways, and investment in emerging tech careers.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Graduation cap */}
        <polygon points="24,8 4,20 24,32 44,20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <line x1="44" y1="20" x2="44" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 24v10c0 0 5 6 12 6s12-6 12-6V24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Gear */}
        <circle cx="38" cy="36" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="38" cy="36" r="2" fill="currentColor" opacity="0.6" />
        <line x1="38" y1="30" x2="38" y2="31.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="38" y1="40.5" x2="38" y2="42" stroke="currentColor" strokeWidth="1.5" />
        <line x1="32" y1="36" x2="33.5" y2="36" stroke="currentColor" strokeWidth="1.5" />
        <line x1="42.5" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Open Data Government",
    description:
      "Unlock government datasets for public benefit. Transparent data sharing drives innovation, accountability, and informed citizens.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Database/stacked discs */}
        <ellipse cx="22" cy="12" rx="14" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 12v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 20v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" stroke="currentColor" strokeWidth="2" fill="none" />
        {/* Open padlock */}
        <rect x="32" y="30" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M34 30v-3a3 3 0 016 0" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="37" cy="34" r="1" fill="currentColor" />
        {/* Chart bars */}
        <line x1="12" y1="28" x2="12" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="17" y1="28" x2="17" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="22" y1="28" x2="22" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
];

export default function PolicyPillars() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 rounded-full bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Policy Pillars
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building the framework for AI-powered governance
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group bg-white rounded-xl shadow-md border border-gray-100 p-8 card-hover border-t-4 border-t-transparent hover:border-t-accent transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-5 leading-relaxed">
                {pillar.description}
              </p>

              {/* Link */}
              <Link
                href="/policies"
                className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors duration-200"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
