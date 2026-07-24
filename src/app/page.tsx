import {redirect} from 'next/navigation'

/** `/` → `/en` (middleware also does this; this is a safety net). */
export default function RootPage() {
  redirect('/en')
}
