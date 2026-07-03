// Mock analysis engine for Company Decoder.
//
// Everything here is fabricated, deterministic mock data — there is no network
// call. `generateAnalysis` hashes the user's input to pick a company archetype,
// then weaves the real company name and chosen purpose into hand-authored copy.
// The same input always yields the same result, which keeps re-runs stable.

export type Purpose =
  | 'sales'
  | 'interview'
  | 'competitive'
  | 'investment'
  | 'curiosity'

export interface PurposeOption {
  value: Purpose
  label: string
}

export const PURPOSE_OPTIONS: PurposeOption[] = [
  { value: 'sales', label: 'Sales prospecting' },
  { value: 'interview', label: 'Interview preparation' },
  { value: 'competitive', label: 'Competitive research' },
  { value: 'investment', label: 'Investment research' },
  { value: 'curiosity', label: 'General curiosity' },
]

export interface Competitor {
  name: string
  note: string
}

export interface IdeaItem {
  title: string
  detail: string
}

export interface InterviewItem {
  question: string
  tip: string
}

export interface AnalysisResult {
  companyName: string
  domain: string
  tagline: string
  confidence: number
  whatTheyDo: {
    summary: string
    highlights: string[]
  }
  industry: {
    primary: string
    segments: string[]
    stage: string
    headcount: string
    founded: string
  }
  icp: {
    intro: string
    segments: { title: string; description: string }[]
  }
  competitors: Competitor[]
  marketingIdeas: IdeaItem[]
  interviewPrep: InterviewItem[]
}

interface Archetype {
  key: string
  category: string
  segments: string[]
  stage: string
  headcount: string
  founded: string
  confidence: number
  tagline: (name: string) => string
  summary: (name: string) => string
  highlights: string[]
  icpIntro: (name: string) => string
  icp: { title: string; description: string }[]
  competitors: Competitor[]
  marketingIdeas: IdeaItem[]
  interviewPrep: InterviewItem[]
}

const ARCHETYPES: Archetype[] = [
  {
    key: 'devtools',
    category: 'Developer Tools & Infrastructure',
    segments: ['DevOps', 'Observability', 'CI/CD', 'Platform Engineering'],
    stage: 'Series B',
    headcount: '180–240',
    founded: '2019',
    confidence: 0.91,
    tagline: (n) => `${n} ships the deployment layer engineering teams stop noticing.`,
    summary: (n) =>
      `${n} sells a hosted platform that takes a team's application code and turns it into running, monitored infrastructure without a dedicated ops team. In plain terms: developers push code, and ${n} handles the servers, scaling, rollbacks, and dashboards that used to require a specialist. The pitch is "less time babysitting pipelines, more time shipping features."`,
    highlights: [
      'Git-connected deploys with automatic preview environments per pull request',
      'Usage-based pricing that scales with build minutes and active compute',
      'Built-in logs, metrics, and alerting so teams skip stitching together three tools',
      'Land-and-expand motion: one team adopts it, then it spreads across the org',
    ],
    icpIntro: (n) =>
      `${n} lands fastest with lean engineering orgs that feel infrastructure pain but can't justify a full platform team.`,
    icp: [
      {
        title: 'Seed–Series B startups (15–150 engineers)',
        description:
          'Moving fast, no dedicated DevOps hire yet, and bleeding hours on deploy tooling.',
      },
      {
        title: 'Platform leads at mid-market scale-ups',
        description:
          'Consolidating a sprawl of homegrown scripts into one supported system.',
      },
      {
        title: 'Solo founders & small agencies',
        description:
          'Want production-grade infra on day one without hiring for it.',
      },
    ],
    competitors: [
      { name: 'Vercel', note: 'Strongest on frontend deploys; overlaps on preview environments.' },
      { name: 'Render', note: 'Similar "push to deploy" story, priced aggressively for small teams.' },
      { name: 'Fly.io', note: 'Wins developers who want edge/region control and raw containers.' },
      { name: 'AWS (self-managed)', note: 'The real competitor — the DIY status quo they replace.' },
    ],
    marketingIdeas: [
      {
        title: 'Publish a "migration cost calculator"',
        detail:
          'Let prospects estimate hours saved vs. their current pipeline. Concrete numbers convert engineers better than adjectives.',
      },
      {
        title: 'Sponsor teardown-style engineering content',
        detail:
          'Deep technical walkthroughs of real architectures rank well and build trust with the exact skeptical buyer.',
      },
      {
        title: 'Ship a generous free tier for side projects',
        detail:
          'Weekend hobby usage becomes the wedge into the buyer\'s day job six months later.',
      },
    ],
    interviewPrep: [
      {
        question: 'How would you reduce onboarding friction for a first deploy?',
        tip: 'Talk about time-to-first-value. Reference their preview-environment flow and where a new user might stall.',
      },
      {
        question: 'Where does usage-based pricing create tension with customers?',
        tip: 'Mention surprise bills and how a spend-cap or forecast view builds trust.',
      },
      {
        question: 'How do you compete against a team just using raw AWS?',
        tip: 'Frame it as total cost of ownership, not feature count — engineer hours are the expensive part.',
      },
    ],
  },
  {
    key: 'fintech',
    category: 'Financial Technology',
    segments: ['Payments', 'Embedded Finance', 'B2B SaaS', 'Compliance'],
    stage: 'Series C',
    headcount: '320–420',
    founded: '2017',
    confidence: 0.88,
    tagline: (n) => `${n} turns money movement into a few lines of code.`,
    summary: (n) =>
      `${n} provides payment and financial infrastructure that other companies embed into their own products. Instead of a business building bank integrations, fraud checks, and payout systems from scratch, they call ${n}'s APIs. Practically speaking, ${n} is the invisible plumbing behind checkout flows, payouts to sellers, and automated reconciliation for software companies that aren't banks themselves.`,
    highlights: [
      'API-first payments with pre-built compliance and KYC baked in',
      'Take-rate revenue: a small percentage of every transaction processed',
      'Expands from a single payment feature into full financial operations',
      'Sticky by design — once billing runs through it, switching is painful',
    ],
    icpIntro: (n) =>
      `${n} sells to product and finance leaders who need to move money but don't want to become a regulated institution.`,
    icp: [
      {
        title: 'Vertical SaaS platforms',
        description:
          'Adding payments to own more of the transaction and lift revenue per customer.',
      },
      {
        title: 'Marketplaces with two-sided payouts',
        description:
          'Need to collect from buyers and pay sellers with clean compliance.',
      },
      {
        title: 'Finance & operations teams at scale-ups',
        description:
          'Drowning in manual reconciliation and spreadsheet-based cash flow.',
      },
    ],
    competitors: [
      { name: 'Stripe', note: 'The 800-lb gorilla; the default comparison in every deal.' },
      { name: 'Adyen', note: 'Enterprise-grade, strong internationally, heavier to integrate.' },
      { name: 'Modern Treasury', note: 'Overlaps on payment operations and reconciliation.' },
      { name: 'In-house build', note: 'Large customers threaten to build it themselves to save on take rate.' },
    ],
    marketingIdeas: [
      {
        title: 'Lead with a compliance-burden narrative',
        detail:
          'Quantify the months of legal and audit work customers avoid. Fear of regulators is a real motivator for this buyer.',
      },
      {
        title: 'Build a public "revenue lift" case study library',
        detail:
          'Show real platforms that added payments and grew revenue per user. Peer proof beats a feature list.',
      },
      {
        title: 'Run developer-first API docs as marketing',
        detail:
          'The integration engineer is a hidden decision-maker; excellent docs win them before sales ever calls.',
      },
    ],
    interviewPrep: [
      {
        question: 'How do you win a deal where the buyer defaults to Stripe?',
        tip: 'Pick a wedge — pricing, a specific vertical feature, or hands-on support — rather than claiming to be better everywhere.',
      },
      {
        question: 'What makes a payments customer churn?',
        tip: 'Talk about downtime and reconciliation errors; reliability is the whole product in fintech.',
      },
      {
        question: 'How would you de-risk a large enterprise onboarding?',
        tip: 'Mention phased rollout, sandbox testing, and a named implementation owner.',
      },
    ],
  },
  {
    key: 'healthtech',
    category: 'Healthcare Technology',
    segments: ['Digital Health', 'Care Coordination', 'B2B2C', 'Data & Analytics'],
    stage: 'Series A',
    headcount: '90–130',
    founded: '2020',
    confidence: 0.84,
    tagline: (n) => `${n} closes the gaps patients fall through between appointments.`,
    summary: (n) =>
      `${n} builds software that helps healthcare providers stay connected to patients outside of in-person visits. Rather than replacing doctors, it coordinates the messy in-between: reminders, follow-ups, symptom check-ins, and routing the right patient to the right clinician. The business typically sells to clinics and health systems, who deploy it to their patient population — so the buyer and the end user are different people.`,
    highlights: [
      'Per-provider or per-member-per-month subscription revenue',
      'Integrates with electronic health record systems to fit existing workflows',
      'Outcomes-driven pitch: fewer missed follow-ups, lower readmissions',
      'Long sales cycles offset by very sticky, multi-year contracts',
    ],
    icpIntro: (n) =>
      `${n} sells into care organizations measured on outcomes and cost, where a no-show is both a health risk and lost revenue.`,
    icp: [
      {
        title: 'Multi-site specialty clinics',
        description:
          'Managing chronic-care populations that need consistent between-visit contact.',
      },
      {
        title: 'Value-based care organizations',
        description:
          'Paid on outcomes, so preventing costly escalations directly improves margin.',
      },
      {
        title: 'Health system innovation teams',
        description:
          'Piloting digital tools to modernize patient engagement at scale.',
      },
    ],
    competitors: [
      { name: 'Luma Health', note: 'Strong on patient communication and scheduling.' },
      { name: 'Health Gorilla', note: 'Overlaps on data interoperability and records exchange.' },
      { name: 'Epic (MyChart)', note: 'The incumbent portal already inside most health systems.' },
      { name: 'Manual phone-call teams', note: 'The real status quo they displace: staff on phones all day.' },
    ],
    marketingIdeas: [
      {
        title: 'Anchor everything to a clinical outcome metric',
        detail:
          'Readmission or no-show reduction speaks to the buyer\'s scorecard far more than "engagement."',
      },
      {
        title: 'Recruit clinician champions for peer webinars',
        detail:
          'Doctors trust other doctors. A respected physician telling their story outperforms any brand ad.',
      },
      {
        title: 'Publish a plain-language ROI playbook',
        detail:
          'Give administrators a ready-made internal business case they can forward to finance.',
      },
    ],
    interviewPrep: [
      {
        question: 'How do you sell into a long, committee-driven buying cycle?',
        tip: 'Map the stakeholders — clinical, IT, finance, compliance — and speak to each one\'s concern separately.',
      },
      {
        question: 'How would you prove ROI to a skeptical CFO?',
        tip: 'Tie the product to avoided costs and reimbursement, with a conservative, defensible model.',
      },
      {
        question: 'What are the risks of an EHR integration going wrong?',
        tip: 'Mention data accuracy, clinician workflow disruption, and the need for a careful pilot.',
      },
    ],
  },
  {
    key: 'martech',
    category: 'Marketing & Sales Technology',
    segments: ['GTM Software', 'Revenue Intelligence', 'Automation', 'B2B SaaS'],
    stage: 'Series B',
    headcount: '150–210',
    founded: '2018',
    confidence: 0.87,
    tagline: (n) => `${n} tells revenue teams what to do next, not just what happened.`,
    summary: (n) =>
      `${n} sells software that helps sales and marketing teams find, prioritize, and act on their best opportunities. It pulls in data teams already have — CRM records, emails, product usage — and surfaces which accounts to focus on and what to say. The value isn't another dashboard; it's turning scattered signals into a clear next action for a rep or marketer.`,
    highlights: [
      'Seat-based subscription with premium tiers for automation and AI features',
      'Plugs into existing CRM and email stacks rather than replacing them',
      'ROI framed as pipeline generated and rep time saved',
      'Grows by seat expansion as more of the revenue team adopts it',
    ],
    icpIntro: (n) =>
      `${n} resonates with revenue leaders who have data everywhere but struggle to turn it into consistent action.`,
    icp: [
      {
        title: 'B2B sales teams (20–200 reps)',
        description:
          'Enough volume to need prioritization, enough budget to buy tooling.',
      },
      {
        title: 'Revenue operations leaders',
        description:
          'Own the tech stack and are measured on pipeline efficiency.',
      },
      {
        title: 'Demand-gen marketing teams',
        description:
          'Want to route the warmest accounts to sales at the right moment.',
      },
    ],
    competitors: [
      { name: 'Gong', note: 'Owns conversation intelligence; frequent side-by-side comparison.' },
      { name: 'Clay', note: 'Fast-rising on data enrichment and prospecting workflows.' },
      { name: 'HubSpot', note: 'Bundles overlapping features into an all-in-one suite.' },
      { name: 'Spreadsheets + gut feel', note: 'The unglamorous default most teams still run on.' },
    ],
    marketingIdeas: [
      {
        title: 'Turn aggregate customer data into a benchmark report',
        detail:
          'An annual "state of revenue teams" report earns links, press, and inbound from the exact buyer.',
      },
      {
        title: 'Run a hands-on ROI teardown series',
        detail:
          'Publicly rework a real team\'s pipeline live. It shows value instead of asserting it.',
      },
      {
        title: 'Build a community for RevOps practitioners',
        detail:
          'Own the watering hole where your buyer already asks peers for advice.',
      },
    ],
    interviewPrep: [
      {
        question: 'How do you differentiate in a crowded GTM-tool market?',
        tip: 'Focus on a specific job-to-be-done and a measurable outcome, not a laundry list of integrations.',
      },
      {
        question: 'What drives adoption after the deal closes?',
        tip: 'Talk about workflow fit — if it lives inside the rep\'s daily tools, it sticks; if not, it dies.',
      },
      {
        question: 'How would you handle a champion leaving the account?',
        tip: 'Emphasize multi-threading and documenting value so the relationship survives turnover.',
      },
    ],
  },
  {
    key: 'commerce',
    category: 'Commerce & Retail Technology',
    segments: ['E-commerce', 'Logistics', 'Consumer Brands', 'Operations'],
    stage: 'Series B',
    headcount: '200–280',
    founded: '2016',
    confidence: 0.85,
    tagline: (n) => `${n} makes the boring back half of online retail actually work.`,
    summary: (n) =>
      `${n} operates in the unglamorous but critical part of online retail: getting products stored, picked, shipped, and returned efficiently. It gives brands software (and often a physical network) to fulfill orders quickly without running their own warehouses. The customer is usually a growing consumer brand that's great at product and marketing but hitting a wall on operations.`,
    highlights: [
      'Blended revenue: software fees plus per-order fulfillment charges',
      'Network effects — more volume means better shipping rates and coverage',
      'Sells on speed and cost per order, the metrics brands obsess over',
      'Deeply operational, which makes it hard for customers to rip out',
    ],
    icpIntro: (n) =>
      `${n} fits fast-growing brands whose order volume has outgrown a spare-room or single-warehouse setup.`,
    icp: [
      {
        title: 'DTC brands scaling past $2M revenue',
        description:
          'Volume is high enough that fulfillment breaks if handled manually.',
      },
      {
        title: 'Multi-channel sellers',
        description:
          'Juggling their own store plus marketplaces and needing one source of truth.',
      },
      {
        title: 'Operations leads at consumer startups',
        description:
          'Want to offload logistics and refocus on growth and product.',
      },
    ],
    competitors: [
      { name: 'ShipBob', note: 'Direct competitor on outsourced fulfillment for growing brands.' },
      { name: 'Shopify Fulfillment', note: 'Bundled into the platform many brands already use.' },
      { name: 'Amazon (FBA)', note: 'Cheap and fast, but takes the customer relationship.' },
      { name: 'Self-run warehouse', note: 'The DIY path brands eventually outgrow or flee.' },
    ],
    marketingIdeas: [
      {
        title: 'Publish real cost-per-order benchmarks',
        detail:
          'Brands live and die by unit economics; transparent numbers earn trust fast.',
      },
      {
        title: 'Partner with the tools brands already use',
        detail:
          'Integrations and co-marketing with store platforms put you in front of buyers at the moment of pain.',
      },
      {
        title: 'Tell peak-season survival stories',
        detail:
          'Case studies about surviving a holiday rush hit an emotional nerve for operations teams.',
      },
    ],
    interviewPrep: [
      {
        question: 'How do you sell against Amazon\'s fulfillment network?',
        tip: 'Lead with brand ownership and customer data — things Amazon quietly takes from sellers.',
      },
      {
        question: 'What operational risk scares this buyer most?',
        tip: 'Peak-season failure. Speak to capacity planning and reliability under load.',
      },
      {
        question: 'How would you expand an account after initial fulfillment?',
        tip: 'Mention returns, international shipping, and analytics as natural next attach points.',
      },
    ],
  },
]

function hashString(input: string): number {
  let hash = 0
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i)
    hash |= 0 // force 32-bit
  }
  return Math.abs(hash)
}

// Pull a clean display name out of whatever the user typed — a bare name, a URL,
// or something with a scheme and path. Falls back gracefully.
function parseCompany(raw: string): { name: string; domain: string } {
  const trimmed = raw.trim()
  const looksLikeUrl = /\.[a-z]{2,}(\/|$|\?)/i.test(trimmed) || /^https?:\/\//i.test(trimmed)

  if (looksLikeUrl) {
    const stripped = trimmed
      .replace(/^https?:\/\//i, '')
      .replace(/^www\./i, '')
      .split(/[/?#]/)[0]
    const domain = stripped.toLowerCase()
    const core = stripped.split('.')[0] || stripped
    const name = core.charAt(0).toUpperCase() + core.slice(1)
    return { name, domain }
  }

  const name = trimmed
  const slug = trimmed
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .slice(0, 24)
  return { name, domain: `${slug || 'company'}.com` }
}

// A short, purpose-specific line that tailors the report to why the user is here.
function purposeLead(purpose: Purpose, name: string): string {
  switch (purpose) {
    case 'sales':
      return `Framed for outreach: how to open a conversation with ${name} and where the value lands.`
    case 'interview':
      return `Framed for a candidate: what ${name} does, who they sell to, and what an interviewer may probe.`
    case 'competitive':
      return `Framed for competitive teardown: ${name}'s positioning, wedge, and soft spots.`
    case 'investment':
      return `Framed for diligence: ${name}'s business model, moat, and the risks worth pressure-testing.`
    case 'curiosity':
    default:
      return `A plain-language decode of what ${name} really does and why it matters.`
  }
}

export function generateAnalysis(rawInput: string, purpose: Purpose): AnalysisResult {
  const { name, domain } = parseCompany(rawInput)
  const archetype = ARCHETYPES[hashString(domain + name) % ARCHETYPES.length]

  return {
    companyName: name,
    domain,
    tagline: archetype.tagline(name),
    confidence: archetype.confidence,
    whatTheyDo: {
      summary: `${purposeLead(purpose, name)} ${archetype.summary(name)}`,
      highlights: archetype.highlights,
    },
    industry: {
      primary: archetype.category,
      segments: archetype.segments,
      stage: archetype.stage,
      headcount: archetype.headcount,
      founded: archetype.founded,
    },
    icp: {
      intro: archetype.icpIntro(name),
      segments: archetype.icp,
    },
    competitors: archetype.competitors,
    marketingIdeas: archetype.marketingIdeas,
    interviewPrep: archetype.interviewPrep,
  }
}
