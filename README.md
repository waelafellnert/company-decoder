# Company Decoder

Paste a company name or website, pick your angle, and get a clean, plain-language
brief — what the company actually does, its industry, ideal customers,
competitors, marketing ideas, and interview prep — laid out across six cards.

This is a **V1 demo**. Every brief is generated from a deterministic in-browser
mock engine: there is **no API, no file upload, no PDF export, no dark mode, and
no history**. It's built to look and feel polished and to be easy to expand into
a real, data-backed tool later.

## Features

- Hero section with a focused value proposition
- Single input that accepts a **company name or URL**
- **Purpose** dropdown (sales prospecting, interview prep, competitive research,
  investment research, general curiosity) that subtly tailors the brief
- **Analyze** button with a realistic mock loading state and skeleton cards
- Results section with six cards:
  1. What They Actually Do
  2. Industry
  3. Ideal Customer Profile (ICP)
  4. Competitors
  5. Marketing Ideas
  6. Interview Prep
- Clean blue theme, fully responsive (1 → 2 → 3 column grid)

## Tech Stack

- **TanStack Start** + **React 19** + **TanStack Router**
- **Vite 7** build tooling
- **Tailwind CSS 4** with CSS custom-property theme tokens
- **lucide-react** icons
- **TypeScript** (strict)
- Deployed on **Netlify**

## Running Locally

```bash
npm install
npm run dev
```

Then open the printed local URL (Vite serves on port 3000 by default).

To run through the Netlify dev environment instead:

```bash
netlify dev --port 8889
```

## How It Works

The mock engine lives in `src/lib/mockData.ts`. `generateAnalysis(input, purpose)`
parses the input, hashes it to pick a company archetype, and returns a typed
`AnalysisResult` that the UI renders. The same input always produces the same
brief. See `AGENTS.md` for architecture details and extension points.

## Project Structure

```
src/
├── components/   # Hero, AnalyzerForm, LoadingState, ResultsSection, ResultCard, CompanyDecoder
├── lib/          # mockData.ts — types + generateAnalysis()
├── routes/       # __root.tsx (shell + fonts), index.tsx (/)
└── styles.css    # theme tokens + animations
```
