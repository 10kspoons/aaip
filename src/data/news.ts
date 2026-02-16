export interface NewsPost {
  slug: string;
  title: string;
  date: string; // ISO format
  author: string;
  category: string;
  excerpt: string;
  content: string[]; // Array of paragraphs
}

export const newsPosts: NewsPost[] = [
  {
    slug: "citizen-politicians-ai-augmented-governance",
    title: "Citizen Politicians and the End of the Career Politician Monopoly",
    date: "2026-02-15",
    author: "AAIP",
    category: "Opinion",
    excerpt:
      "Where did all the farmers go? How the pipeline from uni politics to staffer to safe seat killed diverse thinking in Australian politics - and how AI changes everything.",
    content: [
      "In 1983, Bob Hawke put together a cabinet that actually looked like the country it was supposed to run. Peter Walsh, Finance Minister, was a wheat and sheep farmer from Doodlakine. Bill Hayden had been a Queensland cop. Barry Jones was a high school teacher. John Button had been a solicitor who marched against Vietnam.",
      "These weren't career politicians. They were citizens who rocked up to parliament because they had something useful to contribute. Expertise. Lived experience. A perspective that didn't come from sitting in a minister's office writing briefing papers about a world they'd never actually operated in.",
      "Now look at the front bench of any major party today. Try to find the farmer. The doctor. The engineer. The small business owner who's actually met a payroll, chased a late-paying customer, lain awake at 2am wondering if the cash flow will cover wages on Thursday. Good luck with that.",
      "Something profound shifted in Australian politics over the past three decades. The pathway to power narrowed to a single lane: university politics, political staffer, factional player, safe seat, frontbench.",
      "Consider Jim Chalmers, the current Treasurer: university, PhD on Paul Keating, chief of staff to Wayne Swan, parliament. His real-world economic experience is entirely theoretical. This bloke is running the economy and his deepest private sector experience is writing a thesis about someone else running the economy.",
      "The skills that get you preselected - factional deal-making, media management, saying nothing of substance with great conviction - are completely different from the skills that make good policy.",
      "Here's the brutal result: between 1983 and 2000, Australia got floating the dollar, compulsory super, Medicare, tariff reform, the GST, and gun reform. Since then? Twenty-five years of nothing comparable. Productivity growth averaged 2.2% in the 1990s. It's been around 1% recently. The reform drought is real.",
      "This is exactly why AI-augmented governance matters. The argument against citizen politicians has always been: 'You need years to understand parliament, to understand the policy landscape.' AI demolishes that barrier.",
      "A farmer from the Darling Downs could have AI agents that synthesise legislation, model electorate impacts, and brief her in minutes. Her expertise - water policy, agricultural economics, supply chains - stays sharp because she's not drowning in parliamentary procedure.",
      "We're not proposing AI replaces politicians. We're proposing AI makes it possible for different kinds of people to be politicians. People with careers to return to. People who aren't desperate to hold their seats. People who can afford to be brave.",
      "The AAIP doesn't need to win government. The play is to win enough crossbench seats to force evidence-based policy into the national conversation. To prove citizen legislators can work. To break the career politician monopoly from the inside.",
      "Reform is possible again. We just need the right people in parliament to make it happen."
    ],
  },
  {
    slug: "aaip-officially-launches",
    title: "Australian AI Party Officially Launches",
    date: "2026-02-10",
    author: "AAIP Media Team",
    category: "Party News",
    excerpt:
      "Today marks a historic moment in Australian politics as the Australian AI Party officially launches, bringing a bold new vision for evidence-based, AI-assisted governance to the national stage.",
    content: [
      "Today marks a historic moment in Australian politics. The Australian AI Party has officially launched, bringing a bold new vision for governance to the national stage. We believe that artificial intelligence, deployed ethically and transparently, can help elected representatives make better decisions for all Australians \u2014 decisions grounded in evidence, free from ideological bias, and accountable to the public.",
      "The founding vision of the AAIP is simple yet transformative: harness the power of AI to analyse complex policy challenges, model outcomes, and present decision-makers with the clearest possible picture of how their choices will affect communities across the country. From healthcare resourcing to climate adaptation, from infrastructure planning to education funding, AI can process vast datasets and surface insights that no team of human analysts could match in speed or comprehensiveness.",
      "Our initial policy platform centres on three pillars: transparent algorithmic governance, universal digital rights, and an Australian AI safety framework. We are calling for all government algorithms that affect citizens' lives to be open to public audit. We are advocating for a Digital Rights Charter that enshrines data privacy, algorithmic fairness, and the right to human review of automated decisions. And we are proposing an independent AI Safety Authority with the power to set standards, conduct audits, and enforce compliance across both government and the private sector.",
      "We recognise that AI is not a silver bullet. Technology alone cannot solve the deep structural challenges facing Australia. That is why we are committed to a human-centred approach: AI should advise, never decide. Elected representatives remain accountable for every policy outcome. Our role is to ensure they have the best possible tools at their disposal.",
      "We are calling on Australians from every background to join this movement. Whether you are a technologist, a teacher, a nurse, a farmer, or a student \u2014 the future of AI governance affects you. Visit our membership page to become a founding member and help us shape a smarter, fairer Australia.",
    ],
  },
  {
    slug: "vision-ai-assisted-governance",
    title: "Our Vision for AI-Assisted Governance",
    date: "2026-02-08",
    author: "Dr. Sarah Chen",
    category: "Policy",
    excerpt:
      "What would Parliament look like if every decision was informed by the best available evidence? We explore how AI-assisted governance could transform Australian democracy while keeping humans firmly in control.",
    content: [
      "What would Parliament look like if every decision was informed by the best available evidence, analysed at a depth and speed that human teams alone simply cannot achieve? This is not science fiction. Governments around the world are already experimenting with AI-assisted policy analysis, and Australia has the opportunity to lead rather than follow.",
      "In Estonia, the government has deployed AI systems to streamline public services and reduce bureaucratic delays by up to 80 percent. Singapore's Government Technology Agency uses machine learning to optimise everything from public transport routing to pandemic response. The European Parliament has piloted AI tools that summarise thousands of pages of legislative amendments in minutes, allowing MEPs to focus on the substance of debate rather than drowning in paperwork. These are not hypothetical use cases \u2014 they are working systems delivering measurable benefits today.",
      "In Australia, AI-assisted governance could transform how we approach some of our most pressing challenges. Imagine a system that models the downstream effects of a proposed tax change across every electorate, accounting for local employment patterns, housing costs, and demographic trends. Imagine real-time monitoring of bushfire risk that synthesises satellite data, weather forecasts, and ground-sensor readings to give emergency services a critical head start. Imagine an education funding model that adapts to student outcomes rather than relying on outdated census data.",
      "The critical safeguard is transparency. Every AI system used in governance must be auditable, explainable, and subject to democratic oversight. We propose a framework in which the algorithms that inform policy are published in a national register, their training data is documented, and independent experts can review their outputs. No black boxes. No hidden biases. Just better information for better decisions.",
      "AI-assisted governance does not mean handing power to machines. It means giving our elected representatives \u2014 and the public servants who support them \u2014 the most powerful analytical tools ever created, while maintaining the human judgement, empathy, and accountability that democracy demands. That is the vision the Australian AI Party is committed to making real.",
    ],
  },
  {
    slug: "why-australia-needs-ai-policy",
    title: "Why Australia Needs an AI Policy Framework",
    date: "2026-02-05",
    author: "Priya Sharma",
    category: "Opinion",
    excerpt:
      "While other nations race ahead with AI regulation, Australia risks being left behind. Without a comprehensive policy framework, we face economic disadvantage and a failure to protect citizens' rights in the age of artificial intelligence.",
    content: [
      "While other nations race ahead with comprehensive AI regulation, Australia is at risk of being left behind \u2014 not just economically, but in our ability to protect citizens' fundamental rights in the age of artificial intelligence. The European Union's AI Act, which came into full effect in 2025, established the world's first comprehensive legal framework for AI, classifying systems by risk and imposing strict requirements on high-risk applications. Canada, Japan, and South Korea have all introduced national AI strategies with dedicated funding and regulatory bodies. Australia, by contrast, has produced discussion papers.",
      "The regulatory gap is not merely theoretical. Right now, Australian government agencies and private companies are deploying AI systems that affect millions of people \u2014 in hiring decisions, loan approvals, insurance pricing, welfare eligibility, and criminal risk assessments \u2014 with minimal oversight and no mandatory transparency requirements. Citizens have no legal right to know whether an algorithm played a role in a decision that affects their lives, let alone to challenge that decision.",
      "The economic stakes are equally significant. Australia's AI sector is projected to contribute over $300 billion to the national economy by 2030, but only if we create the regulatory certainty that businesses and investors need. Companies developing AI solutions are already choosing to headquarter in jurisdictions with clear rules, where they know what is expected of them and can plan accordingly. Without a framework, we are not just failing to attract investment \u2014 we are actively pushing it offshore.",
      "What should Australia do? First, we need an AI Safety Authority with genuine enforcement powers, not another advisory body that produces reports nobody reads. Second, we need mandatory algorithmic impact assessments for any AI system used in high-stakes decision-making, whether by government or the private sector. Third, we need to invest in the research infrastructure and talent pipeline that will allow Australia to be a producer of AI innovation, not merely a consumer of technologies developed elsewhere.",
      "The window for action is narrowing. Every month that passes without a coherent Australian AI policy framework is a month in which unregulated systems make consequential decisions about Australian lives, a month in which AI talent and investment flow overseas, and a month in which our democratic institutions fall further behind the technology they are supposed to govern. The Australian AI Party exists because we believe this issue is too important to wait.",
    ],
  },
  {
    slug: "membership-now-open",
    title: "Membership Now Open: Join the Future of Politics",
    date: "2026-02-03",
    author: "AAIP Media Team",
    category: "Party News",
    excerpt:
      "We're thrilled to announce that membership of the Australian AI Party is now open to all Australians. Be among the first to join a political movement built on evidence, transparency, and the responsible use of technology.",
    content: [
      "We are thrilled to announce that membership of the Australian AI Party is now open to all Australians aged 16 and over. Whether you are deeply technical or simply believe that government decisions should be informed by the best available evidence, there is a place for you in this movement. We are building something genuinely new in Australian politics, and we want you to be part of it from the ground floor.",
      "Membership is available in three tiers. Our Standard membership is free and open to everyone \u2014 it gives you voting rights at party meetings, access to our member forums, and a voice in shaping our policy platform. Our Supporter tier, at $5 per month, includes all Standard benefits plus early access to policy papers, invitations to member briefings with our policy team, and priority registration for party events. Our Champion tier, at $20 per month, adds one-on-one sessions with our technology advisory board, recognition on our supporters page, and the opportunity to participate in our AI governance working groups.",
      "But membership is about more than tiers and benefits. It is about community. The challenges of governing in the age of AI cannot be solved by technologists alone, or by politicians alone. They require the collective wisdom of Australians from every background \u2014 educators who understand how AI is changing classrooms, healthcare workers who see the promise and the peril of algorithmic diagnostics, farmers who know what precision agriculture could mean for regional communities, and young people who will live with the consequences of the decisions we make today.",
      "Joining is simple. Visit our membership page, choose your tier, and you are in. Every new member strengthens our voice and brings us closer to the 500-member threshold required for registration with the Australian Electoral Commission. We are not just building a party \u2014 we are building a movement for smarter, more transparent governance.",
      "We also want to hear from you. Our policy platform is a living document, and every member has the opportunity to propose, debate, and vote on policy positions through our online deliberation platform. This is democracy as it should be: participatory, evidence-informed, and genuinely open. Join us today and help shape the future of Australian politics.",
    ],
  },
  {
    slug: "transparent-algorithms-in-government",
    title: "The Case for Transparent Algorithms in Government",
    date: "2026-01-28",
    author: "James Okonkwo",
    category: "Policy",
    excerpt:
      "Government agencies already use algorithms to make decisions that affect millions of Australians. Shouldn't we know how they work? We examine why algorithmic transparency is not just a technical issue \u2014 it's a democratic imperative.",
    content: [
      "Government agencies already use algorithms to make decisions that affect millions of Australians \u2014 from calculating welfare payments and allocating social housing to flagging tax returns for audit and assessing visa applications. Yet in most cases, the public has no visibility into how these systems work, what data they rely on, or whether they contain biases that systematically disadvantage certain groups. This is not a hypothetical concern. We have already seen what happens when algorithmic decision-making goes wrong without adequate oversight.",
      "The Robodebt scheme remains the most devastating example. Between 2016 and 2019, an automated income-averaging system issued hundreds of thousands of incorrect debt notices to welfare recipients, many of whom were among the most vulnerable people in the country. The algorithm was fundamentally flawed \u2014 it compared annual income data with fortnightly payment records in a way that was mathematically invalid \u2014 but because the system operated as a black box, the errors went undetected for years. The human cost was catastrophic: financial ruin, psychological trauma, and in some cases, loss of life. The Royal Commission into Robodebt concluded that the scheme was a \u201ccruel\u201d failure of governance.",
      "Robodebt was not an aberration \u2014 it was a warning. As AI systems become more sophisticated and more widely deployed across government, the potential for similar failures grows. The difference is that modern machine learning systems are far more complex than the simple averaging algorithm behind Robodebt. Neural networks can process millions of variables and produce outputs that even their developers cannot fully explain. If we could not catch errors in a basic calculation, how will we detect bias in a system whose internal logic is opaque even to experts?",
      "The solution is mandatory algorithmic transparency. The Australian AI Party proposes a three-part framework. First, a National Algorithm Register that catalogues every automated decision-making system used by federal, state, and local government, including a plain-language description of what each system does, what data it uses, and how it has been tested for bias. Second, mandatory Algorithmic Impact Assessments before any new system is deployed, modelled on environmental impact statements and subject to public comment. Third, an independent Algorithmic Auditor with the power to inspect any government AI system, commission independent testing, and order remediation where problems are found.",
      "Transparency is not just a technical safeguard \u2014 it is a democratic imperative. Citizens have a right to understand how decisions about their lives are being made, and to challenge those decisions when they are wrong. Algorithms are tools, and like all tools, they can be used well or badly. The difference lies in accountability. If we cannot see how a system works, we cannot hold anyone responsible when it fails. The Australian AI Party believes that every Australian deserves to know when an algorithm is making decisions about their life, and to have confidence that those decisions are fair, accurate, and open to scrutiny.",
    ],
  },
];
