// Skeleton that mirrors the shape of the six result cards so the layout
// doesn't jump when real content arrives.
export default function LoadingState() {
  return (
    <section className="pt-12">
      <div className="flex items-center gap-3">
        <div className="skeleton h-3 w-3 rounded-full" />
        <p className="text-sm font-medium text-[var(--ink-soft)]">
          Decoding the company — reading the market, mapping competitors,
          drafting your brief…
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6"
          >
            <div className="flex items-center gap-3">
              <div className="skeleton h-10 w-10 rounded-xl" />
              <div className="skeleton h-4 w-32 rounded" />
            </div>
            <div className="mt-6 space-y-3">
              <div className="skeleton h-3 w-full rounded" />
              <div className="skeleton h-3 w-[92%] rounded" />
              <div className="skeleton h-3 w-[78%] rounded" />
              <div className="skeleton h-3 w-[85%] rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
