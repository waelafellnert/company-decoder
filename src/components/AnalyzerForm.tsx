import { ChevronDown, Loader2, Search, Sparkles } from 'lucide-react'
import { PURPOSE_OPTIONS, type Purpose } from '../lib/mockData'

interface Props {
  query: string
  purpose: Purpose
  loading: boolean
  error: string | null
  onQueryChange: (value: string) => void
  onPurposeChange: (value: Purpose) => void
  onSubmit: () => void
}

export default function AnalyzerForm({
  query,
  purpose,
  loading,
  error,
  onQueryChange,
  onPurposeChange,
  onSubmit,
}: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!loading) onSubmit()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl border border-[var(--line)] bg-white/90 p-3 shadow-[0_20px_50px_-24px_rgba(15,31,77,0.35)] backdrop-blur sm:p-4"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {/* Company input */}
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--ink-faint)]"
            strokeWidth={2}
          />
          <label htmlFor="company" className="sr-only">
            Company name or URL
          </label>
          <input
            id="company"
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="stripe.com  ·  or  ·  Notion"
            autoComplete="off"
            className="h-14 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] pl-12 pr-4 text-base text-[var(--ink)] outline-none transition focus:border-[var(--blue-500)] focus:bg-white focus:ring-4 focus:ring-[var(--blue-100)]"
          />
        </div>

        {/* Purpose dropdown */}
        <div className="relative lg:w-64">
          <label htmlFor="purpose" className="sr-only">
            Purpose
          </label>
          <select
            id="purpose"
            value={purpose}
            onChange={(e) => onPurposeChange(e.target.value as Purpose)}
            className="h-14 w-full appearance-none rounded-xl border border-[var(--line)] bg-[var(--surface)] pl-4 pr-11 text-base font-medium text-[var(--ink)] outline-none transition focus:border-[var(--blue-500)] focus:bg-white focus:ring-4 focus:ring-[var(--blue-100)]"
          >
            {PURPOSE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--ink-faint)]"
            strokeWidth={2}
          />
        </div>

        {/* Analyze button */}
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[var(--blue-600)] px-7 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(27,82,230,0.7)] transition hover:bg-[var(--blue-700)] focus:outline-none focus:ring-4 focus:ring-[var(--blue-200)] disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2.4} />
              Analyzing
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 transition group-hover:scale-110" strokeWidth={2.2} />
              Analyze
            </>
          )}
        </button>
      </div>

      {error && (
        <p className="mt-3 pl-1 text-sm font-medium text-[var(--blue-700)]">
          {error}
        </p>
      )}
    </form>
  )
}
