'use client'

import { useId, useState } from 'react'

export type FaqItem = { question: string; answer: string }

type Props = {
  title: string
  items: FaqItem[]
}

function FaqAccordion({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-b border-[#E8E2D6] last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left group"
      >
        <span
          className="text-[#1A2744] text-base md:text-lg font-semibold leading-snug group-hover:text-[#C8973A] transition-colors"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {question}
        </span>
        <span
          className={`text-[#C8973A] text-xl leading-none flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[#5C5247] text-sm md:text-base leading-relaxed pb-5 pr-8">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function SeoFaqSection({ title, items }: Props) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <section className="bg-[#FAF7F0] py-20 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-[#1A2744] text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {title}
        </h2>
        <div className="bg-white border border-[#E8E2D6] rounded-[12px] px-6 md:px-8">
          {items.map((item) => (
            <FaqAccordion key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
