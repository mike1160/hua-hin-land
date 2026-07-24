type InfoPhotoCtaProps = {
  image?: string
  imagePosition?: string
  imageAlt?: string
  label?: string
  title: string
  body?: string
  lineLabel: string
  lineHref: string
  children?: React.ReactNode
}

export default function InfoPhotoCta({
  image = '/photo4.jpg',
  imagePosition = 'center 50%',
  imageAlt,
  label,
  title,
  body,
  lineLabel,
  lineHref,
  children,
}: InfoPhotoCtaProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt ?? title} className="w-full h-full object-cover" style={{ objectPosition: imagePosition }} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.65) 100%)' }}
        />
      </div>
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 text-center">
        {label ? (
          <p className="text-[#C8973A] text-xs uppercase tracking-[0.2em] font-medium mb-4">{label}</p>
        ) : null}
        <h2
          className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
        >
          {title}
        </h2>
        {body ? <p className="text-white/75 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">{body}</p> : null}
        <a
          href={lineHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-[12px] text-base font-semibold text-[#1A2744] transition-all hover:brightness-110"
          style={{ background: '#C8973A' }}
        >
          {lineLabel}
        </a>
        {children ? <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm">{children}</div> : null}
      </div>
    </section>
  )
}
