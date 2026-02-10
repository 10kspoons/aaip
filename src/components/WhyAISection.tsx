const arguments_list = [
  {
    title: "Evidence over ideology",
    description:
      "Policy driven by data analysis, not political games",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Faster, fairer decisions",
    description:
      "AI processes thousands of submissions in hours, not months",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Transparent reasoning",
    description:
      "Every AI recommendation comes with full explanation",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Human oversight always",
    description:
      "AI advises. Elected representatives decide.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function WhyAISection() {
  return (
    <section className="section-padding bg-gray-50 gradient-mesh relative overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm tracking-wider text-primary font-semibold uppercase mb-3">
              Why AI in Government?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
              Better Data.{" "}
              <span className="text-primary">Better Decisions.</span>{" "}
              Better Australia.
            </h2>

            <div className="space-y-6">
              {arguments_list.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Data Visualization */}
          <div className="hidden md:flex items-center justify-center" aria-hidden="true">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Outermost ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_40s_linear_infinite]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/40" />
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40" />
                <div className="absolute -bottom-1 left-1/4 w-2.5 h-2.5 rounded-full bg-accent/30" />
              </div>

              {/* Second ring */}
              <div className="absolute inset-8 lg:inset-10 rounded-full border-2 border-dashed border-accent/20 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute -top-1 right-1/4 w-2.5 h-2.5 rounded-full bg-primary/50 animate-pulse-glow" />
                <div className="absolute bottom-0 left-1/3 w-2 h-2 rounded-full bg-accent/50" />
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-3 h-3 rounded-full bg-accent/30 animate-pulse-glow" />
              </div>

              {/* Third ring */}
              <div className="absolute inset-16 lg:inset-20 rounded-full border border-primary/15 animate-[spin_25s_linear_infinite]">
                <div className="absolute -bottom-1 right-1/3 w-2 h-2 rounded-full bg-primary/40" />
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent/40 animate-pulse-glow" />
              </div>

              {/* Fourth ring */}
              <div className="absolute inset-24 lg:inset-[7.5rem] rounded-full border border-dashed border-accent/15 animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute top-0 right-1/4 w-2 h-2 rounded-full bg-primary/30" />
              </div>

              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative animate-float">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/30">
                    <svg
                      className="w-12 h-12 lg:w-14 lg:h-14 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      {/* Brain / AI icon */}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                      />
                    </svg>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl -z-10 animate-pulse-glow" />
                </div>
              </div>

              {/* Floating data labels */}
              <div className="absolute top-4 right-0 bg-white rounded-lg shadow-lg px-3 py-2 text-xs font-semibold text-navy animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-accent">+</span> Data Analysis
              </div>
              <div className="absolute bottom-8 left-0 bg-white rounded-lg shadow-lg px-3 py-2 text-xs font-semibold text-navy animate-float" style={{ animationDelay: "2s" }}>
                <span className="text-primary">+</span> Policy Insights
              </div>
              <div className="absolute bottom-0 right-8 bg-white rounded-lg shadow-lg px-3 py-2 text-xs font-semibold text-navy animate-float" style={{ animationDelay: "3s" }}>
                <span className="text-accent">+</span> Transparency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
