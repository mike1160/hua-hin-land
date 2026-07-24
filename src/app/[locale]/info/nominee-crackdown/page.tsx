'use client'

import { useId, useState } from 'react'
import { useTranslations } from 'next-intl'
import BackButton from '@/components/BackButton'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'

const timelineKeys = ['t1', 't2', 't3', 't4', 't5', 't6'] as const

const timelineSources: Record<(typeof timelineKeys)[number], { label: string; href: string }[]> = {
  t1: [{ label: 'dbd.go.th', href: 'https://www.dbd.go.th' }],
  t2: [],
  t3: [{ label: 'thaigov.go.th', href: 'https://www.thaigov.go.th' }],
  t4: [],
  t5: [],
  t6: [
    { label: 'nationthailand.com', href: 'https://www.nationthailand.com' },
    { label: 'chiangraitimes.com', href: 'https://www.chiangraitimes.com' },
  ],
}

const comparisonKeys = [
  { key: 'row1', tone: 'safe' as const },
  { key: 'row2', tone: 'safe' as const },
  { key: 'row3', tone: 'safe' as const },
  { key: 'row4', tone: 'caution' as const },
  { key: 'row5', tone: 'danger' as const },
  { key: 'row6', tone: 'caution' as const },
]

const plotCheckKeys = ['check1', 'check2', 'check3', 'check4', 'check5'] as const
const actionStepKeys = ['step1', 'step2', 'step3', 'step4', 'step5'] as const
const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6', 'faq7'] as const

const sourceHrefs = [
  'https://www.nationthailand.com',
  'https://www.chiangraitimes.com',
  'https://lexbangkok.com/nominee-land-ownership-thailand-confiscation-risk/',
  'https://aimbangkok.com/thailand-nominee-land-crackdown-dol-enforcement-2026/',
  'https://www.propertysights.com',
  'https://www.zagdim.com',
  'https://www.closerlaw.com',
  'https://www.dbd.go.th',
  'https://www.thaigov.go.th',
  'https://www.dol.go.th',
] as const

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#C8973A] hover:text-[#d4a84f] transition-colors underline-offset-2 hover:underline"
    >
      {children}
    </a>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-b border-[#E8E2D6] last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-4 text-left"
      >
        <span className="text-[#1A2744] text-sm font-semibold leading-snug">{q}</span>
        <span
          className={`text-[#C8973A] text-lg leading-none flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <div id={panelId} className="pb-4 -mt-1">
          <p className="text-[#5C5247] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function NomineeCrackdownPage() {
  const t = useTranslations('nomineeCrackdown')
  const tc = useTranslations('common')

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>

      {/* Red warning banner */}
      <div className="bg-[#B91C1C] text-white px-4 py-3 text-center">
        <p className="text-sm md:text-base font-semibold leading-snug max-w-4xl mx-auto">{t('banner')}</p>
      </div>

      {/* Hero */}
      <div className="relative px-6 pt-10 pb-14 md:pt-14 md:pb-16">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #1A2744 0%, #243456 55%, #FAF7F0 100%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">{t('heroLabel')}</p>
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('heroTitle')}
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mt-5 max-w-2xl">{t('heroSub')}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-12 space-y-8 -mt-4">
        {/* SECTION 1 — Timeline */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2">{t('timelineLabel')}</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('timelineTitle')}
          </h2>
          <ol className="space-y-4">
            {timelineKeys.map((key, i) => {
              const sources = timelineSources[key]
              return (
                <li
                  key={key}
                  className="relative pl-6 border-l-2 border-[#C8973A]/40 last:border-transparent"
                >
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#C8973A]" />
                  <div className="bg-[#FAF7F0] border border-[#E8E2D6] rounded-[12px] p-4 md:p-5 -mt-1 mb-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <span className="text-[#C8973A] text-xs font-semibold uppercase tracking-wider">
                        {t(`${key}Date`)}
                      </span>
                      <span className="text-[#5C5247] text-xs">
                        {t('stepOf', { current: i + 1, total: timelineKeys.length })}
                      </span>
                    </div>
                    <h3 className="text-[#1A2744] font-semibold text-base mb-2">{t(`${key}Title`)}</h3>
                    <p className="text-[#5C5247] text-sm leading-relaxed">{t(`${key}Body`)}</p>
                    {sources.length > 0 && (
                      <p className="mt-3 text-xs text-[#5C5247]">
                        {t('source')}{' '}
                        {sources.map((s, idx) => (
                          <span key={s.href}>
                            {idx > 0 && ', '}
                            <ExtLink href={s.href}>{s.label}</ExtLink>
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        {/* SECTION 2 — Illegal (red) */}
        <section
          className="rounded-[12px] p-6 md:p-8 border"
          style={{ background: '#FEF2F2', borderColor: '#FECACA' }}
        >
          <p className="text-[#B91C1C] text-xs uppercase tracking-widest font-medium mb-2">{t('dangerLabel')}</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('dangerTitle')}
          </h2>
          <div className="space-y-4 text-[#5C5247] text-sm leading-relaxed">
            <p>{t('dangerP1')}</p>
            <p>
              {t('dangerP2Before')}
              <strong className="text-[#1A2744]">{t('dangerP2Bold1')}</strong>
              {t('dangerP2Mid')}
              <strong className="text-[#1A2744]">{t('dangerP2Bold2')}</strong>
              {t('dangerP2After')}
            </p>
            <p>
              <strong className="text-[#1A2744]">{t('dangerP3Bold')}</strong>
              {t('dangerP3After')}
            </p>
          </div>

          <div
            className="mt-6 rounded-[12px] p-4 border"
            style={{ background: '#FEE2E2', borderColor: '#F87171' }}
          >
            <p className="text-[#7F1D1D] text-sm font-semibold mb-1">{t('section94Title')}</p>
            <p className="text-[#7F1D1D]/90 text-sm leading-relaxed">
              {t('section94BodyBefore')}
              <strong>{t('section94Bold')}</strong>
              {t('section94BodyAfter')}
            </p>
          </div>

          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <ExtLink href="https://lexbangkok.com/nominee-land-ownership-thailand-confiscation-risk/">
                {t('linkLex')}
              </ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.dbd.go.th">{t('linkDbd')}</ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.krisdika.go.th">{t('linkFba')}</ExtLink>
            </li>
          </ul>
        </section>

        {/* SECTION 3 — Safe (green) */}
        <section
          className="rounded-[12px] p-6 md:p-8 border"
          style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}
        >
          <p className="text-[#15803D] text-xs uppercase tracking-widest font-medium mb-2">{t('safeLabel')}</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('safeTitle')}
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">{t('safeIntro')}</p>

          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-white/80">
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#BBF7D0]">{t('colStructure')}</th>
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#BBF7D0]">{t('colLegal')}</th>
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#BBF7D0]">{t('colSafe')}</th>
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#BBF7D0]">{t('colNotes')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonKeys.map((row) => (
                  <tr
                    key={row.key}
                    className={
                      row.tone === 'danger'
                        ? 'bg-[#FEF2F2]'
                        : row.tone === 'caution'
                          ? 'bg-[#FFFBEB]'
                          : 'bg-white/60'
                    }
                  >
                    <td className="p-3 border border-[#BBF7D0] text-[#1A2744] font-medium">{t(`${row.key}Structure`)}</td>
                    <td className="p-3 border border-[#BBF7D0] text-[#5C5247] whitespace-nowrap">{t(`${row.key}Legal`)}</td>
                    <td className="p-3 border border-[#BBF7D0] text-[#5C5247] whitespace-nowrap">{t(`${row.key}Safe`)}</td>
                    <td className="p-3 border border-[#BBF7D0] text-[#5C5247]">{t(`${row.key}Notes`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <ExtLink href="https://ltr.boi.go.th">{t('linkLtr')}</ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.dol.go.th">{t('linkDol')}</ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.thai-privilege.com">{t('linkPrivilege')}</ExtLink>
            </li>
          </ul>
        </section>

        {/* SECTION 4 — This plot (gold) */}
        <section
          className="rounded-[12px] p-6 md:p-8 border"
          style={{ background: '#FFFBF0', borderColor: '#E8D5A8' }}
        >
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2">{t('plotLabel')}</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('plotTitle')}
          </h2>
          <ul className="space-y-3 text-[#5C5247] text-sm leading-relaxed mb-6">
            <li>
              <strong className="text-[#1A2744]">{t('plotLi1Bold')}</strong>
              {t('plotLi1')}
            </li>
            <li>
              <strong className="text-[#1A2744]">{t('plotLi2Bold')}</strong>
              {t('plotLi2')}
            </li>
            <li>
              {t('plotLi3Before')}
              <strong className="text-[#1A2744]">{t('plotLi3Bold')}</strong>
              {t('plotLi3After')}
            </li>
            <li>
              <strong className="text-[#1A2744]">{t('plotLi4Bold')}</strong>
              {t('plotLi4')}
            </li>
            <li>
              {t('plotLi5Before')}
              <ExtLink href="https://data.hua-hin-land.com">data.hua-hin-land.com</ExtLink>
              {t('plotLi5After')}
            </li>
            <li>
              {t('plotLi6Before')}
              <strong className="text-[#1A2744]">{t('plotLi6Bold')}</strong>
              {t('plotLi6After')}
            </li>
          </ul>

          <ul className="space-y-2.5 mb-6">
            {plotCheckKeys.map((key) => (
              <li key={key} className="flex gap-2 text-sm text-[#1A2744]">
                <span className="text-[#15803D] flex-shrink-0 font-bold">✅</span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://data.hua-hin-land.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-[12px] text-sm font-semibold text-white bg-[#C8973A] hover:bg-[#d4a84f] transition-colors"
          >
            {t('verifyCta')}
          </a>
        </section>

        {/* SECTION 5 — Already have nominee */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
          <p className="text-[#B91C1C] text-xs uppercase tracking-widest font-medium mb-2">{t('ownLabel')}</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('ownTitle')}
          </h2>
          <div className="space-y-4 mb-6">
            {actionStepKeys.map((key, i) => (
              <div key={key} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A2744] text-white text-sm font-bold flex items-center justify-center"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-[#1A2744] font-semibold text-sm mb-1">{t(`${key}Title`)}</p>
                  <p className="text-[#5C5247] text-sm leading-relaxed">{t(`${key}Body`)}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-[12px] p-4 border mb-5"
            style={{ background: '#FEF2F2', borderColor: '#FECACA' }}
          >
            <p className="text-[#7F1D1D] text-sm leading-relaxed">
              <strong>{t('ownWarningBold')}</strong>
              {t('ownWarning')}
            </p>
          </div>

          <ul className="space-y-2 text-sm">
            <li>
              <ExtLink href="https://www.lawsociety.or.th">{t('linkLawyer')}</ExtLink>
            </li>
            <li>
              <ExtLink href="https://aimbangkok.com/thailand-nominee-land-crackdown-dol-enforcement-2026/">
                {t('linkAim')}
              </ExtLink>
            </li>
          </ul>
        </section>

        {/* SECTION 6 — FAQ */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2">{t('faqLabel')}</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('faqTitle')}
          </h2>
          <div>
            {faqKeys.map((key) => (
              <FaqItem key={key} q={t(`${key}Q`)} a={t(`${key}A`)} />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-[16px] p-6 md:p-8 text-center bg-[#1A2744]">
          <p
            className="text-white text-lg md:text-xl font-semibold leading-snug mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('ctaTitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://data.hua-hin-land.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-[12px] text-sm font-semibold text-[#1A2744] bg-[#C8973A] hover:bg-[#d4a84f] transition-colors"
            >
              {t('ctaVerify')}
            </a>
            <LineButton size="md" />
            <Link
              href="/info/size"
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-[12px] text-sm font-semibold text-white border border-white/40 hover:border-[#C8973A] hover:text-[#C8973A] transition-colors"
            >
              {t('ctaPlot')}
            </Link>
          </div>
        </section>

        {/* Legal disclaimer */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-5">
          <p className="text-[#5C5247] text-xs leading-relaxed">
            <strong className="text-[#1A2744]">{t('legalDisclaimerBold')}</strong>
            {t('legalDisclaimer')}
          </p>
        </div>

        {/* Sources */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">{t('sourcesLabel')}</p>
          <ul className="space-y-2.5 text-sm">
            {sourceHrefs.map((href, i) => {
              const n = i + 1
              return (
                <li key={href} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                  <span className="text-[#5C5247] text-xs sm:text-sm sm:min-w-[200px]">
                    {t(`src${n}Name`)} ({t(`src${n}Date`)})
                  </span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A2744] hover:text-[#C8973A] transition-colors font-medium break-all"
                  >
                    {href.replace(/^https?:\/\//, '')}
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        <DisclaimerFooter />
        <div className="text-center pt-2 pb-4">
          <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
            {tc('backFooter')}
          </Link>
        </div>
      </div>
    </main>
  )
}
