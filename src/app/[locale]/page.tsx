import { setRequestLocale } from 'next-intl/server'
import HomePageClient from '@/components/HomePageClient'
import { fetchApprovedListings } from '@/lib/listings'

type Props = {
  params: { locale: string }
}

const breadcrumbListLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.hua-hin-land.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'The Plot',
      item: 'https://www.hua-hin-land.com/info/size',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Chanote Title Deed',
      item: 'https://www.hua-hin-land.com/info/chanote',
    },
  ],
}

export default async function HomePage({ params }: Props) {
  setRequestLocale(params.locale)
  const previewListings = await fetchApprovedListings(3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListLd) }}
      />
      <HomePageClient previewListings={previewListings} />
    </>
  )
}
