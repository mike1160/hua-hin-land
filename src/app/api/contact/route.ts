// SETUP: 1. Go to resend.com, create free account, get API key
// 2. Replace re_REPLACE_WITH_YOUR_KEY in .env.local with your real key
// 3. Run: npm install resend
// 4. Verify your domain at resend.com OR use onboarding@resend.dev as from address for testing

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, lang } = await req.json()

    // Email to owner
    await resend.emails.send({
      from: 'Hua Hin Land <onboarding@resend.dev>',
      to: 'kleinjansmike@gmail.com',
      replyTo: email,
      subject: `New enquiry — Hua Hin Land Soi 112 [${lang}]`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d1120; color: #f0f4ff; padding: 32px; border-radius: 12px;">
          <h2 style="color: #60a5fa; margin-bottom: 24px;">New land enquiry — Hua Hin Soi 112</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #94a3b8; width: 120px;">Name</td><td style="padding: 8px 0; color: #f0f4ff;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Email</td><td style="padding: 8px 0; color: #60a5fa;"><a href="mailto:${email}" style="color: #60a5fa;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Phone / WhatsApp</td><td style="padding: 8px 0; color: #f0f4ff;">${phone || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Language</td><td style="padding: 8px 0; color: #f0f4ff;">${lang}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8; vertical-align: top;">Message</td><td style="padding: 8px 0; color: #f0f4ff;">${message}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #1e2a4a; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 12px;">Sent from huahin-land website · ${new Date().toISOString()}</p>
          </div>
        </div>
      `,
    })

    // Auto-reply to enquirer
    await resend.emails.send({
      from: 'Hua Hin Land <onboarding@resend.dev>',
      to: email,
      subject: `Thank you for your enquiry — Hua Hin Land Soi 112`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #07080f; color: #f0f4ff; padding: 0; border-radius: 16px; overflow: hidden;">
          
          <div style="background: linear-gradient(135deg, #1e3a8a, #4c1d95); padding: 40px 32px;">
            <h1 style="margin: 0 0 8px; font-size: 28px; color: #ffffff; font-family: Georgia, serif;">Thank you, ${name}.</h1>
            <p style="margin: 0; color: #a5b4fc; font-size: 16px;">We've received your enquiry about the land on Soi 112, Hua Hin.</p>
          </div>

          <div style="padding: 32px;">
            <p style="color: #cbd5e1; line-height: 1.7; margin: 0 0 24px;">
              We will be in touch within <strong style="color: #ffffff;">24 hours</strong>. In the meantime, feel free to reach us directly:
            </p>

            <div style="background: #0d1120; border: 1px solid #1e2a4a; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <p style="margin: 0 0 8px; color: #94a3b8; font-size: 13px;">WhatsApp / Phone</p>
              <p style="margin: 0; color: #60a5fa; font-size: 18px; font-weight: bold;">080-140-6745</p>
            </div>

            <div style="background: #0d1120; border: 1px solid #1e2a4a; border-radius: 12px; padding: 20px; margin-bottom: 32px;">
              <p style="margin: 0 0 12px; color: #94a3b8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Your enquiry summary</p>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #64748b; width: 100px;">Plot</td><td style="padding: 6px 0; color: #e2e8f0;">4.5 Rai · Soi 112, Thap Tai, Hua Hin</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Price</td><td style="padding: 6px 0; color: #e2e8f0;">฿ 2,300,000 per rai · Total ฿ 10,350,000</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b;">Title deed</td><td style="padding: 6px 0; color: #e2e8f0;">Chanote (NS.4J) — ready to transfer</td></tr>
                <tr><td style="padding: 6px 0; color: #64748b; vertical-align: top;">Your message</td><td style="padding: 6px 0; color: #e2e8f0;">${message || '—'}</td></tr>
              </table>
            </div>

            <p style="color: #475569; font-size: 13px; line-height: 1.6; margin: 0;">
              This is an automated confirmation. Please do not reply to this email — 
              contact us directly via WhatsApp on <strong style="color: #60a5fa;">080-140-6745</strong> 
              or email <strong style="color: #60a5fa;">kleinjansmike@gmail.com</strong>
            </p>
          </div>

          <div style="background: #0d1120; padding: 20px 32px; border-top: 1px solid #1e2a4a;">
            <p style="margin: 0; color: #334155; font-size: 12px;">
              Thap Tai, Soi 112, Hua Hin, Prachuap Khiri Khan 77110, Thailand · 
              <a href="https://allesis.nl" style="color: #334155;">Webdesign by Allesis.nl</a>
            </p>
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
