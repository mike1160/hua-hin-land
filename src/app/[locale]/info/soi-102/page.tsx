import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Soi102PageClient from './Soi102PageClient'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'soi102Page' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: { canonical: 'https://www.hua-hin-land.com/info/soi-102' },
  }
}

export default function Soi102Page({ params }: Props) {
  setRequestLocale(params.locale)
  return <Soi102PageClient />
}
