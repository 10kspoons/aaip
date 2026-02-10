import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Australian AI Party - our vision, mission, values, and the team working to bring smarter governance to Australia.",
};

const partyAims = [
  "Promote the ethical and effective use of AI in Australian government decision-making",
  "Advocate for transparent algorithmic governance where AI assists but humans retain oversight",
  "Ensure all Australians benefit from AI advancement through education, retraining, and equitable access",
  "Protect digital rights, data privacy, and democratic processes",
  "Champion open data policies and government transparency",
  "Foster Australia as a global leader in responsible AI governance",
];

const values = [
  {
    title: "Transparency",
    description:
      "All AI systems used in governance must be explainable and auditable",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Human Oversight",
    description: "AI assists decisions, humans make them",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Equity",
    description: "AI benefits must reach all Australians",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
        />
      </svg>
    ),
  },
  {
    title: "Privacy",
    description: "Strong data protection as a fundamental right",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Embrace technology while managing risks",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Evidence-Based",
    description: "Policy driven by data and research, not ideology",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
  },
];

const leaders = [
  {
    name: "Dr. Sarah Chen",
    role: "Party Leader",
    bio: "AI researcher and policy advocate with 15 years in machine learning",
    initials: "SC",
    gradient: "from-primary to-accent",
  },
  {
    name: "James Okonkwo",
    role: "Deputy Leader",
    bio: "Former public servant and digital transformation expert",
    initials: "JO",
    gradient: "from-accent to-primary-300",
  },
  {
    name: "Priya Sharma",
    role: "Party Secretary",
    bio: "Technology lawyer specialising in AI regulation",
    initials: "PS",
    gradient: "from-primary-600 to-accent-600",
  },
  {
    name: "David Mueller",
    role: "Treasurer",
    bio: "Fintech entrepreneur and open data champion",
    initials: "DM",
    gradient: "from-accent-700 to-primary",
  },
];

const constitutionPoints = [
  {
    text: "Democratic decision-making at all levels",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3.026a43.21 43.21 0 0 0-1.632-.17 1.575 1.575 0 0 0-1.518 1.632c.09 1.98.272 3.93.541 5.844a1.575 1.575 0 0 0 1.556 1.343h1.953c.048 0 .096-.002.143-.005a47.996 47.996 0 0 0 2.025 3.413 1.575 1.575 0 0 0 2.722-1.584 49.753 49.753 0 0 1-1.07-2.054c.76-.19 1.511-.41 2.25-.66a1.575 1.575 0 0 0-.996-2.988 42.49 42.49 0 0 1-2.874.825V4.575ZM14.25 8.1a1.575 1.575 0 0 1 1.575-1.575h.045a1.575 1.575 0 0 1 1.575 1.575v2.7a1.575 1.575 0 0 1-1.575 1.575h-.045a1.575 1.575 0 0 1-1.575-1.575v-2.7Zm4.65-1.575a1.575 1.575 0 0 0-1.575 1.575v2.7a1.575 1.575 0 0 0 1.575 1.575h.045a1.575 1.575 0 0 0 1.575-1.575v-2.7a1.575 1.575 0 0 0-1.575-1.575h-.045Z"
        />
      </svg>
    ),
  },
  {
    text: "Transparent financial management",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    ),
  },
  {
    text: "Equal rights for all members",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    text: "Regular policy review and updates",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"
        />
      </svg>
    ),
  },
  {
    text: "Commitment to ethical AI principles",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
  },
  {
    text: "Compliance with Australian Electoral Commission requirements",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== Hero Banner ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-400 to-primary-900">
        <div className="neural-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <div className="section-padding container-max relative z-10 py-24 md:py-32">
          {/* Breadcrumb */}
          <nav className="mb-8 animate-fade-in-up" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="text-white/90">About</li>
            </ol>
          </nav>

          <h1
            className="animate-fade-in-up text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            About the Australian
            <span className="mt-2 block text-accent">AI Party</span>
          </h1>
          <p
            className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Founded on the belief that technology and democracy can work
            together
          </p>

          {/* Decorative floating element */}
          <div className="animate-float absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          </div>
        </div>
      </section>

      {/* ===== Vision & Mission ===== */}
      <section className="gradient-mesh relative overflow-hidden bg-white">
        <div className="section-padding container-max">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Vision */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Our Vision
              </div>
              <h2 className="mb-6 text-3xl font-bold text-navy sm:text-4xl">
                A smarter future for all Australians
              </h2>
              <p className="text-lg leading-relaxed text-navy-300">
                An Australia where artificial intelligence serves every citizen,
                where government decisions are informed by the best available
                data, and where technology strengthens rather than undermines our
                democratic values.
              </p>
              <div className="mt-8 rounded-xl border border-accent-100 bg-accent-50/50 p-6">
                <p className="text-sm font-medium text-accent-800">
                  We envision a government that harnesses the power of AI not to
                  replace human judgement, but to enhance it -- making policy
                  decisions more informed, more transparent, and more
                  responsive to the needs of everyday Australians.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
                Our Mission
              </div>
              <h2 className="mb-6 text-3xl font-bold text-navy sm:text-4xl">
                Six aims driving our work
              </h2>
              <ul className="space-y-4">
                {partyAims.map((aim, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <svg
                        className="h-4 w-4 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <span className="text-navy-300">{aim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Founding Story ===== */}
      <section className="bg-gray-50">
        <div className="section-padding container-max">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Our Story
            </div>
            <h2 className="mb-8 text-3xl font-bold text-navy sm:text-4xl">
              Why We Started
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-navy-300">
              <p>
                Australia faces unprecedented challenges -- from climate change
                and housing affordability to healthcare strain and economic
                transformation. These are complex, interconnected problems that
                demand more than slogans and three-word phrases. They demand the
                best thinking, the best data, and the best tools available.
                Traditional political parties, bound by ideology and factional
                interests, too often fall short.
              </p>

              <p>
                Artificial intelligence is already transforming every industry it
                touches. In healthcare, AI is detecting cancers earlier. In
                agriculture, it is optimising crop yields across our vast
                landscapes. In finance, it is identifying fraud in milliseconds.
                Yet our government -- the institution with the greatest capacity
                to improve lives at scale -- lags behind. Policy is still made
                on instinct and anecdote when it could be informed by evidence
                and modelling.
              </p>

              {/* Pull quote */}
              <blockquote className="my-8 rounded-xl border-l-4 border-accent bg-white p-6 shadow-sm">
                <p className="text-xl font-medium italic text-navy">
                  &ldquo;What if we used the best available tools to make the
                  best possible decisions for all Australians?&rdquo;
                </p>
                <cite className="mt-3 block text-sm font-medium text-navy-200 not-italic">
                  -- The question that started it all
                </cite>
              </blockquote>

              <p>
                Our founders -- researchers, public servants, technologists,
                and concerned citizens -- saw this gap and refused to accept it.
                They came together across disciplines and political
                backgrounds, united by a shared conviction: that Australians
                deserve a government as smart as the technology in their
                pockets. A government that uses data to understand problems, AI
                to explore solutions, and democratic processes to choose the
                right path forward.
              </p>

              <p>
                The Australian AI Party was born from that simple, powerful
                idea. Not a party of the left or the right, but a party of the
                future. We believe that evidence-based governance, augmented by
                artificial intelligence and anchored in human values, is not
                just possible -- it is essential. And we are building the
                movement to make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Party Values ===== */}
      <section className="bg-white">
        <div className="section-padding container-max">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-accent" />
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-navy-300">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={i}
                className="card-hover group rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-navy-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Leadership Team ===== */}
      <section className="bg-gray-50">
        <div className="section-padding container-max">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-accent" />
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Leadership
            </h2>
            <p className="mt-4 text-lg text-navy-300">
              Meet the team working to bring smarter governance to Australia
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, i) => (
              <div
                key={i}
                className="card-hover group rounded-xl bg-white p-6 text-center shadow-sm"
              >
                {/* Avatar placeholder */}
                <div
                  className={`mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${leader.gradient} shadow-lg shadow-primary/10`}
                >
                  <span className="text-2xl font-bold text-white">
                    {leader.initials}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy">{leader.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {leader.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy-300">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Constitution Summary ===== */}
      <section className="bg-white">
        <div className="section-padding container-max">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-accent" />
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Constitution
            </h2>
            <p className="mt-4 text-lg text-navy-300">
              The Australian AI Party is committed to democratic governance in
              all aspects of our operations
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="space-y-4">
              {constitutionPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/50 px-6 py-4 transition-colors hover:border-accent-100 hover:bg-accent-50/30"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    {point.icon}
                  </span>
                  <span className="font-medium text-navy">{point.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <a
                href="#"
                className="btn-outline-dark group inline-flex items-center gap-2"
              >
                Read our full constitution
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary to-accent-600">
        <div className="neural-pattern absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary-900/30" />
        <div className="section-padding container-max relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to shape Australia&apos;s future?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join a movement that believes in evidence, innovation, and the power
            of technology to strengthen our democracy.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/join" className="btn-cta px-8 py-4 text-lg">
              Join the Party
            </Link>
            <Link href="/policy" className="btn-outline px-8 py-4 text-lg">
              Explore Our Policies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
