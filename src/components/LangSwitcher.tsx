'use client'

import LanguageSwitcher from './LanguageSwitcher'

/** Fixed language switcher for subpages (replaces old pill switcher). */
export default function LangSwitcher() {
  return (
    <div className="fixed top-4 right-4 z-40">
      <LanguageSwitcher />
    </div>
  )
}
