import type { Lang } from './site-lang'

export const ui: Record<Lang, {
  backToListing: string
  backFooter: string
  getInTouch: string
  contactDisclaimer: string
  contactDisclaimerLink: string
  disclaimerFooter: string
  disclaimerFooterLink: string
  legalFooterDisclaimer: string
  legalFooterPrivacy: string
  cookieNotice: string
  cookieLearnMore: string
  cookieAccept: string
}> = {
  EN: {
    backToListing: '← Back to listing',
    backFooter: '← Back to the land listing',
    getInTouch: 'Get in touch →',
    contactDisclaimer: 'By contacting us you confirm you have read and understood our',
    contactDisclaimerLink: 'legal disclaimer',
    disclaimerFooter: 'The information on this page is provided for general informational purposes only and does not constitute legal, financial, or tax advice. Tax figures, costs, and market data are indicative and based on publicly available sources as of 2026. Always seek independent legal advice before entering into any property transaction in Thailand.',
    disclaimerFooterLink: '→ Read our full disclaimer',
    legalFooterDisclaimer: 'Legal Disclaimer',
    legalFooterPrivacy: 'Privacy Policy',
    cookieNotice: 'This site uses Vercel Analytics — a privacy-friendly analytics tool that does not use cookies. No personal data is collected.',
    cookieLearnMore: 'Learn more',
    cookieAccept: 'Got it',
  },
  NL: {
    backToListing: '← Terug naar listing',
    backFooter: '← Terug naar de landlisting',
    getInTouch: 'Neem contact op →',
    contactDisclaimer: 'Door contact met ons op te nemen bevestigt u dat u onze',
    contactDisclaimerLink: 'juridische disclaimer',
    disclaimerFooter: 'De informatie op deze pagina is uitsluitend bedoeld voor algemene informatiedoeleinden en vormt geen juridisch, financieel of fiscaal advies. Belastingcijfers, kosten en marktgegevens zijn indicatief en gebaseerd op openbaar beschikbare bronnen per 2026. Vraag altijd onafhankelijk juridisch advies voordat u een vastgoedtransactie in Thailand aangaat.',
    disclaimerFooterLink: '→ Lees onze volledige disclaimer',
    legalFooterDisclaimer: 'Juridische disclaimer',
    legalFooterPrivacy: 'Privacybeleid',
    cookieNotice: 'Deze site gebruikt Vercel Analytics — een privacyvriendelijke analysetool zonder cookies. Er worden geen persoonsgegevens verzameld.',
    cookieLearnMore: 'Meer info',
    cookieAccept: 'Begrepen',
  },
  TH: {
    backToListing: '← กลับไปยังรายการที่ดิน',
    backFooter: '← กลับไปยังรายการที่ดิน',
    getInTouch: 'ติดต่อเรา →',
    contactDisclaimer: 'การติดต่อเราถือว่าคุณยืนยันว่าได้อ่านและเข้าใจ',
    contactDisclaimerLink: 'ข้อจำกัดความรับผิดชอบทางกฎหมาย',
    disclaimerFooter: 'ข้อมูลในหน้านี้มีไว้เพื่อวัตถุประสงค์ด้านข้อมูลทั่วไปเท่านั้น และไม่ถือเป็นคำแนะนำทางกฎหมาย การเงิน หรือภาษี',
    disclaimerFooterLink: '→ ข้อจำกัดความรับผิดชอบฉบับเต็ม',
    legalFooterDisclaimer: 'ข้อจำกัดความรับผิดชอบฉบับเต็ม',
    legalFooterPrivacy: 'นโยบายความเป็นส่วนตัว',
    cookieNotice: 'เว็บไซต์นี้ใช้ Vercel Analytics ซึ่งเป็นเครื่องมือวิเคราะห์ที่ปกป้องความเป็นส่วนตัวและไม่ใช้คุกกี้ ไม่มีการเก็บข้อมูลส่วนบุคคล',
    cookieLearnMore: 'เรียนรู้เพิ่มเติม',
    cookieAccept: 'รับทราบ',
  },
  DE: {
    backToListing: '← Zurück zur Anzeige',
    backFooter: '← Zurück zur Grundstücksanzeige',
    getInTouch: 'Kontakt aufnehmen →',
    contactDisclaimer: 'Mit Ihrer Kontaktaufnahme bestätigen Sie, dass Sie unseren',
    contactDisclaimerLink: 'rechtlichen Haftungsausschluss',
    disclaimerFooter: 'Die Informationen auf dieser Seite dienen ausschließlich allgemeinen Informationszwecken und stellen keine Rechts-, Finanz- oder Steuerberatung dar. Steuerzahlen, Kosten und Marktdaten sind indikativ und basieren auf öffentlich verfügbaren Quellen Stand 2026. Holen Sie immer unabhängige Rechtsberatung ein, bevor Sie eine Immobilientransaktion in Thailand eingehen.',
    disclaimerFooterLink: '→ Vollständigen Haftungsausschluss lesen',
    legalFooterDisclaimer: 'Rechtlicher Haftungsausschluss',
    legalFooterPrivacy: 'Datenschutzerklärung',
    cookieNotice: 'Diese Website nutzt Vercel Analytics — ein datenschutzfreundliches Analysetool ohne Cookies. Es werden keine personenbezogenen Daten erfasst.',
    cookieLearnMore: 'Mehr erfahren',
    cookieAccept: 'Verstanden',
  },
}
