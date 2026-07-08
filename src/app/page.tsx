'use client'

import { useState, useEffect } from 'react'
import HomeNavbar from '../components/HomeNavbar'

declare global {
  interface Window {
    turnstileCallback?: (token: string) => void
  }
}

const PHONE = '66801406745'

const langs = ['EN', 'NL', 'TH', 'DE']
const LANG_KEY = 'hua-hin-land-lang'

type Lang = 'EN' | 'NL' | 'TH' | 'DE'

const t: Record<Lang, {
  badge: string, heroBadge: string, statsBar: string, socialProof: string,
  hook: string, sub: string, price: string, priceLabel: string, total: string, cta: string, ctaSub: string,
  plotTitle: string, lifestyleTitle: string, lifestyleSub: string, neighbourTitle: string, neighbourSub: string,
  whyTitle: string, mapTitle: string, finalHook: string, urgency: string,
  disclaimerSticky: string, disclaimerLink: string, contactConfirm: string, contactDisclaimerPhrase: string,
  agentDisclaimer: string, agentDisclaimerLink: string
}> = {
  EN: {
    badge: 'Thap Tai, Soi 112 · Hua Hin · Chanote Title Deed',
    heroBadge: 'Below market price · Chanote · Ready to transfer',
    statsBar: '฿2.3M/rai · 4 rai 2 ngan · Chanote NS.4J · Flat terrain · Water connected · Soi 112 luxury corridor',
    socialProof: 'Located in the same corridor as Botanica, La Felice and Mali Prestige — Hua Hin\'s most sought-after development zone.',
    hook: '4 Rai 2 Ngan of prime land. Soi 112, Hua Hin.',
    sub: '4 Rai 2 Ngan · Flat · Chanote · Mountain views · Water connected · Soi 112',
    price: '฿ 2,300,000',
    priceLabel: 'per rai · Total ฿ 10,350,000 · ≈ €270,000',
    total: 'Total (4 rai 2 ngan): ฿ 10,350,000 — approx. €270,000',
    cta: '📲 WhatsApp 080-140-6745',
    ctaSub: 'Or call us',
    plotTitle: 'The land — 4 rai 2 ngan, Soi 112, Hua Hin',
    lifestyleTitle: 'The life you\'ve been designing.',
    lifestyleSub: 'Live music every night. Golf at sunrise. Fresh seafood by the ocean. A warm, genuinely international community of people who chose the good life — and found it in Hua Hin.',
    neighbourTitle: 'The address that says everything.',
    neighbourSub: 'Botanica Hua Hin — a completed luxury villa development — chose this exact corridor. That benchmark confirms what discerning buyers already know about Soi 112.',
    whyTitle: 'Why this plot. Why now.',
    mapTitle: 'Find it.',
    finalHook: 'Prime land. Soi 112. Hua Hin.',
    urgency: 'A rare opportunity to acquire flat, buildable Chanote land in Hua Hin\'s most prestigious villa corridor. The plot is ready to transfer — contact us to arrange a viewing.',
    disclaimerSticky: 'Important: This website provides general information only. Nothing herein constitutes legal or financial advice. All property information must be independently verified.',
    disclaimerLink: 'Read full disclaimer',
    contactConfirm: 'By contacting us you confirm you have read and understood our',
    contactDisclaimerPhrase: 'legal disclaimer',
    agentDisclaimer: 'Independent agent — contact for viewings and local enquiries only. Not authorised to negotiate price or terms on behalf of the seller. All offers and agreements directly with the seller only.',
    agentDisclaimerLink: 'Full disclaimer',
  },
  NL: {
    badge: 'Thap Tai, Soi 112 · Hua Hin · Chanote Eigendomsakte',
    heroBadge: 'Onder marktprijs · Chanote · Overdraagbaar',
    statsBar: '฿2,3M/rai · 4 rai 2 ngan · Chanote NS.4J · Vlak terrein · Water aanwezig · Soi 112 luxecorridor',
    socialProof: 'In dezelfde corridor als Botanica, La Felice en Mali Prestige — Hua Hin\'s meest gewilde ontwikkelingszone.',
    hook: '4 Rai 2 Ngan topgrond. Soi 112, Hua Hin.',
    sub: '4 Rai 2 Ngan · Vlak · Chanote · Bergzicht · Water aanwezig · Soi 112',
    price: '฿ 2.300.000',
    priceLabel: 'per rai · Totaal ฿ 10.350.000 · ≈ €270.000',
    total: 'Totaal (4 rai 2 ngan): ฿ 10.350.000 — ca. €270.000',
    cta: '📲 WhatsApp 080-140-6745',
    ctaSub: 'Of bel ons',
    plotTitle: 'Het perceel.',
    lifestyleTitle: 'Het leven dat je al lang ontwerpt.',
    lifestyleSub: 'Elke avond livemuziek. Golf bij zonsopgang. Verse zeevruchten aan de oceaan. Een warme, echt internationale gemeenschap van mensen die kozen voor het goede leven — en het vonden in Hua Hin.',
    neighbourTitle: 'Het adres dat alles zegt.',
    neighbourSub: 'Botanica Hua Hin — een afgerond luxe villaproject — koos exact deze corridor. Dat bevestigt wat veeleisende kopers al weten over Soi 112.',
    whyTitle: 'Waarom dit perceel. Waarom nu.',
    mapTitle: 'Vind het.',
    finalHook: 'Topgrond. Soi 112. Hua Hin.',
    urgency: 'Een zeldzame kans om een plat, bebouwbaar Chanote-perceel te verwerven in Hua Hin\'s meest prestigieuze villacorridor. Het perceel is overdraagbaar — neem contact op voor een bezichtiging.',
    disclaimerSticky: 'Belangrijk: deze website biedt uitsluitend algemene informatie. Niets hierin is juridisch of financieel advies. Alle perceelsinformatie moet onafhankelijk worden geverifieerd.',
    disclaimerLink: 'Lees de volledige disclaimer',
    contactConfirm: 'Door contact met ons op te nemen bevestigt u dat u onze',
    contactDisclaimerPhrase: 'juridische disclaimer',
    agentDisclaimer: 'Onafhankelijke agent — contact voor bezichtigingen en lokale vragen. Niet bevoegd om namens de verkoper te onderhandelen. Alle biedingen en overeenkomsten uitsluitend rechtstreeks met de verkoper.',
    agentDisclaimerLink: 'Volledige disclaimer',
  },
  TH: {
    badge: 'ทับใต้ ซอย 112 · หัวหิน · โฉนดที่ดิน',
    heroBadge: 'ต่ำกว่าราคาตลาด · โฉนด · พร้อมโอน',
    statsBar: '฿2.3M/ไร่ · 4 ไร่ 2 งาน · โฉนด น.ส.4จ · ที่ราบ · มีน้ำประปา · ซอย 112 ทำเลวิลล่า',
    socialProof: 'ทำเลเดียวกับ Botanica, La Felice และ Mali Prestige — โซนพัฒนาที่ต้องการมากที่สุดของหัวหิน',
    hook: 'ที่ดิน 4 ไร่ 2 งาน ทำเลทอง ซอย 112 หัวหิน',
    sub: '4 ไร่ 2 งาน · ราบเรียบ · โฉนด · วิวเขา · มีน้ำประปา · ซอย 112',
    price: '฿ 2,300,000',
    priceLabel: 'ต่อไร่ · รวม ฿ 10,350,000 · ≈ €270,000',
    total: 'รวม (4 ไร่ 2 งาน): ฿ 10,350,000',
    cta: '📲 WhatsApp 080-140-6745',
    ctaSub: 'หรือโทรหาเรา',
    plotTitle: 'ที่ดิน',
    lifestyleTitle: 'ชีวิตที่คุณออกแบบมานาน',
    lifestyleSub: 'ดนตรีสดทุกคืน กอล์ฟยามรุ่งอรุณ อาหารทะเลสดริมมหาสมุทร ชุมชนนานาชาติที่อบอุ่นของคนที่เลือกชีวิตที่ดี — และพบมันในหัวหิน',
    neighbourTitle: 'ที่อยู่ที่บอกทุกอย่าง',
    neighbourSub: 'Botanica Hua Hin — โครงการวิลล่าหรูที่เสร็จสมบูรณ์แล้ว — เลือกทำเลนี้พอดี นั่นคือการยืนยันว่าซอย 112 คือที่ที่ผู้ซื้อชั้นนำเลือก',
    whyTitle: 'ทำไมแปลงนี้ ทำไมตอนนี้',
    mapTitle: 'ค้นหาที่ตั้ง',
    finalHook: 'ที่ดินทำเลทอง ซอย 112 หัวหิน',
    urgency: 'โอกาสหายากในการได้ครอบครองที่ดินโฉนดราบเรียบพร้อมก่อสร้างในทำเลวิลล่าหรูที่ดีที่สุดของหัวหิน พร้อมโอน — ติดต่อเราเพื่อนัดชมที่ดิน',
    disclaimerSticky: 'สำคัญ: เว็บไซต์นี้ให้ข้อมูลทั่วไปเท่านั้น ไม่มีสิ่งใดที่นี่ถือเป็นคำแนะนำทางกฎหมายหรือการเงิน ข้อมูลทรัพย์สินทั้งหมดต้องได้รับการตรวจสอบอย่างอิสระ',
    disclaimerLink: 'อ่านข้อจำกัดความรับผิดชอบฉบับเต็ม',
    contactConfirm: 'การติดต่อเราถือว่าคุณยืนยันว่าได้อ่านและเข้าใจ',
    contactDisclaimerPhrase: 'ข้อจำกัดความรับผิดชอบทางกฎหมาย',
    agentDisclaimer: 'ตัวแทนอิสระ — ติดต่อสำหรับการเข้าชมและสอบถามในพื้นที่เท่านั้น ไม่ได้รับอนุญาตให้เจรจาในนามของผู้ขาย ข้อเสนอและข้อตกลงทั้งหมดติดต่อผู้ขายโดยตรงเท่านั้น',
    agentDisclaimerLink: 'ข้อจำกัดความรับผิดชอบ',
  },
  DE: {
    badge: 'Thap Tai, Soi 112 · Hua Hin · Chanote Eigentumsrecht',
    heroBadge: 'Unter Marktpreis · Chanote · Übertragungsbereit',
    statsBar: '฿2,3M/Rai · 4 Rai 2 Ngan · Chanote NS.4J · Ebenes Gelände · Wasser · Soi 112 Luxuskorridor',
    socialProof: 'Im selben Korridor wie Botanica, La Felice und Mali Prestige — Hua Hins begehrteste Entwicklungszone.',
    hook: '4 Rai 2 Ngan Topgrundstück. Soi 112, Hua Hin.',
    sub: '4 Rai 2 Ngan · Eben · Chanote · Bergblick · Wasser vorhanden · Soi 112',
    price: '฿ 2.300.000',
    priceLabel: 'pro Rai · Gesamt ฿ 10.350.000 · ≈ €270.000',
    total: 'Gesamt (4 Rai 2 Ngan): ฿ 10.350.000 — ca. €270.000',
    cta: '📲 WhatsApp 080-140-6745',
    ctaSub: 'Oder rufen Sie uns an',
    plotTitle: 'Das Grundstück.',
    lifestyleTitle: 'Das Leben, das Sie schon lange entwerfen.',
    lifestyleSub: 'Jeden Abend Live-Musik. Golf bei Sonnenaufgang. Frische Meeresfrüchte am Ozean. Eine herzliche, wirklich internationale Gemeinschaft von Menschen, die das gute Leben gewählt haben — und es in Hua Hin gefunden haben.',
    neighbourTitle: 'Die Adresse, die alles sagt.',
    neighbourSub: 'Botanica Hua Hin — ein fertiggestelltes Luxus-Villaprojekt — wählte genau diesen Korridor. Das bestätigt, was anspruchsvolle Käufer über Soi 112 bereits wissen.',
    whyTitle: 'Warum dieses Grundstück. Warum jetzt.',
    mapTitle: 'Finden Sie es.',
    finalHook: 'Erstklassiges Land. Soi 112. Hua Hin.',
    urgency: 'Eine seltene Gelegenheit, ein ebenes, bebaubares Chanote-Grundstück im prestigiösesten Villakorridor von Hua Hin zu erwerben. Das Grundstück ist übertragungsbereit — kontaktieren Sie uns für eine Besichtigung.',
    disclaimerSticky: 'Wichtig: Diese Website dient nur zur allgemeinen Information. Nichts hierin stellt Rechts- oder Finanzberatung dar. Alle Grundstücksinformationen müssen unabhängig überprüft werden.',
    disclaimerLink: 'Vollständigen Haftungsausschluss lesen',
    contactConfirm: 'Mit Ihrer Kontaktaufnahme bestätigen Sie, dass Sie unseren',
    contactDisclaimerPhrase: 'rechtlichen Haftungsausschluss',
    agentDisclaimer: 'Unabhängiger Makler — Kontakt für Besichtigungen und lokale Anfragen. Nicht berechtigt, im Namen des Verkäufers zu verhandeln. Alle Angebote und Vereinbarungen direkt mit dem Verkäufer.',
    agentDisclaimerLink: 'Vollständiger Haftungsausschluss',
  },
}

const specs = [
  { icon: '📐', en: '4 Rai 2 Ngan · 7,200 m²', nl: '4 Rai 2 Ngan · 7.200 m²', th: '4 ไร่ 2 งาน · 7,200 ตร.ม.', de: '4 Rai 2 Ngan · 7.200 m²' },
  { icon: '📜', en: 'Chanote NS.4J — ready to transfer', nl: 'Chanote NS.4J — overdraagbaar', th: 'โฉนด น.ส.4จ — พร้อมโอน', de: 'Chanote NS.4J — übertragbar' },
  { icon: '🏔️', en: 'Panoramic mountain views', nl: 'Panoramisch bergzicht', th: 'วิวเขาพาโนรามา', de: 'Panoramablick Berge' },
  { icon: '🚧', en: 'Completely flat — build ready', nl: 'Volledig vlak — bebouwbaar', th: 'ราบเรียบ พร้อมก่อสร้าง', de: 'Vollkommen eben' },
  { icon: '💧', en: 'Water connection in place', nl: 'Wateraansluiting aanwezig', th: 'มีท่อน้ำประปาแล้ว', de: 'Wasseranschluss vorhanden' },
  { icon: '🛣️', en: 'Direct concrete road', nl: 'Directe betonweg', th: 'ถนนคอนกรีต', de: 'Betonstraße' },
]

const whyPoints: Record<Lang, string[]> = {
  EN: ['Chanote title deed — strongest in Thailand', 'Flat terrain — zero prep costs', 'Water connected', 'Soi 112 luxury corridor — Botanica, La Felice, Mali Prestige', '4 rai 2 ngan in one piece — rare at this size', 'Below market price vs every comparable plot'],
  NL: ['Chanote akte — sterkste in Thailand', 'Volledig vlak — geen egalisatiekosten', 'Water aanwezig', 'Soi 112 luxecorridor — Botanica, La Felice, Mali Prestige', '4 rai 2 ngan in één stuk — zeldzaam', 'Goedkoper dan elk vergelijkbaar perceel'],
  TH: ['โฉนดที่ดิน — แข็งแกร่งที่สุดในไทย', 'ราบเรียบ — ไม่มีค่าใช้จ่ายเพิ่ม', 'มีน้ำประปา', 'ซอย 112 — Botanica, La Felice, Mali Prestige', '4 ไร่ 2 งานในแปลงเดียว — หายาก', 'ราคาต่ำกว่าทุกแปลงที่เทียบได้'],
  DE: ['Chanote-Titel — stärkster in Thailand', 'Ebenes Gelände — keine Vorbereitungskosten', 'Wasseranschluss vorhanden', 'Soi 112 — Botanica, La Felice, Mali Prestige', '4 Rai 2 Ngan am Stück — selten', 'Günstiger als jedes vergleichbare Grundstück'],
}

const whyLinks = ['/info/chanote', '/info/terrain', '/info/water', '/nearby/bluport', '/info/size', '/info/comparable-plots'] as const

const learnMore: Record<Lang, string> = {
  EN: 'Learn more →',
  NL: 'Meer info →',
  TH: 'ดูเพิ่มเติม →',
  DE: 'Mehr erfahren →',
}

type LifeItem = { label: string; href?: string }

const lifeAroundCards: {
  icon: string
  title: string
  border: string
  bg: string
  glow: string
  arrow: string
  iconBg: string
  items: LifeItem[]
}[] = [
  {
    icon: '🌿',
    title: 'Nature & parks',
    border: 'border-green-500/20 hover:border-green-400/50',
    bg: 'linear-gradient(135deg, rgba(6,78,59,0.4) 0%, rgba(5,46,22,0.6) 100%)',
    glow: 'radial-gradient(circle at 50% 0%, rgba(52,211,153,0.15) 0%, transparent 70%)',
    arrow: 'text-green-400',
    iconBg: 'bg-green-500/20',
    items: [
      { label: 'Thap Tai National Park — doorstep', href: 'https://forevervacation.com/hua-hin/thap-tai-national-park' },
      { label: 'Thap Tai Fitness Park — nearby', href: 'https://thaptaifitnesspark.com/' },
      { label: 'Kaeng Krachan NP — 85 km', href: 'https://en.wikipedia.org/wiki/Kaeng_Krachan_National_Park' },
      { label: 'Khao Sam Roi Yot — 60 km', href: 'https://en.wikipedia.org/wiki/Khao_Sam_Roi_Yot_National_Park' },
      { label: 'Kui Buri (wild elephants) — 85 km', href: 'https://en.wikipedia.org/wiki/Kui_Buri_National_Park' },
      { label: 'Samnaksong Khao Phran Thup — nearby', href: 'https://www.google.com/maps/search/Samnaksong+Khao+Phran+Thup+Hua+Hin' },
      { label: 'Grand Canyon Hua Hin — 5 min', href: 'https://forevervacation.com/hua-hin/hua-hin-grand-canyon' },
      { label: 'Thap Lan NP (UNESCO) — 3-4 hrs', href: '/nearby/nature' },
    ],
  },
  {
    icon: '🍽️',
    title: 'Food & cafes',
    border: 'border-orange-500/20 hover:border-orange-400/50',
    bg: 'linear-gradient(135deg, rgba(120,53,15,0.4) 0%, rgba(69,26,3,0.6) 100%)',
    glow: 'radial-gradient(circle at 50% 0%, rgba(251,146,60,0.15) 0%, transparent 70%)',
    arrow: 'text-orange-400',
    iconBg: 'bg-orange-500/20',
    items: [
      { label: 'Parrotdise Organic Farm & Cafe ⭐4.8 — 5 min', href: 'https://parrotdisethailand.com' },
      { label: 'Sweetheart Cafe ⭐4.6 — riverside', href: 'https://www.facebook.com/search/top?q=sweetheart%20cafe%20hua%20hin' },
      { label: 'Greenfield Terrace ⭐4.6 — Thap Tai', href: 'https://www.google.com/maps/search/Greenfield+Terrace+Thap+Tai+Hua+Hin' },
      { label: 'Apsara Art & Restaurant ⭐4.9', href: 'https://www.facebook.com/ApsaraAsianArt/' },
      { label: 'White Orchid Restaurant & Bar', href: 'https://www.google.com/maps/search/White+Orchid+Restaurant+Bar+Hua+Hin' },
      { label: 'Hua Hin Night Market — 17 min', href: 'https://www.tripadvisor.com/Attraction_Review-g297922-d12761939-Reviews-Hua_Hin_Night_Market.html' },
    ],
  },
  {
    icon: '🎵',
    title: 'Entertainment',
    border: 'border-purple-500/20 hover:border-purple-400/50',
    bg: 'linear-gradient(135deg, rgba(88,28,135,0.4) 0%, rgba(49,10,101,0.6) 100%)',
    glow: 'radial-gradient(circle at 50% 0%, rgba(167,139,250,0.15) 0%, transparent 70%)',
    arrow: 'text-purple-400',
    iconBg: 'bg-purple-500/20',
    items: [
      { label: 'Baan Suang Music — live Thai music', href: 'https://www.facebook.com/search/top?q=baan%20suang%20music%20hua%20hin' },
      { label: 'Mini Golf World ⭐4.9 — glow in dark', href: 'https://www.google.com/maps/search/Mini+Golf+World+Hua+Hin' },
      { label: 'Vana Nava Water Jungle — 10 min', href: 'https://www.vananavahuahin.com' },
      { label: 'Saam Phan Nam Floating Market — 5 min', href: 'https://www.google.com/maps/search/Sam+Phan+Nam+Floating+Market+Hua+Hin' },
      { label: 'Majestic Creek Golf — 5 min', href: '/nearby/golf' },
      { label: 'Cicada Weekend Market', href: 'https://www.facebook.com/cicadamarket' },
      { label: 'Jazz & live music — nightly', href: 'https://www.google.com/maps/search/jazz+live+music+bar+Hua+Hin' },
    ],
  },
  {
    icon: '🧘',
    title: 'Wellness & spas',
    border: 'border-teal-500/20 hover:border-teal-400/50',
    bg: 'linear-gradient(135deg, rgba(19,78,74,0.4) 0%, rgba(8,51,68,0.6) 100%)',
    glow: 'radial-gradient(circle at 50% 0%, rgba(45,212,191,0.15) 0%, transparent 70%)',
    arrow: 'text-teal-400',
    iconBg: 'bg-teal-500/20',
    items: [
      { label: 'Thai massage centres — Thap Tai', href: 'https://maps.app.goo.gl/search/Thai+massage+Thap+Tai+Hua+Hin' },
      { label: 'Buddha-Metta Meditation Center — nearby', href: '/nearby/meditation' },
      { label: 'Chiva-Som Health Resort', href: 'https://www.chivasom.com/en/chiva-som-hua-hin/' },
      { label: 'Anantara Hua Hin Spa', href: 'https://www.anantara.com/en/hua-hin/spa' },
      { label: 'Bangkok Hospital — 15 min', href: 'https://www.bangkokhospital.com/en/huahin' },
      { label: 'San Paolo Hospital — 17 min', href: 'https://sanpaulo.co.th' },
      { label: 'Parrotdise Organic Farm — 5 min', href: 'https://parrotdisethailand.com' },
    ],
  },
  {
    icon: '🏫',
    title: 'Schools & families',
    border: 'border-blue-500/20 hover:border-blue-400/50',
    bg: 'linear-gradient(135deg, rgba(30,58,138,0.4) 0%, rgba(15,23,92,0.6) 100%)',
    glow: 'radial-gradient(circle at 50% 0%, rgba(96,165,250,0.15) 0%, transparent 70%)',
    arrow: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
    items: [
      { label: "Beaconhouse Yamsaard Int'l School", href: 'https://www.facebook.com/byshuahin' },
      { label: 'The English Centre ⭐5.0', href: 'https://www.google.com/maps/search/The+English+Centre+Hua+Hin' },
      { label: 'Sethavidhya Bilingual School', href: 'https://www.google.com/maps/search/Sethavidhya+Bilingual+School+Hua+Hin' },
      { label: 'Multiple kindergartens — Thap Tai', href: 'https://www.google.com/maps/search/kindergarten+Thap+Tai+Hua+Hin' },
      { label: 'Child-friendly, low-traffic area' },
      { label: 'Active expat family community' },
    ],
  },
  {
    icon: '🔨',
    title: 'Shopping & practical',
    border: 'border-slate-500/20 hover:border-slate-400/50',
    bg: 'linear-gradient(135deg, rgba(51,65,85,0.5) 0%, rgba(15,23,42,0.7) 100%)',
    glow: 'radial-gradient(circle at 50% 0%, rgba(148,163,184,0.12) 0%, transparent 70%)',
    arrow: 'text-slate-400',
    iconBg: 'bg-slate-500/20',
    items: [
      { label: 'Siwali Building Materials — Thap Tai', href: 'https://www.google.com/maps/search/Siwali+Building+Materials+Thap+Tai+Hua+Hin' },
      { label: 'Makro Food Service — 15 min', href: 'https://www.makro.pro/en' },
      { label: 'Bluport Mall & Market Village — 10 min', href: 'https://www.bluporthuahin.com' },
      { label: '7-Eleven — 4 min from plot', href: 'https://www.7eleven.co.th/' },
      { label: "Lotus's supermarket — 15 min", href: 'https://www.lotuss.com/en' },
      { label: 'Immigration office — 15 min', href: 'https://www.immigration.go.th/' },
    ],
  },
]

const nearbyHighlightCards = [
  { icon: '🏌️', label: 'Majestic Creek Golf — 5 min', href: '/nearby/golf' },
  { icon: '🧘', label: 'Buddha-Metta Meditation Center — nearby', href: '/nearby/meditation' },
  { icon: '🏖️', label: 'Pranburi Beach — 20 min', href: '/nearby/pranburi' },
  { icon: '⭐', label: 'The Son Resort — best rated nearby', href: '/nearby/son-resort' },
  { icon: '🚗', label: 'Bangkok — 3.5 hrs · Airport — 25 min', href: '/nearby/connectivity' },
]

export default function Home() {
  const [lang, setLang] = useState<Lang>('EN')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string>('')
  const c = t[lang]

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY) as Lang | null
      if (saved && langs.includes(saved)) setLang(saved)
    } catch {
      // ignore
    }
  }, [])

  const selectLang = (next: Lang) => {
    setLang(next)
    try {
      localStorage.setItem(LANG_KEY, next)
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    document.head.appendChild(script)

    window.turnstileCallback = (token: string) => {
      setTurnstileToken(token)
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      delete window.turnstileCallback
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!turnstileToken) {
      alert('Please complete the security check')
      return
    }
    setFormStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang, turnstileToken }),
      })
      if (res.ok) {
        setFormStatus('sent')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTurnstileToken('')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const slides = [
    { src: '/photo2.jpg', caption: 'Golden hour on the land' },
    { src: '/photo1.jpg', caption: 'The plot — flat terrain, mountain backdrop' },
    { src: '/photo3.jpg', caption: 'Aerial view of the area' },
    { src: '/photo4.jpg', caption: "Bird's eye — the full plot" },
    { src: '/photo5.jpg', caption: 'Direct concrete road access' },
    { src: '/photo6.jpg', caption: 'The approach — Soi 112 corridor' },
  ]

  return (
    <main className="bg-[#07080f] text-white font-sans overflow-x-hidden">

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white text-5xl font-thin leading-none hover:text-blue-400 transition-colors">×</button>
          <img src={lightbox} alt="" className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={e => e.stopPropagation()} />
        </div>
      )}

      <HomeNavbar lang={lang} langs={langs} onSelectLang={selectLang} />

      {/* HERO — fullscreen photo background */}
      <section className="relative min-h-screen flex flex-col justify-end">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 backdrop-blur-[2px]" style={{background: 'rgba(0,0,0,0.55)'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(30,10,60,0.2) 0%, rgba(60,20,120,0.3) 40%, rgba(7,8,15,0.94) 75%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-20">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-1.5 text-xs text-purple-100 mb-4 font-medium tracking-wide">
            {c.heroBadge}
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/80 mb-6">{c.badge}</div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">{c.hook}</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 tracking-wide">{c.sub}</p>
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, serif'}}>{c.price}</div>
              <div className="text-white/60 text-sm mt-1">{c.priceLabel}</div>
              <a href="#plot-gallery" className="inline-flex flex-col items-start mt-6 text-white/40 hover:text-white/70 transition-colors animate-bounce-scroll" aria-label="Scroll to plot photos">
                <span className="text-xl leading-none">↓</span>
              </a>
            </div>
            <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all shadow-2xl shadow-green-900/50 hover:scale-105">
              {c.cta}
            </a>
          </div>
          <div className="mt-4">
            <a href="tel:0659012984"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 shadow-2xl"
              style={{background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #6366f1 100%)', boxShadow: '0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(99,102,241,0.2)'}}>
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <p className="text-xs text-white/70 uppercase tracking-widest font-medium">
                  {lang === 'NL' ? 'Bel de agent nu' : lang === 'TH' ? 'โทรหาเอเจนต์เลย' : lang === 'DE' ? 'Jetzt Agent anrufen' : 'Call the agent now'}
                </p>
                <p className="text-xl font-bold tracking-wide">065-901-2984</p>
              </div>
            </a>
            <p className="text-white/30 text-xs mt-2 max-w-md leading-relaxed">
              {c.agentDisclaimer}{' '}
              <a href="/legal/disclaimer" className="hover:text-white/60 transition-colors whitespace-nowrap">
                → {c.agentDisclaimerLink}
              </a>
            </p>
          </div>
          <p className="text-white/50 text-sm mt-4">{c.ctaSub} · 080-140-6745 · Thai: 065-901-2984</p>
        </div>
      </section>

      {/* STATS BAR */}
      <div id="plot-gallery" className="bg-[#0a0c14] border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-3 text-center text-white/55 text-[11px] sm:text-xs tracking-wide leading-relaxed">
          {c.statsBar}
        </div>
      </div>

      {/* PHOTO GALLERY — slider (moved up) */}
      <section className="py-10 px-6 bg-[#07080f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, serif'}}>{c.plotTitle}</h2>
          <p className="text-white/40 text-sm mb-6">Use arrows or thumbnails to browse · Click to enlarge</p>

          <div className="relative group rounded-2xl overflow-hidden" style={{height: '520px'}}>
            <img
              src={slides[slideIndex].src}
              alt={slides[slideIndex].caption}
              className="w-full h-full object-cover cursor-pointer transition-opacity duration-300"
              onClick={() => setLightbox(slides[slideIndex].src)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <p className="absolute bottom-16 left-6 text-white/80 text-sm">{slides[slideIndex].caption}</p>
            <p className="absolute bottom-6 left-6 text-white/40 text-xs">Click to enlarge · {slideIndex + 1} / {slides.length}</p>
            <button
              onClick={() => setSlideIndex((slideIndex - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl hover:bg-purple-600/60 transition-all opacity-0 group-hover:opacity-100"
            >
              ←
            </button>
            <button
              onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl hover:bg-purple-600/60 transition-all opacity-0 group-hover:opacity-100"
            >
              →
            </button>
          </div>

          <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${slideIndex === i ? 'border-blue-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
              >
                <img src={slide.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <p className="mt-6 text-center text-white/50 text-sm leading-relaxed max-w-2xl mx-auto italic" style={{fontFamily: 'Playfair Display, serif'}}>
            {c.socialProof}
          </p>
        </div>
      </section>

      <div className="sticky top-14 z-30 bg-[#0d1120]/95 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-2.5 text-center text-white/50 text-xs leading-relaxed">
          {c.disclaimerSticky}{' '}
          <a href="/legal/disclaimer" className="text-purple-300/80 hover:text-purple-200 hover:underline transition-colors whitespace-nowrap">
            → {c.disclaimerLink}
          </a>
        </div>
      </div>

      {/* SPECS — dark cards */}
      <section className="py-16 px-6 bg-[#07080f]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

          {/* Size */}
          <a href="/info/size" className="relative group overflow-hidden rounded-2xl border border-blue-500/20 hover:border-blue-400/60 transition-all duration-300 cursor-pointer block" style={{minHeight: '160px'}}>
            <img src="/photo3.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(30,58,138,0.7) 0%, rgba(15,23,92,0.8) 100%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">📐</div>
              <p className="text-blue-300/70 text-xs uppercase tracking-widest mb-1 font-medium">Size</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[0][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
              <p className="text-blue-400/50 text-xs mt-3 group-hover:text-blue-400/80 transition-colors">Learn more →</p>
            </div>
          </a>

          {/* Chanote */}
          <a href="/info/chanote" className="relative group overflow-hidden rounded-2xl border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 cursor-pointer block" style={{minHeight: '160px'}}>
            <img src="/photo1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(120,53,15,0.7) 0%, rgba(69,26,3,0.8) 100%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">📜</div>
              <p className="text-amber-300/70 text-xs uppercase tracking-widest mb-1 font-medium">Title deed</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[1][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
              <p className="text-amber-400/50 text-xs mt-3 group-hover:text-amber-400/80 transition-colors">Learn more →</p>
            </div>
          </a>

          {/* Mountain view */}
          <a href="/info/view" className="relative group overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 cursor-pointer block" style={{minHeight: '160px'}}>
            <img src="/photo2.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(88,28,135,0.7) 0%, rgba(49,10,101,0.8) 100%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">🏔️</div>
              <p className="text-purple-300/70 text-xs uppercase tracking-widest mb-1 font-medium">View</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[2][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
              <p className="text-purple-400/50 text-xs mt-3 group-hover:text-purple-400/80 transition-colors">Learn more →</p>
            </div>
          </a>

          {/* Terrain */}
          <a href="/info/terrain" className="relative group overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-400/60 transition-all duration-300 cursor-pointer block" style={{minHeight: '160px'}}>
            <img src="/photo4.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(6,78,59,0.7) 0%, rgba(5,46,22,0.8) 100%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">🚧</div>
              <p className="text-green-300/70 text-xs uppercase tracking-widest mb-1 font-medium">Terrain</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[3][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
              <p className="text-green-400/50 text-xs mt-3 group-hover:text-green-400/80 transition-colors">Learn more →</p>
            </div>
          </a>

          {/* Water */}
          <a href="/info/water" className="relative group overflow-hidden rounded-2xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer block" style={{minHeight: '160px'}}>
            <img src="/photo5.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(21,94,117,0.7) 0%, rgba(8,51,68,0.8) 100%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">💧</div>
              <p className="text-cyan-300/70 text-xs uppercase tracking-widest mb-1 font-medium">Utilities</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[4][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
              <p className="text-cyan-400/50 text-xs mt-3 group-hover:text-cyan-400/80 transition-colors">Learn more →</p>
            </div>
          </a>

          {/* Access */}
          <a href="/info/access" className="relative group overflow-hidden rounded-2xl border border-slate-400/20 hover:border-slate-300/60 transition-all duration-300 cursor-pointer block" style={{minHeight: '160px'}}>
            <img src="/photo6.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(51,65,85,0.7) 0%, rgba(15,23,42,0.8) 100%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">🛣️</div>
              <p className="text-slate-400/70 text-xs uppercase tracking-widest mb-1 font-medium">Access</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[5][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
              <p className="text-slate-400/50 text-xs mt-3 group-hover:text-slate-400/80 transition-colors">Learn more →</p>
            </div>
          </a>

        </div>
      </section>

      {/* VIDEO — autoplay hero clip */}
      <section className="py-0 bg-[#07080f]">
        <div className="max-w-5xl mx-auto px-6">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl border border-purple-900/30 max-h-[500px] object-cover"
            style={{objectFit: 'cover'}}
          >
            <source src="/video2.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* VIDEOS — bird's eye */}
      <section className="py-12 px-6 bg-[#07080f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, serif'}}>Bird&apos;s eye view.</h2>
          <div className="max-w-2xl mx-auto">
            <video controls className="w-full rounded-2xl border border-blue-900/30" poster="/photo1.jpg">
              <source src="/video1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* LIFESTYLE — fullscreen photo background */}
      <section className="relative min-h-screen flex items-center py-24">
        <div className="absolute inset-0">
          <img src="/lifestyle1.jpg" alt="lifestyle" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.7) 0%, rgba(20,10,60,0.8) 40%, rgba(7,8,15,0.95) 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{c.lifestyleTitle}</span>
            </h2>
            <p className="text-white/70 text-xl leading-relaxed mb-12">{c.lifestyleSub}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🌅', label: lang === 'NL' ? 'Ideaal voor gepensioneerden' : lang === 'TH' ? 'เหมาะสำหรับผู้เกษียณ' : lang === 'DE' ? 'Ideal für Rentner' : 'Perfect for retirees', href: '/life/retirees' },
                { icon: '🎵', label: lang === 'NL' ? 'Livemuziek elke avond' : lang === 'TH' ? 'ดนตรีสดทุกคืน' : lang === 'DE' ? 'Live-Musik jeden Abend' : 'Live music every night', href: '/life/entertainment' },
                { icon: '⛳', label: lang === 'NL' ? '3 golfbanen · 20 min' : lang === 'TH' ? '3 สนามกอล์ฟ · 20 นาที' : lang === 'DE' ? '3 Golfplätze · 20 Min.' : '3 golf courses · 20 min', href: '/nearby/golf' },
                { icon: '🏖️', label: lang === 'NL' ? 'Strand · 12 min' : lang === 'TH' ? 'หาด · 12 นาที' : lang === 'DE' ? 'Strand · 12 Min.' : 'Beach · 12 min', href: '/nearby/beach' },
                { icon: '🌍', label: lang === 'NL' ? 'Echt internationaal' : lang === 'TH' ? 'นานาชาติแท้จริง' : lang === 'DE' ? 'Wirklich international' : 'Genuinely international', href: '/life/schools' },
                { icon: '🏥', label: lang === 'NL' ? 'Ziekenhuis · 15 min' : lang === 'TH' ? 'โรงพยาบาล · 15 นาที' : lang === 'DE' ? 'Krankenhaus · 15 Min.' : 'Hospital · 15 min', href: '/nearby/hospital' },
              ].map((item, i) => (
                <a key={i} href={item.href} className="group relative block cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 pb-8 hover:bg-white/15 hover:border-white/25 hover:shadow-lg hover:shadow-purple-500/15 transition-all duration-200">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-200">{item.label}</p>
                  <span className="absolute bottom-3 right-3 text-white/30 text-sm group-hover:text-purple-300 transition-colors duration-200">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIFESTYLE PHOTO 2 — jazz */}
      <section className="relative h-96 flex items-end pb-12">
        <div className="absolute inset-0">
          <img src="/lifestyle2.jpg" alt="jazz" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(7,8,15,1) 0%, rgba(7,8,15,0.4) 60%, transparent 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Hua Hin nightlife</p>
          <p className="text-white text-2xl font-display italic" style={{fontFamily: 'Playfair Display, serif'}}>&ldquo;The social scene you actually want to be part of.&rdquo;</p>
        </div>
      </section>

      {/* NEIGHBOURHOOD — Botanica, fullscreen */}
      <section className="relative min-h-[80vh] flex items-center py-24">
        <div className="absolute inset-0">
          <img src="/neighbourhood.jpg" alt="neighbourhood" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(7,8,15,0.97) 0%, rgba(7,8,15,0.85) 40%, rgba(7,8,15,0.5) 70%, rgba(7,8,15,0.2) 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <p className="text-blue-400 text-xs uppercase tracking-widest mb-4 font-medium">The neighbourhood</p>
            <h2 className="text-5xl font-display font-bold mb-6 leading-tight text-white" style={{fontFamily: 'Playfair Display, serif'}}>{c.neighbourTitle}</h2>
            <p className="text-white/70 text-lg leading-relaxed">{c.neighbourSub}</p>
          </div>
        </div>
      </section>

      {/* WHY — dark section */}
      <section className="py-20 px-6 bg-[#0d1120]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, serif'}}>{c.whyTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whyPoints[lang].map((w, i) => (
              <div key={i} className="flex items-start gap-4 bg-gradient-to-br from-blue-950/30 to-purple-950/20 border border-blue-900/20 rounded-xl p-5 hover:border-blue-500/40 transition-all">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex-shrink-0 mt-2"></span>
                <div>
                  <p className="text-white/80">{w}</p>
                  <a href={whyLinks[i]} className="inline-block mt-2 text-xs text-purple-400/60 hover:text-purple-300 transition-colors">
                    {learnMore[lang]}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0d1120]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, serif'}}>
            {lang === 'NL' ? 'Ontwikkelingsmogelijkheden.' :
             lang === 'TH' ? 'ศักยภาพการพัฒนา' :
             lang === 'DE' ? 'Entwicklungsmöglichkeiten.' :
             'Development potential.'}
          </h2>
          <p className="text-white/50 mb-10 leading-relaxed">
            {lang === 'NL' ? '4 rai 2 ngan in één stuk biedt uitzonderlijke flexibiliteit voor ontwikkeling.' :
             lang === 'TH' ? '4 ไร่ 2 งานในแปลงเดียวให้ความยืดหยุ่นสูงสำหรับการพัฒนา' :
             lang === 'DE' ? '4 Rai 2 Ngan in einem Stück bietet außergewöhnliche Flexibilität für die Entwicklung.' :
             '4 Rai 2 Ngan in one piece offers exceptional flexibility for development.'}
          </p>
          <div className="grid md:grid-cols-3 gap-5">

            <a href="/info/live-and-profit" className="group relative block overflow-hidden rounded-2xl border border-yellow-500/30 hover:border-yellow-400/60 cursor-pointer hover:shadow-lg hover:shadow-yellow-500/15 transition-all duration-200 min-h-[220px]">
              <img src="/IMG_7802.JPG" alt="" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: 'center center'}} />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(120,80,0,0.75) 0%, rgba(7,8,15,0.88) 100%)'}} />
              <div className="relative z-10 p-6 pb-10">
                <div className="text-3xl mb-3">🏡</div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-yellow-100 transition-colors duration-200">
                  {lang === 'NL' ? 'Wonen & winst' : lang === 'TH' ? 'อยู่เองและคืนทุน' : lang === 'DE' ? 'Wohnen & Gewinn' : 'Live & profit'}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {lang === 'NL' ? 'Bouw uw villa op 1 rai. Verkoop de resterende percelen. Poolvilla\'s op Soi 112 starten bij ฿15M+. Uw grondkosten per perceel onder ฿2,5M.' :
                   lang === 'TH' ? 'สร้างวิลล่าบน 1 ไร่ แบ่งขายอีก 3 แปลง พูลวิลล่าในซอย 112 ราคาเริ่ม ฿15ล.+ ต้นทุนที่ดินต่อแปลงไม่ถึง ฿2.5ล.' :
                   lang === 'DE' ? 'Bauen Sie Ihre Villa auf 1 Rai. Verkaufen Sie die restlichen Parzellen. Pool-Villen in Soi 112 ab ฿15M+.' :
                   'Build your villa on 1 rai. Sell the remaining plots. Pool villas on Soi 112 start at ฿15M+. Your land cost per plot under ฿2.5M.'}
                </p>
                <span className="absolute bottom-4 right-4 text-white/30 text-sm group-hover:text-yellow-300 transition-colors duration-200">→</span>
              </div>
            </a>

            <a href="/info/boutique-development" className="group relative block overflow-hidden rounded-2xl border border-green-500/30 hover:border-green-400/60 cursor-pointer hover:shadow-lg hover:shadow-green-500/15 transition-all duration-200 min-h-[220px]">
              <img src="/IMG_7807.JPG" alt="" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: 'center center'}} />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(6,60,40,0.75) 0%, rgba(7,8,15,0.88) 100%)'}} />
              <div className="relative z-10 p-6 pb-10">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-green-100 transition-colors duration-200">
                  {lang === 'NL' ? 'Boutique ontwikkeling' : lang === 'TH' ? 'โครงการวิลล่าบูติค' : lang === 'DE' ? 'Boutique-Entwicklung' : 'Boutique development'}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {lang === 'NL' ? 'Ontwikkel 4–5 luxe poolvilla\'s voor verkoop of vakantieverhuur. Huurrendementen in Hua Hin gemiddeld 6–10% per jaar.' :
                   lang === 'TH' ? 'พัฒนา 4–5 พูลวิลล่าหรูสำหรับขายหรือปล่อยเช่า ผลตอบแทนเฉลี่ย 6–10% ต่อปี' :
                   lang === 'DE' ? 'Entwickeln Sie 4–5 Luxus-Poolvillen zum Verkauf oder zur Ferienvermietung. Mietrenditen in Hua Hin durchschnittlich 6–10%.' :
                   'Develop 4–5 luxury pool villas for sale or holiday rental. Rental yields in Hua Hin average 6–10% per year.'}
                </p>
                <span className="absolute bottom-4 right-4 text-white/30 text-sm group-hover:text-green-300 transition-colors duration-200">→</span>
              </div>
            </a>

            <a href="/info/private-estate" className="group relative block overflow-hidden rounded-2xl border border-purple-500/30 hover:border-purple-400/60 cursor-pointer hover:shadow-lg hover:shadow-purple-500/15 transition-all duration-200 min-h-[220px]">
              <img src="/IMG_5835.JPG" alt="" className="absolute inset-0 w-full h-full object-cover" style={{objectPosition: 'center center'}} />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
              <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(70,20,100,0.75) 0%, rgba(7,8,15,0.88) 100%)'}} />
              <div className="relative z-10 p-6 pb-10">
                <div className="text-3xl mb-3">🌴</div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-100 transition-colors duration-200">
                  {lang === 'NL' ? 'Privaat landgoed' : lang === 'TH' ? 'บ้านส่วนตัวขนาดใหญ่' : lang === 'DE' ? 'Privates Anwesen' : 'Private estate'}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {lang === 'NL' ? 'Behoud het volledige perceel. Hoofdvilla, gastenverblijf, groot zwembad, tropische tuin — alles met onbelemmerd bergzicht.' :
                   lang === 'TH' ? 'เก็บทั้งแปลง บ้านหลัก บ้านพักแขก สระว่ายน้ำ สวนเขตร้อน พร้อมวิวเขาโล่งกว้าง' :
                   lang === 'DE' ? 'Behalten Sie das gesamte Grundstück. Hauptvilla, Gästehaus, großer Pool, tropischer Garten — alles mit unverbautem Bergblick.' :
                   'Keep the full plot. Main villa, guest house, large pool, tropical gardens — all with unobstructed mountain views.'}
                </p>
                <span className="absolute bottom-4 right-4 text-white/30 text-sm group-hover:text-purple-300 transition-colors duration-200">→</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* DISTANCES — photo background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #07080f 0%, rgba(7,8,15,0.82) 15%, rgba(7,8,15,0.82) 85%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, serif'}}>
            Everything within reach.
          </h2>
          <p className="text-white/40 text-lg mb-14">Thap Tai, Soi 112 — at the heart of it all</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16 animate-stagger">
            {[
              { icon: '🏪', place: '7-Eleven', time: '4 min', href: '/nearby/seven-eleven', highlight: true },
              { icon: '🛍️', place: 'Bluport Mall', time: '10 min', href: '/nearby/bluport', highlight: false },
              { icon: '🏖️', place: lang === 'NL' ? 'Strand' : lang === 'TH' ? 'หาด' : lang === 'DE' ? 'Strand' : 'Hua Hin Beach', time: '12 min', href: '/nearby/beach', highlight: false },
              { icon: '🏙️', place: lang === 'NL' ? 'Centrum' : lang === 'TH' ? 'ใจกลางหัวหิน' : lang === 'DE' ? 'Stadtzentrum' : 'Town Centre', time: '17 min', href: '/nearby/town', highlight: false },
              { icon: '🏥', place: 'Bangkok Hospital', time: '15 min', href: '/nearby/hospital', highlight: false },
              { icon: '⛳', place: lang === 'NL' ? 'Golfbanen (3x)' : lang === 'TH' ? 'สนามกอล์ฟ' : lang === 'DE' ? 'Golfplätze' : 'Golf courses (3)', time: '20 min', href: '/nearby/golf', highlight: false },
              { icon: '🌿', place: lang === 'NL' ? 'Nationaal Park' : lang === 'TH' ? 'อุทยานฯ' : lang === 'DE' ? 'Nationalpark' : 'National Park', time: lang === 'NL' ? 'Op de stoep' : lang === 'TH' ? 'หน้าบ้าน' : lang === 'DE' ? 'Vor der Tür' : 'Doorstep', href: '/nearby/national-park', highlight: true },
              { icon: '🏙️', place: 'Bangkok', time: '200 km · 2.5h', href: '/nearby/bangkok', highlight: false },
              { icon: '🌴', place: 'Chumphon', time: '230 km · 3h', href: '/nearby/chumphon', highlight: false },
            ].map((d, i) => (
              <a key={i} href={d.href} className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all hover:scale-105 ${d.highlight ? 'bg-blue-600/20 border-blue-500/40 hover:bg-blue-600/30' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                <span className="text-white/80 text-sm">{d.icon} {d.place}</span>
                <span className={`font-bold text-sm ${d.highlight ? 'text-blue-300' : 'text-blue-400'}`}>{d.time}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/seven-eleven.jpg" alt="7-Eleven" className="w-full h-full object-cover" style={{objectPosition: 'center center', filter: 'blur(2px) saturate(1.2)'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #07080f 0%, rgba(7,8,15,0.55) 20%, rgba(7,8,15,0.55) 80%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-blue-300/70 text-xs uppercase tracking-widest font-medium mb-4">4 minutes from the plot</p>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white" style={{fontFamily: 'Playfair Display, serif'}}>
            Everything you need.<br/><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Any time of day.</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10">Coffee at 6am. Cold beer at 10pm. Bills paid, phone topped up, medicine when you need it. Thailand's 7-Eleven is not a convenience store — it's infrastructure.</p>
          <a href="/nearby/seven-eleven" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl transition-all text-sm font-medium">
            Why 7-Eleven matters in Thailand →
          </a>
        </div>
      </section>

      <section id="life-around" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #07080f 0%, rgba(7,8,15,0.82) 15%, rgba(7,8,15,0.82) 85%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-display font-semibold text-white mb-8" style={{fontFamily: 'Playfair Display, serif'}}>Life around the plot</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {lifeAroundCards.map((card) => (
              <div key={card.title} className={`relative group overflow-hidden rounded-2xl border transition-all duration-300 ${card.border}`} style={{background: card.bg}}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: card.glow}} />
                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center text-xl`}>{card.icon}</div>
                    <h4 className="text-white font-semibold text-base">{card.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item.label} className="flex items-start gap-2 text-sm">
                        {item.href ? (
                          <>
                            <span className={`${card.arrow} mt-0.5 flex-shrink-0`}>›</span>
                            <a
                              href={item.href}
                              {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                              className="text-purple-300/75 hover:text-purple-200 hover:underline cursor-pointer transition-colors"
                            >
                              {item.label}
                            </a>
                          </>
                        ) : (
                          <span className="text-white/65 pl-0">{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            {nearbyHighlightCards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="group relative block cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 pb-8 hover:bg-white/15 hover:border-white/25 hover:shadow-lg hover:shadow-purple-500/15 transition-all duration-200"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-200 leading-snug">{card.label}</p>
                <span className="absolute bottom-3 right-3 text-white/30 text-sm group-hover:text-purple-300 transition-colors duration-200">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section id="contact" className="py-16 px-6 bg-[#07080f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-2 text-white" style={{fontFamily: 'Playfair Display, serif'}}>{c.mapTitle}</h2>
          <p className="text-white/70 text-base leading-relaxed mb-6 max-w-3xl">Situated on a quiet access road directly off Route 2004 (Soi 112), this plot sits in one of Hua Hin&apos;s last remaining open green corridors — surrounded by nature yet connected to everything. To the northeast, the Sam Phan Nam reservoir and floating market are within walking distance. To the west, Siwali building supplies and the main road to Hua Hin centre. The plot itself is flat, unfenced, and unobstructed — a rare open canvas in a rapidly developing area.</p>
          <div className="rounded-2xl overflow-hidden border border-blue-900/30" style={{height: '420px'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d99.9073267!3d12.4751699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI4JzMwLjYiTiA5OcKwNTQnMjYuNCJF!5e1!3m2!1sen!2sth!4v1234567890"
              width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Location" />
          </div>
          <div className="mt-4 flex gap-3">
            <a href="https://www.google.com/maps?q=12.4751699,99.9073267" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/40 text-blue-300 px-5 py-2.5 rounded-xl text-sm transition-all">
              📍 Open in Google Maps
            </a>
            <a href="https://www.google.com/maps/dir/?api=1&destination=12.4751699,99.9073267" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/40 text-purple-300 px-5 py-2.5 rounded-xl text-sm transition-all">
              🧭 Get directions
            </a>
          </div>
          <div className="mt-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/30 border border-blue-500/40 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-blue-300 text-xs uppercase tracking-widest font-medium mb-1">Get in touch</p>
              <h3 className="text-white text-xl font-semibold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Request more information</h3>
              {formStatus === 'sent' ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="text-white font-medium">Message sent!</p>
                  <p className="text-white/50 text-sm mt-1">We&apos;ll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name *"
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/10 border border-blue-500/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email address *"
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/10 border border-blue-500/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp (optional)"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/10 border border-blue-500/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                  />
                  <textarea
                    placeholder="Your message or question..."
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/10 border border-blue-500/30 rounded-xl px-4 py-3 text-white placeholder-white/50 text-sm focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all resize-none"
                  />
                  {formStatus === 'error' && (
                    <p className="text-red-400 text-xs">Something went wrong. Please try WhatsApp instead.</p>
                  )}
                  <p className="text-white/40 text-xs text-center leading-relaxed">
                    {c.contactConfirm}{' '}
                    <a href="/legal/disclaimer" className="text-purple-300/70 hover:text-purple-200 hover:underline transition-colors">
                      {c.contactDisclaimerPhrase}
                    </a>
                    {lang === 'NL' ? ' hebt gelezen en begrepen.' : lang === 'TH' ? ' ของเราแล้ว' : lang === 'DE' ? ' gelesen und verstanden haben.' : '.'}
                  </p>
                  <div
                    className="cf-turnstile"
                    data-sitekey="0x4AAAAADwcB6k73kTycYDr"
                    data-callback="turnstileCallback"
                    data-theme="dark"
                  ></div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-purple-900/40"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send message →'}
                  </button>
                  <p className="text-white/40 text-xs text-center">WhatsApp: 080-140-6745</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — photo background */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="sunset cta" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, #07080f, rgba(7,8,15,0.6) 30%, rgba(7,8,15,0.6) 70%, #07080f)'}} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">{c.finalHook}</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">{c.urgency}</p>
          <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all shadow-2xl shadow-green-900/50 hover:scale-105 mb-6">
            {c.cta}
          </a>
          <a href="tel:0659012984"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105 shadow-2xl mt-4"
            style={{background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #6366f1 100%)', boxShadow: '0 0 30px rgba(124,58,237,0.5), 0 0 60px rgba(99,102,241,0.2)'}}>
            <span className="text-2xl">📞</span>
            <div className="text-left">
              <p className="text-xs text-white/70 uppercase tracking-widest font-medium">
                {lang === 'NL' ? 'Bel de agent nu' : lang === 'TH' ? 'โทรหาเอเจนต์เลย' : lang === 'DE' ? 'Jetzt Agent anrufen' : 'Call the agent now'}
              </p>
              <p className="text-xl font-bold tracking-wide">065-901-2984</p>
            </div>
          </a>
          <p className="text-white/30 text-xs mt-2 max-w-lg mx-auto leading-relaxed">
            {c.agentDisclaimer}{' '}
            <a href="/legal/disclaimer" className="hover:text-white/60 transition-colors whitespace-nowrap">
              → {c.agentDisclaimerLink}
            </a>
          </p>
          <p className="text-white/50 text-sm mb-6">080-140-6745 · Thai: 065-901-2984 · {c.ctaSub}</p>
          <div className="mt-6">
            <p className="text-4xl font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, serif'}}>{c.price} <span className="text-xl font-normal text-white/40">{lang === 'NL' ? 'per rai' : lang === 'TH' ? 'ต่อไร่' : lang === 'DE' ? 'pro Rai' : 'per rai'}</span></p>
            <p className="text-white/40 text-sm mt-2">{c.total}</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#07080f]">
        {/* Donation banner */}
        <div className="border-t border-purple-900/30 bg-gradient-to-r from-purple-950/40 via-blue-950/30 to-purple-950/40">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-lg mb-1">
                {lang === 'NL' ? '🐾 Geef hoop aan straathonden in Thailand' :
                 lang === 'TH' ? '🐾 มอบความหวังให้น้องหมาจรจัดในไทย' :
                 lang === 'DE' ? '🐾 Gib Straßenhunden in Thailand Hoffnung' :
                 '🐾 Give hope to street dogs in Thailand'}
              </p>
              <p className="text-white/50 text-sm">
                {lang === 'NL' ? 'Steun Saved Souls Foundation — elke bijdrage telt' :
                 lang === 'TH' ? 'สนับสนุน Saved Souls Foundation — ทุกบาทมีความหมาย' :
                 lang === 'DE' ? 'Unterstütze die Saved Souls Foundation — jeder Beitrag zählt' :
                 'Support Saved Souls Foundation — every donation makes a difference'}
              </p>
            </div>
            <a
              href="https://www.savedsouls-foundation.org/en/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-3 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-purple-900/40 text-sm whitespace-nowrap"
            >
              {lang === 'NL' ? '❤️ Doneer nu' :
               lang === 'TH' ? '❤️ บริจาคเลย' :
               lang === 'DE' ? '❤️ Jetzt spenden' :
               '❤️ Donate now'}
            </a>
          </div>
        </div>

        {/* Main footer */}
        <div className="border-t border-[#1e2a4a] py-10 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              Thap Tai, Soi 112, Hua Hin, Prachuap Khiri Khan 77110, Thailand<br/>
              <span className="text-white/30 text-xs">080-140-6745 · Thai: 065-901-2984</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-white/30 text-xs">
              <a href="https://allesis.nl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                Webdesign by <span className="text-blue-400/60 hover:text-blue-400">Allesis.nl</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
