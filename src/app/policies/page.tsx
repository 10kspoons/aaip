import type { Metadata } from "next";
import Link from "next/link";
import { policies } from "@/data/policies";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, speakableSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Explore the Australian AI Party's policy platform for AI-powered governance, digital rights, algorithmic transparency, and workforce transition.",
  openGraph: {
    title: "Policies | Australian AI Party",
    description:
      "Explore the Australian AI Party's comprehensive policy platform covering AI governance, digital rights, algorithmic transparency, and workforce transition.",
    type: "website",
  },
  alternates: {
    canonical: "/policies",
  },
};

export default function PoliciesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Policies", url: `${SITE_URL}/policies` },
        ])}
      />
      <JsonLd data={speakableSchema(["h1", ".policy-intro"])} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-400 to-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="neural-pattern absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="gradient-mesh absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Policies
            </h1>
            <p className="animate-fade-in-up mt-6 text-lg leading-relaxed text-white/70 sm:text-xl" style={{ animationDelay: "0.1s" }}>
              A comprehensive framework for AI-powered governance in Australia.
              Evidence-based, transparent, and designed for every Australian.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Cards Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {policies.map((policy, index) => (
              <Link
                key={policy.slug}
                href={`/policies/${policy.slug}`}
                className="group relative flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-l-4 hover:border-l-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <svg
                    className="h-7 w-7 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={policy.icon} />
                  </svg>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-navy group-hover:text-primary transition-colors duration-200">
                  {policy.title}
                </h2>

                {/* Summary */}
                <p className="mt-3 flex-1 text-gray-600 leading-relaxed">
                  {policy.summary}
                </p>

                {/* Read more link */}
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-primary-600">
                  Read full policy
                  <svg
                    className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-900 to-navy">
        <div className="neural-pattern absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="container-max relative section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Agree with our vision?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Join the Australian AI Party and help shape the future of
              AI-powered governance in Australia.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/join" className="btn-cta px-8 py-3 text-base">
                Join the Party
              </Link>
              <Link href="/donate" className="btn-outline px-8 py-3 text-base">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
