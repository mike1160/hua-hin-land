export default function Bluport() {
  return (
    <main className="min-h-screen bg-[#07080f] text-white">
      <div className="relative h-72 flex items-end pb-10 px-6">
        <div className="absolute inset-0">
          <img src="/photo3.jpg" alt="aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(7,8,15,0.2) 0%, rgba(7,8,15,0.85) 70%, #07080f 100%)'}} />
        </div>
        <div className="relative z-10 max-w-3xl">
          <a href="/" className="text-blue-400 text-xs mb-4 inline-block hover:text-blue-300">← Back to listing</a>
          <h1 className="text-4xl md:text-5xl font-bold mt-2" style={{fontFamily: 'Playfair Display, serif'}}>Bluport Mall — 10 minutes.</h1>
          <p className="text-white/60 mt-2">Hua Hin&apos;s premier shopping and lifestyle destination</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🛍️ What&apos;s inside Bluport</h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">Bluport Hua Hin Resort Mall is the most modern shopping centre in the region — opened in 2016 with international brands, restaurants, a cinema, supermarket and entertainment facilities. It&apos;s where Hua Hin residents do their serious shopping.</p>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>• <strong className="text-white">Tops Market</strong> — full international supermarket with imported goods</li>
            <li>• <strong className="text-white">Bluport Cineplex</strong> — modern cinema with English language films</li>
            <li>• <strong className="text-white">International restaurants</strong> — Japanese, Italian, Thai, fast food</li>
            <li>• <strong className="text-white">Fashion & lifestyle</strong> — Thai and international brands</li>
            <li>• <strong className="text-white">Electronics</strong> — phones, computers, accessories</li>
            <li>• <strong className="text-white">Let&apos;s Relax Spa</strong> — premium spa inside the mall</li>
            <li>• <strong className="text-white">Banking & services</strong> — multiple bank branches</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/20 border border-purple-900/30 rounded-2xl p-6">
          <h2 className="text-white text-xl font-semibold mb-4">🏪 Market Village — just next door</h2>
          <p className="text-white/70 text-sm leading-relaxed">Adjacent to Bluport is Market Village — an older mall with more everyday stores, a large Tesco Lotus supermarket, hardware shops, phone repair, and dozens of local restaurants. Together, these two malls cover virtually every shopping need.</p>
        </div>
        <div className="text-center pt-4"><a href="/" className="text-blue-400 hover:text-blue-300 text-sm">← Back to the land listing</a></div>
      </div>
    </main>
  )
}
