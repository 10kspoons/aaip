"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const inputClasses =
  "rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors w-full";

const SUBJECTS = [
  "General Enquiry",
  "Membership",
  "Media",
  "Policy Feedback",
  "Volunteering",
  "Other",
] as const;

const faqs = [
  {
    question: "How can I get involved?",
    answer:
      "There are many ways! Join as a member, volunteer for events, contribute to policy discussions, or simply spread the word. Every contribution matters, whether it's sharing our vision on social media, attending a local meetup, or bringing your professional expertise to our policy working groups.",
  },
  {
    question: "Is the AAIP a registered political party?",
    answer:
      "We are in the process of registering with the Australian Electoral Commission. Registration requires 1,500 members who are on the electoral roll. By joining us now, you're helping us reach that milestone and establishing yourself as a founding member of the movement.",
  },
  {
    question: "Does the AAIP want AI to replace politicians?",
    answer:
      "Absolutely not. We believe AI should assist human decision-makers, not replace them. Our policy is 'AI advises, humans decide.' We want to give elected representatives better tools and data so they can make more informed decisions on behalf of all Australians.",
  },
  {
    question: "How are donations used?",
    answer:
      "We are committed to full financial transparency. Donations fund policy research, community outreach, technology infrastructure, and operational costs. We publish detailed financial reports and ensure every dollar goes toward building a smarter future for Australia.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(new Set());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <>
      {/* ===== Hero Banner ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-400 to-primary-900">
        <div className="neural-pattern absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <div className="section-padding container-max relative z-10 py-24 md:py-32">
          {/* Breadcrumb */}
          <nav className="mb-8 animate-fade-in-up" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </li>
              <li className="text-white/90">Contact</li>
            </ol>
          </nav>

          <h1
            className="animate-fade-in-up text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Get in Touch
          </h1>
          <p
            className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            We&apos;d love to hear from you
          </p>

          {/* Decorative floating element */}
          <div className="animate-float absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          </div>
        </div>
      </section>

      {/* ===== Main Content: Form + Contact Details ===== */}
      <section className="gradient-mesh bg-white">
        <div className="section-padding container-max">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl bg-white p-8 shadow-lg md:p-10">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-navy">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for your message! We&apos;ll get back to you
                      within 2 business days.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="mb-6 text-2xl font-bold text-navy">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={inputClasses}
                          placeholder="Your full name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputClasses}
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className={`${inputClasses} appearance-none bg-white`}
                        >
                          <option value="">Select a subject</option>
                          {SUBJECTS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className={inputClasses}
                          placeholder="How can we help?"
                        />
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="btn-primary w-full text-lg py-4"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-navy p-8 text-white md:p-10">
                {/* Party Office */}
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <svg
                      className="h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold">Party Office</h3>
                  </div>
                  <div className="ml-9 space-y-1 text-white/70">
                    <p>Australian AI Party</p>
                    <p>Level 1, 123 Innovation Drive</p>
                    <p>Canberra ACT 2601</p>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <svg
                      className="h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold">Email</h3>
                  </div>
                  <div className="ml-9 space-y-1 text-white/70">
                    <p>
                      <a
                        href="mailto:info@aaip.org.au"
                        className="transition-colors hover:text-accent"
                      >
                        info@aaip.org.au
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:media@aaip.org.au"
                        className="transition-colors hover:text-accent"
                      >
                        media@aaip.org.au
                      </a>{" "}
                      <span className="text-white/40">(press)</span>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <svg
                      className="h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold">Phone</h3>
                  </div>
                  <div className="ml-9 text-white/70">
                    <p>
                      <a
                        href="tel:+61261000000"
                        className="transition-colors hover:text-accent"
                      >
                        (02) 6100 0000
                      </a>
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-3">
                    <svg
                      className="h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold">Office Hours</h3>
                  </div>
                  <div className="ml-9 text-white/70">
                    <p>Monday to Friday, 9am - 5pm AEST</p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <svg
                      className="h-6 w-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold">Social Media</h3>
                  </div>
                  <div className="ml-9 flex gap-4">
                    {/* Twitter/X */}
                    <a
                      href="#"
                      className="text-white/70 transition-colors hover:text-accent"
                      aria-label="Twitter / X"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    {/* Facebook */}
                    <a
                      href="#"
                      className="text-white/70 transition-colors hover:text-accent"
                      aria-label="Facebook"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="#"
                      className="text-white/70 transition-colors hover:text-accent"
                      aria-label="Instagram"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    </a>
                    {/* YouTube */}
                    <a
                      href="#"
                      className="text-white/70 transition-colors hover:text-accent"
                      aria-label="YouTube"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="bg-gray-50">
        <div className="section-padding container-max">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-accent" />
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaqs.has(index);
              return (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
                  >
                    <span className="pr-4 text-lg font-semibold text-navy">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 leading-relaxed text-navy-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary to-accent-600">
        <div className="neural-pattern absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary-900/30" />
        <div className="section-padding container-max relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to help shape Australia&apos;s future?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/join" className="btn-cta px-8 py-4 text-lg">
              Join Us
            </Link>
            <Link href="/donate" className="btn-primary px-8 py-4 text-lg">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
