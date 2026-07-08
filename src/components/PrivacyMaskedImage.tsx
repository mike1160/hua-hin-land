type PrivacyMaskedImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  objectPosition?: string
  maskWidth?: string
}

export default function PrivacyMaskedImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  objectPosition = 'center',
  maskWidth = '22%',
}: PrivacyMaskedImageProps) {
  const bleedWidth = `${Math.round(100 / (parseFloat(maskWidth) / 100))}%`

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
        style={{ objectPosition }}
      />
      <div
        className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none"
        style={{ width: maskWidth }}
        aria-hidden="true"
      >
        <img
          src={src}
          alt=""
          className="absolute top-0 right-0 h-full max-w-none blur-2xl scale-110"
          style={{
            width: bleedWidth,
            objectFit: 'cover',
            objectPosition: 'right center',
          }}
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
      </div>
    </div>
  )
}
