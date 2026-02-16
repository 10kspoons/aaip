export interface PolicyFaq {
  question: string;
  answer: string;
}

export interface Policy {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  description: string[];
  keyPoints: string[];
  faqs: PolicyFaq[];
}

export const policies: Policy[] = [
  {
    slug: "housing-affordability",
    title: "Housing Affordability",
    summary:
      "Fixing Australia's broken housing market with evidence-based supply reform, tax restructure, and massive social housing investment. No magic bullets - real policy.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    description: [
      "Australia's housing market isn't just expensive - it's broken. The national mean dwelling price hit $1,045,400 in September 2025. In Sydney, it's $1,295,900. The median house price-to-income ratio is around 12:1 in Sydney and 9:1 nationally. Historically, 3-4:1 was considered affordable.",
      "This isn't a market failure. It's a policy choice. Negative gearing costs the federal budget $10.9 billion per year in foregone tax revenue - projected to hit $12.3 billion in 2024-25. That's billions subsidising people who already own property at the expense of people who don't. The CGT discount creates a wealth-generation machine for existing asset holders. Supply is constrained by planning systems captured by NIMBYism.",
      "The Reserve Bank warned in 2003 that resources were being 'disproportionately channelled into' property investment. That was over twenty years ago. The median Sydney house price has roughly tripled since then. We've done nothing.",
      "There's no single fix - anyone promising one is lying. It requires supply-side planning reform, demand-side tax restructure, massive social housing investment, and the political courage to make changes that create short-term losers for long-term benefit. Career politicians haven't touched this because property owners vote more reliably than renters. We will."
    ],
    keyPoints: [
      "Reform negative gearing: grandfather existing arrangements, but restrict new negative gearing to newly constructed housing only - shifting the subsidy from bidding up existing homes to building new supply",
      "Replace the CGT discount with inflation indexation (the pre-1999 system) - more economically rational and removes the speculation arbitrage",
      "AI-optimised planning reform: fast-track compliant approvals, transparent zoning modelling, data-driven infrastructure-linked rezoning. Kill NIMBYism with data.",
      "Build 25,000 new social housing dwellings per year for a decade - the Grattan Institute recommendation. Fund it honestly.",
      "Replace stamp duty with broad-based land tax as the Henry Review recommended 16 years ago",
      "Publish all housing policy modelling publicly. Let anyone check our working."
    ],
    faqs: [
      {
        question: "Will you ban negative gearing?",
        answer:
          "Not ban - reform. Grandfathering protects existing investors. New negative gearing would only apply to newly constructed housing, shifting the subsidy to where it actually adds supply. Deloitte modelling shows this reduces prices approximately 4.6% nationally and rents by 0.5%. Not a crash - a correction. Labor took this to two elections and lost. The lesson politicians took: never touch it. The lesson they should have taken: explain it better."
      },
      {
        question: "What about foreign buyers?",
        answer:
          "Foreign buyers account for 4-8% of purchases. They're a small part of the problem. Domestic policy settings - negative gearing, CGT discount, supply restrictions - are far more impactful. We'd enforce existing FIRB rules properly (they're adequate, enforcement is weak) but we won't scapegoat foreign buyers to avoid talking about the policies that actually drive unaffordability."
      },
      {
        question: "How quickly will housing become affordable?",
        answer:
          "Honestly? A decade to meaningfully shift affordability. The distortions built up over 25 years won't unwind in one electoral term. Anyone promising faster results is lying. The goal is to bend the curve: slow price growth, increase supply, shift incentives away from speculation."
      },
      {
        question: "Will house prices crash?",
        answer:
          "No. We're proposing reform, not shock therapy. Grandfathering existing negative gearing protects current investors. The modelled impact is around 4.6% price reduction nationally - a correction, not a crash. Millions of Australians have their life savings in their homes. Deliberately crashing prices would be devastating and irresponsible."
      }
    ]
  },
  {
    slug: "tax-reform",
    title: "Tax Reform & Economic Policy",
    summary:
      "Australia's tax system is rigged. Your local cafe pays 25% while multinationals pay single digits. 138 Henry Review recommendations, 3 implemented. Time to fix it.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    description: [
      "In 2008, the Rudd government commissioned the Henry Tax Review - a root and branch review of Australia's entire tax system. The panel spent two years doing rigorous work and came back with 138 recommendations. Evidence-based. Carefully modelled. Exactly the kind of reform agenda that could have set Australia up for the next twenty years.",
      "The government implemented three of them. Three out of 138. Why? Because every reform creates losers, and career politicians whose careers depend on not creating losers will never touch them.",
      "The result is a tax system that's been rigged over decades. The top 1% wealth share has grown from roughly 15% in the early 1990s to around 25% today. Multinationals use base erosion and profit shifting to pay effective tax rates in the single digits while your local cafe owner pays 25% on every dollar of profit. The OECD estimates BEPS costs governments globally $100-240 billion per year.",
      "This isn't about punitive taxation or 'eat the rich' populism. It's about the blindingly obvious observation that when a small business can't structure transfer pricing to a subsidiary in Ireland, and a multinational can, something's broken. When negative gearing subsidises property speculation while productive investment gets no comparable break, the incentives are backwards."
    ],
    keyPoints: [
      "Implement OECD Pillar Two: 15% global minimum tax for multinationals. Australia signed on - now enforce it properly",
      "Minimum effective corporate tax rate that can't be engineered away through transfer pricing and profit shifting",
      "Close the negative gearing arbitrage that makes property speculation more attractive than productive investment",
      "Replace stamp duty with land tax - the Henry Review's most ignored recommendation",
      "Fund the ATO properly to challenge multinational profit shifting. Currently it's David vs Goliath with David's budget cut every year",
      "Publish transparent, auditable tax modelling for every reform. Open-source the models. Let citizens see the numbers."
    ],
    faqs: [
      {
        question: "Are you proposing higher taxes?",
        answer:
          "We're proposing fairer taxes. That means higher effective rates for multinationals currently paying single digits, and potentially lower complexity for small businesses and individuals. The goal is a broader base at fair rates - not punitive taxes that drive investment offshore, but closing the loopholes that let sophisticated players game the system while everyone else pays full freight."
      },
      {
        question: "Won't companies just leave Australia?",
        answer:
          "This argument has been used to block every tax reform in history. The OECD's global minimum tax framework exists precisely because unilateral action has limits. When Australia implements Pillar Two alongside other developed economies, there's nowhere to hide. And frankly, if a company's entire business model depends on not paying meaningful tax anywhere, we're not losing much."
      },
      {
        question: "What about the Henry Review recommendations?",
        answer:
          "We'd implement the major ones that have been gathering dust for 16 years: land tax replacing stamp duty, genuine simplification of personal income tax, reform of negative gearing and CGT discount, proper resource rent taxation. The evidence hasn't changed - only the political courage to act on it has been missing."
      }
    ]
  },
  {
    slug: "ai-workforce-transition",
    title: "AI Workforce Transition",
    summary:
      "AI is eliminating white-collar jobs right now. Politicians won't say it. We will. Here's the honest assessment and what actually needs to happen.",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    description: [
      "Let's be blunt, because nobody in parliament will be: AI is going to eliminate millions of white-collar jobs. Not might. Not could. Is. It's already started. Accountants. Paralegals. Junior lawyers. Insurance assessors. Financial analysts. Junior software developers. Copywriters. Customer service. These aren't hypothetical future casualties - AI can already do significant portions of these jobs.",
      "The Big Four consulting firms are already quietly restructuring. Law firms are discovering AI can do in minutes what used to require weeks of paralegal work. Banks have been shedding staff for years. This is not a drill.",
      "The comfortable lies won't help you. UBI won't work - the maths don't add up ($500 billion for a modest version vs $680 billion total federal budget), and people need work for purpose and identity, not just money. You can't regulate your way out - Australia is 26 million people in a global economy of 8 billion. Government retraining programs have abysmal track records. The 52-year-old accountant isn't becoming a cybersecurity specialist.",
      "What might actually work: adjacent role transition (accountant to AI-augmented financial advisor), entrepreneurship support for people with deep domain expertise, new hybrid work categories (AI trainers, audit specialists), and tax reform to ensure AI productivity gains are shared rather than hoarded by shareholders. We need to treat voters like adults who can handle the truth, not children who need to be protected from reality."
    ],
    keyPoints: [
      "Commission honest sector-by-sector assessment of AI job displacement risk. Publish it. Let people see where they stand.",
      "Fund genuine transition pathways: adjacent role shifts using existing expertise, not fantasy retraining into completely different careers",
      "Support SME entrepreneurship as the landing zone for displaced workers - they have domain expertise and networks",
      "Reform tax to share AI productivity gains: when companies replace workers with AI, those productivity gains shouldn't flow entirely to shareholders",
      "Create new work categories that combine human judgment with AI capability - these need to be designed and supported",
      "Portable benefits not tied to traditional employment - the future is more fluid"
    ],
    faqs: [
      {
        question: "Is AI going to take my job?",
        answer:
          "Maybe. If your job primarily involves processing information, applying rules to data, or generating documents from templates, AI can already do a significant portion of it. The question is when your employer acts on it. If your job involves human judgment, creativity, empathy, complex problem-solving, or managing people, the timeline is longer. We think you deserve an honest assessment rather than either panic or denial."
      },
      {
        question: "Why won't UBI work?",
        answer:
          "The maths don't work. 20 million adults times $25,000 equals $500 billion. The federal budget is $680 billion. It would require roughly doubling income tax. It polls terribly because Australians believe adults should contribute. And most importantly, people need work - purpose, structure, identity - not just income. The mental health data on long-term unemployment is devastating."
      },
      {
        question: "What about government retraining programs?",
        answer:
          "The evidence from every previous automation wave shows displaced workers over 45 overwhelmingly end up in lower-paid work or leave the workforce. The idea that a 52-year-old accountant will become a cybersecurity specialist through a six-month bootcamp is fantasy. What works: adjacent transitions using existing expertise with new tools. Not 'learn to code' but 'use AI alongside the knowledge you've built over decades.'"
      },
      {
        question: "Why are career politicians useless on this issue?",
        answer:
          "They don't understand the technology. They're terrified of saying 'your job is going away.' They offer vague 'retraining' promises that sound like a plan but achieve nothing. And not one member of the current cabinet has ever managed a workforce through a technology transition. They've never had to look an employee in the eye and explain that their role is being automated."
      }
    ]
  },
  {
    slug: "citizen-legislators",
    title: "Citizen Legislators & AI-Augmented Governance",
    summary:
      "Break the career politician monopoly. AI tools can make it possible for farmers, doctors, and business owners to serve effectively without becoming lifelong politicians.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    description: [
      "In 1983, Bob Hawke's cabinet included a wheat farmer who became Finance Minister, a cop, a teacher, a solicitor who marched against Vietnam. These were citizens who rocked up to parliament because they had something useful to contribute - expertise, lived experience, perspective that didn't come from writing briefing papers about a world they'd never operated in.",
      "Today's parliament is a monoculture. The pathway to power has narrowed: university politics, political staffer, factional player, safe seat, frontbench. Jim Chalmers, the current Treasurer, has a PhD on Paul Keating and was chief of staff to Wayne Swan. His real-world economic experience is entirely theoretical. He's running the economy and his deepest private sector experience is writing a thesis about someone else running the economy.",
      "AI can break this monopoly. The argument against citizen politicians has always been: 'You need years to understand parliament, to understand the policy landscape.' AI demolishes that barrier. A farmer from the Darling Downs could have AI agents that synthesise legislation, model electorate impacts, and brief her in minutes. Her expertise - water policy, agricultural economics, supply chains - stays sharp because she's not drowning in parliamentary procedure.",
      "We're not proposing AI replaces politicians. We're proposing AI makes it possible for different kinds of people to be politicians - specifically, the citizen legislators who've been squeezed out. People with careers to return to. People who aren't desperate to hold their seats. People who can afford to be brave."
    ],
    keyPoints: [
      "AI policy advisors for MPs: deep specialist knowledge in every policy domain, not generalist staffers who know a little about everything",
      "Electorate agents that model bill impacts specifically for each electorate - real data, not party talking points",
      "AI constituent management that lets geographically huge electorates be served effectively",
      "Legislative drafting assistance that doesn't require party infrastructure - and the strings that come with it",
      "Transparent, auditable policy modelling that anyone can check",
      "Enable representatives to maintain their outside careers rather than becoming full-time political careerists"
    ],
    faqs: [
      {
        question: "Are you saying AI should run the country?",
        answer:
          "No. We're saying AI should make it possible for better humans to run the country. The human provides judgment, values, lived experience, accountability. The AI provides analytical horsepower and operational capacity. A parliament of citizens empowered by AI, not a parliament of AI."
      },
      {
        question: "Don't we need experienced politicians?",
        answer:
          "We need experienced people. Not experienced politicians. Peter Walsh was a wheat farmer and became one of Australia's best Finance Ministers. Neal Blewett was an academic and ran the world's best HIV/AIDS response. Their experience was in the real world, not in the political machine. That's the experience we need more of."
      },
      {
        question: "Isn't this unconstitutional?",
        answer:
          "AI as a policy advisor requires no constitutional change at all - it's just a tool. The more radical version where AI might instruct votes is legally questionable. But the practical version - citizen politicians using AI tools to serve effectively - is completely achievable within current frameworks."
      }
    ]
  },
  {
    slug: "transparent-algorithmic-governance",
    title: "Transparent Algorithmic Governance",
    summary:
      "Government already uses algorithms to make decisions about your life. You have no idea how they work. That's unacceptable in a democracy.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    description: [
      "Government agencies across Australia already use algorithms to make decisions that profoundly affect people's lives - from welfare eligibility and fraud detection to visa processing and criminal risk scoring. Yet most Australians have no idea which algorithms are being used, how they work, or whether they contain biases that lead to unfair outcomes.",
      "Robodebt was the warning we should have heeded. An automated income-averaging system issued hundreds of thousands of incorrect debt notices to vulnerable Australians. The algorithm was fundamentally flawed - it compared annual income data with fortnightly payments in a way that was mathematically invalid - but because the system operated as a black box, errors went undetected for years. The human cost was catastrophic.",
      "Robodebt wasn't an aberration. It was a warning. Modern machine learning systems are far more complex than that basic averaging algorithm. Neural networks can process millions of variables and produce outputs that even their developers cannot fully explain. If we couldn't catch errors in simple calculations, how will we detect bias in systems whose internal logic is opaque?",
      "Transparency is not just a technical safeguard - it's a democratic imperative. Citizens have a right to understand how decisions about their lives are being made. If we can't see how a system works, we can't hold anyone responsible when it fails."
    ],
    keyPoints: [
      "Algorithmic Transparency Register: every automated decision-making system used by government catalogued with plain-language explanations",
      "Mandatory Algorithmic Impact Assessments before deployment - modelled on environmental impact statements, subject to public comment",
      "Independent Algorithmic Auditor with power to inspect, test, and order remediation of biased or inaccurate systems",
      "Legal right for every Australian to a human review and explanation of any algorithmic decision affecting them",
      "Annual public reporting on error rates, bias testing outcomes, and complaints",
      "AI-driven monitoring to catch the next Robodebt before it destroys lives"
    ],
    faqs: [
      {
        question: "What algorithms does government currently use?",
        answer:
          "Welfare eligibility assessments, fraud detection, visa processing, criminal risk scoring, tax auditing, healthcare resource allocation, and dozens more. Most operate with minimal public visibility. The Algorithmic Transparency Register would change that."
      },
      {
        question: "Can Australians challenge algorithmic decisions?",
        answer:
          "Under our proposed Algorithmic Accountability Act, every Australian would have the legal right to request a human review and plain-language explanation of any algorithmic decision affecting them. Currently, you often can't even find out an algorithm was involved."
      },
      {
        question: "Won't transparency help people game the system?",
        answer:
          "This is the excuse used to keep every system opaque. Transparency doesn't mean publishing the specific thresholds that trigger an audit. It means publishing the methodology, the data sources, the testing for bias, and the human oversight mechanisms. Gaming requires hiding the rules. Accountability requires showing them."
      }
    ]
  },
  {
    slug: "digital-rights-privacy",
    title: "Digital Rights and Privacy",
    summary:
      "The Privacy Act is from 1988 - designed for paper records and fax machines. Time for a Digital Bill of Rights that actually protects Australians.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    description: [
      "Australia's Privacy Act was last substantially reformed in 1988 - designed for a world of paper records and fax machines. It has no answer for facial recognition, behavioural profiling, predictive analytics, or the routine combination of datasets that makes your life an open book to companies and governments alike.",
      "At the heart of our Digital Bill of Rights is data sovereignty: Australians must have meaningful control over their personal data. Not the fiction of 'consent' buried in impenetrable terms of service, but genuine informed consent, the right to access and port your data, the right to deletion, and strict limits on how data can be collected and combined for profiling.",
      "We will establish strong safeguards against mass surveillance. Live facial recognition in public spaces by government agencies should require judicial authorisation - not blanket deployment with no oversight. Private companies should be prohibited from collecting biometric data without explicit consent. The sale of biometric data should be banned outright.",
      "When AI makes or influences a decision about you - whether for employment, credit, insurance, or government services - you should have the right to understand what factors were considered and how the system reached its conclusion. This isn't about revealing trade secrets. It's about basic accountability."
    ],
    keyPoints: [
      "Digital Bill of Rights enshrining data sovereignty, right to explanation, and protection from algorithmic discrimination",
      "Genuine informed consent requirements - no more burying permissions in unreadable terms of service",
      "Prohibit untargeted mass facial recognition surveillance in public spaces",
      "Ban the sale or sharing of biometric data without explicit consent",
      "Independent Digital Rights Commissioner with investigation and enforcement powers",
      "Mandatory data breach notification within 72 hours with statutory compensation for harm"
    ],
    faqs: [
      {
        question: "Would facial recognition be banned?",
        answer:
          "Untargeted mass surveillance in public spaces would be prohibited. Government agencies would need judicial authorisation for specific, targeted use. Private companies would need explicit, informed consent to collect biometric data. This isn't about stopping legitimate security - it's about stopping the normalisation of surveillance."
      },
      {
        question: "What is the right to explanation?",
        answer:
          "When AI makes or influences a decision affecting you - employment, credit, insurance, housing, government services - you have the legal right to understand what factors the system considered and how it reached its conclusion. Not 'the computer said no' but actual accountability."
      },
      {
        question: "How would this affect businesses?",
        answer:
          "Companies that already respect customer privacy and use data responsibly would see little change. Companies whose business model depends on harvesting and selling personal data without meaningful consent would need to adapt. That's the point. If your business model requires deceiving customers about how you use their data, it's not a business model worth protecting."
      }
    ]
  }
];
