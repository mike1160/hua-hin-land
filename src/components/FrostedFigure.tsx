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
      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
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
      <figcaption className="text-white/40 text-xs mt-2">{caption}</figcaption>
    </figure>
  )
}
