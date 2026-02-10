import Link from "next/link";

const articles = [
  {
    category: "Party News",
    categoryColor: "bg-cta/10 text-cta-600",
    date: "February 10, 2026",
    title: "Australian AI Party Officially Launches",
    excerpt:
      "Today marks the official launch of the Australian AI Party. Our mission: to bring evidence-based, AI-assisted governance to the heart of Australian democracy and build a smarter future for all.",
    slug: "aaip-officially-launches",
  },
  {
    category: "Policy",
    categoryColor: "bg-primary-50 text-primary",
    date: "February 8, 2026",
    title: "Our Vision for AI-Assisted Governance",
    excerpt:
      "How artificial intelligence can help elected representatives make better decisions faster, with full transparency and accountability to the Australian public.",
    slug: "vision-for-ai-governance",
  },
  {
    category: "Opinion",
    categoryColor: "bg-accent/10 text-accent-700",
    date: "February 5, 2026",
    title: "Why Australia Needs an AI Policy Framework",
    excerpt:
      "Australia is falling behind global leaders in AI regulation. Without a comprehensive policy framework, we risk losing economic opportunities and failing to protect citizens' digital rights.",
    slug: "australia-needs-ai-framework",
  },
];

export default function NewsPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 rounded-full bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Latest Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            News, policy analysis, and insights from the AAIP
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card top accent */}
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${article.categoryColor}`}
                  >
                    {article.category}
                  </span>
                  <time className="text-sm text-gray-400">{article.date}</time>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-primary transition-colors duration-200 leading-snug">
                  <Link href={`/news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/news/${article.slug}`}
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

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center text-primary font-semibold text-lg hover:text-accent transition-colors duration-200 group"
          >
            View all updates
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
      </div>
    </section>
  );
}
