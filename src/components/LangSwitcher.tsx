'use client'

import { langs, type Lang } from '../lib/site-lang'

export default function LangSwitcher({ lang, onSelect }: { lang: Lang; onSelect: (lang: Lang) => void }) {
  return (
    <div className="fixed top-4 right-4 z-40 flex gap-1 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
      {langs.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onSelect(l)}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${lang === l ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'text-white/50 hover:text-white'}`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
