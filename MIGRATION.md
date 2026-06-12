# WAARC — Next.js 15 Migration

Migration of the WAARC (Wisdom Academy & Research Center) site from
**React 18 + Vite 7 + Tailwind CSS 4 + React Router 7** to
**Next.js 15 (App Router) + TypeScript + Tailwind CSS 4**.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # run production build
```

`.env.local` is already populated (renamed from the old `VITE_*` vars):

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_h4wnvkf
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_z7axu1f
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=THuDwCOs3ZXP2ZnCF
NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID=template_j5x9h5d
```

> The build downloads the Inter font from Google Fonts via `next/font/google`
> at build time — this requires outbound internet access in CI/Vercel
> (works automatically on Vercel).

---

## Route Map (unchanged URLs)

| Old route                  | New file                                  |
|-----------------------------|--------------------------------------------|
| `/`                          | `app/page.tsx`                              |
| `/about`                     | `app/about/page.tsx`                        |
| `/services`                  | `app/services/page.tsx`                     |
| `/services/research`         | `app/services/research/page.tsx`            |
| `/services/study-advisory`   | `app/services/study-advisory/page.tsx`      |
| `/contact`                   | `app/contact/page.tsx`                      |
| `/journals`                  | `app/journals/page.tsx`                     |
| `/team`                       | `app/team/page.tsx`                         |
| `/gallery`                    | `app/gallery/page.tsx`                      |
| `/study/thailand`             | `app/study/thailand/page.tsx`               |
| `/career`                      | `app/career/page.tsx`                       |
| `/collaborate`                 | `app/collaborate/page.tsx`                  |
| `/schedule-consultation`       | `app/schedule-consultation/page.tsx`        |
| `*` (404)                       | `app/not-found.tsx`                          |

---

## What Changed

### Framework
- Vite config, `@vitejs/plugin-react`, `@tailwindcss/vite`, `index.html` removed.
- `react-router` / `react-router-dom` removed → file-based App Router routing.
- All `.jsx` converted to `.tsx`.
- `import.meta.env.VITE_*` → `process.env.NEXT_PUBLIC_*`.

### SEO
- `react-helmet-async` + custom `<SEO />` component removed.
- Replaced with the **Next.js Metadata API**:
  - Static pages use `export const metadata`.
  - Pages backed by the API (`/`, `/about`, `/team`) use `generateMetadata()`
    with `fetch(..., { next: { revalidate: 3600 } })`.
- Root layout (`app/layout.tsx`) carries the global `WebSite` + `Organization`
  JSON-LD structured data (moved from `SEO.jsx`).
- `metadataBase` set to `https://waarc.edu.np` so relative OG/Twitter image
  paths resolve correctly.
- `alternates.canonical` set per page, matching the original canonical URLs.

### Images
- All local `<img>` tags converted to `next/image` (`Image` component) with
  explicit `width`/`height` or `fill` + `sizes` for CLS protection.
- Static assets moved from `src/assets/images/` → `public/images/`.
- `next.config.ts` `images.remotePatterns` configured for:
  - `localhost:8080` (dev API)
  - `waarc.edu.np` (prod API/CDN)
  - `images.unsplash.com` (stock imagery used on About/Collaborate/StudyAdvisory)
  - `flagcdn.com` (country flags)
- Backend-driven images (home hero, About "Why Choose Us" image, team photos,
  gallery, journals) are full external URLs resolved at runtime — these are
  rendered via plain `<img>` only where the source domain can't be known
  ahead of time (gallery/journals), otherwise via `next/image` with `fill`.

### Fonts
- `@fontsource/inter` + local `/public/fonts/*.woff2` + manual `@font-face`
  removed.
- Replaced with `next/font/google` (`Inter`, weights 400/500/600/700,
  `display: swap`), exposed as the `--font-inter` CSS variable and consumed
  by `body` in `globals.css`.

### Server vs. Client Components
**Server Components (default, async data fetching with `fetch` + `revalidate`):**
- `app/page.tsx` (Home) — fetches `/getHome`
- `app/about/page.tsx` — fetches `/getAbout`
- `app/team/page.tsx` — fetches `/getTeam`
- `app/services/page.tsx`, `app/services/research/page.tsx`,
  `app/services/study-advisory/page.tsx`, `app/collaborate/page.tsx`,
  `app/career/page.tsx`, `app/study/thailand/page.tsx` — fully static content

**Client Components (`"use client"`, interactive/browser APIs):**
- `Navbar` — mobile menu state, outside-click handling, live site settings
- `Footer` — async links/socials fetch
- `HeroSection` — skeleton fallback while `homeData` loads
- `GlobalAlert` — `localStorage`-based dismiss logic
- `ScrollToTop` — scroll listeners, `usePathname`
- `EventRegistrationSection` — form state + registration POST
- `ConsultationCTA` — date picker, phone input, EmailJS booking
- `OurWorks` — Swiper + Framer Motion
- `Reveal` — Framer Motion scroll reveal
- `WhyChooseUs` — client-side `/getAbout` fetch for the "Why Choose Us" cards
- `app/contact/page.tsx` — EmailJS contact form
- `app/journals/page.tsx` — client fetch + blob download
- `app/gallery/page.tsx` — lightbox + client fetch
- `app/not-found.tsx` — `window.history.back()`

### Code Splitting
- `yet-another-react-lightbox` is loaded via `next/dynamic` with `ssr: false`
  in `app/gallery/page.tsx`.
- FullCalendar / ApexCharts / react-jvectormap are kept as dependencies for
  future use but are not currently rendered anywhere in the source project —
  no `dynamic()` wiring was needed since they aren't imported by any page.

### Content
- 100% of visible text, headings, descriptions, and business information
  preserved verbatim.
- The `sr-only` homepage `<h1>Wisdom Academy & Research Center</h1>` is kept
  for Google site-name detection; `HeroSection`'s heading was changed from
  `<h1>` to `<h2>` to avoid a duplicate-H1 (the page-level `<h1>` already
  exists in `app/page.tsx`).
- `About` page's `dangerouslySetInnerHTML` HTML-entity-decoding (previously
  done via a throwaway `<textarea>` DOM trick on the client) is now done with
  a pure server-side `decodeHtml()` helper.

---

## Performance / Core Web Vitals Checklist

- [x] `priority` on all above-the-fold / LCP images (hero, services grid first
      card, research/study-advisory/collaborate hero banners, about hero).
- [x] `loading="lazy"` (default) for below-the-fold images.
- [x] Explicit `width`/`height` or `fill` + `sizes` on every `<Image>` to
      prevent CLS.
- [x] `next/font` with `display: swap` for zero FOUT/layout shift from fonts.
- [x] Server Components + `fetch` with `revalidate` for all primarily-static,
      backend-driven pages (Home, About, Team) — removes client loading
      flashes and improves LCP/SEO.
- [x] Heavy client-only libraries (lightbox, Swiper, Framer Motion,
      day-picker, phone input) isolated to Client Components / `dynamic()`
      imports so they don't bloat the server bundle.
- [x] `next.config.ts` configured for AVIF/WebP image formats.
- [x] Footer/Navbar skeleton loaders preserved (prevents CLS while
      site-settings/links load).
- [x] Semantic HTML preserved: `<nav>`, `<main>`, `<section>`, `<footer>`,
      heading hierarchy.
- [x] ARIA labels preserved on icon-only buttons (social icons, scroll-to-top,
      mobile menu toggle).
- [x] `npx tsc --noEmit` — passes with zero errors.
- [x] `npx next lint` — zero warnings/errors.
- [x] `npm run build` — compiles and statically prerenders all 14 routes
      (✓ Generating static pages (16/16) including `/_not-found`).

## Notes / Follow-ups
- `react-flatpickr`, `react-time-picker`, `react-phone-input-2`,
  `@fullcalendar/*`, `react-apexcharts`, `@react-jvectormap/*`, and
  `react-dropzone` were kept in `package.json` per the original dependency
  list even though they're unused in the current page set — remove if/when
  confirmed dead.
- If the production API is served from a different hostname than
  `waarc.edu.np`, add that hostname to `images.remotePatterns` in
  `next.config.ts`.
- `public/_redirects` (Netlify) was not carried over since the project targets
  Vercel; add `redirects()` to `next.config.ts` if any URL changes are needed
  later.
