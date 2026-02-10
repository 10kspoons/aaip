import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { policies } from "@/data/policies";

export function generateStaticParams() {
  return policies.map((policy) => ({ slug: policy.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = policies.find((p) => p.slug === slug);

  if (!policy) {
    return { title: "Policy Not Found" };
  }

  return {
    title: policy.title,
    description: policy.summary,
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = policies.find((p) => p.slug === slug);

  if (!policy) {
    notFound();
  }

  // Get related policies (exclude current, take up to 3)
  const relatedPolicies = policies
    .filter((p) => p.slug !== policy.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-400 to-navy pt-32 pb-16 md:pt-40 md:pb-24">
        <div
          className="neural-pattern absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="gradient-mesh absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Back link */}
            <Link
              href="/policies"
              className="animate-fade-in-up mb-8 inline-flex items-center text-sm font-medium text-white/60 transition-colors duration-200 hover:text-accent"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              Back to all policies
            </Link>

            {/* Icon */}
            <div
              className="animate-fade-in-up mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15"
              style={{ animationDelay: "0.1s" }}
            >
              <svg
                className="h-8 w-8 text-accent"
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
            <h1
              className="animate-fade-in-up text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
              style={{ animationDelay: "0.15s" }}
            >
              {policy.title}
            </h1>

            {/* Summary */}
            <p
              className="animate-fade-in-up mt-5 text-lg leading-relaxed text-white/70 sm:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              {policy.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            {/* Description */}
            <div className="space-y-6">
              {policy.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Commitments */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Key Commitments
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-accent" />

              <ol className="mt-8 space-y-5">
                {policy.keyPoints.map((point, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-lg leading-relaxed text-gray-700">
                      {point}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Related Policies
            </h2>
            <p className="mt-2 text-gray-600">
              Explore more of our policy platform.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPolicies.map((related) => (
                <Link
                  key={related.slug}
                  href={`/policies/${related.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-l-4 hover:border-l-accent"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                    <svg
                      className="h-5 w-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={related.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-navy group-hover:text-primary transition-colors duration-200">
                    {related.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">
                    {related.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition-colors duration-200 group-hover:text-primary-600">
                    Read more
                    <svg
                      className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-900 to-navy">
        <div
          className="neural-pattern absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-max relative section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Support this policy
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Join the Australian AI Party and help us bring evidence-based,
              AI-powered governance to Australia.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/join" className="btn-cta px-8 py-3 text-base">
                Join the Party
              </Link>
              <Link
                href="/policies"
                className="btn-outline px-8 py-3 text-base"
              >
                View All Policies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
