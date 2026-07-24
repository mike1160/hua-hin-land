'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

type BackButtonProps = {
  className?: string
}

/** Subtle text back-link to the homepage listing. */
export default function BackButton({ className = '' }: BackButtonProps) {
  const t = useTranslations('common')

  return (
    <Link
      href="/"
      className={`inline-block text-xs tracking-wide text-[#8B8070] hover:text-[#C8973A] transition-colors duration-200 ${className}`}
    >
      {t('backButton')}
    </Link>
  )
}
