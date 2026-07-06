# Hua Hin Land — Next.js Website

One-page property listing website in 4 languages (EN/TH/NL/DE).

## Setup in Cursor

1. Open deze map in Cursor
2. Open de terminal in Cursor en run:

```bash
npm install
npm run dev
```

3. Ga naar http://localhost:3000 — de site draait lokaal

## Deploy op Vercel

### Optie A — via Vercel CLI (makkelijkst)
```bash
npm install -g vercel
vercel
```
Volg de stappen, kies "Next.js" als framework. Klaar — je krijgt een live URL.

### Optie B — via GitHub
1. Maak een nieuwe GitHub repo aan
2. Push deze map daarheen:
```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/JOUWUSERNAME/hua-hin-land.git
git push -u origin main
```
3. Ga naar vercel.com → "New Project" → koppel je GitHub repo → Deploy

## Foto's toevoegen
Zet je foto's in de `/public` map en gebruik ze in page.tsx:
```tsx
<img src="/jouw-foto.jpg" alt="Land plot" />
```

## Aanpassingen
- Tekst aanpassen: `src/app/page.tsx` — zoek in het `content` object
- Kleuren: `tailwind.config.ts`
- Telefoonnummer: zoek op `66801406745` in page.tsx en vervang

## Structuur
```
src/
  app/
    page.tsx      ← alle content + layout
    layout.tsx    ← metadata / SEO
    globals.css   ← fonts + basis stijlen
```
