import type { Metadata } from "next";
import Link from "next/link";
import { newsPosts } from "@/data/news";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, speakableSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Latest news, policy updates, and opinions from the Australian AI Party.",
  openGraph: {
    title: "News & Updates | Australian AI Party",
    description:
      "Stay informed with the latest policy developments, party news, and opinions from the Australian AI Party.",
    type: "website",
  },
  alternates: {
    canonical: "/news",
  },
};

function getCategoryStyle(category: string): string {
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

export default function NewsPage() {
  const [featuredPost, ...remainingPosts] = newsPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "News", url: `${SITE_URL}/news` },
        ])}
      />
      <JsonLd data={speakableSchema(["h1"])} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-600 to-primary-900 pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="neural-pattern absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-max relative px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 rounded-full bg-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            News & Updates
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Stay informed about our latest policy developments and party news
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <article className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-accent to-primary" />

            <div className="p-8 md:p-12 pl-10 md:pl-14">
              <div className="flex flex-wrap items-center gap-4 mb-5">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getCategoryStyle(featuredPost.category)}`}
                >
                  {featuredPost.category}
                </span>
                <span className="text-sm text-gray-400">
                  {formatDate(featuredPost.date)}
                </span>
                <span className="text-sm text-gray-400">
                  By {featuredPost.author}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-4 leading-tight">
                <Link
                  href={`/news/${featuredPost.slug}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>

              <Link
                href={`/news/${featuredPost.slug}`}
                className="inline-flex items-center text-base font-semibold text-primary hover:text-accent transition-colors duration-200 group"
              >
                Read full article
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
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
        </div>
      </section>

      {/* Remaining Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm card-hover"
              >
                {/* Card top accent */}
                <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                <div className="p-6 md:p-8">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getCategoryStyle(post.category)}`}
                    >
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-400">
                      {formatDate(post.date)}
                    </time>
                  </div>

                  {/* Author */}
                  <p className="text-sm text-gray-500 mb-3">
                    By {post.author}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-primary transition-colors duration-200 leading-snug">
                    <Link href={`/news/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/news/${post.slug}`}
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
              Never Miss an Update
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest policy analysis, party
              news, and event invitations delivered straight to your inbox.
            </p>
            <Link href="/join" className="btn-cta px-8 py-4 text-lg">
              Join the Movement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
