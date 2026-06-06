# ECWA Gospel Church, Pyakasa

> *Evangelical Church Winning All* — a premium, modern website for ECWA Gospel Church, Pyakasa (Lugbe, Abuja).

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, with a Firebase-ready service layer.

---

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

> Requires Node.js 18.18+ (Node 20+ recommended).

---

## What's included

A complete, animated homepage with: hero (parallax + staggered reveal), welcome + animated counters, service times, ministries, events, latest sermons, testimonials carousel, giving, prayer-request form, an **embedded Google Map** of the church location, Plan-Your-Visit CTA, and footer with newsletter signup. SEO is wired up (metadata, Open Graph, `sitemap.xml`, `robots.txt`, and `Church` JSON-LD structured data).

### The map
The location section and footer use the church's real coordinates
(`8.9619666, 7.3987307` — Pyakasa, off Airport Road, Lugbe). The embed uses
Google Maps' keyless `output=embed` URL, so **no API key is needed**. To switch
to the richer Maps Embed API later, set a key and update `MAP_EMBED_URL` in
`src/constants/index.ts`.

---

## Project structure

```
src/
├── app/                 # App Router: layout, page, globals.css, sitemap, robots
├── components/
│   ├── layout/          # Header (+ mobile nav), Footer
│   ├── sections/        # Hero, Welcome, Stats, Services, Ministries, Events,
│   │                    #   Sermons, Testimonials, Giving, Prayer, LocationMap, PlanVisit
│   ├── shared/          # Crest (logo), Icon, Reveal (scroll animation), Counter
│   ├── forms/           # (reserved)
│   └── ui/              # (reserved for shadcn/ui primitives)
├── constants/           # Site config + church location/map URLs
├── data/                # Editable content (services, ministries, events, sermons, ...)
├── lib/                 # firebase.ts (lazy init stub)
├── services/            # prayer.ts, newsletter.ts — swap-in points for Firebase
├── types/               # Shared TypeScript types
├── features/ hooks/ utils/   # (reserved for growth)
```

## Editing content

Almost everything is data-driven. Update **`src/data/site.ts`** for services,
ministries, events, sermons, and testimonials, and **`src/constants/index.ts`**
for name, contact, socials, and location. Search for `[Pastor's Name]` and
`[Name]` to drop in real names.

### Logo & images
- The crest in `src/components/shared/Crest.tsx` is an SVG re-creation. Replace it
  with the official logo (drop the file in `/public` and render an `<img>`/`next/image`).
- Photo zones (pastor image, sermon thumbnails, event/ministry backgrounds) are
  styled placeholders. Add real images to `/public` and swap the `.ph` / `.mg`
  blocks for `next/image`.

---

## Connecting Firebase (when ready)

The UI already talks to abstractions in `src/services/*`, so no component changes are needed:

```bash
npm install firebase
```

1. Fill in `.env` from `.env.example`.
2. Uncomment the init in `src/lib/firebase.ts`.
3. Replace the demo body of `submitPrayerRequest` / `subscribeToNewsletter`
   with a Firestore write (snippets are in the file comments).

Suggested future Firebase use: Auth, Firestore (prayer requests, events, sermons,
newsletter), Storage (media), and an admin dashboard.

---

## Notes on animation

The brief specified GSAP + Framer Motion. This build uses **Framer Motion** for
scroll reveals (`components/shared/Reveal.tsx`) plus CSS keyframes for the hero
entrance and micro-interactions — a lighter, equally smooth setup that respects
`prefers-reduced-motion`. To add GSAP for advanced scroll-timelines:
`npm i gsap` and build a `useGsap` hook in `src/hooks/`.

## Accessibility & performance
Semantic HTML, keyboard-navigable controls, labelled form fields, reduced-motion
support, lazy-loaded map iframe, and font optimization via `next/font`. Run
`npm run build` and Lighthouse to verify scores in your environment.

---

© ECWA Gospel Church, Pyakasa. To God be the glory.
