import Image from 'next/image'

type FrostedFigureProps = {
  src: string
  alt: string
  caption: string
  objectPosition?: string
  priority?: boolean
  frosted?: boolean
}

export default function FrostedFigure({
  src,
  alt,
  caption,
  objectPosition = 'center',
  priority = false,
  frosted = true,
}: FrostedFigureProps) {
  return (
    <figure>
      <div
        className="relative aspect-video overflow-hidden"
        style={{ border: '1px solid #E8E2D6', borderRadius: '12px' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          style={{ objectPosition }}
          sizes="(max-width: 768px) 100vw, 768px"
        />
        {frosted && (
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" aria-hidden="true" />
        )}
      </div>
      <figcaption className="text-[#5C5247] text-xs mt-2">{caption}</figcaption>
    </figure>
  )
}
