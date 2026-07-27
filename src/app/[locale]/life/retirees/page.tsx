import { getLocale } from 'next-intl/server'
import { redirect } from '@/i18n/navigation'

/** Legacy URL — always send visitors to the canonical USA retirees page. */
export default async function RetireesRedirectPage() {
  const locale = await getLocale()
  redirect({ href: '/life/usa-retirees', locale })
}
