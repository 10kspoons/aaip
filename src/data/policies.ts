export interface Policy {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  description: string[];
  keyPoints: string[];
}

export const policies: Policy[] = [
  {
    slug: "ai-assisted-decision-making",
    title: "AI-Assisted Decision Making in Parliament",
    summary:
      "Equipping parliamentarians with AI tools to analyse legislation, model policy outcomes, and make evidence-based decisions.",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    description: [
      "Australia's Parliament processes hundreds of bills each year, yet parliamentarians often lack the time and analytical tools to fully assess the long-term consequences of proposed legislation. The Australian AI Party believes that artificial intelligence can dramatically improve the quality of legislative decision-making by providing real-time analysis, economic modelling, and evidence synthesis — all while keeping elected representatives firmly in control of every decision.",
      "Our policy proposes the creation of a Parliamentary AI Advisory System (PAAS), a secure, non-partisan platform available to all members of parliament and their staff. PAAS would analyse draft legislation against existing law to identify conflicts and redundancies, model the projected economic, social, and environmental impacts of proposed policies, and synthesise relevant research from Australian and international sources. Crucially, this system would present options and evidence — never recommendations — ensuring that human judgement remains at the centre of democratic governance.",
      "AI can also transform the way parliamentarians engage with their constituents. Natural language processing tools can analyse thousands of submissions, emails, and survey responses to surface common themes, concerns, and priorities. Rather than relying on small sample sizes or anecdotal evidence, members of parliament would gain a comprehensive, data-driven understanding of what their electorates genuinely care about.",
      "We recognise that trust is paramount. The PAAS platform would be developed under open-source principles with full public documentation, subject to annual independent audits, and governed by a cross-party parliamentary committee. No AI system should operate behind closed doors in a democracy, and we are committed to ensuring that these tools enhance transparency rather than diminish it.",
    ],
    keyPoints: [
      "Establish a Parliamentary AI Advisory System (PAAS) available to all MPs and senators, providing real-time bill analysis and impact modelling",
      "Fund the development of AI-powered constituent feedback analysis tools that can process large volumes of public submissions while preserving privacy",
      "Mandate open-source development and annual independent audits of all parliamentary AI tools to ensure transparency and non-partisanship",
      "Create a cross-party Parliamentary AI Governance Committee to oversee the deployment, ethics, and evolution of AI tools in the legislative process",
      "Invest $120 million over four years in parliamentary AI infrastructure, training, and digital literacy programs for all elected officials and their staff",
    ],
  },
  {
    slug: "transparent-algorithmic-governance",
    title: "Transparent Algorithmic Governance",
    summary:
      "Every algorithm used in government must be explainable, auditable, and subject to democratic oversight.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    description: [
      "Government agencies across Australia already use algorithms to make decisions that profoundly affect people's lives — from welfare eligibility assessments and fraud detection to visa processing and criminal risk scoring. Yet most Australians have no idea which algorithms are being used, how they work, or whether they contain biases that could lead to unfair outcomes. The Australian AI Party believes this opacity is incompatible with democratic governance.",
      "We propose the Algorithmic Accountability Act, landmark legislation that would require every federal government agency to register all algorithmic decision-making systems in a public Algorithmic Transparency Register. Each entry would include a plain-language explanation of what the algorithm does, what data it uses, how it was tested for bias, and what human oversight mechanisms are in place. Australians would have the legal right to request an explanation of any algorithmic decision that affects them personally.",
      "Mandatory Algorithmic Impact Assessments would be required before any new automated decision-making system is deployed in government. These assessments, modelled on environmental impact statements, would evaluate potential risks including discrimination against protected groups, accuracy and error rates, effects on vulnerable populations, and implications for privacy and civil liberties. Systems assessed as high-risk would require ministerial sign-off and ongoing monitoring.",
      "To ensure ongoing accountability, we would establish an independent Office of the Algorithmic Auditor-General with the mandate and technical expertise to conduct regular audits of government algorithms. This office would have the power to compel agencies to modify or withdraw systems that demonstrate bias, inaccuracy, or disproportionate impact on particular communities. Annual public reports would keep Australians informed about how their government uses automated decision-making.",
    ],
    keyPoints: [
      "Introduce the Algorithmic Accountability Act requiring registration of all government algorithms in a public Algorithmic Transparency Register",
      "Mandate Algorithmic Impact Assessments before deployment of any automated decision-making system in federal government agencies",
      "Establish an independent Office of the Algorithmic Auditor-General with powers to audit, investigate, and enforce compliance across all agencies",
      "Guarantee every Australian the legal right to a human review and plain-language explanation of any algorithmic decision affecting them",
      "Require annual public reporting on algorithmic system performance, error rates, bias testing outcomes, and complaints received",
    ],
  },
  {
    slug: "digital-rights-privacy",
    title: "Digital Rights and Privacy",
    summary:
      "Establishing a comprehensive Digital Bill of Rights to protect Australians in the age of AI.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    description: [
      "As artificial intelligence becomes embedded in every aspect of daily life, Australians need robust legal protections that go far beyond existing privacy legislation. Our current Privacy Act, last substantially reformed in 1988, was designed for a world of paper records and fax machines — not facial recognition, behavioural profiling, and predictive analytics. The Australian AI Party will introduce a comprehensive Digital Bill of Rights that establishes clear, enforceable protections for every Australian in the digital age.",
      "At the heart of our Digital Bill of Rights is the principle of data sovereignty: Australians must have meaningful control over their personal data. This means genuine informed consent that goes beyond burying permissions in impenetrable terms of service, the right to access and port your data between services, the right to have your data deleted, and strict limits on how personal data can be collected, combined, and used for profiling. We will ban the practice of making essential services conditional on surrendering unnecessary personal data.",
      "We will establish strong safeguards against mass surveillance and the misuse of biometric data. The use of live facial recognition technology in public spaces by government agencies will require judicial authorisation on a case-by-case basis, with a blanket prohibition on untargeted mass surveillance. Private companies will be prohibited from collecting biometric data without explicit, informed, and freely given consent. The sale or sharing of biometric data will be banned outright.",
      "Our Digital Bill of Rights also enshrines the right to explanation: when an AI system makes or materially influences a decision affecting an individual — whether that concerns employment, credit, insurance, housing, or government services — that person has the right to understand what factors the system considered and how it reached its conclusion. We will also protect Australians against digital discrimination, ensuring that AI systems cannot be used to unfairly discriminate based on race, gender, age, disability, or socioeconomic status.",
    ],
    keyPoints: [
      "Introduce a Digital Bill of Rights enshrining data sovereignty, the right to explanation, and protection from algorithmic discrimination as legally enforceable rights",
      "Require genuine informed consent for personal data collection with a ban on conditioning essential services on unnecessary data surrender",
      "Prohibit untargeted mass facial recognition surveillance in public spaces and ban the sale or sharing of biometric data without explicit consent",
      "Establish an independent Digital Rights Commissioner with investigation and enforcement powers, including the ability to impose significant financial penalties",
      "Mandate data breach notification within 72 hours and introduce a statutory right to compensation for individuals harmed by data misuse or algorithmic discrimination",
    ],
  },
  {
    slug: "ai-education-workforce",
    title: "AI Education and Workforce Transition",
    summary:
      "Preparing every Australian for the AI economy through education, retraining, and support programs.",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
    description: [
      "The AI revolution will reshape Australia's economy as profoundly as the industrial revolution reshaped the 19th century. Research suggests that up to 40 percent of Australian jobs will be significantly affected by AI and automation over the next decade. While this transformation will create enormous new opportunities, it will also displace workers and demand entirely new skills. The Australian AI Party is committed to ensuring that no Australian is left behind in this transition — and that our education system prepares the next generation to thrive.",
      "In schools, we will integrate AI literacy into the national curriculum from Year 3 onwards, ensuring every Australian child understands the basics of how AI systems work, their capabilities and limitations, and the ethical questions they raise. This is not about turning every student into a programmer — it is about equipping future citizens and voters with the knowledge to make informed decisions in an AI-shaped world. At the secondary level, we will fund specialist AI and data science streams alongside expanded access to computer science education.",
      "For the existing workforce, we will establish the Australian AI Workforce Transition Fund, a $2 billion program providing free or heavily subsidised retraining for workers in industries most affected by automation. This fund will support workers in sectors like transport, logistics, retail, administrative services, and basic financial services to gain qualifications in growing fields including AI system management, data analysis, cybersecurity, renewable energy technology, and healthcare technology. The fund will include income support during retraining periods to ensure financial barriers do not prevent workers from upskilling.",
      "We will partner with universities and TAFEs to create flexible, modular AI qualification pathways that allow working Australians to build skills incrementally. Micro-credentials, online courses, and intensive bootcamps will complement traditional degree programs. We will also work with industry to develop AI apprenticeship programs that combine hands-on workplace experience with formal training, particularly targeting regional and rural communities where access to educational opportunities is often limited.",
    ],
    keyPoints: [
      "Integrate AI literacy into the national curriculum from Year 3, covering how AI works, its societal impacts, and ethical considerations",
      "Establish a $2 billion Australian AI Workforce Transition Fund providing free retraining, micro-credentials, and income support for workers displaced by automation",
      "Partner with universities and TAFEs to create flexible, modular AI qualification pathways including apprenticeships, bootcamps, and micro-credentials",
      "Fund 5,000 new university places annually in AI, machine learning, data science, and related disciplines, with scholarships targeting underrepresented groups",
      "Create regional AI skills hubs in every state and territory to ensure Australians outside major cities have equal access to training and retraining opportunities",
    ],
  },
  {
    slug: "open-data-government",
    title: "Open Data Government",
    summary:
      "Making government data open by default, enabling innovation and accountability.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    description: [
      "Government data belongs to the Australian people. Every year, federal agencies collect vast quantities of data on everything from health outcomes and environmental conditions to transport patterns and economic activity. Yet too much of this data remains locked away in siloed systems, inaccessible to researchers, entrepreneurs, journalists, and ordinary citizens who could put it to productive use. The Australian AI Party will make government data open by default, unlocking billions of dollars in potential economic and social value.",
      "We will establish the Australian Open Data Platform, a centralised, well-documented portal providing free access to government datasets in standardised, machine-readable formats. All federal agencies will be required to publish their non-sensitive datasets within 12 months, with clear metadata, data dictionaries, and API access for developers. We will adopt international open data standards to ensure Australian data is interoperable with global datasets, enabling cross-border research and innovation.",
      "Open data is not just about economic value — it is a powerful tool for democratic accountability. We will create real-time government performance dashboards that allow Australians to track how public money is being spent, how government services are performing, and whether policy outcomes match political promises. Budget data, procurement records, grants, and program outcomes will be published in accessible formats that enable genuine public scrutiny. When governments cannot hide behind data opacity, better decisions follow.",
      "Critically, open data must never come at the expense of individual privacy. Our Open Data Framework will include rigorous de-identification standards, privacy impact assessments for every published dataset, and strict prohibitions on publishing data that could enable re-identification of individuals. We will also ensure that Indigenous data sovereignty principles are respected, working with First Nations communities to develop culturally appropriate data governance frameworks that recognise their right to control data about their communities, lands, and cultural heritage.",
    ],
    keyPoints: [
      "Launch the Australian Open Data Platform requiring all federal agencies to publish non-sensitive datasets in standardised, machine-readable formats within 12 months",
      "Create real-time government performance dashboards tracking public spending, service delivery metrics, and policy outcomes against stated targets",
      "Mandate standardised API access to government datasets, enabling developers and researchers to build innovative applications and conduct analysis",
      "Implement rigorous privacy protections including mandatory de-identification standards, privacy impact assessments, and re-identification penalties",
      "Establish an Indigenous Data Sovereignty Framework developed in partnership with First Nations communities to govern data about Indigenous peoples, lands, and heritage",
    ],
  },
  {
    slug: "ethical-ai-framework",
    title: "Ethical AI Framework for Australia",
    summary:
      "Creating a world-leading regulatory framework that promotes AI innovation while protecting Australian values.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    description: [
      "Australia has an opportunity to become a global leader in ethical AI governance. While other nations rush to either deregulate AI entirely or impose heavy-handed restrictions that stifle innovation, we can chart a balanced course that encourages the development and deployment of AI systems that are safe, fair, transparent, and aligned with Australian values. The Australian AI Party's Ethical AI Framework will provide the regulatory certainty that industry needs while establishing robust safeguards that the public deserves.",
      "The centrepiece of our framework is the establishment of a National AI Ethics Board, an independent statutory authority bringing together experts in artificial intelligence, ethics, law, civil liberties, consumer protection, and community representation — including mandated representation from Indigenous Australians, people with disabilities, and culturally and linguistically diverse communities. The Board will develop and regularly update binding AI Ethics Standards, provide guidance to industry and government, and have the power to investigate complaints and refer serious breaches for enforcement action.",
      "We will introduce a risk-based regulatory approach modelled on international best practice. AI applications will be classified into risk tiers: minimal risk systems such as spam filters and recommendation engines will face light-touch requirements; limited risk systems like chatbots must meet transparency obligations; high-risk systems used in areas like employment, credit, healthcare, and criminal justice will face mandatory conformity assessments, human oversight requirements, and ongoing monitoring; and unacceptable risk applications — including social credit scoring, manipulative AI targeting vulnerable populations, and certain forms of predictive policing — will be prohibited outright.",
      "International cooperation is essential in a world where AI systems and data flows cross borders freely. We will work to establish mutual recognition agreements with like-minded nations, contribute to international AI governance frameworks, and ensure that Australia's regulatory approach is interoperable with those of our major trading partners. We will also champion Indigenous data sovereignty in international forums, advocating for the recognition of First Nations peoples' rights to govern data about their communities and cultural heritage in all international AI agreements.",
    ],
    keyPoints: [
      "Establish a National AI Ethics Board as an independent statutory authority with powers to set binding standards, investigate complaints, and enforce compliance",
      "Implement a risk-based regulatory framework classifying AI applications into tiers with proportionate requirements, from light-touch to mandatory conformity assessments",
      "Prohibit unacceptable-risk AI applications including social credit scoring systems, manipulative AI targeting vulnerable populations, and untargeted predictive policing",
      "Require mandatory AI Ethics Impact Assessments for all high-risk AI deployments in both government and private sector, with public disclosure of assessment outcomes",
      "Pursue international mutual recognition agreements and actively contribute to global AI governance frameworks while championing Indigenous data sovereignty principles",
    ],
  },
];
