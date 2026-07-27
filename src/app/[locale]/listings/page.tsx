import { getTranslations, setRequestLocale } from 'next-intl/server'
import BreadcrumbNav from '@/components/BreadcrumbNav'
import DisclaimerFooter from '@/components/DisclaimerFooter'
import { fetchApprovedListings, type PublicListing } from '@/lib/listings'

type Props = {
  params: { locale: string }
}

function transactionBadgeKey(transaction: string | null): 'badgeSale' | 'badgeRent' | 'badgeBoth' {
  const value = (transaction || '').toLowerCase()
  if (value.includes('both')) return 'badgeBoth'
  if (value.includes('rent')) return 'badgeRent'
  return 'badgeSale'
}

export default async function ListingsPage({ params }: Props) {
  setRequestLocale(params.locale)
  const t = await getTranslations('listings')
  const tn = await getTranslations('navigation')
  const listings: PublicListing[] = await fetchApprovedListings()

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#1A2744]">
      <BreadcrumbNav />

      <section className="bg-[#1A2744] py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {t('pageTitle')}
          </h1>
          <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-12 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {listings.length === 0 ? (
            <div className="bg-white border border-[#E8E2D6] rounded-[12px] p-8 md:p-12 text-center">
              <p className="text-[#5C5247] text-sm md:text-base mb-6">{t('empty')}</p>
              <a
                href="https://www.thaiplot.com/list-property"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
              >
                {tn('listProperty')}
              </a>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {listings.map((listing) => {
                const subject = encodeURIComponent(
                  `Listing enquiry — ${listing.property_type || 'Property'} in ${listing.location || 'Hua Hin'}`
                )
                const badgeKey = transactionBadgeKey(listing.transaction_type)

                return (
                  <article
                    key={listing.id}
                    className="bg-white border border-[#E8E2D6] rounded-[12px] p-6 md:p-8 flex flex-col"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-semibold bg-[#1A2744] text-white">
                        {listing.property_type || '—'}
                      </span>
                      <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-600/15 text-amber-700 border border-amber-600/30">
                        {t(badgeKey)}
                      </span>
                    </div>

                    <h2
                      className="text-xl md:text-2xl font-bold text-[#1A2744] mb-3"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {listing.location || 'Hua Hin'}
                    </h2>

                    <dl className="space-y-2 text-sm mb-4">
                      {listing.size ? (
                        <div className="flex justify-between gap-4 border-b border-[#E8E2D6] pb-2">
                          <dt className="text-[#5C5247]">{t('size')}</dt>
                          <dd className="text-[#1A2744] font-medium text-right">{listing.size}</dd>
                        </div>
                      ) : null}
                      {listing.price ? (
                        <div className="flex justify-between gap-4 border-b border-[#E8E2D6] pb-2">
                          <dt className="text-[#5C5247]">{t('price')}</dt>
                          <dd className="text-[#1A2744] font-medium text-right">{listing.price}</dd>
                        </div>
                      ) : null}
                      {listing.title_deed ? (
                        <div className="flex justify-between gap-4 border-b border-[#E8E2D6] pb-2">
                          <dt className="text-[#5C5247]">{t('titleDeed')}</dt>
                          <dd className="text-[#1A2744] font-medium text-right">{listing.title_deed}</dd>
                        </div>
                      ) : null}
                    </dl>

                    {listing.description ? (
                      <p className="text-[#5C5247] text-sm leading-relaxed mb-6 flex-1 whitespace-pre-wrap">
                        {listing.description}
                      </p>
                    ) : (
                      <div className="flex-1" />
                    )}

                    <a
                      href={`https://www.thaiplot.com/contact?subject=${subject}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full min-h-[44px] px-4 rounded-lg text-sm font-semibold bg-amber-600 hover:bg-amber-700 text-white transition-colors"
                    >
                      {t('contact')}
                    </a>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <DisclaimerFooter />
      </div>
    </main>
  )
}
