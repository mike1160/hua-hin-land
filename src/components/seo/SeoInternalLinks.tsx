import { Link } from '@/i18n/navigation'

export type InternalLink = { label: string; href: string }

type Props = {
  links: InternalLink[]
}

export default function SeoInternalLinks({ links }: Props) {
  return (
    <section className="bg-white border-t border-[#E8E2D6] py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.href + link.label}>
              <Link href={link.href} className="text-[#C8973A] hover:text-[#d4a84f] text-sm font-medium transition-colors">
                {link.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
