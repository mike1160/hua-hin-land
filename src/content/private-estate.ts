import type { Lang } from '../lib/site-lang'

export type PrivateEstateContent = {
  title: string
  conceptTitle: string
  concept: string
  whyTitle: string
  whyItems: string[]
}

const en: PrivateEstateContent = {
  title: 'Private estate — your own tropical compound',
  conceptTitle: '🌴 The concept',
  concept: 'Keep the full 4 rai 2 ngan plot for yourself. Build a main villa, guest house, large swimming pool and tropical gardens — all on one private compound with no neighbours overlooking your land. This is the option for buyers who want space, privacy and a legacy property rather than a development project.',
  whyTitle: '✅ Why this plot suits a private estate',
  whyItems: [
    'Unobstructed mountain views — protected national park backdrop',
    '4 rai 2 ngan of privacy — rare size for a single-owner compound on Soi 112',
    'Soi 112 luxury corridor — Botanica, La Felice, Mali Prestige as neighbours',
    'Flat terrain — flexible layout for main house, pool and gardens',
    'Water connected — infrastructure ready for construction',
  ],
}

const th: PrivateEstateContent = {
  title: 'ที่ดินส่วนตัว — บ้านพักเขตร้อนของคุณเอง',
  conceptTitle: '🌴 แนวคิด',
  concept: 'เก็บแปลง 4 ไร่ 2 งานทั้งหมดไว้เป็นของคุณ สร้างวิลล่าหลัก บ้านพักแขก สระว่ายน้ำขนาดใหญ่ และสวนเขตร้อน — ทั้งหมดในบริเวณส่วนตัวโดยไม่มีเพื่อนบ้านมองเห็นที่ดินของคุณ ตัวเลือกนี้เหมาะสำหรับผู้ซื้อที่ต้องการพื้นที่ ความเป็นส่วนตัว และทรัพย์สินที่สืบทอดได้ มากกว่าโครงการพัฒนา',
  whyTitle: '✅ ทำไมแปลงนี้เหมาะกับที่ดินส่วนตัว',
  whyItems: [
    'วิวภูเขาโล่งไม่มีสิ่งกีดขวาง — พื้นหลังอุทยานแห่งชาติที่ได้รับการคุ้มครอง',
    'ความเป็นส่วนตัว 4 ไร่ 2 งาน — ขนาดที่หายากสำหรับบ้านเดี่ยวบนซอย 112',
    'ทำเลหรูซอย 112 — Botanica, La Felice, Mali Prestige เป็นเพื่อนบ้าน',
    'พื้นที่ราบ — จัดวางบ้านหลัก สระว่ายน้ำ และสวนได้อย่างยืดหยุ่น',
    'มีน้ำประปา — โครงสร้างพื้นฐานพร้อมสำหรับการก่อสร้าง',
  ],
}

export function getPrivateEstateContent(lang: Lang): PrivateEstateContent {
  return lang === 'TH' ? th : en
}
