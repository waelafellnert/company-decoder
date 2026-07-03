import { ScanLine } from 'lucide-react'

export default function Hero() {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--blue-200)] bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[var(--blue-700)] backdrop-blur">
        <ScanLine className="h-3.5 w-3.5" strokeWidth={2.4} />
        COMPANY INTELLIGENCE, DECODED
      </span>

      <h1 className="font-display mt-6 text-4xl leading-[1.05] text-[var(--ink)] sm:text-6xl">
        Understand any company
        <span className="block text-[var(--blue-600)]">before the meeting.</span>
      </h1>

      <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
        Paste a company name or website and pick your angle. Company Decoder
        returns a plain-language brief — what they actually do, who they sell to,
        who they compete with, and how to walk in prepared.
      </p>
    </div>
  )
}
