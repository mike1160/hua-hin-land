import type { Lang } from '../lib/site-lang'

export type PartialSaleContent = {
  title: string
  subtitle: string
  howTitle: string
  howItems: string[]
  processTitle: string
  steps: { title: string; desc: string }[]
  timeline: string
  costsTitle: string
  costItem: string
  costAmount: string
  costs: { item: string; amount: string; highlight?: boolean }[]
  note: string
}

const en: PartialSaleContent = {
  title: 'Buying part of the plot — what you need to know',
  subtitle: 'Partial sale is possible from 1 rai. Here is what the process looks like and what costs to expect as a buyer.',
  howTitle: '📐 How it works',
  howItems: [
    'The plot is 4 rai 2 ngan with a single Chanote title',
    'On partial sale, the plot is officially subdivided at the Thai Land Department',
    'Each buyer receives their own Chanote title in their name — the strongest form of land ownership in Thailand',
    'Minimum purchase: 1 rai',
    'Maximum: 4–5 separate plots possible',
    'Flat terrain, water connection in place, access via Soi 112',
  ],
  processTitle: '📋 Process & timeline',
  steps: [
    { title: 'Agreement on size and boundaries', desc: 'Buyer and seller agree on the exact size and boundaries of the portion being sold.' },
    { title: 'Official land surveyor', desc: 'A licensed surveyor measures and maps the new plot boundaries — approximately 2–4 weeks.' },
    { title: 'Subdivision application at Land Department', desc: 'Formal application to split the Chanote title — approximately 4–8 weeks.' },
    { title: 'New Chanote titles issued', desc: 'Each buyer receives their own separate Chanote title deed in their name.' },
  ],
  timeline: 'Total timeline: approximately 2–3 months from agreement to new title deeds.',
  costsTitle: '💰 Costs — what the buyer pays',
  costItem: 'Cost item',
  costAmount: 'Amount',
  costs: [
    { item: 'Transfer fee', amount: '2% of official appraised value — often split 50/50 with seller, so buyer pays ~1%' },
    { item: 'Surveyor fee (subdivision)', amount: '฿15,000 – ฿30,000' },
    { item: 'Lawyer / due diligence', amount: '฿20,000 – ฿50,000 (strongly recommended)' },
    { item: 'Land Department subdivision costs', amount: '฿5,000 – ฿15,000' },
    { item: 'Total indicative for buyer', amount: 'ca. ฿40,000 – ฿100,000 + transfer fee', highlight: true },
  ],
  note: 'Note: Stamp duty (0.5%), Specific Business Tax (3.3%) and Withholding Tax are costs for the seller, not the buyer. The exact split of the transfer fee is negotiable and will be agreed in the Sale & Purchase Agreement. All amounts are indicative — consult a Thai property lawyer before committing.',
}

const th: PartialSaleContent = {
  title: 'การซื้อบางส่วนของแปลง — สิ่งที่คุณต้องรู้',
  subtitle: 'สามารถขายบางส่วนได้ตั้งแต่ 1 ไร่ นี่คือขั้นตอนและค่าใช้จ่ายที่ผู้ซื้อควรคาดหวัง',
  howTitle: '📐 วิธีการทำงาน',
  howItems: [
    'แปลงที่ดินมีขนาด 4 ไร่ 2 งาน พร้อมโฉนดที่ดิน (Chanote) ฉบับเดียว',
    'เมื่อขายบางส่วน แปลงจะถูกแบ่งอย่างเป็นทางการที่กรมที่ดิน',
    'ผู้ซื้อแต่ละรายจะได้รับโฉนดที่ดินเป็นชื่อของตนเอง — รูปแบบกรรมสิทธิ์ที่ดินที่แข็งแกร่งที่สุดในประเทศไทย',
    'การซื้อขั้นต่ำ: 1 ไร่',
    'สูงสุด: แบ่งได้ 4–5 แปลง',
    'พื้นที่ราบ มีการเชื่อมต่อน้ำประปา เข้าถึงได้ทางซอย 112',
  ],
  processTitle: '📋 ขั้นตอนและระยะเวลา',
  steps: [
    { title: 'ตกลงขนาดและขอบเขต', desc: 'ผู้ซื้อและผู้ขายตกลงขนาดและขอบเขตที่แน่นอนของส่วนที่ขาย' },
    { title: 'ช่างรังวัดอย่างเป็นทางการ', desc: 'ช่างรังวัดที่ได้รับใบอนุญาตวัดและทำแผนที่ขอบเขตแปลงใหม่ — ประมาณ 2–4 สัปดาห์' },
    { title: 'ยื่นคำขอแบ่งแปลงที่กรมที่ดิน', desc: 'ยื่นคำขอแบ่งโฉนดที่ดินอย่างเป็นทางการ — ประมาณ 4–8 สัปดาห์' },
    { title: 'ออกโฉนดที่ดินใหม่', desc: 'ผู้ซื้อแต่ละรายได้รับโฉนดที่ดิน (Chanote) แยกเป็นชื่อของตนเอง' },
  ],
  timeline: 'ระยะเวลารวม: ประมาณ 2–3 เดือน ตั้งแต่ตกลงจนถึงออกโฉนดใหม่',
  costsTitle: '💰 ค่าใช้จ่าย — สิ่งที่ผู้ซื้อต้องจ่าย',
  costItem: 'รายการ',
  costAmount: 'จำนวน',
  costs: [
    { item: 'ค่าธรรมเนียมการโอน', amount: '2% ของราคาประเมินอย่างเป็นทางการ — มักแบ่ง 50/50 กับผู้ขาย ผู้ซื้อจ่าย ~1%' },
    { item: 'ค่าช่างรังวัด (แบ่งแปลง)', amount: '฿15,000 – ฿30,000' },
    { item: 'ทนายความ / ตรวจสอบเอกสาร', amount: '฿20,000 – ฿50,000 (แนะนำอย่างยิ่ง)' },
    { item: 'ค่าใช้จ่ายแบ่งแปลงที่กรมที่ดิน', amount: '฿5,000 – ฿15,000' },
    { item: 'รวมโดยประมาณสำหรับผู้ซื้อ', amount: 'ประมาณ ฿40,000 – ฿100,000 + ค่าธรรมเนียมการโอน', highlight: true },
  ],
  note: 'หมายเหตุ: อากรแสตมป์ (0.5%) ภาษีธุรกิจเฉพาะ (3.3%) และภาษีหัก ณ ที่จ่าย เป็นค่าใช้จ่ายของผู้ขาย ไม่ใช่ผู้ซื้อ การแบ่งค่าธรรมเนียมการโอนสามารถเจรจาได้และจะตกลงในสัญญาซื้อขาย ตัวเลขทั้งหมดเป็นเพียงการประมาณการ — ปรึกษาทนายความด้านอสังหาริมทรัพย์ไทยก่อนตัดสินใจ',
}

export function getPartialSaleContent(lang: Lang): PartialSaleContent {
  return lang === 'TH' ? th : en
}
