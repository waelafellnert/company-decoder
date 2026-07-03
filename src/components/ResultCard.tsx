import type { ReactNode } from 'react'

interface Props {
  index: number
  icon: ReactNode
  title: string
  children: ReactNode
}

// A single result card. `index` drives a staggered entrance so the six cards
// cascade in rather than snapping on all at once.
export default function ResultCard({ index, icon, title, children }: Props) {
  return (
    <article
      className="animate-rise flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_1px_2px_rgba(15,31,77,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--blue-200)] hover:shadow-[0_20px_40px_-24px_rgba(15,31,77,0.4)]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <header className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--blue-50)] text-[var(--blue-600)]">
          {icon}
        </span>
        <h3 className="font-display text-lg text-[var(--ink)]">{title}</h3>
      </header>
      <div className="mt-5 text-[15px] leading-relaxed text-[var(--ink-soft)]">
        {children}
      </div>
    </article>
  )
}
