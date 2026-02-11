import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join the Australian AI Party. Become a Free Supporter or Full Member ($25/year) and help shape the future of AI-powered governance in Australia.",
  openGraph: {
    title: "Join the Australian AI Party",
    description:
      "Become a member of the Australian AI Party and help shape smarter governance for all Australians.",
    type: "website",
  },
  alternates: {
    canonical: "/join",
  },
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
