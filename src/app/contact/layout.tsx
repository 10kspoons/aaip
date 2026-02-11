import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Australian AI Party. Contact us about membership, media enquiries, policy feedback, volunteering, or general questions.",
  openGraph: {
    title: "Contact the Australian AI Party",
    description:
      "Reach out to the Australian AI Party with questions, feedback, or media enquiries.",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
