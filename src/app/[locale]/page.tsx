import { setRequestLocale } from 'next-intl/server'
import HomePageClient from '@/components/HomePageClient'
import { fetchApprovedListings } from '@/lib/listings'

type Props = {
  params: { locale: string }
}

export default async function HomePage({ params }: Props) {
  setRequestLocale(params.locale)
  const previewListings = await fetchApprovedListings(3)

  return <HomePageClient previewListings={previewListings} />
}
