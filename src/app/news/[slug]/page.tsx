import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsPosts } from "@/data/news";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  breadcrumbSchema,
  articleSchema,
  speakableSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `/news/${post.slug}`,
    },
  };
}

function getCategoryStyle(category: string): string {
  switch (category) {
    case "Party News":
      return "bg-primary/20 text-white";
    case "Policy":
      return "bg-accent/20 text-accent-200";
    case "Opinion":
      return "bg-cta/20 text-cta-300";
    default:
      return "bg-white/10 text-white/80";
  }
}

function getCategoryStyleLight(category: string): string {
  switch (category) {
    case "Party News":
      return "bg-primary-50 text-primary";
    case "Policy":
      return "bg-accent/10 text-accent-700";
    case "Opinion":
      return "bg-cta-50 text-cta-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getAuthorRole(author: string): string {
  if (author === "AAIP Media Team") return "Communications & Media";
  if (author === "Dr. Sarah Chen") return "Policy Director";
  if (author === "Priya Sharma") return "Technology Policy Analyst";
  if (author === "James Okonkwo") return "Digital Rights Researcher";
  return "Contributor";
}

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = newsPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "News", url: `${SITE_URL}/news` },
          { name: post.title, url: `${SITE_URL}/news/${post.slug}` },
        ])}
      />
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={speakableSchema(["h1", "article p"])} />

      {/* Article Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-600 to-primary-900 pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="neural-pattern absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-max relative px-4 sm:px-6 lg:px-8">
          {/* Back to News */}
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 mb-8 group"
          >
            <svg
              className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to News
          </Link>

          <div className="max-w-3xl">
            {/* Category Badge */}
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-6 ${getCategoryStyle(post.category)}`}
            >
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Date and Author */}
            <div className="flex flex-wrap items-center gap-4 text-white/60">
              <time className="flex items-center gap-2 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(post.date)}
              </time>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="flex items-center gap-2 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {/* Article Content */}
            <div className="mb-12">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-gray-700 mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-12" />

            {/* Author Info Box */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5">
              {/* Avatar */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {getInitials(post.author)}
                </span>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Written by
                </p>
                <h3 className="text-lg font-semibold text-navy">
                  {post.author}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {getAuthorRole(post.author)}
                </p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Contributing to the Australian AI Party&apos;s mission of
                  bringing evidence-based, transparent governance to Australia.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-12" />

            {/* Share Section */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-navy mb-4">
                Share this article
              </h3>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-all duration-200 hover:bg-primary hover:text-white"
                  aria-label="Share on X (Twitter)"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-all duration-200 hover:bg-[#1877F2] hover:text-white"
                  aria-label="Share on Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115v3.222a9 9 0 0 0-.86-.025c-1.22 0-1.692.462-1.692 1.663v2.583h4.363l-.748 3.667h-3.615v7.98z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-all duration-200 hover:bg-[#0A66C2] hover:text-white"
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-all duration-200 hover:bg-gray-700 hover:text-white"
                  aria-label="Copy link"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 rounded-full bg-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Related Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm card-hover"
              >
                <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getCategoryStyleLight(related.category)}`}
                    >
                      {related.category}
                    </span>
                    <time className="text-sm text-gray-400">
                      {formatDate(related.date)}
                    </time>
                  </div>

                  <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-primary transition-colors duration-200 leading-snug">
                    <Link href={`/news/${related.slug}`}>{related.title}</Link>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">
                    {related.excerpt}
                  </p>

                  <Link
                    href={`/news/${related.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-200"
                  >
                    Read more
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-700 to-navy">
        <div
          className="absolute inset-0 neural-pattern opacity-60 pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Get the latest on AI policy, party updates, and how you can make a
              difference. Subscribe to our newsletter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join" className="btn-cta px-8 py-4 text-lg">
                Join the Party
              </Link>
              <Link href="/news" className="btn-outline px-8 py-4 text-lg">
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
