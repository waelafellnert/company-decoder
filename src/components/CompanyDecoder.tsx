import { useRef, useState } from 'react'
import {
  generateAnalysis,
  PURPOSE_OPTIONS,
  type AnalysisResult,
  type Purpose,
} from '../lib/mockData'
import Hero from './Hero'
import AnalyzerForm from './AnalyzerForm'
import LoadingState from './LoadingState'
import ResultsSection from './ResultsSection'

type Status = 'idle' | 'loading' | 'done'

export default function CompanyDecoder() {
  const [query, setQuery] = useState('')
  const [purpose, setPurpose] = useState<Purpose>(PURPOSE_OPTIONS[0].value)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  const handleAnalyze = () => {
    const trimmed = query.trim()
    if (trimmed.length < 2) {
      setError('Enter a company name or URL to decode.')
      return
    }
    setError(null)
    setStatus('loading')
    setResult(null)

    // Mock loading — no network. A short delay sells the "analyzing" moment.
    window.setTimeout(() => {
      setResult(generateAnalysis(trimmed, purpose))
      setStatus('done')
      window.setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
    }, 1400)
  }

  return (
    <div className="min-h-screen">
      <header className="hero-backdrop relative overflow-hidden">
        <div className="grid-overlay pointer-events-none absolute inset-0" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <Hero />
          <AnalyzerForm
            query={query}
            purpose={purpose}
            loading={status === 'loading'}
            error={error}
            onQueryChange={setQuery}
            onPurposeChange={setPurpose}
            onSubmit={handleAnalyze}
          />
        </div>
      </header>

      <main
        ref={resultsRef}
        className="mx-auto w-full max-w-5xl scroll-mt-6 px-6 pb-24"
      >
        {status === 'loading' && <LoadingState />}
        {status === 'done' && result && <ResultsSection result={result} />}
      </main>

      <footer className="border-t border-[var(--line)] py-8">
        <p className="mx-auto max-w-5xl px-6 text-sm text-[var(--ink-faint)]">
          Company Decoder · V1 demo — every brief is illustrative mock data, not a
          live lookup.
        </p>
      </footer>
    </div>
  )
}
