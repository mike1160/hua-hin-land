'use client'

import { useState, useEffect } from 'react'

declare global {
  interface Window {
    turnstileCallback: (token: string) => void
  }
}

const PHONE = '66801406745'

const langs = ['EN', 'NL', 'TH', 'DE']

type Lang = 'EN' | 'NL' | 'TH' | 'DE'

const t: Record<Lang, {
  badge: string, hook: string, sub: string, price: string, priceLabel: string, total: string, cta: string,
  plotTitle: string, lifestyleTitle: string, lifestyleSub: string, neighbourTitle: string, neighbourSub: string,
  whyTitle: string, mapTitle: string, finalHook: string, urgency: string
}> = {
  EN: {
    badge: 'Only 1 plot available · Owners not in a rush',
    hook: '4 Rai 2 Ngan of prime land. Soi 112, Hua Hin.',
    sub: '4 Rai 2 Ngan · Flat · Chanote · Mountain views · Water connected · Soi 112',
    price: '฿ 2,300,000',
    priceLabel: 'per rai · Total ฿ 10,350,000 · ≈ €270,000',
    total: 'Total (4 rai 2 ngan): ฿ 10,350,000 — approx. €270,000',
    cta: '📲 WhatsApp 080-140-6745',
    plotTitle: 'The land — 4 rai 2 ngan, Soi 112, Hua Hin',
    lifestyleTitle: 'The life you\'ve been designing.',
    lifestyleSub: 'Live music every night. Golf at sunrise. Fresh seafood by the ocean. A warm, genuinely international community of people who chose the good life — and found it in Hua Hin.',
    neighbourTitle: 'The address that says everything.',
    neighbourSub: 'Botanica Hua Hin — a completed luxury villa development — chose this exact corridor. That benchmark confirms what discerning buyers already know about Soi 112.',
    whyTitle: 'Why this plot. Why now.',
    mapTitle: 'Find it.',
    finalHook: 'One plot. No pressure. No deadline.',
    urgency: 'The owners are in no rush — the land appreciates either way. When the right buyer appears, transfer happens within days. There is only one of these.',
  },
  NL: {
    badge: 'Slechts 1 perceel · Eigenaren hebben geen haast',
    hook: '4 Rai 2 Ngan topgrond. Soi 112, Hua Hin.',
    sub: '4 Rai 2 Ngan · Vlak · Chanote · Bergzicht · Water aanwezig · Soi 112',
    price: '฿ 2.300.000',
    priceLabel: 'per rai · Totaal ฿ 10.350.000 · ≈ €270.000',
    total: 'Totaal (4 rai 2 ngan): ฿ 10.350.000 — ca. €270.000',
    cta: '📲 WhatsApp 080-140-6745',
    plotTitle: 'Het perceel.',
    lifestyleTitle: 'Het leven dat je al lang ontwerpt.',
    lifestyleSub: 'Elke avond livemuziek. Golf bij zonsopgang. Verse zeevruchten aan de oceaan. Een warme, echt internationale gemeenschap van mensen die kozen voor het goede leven — en het vonden in Hua Hin.',
    neighbourTitle: 'Het adres dat alles zegt.',
    neighbourSub: 'Botanica Hua Hin — een afgerond luxe villaproject — koos exact deze corridor. Dat bevestigt wat veeleisende kopers al weten over Soi 112.',
    whyTitle: 'Waarom dit perceel. Waarom nu.',
    mapTitle: 'Vind het.',
    finalHook: 'Eén perceel. Geen druk. Geen deadline.',
    urgency: 'De eigenaren hebben geen haast — het land stijgt hoe dan ook in waarde. Komt de juiste koper, dan gaat de overdracht binnen dagen. Er is er maar één.',
  },
  TH: {
    badge: 'มีเพียง 1 แปลง · เจ้าของไม่รีบขาย',
    hook: 'ที่ดิน 4 ไร่ 2 งาน ทำเลทอง ซอย 112 หัวหิน',
    sub: '4 ไร่ 2 งาน · ราบเรียบ · โฉนด · วิวเขา · มีน้ำประปา · ซอย 112',
    price: '฿ 2,300,000',
    priceLabel: 'ต่อไร่ · รวม ฿ 10,350,000 · ≈ €270,000',
    total: 'รวม (4 ไร่ 2 งาน): ฿ 10,350,000',
    cta: '📲 WhatsApp 080-140-6745',
    plotTitle: 'ที่ดิน',
    lifestyleTitle: 'ชีวิตที่คุณออกแบบมานาน',
    lifestyleSub: 'ดนตรีสดทุกคืน กอล์ฟยามรุ่งอรุณ อาหารทะเลสดริมมหาสมุทร ชุมชนนานาชาติที่อบอุ่นของคนที่เลือกชีวิตที่ดี — และพบมันในหัวหิน',
    neighbourTitle: 'ที่อยู่ที่บอกทุกอย่าง',
    neighbourSub: 'Botanica Hua Hin — โครงการวิลล่าหรูที่เสร็จสมบูรณ์แล้ว — เลือกทำเลนี้พอดี นั่นคือการยืนยันว่าซอย 112 คือที่ที่ผู้ซื้อชั้นนำเลือก',
    whyTitle: 'ทำไมแปลงนี้ ทำไมตอนนี้',
    mapTitle: 'ค้นหาที่ตั้ง',
    finalHook: 'แปลงเดียว ไม่มีแรงกดดัน ไม่มีกำหนดเวลา',
    urgency: 'เจ้าของไม่รีบขาย ที่ดินมีแต่จะราคาขึ้น เมื่อผู้ซื้อที่เหมาะสมมา โอนได้ภายในไม่กี่วัน มีเพียงแปลงเดียวเท่านั้น',
  },
  DE: {
    badge: 'Nur 1 Grundstück · Eigentümer ohne Zeitdruck',
    hook: '4 Rai 2 Ngan Topgrundstück. Soi 112, Hua Hin.',
    sub: '4 Rai 2 Ngan · Eben · Chanote · Bergblick · Wasser vorhanden · Soi 112',
    price: '฿ 2.300.000',
    priceLabel: 'pro Rai · Gesamt ฿ 10.350.000 · ≈ €270.000',
    total: 'Gesamt (4 Rai 2 Ngan): ฿ 10.350.000 — ca. €270.000',
    cta: '📲 WhatsApp 080-140-6745',
    plotTitle: 'Das Grundstück.',
    lifestyleTitle: 'Das Leben, das Sie schon lange entwerfen.',
    lifestyleSub: 'Jeden Abend Live-Musik. Golf bei Sonnenaufgang. Frische Meeresfrüchte am Ozean. Eine herzliche, wirklich internationale Gemeinschaft von Menschen, die das gute Leben gewählt haben — und es in Hua Hin gefunden haben.',
    neighbourTitle: 'Die Adresse, die alles sagt.',
    neighbourSub: 'Botanica Hua Hin — ein fertiggestelltes Luxus-Villaprojekt — wählte genau diesen Korridor. Das bestätigt, was anspruchsvolle Käufer über Soi 112 bereits wissen.',
    whyTitle: 'Warum dieses Grundstück. Warum jetzt.',
    mapTitle: 'Finden Sie es.',
    finalHook: 'Ein Grundstück. Kein Druck. Keine Frist.',
    urgency: 'Die Eigentümer haben keine Eile — das Land steigt so oder so im Wert. Kommt der richtige Käufer, erfolgt die Übertragung innerhalb von Tagen. Es gibt nur dieses eine.',
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

export default function Home() {
  const [lang, setLang] = useState<Lang>('EN')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [slideIndex, setSlideIndex] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string>('')
  const c = t[lang]

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    document.head.appendChild(script)

    window.turnstileCallback = (token: string) => {
      setTurnstileToken(token)
    }

    return () => {
      document.head.removeChild(script)
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

      {/* LANG SWITCHER — fixed top right */}
      <div className="fixed top-4 right-4 z-40 flex gap-1 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
        {langs.map(l => (
          <button key={l} onClick={() => setLang(l as Lang)}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${lang === l ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'text-white/50 hover:text-white'}`}>
            {l}
          </button>
        ))}
      </div>

      {/* HERO — fullscreen photo background */}
      <section className="relative min-h-screen flex flex-col justify-end">
        <div className="absolute inset-0">
          <img src="/photo2.jpg" alt="hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(30,10,60,0.2) 0%, rgba(60,20,120,0.5) 40%, rgba(7,8,15,0.9) 75%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/80 mb-6">{c.badge}</div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">{c.hook}</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 tracking-wide">{c.sub}</p>
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display, serif'}}>{c.price}</div>
              <div className="text-white/50 text-sm mt-1">{c.priceLabel}</div>
            </div>
            <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all shadow-2xl shadow-green-900/50 hover:scale-105">
              {c.cta}
            </a>
          </div>
        </div>
      </section>

      {/* SPECS — dark cards */}
      <section className="py-16 px-6 bg-[#07080f]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

          <div className="relative group overflow-hidden rounded-2xl border border-blue-500/20 hover:border-blue-400/60 transition-all duration-300 cursor-default" style={{background: 'linear-gradient(135deg, rgba(30,58,138,0.35) 0%, rgba(15,23,92,0.55) 100%)'}}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 0%, rgba(96,165,250,0.2) 0%, transparent 65%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">📐</div>
              <p className="text-blue-300/60 text-xs uppercase tracking-widest mb-1 font-medium">Size</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[0][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 cursor-default" style={{background: 'linear-gradient(135deg, rgba(120,53,15,0.35) 0%, rgba(69,26,3,0.55) 100%)'}}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 0%, rgba(251,191,36,0.18) 0%, transparent 65%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">📜</div>
              <p className="text-amber-300/60 text-xs uppercase tracking-widest mb-1 font-medium">Title deed</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[1][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 cursor-default" style={{background: 'linear-gradient(135deg, rgba(88,28,135,0.35) 0%, rgba(49,10,101,0.55) 100%)'}}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 0%, rgba(167,139,250,0.2) 0%, transparent 65%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">🏔️</div>
              <p className="text-purple-300/60 text-xs uppercase tracking-widest mb-1 font-medium">View</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[2][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-400/60 transition-all duration-300 cursor-default" style={{background: 'linear-gradient(135deg, rgba(6,78,59,0.35) 0%, rgba(5,46,22,0.55) 100%)'}}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 0%, rgba(52,211,153,0.18) 0%, transparent 65%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">🚧</div>
              <p className="text-green-300/60 text-xs uppercase tracking-widest mb-1 font-medium">Terrain</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[3][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 cursor-default" style={{background: 'linear-gradient(135deg, rgba(21,94,117,0.35) 0%, rgba(8,51,68,0.55) 100%)'}}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.18) 0%, transparent 65%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">💧</div>
              <p className="text-cyan-300/60 text-xs uppercase tracking-widest mb-1 font-medium">Utilities</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[4][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-slate-400/20 hover:border-slate-300/60 transition-all duration-300 cursor-default" style={{background: 'linear-gradient(135deg, rgba(51,65,85,0.45) 0%, rgba(15,23,42,0.65) 100%)'}}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 0%, rgba(148,163,184,0.15) 0%, transparent 65%)'}} />
            <div className="relative p-6">
              <div className="text-2xl mb-4">🛣️</div>
              <p className="text-slate-400/60 text-xs uppercase tracking-widest mb-1 font-medium">Access</p>
              <p className="text-white font-semibold text-base leading-snug">{specs[5][lang.toLowerCase() as 'en'|'nl'|'th'|'de']}</p>
            </div>
          </div>

        </div>
      </section>

      {/* CHANOTE — slim info bar */}
      <section className="py-10 px-6 bg-[#07080f]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-950/40 to-purple-950/30 border border-blue-900/30 rounded-2xl px-8 py-6 flex flex-wrap items-center gap-6">
            <div className="flex-shrink-0">
              <p className="text-blue-400 text-xs uppercase tracking-widest font-medium mb-1">Title deed</p>
              <p className="text-white text-xl font-semibold">Chanote · NS.4J</p>
              <p className="text-white/50 text-sm">Strongest land title in Thailand</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block"></div>
            <div className="flex flex-wrap gap-4 flex-1">
              {['GPS-mapped boundaries', 'Registered at Land Department', 'Ready to transfer immediately', 'Red Garuda seal — authentic'].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>{f}
                </div>
              ))}
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => setLightbox('/chanote.jpg')}
                className="text-blue-400/60 hover:text-blue-400 text-xs underline underline-offset-2 transition-colors"
              >
                View title deed document →
              </button>
            </div>
          </div>
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

      {/* PHOTO GALLERY — slider */}
      <section className="py-8 bg-[#07080f]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2" style={{fontFamily: 'Playfair Display, serif'}}>{c.plotTitle}</h2>
          <p className="text-white/40 text-sm mb-6">Use arrows or thumbnails to browse · Click to enlarge</p>

          {/* Main slide */}
          <div className="relative group rounded-2xl overflow-hidden" style={{height: '520px'}}>
            <img
              src={slides[slideIndex].src}
              alt={slides[slideIndex].caption}
              className="w-full h-full object-cover cursor-pointer transition-opacity duration-300"
              onClick={() => setLightbox(slides[slideIndex].src)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Caption */}
            <p className="absolute bottom-16 left-6 text-white/80 text-sm">{slides[slideIndex].caption}</p>
            <p className="absolute bottom-6 left-6 text-white/40 text-xs">Click to enlarge · {slideIndex + 1} / {slides.length}</p>

            {/* Left arrow */}
            <button
              onClick={() => setSlideIndex((slideIndex - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl hover:bg-purple-600/60 transition-all opacity-0 group-hover:opacity-100"
            >
              ←
            </button>

            {/* Right arrow */}
            <button
              onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl hover:bg-purple-600/60 transition-all opacity-0 group-hover:opacity-100"
            >
              →
            </button>
          </div>

          {/* Thumbnails */}
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
        </div>
      </section>

      {/* VIDEOS */}
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
                { icon: '⛳', label: lang === 'NL' ? '3 golfbanen · 20 min' : lang === 'TH' ? '3 สนามกอล์ฟ · 20 นาที' : lang === 'DE' ? '3 Golfplätze · 20 Min.' : '3 golf courses · 20 min', href: '/life/golf' },
                { icon: '🏖️', label: lang === 'NL' ? 'Strand · 12 min' : lang === 'TH' ? 'หาด · 12 นาที' : lang === 'DE' ? 'Strand · 12 Min.' : 'Beach · 12 min', href: '/life/nature' },
                { icon: '🌍', label: lang === 'NL' ? 'Echt internationaal' : lang === 'TH' ? 'นานาชาติแท้จริง' : lang === 'DE' ? 'Wirklich international' : 'Genuinely international', href: '/life/schools' },
                { icon: '🏥', label: lang === 'NL' ? 'Ziekenhuis · 15 min' : lang === 'TH' ? 'โรงพยาบาล · 15 นาที' : lang === 'DE' ? 'Krankenhaus · 15 Min.' : 'Hospital · 15 min', href: '/life/health' },
              ].map((item, i) => (
                <a key={i} href={item.href} className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-white/80 text-sm font-medium">{item.label}</p>
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
                <p className="text-white/80">{w}</p>
              </div>
            ))}
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
              { icon: '🏪', place: '7-Eleven', time: '4 min', highlight: true },
              { icon: '🛍️', place: 'Bluport Mall', time: '10 min', highlight: false },
              { icon: '🏖️', place: lang === 'NL' ? 'Strand' : lang === 'TH' ? 'หาด' : lang === 'DE' ? 'Strand' : 'Hua Hin Beach', time: '12 min', highlight: false },
              { icon: '🏙️', place: lang === 'NL' ? 'Centrum' : lang === 'TH' ? 'ใจกลางหัวหิน' : lang === 'DE' ? 'Stadtzentrum' : 'Town Centre', time: '17 min', highlight: false },
              { icon: '🏥', place: 'Bangkok Hospital', time: '15 min', highlight: false },
              { icon: '⛳', place: lang === 'NL' ? 'Golfbanen (3x)' : lang === 'TH' ? 'สนามกอล์ฟ' : lang === 'DE' ? 'Golfplätze' : 'Golf courses (3)', time: '20 min', highlight: false },
              { icon: '🌿', place: lang === 'NL' ? 'Nationaal Park' : lang === 'TH' ? 'อุทยานฯ' : lang === 'DE' ? 'Nationalpark' : 'National Park', time: lang === 'NL' ? 'Op de stoep' : lang === 'TH' ? 'หน้าบ้าน' : lang === 'DE' ? 'Vor der Tür' : 'Doorstep', highlight: true },
              { icon: '🏙️', place: 'Bangkok', time: '200 km · 2.5h', highlight: false },
              { icon: '🌴', place: 'Chumphon', time: '230 km · 3h', highlight: false },
            ].map((d, i) => (
              <div key={i} className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${d.highlight ? 'bg-blue-600/20 border-blue-500/40 hover:bg-blue-600/30' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                <span className="text-white/80 text-sm">{d.icon} {d.place}</span>
                <span className={`font-bold text-sm ${d.highlight ? 'text-blue-300' : 'text-blue-400'}`}>{d.time}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-display font-semibold text-white mb-8" style={{fontFamily: 'Playfair Display, serif'}}>Life around the plot</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="relative group overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300" style={{background: 'linear-gradient(135deg, rgba(6,78,59,0.4) 0%, rgba(5,46,22,0.6) 100%)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 0%, rgba(52,211,153,0.15) 0%, transparent 70%)'}} />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-xl">🌿</div>
                  <h4 className="text-white font-semibold text-base">Nature & parks</h4>
                </div>
                <ul className="space-y-2">
                  {['Thap Tai National Park — doorstep', 'Kaeng Krachan NP — 85 km', 'Khao Sam Roi Yot — 60 km', 'Kui Buri (wild elephants) — 85 km', 'Samnaksong Khao Phran Thup — nearby', 'Grand Canyon Hua Hin — 5 min'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/65 hover:text-white/90 transition-colors">
                      <span className="text-green-400 mt-0.5 flex-shrink-0">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-orange-500/20 hover:border-orange-400/50 transition-all duration-300" style={{background: 'linear-gradient(135deg, rgba(120,53,15,0.4) 0%, rgba(69,26,3,0.6) 100%)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 0%, rgba(251,146,60,0.15) 0%, transparent 70%)'}} />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-xl">🍽️</div>
                  <h4 className="text-white font-semibold text-base">Food & cafes</h4>
                </div>
                <ul className="space-y-2">
                  {['Parrotdise Organic Farm & Cafe ⭐4.8 — 5 min', 'Sweetheart Cafe ⭐4.6 — riverside', 'Greenfield Terrace ⭐4.6 — Thap Tai', 'Apsara Art & Restaurant ⭐4.9', 'White Orchid Restaurant & Bar', 'Hua Hin Night Market — 17 min'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/65 hover:text-white/90 transition-colors">
                      <span className="text-orange-400 mt-0.5 flex-shrink-0">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300" style={{background: 'linear-gradient(135deg, rgba(88,28,135,0.4) 0%, rgba(49,10,101,0.6) 100%)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 0%, rgba(167,139,250,0.15) 0%, transparent 70%)'}} />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl">🎵</div>
                  <h4 className="text-white font-semibold text-base">Entertainment</h4>
                </div>
                <ul className="space-y-2">
                  {['Baan Suang Music — live Thai music', 'Mini Golf World ⭐4.9 — glow in dark', 'Vana Nava Water Jungle — 10 min', 'Saam Phan Nam Floating Market — 5 min', 'Cicada Weekend Market', 'Jazz & live music — nightly'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/65 hover:text-white/90 transition-colors">
                      <span className="text-purple-400 mt-0.5 flex-shrink-0">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-teal-500/20 hover:border-teal-400/50 transition-all duration-300" style={{background: 'linear-gradient(135deg, rgba(19,78,74,0.4) 0%, rgba(8,51,68,0.6) 100%)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 0%, rgba(45,212,191,0.15) 0%, transparent 70%)'}} />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-xl">🧘</div>
                  <h4 className="text-white font-semibold text-base">Wellness & spas</h4>
                </div>
                <ul className="space-y-2">
                  {['Thai massage centres — Thap Tai', 'Chiva-Som Health Resort', 'Anantara Hua Hin Spa', 'Bangkok Hospital — 15 min', 'San Paolo Hospital — 17 min', 'Parrotdise Organic Farm — 5 min'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/65 hover:text-white/90 transition-colors">
                      <span className="text-teal-400 mt-0.5 flex-shrink-0">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300" style={{background: 'linear-gradient(135deg, rgba(30,58,138,0.4) 0%, rgba(15,23,92,0.6) 100%)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 0%, rgba(96,165,250,0.15) 0%, transparent 70%)'}} />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">🏫</div>
                  <h4 className="text-white font-semibold text-base">Schools & families</h4>
                </div>
                <ul className="space-y-2">
                  {["Beaconhouse Yamsaard Int'l School", 'The English Centre ⭐5.0', 'Sethavidhya Bilingual School', 'Multiple kindergartens — Thap Tai', 'Child-friendly, low-traffic area', 'Active expat family community'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/65 hover:text-white/90 transition-colors">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border border-slate-500/20 hover:border-slate-400/50 transition-all duration-300" style={{background: 'linear-gradient(135deg, rgba(51,65,85,0.5) 0%, rgba(15,23,42,0.7) 100%)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(circle at 50% 0%, rgba(148,163,184,0.12) 0%, transparent 70%)'}} />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-500/20 flex items-center justify-center text-xl">🔨</div>
                  <h4 className="text-white font-semibold text-base">Shopping & practical</h4>
                </div>
                <ul className="space-y-2">
                  {['Siwali Building Materials — Thap Tai', 'Makro Food Service — 15 min', 'Bluport Mall & Market Village — 10 min', '7-Eleven — 4 min from plot', "Lotus's supermarket — 15 min", 'Immigration office — 15 min'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/65 hover:text-white/90 transition-colors">
                      <span className="text-slate-400 mt-0.5 flex-shrink-0">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16 px-6 bg-[#07080f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-2 text-white" style={{fontFamily: 'Playfair Display, serif'}}>{c.mapTitle}</h2>
          <p className="text-white/40 text-sm mb-6">Thap Tai, Soi 112, Hua Hin, Prachuap Khiri Khan 77110</p>
          <div className="rounded-2xl overflow-hidden border border-blue-900/30" style={{height: '420px'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1000!2d99.9327!3d12.618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM3JzA0LjgiTiA5OcKwNTYnMDIuNyJF!5e1!3m2!1sen!2sth!4v1720000000000!5m2!1sen!2sth"
              width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Location" />
          </div>
          <div className="mt-4 flex gap-3">
            <a href="https://maps.app.goo.gl/LLQzxdx2oMeoatE1A" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/40 text-blue-300 px-5 py-2.5 rounded-xl text-sm transition-all">
              📍 Open in Google Maps
            </a>
            <a href="https://maps.app.goo.gl/LLQzxdx2oMeoatE1A" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/40 text-purple-300 px-5 py-2.5 rounded-xl text-sm transition-all">
              🧭 Get directions
            </a>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
            {/* Chanote thumbnail */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-3">Title deed document</p>
              <div
                className="w-48 cursor-pointer group relative overflow-hidden rounded-xl border border-blue-900/30 hover:border-blue-500/50 transition-all"
                onClick={() => setLightbox('/chanote.jpg')}
              >
                <img src="/chanote.jpg" alt="Chanote" className="w-full opacity-70 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-lg">View document</span>
                </div>
              </div>
              <p className="text-white/30 text-xs mt-2">Chanote NS.4J · Click to enlarge</p>
            </div>

            {/* Contact form */}
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
                  <div
                    className="cf-turnstile"
                    data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
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
                  <p className="text-white/40 text-xs text-center">Or WhatsApp directly: 080-140-6745</p>
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
              <span className="text-white/30 text-xs">080-140-6745</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-white/30 text-xs">
              <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="/disclaimer" className="hover:text-white/60 transition-colors">Disclaimer</a>
              <span>·</span>
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
