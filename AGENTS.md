# AGENTS.md

Overview of the Company Decoder project for developers and AI agents.

## Project Overview

**Company Decoder** is a client-side React + TypeScript single-page app. A user
enters a company name or URL, picks a purpose, and receives a plain-language
brief split across six cards (what the company does, industry, ideal customer
profile, competitors, marketing ideas, and interview prep).

This is a **V1 demo**: there is **no backend, no API, no database, and no
persistence**. All results come from a deterministic in-browser mock engine.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR shell) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + CSS custom properties |
| Icons | lucide-react |
| Language | TypeScript 5.9 (strict) |
| Deployment | Netlify |

## Directory Structure

```
src/
├── components/
│   ├── CompanyDecoder.tsx   # Stateful orchestrator: query/purpose/status state, mock loading
│   ├── Hero.tsx             # Headline + intro copy
│   ├── AnalyzerForm.tsx     # Input + purpose <select> + Analyze button; validation
│   ├── LoadingState.tsx     # Six-card skeleton shown during the mock delay
│   ├── ResultsSection.tsx   # Result header + the six ResultCards
│   └── ResultCard.tsx       # Presentational card shell with staggered entrance
├── lib/
│   └── mockData.ts          # Types, purpose options, and generateAnalysis()
├── routes/
│   ├── __root.tsx           # HTML shell, <head> metadata, Google Fonts
│   └── index.tsx            # `/` route → renders <CompanyDecoder />
├── router.tsx               # TanStack Router setup
└── styles.css               # Tailwind import, theme tokens, animations
```

## Key Concepts

### Mock data engine (`src/lib/mockData.ts`)

`generateAnalysis(rawInput, purpose)` is the heart of the app. It:

1. Parses the input into a display name + domain (handles bare names and URLs).
2. Hashes the input to deterministically pick one of several company
   **archetypes** (devtools, fintech, healthtech, martech, commerce). The same
   input always returns the same brief.
3. Weaves the real company name and a purpose-specific lead sentence into the
   archetype's hand-authored copy, returning a typed `AnalysisResult`.

To add variety, append a new `Archetype` object to the `ARCHETYPES` array — no
other code changes are required.

### State & the mock loading flow

`CompanyDecoder` holds all state (`query`, `purpose`, `status`, `error`,
`result`). Clicking Analyze validates input, sets `status = 'loading'`, and uses
a `setTimeout` (~1.4s) to simulate work before rendering results and smooth-
scrolling to them. There is intentionally no network call.

## Conventions

- **Components**: PascalCase, one component per file, presentational vs.
  stateful separation (`CompanyDecoder` owns state; the rest take props).
- **Styling**: Tailwind utility classes; shared colors/tokens live as CSS
  variables in `styles.css` (referenced via `var(--blue-600)` etc.). Theme is a
  clean blue on a light, blue-tinted surface — no dark mode.
- **Fonts**: Bricolage Grotesque (display, via `.font-display`) + Manrope
  (body), loaded in `__root.tsx`.
- **TypeScript**: strict mode; type-only imports use the `type` keyword.

## Extending later

The structure is intentionally easy to grow:

- **Real data**: replace `generateAnalysis` with a call to a Netlify Function.
  Keep the `AnalysisResult` type as the contract so the UI is unchanged.
- **More cards**: add a field to `AnalysisResult`, populate it in the
  archetypes, and add one more `<ResultCard>` in `ResultsSection.tsx`.
- **Persistence/history**: would require a Netlify platform primitive
  (Database or Blobs) — none is wired up in V1.

## Development Commands

```bash
npm run dev      # Start dev server (Vite, port 3000)
npm run build    # Production build
```
