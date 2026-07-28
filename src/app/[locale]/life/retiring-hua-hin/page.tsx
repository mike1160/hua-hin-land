import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import RetiringHuaHinPageClient from './RetiringHuaHinPageClient'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'retiringHuaHinPage' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: { canonical: 'https://www.hua-hin-land.com/life/retiring-hua-hin' },
  }
}

export default function RetiringHuaHinPage({ params }: Props) {
  setRequestLocale(params.locale)
  return <RetiringHuaHinPageClient />
}
