'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function ContactDisclaimerNote() {
  const t = useTranslations('common')

  return (
    <p className="text-[#5C5247] text-xs text-center leading-relaxed mb-3">
      {t('contactDisclaimer')}{' '}
      <Link href="/legal/disclaimer" className="text-[#A67B2E] hover:text-[#8F6826] hover:underline transition-colors">
        {t('contactDisclaimerLink')}
      </Link>
      .
    </p>
  )
}
