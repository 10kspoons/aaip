import Link from "next/link";
import { SITE_URL, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export default function JoinPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Join", url: `${SITE_URL}/join` },
        ])}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy-700 to-primary-900 neural-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/50 pointer-events-none" />
        <div className="relative z-10 section-padding">
          <div className="container-max text-center py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Membership{" "}
              <span className="bg-gradient-to-r from-accent to-primary-300 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-accent/80 max-w-2xl mx-auto mb-8">
              We&apos;re building our membership platform. Check back soon to join
              Australia&apos;s most forward-thinking political party.
            </p>
            <Link href="/" className="btn-cta inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
