import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the Australian AI Party with a donation. Your contribution funds policy research, community outreach, and the development of AI governance tools for a smarter Australia.",
  openGraph: {
    title: "Donate to the Australian AI Party",
    description:
      "Your contribution powers evidence-based governance and AI policy research for all Australians.",
    type: "website",
  },
  alternates: {
    canonical: "/donate",
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
