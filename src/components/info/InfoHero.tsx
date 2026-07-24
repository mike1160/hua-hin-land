type InfoHeroProps = {
  image: string
  imageAlt: string
  imagePosition?: string
  eyebrow?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
}

export default function InfoHero({
  image,
  imageAlt,
  imagePosition = 'center 40%',
  eyebrow,
  title,
  subtitle,
}: InfoHeroProps) {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-end">
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" style={{ objectPosition: imagePosition }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.35) 50%, transparent 100%)',
          }}
        />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16 md:pb-24 pt-28">
        {eyebrow ? (
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.25em] font-medium mb-4">{eyebrow}</p>
        ) : null}
        <h1
          className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="text-white/85 text-base md:text-xl leading-relaxed mt-6 max-w-2xl">{subtitle}</p>
        ) : null}
      </div>
    </section>
  )
}
