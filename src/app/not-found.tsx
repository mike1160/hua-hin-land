import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <p className="text-[#C8973A] text-sm uppercase tracking-widest mb-3">404</p>
        <h1 className="text-3xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          Page not found
        </h1>
        <p className="text-[#5C5247] text-sm mb-6">The page you requested does not exist.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white rounded-[12px]"
          style={{ background: '#C8973A' }}
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
