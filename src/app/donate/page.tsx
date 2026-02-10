"use client";

import { useState } from "react";

const AMOUNTS = [10, 25, 50, 100, 250] as const;

const PIE_SEGMENTS = [
  { label: "Campaigns & Outreach", percent: 40, color: "#0066FF" },
  { label: "Policy Research", percent: 25, color: "#00D4FF" },
  { label: "Operations", percent: 20, color: "#0A1628" },
  { label: "Community Programs", percent: 15, color: "#FF9500" },
];

function buildConicGradient() {
  let angle = 0;
  const stops: string[] = [];
  for (const seg of PIE_SEGMENTS) {
    const start = angle;
    angle += (seg.percent / 100) * 360;
    stops.push(`${seg.color} ${start}deg ${angle}deg`);
  }
  return `conic-gradient(${stops.join(", ")})`;
}

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [isCustom, setIsCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    isCitizen: false,
    understandsDisclosure: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const displayAmount = isCustom
    ? customAmount
      ? `$${customAmount}`
      : "$0"
    : selectedAmount
      ? `$${selectedAmount}`
      : "$0";

  function handleAmountClick(amount: number) {
    setIsCustom(false);
    setSelectedAmount(amount);
  }

  function handleCustomClick() {
    setIsCustom(true);
    setSelectedAmount(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-400 to-navy overflow-hidden">
        <div className="absolute inset-0 neural-pattern" />
        <div className="relative section-padding">
          <div className="container-max text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
              Support the Future of
              <span className="block text-accent mt-2">Australian Democracy</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto sm:text-xl">
              Your contribution powers evidence-based governance
            </p>
          </div>
        </div>
      </section>

      {/* Donation Amount Selection */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-navy text-center mb-8">
              Choose Your Contribution
            </h2>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountClick(amount)}
                  className={`rounded-lg border-2 px-4 py-4 text-lg font-semibold transition-colors ${
                    !isCustom && selectedAmount === amount
                      ? "bg-primary text-white border-primary"
                      : "border-gray-300 text-navy hover:border-primary"
                  }`}
                >
                  ${amount}
                </button>
              ))}
              <button
                type="button"
                onClick={handleCustomClick}
                className={`rounded-lg border-2 px-4 py-4 text-lg font-semibold transition-colors ${
                  isCustom
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 text-navy hover:border-primary"
                }`}
              >
                Custom
              </button>
            </div>

            {isCustom && (
              <div className="mt-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="rounded-lg border border-gray-300 pl-8 pr-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors w-full"
                  />
                </div>
              </div>
            )}

            <p className="text-center text-gray-500 mt-6 text-sm">
              One-time contribution
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Why Donate
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Research */}
            <div className="bg-white rounded-xl p-8 shadow-md card-hover text-center">
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Fund Policy Research
              </h3>
              <p className="text-gray-600">
                Support rigorous, evidence-based policy development on AI
                governance
              </p>
            </div>

            {/* Campaigns */}
            <div className="bg-white rounded-xl p-8 shadow-md card-hover text-center">
              <div className="w-14 h-14 bg-cta-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-cta"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.75.75 0 01-1.021-.27l-.112-.189a8.966 8.966 0 01-1.04-3.212m5.307-6.003A8.968 8.968 0 0116.5 12c0 1.682-.462 3.257-1.267 4.605m2.135-8.21a2.252 2.252 0 010 3.605m-4.868.757V7.5a2.25 2.25 0 012.25-2.25h.75a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-.75a2.25 2.25 0 01-2.25-2.25v-.878"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Support Campaigns
              </h3>
              <p className="text-gray-600">
                Help us reach more Australians with our message of smarter
                governance
              </p>
            </div>

            {/* AI Tools */}
            <div className="bg-white rounded-xl p-8 shadow-md card-hover text-center">
              <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-accent-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Build AI Tools
              </h3>
              <p className="text-gray-600">
                Fund the development of open-source AI governance tools for
                transparency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Where Your Money Goes
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              We believe in complete financial transparency
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-3xl mx-auto">
            {/* Pie Chart */}
            <div
              className="w-64 h-64 rounded-full shrink-0 shadow-lg"
              style={{ background: buildConicGradient() }}
            />

            {/* Legend */}
            <div className="flex flex-col gap-5">
              {PIE_SEGMENTS.map((seg) => (
                <div key={seg.label} className="flex items-center gap-3">
                  <span
                    className="w-4 h-4 rounded-full shrink-0"
                    style={{ backgroundColor: seg.color }}
                  />
                  <span className="text-navy font-medium">{seg.label}</span>
                  <span className="text-gray-500 font-semibold ml-auto">
                    {seg.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            {submitted ? (
              /* Thank You State */
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>

                {/* Confetti-style decorative dots */}
                <div className="relative mb-6">
                  <div className="absolute -top-16 left-1/4 w-3 h-3 rounded-full bg-primary animate-bounce" />
                  <div className="absolute -top-12 right-1/4 w-2 h-2 rounded-full bg-cta animate-bounce [animation-delay:150ms]" />
                  <div className="absolute -top-20 left-1/3 w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:300ms]" />
                  <div className="absolute -top-14 right-1/3 w-3 h-3 rounded-full bg-green-400 animate-bounce [animation-delay:100ms]" />
                  <div className="absolute -top-18 left-1/2 w-2 h-2 rounded-full bg-cta-300 animate-bounce [animation-delay:250ms]" />
                </div>

                <h2 className="text-3xl font-bold text-navy mb-3">
                  Thank You!
                </h2>
                <p className="text-gray-600 text-lg mb-2">
                  Your {displayAmount} contribution makes a difference.
                </p>
                <p className="text-gray-500">
                  A receipt has been sent to{" "}
                  <span className="font-medium text-navy">
                    {formData.email}
                  </span>
                  .
                </p>
              </div>
            ) : (
              /* Donation Form */
              <form onSubmit={handleSubmit}>
                <div className="text-center mb-8">
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                    Donation Amount
                  </p>
                  <p className="text-4xl font-bold text-primary">
                    {displayAmount}
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors w-full"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-1.5"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors w-full"
                      placeholder="jane@example.com.au"
                    />
                  </div>

                  <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.isCitizen}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isCitizen: e.target.checked,
                          })
                        }
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20 shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        I am an Australian citizen or permanent resident{" "}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.understandsDisclosure}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            understandsDisclosure: e.target.checked,
                          })
                        }
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/20 shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        I understand donations over $14,500 are disclosed to the
                        AEC
                      </span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-cta w-full mt-8 text-lg">
                  Donate {displayAmount}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Electoral Disclosure Notice */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto bg-gray-100 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Electoral Disclosure Notice
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Under Australian electoral law, political donations above the
              disclosure threshold must be reported to the Australian Electoral
              Commission (AEC). Donations from foreign sources are prohibited.
              All donations are processed in accordance with the Commonwealth
              Electoral Act 1918.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
