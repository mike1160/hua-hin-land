import type { Lang } from '../lib/site-lang'

export type PrivacySection = { title: string; body: string }

export type PrivacyContent = {
  title: string
  intro: string
  sections: PrivacySection[]
}

const en: PrivacyContent = {
  title: 'Privacy Policy',
  intro: 'This website is operated by Mike Kleinjans in connection with the sale of land at Thap Tai, Soi 112, Hua Hin, Thailand.',
  sections: [
    {
      title: 'Data we collect',
      body: 'When you submit the contact form, we collect your name, email address, phone number and message. This information is used solely to respond to your enquiry about the property.',
    },
    {
      title: 'How we use your data',
      body: 'Your data is used only to respond to your enquiry. We do not sell, share or use your data for marketing purposes. Your details are stored securely and are not shared with third parties.',
    },
    {
      title: 'Data retention',
      body: 'Enquiry data is retained for a maximum of 12 months after the property is sold, after which it is permanently deleted.',
    },
    {
      title: 'Your rights (GDPR)',
      body: 'Under GDPR you have the right to access, correct or delete your personal data. To exercise these rights, contact us by phone on 065-901-2984 or via LINE.',
    },
    {
      title: 'Cookies',
      body: 'This website uses Vercel Analytics, a privacy-friendly analytics tool that does not use cookies. No personal data is collected through cookies.',
    },
    {
      title: 'Contact',
      body: 'Contact us by phone on 065-901-2984 or via LINE (Good land YAI).',
    },
  ],
}

const th: PrivacyContent = {
  title: 'นโยบายความเป็นส่วนตัว',
  intro: 'เว็บไซต์นี้ดำเนินการโดย Mike Kleinjans เกี่ยวกับการขายที่ดินที่ทับใต ซอย 112 หัวหิน ประเทศไทย',
  sections: [
    {
      title: 'ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม',
      body: 'เมื่อคุณส่งแบบฟอร์มติดต่อ เราจะเก็บรวบรวมชื่อ ที่อยู่อีเมล หมายเลขโทรศัพท์ และข้อความของคุณ ข้อมูลนี้ใช้เพื่อตอบคำถามเกี่ยวกับทรัพย์สินเท่านั้น',
    },
    {
      title: 'การใช้ข้อมูลส่วนบุคคลของคุณ',
      body: 'ข้อมูลของคุณใช้เพื่อตอบคำถามเท่านั้น เราไม่ขาย แชร์ หรือใช้ข้อมูลของคุณเพื่อการตลาด รายละเอียดของคุณจัดเก็บอย่างปลอดภัยและไม่แชร์กับบุคคลที่สาม',
    },
    {
      title: 'การเก็บรักษาข้อมูล',
      body: 'ข้อมูลการสอบถามจะเก็บรักษาไว้สูงสุด 12 เดือนหลังจากขายทรัพย์สินแล้ว จากนั้นจะถูกลบอย่างถาวร',
    },
    {
      title: 'สิทธิของคุณ (กฎระเบียบคุ้มครองข้อมูลทั่วไป / GDPR)',
      body: 'ภายใต้กฎระเบียบคุ้มครองข้อมูลทั่วไป (GDPR) คุณมีสิทธิ์เข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลของคุณ หากต้องการใช้สิทธิเหล่านี้ ติดต่อเราทางโทรศัพท์ 065-901-2984 หรือผ่าน LINE',
    },
    {
      title: 'คุกกี้',
      body: 'เว็บไซต์นี้ใช้ Vercel Analytics ซึ่งเป็นเครื่องมือวิเคราะห์ที่ปกป้องความเป็นส่วนตัวและไม่ใช้คุกกี้ ไม่มีการเก็บข้อมูลส่วนบุคคลผ่านคุกกี้',
    },
    {
      title: 'ติดต่อ',
      body: 'ติดต่อเราทางโทรศัพท์ 065-901-2984 หรือผ่าน LINE (Good land YAI)',
    },
  ],
}

const nl: PrivacyContent = {
  title: 'Privacybeleid',
  intro: 'Deze website wordt beheerd door Mike Kleinjans in verband met de verkoop van grond in Thap Tai, Soi 112, Hua Hin, Thailand.',
  sections: en.sections.map((s, i) => ({
    title: ['Gegevens die we verzamelen', 'Hoe we uw gegevens gebruiken', 'Bewaartermijn', 'Uw rechten (AVG/GDPR)', 'Cookies', 'Contact'][i],
    body: [
      'Wanneer u het contactformulier indient, verzamelen we uw naam, e-mailadres, telefoonnummer en bericht. Deze informatie wordt uitsluitend gebruikt om uw vraag over het perceel te beantwoorden.',
      'Uw gegevens worden alleen gebruikt om uw vraag te beantwoorden. We verkopen, delen of gebruiken uw gegevens niet voor marketing. Uw gegevens worden veilig opgeslagen en niet gedeeld met derden.',
      'Aanvraaggegevens worden maximaal 12 maanden bewaard nadat het perceel is verkocht, waarna ze permanent worden verwijderd.',
      'Op grond van de AVG/GDPR heeft u het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Neem contact op via telefoon 065-901-2984 of via LINE.',
      'Deze website gebruikt Vercel Analytics — een privacyvriendelijke analysetool zonder cookies. Er worden geen persoonsgegevens via cookies verzameld.',
      'Neem contact op via telefoon 065-901-2984 of via LINE (Good land YAI)',
    ][i],
  })),
}

const de: PrivacyContent = {
  title: 'Datenschutzerklärung',
  intro: 'Diese Website wird von Mike Kleinjans im Zusammenhang mit dem Verkauf von Land in Thap Tai, Soi 112, Hua Hin, Thailand betrieben.',
  sections: en.sections.map((s, i) => ({
    title: ['Daten, die wir erheben', 'Wie wir Ihre Daten verwenden', 'Datenspeicherung', 'Ihre Rechte (DSGVO/GDPR)', 'Cookies', 'Kontakt'][i],
    body: [
      'Wenn Sie das Kontaktformular absenden, erheben wir Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer und Nachricht. Diese Informationen werden ausschließlich zur Beantwortung Ihrer Anfrage zum Grundstück verwendet.',
      'Ihre Daten werden nur zur Beantwortung Ihrer Anfrage verwendet. Wir verkaufen, teilen oder nutzen Ihre Daten nicht für Marketingzwecke. Ihre Angaben werden sicher gespeichert und nicht an Dritte weitergegeben.',
      'Anfragedaten werden maximal 12 Monate nach dem Verkauf des Grundstücks aufbewahrt und danach dauerhaft gelöscht.',
      'Unter der DSGVO/GDPR haben Sie das Recht, Ihre personenbezogenen Daten einzusehen, zu berichtigen oder löschen zu lassen. Kontaktieren Sie uns telefonisch unter 065-901-2984 oder über LINE.',
      'Diese Website nutzt Vercel Analytics — ein datenschutzfreundliches Analysetool ohne Cookies. Es werden keine personenbezogenen Daten über Cookies erfasst.',
      'Kontaktieren Sie uns telefonisch unter 065-901-2984 oder über LINE (Good land YAI)',
    ][i],
  })),
}

export function getPrivacyContent(lang: Lang): PrivacyContent {
  if (lang === 'TH') return th
  if (lang === 'NL') return nl
  if (lang === 'DE') return de
  return en
}
