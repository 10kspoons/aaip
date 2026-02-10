# Australian AI Party (AAIP) — Website Project Brief

## Overview
Build a stunning, modern political party website for the **Australian AI Party** — a new federal political party dedicated to the greater use of AI in decision making and government.

## Hosting
- Domain: aaip.palmtech.com.au (initially)
- Infrastructure: K3s cluster on Raspberry Pi 5 (ARM64)
- Container registry: registry2.palmtech.com.au/bc-aaip:latest
- Namespace: barleycorn (existing K8s namespace)

## Design Inspiration
Study and draw from the best political party websites globally:
- Australian Greens (greens.org.au) — Clean, bold, action-oriented, grassroots feel
- US Democrats (democrats.org) — Polished, professional, strong CTAs
- UK Labour (labour.org.uk) — Modern, policy-focused, member engagement
- Pirate Party international sites — Tech-forward, transparency themes

## Key Design Principles
1. Futuristic but trustworthy — lean into tech aesthetics (subtle neural network patterns, clean data viz motifs) but keep it approachable and human
2. Bold hero sections with clear calls to action (Join, Donate, Learn More)
3. Mobile-first responsive design
4. Fast — Static/SSR, minimal JS, perfect Lighthouse scores
5. Accessible — WCAG 2.1 AA minimum

## Pages Required

### Home Page
- Hero banner with party name, tagline, and primary CTA (Join Us)
- Key policy pillars (3-4 cards)
- "Why AI in Government?" section with compelling stats/arguments
- Latest news/updates section
- Newsletter signup
- Footer with links, social media, legal

### About
- Party vision and mission
- Founding story
- Leadership team (placeholder)
- Party constitution summary

### Policies
- AI-Assisted Decision Making in Parliament
- Transparent Algorithmic Governance
- Digital Rights and Privacy
- AI Education and Workforce Transition
- Open Data Government
- Ethical AI Framework for Australia

### Join / Membership
- Membership registration form (name, email, address, DOB, electoral roll status)
- Membership tiers (Free supporter, Full member $25/yr)
- Benefits of membership

### Donate
- Donation form/page
- Why donate section
- Transparency about how funds are used

### News/Blog
- Blog listing page
- Individual post template

### Contact
- Contact form
- Party office details (placeholder)
- Social media links

## Tech Stack
- Next.js 15 with App Router (SSR + static generation)
- Tailwind CSS for styling
- TypeScript
- Containerized with Docker (ARM64 compatible)

## Party Identity

### Name
Australian AI Party (AAIP)

### Tagline
"Smarter decisions for all Australians"

### Color Palette
- Primary: Electric blue (#0066FF) — trust, technology, innovation
- Secondary: Deep navy (#0A1628) — authority, stability
- Accent: Cyan/teal (#00D4FF) — AI, digital, future
- White/light grays for backgrounds
- CTA: Warm amber (#FF9500)

## Party Values
- Transparency — All AI systems used in governance must be explainable and auditable
- Human oversight — AI assists decisions, humans make them
- Equity — AI benefits must reach all Australians
- Privacy — Strong data protection as a fundamental right
- Innovation — Embrace technology while managing risks
- Evidence-based — Policy driven by data and research, not ideology

## Party Aims
1. Promote the ethical and effective use of AI in Australian government decision-making
2. Advocate for transparent algorithmic governance where AI assists but humans retain oversight
3. Ensure all Australians benefit from AI advancement through education, retraining, and equitable access
4. Protect digital rights, data privacy, and democratic processes
5. Champion open data policies and government transparency
6. Foster Australia as a global leader in responsible AI governance

## Docker Build
Use node:22-alpine, multi-stage build. Next.js output: 'standalone' for minimal image.
Target platform: linux/arm64 (Raspberry Pi 5).
Expose port 3000.

## K8s Deployment
- Deployment name: aaip-website
- Namespace: barleycorn
- Labels: app: aaip-website
- Replicas: 2
- Image: registry2.palmtech.com.au/bc-aaip:latest
- imagePullSecrets: ptreg
- Resources: 50m/64Mi requests, 256Mi memory limit
- Liveness/readiness probes on port 3000 path /
- Service: ClusterIP, port 80 -> targetPort 3000

## Important Notes
- ARM64 target (Raspberry Pi 5)
- Keep bundle size small — shared 8GB RAM nodes
- Use next.config.js output: 'standalone'
- Git init the project
