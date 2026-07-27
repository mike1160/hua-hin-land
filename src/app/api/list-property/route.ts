import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getSupabaseAdmin } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function siteBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  }
  return 'http://localhost:3000'
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      name,
      email,
      phone,
      language,
      type,
      transaction,
      location,
      size,
      price,
      titleDeed,
      description,
      consent,
    } = body

    if (!name || !email || !phone || !location || !consent) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const adminSecret = process.env.ADMIN_SECRET
    if (!adminSecret) {
      console.error('ADMIN_SECRET is not set')
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    const supabase = getSupabaseAdmin()
    const { data: listing, error: insertError } = await supabase
      .from('listings')
      .insert({
        status: 'pending',
        name,
        email,
        phone,
        preferred_language: language || null,
        property_type: type || null,
        transaction_type: transaction || null,
        location,
        size: size || null,
        price: price || null,
        title_deed: titleDeed || null,
        description: description || null,
      })
      .select('id')
      .single()

    if (insertError || !listing?.id) {
      console.error(insertError)
      return NextResponse.json({ error: 'Failed to save listing' }, { status: 500 })
    }

    const base = siteBaseUrl()
    const approveUrl = `${base}/api/listing-action?id=${listing.id}&action=approve&secret=${encodeURIComponent(adminSecret)}`
    const rejectUrl = `${base}/api/listing-action?id=${listing.id}&action=reject&secret=${encodeURIComponent(adminSecret)}`

    await resend.emails.send({
      from: 'Hua Hin Land <noreply@hua-hin-land.com>',
      to: 'kleinjansmike@gmail.com',
      reply_to: email,
      subject: `New listing pending approval — ${type || 'Property'} in ${location}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1120; color: #f0f4ff; padding: 32px; border-radius: 12px;">
          <h2 style="color: #f59e0b; margin-bottom: 8px;">New listing pending approval</h2>
          <p style="color: #94a3b8; margin: 0 0 24px; font-size: 13px;">ID: ${escapeHtml(listing.id)}</p>

          <h3 style="color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin: 24px 0 12px;">Contact</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #94a3b8; width: 140px;">Name</td><td style="padding: 8px 0; color: #f0f4ff;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Email</td><td style="padding: 8px 0; color: #f59e0b;"><a href="mailto:${escapeHtml(email)}" style="color: #f59e0b;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Phone / WhatsApp</td><td style="padding: 8px 0; color: #f0f4ff;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Language</td><td style="padding: 8px 0; color: #f0f4ff;">${escapeHtml(language)}</td></tr>
          </table>

          <h3 style="color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin: 24px 0 12px;">Property</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #94a3b8; width: 140px;">Type</td><td style="padding: 8px 0; color: #f0f4ff;">${escapeHtml(type)}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Transaction</td><td style="padding: 8px 0; color: #f0f4ff;">${escapeHtml(transaction)}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Location</td><td style="padding: 8px 0; color: #f0f4ff;">${escapeHtml(location)}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Size</td><td style="padding: 8px 0; color: #f0f4ff;">${escapeHtml(size) || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Price / Rent</td><td style="padding: 8px 0; color: #f0f4ff;">${escapeHtml(price) || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Title deed</td><td style="padding: 8px 0; color: #f0f4ff;">${escapeHtml(titleDeed)}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8; vertical-align: top;">Description</td><td style="padding: 8px 0; color: #f0f4ff; white-space: pre-wrap;">${escapeHtml(description) || '—'}</td></tr>
          </table>

          <div style="margin-top: 32px; display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="${approveUrl}" style="display: inline-block; padding: 14px 22px; background: #16a34a; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold;">✅ APPROVE</a>
            <a href="${rejectUrl}" style="display: inline-block; padding: 14px 22px; background: #dc2626; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold;">❌ REJECT</a>
          </div>

          <div style="margin-top: 24px; padding: 16px; background: #1e2a4a; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 12px;">Sent from hua-hin-land.com · List Your Property · ${new Date().toISOString()}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
