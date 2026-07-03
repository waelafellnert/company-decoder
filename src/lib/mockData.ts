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

interface CompanyProfile {
  name: string
  domains: string[]
  aliases: string[]
  tagline: string
  summary: string
  industry: string
  segments: string[]
  stage: string
  scale: string
  founded: string
  highlights: string[]
  icpIntro: string
  icp: { title: string; description: string }[]
  competitors: Competitor[]
  marketingIdeas: IdeaItem[]
  interviewPrep: InterviewItem[]
}

const COMPANIES: CompanyProfile[] = [
  {
    name: 'Google',
    domains: ['google.com', 'abc.xyz'],
    aliases: ['google', 'alphabet'],
    tagline: 'Google helps people find, organize, and use information online.',
    summary:
      'Google is a technology company best known for Search, YouTube, Android, Maps, Gmail, Workspace, Cloud, and AI products. Its main business is advertising, but it also sells cloud services, productivity software, devices, subscriptions, and developer tools.',
    industry: 'Technology',
    segments: ['Search', 'Advertising', 'Cloud', 'AI', 'Consumer Apps'],
    stage: 'Public company',
    scale: 'Large global company',
    founded: '1998',
    highlights: [
      'Search and advertising remain core revenue drivers',
      'YouTube is a major media and creator platform',
      'Google Cloud serves enterprise and developer customers',
      'AI is increasingly embedded across Search, Workspace, Cloud, and Android',
    ],
    icpIntro:
      'Google serves many customer groups, from everyday consumers to advertisers, developers, businesses, and enterprises.',
    icp: [
      { title: 'Consumers', description: 'Use Search, YouTube, Gmail, Maps, Chrome, Android, and other everyday tools.' },
      { title: 'Advertisers', description: 'Buy ads across Search, YouTube, Display, Shopping, and app campaigns.' },
      { title: 'Enterprises and developers', description: 'Use Google Cloud, Workspace, APIs, AI tools, and infrastructure.' },
    ],
    competitors: [
      { name: 'Microsoft', note: 'Competes in search, cloud, productivity, AI, and enterprise software.' },
      { name: 'Meta', note: 'Competes for digital advertising budgets and consumer attention.' },
      { name: 'Amazon', note: 'Competes in cloud, ads, devices, and commerce search.' },
      { name: 'OpenAI', note: 'Competes in AI assistants and the future of search behavior.' },
    ],
    marketingIdeas: [
      { title: 'Show AI in everyday workflows', detail: 'Demonstrate how Google products reduce friction in daily work, not just as futuristic technology.' },
      { title: 'Build vertical cloud stories', detail: 'Create industry-specific proof for healthcare, finance, retail, education, and media.' },
      { title: 'Use trust and privacy messaging', detail: 'Explain how data, privacy, safety, and usefulness work together in plain language.' },
    ],
    interviewPrep: [
      { question: 'How would you explain Google simply?', tip: 'Say it helps people access information and helps businesses reach customers through ads, cloud, apps, and AI.' },
      { question: 'What is Google’s biggest marketing challenge?', tip: 'Balancing innovation with trust, privacy, and regulatory scrutiny.' },
      { question: 'Where could a marketer add value?', tip: 'By making complex products feel useful, credible, and easy to adopt.' },
    ],
  },

  {
    name: 'YouTube',
    domains: ['youtube.com'],
    aliases: ['youtube', 'yt'],
    tagline: 'YouTube is a global video platform for creators, viewers, and advertisers.',
    summary:
      'YouTube lets people watch, upload, share, and monetize videos. It serves viewers looking for entertainment, education, music, news, and tutorials, while giving creators tools to build audiences and advertisers a way to reach them.',
    industry: 'Digital Media',
    segments: ['Video', 'Creator Economy', 'Advertising', 'Streaming', 'Subscriptions'],
    stage: 'Part of Google',
    scale: 'Large global platform',
    founded: '2005',
    highlights: [
      'Creator-driven video platform',
      'Monetizes through ads, subscriptions, and paid products',
      'Competes across entertainment, education, music, and short-form video',
      'A major discovery engine, not just a social platform',
    ],
    icpIntro:
      'YouTube serves viewers, creators, advertisers, media companies, educators, and brands.',
    icp: [
      { title: 'Viewers', description: 'Use YouTube for entertainment, learning, reviews, music, and news.' },
      { title: 'Creators', description: 'Build channels, communities, and revenue streams.' },
      { title: 'Advertisers', description: 'Reach audiences through video ads, creator partnerships, and brand campaigns.' },
    ],
    competitors: [
      { name: 'TikTok', note: 'Competes strongly in short-form discovery and creator attention.' },
      { name: 'Instagram', note: 'Competes through Reels, creators, and brand content.' },
      { name: 'Netflix', note: 'Competes for viewing time and entertainment attention.' },
      { name: 'Twitch', note: 'Competes in live streaming and creator communities.' },
    ],
    marketingIdeas: [
      { title: 'Promote creator success stories', detail: 'Show how different creators use the platform to build businesses and communities.' },
      { title: 'Create advertiser education hubs', detail: 'Help brands understand YouTube as performance, awareness, and search-driven content.' },
      { title: 'Lean into learning use cases', detail: 'Highlight YouTube as a place where people actively search for answers.' },
    ],
    interviewPrep: [
      { question: 'What makes YouTube different from social apps?', tip: 'Mention search intent, long-form content, evergreen discovery, and creator monetization.' },
      { question: 'What challenge does YouTube face?', tip: 'Balancing creator monetization, brand safety, moderation, and competition from short-form platforms.' },
      { question: 'How could marketing help YouTube?', tip: 'By clarifying value for creators, advertisers, educators, and viewers separately.' },
    ],
  },

  {
    name: 'LinkedIn',
    domains: ['linkedin.com'],
    aliases: ['linkedin'],
    tagline: 'LinkedIn is a professional network for careers, hiring, selling, and business content.',
    summary:
      'LinkedIn helps professionals build profiles, share content, find jobs, hire talent, sell to businesses, and learn skills. It is both a social network and a business platform, with revenue from recruiting tools, ads, premium subscriptions, sales tools, and learning products.',
    industry: 'Professional Networking',
    segments: ['Social Network', 'Recruiting', 'B2B Marketing', 'Sales Intelligence', 'Learning'],
    stage: 'Part of Microsoft',
    scale: 'Large global platform',
    founded: '2003',
    highlights: [
      'Professional identity and career network',
      'Strong recruiting and employer branding business',
      'Important B2B content and thought leadership platform',
      'Monetizes through hiring, ads, premium, sales, and learning products',
    ],
    icpIntro:
      'LinkedIn serves professionals, recruiters, employers, sales teams, marketers, creators, and job seekers.',
    icp: [
      { title: 'Professionals and job seekers', description: 'Build visibility, network, apply for roles, and share expertise.' },
      { title: 'Recruiters and employers', description: 'Find candidates, promote roles, and build employer brand.' },
      { title: 'B2B sales and marketing teams', description: 'Run ads, prospect accounts, and reach professional audiences.' },
    ],
    competitors: [
      { name: 'Indeed', note: 'Competes in job search and hiring.' },
      { name: 'Glassdoor', note: 'Competes in employer research and candidate decision-making.' },
      { name: 'X', note: 'Competes for professional thought leadership and real-time business conversation.' },
      { name: 'Salesforce', note: 'Competes indirectly through sales intelligence and CRM workflows.' },
    ],
    marketingIdeas: [
      { title: 'Teach users how to build trust', detail: 'Create content around better profiles, better posts, and better professional storytelling.' },
      { title: 'Segment creator education', detail: 'Give different playbooks for job seekers, founders, recruiters, marketers, and executives.' },
      { title: 'Promote B2B proof', detail: 'Use case studies showing pipeline, hiring, and brand impact from LinkedIn activity.' },
    ],
    interviewPrep: [
      { question: 'What is LinkedIn’s core value?', tip: 'It connects professional identity, opportunity, hiring, content, and business relationships.' },
      { question: 'What makes LinkedIn unique?', tip: 'It has professional context, work identity, career data, and B2B intent.' },
      { question: 'What marketing challenge does LinkedIn face?', tip: 'Keeping the platform useful and trusted while encouraging more content creation.' },
    ],
  },

  {
    name: 'X',
    domains: ['x.com', 'twitter.com'],
    aliases: ['x', 'twitter'],
    tagline: 'X is a real-time social platform for public conversation, news, creators, and communities.',
    summary:
      'X is a social platform where people post short updates, follow public figures, react to news, discuss culture, and build audiences. It is used heavily for real-time conversation, media commentary, tech discourse, politics, entertainment, and creator-led communities.',
    industry: 'Social Media',
    segments: ['Real-time Conversation', 'Creators', 'News', 'Communities', 'Advertising'],
    stage: 'Private company',
    scale: 'Large global platform',
    founded: '2006',
    highlights: [
      'Strong real-time public conversation graph',
      'Popular among journalists, founders, creators, politicians, and niche communities',
      'Monetizes through ads, subscriptions, and creator-related products',
      'Brand is tied to speed, culture, controversy, and public discourse',
    ],
    icpIntro:
      'X serves creators, public figures, brands, journalists, founders, communities, and people who want real-time updates.',
    icp: [
      { title: 'Creators and public figures', description: 'Build audiences and participate in public conversation.' },
      { title: 'Brands and advertisers', description: 'Reach culture, news, sports, tech, and entertainment audiences.' },
      { title: 'Communities', description: 'Gather around niches like startups, AI, finance, politics, sports, and media.' },
    ],
    competitors: [
      { name: 'Threads', note: 'Competes in text-based public conversation.' },
      { name: 'Bluesky', note: 'Competes with a decentralized social networking angle.' },
      { name: 'LinkedIn', note: 'Competes for professional thought leadership.' },
      { name: 'Reddit', note: 'Competes for community discussion and niche knowledge.' },
    ],
    marketingIdeas: [
      { title: 'Clarify creator value', detail: 'Show why creators should build on X versus spreading attention across platforms.' },
      { title: 'Package real-time moments', detail: 'Create advertiser products around live events, sports, launches, and breaking news.' },
      { title: 'Rebuild trust messaging', detail: 'Make safety, verification, and brand suitability easier to understand.' },
    ],
    interviewPrep: [
      { question: 'How would you describe X?', tip: 'A real-time public conversation network where people react, debate, discover, and build audiences.' },
      { question: 'What is the biggest challenge?', tip: 'Trust, moderation, advertiser confidence, and competition for creator attention.' },
      { question: 'What marketing opportunity exists?', tip: 'Position X around live relevance and communities instead of only social posting.' },
    ],
  },

  {
    name: 'Instagram',
    domains: ['instagram.com'],
    aliases: ['instagram', 'ig'],
    tagline: 'Instagram is a visual social platform for sharing photos, videos, stories, reels, and creator content.',
    summary:
      'Instagram helps people and brands share visual content, discover trends, follow creators, message friends, and shop or engage with businesses. It is a major platform for creators, influencers, brands, lifestyle content, and short-form video.',
    industry: 'Social Media',
    segments: ['Visual Content', 'Creators', 'Short-form Video', 'Influencer Marketing', 'Social Commerce'],
    stage: 'Part of Meta',
    scale: 'Large global platform',
    founded: '2010',
    highlights: [
      'Visual-first social network',
      'Strong creator and influencer ecosystem',
      'Reels competes directly with TikTok and YouTube Shorts',
      'Important platform for brand discovery and lifestyle marketing',
    ],
    icpIntro:
      'Instagram serves consumers, creators, influencers, brands, small businesses, and advertisers.',
    icp: [
      { title: 'Consumers', description: 'Use Instagram to follow friends, creators, trends, brands, and communities.' },
      { title: 'Creators and influencers', description: 'Build audiences and monetize attention through partnerships and content.' },
      { title: 'Brands and small businesses', description: 'Use Instagram for awareness, product discovery, social proof, and sales.' },
    ],
    competitors: [
      { name: 'TikTok', note: 'Biggest competitor in short-form video and trend discovery.' },
      { name: 'YouTube Shorts', note: 'Competes for creators and short-form viewing time.' },
      { name: 'Snapchat', note: 'Competes in visual messaging and younger audiences.' },
      { name: 'Pinterest', note: 'Competes in visual discovery and shopping inspiration.' },
    ],
    marketingIdeas: [
      { title: 'Make creator education practical', detail: 'Help creators understand what to post, how to monetize, and how to use formats well.' },
      { title: 'Strengthen small business stories', detail: 'Show how local brands use Reels, DMs, and shops to grow.' },
      { title: 'Package trend insights', detail: 'Turn platform behavior into useful reports for brands and agencies.' },
    ],
    interviewPrep: [
      { question: 'What is Instagram really selling?', tip: 'Attention, discovery, creator reach, and advertising access to visual audiences.' },
      { question: 'What challenge does Instagram face?', tip: 'Balancing friends, creators, ads, shopping, and competition with TikTok.' },
      { question: 'Where can marketing help?', tip: 'By making Instagram’s value clear for creators, small businesses, and advertisers.' },
    ],
  },

  {
    name: 'OpenAI',
    domains: ['openai.com'],
    aliases: ['openai', 'chatgpt'],
    tagline: 'OpenAI builds AI tools that help people write, code, research, create, and automate work.',
    summary:
      'OpenAI develops artificial intelligence models and products, including ChatGPT and APIs that businesses and developers use to build AI-powered applications. Its products help individuals and teams generate text, analyze information, write code, create images, and automate workflows.',
    industry: 'Artificial Intelligence',
    segments: ['AI Assistants', 'Foundation Models', 'Developer APIs', 'Enterprise AI', 'Productivity'],
    stage: 'Private company',
    scale: 'Large AI company',
    founded: '2015',
    highlights: [
      'ChatGPT is a widely used AI assistant',
      'APIs let developers build AI features into products',
      'Enterprise offerings help companies adopt AI securely',
      'Competes in the fast-moving AI platform market',
    ],
    icpIntro:
      'OpenAI serves consumers, developers, startups, enterprises, educators, creators, and knowledge workers.',
    icp: [
      { title: 'Individuals and professionals', description: 'Use ChatGPT for writing, learning, coding, brainstorming, and productivity.' },
      { title: 'Developers and startups', description: 'Use APIs to build AI-powered products and workflows.' },
      { title: 'Enterprises', description: 'Adopt AI tools for internal productivity, customer support, analysis, and automation.' },
    ],
    competitors: [
      { name: 'Anthropic', note: 'Competes in AI assistants and enterprise AI.' },
      { name: 'Google Gemini', note: 'Competes through AI models integrated into Google products.' },
      { name: 'Microsoft Copilot', note: 'Competes in workplace AI and productivity.' },
      { name: 'Perplexity', note: 'Competes in AI search and answer engines.' },
    ],
    marketingIdeas: [
      { title: 'Show role-based workflows', detail: 'Create examples for marketers, sales teams, analysts, developers, executives, and students.' },
      { title: 'Demystify enterprise adoption', detail: 'Explain security, governance, and practical rollout in plain English.' },
      { title: 'Use customer transformation stories', detail: 'Show how teams changed workflows, not just how they used prompts.' },
    ],
    interviewPrep: [
      { question: 'How would you explain OpenAI simply?', tip: 'It builds AI systems people and companies use to think, create, code, and work faster.' },
      { question: 'What is a major challenge?', tip: 'Trust, safety, competition, regulation, reliability, and explaining AI clearly.' },
      { question: 'How can marketers add value?', tip: 'By translating complex AI capabilities into concrete use cases for specific audiences.' },
    ],
  },

  {
    name: 'Meta',
    domains: ['meta.com', 'facebook.com'],
    aliases: ['meta', 'facebook'],
    tagline: 'Meta builds social platforms and technologies that connect people, creators, communities, and advertisers.',
    summary:
      'Meta owns Facebook, Instagram, WhatsApp, Threads, Messenger, and Reality Labs products. Its core business is advertising across social platforms, while it also invests in AI, messaging, creators, virtual reality, and mixed reality devices.',
    industry: 'Technology',
    segments: ['Social Media', 'Messaging', 'Advertising', 'AI', 'VR/AR'],
    stage: 'Public company',
    scale: 'Large global company',
    founded: '2004',
    highlights: [
      'Owns major social and messaging platforms',
      'Advertising is the core revenue engine',
      'Strong creator, community, and business tools',
      'Invests heavily in AI and immersive computing',
    ],
    icpIntro:
      'Meta serves consumers, creators, advertisers, small businesses, developers, and enterprise partners.',
    icp: [
      { title: 'Consumers', description: 'Use Facebook, Instagram, WhatsApp, Messenger, and Threads to connect and discover.' },
      { title: 'Advertisers and businesses', description: 'Use Meta ads and pages to reach customers and drive sales.' },
      { title: 'Creators', description: 'Build audiences, publish content, and monetize influence.' },
    ],
    competitors: [
      { name: 'TikTok', note: 'Competes for attention, creators, and short-form video.' },
      { name: 'Google', note: 'Competes for advertising budgets.' },
      { name: 'Snapchat', note: 'Competes in messaging, AR, and younger audiences.' },
      { name: 'X', note: 'Competes in public conversation and creator attention.' },
    ],
    marketingIdeas: [
      { title: 'Simplify AI ad tools', detail: 'Help small businesses understand how automation improves creative and targeting.' },
      { title: 'Show WhatsApp business use cases', detail: 'Promote messaging as a customer service and commerce channel.' },
      { title: 'Separate platform narratives', detail: 'Clarify the unique role of Facebook, Instagram, WhatsApp, Threads, and Quest.' },
    ],
    interviewPrep: [
      { question: 'What does Meta do?', tip: 'It connects people through social and messaging platforms and monetizes primarily through ads.' },
      { question: 'What is Meta’s biggest strength?', tip: 'Massive reach, social graph, ad infrastructure, and multiple scaled platforms.' },
      { question: 'What risk should you mention?', tip: 'Regulation, privacy, platform fatigue, competition, and trust.' },
    ],
  },

  {
    name: 'TikTok',
    domains: ['tiktok.com'],
    aliases: ['tiktok'],
    tagline: 'TikTok is a short-form video platform built around entertainment, discovery, creators, and culture.',
    summary:
      'TikTok lets users create, watch, and share short videos. It is known for powerful content discovery, trends, music, creators, and culture-shaping moments. Brands use it for awareness, creator partnerships, social commerce, and performance advertising.',
    industry: 'Social Media',
    segments: ['Short-form Video', 'Creators', 'Entertainment', 'Advertising', 'Social Commerce'],
    stage: 'Part of ByteDance',
    scale: 'Large global platform',
    founded: '2016',
    highlights: [
      'Strong recommendation-driven discovery',
      'Major platform for creators, trends, music, and culture',
      'Competes intensely for attention and ad budgets',
      'Useful for both brand awareness and commerce-led campaigns',
    ],
    icpIntro:
      'TikTok serves viewers, creators, brands, advertisers, music labels, merchants, and agencies.',
    icp: [
      { title: 'Consumers', description: 'Use TikTok for entertainment, learning, trends, and discovery.' },
      { title: 'Creators', description: 'Build audiences through short-form storytelling and trend participation.' },
      { title: 'Brands and advertisers', description: 'Use TikTok for awareness, creator campaigns, and commerce.' },
    ],
    competitors: [
      { name: 'Instagram Reels', note: 'Competes directly in short-form video and creators.' },
      { name: 'YouTube Shorts', note: 'Competes for video consumption and creator monetization.' },
      { name: 'Snapchat', note: 'Competes with younger audiences and camera-first content.' },
      { name: 'Pinterest', note: 'Competes in discovery and shopping inspiration.' },
    ],
    marketingIdeas: [
      { title: 'Teach brands native storytelling', detail: 'Show marketers how TikTok content differs from polished ad creative.' },
      { title: 'Package trend intelligence', detail: 'Create reports that explain what trends mean for categories and buyers.' },
      { title: 'Promote creator-brand matching', detail: 'Help advertisers find the right creators for credibility, not just reach.' },
    ],
    interviewPrep: [
      { question: 'Why is TikTok powerful?', tip: 'Its recommendation engine helps content travel beyond existing followers.' },
      { question: 'What is a marketing risk?', tip: 'Brands can feel out of place if they copy trends without understanding platform culture.' },
      { question: 'What would you improve?', tip: 'Brand safety, creator monetization clarity, and education for advertisers.' },
    ],
  },

  {
    name: 'Microsoft',
    domains: ['microsoft.com'],
    aliases: ['microsoft', 'msft'],
    tagline: 'Microsoft builds software, cloud services, devices, gaming products, and AI tools for people and organizations.',
    summary:
      'Microsoft is a technology company known for Windows, Microsoft 365, Azure, Teams, Xbox, LinkedIn, GitHub, and Copilot. It sells to consumers, developers, businesses, governments, and enterprises, with major revenue from cloud, productivity software, enterprise licensing, and subscriptions.',
    industry: 'Technology',
    segments: ['Cloud', 'Productivity Software', 'AI', 'Developer Tools', 'Gaming'],
    stage: 'Public company',
    scale: 'Large global company',
    founded: '1975',
    highlights: [
      'Azure is a major cloud platform',
      'Microsoft 365 is central to workplace productivity',
      'Copilot brings AI into business and developer workflows',
      'Owns major assets like LinkedIn, GitHub, and Xbox',
    ],
    icpIntro:
      'Microsoft serves individuals, businesses, developers, enterprises, governments, schools, and gamers.',
    icp: [
      { title: 'Enterprises', description: 'Use Microsoft cloud, productivity, security, collaboration, and AI tools.' },
      { title: 'Developers', description: 'Use GitHub, Azure, Visual Studio, and AI coding tools.' },
      { title: 'Consumers and gamers', description: 'Use Windows, Office, Xbox, and consumer subscriptions.' },
    ],
    competitors: [
      { name: 'Google', note: 'Competes in cloud, productivity, AI, ads, and devices.' },
      { name: 'Amazon AWS', note: 'Competes strongly in cloud infrastructure.' },
      { name: 'Apple', note: 'Competes in operating systems, devices, and consumer ecosystems.' },
      { name: 'OpenAI and Anthropic', note: 'Compete or overlap in AI tools and assistants.' },
    ],
    marketingIdeas: [
      { title: 'Show Copilot by role', detail: 'Create use cases for marketers, finance teams, developers, HR, sales, and executives.' },
      { title: 'Simplify cloud migration stories', detail: 'Make Azure value clear through practical business outcomes.' },
      { title: 'Connect productivity and security', detail: 'Show why companies prefer integrated workplace tools.' },
    ],
    interviewPrep: [
      { question: 'How would you explain Microsoft?', tip: 'It provides the software, cloud, productivity, developer, gaming, and AI tools many organizations run on.' },
      { question: 'What is Microsoft’s advantage?', tip: 'Distribution, enterprise trust, ecosystem depth, and integration across products.' },
      { question: 'What challenge exists?', tip: 'Making a huge product portfolio feel simple and modern.' },
    ],
  },

  {
    name: 'Apple',
    domains: ['apple.com'],
    aliases: ['apple'],
    tagline: 'Apple designs devices, software, services, and experiences built around its consumer ecosystem.',
    summary:
      'Apple makes products like iPhone, Mac, iPad, Apple Watch, AirPods, and services like Apple Music, iCloud, TV+, and the App Store. Its strength is the integrated ecosystem: hardware, software, services, design, privacy, and brand loyalty working together.',
    industry: 'Consumer Technology',
    segments: ['Hardware', 'Software', 'Services', 'Wearables', 'Consumer Ecosystem'],
    stage: 'Public company',
    scale: 'Large global company',
    founded: '1976',
    highlights: [
      'iPhone is the center of Apple’s ecosystem',
      'Services create recurring revenue',
      'Brand is built on design, privacy, simplicity, and premium positioning',
      'Tight hardware/software integration creates loyalty',
    ],
    icpIntro:
      'Apple serves consumers, professionals, developers, creatives, students, and businesses.',
    icp: [
      { title: 'Consumers', description: 'Buy devices and services for communication, productivity, entertainment, and creativity.' },
      { title: 'Creative professionals', description: 'Use Mac, iPad, and software ecosystems for design, video, music, and work.' },
      { title: 'Developers', description: 'Build apps for iOS, macOS, watchOS, and Apple platforms.' },
    ],
    competitors: [
      { name: 'Samsung', note: 'Competes in smartphones, tablets, and consumer electronics.' },
      { name: 'Google', note: 'Competes through Android, Pixel, services, and AI.' },
      { name: 'Microsoft', note: 'Competes in PCs, productivity, and operating systems.' },
      { name: 'Meta', note: 'Competes in future computing interfaces like mixed reality.' },
    ],
    marketingIdeas: [
      { title: 'Show ecosystem moments', detail: 'Demonstrate how devices and services work together in daily life.' },
      { title: 'Lean into privacy as value', detail: 'Turn privacy into a practical consumer benefit, not just a policy message.' },
      { title: 'Create creator-led workflows', detail: 'Show how professionals use Apple products to produce real work.' },
    ],
    interviewPrep: [
      { question: 'What makes Apple different?', tip: 'Design, ecosystem control, brand trust, and integrated hardware/software experiences.' },
      { question: 'What is Apple’s business model?', tip: 'Premium hardware sales plus growing services revenue.' },
      { question: 'What marketing lesson can you bring up?', tip: 'Apple sells outcomes and identity, not just specifications.' },
    ],
  },

  {
    name: 'Amazon',
    domains: ['amazon.com', 'aws.amazon.com'],
    aliases: ['amazon', 'aws'],
    tagline: 'Amazon operates e-commerce, cloud computing, logistics, advertising, devices, and entertainment businesses.',
    summary:
      'Amazon started as an online retailer and expanded into marketplaces, logistics, subscriptions, cloud computing through AWS, digital advertising, devices, and entertainment. It serves consumers, sellers, developers, enterprises, and advertisers.',
    industry: 'Technology & Commerce',
    segments: ['E-commerce', 'Cloud', 'Logistics', 'Advertising', 'Streaming'],
    stage: 'Public company',
    scale: 'Large global company',
    founded: '1994',
    highlights: [
      'Marketplace and logistics infrastructure power retail operations',
      'AWS is a major cloud computing business',
      'Advertising has become a major revenue stream',
      'Prime connects shopping, delivery, entertainment, and loyalty',
    ],
    icpIntro:
      'Amazon serves consumers, marketplace sellers, advertisers, developers, enterprises, and media audiences.',
    icp: [
      { title: 'Consumers', description: 'Use Amazon for shopping, delivery, streaming, devices, and subscriptions.' },
      { title: 'Sellers and brands', description: 'Use Amazon marketplace, logistics, and ads to reach buyers.' },
      { title: 'Developers and enterprises', description: 'Use AWS for cloud infrastructure, data, AI, and applications.' },
    ],
    competitors: [
      { name: 'Walmart', note: 'Competes in retail, grocery, marketplace, and delivery.' },
      { name: 'Microsoft Azure', note: 'Competes with AWS in cloud.' },
      { name: 'Google Cloud', note: 'Competes in cloud, AI, and enterprise infrastructure.' },
      { name: 'Shopify', note: 'Competes for merchant relationships and commerce infrastructure.' },
    ],
    marketingIdeas: [
      { title: 'Separate audience messaging', detail: 'Consumers, sellers, advertisers, and AWS buyers need very different stories.' },
      { title: 'Show operational reliability', detail: 'For AWS and logistics, reliability is often the strongest marketing message.' },
      { title: 'Build merchant education', detail: 'Help sellers understand ads, fulfillment, rankings, and margin management.' },
    ],
    interviewPrep: [
      { question: 'What is Amazon’s core advantage?', tip: 'Scale, logistics, customer obsession, marketplace depth, cloud infrastructure, and data.' },
      { question: 'What businesses does Amazon operate?', tip: 'Retail, marketplace, logistics, cloud, ads, streaming, devices, and subscriptions.' },
      { question: 'What risk should you mention?', tip: 'Regulatory scrutiny, labor concerns, competition, and complexity across business lines.' },
    ],
  },

  {
    name: 'Netflix',
    domains: ['netflix.com'],
    aliases: ['netflix'],
    tagline: 'Netflix is a streaming entertainment company that produces, licenses, and distributes shows, films, games, and live content.',
    summary:
      'Netflix is a subscription-based streaming service where people watch TV shows, movies, documentaries, comedy, anime, and original content. It earns money mainly through subscriptions and advertising-supported plans while investing heavily in content and audience engagement.',
    industry: 'Streaming Entertainment',
    segments: ['Streaming', 'Original Content', 'Entertainment', 'Subscriptions', 'Advertising'],
    stage: 'Public company',
    scale: 'Large global entertainment platform',
    founded: '1997',
    highlights: [
      'Subscription streaming is the core business',
      'Original content differentiates the platform',
      'Competes for attention, not just subscriptions',
      'Ad-supported tiers add another revenue model',
    ],
    icpIntro:
      'Netflix serves entertainment consumers, advertisers, content creators, and production partners.',
    icp: [
      { title: 'Consumers', description: 'Use Netflix for on-demand entertainment across genres and regions.' },
      { title: 'Advertisers', description: 'Reach streaming audiences through ad-supported plans.' },
      { title: 'Creators and studios', description: 'Partner with Netflix to produce and distribute content globally.' },
    ],
    competitors: [
      { name: 'Disney+', note: 'Competes with major franchises and family entertainment.' },
      { name: 'Prime Video', note: 'Competes through Amazon’s bundled Prime ecosystem.' },
      { name: 'Max', note: 'Competes with premium TV and film content.' },
      { name: 'YouTube', note: 'Competes heavily for viewing time.' },
    ],
    marketingIdeas: [
      { title: 'Market by fandom moments', detail: 'Build campaigns around shows that create conversation and cultural momentum.' },
      { title: 'Personalize genre campaigns', detail: 'Promote different value propositions for comedy, drama, anime, documentary, and family audiences.' },
      { title: 'Use behind-the-scenes content', detail: 'Extend show lifecycles through cast interviews, creator commentary, and social clips.' },
    ],
    interviewPrep: [
      { question: 'What business is Netflix really in?', tip: 'Entertainment attention, subscriptions, content, and increasingly ads.' },
      { question: 'What is a major challenge?', tip: 'Subscriber growth, content costs, churn, competition, and keeping attention.' },
      { question: 'What marketing idea could you suggest?', tip: 'Turn every major title into a multi-channel cultural moment.' },
    ],
  },

  {
    name: 'Spotify',
    domains: ['spotify.com'],
    aliases: ['spotify'],
    tagline: 'Spotify is an audio platform for music, podcasts, creators, listeners, and advertisers.',
    summary:
      'Spotify lets users stream music, podcasts, and audio content. It makes money through paid subscriptions and advertising. Its platform connects listeners with artists, podcasters, labels, creators, and brands.',
    industry: 'Audio Streaming',
    segments: ['Music', 'Podcasts', 'Subscriptions', 'Advertising', 'Creator Tools'],
    stage: 'Public company',
    scale: 'Large global audio platform',
    founded: '2006',
    highlights: [
      'Freemium model with paid subscriptions and ads',
      'Strong personalization and recommendation features',
      'Major platform for music discovery and podcasts',
      'Serves both listeners and creators',
    ],
    icpIntro:
      'Spotify serves listeners, artists, podcasters, advertisers, labels, and audio creators.',
    icp: [
      { title: 'Listeners', description: 'Use Spotify for music, podcasts, playlists, discovery, and entertainment.' },
      { title: 'Artists and creators', description: 'Reach audiences and understand listener behavior.' },
      { title: 'Advertisers', description: 'Reach audio audiences through targeted campaigns.' },
    ],
    competitors: [
      { name: 'Apple Music', note: 'Competes in paid music streaming.' },
      { name: 'YouTube Music', note: 'Competes through video, music, and Google distribution.' },
      { name: 'Amazon Music', note: 'Competes through Prime and device bundling.' },
      { name: 'Podcast platforms', note: 'Compete for creator and listener attention.' },
    ],
    marketingIdeas: [
      { title: 'Promote personalization', detail: 'Show how Spotify understands taste and creates discovery moments.' },
      { title: 'Build creator education', detail: 'Help artists and podcasters use analytics, clips, and campaigns better.' },
      { title: 'Use cultural listening moments', detail: 'Campaign around Wrapped-style insights, moods, seasons, and communities.' },
    ],
    interviewPrep: [
      { question: 'How does Spotify make money?', tip: 'Subscriptions and advertising, with creator and content ecosystem dynamics.' },
      { question: 'What makes Spotify sticky?', tip: 'Playlists, personalization, history, recommendations, and user habits.' },
      { question: 'What challenge does it face?', tip: 'Royalties, profitability, competition, and creator monetization.' },
    ],
  },

  {
    name: 'Canva',
    domains: ['canva.com'],
    aliases: ['canva'],
    tagline: 'Canva makes design accessible to non-designers, teams, schools, creators, and businesses.',
    summary:
      'Canva is an online design platform that lets people create presentations, social posts, documents, videos, posters, brand assets, and marketing materials using templates and simple editing tools. It is popular with non-designers because it lowers the barrier to creating polished visual content.',
    industry: 'Design Software',
    segments: ['Design Tools', 'Visual Communication', 'Marketing Content', 'Education', 'Collaboration'],
    stage: 'Private company',
    scale: 'Large global software company',
    founded: '2013',
    highlights: [
      'Template-first design platform',
      'Popular with marketers, creators, educators, students, and small businesses',
      'Freemium model with paid plans for teams and enterprises',
      'Expanding into docs, presentations, video, and brand management',
    ],
    icpIntro:
      'Canva serves anyone who needs visual content without professional design complexity.',
    icp: [
      { title: 'Marketers and small businesses', description: 'Create social posts, ads, presentations, and brand assets quickly.' },
      { title: 'Educators and students', description: 'Create learning materials, reports, posters, and presentations.' },
      { title: 'Teams and enterprises', description: 'Use templates, brand kits, and collaboration to scale content creation.' },
    ],
    competitors: [
      { name: 'Adobe', note: 'Competes with professional creative tools and Adobe Express.' },
      { name: 'Figma', note: 'Competes in collaborative design for teams.' },
      { name: 'Microsoft PowerPoint', note: 'Competes in presentations and business content.' },
      { name: 'Google Slides', note: 'Competes in lightweight collaborative presentations.' },
    ],
    marketingIdeas: [
      { title: 'Own the non-designer narrative', detail: 'Show how people create better visuals without needing formal design training.' },
      { title: 'Create role-based template hubs', detail: 'Build collections for marketers, teachers, founders, recruiters, and creators.' },
      { title: 'Highlight brand consistency', detail: 'Show teams how Canva prevents off-brand assets at scale.' },
    ],
    interviewPrep: [
      { question: 'What problem does Canva solve?', tip: 'It helps non-designers create professional-looking visuals quickly.' },
      { question: 'What makes Canva grow?', tip: 'Templates, freemium adoption, collaboration, education, and team expansion.' },
      { question: 'What could a marketer improve?', tip: 'Role-specific messaging and stronger enterprise use-case storytelling.' },
    ],
  },

  {
    name: 'Notion',
    domains: ['notion.so'],
    aliases: ['notion'],
    tagline: 'Notion is an all-in-one workspace for notes, docs, projects, wikis, databases, and AI-assisted work.',
    summary:
      'Notion helps individuals and teams organize information, manage projects, document processes, and build flexible workspaces. It combines notes, docs, databases, wikis, templates, and AI features in one customizable tool.',
    industry: 'Productivity Software',
    segments: ['Workspaces', 'Docs', 'Project Management', 'Knowledge Management', 'AI Productivity'],
    stage: 'Private company',
    scale: 'Large software company',
    founded: '2013',
    highlights: [
      'Flexible workspace for individuals and teams',
      'Strong template and community ecosystem',
      'Used for docs, project tracking, wikis, CRMs, content calendars, and personal systems',
      'AI features help with writing, summarizing, and organizing information',
    ],
    icpIntro:
      'Notion serves individuals, startups, teams, creators, students, and companies that want flexible workspaces.',
    icp: [
      { title: 'Individuals and creators', description: 'Use Notion for planning, notes, content, personal systems, and portfolios.' },
      { title: 'Startups and teams', description: 'Use it for wikis, projects, roadmaps, meeting notes, and internal docs.' },
      { title: 'Operations and knowledge teams', description: 'Use Notion to centralize processes and internal information.' },
    ],
    competitors: [
      { name: 'Google Workspace', note: 'Competes in docs, collaboration, and team workflows.' },
      { name: 'Microsoft 365', note: 'Competes in enterprise productivity and collaboration.' },
      { name: 'Airtable', note: 'Competes in flexible databases and workflows.' },
      { name: 'Asana', note: 'Competes in structured project management.' },
    ],
    marketingIdeas: [
      { title: 'Promote workspace templates by role', detail: 'Create specific setups for marketers, founders, students, agencies, and operators.' },
      { title: 'Show before-and-after workflows', detail: 'Demonstrate messy work becoming organized inside Notion.' },
      { title: 'Create AI workflow examples', detail: 'Show practical AI use inside notes, docs, projects, and company knowledge.' },
    ],
    interviewPrep: [
      { question: 'What makes Notion different?', tip: 'Flexibility. Users can create their own workspace instead of fitting into a rigid tool.' },
      { question: 'Who uses Notion?', tip: 'Individuals, startups, creators, students, teams, and companies managing knowledge.' },
      { question: 'What is the marketing challenge?', tip: 'Explaining a very flexible product without making it feel vague.' },
    ],
  },

  {
    name: 'Figma',
    domains: ['figma.com'],
    aliases: ['figma'],
    tagline: 'Figma is a collaborative design platform for product teams.',
    summary:
      'Figma lets designers, product managers, developers, marketers, and teams design, prototype, review, and collaborate on digital products in the browser. It is widely used for UI design, design systems, prototyping, and team collaboration.',
    industry: 'Design Software',
    segments: ['Product Design', 'Collaboration', 'Prototyping', 'Design Systems', 'Developer Handoff'],
    stage: 'Private company',
    scale: 'Large design software company',
    founded: '2012',
    highlights: [
      'Browser-based collaborative design',
      'Strong adoption among product and design teams',
      'Used for UI design, prototypes, whiteboarding, and design systems',
      'Expands across designers, developers, product managers, and stakeholders',
    ],
    icpIntro:
      'Figma serves product designers, product teams, developers, agencies, startups, and enterprises.',
    icp: [
      { title: 'Design teams', description: 'Create interfaces, prototypes, components, and design systems.' },
      { title: 'Product and engineering teams', description: 'Collaborate on product decisions and handoff.' },
      { title: 'Agencies and startups', description: 'Move quickly from idea to prototype to production.' },
    ],
    competitors: [
      { name: 'Adobe XD and Adobe tools', note: 'Compete in design and creative workflows.' },
      { name: 'Sketch', note: 'Competes in interface design, especially historically.' },
      { name: 'Canva', note: 'Competes in broader design and visual communication.' },
      { name: 'Miro', note: 'Competes in collaborative ideation and whiteboarding.' },
    ],
    marketingIdeas: [
      { title: 'Show cross-functional collaboration', detail: 'Highlight how designers, PMs, engineers, and marketers work together in one file.' },
      { title: 'Create design system education', detail: 'Help teams understand governance, components, and scalability.' },
      { title: 'Promote community files', detail: 'Use templates and community resources as acquisition channels.' },
    ],
    interviewPrep: [
      { question: 'What does Figma do?', tip: 'It helps teams design and collaborate on digital products in the browser.' },
      { question: 'Why did it become popular?', tip: 'Real-time collaboration, browser access, and easier team workflows.' },
      { question: 'What is a strong marketing angle?', tip: 'Design is no longer isolated; Figma makes it collaborative.' },
    ],
  },

  {
    name: 'Netlify',
    domains: ['netlify.com'],
    aliases: ['netlify'],
    tagline: 'Netlify helps developers build, deploy, and scale modern websites and web applications.',
    summary:
      'Netlify is a web development platform that connects to code repositories and helps teams deploy websites, frontend applications, serverless functions, and web experiences quickly. It is especially popular with frontend developers, agencies, startups, and teams building Jamstack or modern web projects.',
    industry: 'Developer Tools',
    segments: ['Web Hosting', 'Frontend Cloud', 'Developer Platform', 'CI/CD', 'Jamstack'],
    stage: 'Private company',
    scale: 'Growth-stage software company',
    founded: '2014',
    highlights: [
      'Connects Git workflows to automatic deployments',
      'Popular for static sites, frontend apps, serverless functions, and previews',
      'Sells to developers, agencies, startups, and enterprise web teams',
      'Competes on developer experience and deployment speed',
    ],
    icpIntro:
      'Netlify serves developers and teams that want a faster, easier way to ship web projects.',
    icp: [
      { title: 'Frontend developers', description: 'Deploy sites and apps directly from Git with previews and automation.' },
      { title: 'Agencies', description: 'Launch client websites quickly with simpler hosting and collaboration.' },
      { title: 'Enterprise web teams', description: 'Use Netlify for scalable frontend delivery, previews, and modern web workflows.' },
    ],
    competitors: [
      { name: 'Vercel', note: 'Strong competitor in frontend deployment and developer experience.' },
      { name: 'Cloudflare Pages', note: 'Competes on edge network, performance, and developer tools.' },
      { name: 'Render', note: 'Competes as a modern deployment platform for apps and services.' },
      { name: 'AWS', note: 'Competes as the infrastructure default for teams building directly on cloud services.' },
    ],
    marketingIdeas: [
      { title: 'Create migration guides from legacy hosting', detail: 'Show teams how to move from older hosting workflows to modern frontend deployment.' },
      { title: 'Highlight agency case studies', detail: 'Agencies are strong proof points because speed and workflow efficiency matter to them.' },
      { title: 'Teach frontend architecture', detail: 'Educational content around previews, serverless, edge, and Jamstack can attract developers.' },
    ],
    interviewPrep: [
      { question: 'What does Netlify do?', tip: 'It helps developers deploy and manage modern websites and frontend apps from Git.' },
      { question: 'Who are Netlify’s competitors?', tip: 'Vercel, Cloudflare Pages, Render, AWS, and traditional hosting platforms.' },
      { question: 'What marketing opportunity exists?', tip: 'Explain modern web development in practical terms for developers, agencies, and enterprise teams.' },
    ],
  },

  {
    name: 'Stripe',
    domains: ['stripe.com'],
    aliases: ['stripe'],
    tagline: 'Stripe provides payment and financial infrastructure for internet businesses.',
    summary:
      'Stripe helps businesses accept payments, manage billing, prevent fraud, handle subscriptions, send payouts, and build financial products. Developers use Stripe APIs to add payments and financial workflows into websites, apps, marketplaces, and SaaS products.',
    industry: 'Financial Technology',
    segments: ['Payments', 'Billing', 'Fintech Infrastructure', 'SaaS', 'Marketplaces'],
    stage: 'Private company',
    scale: 'Large fintech company',
    founded: '2010',
    highlights: [
      'Developer-friendly payment APIs',
      'Supports online payments, subscriptions, billing, fraud prevention, and payouts',
      'Used by startups, marketplaces, SaaS companies, and enterprises',
      'Strong brand around developer experience and internet commerce',
    ],
    icpIntro:
      'Stripe serves businesses that need to move money online or build financial workflows into products.',
    icp: [
      { title: 'SaaS companies', description: 'Use Stripe for subscriptions, billing, invoicing, and payments.' },
      { title: 'Marketplaces', description: 'Use Stripe to collect payments and pay sellers or service providers.' },
      { title: 'E-commerce businesses', description: 'Use Stripe checkout, payments, fraud tools, and financial services.' },
    ],
    competitors: [
      { name: 'Adyen', note: 'Strong enterprise payment competitor, especially globally.' },
      { name: 'PayPal', note: 'Competes in online checkout and merchant payments.' },
      { name: 'Square', note: 'Competes in payments for small businesses and commerce.' },
      { name: 'Braintree', note: 'Competes in developer-friendly payment processing.' },
    ],
    marketingIdeas: [
      { title: 'Build vertical payment playbooks', detail: 'Create guides for SaaS, marketplaces, AI apps, e-commerce, and platforms.' },
      { title: 'Show developer speed', detail: 'Use demos and docs to prove how fast payments can be implemented.' },
      { title: 'Publish revenue infrastructure stories', detail: 'Show how businesses grow by improving billing, checkout, fraud, and payouts.' },
    ],
    interviewPrep: [
      { question: 'How would you explain Stripe?', tip: 'It helps businesses accept payments and build money movement into products.' },
      { question: 'What makes Stripe strong?', tip: 'Developer experience, APIs, product breadth, and trust in payments infrastructure.' },
      { question: 'What challenge exists?', tip: 'Global complexity, regulation, enterprise competition, and pricing pressure.' },
    ],
  },

  {
    name: 'HubSpot',
    domains: ['hubspot.com'],
    aliases: ['hubspot'],
    tagline: 'HubSpot provides CRM, marketing, sales, service, content, and operations software for growing businesses.',
    summary:
      'HubSpot is a customer platform that helps companies attract leads, manage contacts, run marketing campaigns, track sales pipelines, support customers, publish content, and connect data. It is known for inbound marketing and an easier-to-use CRM suite for growing teams.',
    industry: 'Marketing & Sales Technology',
    segments: ['CRM', 'Marketing Automation', 'Sales Software', 'Customer Service', 'CMS'],
    stage: 'Public company',
    scale: 'Large SaaS company',
    founded: '2006',
    highlights: [
      'All-in-one CRM platform',
      'Strong brand around inbound marketing',
      'Serves marketing, sales, service, content, and operations teams',
      'Popular with SMBs and mid-market companies',
    ],
    icpIntro:
      'HubSpot serves growing businesses that want CRM and go-to-market tools without heavy enterprise complexity.',
    icp: [
      { title: 'SMBs and mid-market companies', description: 'Use HubSpot to manage leads, customers, campaigns, and pipelines.' },
      { title: 'Marketing teams', description: 'Run email, landing pages, forms, automation, content, and reporting.' },
      { title: 'Sales and service teams', description: 'Manage deals, contacts, tasks, support tickets, and customer relationships.' },
    ],
    competitors: [
      { name: 'Salesforce', note: 'Enterprise CRM leader and frequent comparison.' },
      { name: 'Mailchimp', note: 'Competes in email marketing and SMB marketing tools.' },
      { name: 'ActiveCampaign', note: 'Competes in marketing automation and CRM for smaller businesses.' },
      { name: 'Zoho', note: 'Competes with broad business software and CRM offerings.' },
    ],
    marketingIdeas: [
      { title: 'Create lifecycle marketing templates', detail: 'Give teams plug-and-play workflows for lead nurture, onboarding, and reactivation.' },
      { title: 'Lean into easy migration stories', detail: 'Show how teams move from spreadsheets or scattered tools into HubSpot.' },
      { title: 'Build AI workflow education', detail: 'Teach marketers and sales teams how to use AI inside CRM workflows.' },
    ],
    interviewPrep: [
      { question: 'What does HubSpot do?', tip: 'It gives businesses one platform for CRM, marketing, sales, service, content, and operations.' },
      { question: 'Who buys HubSpot?', tip: 'Growing businesses, marketing teams, sales teams, service teams, and RevOps.' },
      { question: 'What is HubSpot’s positioning?', tip: 'Powerful enough to scale, easier to use than many enterprise systems.' },
    ],
  },
]

function normalizeInput(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split(/[/?#]/)[0]
}

function displayNameFromInput(raw: string): string {
  const cleaned = raw.trim()
  if (!cleaned) return 'Unknown Company'
  const domain = normalizeInput(cleaned)
  const core = domain.includes('.') ? domain.split('.')[0] : cleaned
  return core.charAt(0).toUpperCase() + core.slice(1)
}

function findCompany(rawInput: string): CompanyProfile | undefined {
  const normalized = normalizeInput(rawInput)
  const simple = normalized.replace(/\.[a-z]+$/, '').replace(/[^a-z0-9]/g, '')

  return COMPANIES.find((company) => {
    const domains = company.domains.map((d) => d.toLowerCase())
    const aliases = company.aliases.map((a) => a.toLowerCase().replace(/[^a-z0-9]/g, ''))
    const name = company.name.toLowerCase().replace(/[^a-z0-9]/g, '')

    return (
      domains.includes(normalized) ||
      aliases.includes(simple) ||
      aliases.includes(normalized) ||
      name === simple
    )
  })
}

function purposeLead(purpose: Purpose, name: string): string {
  switch (purpose) {
    case 'sales':
      return `Framed for sales prospecting: here is what ${name} does, who they likely care about, and where a conversation could open.`
    case 'interview':
      return `Framed for interview preparation: here is what ${name} does, how they make sense as a business, and what you can speak about confidently.`
    case 'competitive':
      return `Framed for competitive research: here is ${name}'s category, positioning, competitors, and market context.`
    case 'investment':
      return `Framed for investment research: here is ${name}'s business model, market position, strengths, and risks worth exploring.`
    case 'curiosity':
    default:
      return `A plain-language decode of what ${name} actually does and why it matters.`
  }
}

function unknownCompany(rawInput: string): AnalysisResult {
  const name = displayNameFromInput(rawInput)
  const domain = normalizeInput(rawInput)

  return {
    companyName: name,
    domain: domain || 'unknown',
    tagline: 'Demo report not available yet.',
    confidence: 0.25,
    whatTheyDo: {
      summary:
        'This demo currently uses prepared company profiles rather than live website analysis. Try Google, YouTube, LinkedIn, X, Instagram, TikTok, Meta, Microsoft, Apple, Amazon, Netflix, Spotify, OpenAI, Canva, Notion, Figma, Netlify, Stripe, or HubSpot.',
      highlights: [
        'No live web lookup is running yet',
        'Unknown companies are not auto-guessed to avoid inaccurate results',
        'Add this company to the database to support it in demo mode',
      ],
    },
    industry: {
      primary: 'Not available in demo mode',
      segments: ['Demo Mode', 'Prepared Data Only'],
      stage: 'Unknown',
      headcount: 'Unknown',
      founded: 'Unknown',
    },
    icp: {
      intro: 'No ICP is available because this company is not in the prepared database yet.',
      segments: [
        {
          title: 'Try a supported company',
          description:
            'Examples: Google, YouTube, LinkedIn, X, Instagram, TikTok, Meta, Microsoft, Apple, Amazon, Netflix, Spotify, OpenAI, Canva, Notion, Figma, Netlify, Stripe, or HubSpot.',
        },
      ],
    },
    competitors: [
      {
        name: 'Not available',
        note: 'Competitors are only shown for companies in the prepared demo database.',
      },
    ],
    marketingIdeas: [
      {
        title: 'Add this company to the database',
        detail:
          'To support this company, create a prepared profile with summary, industry, ICP, competitors, marketing ideas, and interview prep.',
      },
    ],
    interviewPrep: [
      {
        question: 'Why is this result empty?',
        tip:
          'The app is currently in demo mode and intentionally avoids inventing details for unknown companies.',
      },
    ],
  }
}

export function generateAnalysis(rawInput: string, purpose: Purpose): AnalysisResult {
  const company = findCompany(rawInput)

  if (!company) {
    return unknownCompany(rawInput)
  }

  return {
    companyName: company.name,
    domain: company.domains[0],
    tagline: company.tagline,
    confidence: 0.98,
    whatTheyDo: {
      summary: `${purposeLead(purpose, company.name)} ${company.summary}`,
      highlights: company.highlights,
    },
    industry: {
      primary: company.industry,
      segments: company.segments,
      stage: company.stage,
      headcount: company.scale,
      founded: company.founded,
    },
    icp: {
      intro: company.icpIntro,
      segments: company.icp,
    },
    competitors: company.competitors,
    marketingIdeas: company.marketingIdeas,
    interviewPrep: company.interviewPrep,
  }
}
