# AAIP Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a stunning, production-ready political party website for the Australian AI Party using Next.js 15 + Tailwind CSS + TypeScript, containerized for ARM64 K3s deployment.

**Architecture:** Next.js 15 App Router with static generation for all pages. Tailwind CSS for styling with a custom design system based on the party's color palette. Multi-stage Docker build targeting ARM64. All content is static/hardcoded (no CMS). Forms are client-side only with no backend processing.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Docker (node:22-alpine), K3s/Kubernetes

---

### Task 1: Scaffold Next.js 15 Project

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `.gitignore`

**Step 1: Create the Next.js project**

Run:
```bash
cd /home/paul/source/aaip
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-turbopack
```
Note: Say yes to overwrite if prompted. This scaffolds into the current directory.

**Step 2: Configure next.config.ts for standalone output**

Update `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
```

**Step 3: Configure Tailwind with party colors**

Update `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066FF",
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0066FF",
          600: "#0052CC",
          700: "#003D99",
          800: "#002966",
          900: "#001433",
        },
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EAF0",
          100: "#C5CAD6",
          200: "#8B95AC",
          300: "#516082",
          400: "#2D3B55",
          500: "#0A1628",
          600: "#081220",
          700: "#060E18",
          800: "#040A10",
          900: "#020508",
        },
        accent: {
          DEFAULT: "#00D4FF",
          50: "#E6FBFF",
          100: "#CCF7FF",
          200: "#99EEFF",
          300: "#66E6FF",
          400: "#33DDFF",
          500: "#00D4FF",
          600: "#00AACC",
          700: "#007F99",
          800: "#005566",
          900: "#002A33",
        },
        cta: {
          DEFAULT: "#FF9500",
          50: "#FFF5E6",
          100: "#FFEBCC",
          200: "#FFD699",
          300: "#FFC266",
          400: "#FFAD33",
          500: "#FF9500",
          600: "#CC7700",
          700: "#995900",
          800: "#663C00",
          900: "#331E00",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 4: Set up global CSS**

Update `src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-navy antialiased;
  }

  ::selection {
    @apply bg-accent/30;
  }
}

@layer components {
  .btn-primary {
    @apply inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2;
  }

  .btn-cta {
    @apply inline-flex items-center justify-center rounded-lg bg-cta px-6 py-3 text-base font-semibold text-white transition-all hover:bg-cta-600 focus:outline-none focus:ring-2 focus:ring-cta/50 focus:ring-offset-2;
  }

  .btn-outline {
    @apply inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-navy focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2;
  }

  .section-padding {
    @apply px-4 py-16 sm:px-6 md:py-24 lg:px-8;
  }

  .container-max {
    @apply mx-auto max-w-7xl;
  }

  .gradient-mesh {
    background-image:
      radial-gradient(at 20% 80%, rgba(0, 212, 255, 0.15) 0px, transparent 50%),
      radial-gradient(at 80% 20%, rgba(0, 102, 255, 0.15) 0px, transparent 50%),
      radial-gradient(at 50% 50%, rgba(0, 212, 255, 0.05) 0px, transparent 50%);
  }

  .neural-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='0' cy='0' r='2'/%3E%3Ccircle cx='60' cy='0' r='2'/%3E%3Ccircle cx='0' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}
```

**Step 5: Verify it builds**

Run:
```bash
cd /home/paul/source/aaip && npm run build
```
Expected: Build succeeds

**Step 6: Commit**

```bash
git add -A && git commit -m "feat: scaffold Next.js 15 project with Tailwind and party design system"
```

---

### Task 2: Layout Components (Header, Footer, Navigation)

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/MobileMenu.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create the Header component**

Create `src/components/Header.tsx` - responsive header with:
- Party logo/name on left
- Desktop nav links: Home, About, Policies, News, Contact
- CTA buttons: Join, Donate
- Mobile hamburger menu
- Sticky header with backdrop blur on scroll
- Use `"use client"` for scroll and mobile menu state

**Step 2: Create the MobileMenu component**

Create `src/components/MobileMenu.tsx`:
- Full-screen overlay menu for mobile
- All nav links + Join/Donate CTAs
- Smooth open/close animation
- `"use client"` component

**Step 3: Create the Footer component**

Create `src/components/Footer.tsx`:
- 4-column footer: About, Quick Links, Get Involved, Contact
- Social media icons (Twitter/X, Facebook, Instagram, YouTube)
- Newsletter signup form (email input + submit)
- Legal links: Privacy Policy, Terms, Electoral Disclosure
- Copyright notice
- Authorized by line (Australian electoral requirement)
- Neural pattern background

**Step 4: Update root layout**

Update `src/app/layout.tsx`:
- Import Inter font from next/font/google
- Include Header and Footer
- Set metadata: title, description, OpenGraph

**Step 5: Verify it builds**

Run: `npm run build`
Expected: Build succeeds

**Step 6: Commit**

```bash
git add -A && git commit -m "feat: add responsive header, footer, and mobile navigation"
```

---

### Task 3: Home Page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/PolicyPillars.tsx`
- Create: `src/components/WhyAISection.tsx`
- Create: `src/components/NewsPreview.tsx`
- Create: `src/components/NewsletterSignup.tsx`

**Step 1: Create HeroSection**

Create `src/components/HeroSection.tsx`:
- Full-viewport hero with deep navy gradient background
- Animated neural network SVG pattern overlay (subtle dots connected by lines)
- Party name "Australian AI Party" in large bold text
- Tagline "Smarter decisions for all Australians"
- Two CTA buttons: "Join the Movement" (amber CTA) and "Our Policies" (outline)
- Subtle floating/pulse animation on decorative elements
- Stats bar below: "6 Key Policies", "Transparent AI", "Human Oversight"

**Step 2: Create PolicyPillars**

Create `src/components/PolicyPillars.tsx`:
- Section title "Our Policy Pillars"
- 4 cards in a grid:
  1. AI-Assisted Governance - icon, title, short description
  2. Digital Rights & Privacy - icon, title, short description
  3. AI Education & Jobs - icon, title, short description
  4. Open Data Government - icon, title, short description
- Each card has: icon (SVG), title, 2-line description, "Learn more" link
- Cards have hover effect: subtle lift + accent border glow
- Link to /policies page

**Step 3: Create WhyAISection**

Create `src/components/WhyAISection.tsx`:
- Split layout: text on left, visual on right
- Title "Why AI in Government?"
- 3-4 compelling argument blocks with icons:
  1. "Evidence over ideology" - Policy driven by data analysis, not political games
  2. "Faster, fairer decisions" - AI can process thousands of submissions in hours
  3. "Transparent reasoning" - Every AI recommendation comes with full explanation
  4. "Human oversight always" - AI advises, elected representatives decide
- Right side: stylized data visualization graphic (SVG/CSS)
- Background with subtle gradient mesh

**Step 4: Create NewsPreview**

Create `src/components/NewsPreview.tsx`:
- Section title "Latest Updates"
- 3 news cards with: date, title, excerpt, "Read more" link
- Placeholder news items about party launch, policy announcements, etc.
- Link to /news page

**Step 5: Create NewsletterSignup**

Create `src/components/NewsletterSignup.tsx`:
- Full-width section with gradient background
- Title "Stay Informed"
- Subtitle about getting updates
- Email input + Subscribe button
- Privacy note

**Step 6: Wire up the Home page**

Update `src/app/page.tsx` to compose all sections.

**Step 7: Verify it builds**

Run: `npm run build`

**Step 8: Commit**

```bash
git add -A && git commit -m "feat: build home page with hero, policy pillars, why AI section, news, newsletter"
```

---

### Task 4: About Page

**Files:**
- Create: `src/app/about/page.tsx`

**Step 1: Build the About page**

Create `src/app/about/page.tsx` with sections:
- Hero banner: "About the Australian AI Party"
- Vision & Mission section
  - Vision: "An Australia where artificial intelligence serves every citizen..."
  - Mission: 6 party aims from the brief
- Founding Story section
  - Narrative about the party's founding (placeholder but compelling)
  - Why traditional parties aren't equipped for the AI era
- Party Values section
  - 6 values from brief displayed as icon + title + description cards in grid
  - Transparency, Human oversight, Equity, Privacy, Innovation, Evidence-based
- Leadership Team section
  - Placeholder cards for: Party Leader, Deputy Leader, Secretary, Treasurer
  - Photo placeholder (initials avatar), name, title, short bio
- Constitution Summary section
  - Key points about party structure, democratic decision-making, membership rights

**Step 2: Verify it builds**

Run: `npm run build`

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: add about page with vision, values, team, and constitution"
```

---

### Task 5: Policies Page

**Files:**
- Create: `src/app/policies/page.tsx`
- Create: `src/app/policies/[slug]/page.tsx`
- Create: `src/data/policies.ts`

**Step 1: Create policy data**

Create `src/data/policies.ts`:
- Array of policy objects with: slug, title, icon, summary, fullDescription, keyPoints[]
- 6 policies from the brief:
  1. ai-assisted-decision-making - AI-Assisted Decision Making in Parliament
  2. transparent-algorithmic-governance - Transparent Algorithmic Governance
  3. digital-rights-privacy - Digital Rights and Privacy
  4. ai-education-workforce - AI Education and Workforce Transition
  5. open-data-government - Open Data Government
  6. ethical-ai-framework - Ethical AI Framework for Australia
- Each policy has: 3-4 paragraph description, 4-5 key points, related stats
- Write compelling, realistic policy content

**Step 2: Create policies listing page**

Create `src/app/policies/page.tsx`:
- Hero: "Our Policies" with subtitle
- Grid of 6 policy cards with: icon, title, summary, "Read full policy" link
- Each card links to /policies/[slug]
- CTA section at bottom: "Agree with our vision? Join us"

**Step 3: Create individual policy page**

Create `src/app/policies/[slug]/page.tsx`:
- Use generateStaticParams for static generation
- Hero with policy title
- Full policy description
- Key points as styled list
- Sidebar with related policies
- Back to all policies link
- CTA: Join to support this policy

**Step 4: Verify it builds**

Run: `npm run build`

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: add policies listing and individual policy pages with full content"
```

---

### Task 6: Join/Membership Page

**Files:**
- Create: `src/app/join/page.tsx`

**Step 1: Build the Join page**

Create `src/app/join/page.tsx`:
- Hero: "Join the Movement"
- Membership tiers section:
  - Free Supporter tier: $0, stay informed, newsletter, show support
  - Full Member tier: $25/yr, voting rights, attend meetings, shape policy, stand as candidate
- Benefits of membership section (icon + text list)
- Registration form (client-side only, `"use client"`):
  - Fields: First name, Last name, Email, Phone, Address, Suburb, State (dropdown), Postcode, Date of Birth, Electoral roll status (checkbox)
  - Tier selection (radio buttons)
  - Terms acceptance checkbox
  - Submit button (shows "Thank you" message, no actual submission)
- Form validation with basic HTML5 validation
- Note about AEC requirements

**Step 2: Verify it builds**

Run: `npm run build`

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: add join/membership page with registration form and tier selection"
```

---

### Task 7: Donate Page

**Files:**
- Create: `src/app/donate/page.tsx`

**Step 1: Build the Donate page**

Create `src/app/donate/page.tsx`:
- Hero: "Support the Future of Australian Democracy"
- Donation amount selection: $10, $25, $50, $100, $250, Custom
- "Why Donate?" section with 3 cards:
  - Fund policy research
  - Support election campaigns
  - Build AI governance tools
- Transparency section: "Where Your Money Goes"
  - Pie chart visual (CSS/SVG): 40% Campaigns, 25% Research, 20% Operations, 15% Community
- Donation form (client-side only):
  - Amount selection
  - Name, Email
  - Donor declaration (Australian electoral law requirement)
  - Submit button (shows thank you, no actual processing)
- Note about electoral donation disclosure laws
- `"use client"` for form state

**Step 2: Verify it builds**

Run: `npm run build`

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: add donation page with amount selection and transparency section"
```

---

### Task 8: News/Blog Pages

**Files:**
- Create: `src/data/news.ts`
- Create: `src/app/news/page.tsx`
- Create: `src/app/news/[slug]/page.tsx`

**Step 1: Create news data**

Create `src/data/news.ts`:
- Array of news/blog posts with: slug, title, date, author, excerpt, content, category
- 4-5 placeholder articles:
  1. "Australian AI Party Officially Launches" - party launch announcement
  2. "Our Vision for AI-Assisted Governance" - opinion piece
  3. "Why Australia Needs an AI Policy Framework" - policy explainer
  4. "Join Us: Membership Now Open" - membership drive
  5. "The Case for Transparent Algorithms in Government" - deep dive

**Step 2: Create news listing page**

Create `src/app/news/page.tsx`:
- Hero: "News & Updates"
- Featured post (first/latest) as large card
- Grid of remaining posts as smaller cards
- Each card: date, category tag, title, excerpt, "Read more"

**Step 3: Create individual news post page**

Create `src/app/news/[slug]/page.tsx`:
- generateStaticParams for static generation
- Article layout: title, date, author, category
- Full article content
- Share buttons placeholder
- Back to news link
- Related posts at bottom

**Step 4: Verify it builds**

Run: `npm run build`

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: add news listing and individual article pages"
```

---

### Task 9: Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

**Step 1: Build the Contact page**

Create `src/app/contact/page.tsx`:
- Hero: "Get in Touch"
- Two-column layout:
  - Left: Contact form (name, email, subject dropdown, message textarea, submit)
  - Right: Party office details (placeholder address), email, phone
- Social media links section with icons
- FAQ section with 3-4 common questions (accordion/expandable)
- `"use client"` for form state and FAQ accordion

**Step 2: Verify it builds**

Run: `npm run build`

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: add contact page with form and party details"
```

---

### Task 10: Dockerfile

**Files:**
- Create: `Dockerfile`
- Create: `.dockerignore`

**Step 1: Create .dockerignore**

Create `.dockerignore`:
```
node_modules
.next
.git
*.md
docs
```

**Step 2: Create multi-stage Dockerfile**

Create `Dockerfile`:
```dockerfile
FROM node:22-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM base AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
```

**Step 3: Verify Docker build**

Run:
```bash
docker build -t aaip-test .
```

**Step 4: Commit**

```bash
git add Dockerfile .dockerignore && git commit -m "feat: add multi-stage Dockerfile for ARM64 deployment"
```

---

### Task 11: Kubernetes Manifest

**Files:**
- Create: `k8s/deployment.yaml`

**Step 1: Create K8s manifest**

Create `k8s/deployment.yaml`:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: aaip-website
  namespace: barleycorn
  labels:
    app: aaip-website
spec:
  replicas: 2
  selector:
    matchLabels:
      app: aaip-website
  template:
    metadata:
      labels:
        app: aaip-website
    spec:
      imagePullSecrets:
        - name: ptreg
      containers:
        - name: aaip-website
          image: registry2.palmtech.com.au/bc-aaip:latest
          ports:
            - containerPort: 3000
          resources:
            requests:
              cpu: 50m
              memory: 64Mi
            limits:
              memory: 256Mi
          livenessProbe:
            httpGet:
              path: /
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 30
          readinessProbe:
            httpGet:
              path: /
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: aaip-website
  namespace: barleycorn
  labels:
    app: aaip-website
spec:
  type: ClusterIP
  ports:
    - port: 80
      targetPort: 3000
      protocol: TCP
  selector:
    app: aaip-website
```

**Step 2: Commit**

```bash
git add k8s/ && git commit -m "feat: add Kubernetes deployment and service manifests"
```

---

### Task 12: Final Build Verification & Polish

**Step 1: Run full build**

```bash
npm run build
```

**Step 2: Docker build test**

```bash
docker build -t aaip-test .
```

**Step 3: Run Docker container and verify**

```bash
docker run --rm -d -p 3000:3000 --name aaip-test aaip-test
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
docker stop aaip-test
```
Expected: HTTP 200

**Step 4: Final commit if any remaining changes**

```bash
git add -A && git commit -m "chore: final build verification and polish"
```
