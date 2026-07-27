'use client'

import BreadcrumbNav from '@/components/BreadcrumbNav'

type BackButtonProps = {
  className?: string
}

/** @deprecated Use BreadcrumbNav. Kept as a thin wrapper for compatibility. */
export default function BackButton({ className = '' }: BackButtonProps) {
  return <BreadcrumbNav className={className} />
}
