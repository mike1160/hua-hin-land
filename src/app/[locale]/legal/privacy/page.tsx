'use client'

import BackButton from '@/components/BackButton'
import LangSwitcher from '@/components/LangSwitcher'
import { useTranslations } from 'next-intl'

type PrivacySection = { title: string; body: string }

export default function PrivacyPage() {
  const t = useTranslations('privacyPage')
  const tc = useTranslations('common')
  const sections = t.raw('sections') as PrivacySection[]

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <div className="px-6 pt-5 pb-3 max-w-5xl mx-auto w-full">
        <BackButton />
      </div>
      <div className="px-6 pb-20">
        <LangSwitcher />
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[#1A2744] text-4xl font-bold mb-8" style={{fontFamily: 'Playfair Display, serif'}}>{t('title')}</h1>
          <div className="space-y-6 text-[#5C5247] leading-relaxed">
            <p>{t('intro')}</p>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[#1A2744] text-xl font-semibold mb-2">{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center pt-10">
            <a href="/" className="text-[#C8973A] hover:text-[#d4a84f] transition-colors text-sm">{tc('backFooter')}</a>
          </div>
        </div>
      </div>
    </main>
  )
}
