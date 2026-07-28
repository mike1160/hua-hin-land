import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import HuaHinVillasPageClient from './HuaHinVillasPageClient'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'huaHinVillasPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: { canonical: 'https://www.hua-hin-land.com/info/hua-hin-villas' },
  }
}

export default function HuaHinVillasPage({ params }: Props) {
  setRequestLocale(params.locale)
  return <HuaHinVillasPageClient />
}
