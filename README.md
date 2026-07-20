# Lydie Lebron Sanchez M. | Consultante internationale

Portfolio + services one-page site (FR / ES / EN) for an international consultant based in France: diplomacy, cooperation, training, migration and consular services, real estate, microfinance, fundraising, events, languages and wellbeing.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v3, Playfair Display + Inter
- framer-motion (reveal animations)
- Scroll-rotating 3D circular gallery for the services section

## Scripts

```bash
npm run dev       # local dev server
npm run build     # type-check + production build (dist/)
npm run preview   # serve dist/ on port 4173
```

## Deploy (GitHub Pages)

```bash
npm run build
npx gh-pages -d dist
```

## Notes

- All copy lives in `src/i18n.tsx` (FR default, ES, EN).
- Contact email in `src/config.ts` is a placeholder until the real address is provided.
