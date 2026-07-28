import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import FarmForSalePageClient from './FarmForSalePageClient'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'farmForSalePage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: { canonical: 'https://www.hua-hin-land.com/info/farm-for-sale' },
  }
}

export default function FarmForSalePage({ params }: Props) {
  setRequestLocale(params.locale)
  return <FarmForSalePageClient />
}
