import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy via-navy-700 to-primary-900">
      {/* Animated SVG Neural Network Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connection lines */}
          <g stroke="rgba(0,212,255,0.08)" strokeWidth="1">
            <line x1="100" y1="150" x2="300" y2="200" />
            <line x1="300" y1="200" x2="500" y2="100" />
            <line x1="500" y1="100" x2="700" y2="250" />
            <line x1="700" y1="250" x2="900" y2="180" />
            <line x1="900" y1="180" x2="1100" y2="300" />
            <line x1="200" y1="400" x2="400" y2="350" />
            <line x1="400" y1="350" x2="600" y2="450" />
            <line x1="600" y1="450" x2="800" y2="400" />
            <line x1="800" y1="400" x2="1000" y2="500" />
            <line x1="150" y1="600" x2="350" y2="550" />
            <line x1="350" y1="550" x2="550" y2="650" />
            <line x1="550" y1="650" x2="750" y2="580" />
            <line x1="750" y1="580" x2="950" y2="700" />
            <line x1="300" y1="200" x2="200" y2="400" />
            <line x1="500" y1="100" x2="600" y2="450" />
            <line x1="700" y1="250" x2="800" y2="400" />
            <line x1="900" y1="180" x2="1000" y2="500" />
            <line x1="400" y1="350" x2="350" y2="550" />
            <line x1="600" y1="450" x2="750" y2="580" />
            <line x1="150" y1="600" x2="100" y2="150" />
            <line x1="950" y1="700" x2="1100" y2="300" />
          </g>

          {/* Static nodes */}
          <g fill="rgba(0,212,255,0.15)">
            <circle cx="100" cy="150" r="3" />
            <circle cx="500" cy="100" r="4" />
            <circle cx="900" cy="180" r="3" />
            <circle cx="200" cy="400" r="3" />
            <circle cx="600" cy="450" r="4" />
            <circle cx="1000" cy="500" r="3" />
            <circle cx="350" cy="550" r="3" />
            <circle cx="950" cy="700" r="4" />
          </g>

          {/* Floating animated nodes */}
          <g fill="rgba(0,212,255,0.2)">
            <circle cx="300" cy="200" r="4">
              <animate
                attributeName="cy"
                values="200;190;200"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="700" cy="250" r="5">
              <animate
                attributeName="cy"
                values="250;240;250"
                dur="7s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="400" cy="350" r="3.5">
              <animate
                attributeName="cy"
                values="350;342;350"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="800" cy="400" r="4.5">
              <animate
                attributeName="cy"
                values="400;392;400"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="550" cy="650" r="3.5">
              <animate
                attributeName="cy"
                values="650;642;650"
                dur="5.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="750" cy="580" r="4">
              <animate
                attributeName="cy"
                values="580;570;580"
                dur="6.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="1100" cy="300" r="3">
              <animate
                attributeName="cy"
                values="300;290;300"
                dur="7.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="150" cy="600" r="4">
              <animate
                attributeName="cy"
                values="600;590;600"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Pulse glow nodes */}
          <g fill="rgba(0,102,255,0.12)">
            <circle cx="500" cy="100" r="12">
              <animate
                attributeName="opacity"
                values="0.1;0.25;0.1"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="12;16;12"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="700" cy="250" r="10">
              <animate
                attributeName="opacity"
                values="0.1;0.2;0.1"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="10;14;10"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="600" cy="450" r="14">
              <animate
                attributeName="opacity"
                values="0.08;0.18;0.08"
                dur="6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="14;18;14"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/30 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Party Name */}
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          Australian{" "}
          <span className="bg-gradient-to-r from-accent to-primary-300 bg-clip-text text-transparent">
            AI
          </span>{" "}
          Party
        </h1>

        {/* Tagline - more direct */}
        <p
          className="hero-summary text-xl md:text-2xl text-white/90 mb-4 font-medium animate-fade-in-up max-w-3xl mx-auto leading-relaxed"
          style={{
            animationDelay: "0.15s",
            textShadow: "0 1px 10px rgba(0,0,0,0.2)",
          }}
        >
          Citizen politicians. AI-augmented governance. Evidence over ideology.
        </p>
        <p
          className="text-lg md:text-xl text-white/60 mb-10 animate-fade-in-up max-w-2xl mx-auto"
          style={{ animationDelay: "0.2s" }}
        >
          Career politicians created the housing crisis, the reform drought, and the policy vacuum.
          Time for something different.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link href="/join" className="btn-cta text-lg px-8 py-4">
            Join the Movement
          </Link>
          <Link href="/blog" className="btn-outline text-lg px-8 py-4">
            Read Our Blog
          </Link>
        </div>

        {/* Stats Bar - updated with key themes */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 sm:px-10 py-5 gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
            {/* Stat 1: Housing */}
            <div className="flex items-center gap-3 sm:pr-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-tight">Fix Housing</p>
                <p className="text-white/50 text-xs">Real reform, not slogans</p>
              </div>
            </div>

            {/* Stat 2: Citizen Politicians */}
            <div className="flex items-center gap-3 sm:px-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-tight">Citizen Politicians</p>
                <p className="text-white/50 text-xs">Break the career monopoly</p>
              </div>
            </div>

            {/* Stat 3: AI Transparency */}
            <div className="flex items-center gap-3 sm:pl-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-tight">AI Transparency</p>
                <p className="text-white/50 text-xs">No more black boxes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
