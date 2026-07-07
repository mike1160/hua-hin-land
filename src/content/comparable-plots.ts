import type { Lang } from '../lib/site-lang'

export type ComparableRow = {
  plot: string
  size: string
  price: string
  perRai: string
  title: string
  location: string
  note: string
  highlight?: boolean
}

export type ComparablePlotsContent = {
  title: string
  subtitle: string
  headers: { plot: string; size: string; price: string; perRai: string; title: string; location: string; note: string }
  rows: ComparableRow[]
  conclusion: string
  source: string
}

const rowsEn: ComparableRow[] = [
  { plot: 'Soi 112 plot A', size: '1 rai', price: '฿10,400,000', perRai: '฿10.4M/rai', title: 'Chanote', location: 'Soi 112', note: 'Harmony Real Estate' },
  { plot: 'Soi 112 plot B', size: '7.5 rai', price: '฿92,000,000', perRai: '฿12.3M/rai', title: 'Chanote', location: 'Soi 112', note: 'Properstar' },
  { plot: 'Hin Lek Fai plots', size: '1 rai', price: '฿2,500,000–3,500,000', perRai: '฿2.5–3.5M/rai', title: 'Chanote', location: 'Hin Lek Fai (further from centre)', note: 'Hipflat' },
  { plot: 'Black Mountain', size: '2 rai', price: '฿12,000,000', perRai: '฿6M/rai', title: 'Chanote', location: 'Black Mountain', note: 'FazWaz' },
  { plot: 'Near Soi 112', size: '6 rai 2 ngan', price: '฿9,810,000', perRai: '฿1.5M/rai', title: 'Unknown', location: 'Hua Hin', note: 'HuaHin Property Search' },
  { plot: 'Our plot', size: '4 rai 2 ngan', price: '฿10,350,000', perRai: '฿2.3M/rai', title: 'Chanote', location: 'Soi 112', note: 'Flat terrain, water connected', highlight: true },
]

const rowsTh: ComparableRow[] = [
  { plot: 'แปลงซอย 112 A', size: '1 ไร่', price: '฿10,400,000', perRai: '฿10.4M/ไร่', title: 'โฉนด', location: 'ซอย 112', note: 'Harmony Real Estate' },
  { plot: 'แปลงซอย 112 B', size: '7.5 ไร่', price: '฿92,000,000', perRai: '฿12.3M/ไร่', title: 'โฉนด', location: 'ซอย 112', note: 'Properstar' },
  { plot: 'แปลงหินเหล็กไฟ', size: '1 ไร่', price: '฿2,500,000–3,500,000', perRai: '฿2.5–3.5M/ไร่', title: 'โฉนด', location: 'หินเหล็กไฟ (ห่างจากใจกลาง)', note: 'Hipflat' },
  { plot: 'Black Mountain', size: '2 ไร่', price: '฿12,000,000', perRai: '฿6M/ไร่', title: 'โฉนด', location: 'Black Mountain', note: 'FazWaz' },
  { plot: 'ใกล้ซอย 112', size: '6 ไร่ 2 งาน', price: '฿9,810,000', perRai: '฿1.5M/ไร่', title: 'ไม่ทราบ', location: 'หัวหิน', note: 'HuaHin Property Search' },
  { plot: 'แปลงของเรา', size: '4 ไร่ 2 งาน', price: '฿10,350,000', perRai: '฿2.3M/ไร่', title: 'โฉนด', location: 'ซอย 112', note: 'พื้นที่ราบ มีน้ำประปา', highlight: true },
]

const en: ComparablePlotsContent = {
  title: 'How does our plot compare?',
  subtitle: 'We benchmarked every comparable plot currently listed on Soi 112 and surrounding area.',
  headers: { plot: 'Plot', size: 'Size', price: 'Price', perRai: 'Price/rai', title: 'Title', location: 'Location', note: 'Note' },
  rows: rowsEn,
  conclusion: 'Our plot is Chanote titled, flat, water connected, and priced below comparable Soi 112 listings — in one piece at 4 rai 2 ngan, a rare size in this corridor.',
  source: 'Data based on active listings from Hipflat, FazWaz, Harmony Real Estate and Dot Property — July 2025',
}

const th: ComparablePlotsContent = {
  title: 'แปลงของเราเปรียบเทียบอย่างไร?',
  subtitle: 'เราเปรียบเทียบทุกแปลงที่เทียบเคียงได้ที่ลงประกาศอยู่บนซอย 112 และพื้นที่โดยรอบ',
  headers: { plot: 'แปลง', size: 'ขนาด', price: 'ราคา', perRai: 'ราคาต่อไร่', title: 'โฉนด', location: 'ที่ตั้ง', note: 'หมายเหตุ' },
  rows: rowsTh,
  conclusion: 'แปลงของเราได้รับโฉนดที่ดิน มีพื้นที่ราบ มีการเชื่อมต่อน้ำประปา และราคาต่ำกว่ารายการซอย 112 ที่เปรียบเทียบได้ — ในพื้นที่เดียว 4 ไร่ 2 งาน ซึ่งเป็นขนาดที่หายากในแนวทางเดินนี้',
  source: 'ข้อมูลจากรายการที่ลงประกาศอยู่บน Hipflat, FazWaz, Harmony Real Estate และ Dot Property — กรกฎาคม 2025',
}

export function getComparablePlotsContent(lang: Lang): ComparablePlotsContent {
  return lang === 'TH' ? th : en
}
