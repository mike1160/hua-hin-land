import type { Lang } from '../lib/site-lang'

export type BoutiqueDevelopmentContent = {
  title: string
  conceptTitle: string
  concept: string
  marketTitle: string
  marketItems: string[]
  calcTitle: string
  calcRows: { label: string; value: string; highlight?: boolean }[]
  calcNote: string
}

const en: BoutiqueDevelopmentContent = {
  title: 'Boutique development — 4 to 5 luxury pool villas',
  conceptTitle: '🏗️ The concept',
  concept: 'Develop the entire 4 rai 2 ngan plot as a small-scale luxury villa project — 4 to 5 pool villas designed for sale or holiday rental. Soi 112\'s prestige corridor supports premium pricing and strong demand from both Thai and international buyers.',
  marketTitle: '📊 Market data',
  marketItems: [
    'Rental yields in Hua Hin average 6–10% per year',
    'Pool villas on Soi 112 start at ฿15M+',
    'Strong demand from retirees, second-home buyers and holiday rental market',
    'Chanote title allows subdivision and individual sale per villa plot',
  ],
  calcTitle: '🧮 Example calculation',
  calcRows: [
    { label: 'Land purchase', value: '฿10,350,000' },
    { label: '4 villas × ฿15M sale price', value: '฿60M revenue', highlight: true },
    { label: 'Build cost (est. ฿8–12M per villa)', value: 'Deduct from gross' },
  ],
  calcNote: 'Illustrative example — consult a local developer and lawyer for accurate feasibility studies.',
}

const th: BoutiqueDevelopmentContent = {
  title: 'โครงการพัฒนาขนาดเล็ก — วิลล่าหรูพร้อมสระว่ายน้ำ 4–5 หลัง',
  conceptTitle: '🏗️ แนวคิด',
  concept: 'พัฒนาแปลง 4 ไร่ 2 งานทั้งหมดเป็นโครงการวิลล่าหรูขนาดเล็ก — วิลล่าพร้อมสระว่ายน้ำ 4–5 หลัง ออกแบบเพื่อขายหรือปล่อยเช่าเพื่อพักผ่อน ทำเลซอย 112 รองรับราคาระดับพรีเมียมและความต้องการสูงจากทั้งผู้ซื้อไทยและต่างชาติ',
  marketTitle: '📊 ข้อมูลตลาด',
  marketItems: [
    'ผลตอบแทนจากการเช่าในหัวหินเฉลี่ย 6–10% ต่อปี',
    'วิลล่าพร้อมสระว่ายน้ำบนซอย 112 เริ่มต้นที่ ฿15M+',
    'ความต้องการสูงจากผู้เกษียณ ผู้ซื้อบ้านที่สอง และตลาดการเช่าเพื่อพักผ่อน',
    'โฉนดที่ดิน (Chanote) อนุญาตให้แบ่งแปลงและขายแยกต่อแปลงวิลล่า',
  ],
  calcTitle: '🧮 ตัวอย่างการคำนวณ',
  calcRows: [
    { label: 'ราคาซื้อที่ดิน', value: '฿10,350,000' },
    { label: '4 วิลล่า × ราคาขาย ฿15M', value: 'รายได้ ฿60M', highlight: true },
    { label: 'ต้นทุนก่อสร้าง (ประมาณ ฿8–12M ต่อหลัง)', value: 'หักจากรายได้รวม' },
  ],
  calcNote: 'ตัวอย่างเพื่อประกอบความเข้าใจ — ปรึกษาผู้พัฒนาและทนายความในพื้นที่เพื่อการศึกษาความเป็นไปได้ที่แม่นยำ',
}

export function getBoutiqueDevelopmentContent(lang: Lang): BoutiqueDevelopmentContent {
  return lang === 'TH' ? th : en
}
