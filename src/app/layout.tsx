import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Australian AI Party | Smarter Decisions for All Australians",
    template: "%s | Australian AI Party",
  },
  description:
    "The Australian AI Party advocates for the ethical and effective use of artificial intelligence in government decision-making. Join us in building a smarter, more transparent democracy.",
  keywords: [
    "Australian AI Party",
    "AAIP",
    "artificial intelligence",
    "AI governance",
    "Australian politics",
    "digital rights",
    "transparent government",
  ],
  openGraph: {
    title: "Australian AI Party",
    description: "Smarter decisions for all Australians",
    siteName: "Australian AI Party",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AustralianAIParty",
    creator: "@AustralianAIParty",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
