'use client'

import { useId, useState } from 'react'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import LineButton from '@/components/LineButton'
import { Link } from '@/i18n/navigation'

const timeline = [
  {
    date: 'October 2025',
    title: 'IBAS AI system launches',
    body: "Thailand's Department of Business Development activates the Intelligence Business Analytic System — an AI platform cross-referencing corporate registry, tax data, and land records in real time. 40,000–50,000 company and land transaction records scanned.",
    sources: [{ label: 'dbd.go.th', href: 'https://www.dbd.go.th' }],
  },
  {
    date: 'January–April 2026',
    title: 'Seven new regulatory instruments',
    body: 'New mandatory in-person verification requirements and investment confirmation letters take effect 1 April 2026. DBD and Land Department sign a formal data-exchange agreement. Central Investigation Bureau MOU signed — a flag in one agency triggers simultaneous investigation in others.',
    sources: [] as { label: string; href: string }[],
  },
  {
    date: 'February 2026',
    title: 'Cabinet directive',
    body: "Thailand's Cabinet (24 February 2026) acknowledges an inter-agency progress report and directs further legislative work — including a proposed amendment to Land Code Section 94 that would allow confiscation WITHOUT compensation.",
    sources: [{ label: 'thaigov.go.th', href: 'https://www.thaigov.go.th' }],
  },
  {
    date: 'March 2026',
    title: 'Pattaya operation',
    body: '100+ companies identified for deeper investigation in Pattaya alone. Rayong and Chonburi: 72 rai case under active legal proceedings.',
    sources: [] as { label: string; href: string }[],
  },
  {
    date: 'May 2026',
    title: 'Koh Pha-ngan crackdown',
    body: 'Pool villas and luxury hotel businesses inspected. Nominee network with combined value THB 200 million frozen and seized.',
    sources: [] as { label: string; href: string }[],
  },
  {
    date: 'Mid-2026',
    title: 'Current status',
    body: '852 companies prosecuted. THB 15.1 billion in identified economic damages. Six priority sectors: tourism, land trade & real estate, e-commerce, agriculture, hotels & resorts, construction.',
    sources: [
      { label: 'nationthailand.com', href: 'https://www.nationthailand.com' },
      { label: 'chiangraitimes.com', href: 'https://www.chiangraitimes.com' },
    ],
  },
]

const comparisonRows = [
  {
    structure: 'Condo freehold (49% quota)',
    legal: '✅ Yes',
    safe: '✅ Fully safe',
    notes: 'Own in your name',
    tone: 'safe' as const,
  },
  {
    structure: 'Registered 30-year lease',
    legal: '✅ Yes',
    safe: '✅ Fully safe',
    notes: 'Must be registered at Land Office',
    tone: 'safe' as const,
  },
  {
    structure: 'LTR Visa property rights',
    legal: '✅ Yes',
    safe: '✅ Fully safe',
    notes: 'New since 2022',
    tone: 'safe' as const,
  },
  {
    structure: 'Genuine Thai company (real business)',
    legal: '✅ Yes',
    safe: '⚠️ Check substance',
    notes: 'Must have real Thai business activity',
    tone: 'caution' as const,
  },
  {
    structure: 'Nominee Thai company',
    legal: '❌ No',
    safe: '❌ Active target',
    notes: 'Prosecution + possible confiscation',
    tone: 'danger' as const,
  },
  {
    structure: 'Unregistered lease',
    legal: '⚠️ Gray',
    safe: '⚠️ Risk',
    notes: 'Not enforceable if disputed',
    tone: 'caution' as const,
  },
]

const plotChecks = [
  'Chanote title — strongest in Thailand',
  'Thai seller — clean transfer',
  'Lease registration at Land Office — safe legal structure',
  'Independent verification available',
  'No nominee structure',
]

const actionSteps = [
  {
    n: '1',
    title: 'Consult a Thai property lawyer immediately',
    body: 'Do not wait. A licensed practitioner can assess your structure, exposure, and options under current rules.',
  },
  {
    n: '2',
    title: 'Understand the current disposal window',
    body: 'Under current law: typically a 180-day to 1-year disposal order — you keep proceeds from a forced sale. Act while this framework still applies.',
  },
  {
    n: '3',
    title: 'Watch the proposed Section 94 change',
    body: 'Proposed change (not yet law): confiscation without compensation. That would eliminate financial recovery if enacted.',
  },
  {
    n: '4',
    title: 'Document genuine Thai investment',
    body: 'Show Thai shareholders are real investors with real financial capacity — not paper nominees. Substance is what IBAS and investigators look for.',
  },
  {
    n: '5',
    title: 'Consider restructuring to a registered lease',
    body: 'Moving to a Land Office–registered lease before enforcement reaches you may be safer than waiting for an investigation flag.',
  },
]

const faqs = [
  {
    q: 'Does this affect my condo purchase?',
    a: 'No. Condo freehold ownership within the 49% foreign quota is completely safe and not targeted.',
  },
  {
    q: 'Is a 30-year lease safe?',
    a: 'Yes — IF it is registered at the Land Office. An unregistered lease is not enforceable if disputed.',
  },
  {
    q: 'What areas are being targeted?',
    a: 'Phuket, Koh Samui, Pattaya, Koh Pha-ngan are the current hot zones. The enforcement is national but resources are focused on tourist areas first.',
  },
  {
    q: 'Can I still buy through a Thai company?',
    a: 'Only if the company has genuine Thai business activity and Thai shareholders who are real investors with real financial capacity. Nominee structures are illegal.',
  },
  {
    q: 'What is the IBAS system?',
    a: "The Intelligence Business Analytic System — an AI platform operated by Thailand's DBD since October 2025. It cross-references 40,000–50,000 company and land records to detect nominee patterns automatically.",
  },
  {
    q: 'Is Hua Hin being targeted?',
    a: 'Not yet in the current enforcement wave, which focuses on Phuket, Samui and Pattaya. But enforcement is expanding nationally. Hua Hin buyers should not assume they are safe from future enforcement.',
  },
  {
    q: 'How do I verify a title deed?',
    a: 'Visit the Land Office where the land is registered, or use data.hua-hin-land.com for a guide on what to check.',
  },
]

const sources = [
  { name: 'Nation Thailand', date: 'June 2026', href: 'https://www.nationthailand.com' },
  { name: 'Chiang Rai Times', date: 'March 2026', href: 'https://www.chiangraitimes.com' },
  {
    name: 'Lex Bangkok',
    date: 'April 2026',
    href: 'https://lexbangkok.com/nominee-land-ownership-thailand-confiscation-risk/',
  },
  {
    name: 'AIM Bangkok',
    date: 'July 2026',
    href: 'https://aimbangkok.com/thailand-nominee-land-crackdown-dol-enforcement-2026/',
  },
  { name: 'Property Sights', date: 'July 2026', href: 'https://www.propertysights.com' },
  { name: 'Zagdim Overseas', date: 'June 2026', href: 'https://www.zagdim.com' },
  { name: 'Closer Law', date: 'June 2026', href: 'https://www.closerlaw.com' },
  { name: 'Department of Business Development (DBD)', date: '2025–2026', href: 'https://www.dbd.go.th' },
  { name: 'Thai Government', date: 'February 2026', href: 'https://www.thaigov.go.th' },
  { name: 'Land Department', date: 'Ongoing', href: 'https://www.dol.go.th' },
]

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
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      {/* Red warning banner */}
      <div className="bg-[#B91C1C] text-white px-4 py-3 text-center">
        <p className="text-sm md:text-base font-semibold leading-snug max-w-4xl mx-auto">
          ⚠️ Active enforcement — Thailand is prosecuting nominee land structures in 2026
        </p>
      </div>

      {/* Hero */}
      <div className="relative px-6 pt-10 pb-14 md:pt-14 md:pb-16">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #1A2744 0%, #243456 55%, #FAF7F0 100%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link href="/" className="text-[#C8973A] text-xs mb-5 inline-block hover:text-[#d4a84f] transition-colors">
            ← Back to listing
          </Link>
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-3">
            Foreign buyer guide · Last updated July 2026
          </p>
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Thailand&apos;s Nominee Land Crackdown — The Complete Guide for Foreign Buyers
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mt-5 max-w-2xl">
            852 companies prosecuted. THB 15.1 billion in damages identified. AI scanning 50,000+ records.
            Here is everything you need to know — and what to do.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-12 space-y-8 -mt-4">
        {/* SECTION 1 — Timeline */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2">How it escalated</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Enforcement timeline 2025–2026
          </h2>
          <ol className="space-y-4">
            {timeline.map((item, i) => (
              <li
                key={item.date}
                className="relative pl-6 border-l-2 border-[#C8973A]/40 last:border-transparent"
              >
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#C8973A]" />
                <div className="bg-[#FAF7F0] border border-[#E8E2D6] rounded-[12px] p-4 md:p-5 -mt-1 mb-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <span className="text-[#C8973A] text-xs font-semibold uppercase tracking-wider">
                      {item.date}
                    </span>
                    <span className="text-[#5C5247] text-xs">Step {i + 1} of {timeline.length}</span>
                  </div>
                  <h3 className="text-[#1A2744] font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-[#5C5247] text-sm leading-relaxed">{item.body}</p>
                  {item.sources.length > 0 && (
                    <p className="mt-3 text-xs text-[#5C5247]">
                      Source:{' '}
                      {item.sources.map((s, idx) => (
                        <span key={s.href}>
                          {idx > 0 && ', '}
                          <ExtLink href={s.href}>{s.label}</ExtLink>
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* SECTION 2 — Illegal (red) */}
        <section
          className="rounded-[12px] p-6 md:p-8 border"
          style={{ background: '#FEF2F2', borderColor: '#FECACA' }}
        >
          <p className="text-[#B91C1C] text-xs uppercase tracking-widest font-medium mb-2">Danger · Illegal</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What authorities are targeting
          </h2>
          <div className="space-y-4 text-[#5C5247] text-sm leading-relaxed">
            <p>
              A Thai company where Thai shareholders are &quot;nominees&quot; — holding shares on paper while a
              foreigner controls and funds everything — is the core target of this crackdown.
            </p>
            <p>
              This has <strong className="text-[#1A2744]">always been illegal</strong> under the Land Code and
              the Foreign Business Act. What changed in 2025–2026 is not the law — it is{' '}
              <strong className="text-[#1A2744]">enforcement intensity and technology</strong>.
            </p>
            <p>
              <strong className="text-[#1A2744]">IBAS red flags</strong> include: multiple companies at the same
              address; shareholders whose financial status does not match share value; concentrated shareholding;
              and capital flows inconsistent with declared income.
            </p>
          </div>

          <div
            className="mt-6 rounded-[12px] p-4 border"
            style={{ background: '#FEE2E2', borderColor: '#F87171' }}
          >
            <p className="text-[#7F1D1D] text-sm font-semibold mb-1">Proposed Land Code Section 94 amendment</p>
            <p className="text-[#7F1D1D]/90 text-sm leading-relaxed">
              Not a forced sale at market value — but loss of the asset with{' '}
              <strong>NO financial recovery</strong>. Not yet law, but under Cabinet review.
            </p>
          </div>

          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <ExtLink href="https://lexbangkok.com/nominee-land-ownership-thailand-confiscation-risk/">
                Full legal analysis (Lex Bangkok) →
              </ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.dbd.go.th">DBD enforcement / registry (dbd.go.th) →</ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.krisdika.go.th">Foreign Business Act (krisdika.go.th) →</ExtLink>
            </li>
          </ul>
        </section>

        {/* SECTION 3 — Safe (green) */}
        <section
          className="rounded-[12px] p-6 md:p-8 border"
          style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}
        >
          <p className="text-[#15803D] text-xs uppercase tracking-widest font-medium mb-2">Safe · Legal</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Legal ownership structures — confirmed safe
          </h2>
          <p className="text-[#5C5247] text-sm leading-relaxed mb-6">
            These structures are lawful when used correctly. Nominee companies are not among them.
          </p>

          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-white/80">
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#BBF7D0]">Structure</th>
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#BBF7D0]">Legal?</th>
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#BBF7D0]">Safe in 2026?</th>
                  <th className="text-left p-3 font-semibold text-[#1A2744] border border-[#BBF7D0]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.structure}
                    className={
                      row.tone === 'danger'
                        ? 'bg-[#FEF2F2]'
                        : row.tone === 'caution'
                          ? 'bg-[#FFFBEB]'
                          : 'bg-white/60'
                    }
                  >
                    <td className="p-3 border border-[#BBF7D0] text-[#1A2744] font-medium">{row.structure}</td>
                    <td className="p-3 border border-[#BBF7D0] text-[#5C5247] whitespace-nowrap">{row.legal}</td>
                    <td className="p-3 border border-[#BBF7D0] text-[#5C5247] whitespace-nowrap">{row.safe}</td>
                    <td className="p-3 border border-[#BBF7D0] text-[#5C5247]">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <ExtLink href="https://ltr.boi.go.th">LTR Visa (ltr.boi.go.th) →</ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.dol.go.th">Land Department lease registration (dol.go.th) →</ExtLink>
            </li>
            <li>
              <ExtLink href="https://www.thai-privilege.com">Thailand Privilege Visa →</ExtLink>
            </li>
          </ul>
        </section>

        {/* SECTION 4 — This plot (gold) */}
        <section
          className="rounded-[12px] p-6 md:p-8 border"
          style={{ background: '#FFFBF0', borderColor: '#E8D5A8' }}
        >
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2">This plot · Soi 112</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why this Soi 112 plot is different
          </h2>
          <ul className="space-y-3 text-[#5C5247] text-sm leading-relaxed mb-6">
            <li>
              <strong className="text-[#1A2744]">Chanote NS.4J title deed</strong> — freehold, GPS-surveyed,
              verifiable at the Land Office.
            </li>
            <li>
              <strong className="text-[#1A2744]">Thai seller</strong> — straightforward Land Office transfer, no
              company structure involved.
            </li>
            <li>
              We recommend a <strong className="text-[#1A2744]">registered 30-year lease</strong> as the legal
              structure for foreign buyers.
            </li>
            <li>
              <strong className="text-[#1A2744]">No nominee structure</strong> recommended or involved.
            </li>
            <li>
              Title deed verifiable independently at{' '}
              <ExtLink href="https://data.hua-hin-land.com">data.hua-hin-land.com</ExtLink>.
            </li>
            <li>
              Lawyer strongly recommended — budget <strong className="text-[#1A2744]">฿20,000–50,000</strong> for
              due diligence.
            </li>
          </ul>

          <ul className="space-y-2.5 mb-6">
            {plotChecks.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-[#1A2744]">
                <span className="text-[#15803D] flex-shrink-0 font-bold">✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://data.hua-hin-land.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-[12px] text-sm font-semibold text-white bg-[#C8973A] hover:bg-[#d4a84f] transition-colors"
          >
            Verify this title deed yourself →
          </a>
        </section>

        {/* SECTION 5 — Already have nominee */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
          <p className="text-[#B91C1C] text-xs uppercase tracking-widest font-medium mb-2">If you already own</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Already own Thai land through a nominee company?
          </h2>
          <div className="space-y-4 mb-6">
            {actionSteps.map((step) => (
              <div key={step.n} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A2744] text-white text-sm font-bold flex items-center justify-center"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.n}
                </span>
                <div>
                  <p className="text-[#1A2744] font-semibold text-sm mb-1">{step.title}</p>
                  <p className="text-[#5C5247] text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-[12px] p-4 border mb-5"
            style={{ background: '#FEF2F2', borderColor: '#FECACA' }}
          >
            <p className="text-[#7F1D1D] text-sm leading-relaxed">
              <strong>Warning:</strong> The enforcement window is narrowing. Structures that depended on
              inconsistent local enforcement are no longer safe.
            </p>
          </div>

          <ul className="space-y-2 text-sm">
            <li>
              <ExtLink href="https://www.lawsociety.or.th">Find a Thai property lawyer (lawsociety.or.th) →</ExtLink>
            </li>
            <li>
              <ExtLink href="https://aimbangkok.com/thailand-nominee-land-crackdown-dol-enforcement-2026/">
                Full enforcement analysis (AIM Bangkok) →
              </ExtLink>
            </li>
          </ul>
        </section>

        {/* SECTION 6 — FAQ */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-2">FAQ</p>
          <h2
            className="text-[#1A2744] text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Common questions from foreign buyers
          </h2>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-[16px] p-6 md:p-8 text-center bg-[#1A2744]">
          <p className="text-white text-lg md:text-xl font-semibold leading-snug mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            This plot has a clean Chanote title and Thai seller — no nominee structure.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://data.hua-hin-land.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-[12px] text-sm font-semibold text-[#1A2744] bg-[#C8973A] hover:bg-[#d4a84f] transition-colors"
            >
              Verify the title deed
            </a>
            <LineButton size="md" />
            <Link
              href="/info/size"
              className="inline-flex items-center justify-center min-h-[48px] px-6 rounded-[12px] text-sm font-semibold text-white border border-white/40 hover:border-[#C8973A] hover:text-[#C8973A] transition-colors"
            >
              View plot details
            </Link>
          </div>
        </section>

        {/* Legal disclaimer */}
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-5">
          <p className="text-[#5C5247] text-xs leading-relaxed">
            <strong className="text-[#1A2744]">Legal disclaimer:</strong> This page provides general information
            based on publicly available sources as of July 2026. Nothing herein constitutes legal advice. Laws and
            enforcement priorities change — always consult a licensed Thai property lawyer before making any
            property decision.
          </p>
        </div>

        {/* Sources */}
        <section className="bg-white border border-[#E8E2D6] rounded-[12px] p-6">
          <p className="text-[#C8973A] text-xs uppercase tracking-widest font-medium mb-4">Sources</p>
          <ul className="space-y-2.5 text-sm">
            {sources.map((s) => (
              <li key={s.name} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                <span className="text-[#5C5247] text-xs sm:text-sm sm:min-w-[200px]">
                  {s.name} ({s.date})
                </span>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A2744] hover:text-[#C8973A] transition-colors font-medium break-all"
                >
                  {s.href.replace(/^https?:\/\//, '')}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <DisclaimerFooter />
        <div className="text-center pt-2 pb-4">
          <Link href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">
            ← Back to the land listing
          </Link>
        </div>
      </div>
    </main>
  )
}
