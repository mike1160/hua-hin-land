import type { Lang } from '../lib/site-lang'

export type LiveAndProfitContent = {
  title: string
  conceptTitle: string
  concept: string
  calcTitle: string
  calcRows: { label: string; value: string; highlight?: boolean }[]
  calcNote: string
}

const en: LiveAndProfitContent = {
  title: 'Live & profit — build your villa, sell the rest',
  conceptTitle: '🏡 The concept',
  concept: 'Buy 4 rai 2 ngan in one piece. Build your own villa on 1 rai. Subdivide the remaining land into 3–4 plots of approximately 1 rai each and sell them individually — keeping your home while recovering most or all of your land investment.',
  calcTitle: '🧮 Example calculation',
  calcRows: [
    { label: 'Total land purchase (4 rai 2 ngan)', value: '฿10,350,000' },
    { label: 'Land cost per 1-rai plot (÷3.5)', value: 'Under ฿2.5M', highlight: true },
    { label: 'Pool villas on Soi 112 start at', value: '฿15M+' },
    { label: 'Potential margin per villa sold', value: '฿12M+', highlight: true },
  ],
  calcNote: 'Illustrative example — actual returns depend on build costs, subdivision permits and market conditions.',
}

const th: LiveAndProfitContent = {
  title: 'อยู่เองและทำกำไร — สร้างวิลล่าของคุณ ขายส่วนที่เหลือ',
  conceptTitle: '🏡 แนวคิด',
  concept: 'ซื้อที่ดิน 4 ไร่ 2 งานในชิ้นเดียว สร้างวิลล่าของคุณบน 1 ไร่ แบ่งที่ดินที่เหลือเป็น 3–4 แปลง แปลงละประมาณ 1 ไร่ แล้วขายทีละแปลง — เก็บบ้านของคุณไว้ พร้อมคืนทุนที่ดินส่วนใหญ่หรือทั้งหมด',
  calcTitle: '🧮 ตัวอย่างการคำนวณ',
  calcRows: [
    { label: 'ราคาซื้อที่ดินทั้งหมด (4 ไร่ 2 งาน)', value: '฿10,350,000' },
    { label: 'ต้นทุนที่ดินต่อแปลง 1 ไร่ (÷3.5)', value: 'ต่ำกว่า ฿2.5M', highlight: true },
    { label: 'วิลล่าพร้อมสระว่ายน้ำบนซอย 112 เริ่มต้นที่', value: '฿15M+' },
    { label: 'กำไรที่เป็นไปได้ต่อวิลล่าที่ขาย', value: '฿12M+', highlight: true },
  ],
  calcNote: 'ตัวอย่างเพื่อประกอบความเข้าใจ — ผลตอบแทนจริงขึ้นอยู่กับต้นทุนก่อสร้าง ใบอนุญาตแบ่งแปลง และสภาวะตลาด',
}

export function getLiveAndProfitContent(lang: Lang): LiveAndProfitContent {
  return lang === 'TH' ? th : en
}
