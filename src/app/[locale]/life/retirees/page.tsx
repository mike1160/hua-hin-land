import { getLocale } from 'next-intl/server'
import { redirect } from '@/i18n/navigation'
import AmericanRetireesPage from './AmericanRetireesPage'

const EUROPEAN_LOCALES = new Set(['nl', 'de', 'sv', 'da'])

export default async function RetireesPage() {
  const locale = await getLocale()

  if (EUROPEAN_LOCALES.has(locale)) {
    redirect({ href: '/life/european-retirees', locale })
  }

  return <AmericanRetireesPage />
}
