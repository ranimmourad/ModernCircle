# Modern Circle

A pure Next.js 14 (App Router) frontend for **Modern Circle**, a coffee shop and concept store in El Mourouj, Tunisia.

## Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (custom beige / espresso palette)
- Framer Motion (subtle fade-in-up on scroll)
- lucide-react (icons)
- React Context API (cart state, persisted to localStorage)

## Routes
- `/` — Coffee Shop (Hero, About, Menu, Reviews, Contact)
- `/boutique` — Concept Store (search, category filter, product grid)
- `/cart` — Cart & checkout summary
- `/admin-login` — Placeholder ("Login Coming Soon")
- `/employee-login` — Placeholder ("Login Coming Soon")

## Data
All menu items and products are local TypeScript mock data in `lib/`:
- `lib/menuData.ts`
- `lib/productsData.ts`

Images use `https://picsum.photos/seed/moderncircle{n}/...` placeholders — swap with real photos later.

## Local development
```bash
npm install
npm run dev
```

## Deploy
Ready to deploy on Vercel — no extra configuration needed (no `vercel.json`, no custom output dir).
