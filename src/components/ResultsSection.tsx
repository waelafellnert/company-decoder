import {
  Briefcase,
  Building2,
  Lightbulb,
  MessagesSquare,
  Swords,
  Target,
} from 'lucide-react'
import type { AnalysisResult } from '../lib/mockData'
import ResultCard from './ResultCard'

const ICON_SIZE = 20

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--blue-500)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ResultsSection({ result }: { result: AnalysisResult }) {
  const purpose = result.purpose

  return (
    <section className="pt-12">
      <div className="animate-rise flex flex-col gap-4 border-b border-[var(--line)] pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--blue-600)]">
            Decoded brief
          </p>
          <h2 className="font-display mt-1 text-3xl text-[var(--ink)] sm:text-4xl">
            {result.companyName}
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--ink-soft)]">{result.tagline}</p>
        </div>

        <div className="flex shrink-0 items-center gap-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--ink-faint)]">
              Domain
            </p>
            <p className="font-medium text-[var(--ink)]">{result.domain}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--ink-faint)]">
              Confidence
            </p>
            <p className="font-medium text-[var(--ink)]">
              {Math.round(result.confidence * 100)}%
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <ResultCard
          index={0}
          icon={<Target size={ICON_SIZE} strokeWidth={2} />}
          title={
            purpose === 'sales'
              ? 'Sales Snapshot'
              : purpose === 'interview'
                ? 'Company Overview'
                : purpose === 'competitive'
                  ? 'Positioning'
                  : purpose === 'investment'
                    ? 'Business Overview'
                    : 'What They Actually Do'
          }
        >
          <p>{result.whatTheyDo.summary}</p>
          <div className="mt-4">
            <BulletList items={result.whatTheyDo.highlights} />
          </div>
        </ResultCard>

        <ResultCard
          index={1}
          icon={<Building2 size={ICON_SIZE} strokeWidth={2} />}
          title={
            purpose === 'sales'
              ? 'Who to Sell To'
              : purpose === 'interview'
                ? 'Industry Context'
                : purpose === 'competitive'
                  ? 'Category'
                  : purpose === 'investment'
                    ? 'Market Category'
                    : 'Industry'
          }
        >
          <p className="font-medium text-[var(--ink)]">{result.industry.primary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {result.industry.segments.map((seg) => (
              <span
                key={seg}
                className="rounded-full bg-[var(--blue-50)] px-3 py-1 text-xs font-semibold text-[var(--blue-700)]"
              >
                {seg}
              </span>
            ))}
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-[var(--line)] pt-4">
            <div>
              <dt className="text-xs text-[var(--ink-faint)]">Stage</dt>
              <dd className="mt-0.5 font-semibold text-[var(--ink)]">
                {result.industry.stage}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--ink-faint)]">Scale</dt>
              <dd className="mt-0.5 font-semibold text-[var(--ink)]">
                {result.industry.headcount}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--ink-faint)]">Founded</dt>
              <dd className="mt-0.5 font-semibold text-[var(--ink)]">
                {result.industry.founded}
              </dd>
            </div>
          </dl>
        </ResultCard>

        <ResultCard
          index={2}
          icon={<Target size={ICON_SIZE} strokeWidth={2} />}
          title={
            purpose === 'sales'
              ? 'Buying Triggers'
              : purpose === 'interview'
                ? 'Why Work Here'
                : purpose === 'competitive'
                  ? 'Weak Spots'
                  : purpose === 'investment'
                    ? 'Moat'
                    : 'Ideal Customer Profile'
          }
        >
          {purpose === 'curiosity' ? (
            <>
              <p>{result.icp.intro}</p>
              <ul className="mt-4 space-y-3">
                {result.icp.segments.map((seg) => (
                  <li key={seg.title}>
                    <p className="font-semibold text-[var(--ink)]">{seg.title}</p>
                    <p className="text-sm">{seg.description}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <BulletList
              items={
                purpose === 'sales'
                  ? [
                      `A team is already showing pain around ${result.industry.segments[0]}.`,
                      `They fit the buyer profile: ${result.icp.segments[0]?.title}.`,
                      `They may be comparing options like ${result.competitors[0]?.name}.`,
                    ]
                  : purpose === 'interview'
                    ? [
                        `Clear category story: ${result.industry.primary}.`,
                        `Useful customer lens: ${result.icp.intro}`,
                        `Good talking point: how they stand out from ${result.competitors[0]?.name}.`,
                      ]
                    : purpose === 'competitive'
                      ? [
                          `They need to clearly explain why they are different from ${result.competitors[0]?.name}.`,
                          `Their positioning can become too broad if they try to speak to every segment.`,
                          `A competitor could attack on pricing, switching costs, or product depth.`,
                        ]
                      : [
                          `Potential moat: brand, distribution, workflow depth, ecosystem, or customer lock-in.`,
                          `Strong signal: clear customer segments and category relevance.`,
                          `Key diligence question: can growth continue efficiently as competition increases?`,
                        ]
              }
            />
          )}
        </ResultCard>

        <ResultCard
          index={3}
          icon={<Swords size={ICON_SIZE} strokeWidth={2} />}
          title={
            purpose === 'sales'
              ? 'Objections'
              : purpose === 'interview'
                ? 'Questions to Ask'
                : purpose === 'investment'
                  ? 'Risks'
                  : 'Competitors'
          }
        >
          {purpose === 'sales' ? (
            <BulletList
              items={[
                `“We already use ${result.competitors[0]?.name}.”`,
                '“This is not a priority right now.”',
                '“We need clear ROI before switching.”',
                '“Our current process works well enough.”',
              ]}
            />
          ) : purpose === 'interview' ? (
            <BulletList
              items={[
                `How is ${result.companyName} positioning itself as the category changes?`,
                'Which customer segment is the team most focused on right now?',
                'What marketing channels are working best today?',
                'Where could this role make the biggest impact in the first 90 days?',
              ]}
            />
          ) : purpose === 'investment' ? (
            <BulletList
              items={[
                'Competitive pressure could increase customer acquisition costs.',
                'Growth may depend on expanding beyond early adopters.',
                'Platform, regulation, pricing, or category shifts could affect momentum.',
              ]}
            />
          ) : (
            <ul className="space-y-3">
              {result.competitors.map((c) => (
                <li key={c.name} className="flex flex-col">
                  <span className="font-semibold text-[var(--ink)]">{c.name}</span>
                  <span className="text-sm">{c.note}</span>
                </li>
              ))}
            </ul>
          )}
        </ResultCard>

        <ResultCard
          index={4}
          icon={<Lightbulb size={ICON_SIZE} strokeWidth={2} />}
          title={
            purpose === 'sales'
              ? 'Outreach Angles'
              : purpose === 'interview'
                ? 'Your Talking Points'
                : purpose === 'competitive'
                  ? 'Marketing Angles'
                  : purpose === 'investment'
                    ? 'Growth Signals'
                    : 'Marketing Ideas'
          }
        >
          <ol className="space-y-4">
            {result.marketingIdeas.map((idea, i) => (
              <li key={idea.title} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--blue-600)] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-[var(--ink)]">{idea.title}</p>
                  <p className="text-sm">{idea.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </ResultCard>

        <ResultCard
          index={5}
          icon={<MessagesSquare size={ICON_SIZE} strokeWidth={2} />}
          title={
            purpose === 'sales'
              ? 'Sales Cheat Sheet'
              : purpose === 'interview'
                ? 'Interview Prep'
                : purpose === 'competitive'
                  ? 'Competitive Takeaways'
                  : purpose === 'investment'
                    ? 'Diligence Questions'
                    : 'Quick Takeaways'
          }
        >
          <ul className="space-y-4">
            {result.interviewPrep.map((item) => (
              <li key={item.question}>
                <p className="flex gap-2 font-semibold text-[var(--ink)]">
                  <Briefcase
                    size={16}
                    strokeWidth={2.2}
                    className="mt-0.5 shrink-0 text-[var(--blue-500)]"
                  />
                  {item.question}
                </p>
                <p className="mt-1 pl-6 text-sm">{item.tip}</p>
              </li>
            ))}
          </ul>
        </ResultCard>
      </div>
    </section>
  )
}
