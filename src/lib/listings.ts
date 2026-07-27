import { getSupabasePublic, type ListingRow } from '@/lib/supabase'

export type PublicListing = Pick<
  ListingRow,
  | 'id'
  | 'created_at'
  | 'status'
  | 'property_type'
  | 'transaction_type'
  | 'location'
  | 'size'
  | 'price'
  | 'title_deed'
  | 'description'
  | 'approved_at'
>

export async function fetchApprovedListings(limit?: number): Promise<PublicListing[]> {
  try {
    const supabase = getSupabasePublic()
    let query = supabase
      .from('listings')
      .select(
        'id, created_at, status, property_type, transaction_type, location, size, price, title_deed, description, approved_at'
      )
      .eq('status', 'approved')
      .order('approved_at', { ascending: false })

    if (typeof limit === 'number') {
      query = query.limit(limit)
    }

    const { data, error } = await query
    if (error) {
      console.error(error)
      return []
    }
    return (data || []) as PublicListing[]
  } catch (error) {
    console.error(error)
    return []
  }
}

export function truncateText(value: string | null | undefined, max: number): string {
  const text = (value || '').trim()
  if (!text) return ''
  if (text.length <= max) return text
  return `${text.slice(0, max).trimEnd()}…`
}
