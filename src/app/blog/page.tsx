import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, speakableSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog | Australian AI Party",
  description:
    "Direct takes on Australian politics, AI workforce transition, housing affordability, and why career politicians can't fix the problems they created. Evidence over ideology.",
  openGraph: {
    title: "Blog | Australian AI Party",
    description:
      "Direct takes on Australian politics, AI workforce transition, housing affordability, and why career politicians can't fix the problems they created.",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

function getCategoryStyle(category: string): string {
  switch (category) {
    case "Political Reform":
      return "bg-primary-50 text-primary";
    case "Economic Policy":
      return "bg-accent/10 text-accent-700";
    case "Tax Reform":
      return "bg-cta-50 text-cta-600";
    case "AI & Workforce":
      return "bg-purple-50 text-purple-700";
    case "AI & Democracy":
      return "bg-blue-50 text-blue-700";
    case "Party Building":
      return "bg-green-50 text-green-700";
    case "Governance":
      return "bg-orange-50 text-orange-700";
    case "Political Analysis":
      return "bg-rose-50 text-rose-700";
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

export default function BlogPage() {
  const [featuredPost, ...remainingPosts] = blogPosts;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
        ])}
      />
      <JsonLd data={speakableSchema(["h1", ".blog-intro"])} />

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
            Blog
          </h1>
          <p className="blog-intro text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Direct takes on Australian politics. No weasel words, no focus-group-tested platitudes.
            Evidence over ideology, always.
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
                  {featuredPost.readingTime} min read
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-2 leading-tight">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-lg text-navy-300 mb-4 font-medium">
                {featuredPost.subtitle}
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-3xl">
                {featuredPost.excerpt}
              </p>

              {/* Gen Z Hook */}
              <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-4 mb-6 max-w-3xl">
                <p className="text-sm text-navy-400 italic">
                  &ldquo;{featuredPost.genZHook}&rdquo;
                </p>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center text-base font-semibold text-primary hover:text-accent transition-colors duration-200 group"
              >
                Read the full piece
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm card-hover flex flex-col"
              >
                {/* Card top accent */}
                <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Category & Reading Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getCategoryStyle(post.category)}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {post.readingTime} min
                    </span>
                  </div>

                  {/* Date */}
                  <time className="text-sm text-gray-500 mb-3">
                    {formatDate(post.date)}
                  </time>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors duration-200 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-navy-300 mb-3 font-medium">
                    {post.subtitle}
                  </p>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-200 mt-auto"
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
              Sick of Political Spin?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Join a movement that believes in evidence over ideology.
              We&apos;ll tell you what&apos;s actually happening and what we&apos;d do about it.
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
