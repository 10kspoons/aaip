"use client";

import Link from "next/link";
import { useState } from "react";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbSchema, faqSchema } from "@/lib/seo";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  icon: React.ReactNode;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    name: "About AI in Politics",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    faqs: [
      {
        question: "Are you saying AI should run the country?",
        answer:
          "No. We're saying AI should make it possible for better humans to run the country. Right now, you need 15-20 years in the political machine to be an effective parliamentarian. AI collapses that barrier. A farmer, a doctor, a small business owner can use AI tools for policy analysis, legislative drafting, constituent management, and impact modelling. We want a parliament of citizens empowered by AI, not a parliament of AI. The human provides judgment, values, lived experience, and accountability. The AI provides analytical horsepower and operational capacity.",
      },
      {
        question: "Isn't AI biased?",
        answer:
          "Yes. All AI systems reflect the data they're trained on, and that data reflects historical biases. This is a real problem that we take seriously. But here's the thing: human politicians are also biased - by ideology, by faction, by donors, by the last focus group. The difference is that AI bias can be audited, measured, and corrected. You can examine the training data. You can test for disparate outcomes. You can publish the methodology. We're not saying AI is unbiased. We're saying it's auditably biased, which is a massive improvement over unauditable human bias dressed up as principle.",
      },
      {
        question: "What happens when AI gets it wrong?",
        answer:
          "It will get things wrong. Guaranteed. The question is: what's the correction mechanism? Right now, when a politician makes a bad decision based on a dodgy briefing paper, the correction mechanism is the next election. Maybe. If anyone notices. With AI-augmented policy, the models are published. The inputs are visible. When the output is wrong, you can trace why it was wrong and fix the model. That's faster, more transparent, and more accountable. But let's be clear: AI is an advisor, not a decision-maker. The human representative votes. The human is accountable.",
      },
      {
        question: "Who's accountable when an AI advisor gives bad advice?",
        answer:
          "The elected representative. Full stop. Using AI tools doesn't transfer accountability any more than using a calculator transfers accountability for your tax return. The member read the analysis, made the judgment call, cast the vote. They own it. If the AI system has systematic flaws, the party and the member are responsible for auditing and correcting it. We'd publish our AI systems' methodologies, training data sources, and performance metrics. Radical transparency is the accountability mechanism.",
      },
    ],
  },
  {
    name: "About the Party",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
    faqs: [
      {
        question: "Are you left or right?",
        answer:
          "Neither. We're empirical. On some issues we'll sound left: we think negative gearing is a wealth transfer from young to old that should be reformed. We think multinationals should pay meaningful tax in Australia. We think social housing needs massive investment. On others we'll sound right: we believe in markets and competition. We think regulation should be smart, not just more. We think fiscal responsibility means investing wisely. We think people need work, not just income - which is why UBI is a cop-out. Evidence-based policy doesn't map neatly onto a left-right axis.",
      },
      {
        question: "How is this different from the Science Party?",
        answer:
          "The Science Party (now Fusion) was primarily about science funding and evidence-based policy in a broad sense. Good people, good intentions. AAIP is specifically about two things: (1) using AI to make citizen legislators viable - breaking the career politician monopoly, and (2) positioning Australia for the AI workforce transition that's already underway. We have a specific theory of change (win crossbench seats, force evidence-based policy into the national conversation) and a specific enabling technology (agentic AI for parliamentary operations). We're also blunter. We'll tell you negative gearing is a rort. We'll tell you retraining programs are mostly theatre.",
      },
      {
        question: "Who funds you?",
        answer:
          "We'll publish every donation over $100 in real-time on our website. Not because we're legally required to (the threshold is much higher) but because radical transparency is the whole point. We don't take corporate donations from industries we regulate policy on. We don't take property lobby money and then claim to have an independent housing policy. The funding model is small donors and membership fees. If we ever take a large donation that creates a perceived conflict, we'll disclose it and explain why we accepted it.",
      },
      {
        question: "What's your position on immigration?",
        answer:
          "Immigration is a net positive for Australia - the economic evidence on this is overwhelming. But the rate of immigration needs to match our capacity to build housing, fund hospitals, expand transport, and grow infrastructure. Right now, it doesn't. Net overseas migration has been running at 400,000+ per year while housing construction has been falling. The result is predictable: rents spike, hospital wait times grow, roads clog. People who raise this aren't racist - they're observing reality. AAIP position: Set immigration levels based on transparent modelling of infrastructure and housing capacity. Publish the model. Show the numbers. This isn't anti-immigration. It's pro-planning.",
      },
      {
        question: "What's your position on climate?",
        answer:
          "Climate change is real, it's human-caused, and it requires urgent action. That's not a political position - it's the scientific consensus. But urgency without a plan is just panic. We need: rapid but orderly transition to renewables (which is already happening because renewables are now cheaper); genuine transition support for fossil fuel communities - not 'learn to code' but actual industry development in affected regions; nuclear in the mix if the evidence supports it (we're genuinely agnostic - show us the economics); and carbon pricing as the most efficient mechanism.",
      },
      {
        question: "What's your position on defence?",
        answer:
          "Australia faces a more complex strategic environment than at any time since WWII. We need credible defence capability. Beyond that, we'll be honest: defence procurement is one of the most complex policy areas in government. What we do have is a commitment to evidence-based procurement (AI could dramatically improve cost modelling and project management) and deep scepticism of the way defence contracts are currently used as pork-barreling tools - building submarines in Adelaide when it might be cheaper and faster to build them elsewhere isn't defence policy, it's jobs policy wearing a uniform.",
      },
    ],
  },
  {
    name: "Workforce & AI Displacement",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    faqs: [
      {
        question: "Is AI going to take my job?",
        answer:
          "Maybe. It depends on what you do. If your job primarily involves processing information, applying rules to data, or generating documents from templates - accounting, paralegal work, basic financial analysis, routine coding, claims processing - then yes, AI can already do a significant portion of it. The question isn't if, but when your employer acts on it. If your job involves human judgment, creativity, physical dexterity, empathy, complex problem-solving, or managing people - the displacement timeline is longer. AI will augment these roles, not replace them. We think you deserve an honest, sector-by-sector assessment rather than panic or denial.",
      },
      {
        question: "What about UBI?",
        answer:
          "The maths don't work. 20 million Australian adults times $25,000/year equals $500 billion. The entire federal budget is about $680 billion. Even a modest UBI would require roughly doubling income tax or gutting every other program. It also polls terribly, because Australians fundamentally believe adults should contribute. Most importantly: people need work, not just money. Purpose, structure, identity, community. The mental health data on long-term unemployment is devastating, and it doesn't get better just because the cheque arrives on time. UBI is the answer you come up with when you don't understand the problem deeply enough to solve it properly.",
      },
      {
        question: "How do you retrain a 55-year-old accountant?",
        answer:
          "Honestly? You probably don't 'retrain' them in the way politicians mean it. The six-month coding bootcamp fantasy is just that - a fantasy. What you can do: Adjacent transition - she becomes an AI-augmented financial advisor, using 30 years of domain expertise alongside AI tools. Entrepreneurship - with the right support, she starts a specialised advisory practice. New hybrid roles - AI trainer for financial services, AI audit specialist. Income support that's realistic - not JobSeeker poverty rates. The honest truth is that some displaced workers over 50 will end up in lower-paid work. Pretending otherwise is cruel. The goal is to minimise that number and support the people it happens to.",
      },
    ],
  },
  {
    name: "Housing",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
    faqs: [
      {
        question: "How do you actually fix housing?",
        answer:
          "There's no single fix. Anyone promising one is lying. It's a combination: Supply - AI-optimised planning reform, fast-track approvals, infrastructure-linked rezoning, build more social housing (25,000 dwellings/year for a decade). Demand - reform negative gearing (grandfather existing, restrict new to new builds only), replace CGT discount with inflation indexation, replace stamp duty with broad-based land tax. Transparency - publish all modelling, real-time rent data, auditable allocation of infrastructure spending. Timeline? Honestly, a decade to meaningfully shift affordability. The distortions built up over 25 years. They won't unwind in one electoral term.",
      },
      {
        question: "Will you ban negative gearing?",
        answer:
          "Not ban - reform. Grandfathering protects existing investors (no retrospective changes). New negative gearing would only apply to newly constructed housing, shifting the subsidy from bidding up existing homes to building new supply. The evidence: Deloitte modelling shows this reduces prices approximately 4.6% nationally (8.3% Sydney/Melbourne) and rents by 0.5%. Not a crash - a correction. Labor took this to two elections and lost. The lesson politicians took: never touch it. The lesson they should have taken: explain it better. We'll explain it better - with published models anyone can check.",
      },
      {
        question: "What about foreign buyers?",
        answer:
          "They're a small part of the problem - 4-8% of purchases depending on the year. Domestic policy settings (negative gearing, CGT discount, supply restrictions) are far more impactful. We'd enforce existing FIRB rules properly (they're adequate, enforcement is weak) and use AI monitoring to flag breaches. But we won't scapegoat foreign buyers to avoid talking about the policies that actually drive unaffordability. That's what career politicians do, and it's dishonest.",
      },
    ],
  },
  {
    name: "Democracy",
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
    faqs: [
      {
        question: "Can an AI really represent me?",
        answer:
          "No. And we're not proposing it should. A human represents you. AI helps that human do it better - by modelling bill impacts on your electorate specifically, aggregating constituent views meaningfully (not just whoever yells loudest), and providing policy analysis that used to require a career in politics to access. Think of it like a doctor using diagnostic AI. The AI doesn't treat you - the doctor does. But the doctor with AI makes better decisions than the doctor without it.",
      },
      {
        question: "Isn't this just technocracy?",
        answer:
          "Technocracy is rule by unelected experts. We're proposing elected citizens augmented by AI tools. You still vote. Your representative still answers to you. The difference is that your representative might be a nurse who understands the health system instead of a staffer who reads briefing notes about it. If anything, this is more democratic than the current system, where power is concentrated in party machines that select candidates based on factional loyalty rather than competence.",
      },
      {
        question: "What stops the AI from being manipulated?",
        answer:
          "Same things that stop any system from being manipulated: transparency, auditing, and accountability. We'd publish our AI systems' methodologies, training data, and outputs. Independent audits. Open-source where possible. Multiple competing models rather than a single point of failure. Can AI systems be gamed? Yes. Can the current system be gamed? It already is - that's what lobbying, donor influence, and factional dealing are. At least with AI, you can audit the process.",
      },
      {
        question: "Don't we need experienced politicians?",
        answer:
          "We need experienced people. Not experienced politicians. The argument that you need years in parliament to be effective is a self-serving myth promoted by career politicians. What you actually need is domain expertise, good judgment, and the ability to learn. AI handles the procedural and analytical complexity. Peter Walsh was a wheat farmer and became one of Australia's best Finance Ministers. Neal Blewett was an academic and ran the world's best HIV/AIDS response. Their experience was in the real world, not in the political machine.",
      },
    ],
  },
  {
    name: "The Hard Questions",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    faqs: [
      {
        question: "Isn't this just for tech bros?",
        answer:
          "It's a fair concern, and we need to earn our way past it. Our housing policy helps renters. Our tax policy helps small businesses and wage earners. Our workforce transition policy helps displaced workers over 50. Our social housing commitment helps people on waitlists. None of that is 'tech bro' stuff. But yes, the founding energy will come from people who understand technology. The test is whether we build beyond that base. If our candidate slate in three years is all software engineers from the inner city, we've failed. If it includes a farmer from Toowoomba, a nurse from Logan, and a cafe owner from Geelong - we're on track.",
      },
      {
        question: "What about regional Australia?",
        answer:
          "Regional Australia is where the citizen politician tradition is strongest - and where it's been most betrayed. The Nationals used to represent farming communities. Now they represent mining lobbyists and internal factional games. AI augmentation is arguably more valuable in regional seats. A farmer MP can serve from her property without relocating to Canberra full-time. AI constituent management means a geographically huge electorate can be served effectively. Our housing policy addresses regional housing specifically (it's not just a Sydney/Melbourne problem anymore).",
      },
      {
        question: "What about people who aren't tech-savvy?",
        answer:
          "They don't need to be. You don't need to understand how a car engine works to drive one. The AI tools are for representatives and party operations. Constituents interact with their MP however they want - phone, email, in-person, town hall. The AI works behind the scenes to make the MP more responsive and better informed. For constituent engagement tools, we'd provide multiple access points: online, phone, in-person community sessions. Digital-first doesn't mean digital-only.",
      },
      {
        question: "Are you just another minor party that'll disappear?",
        answer:
          "Maybe. Most new parties do fail. We're honest about that. But the conditions are better than they've been in decades. The major parties are hollowed out. The crossbench is growing. The teals proved community-backed independents can win. And AI gives us operational capability that previous minor parties couldn't dream of. The play isn't to form government. It's to win enough crossbench seats to force evidence-based policy into the conversation. If we fail, we'll fail honestly and publicly, and we'll publish everything we learn so the next attempt starts further ahead.",
      },
      {
        question: "What if I agree with your ideas but don't trust AI?",
        answer:
          "Then you trust humans to use tools responsibly - which is all we're proposing. You probably don't fully trust the algorithm that decides your social media feed, or the AI that assesses your insurance claim. But you accept these because they work, and because there's accountability when they don't. We're proposing the same thing for governance, but with radical transparency layered on top. Every model published. Every input visible. Every output auditable. That's more trustworthy than the current system where decisions are made in ministerial offices with no visibility at all.",
      },
    ],
  },
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

function AccordionItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-navy group-hover:text-primary transition-colors pr-4">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-accent/10 transition-all duration-300 ${
            isOpen ? "bg-accent/10" : ""
          }`}
        >
          <svg
            className={`w-5 h-5 text-navy transition-transform duration-300 ${
              isOpen ? "rotate-180 text-accent" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed pr-12">{faq.answer}</p>
      </div>
    </div>
  );
}

function FAQCategorySection({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-navy to-primary-800 px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-accent">{category.icon}</span>
          <h2 className="text-xl font-bold text-white">{category.name}</h2>
        </div>
      </div>

      {/* Questions */}
      <div className="px-6">
        {category.faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "FAQ", url: `${SITE_URL}/faq` },
        ])}
      />
      <JsonLd data={faqSchema(allFaqs)} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-600 to-primary-900 pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="neural-pattern absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-max relative px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-1 rounded-full bg-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            FAQ
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Honest answers to hard questions. We don&apos;t dodge.
          </p>
        </div>
      </section>

      {/* Intro Box */}
      <section className="bg-gray-50 py-8">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-6 max-w-3xl mx-auto">
            <p className="text-navy-400 leading-relaxed">
              If we don&apos;t know, we&apos;ll say so. If the answer is uncomfortable,
              we&apos;ll say it anyway. That&apos;s the whole point of being different
              from career politicians.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <FAQCategorySection key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-700 to-navy">
        <div
          className="absolute inset-0 neural-pattern opacity-60 pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Got a Question We Haven&apos;t Answered?
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Ask us. If we don&apos;t know, we&apos;ll say so. If the answer is
              uncomfortable, we&apos;ll say it anyway.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-cta px-8 py-4 text-lg">
                Contact Us
              </Link>
              <Link href="/join" className="btn-outline px-8 py-4 text-lg">
                Join the Movement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
