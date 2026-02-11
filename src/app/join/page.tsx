"use client";

import { useState, FormEvent } from "react";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, howToSchema, speakableSchema } from "@/lib/seo";

const STATES = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"] as const;

const inputClasses =
  "rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors w-full";

function CheckIcon({ className = "w-5 h-5 text-primary" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function JoinPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [dob, setDob] = useState("");
  const [tier, setTier] = useState("free");
  const [electoralRoll, setElectoralRoll] = useState(false);
  const [agreeConstitution, setAgreeConstitution] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Join", url: `${SITE_URL}/join` },
        ])}
      />
      <JsonLd
        data={howToSchema({
          name: "How to Join the Australian AI Party",
          description:
            "Join the Australian AI Party as a Free Supporter or Full Member to help shape AI-powered governance in Australia.",
          steps: [
            {
              name: "Choose your membership tier",
              text: "Select either Free Supporter ($0) for newsletters and public events, or Full Member ($25/year) for voting rights and the ability to shape party policy.",
            },
            {
              name: "Fill out the registration form",
              text: "Provide your name, email, address, date of birth, and confirm your electoral roll status.",
            },
            {
              name: "Submit your registration",
              text: "Agree to the party constitution and code of conduct, then complete your registration.",
            },
          ],
        })}
      />
      <JsonLd data={speakableSchema(["h1", ".aeo-summary"])} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy via-navy-700 to-primary-900 neural-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/50 pointer-events-none" />
        <div className="relative z-10 section-padding">
          <div className="container-max text-center py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Join the{" "}
              <span className="bg-gradient-to-r from-accent to-primary-300 bg-clip-text text-transparent">
                Movement
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-accent/80 max-w-2xl mx-auto">
              Be part of Australia&apos;s most forward-thinking political party
            </p>
          </div>
        </div>
      </section>

      {/* AEO Summary */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <p className="aeo-summary mx-auto max-w-3xl text-lg font-medium text-navy-300 leading-relaxed text-center">
            The Australian AI Party offers two membership tiers: Free Supporter (no cost, includes newsletters and event access) and Full Member ($25/year, includes voting rights and the ability to shape party policy). All Australian citizens and residents eligible to enrol on the electoral roll can join.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            Choose Your Membership
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Whether you want to show your support or have a direct voice in shaping policy, there&apos;s a membership tier for you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Supporter */}
            <div className="rounded-2xl border-2 border-gray-200 p-8 flex flex-col card-hover">
              <h3 className="text-2xl font-bold text-navy mb-2">Free Supporter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy">Free</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Newsletter and updates",
                  "Show your support",
                  "Access to public events",
                  "Online community access",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href="#register" className="btn-outline-dark text-center">
                Sign Up Free
              </a>
            </div>

            {/* Full Member */}
            <div className="relative rounded-2xl border-2 border-primary bg-gradient-to-b from-primary-50/50 to-white p-8 flex flex-col card-hover shadow-lg shadow-primary/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2 mt-2">Full Member</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-navy">$25</span>
                <span className="text-gray-500 text-lg">/year</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Free tier",
                  "Vote on party policies",
                  "Attend member meetings",
                  "Stand as a candidate",
                  "Shape the party's direction",
                  "Full member credentials",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href="#register" className="btn-cta text-center">
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Why Join?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Shape Policy */}
            <div className="bg-white rounded-2xl p-8 text-center card-hover shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Shape Policy</h3>
              <p className="text-gray-600">
                Have a direct say in the policies that will define Australia&apos;s AI future
              </p>
            </div>

            {/* Connect */}
            <div className="bg-white rounded-2xl p-8 text-center card-hover shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM6.75 9.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Connect</h3>
              <p className="text-gray-600">
                Join a community of forward-thinking Australians who believe in better governance
              </p>
            </div>

            {/* Make History */}
            <div className="bg-white rounded-2xl p-8 text-center card-hover shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Make History</h3>
              <p className="text-gray-600">
                Be part of the first political party dedicated to AI-powered democracy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
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
                <h3 className="text-2xl font-bold text-navy mb-3">
                  Thank you for registering!
                </h3>
                <p className="text-gray-600">
                  We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <h2 className="text-3xl font-bold text-navy text-center mb-2">
                  Register Your Interest
                </h2>
                <p className="text-gray-500 text-center mb-8">
                  Fill out the form below to join the Australian AI Party
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* First Name + Last Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={inputClasses}
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={inputClasses}
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
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

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClasses}
                      placeholder="04XX XXX XXX"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      required
                      autoComplete="street-address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className={inputClasses}
                      placeholder="Street address"
                    />
                  </div>

                  {/* Suburb + State + Postcode */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="suburb"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Suburb <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="suburb"
                        type="text"
                        required
                        autoComplete="address-level2"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        className={inputClasses}
                        placeholder="Suburb"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        State <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="state"
                        required
                        autoComplete="address-level1"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className={`${inputClasses} appearance-none bg-white`}
                      >
                        <option value="">Select</option>
                        {STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="postcode"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Postcode <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="postcode"
                        type="text"
                        required
                        autoComplete="postal-code"
                        inputMode="numeric"
                        pattern="[0-9]{4}"
                        maxLength={4}
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className={inputClasses}
                        placeholder="0000"
                      />
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label
                      htmlFor="dob"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="dob"
                      type="date"
                      required
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className={inputClasses}
                    />
                  </div>

                  {/* Membership Tier */}
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700 mb-3">
                      Membership Tier <span className="text-red-500">*</span>
                    </legend>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-gray-300 p-4 transition-colors hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary-50/30">
                        <input
                          type="radio"
                          name="tier"
                          value="free"
                          checked={tier === "free"}
                          onChange={(e) => setTier(e.target.value)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <div>
                          <span className="font-medium text-navy">Free Supporter</span>
                          <span className="text-gray-500 ml-2">$0</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-gray-300 p-4 transition-colors hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary-50/30">
                        <input
                          type="radio"
                          name="tier"
                          value="full"
                          checked={tier === "full"}
                          onChange={(e) => setTier(e.target.value)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <div>
                          <span className="font-medium text-navy">Full Member</span>
                          <span className="text-gray-500 ml-2">$25/yr</span>
                        </div>
                      </label>
                    </div>
                  </fieldset>

                  {/* Checkboxes */}
                  <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={electoralRoll}
                        onChange={(e) => setElectoralRoll(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-sm text-gray-700">
                        I am enrolled on the Australian electoral roll or eligible to enrol{" "}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={agreeConstitution}
                        onChange={(e) => setAgreeConstitution(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the party constitution and code of conduct{" "}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button type="submit" className="btn-cta w-full text-lg py-4">
                      Complete Registration
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* AEC Notice */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 bg-white">
        <div className="container-max">
          <p className="text-xs text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">
            Membership of the Australian AI Party is subject to the requirements of the
            Australian Electoral Commission. By joining, you confirm you are an Australian
            citizen or eligible to enrol.
          </p>
        </div>
      </section>
    </>
  );
}
