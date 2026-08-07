# Ashell Tinotenda Gonese — Personal Portfolio

Editorial-light personal site for **Ashell Tinotenda Gonese**, Full-Stack Systems Engineer and founder of [ATG Digital Agency](https://www.atgdigitalagency.co.zw/).

**Live:** [ashelltinotenda.co.zw](https://ashelltinotenda.co.zw/)

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- Framer Motion
- React Router
- Resend (contact API)
- PWA via `vite-plugin-pwa`

## Features

- Typographic hero and sectioned portfolio (projects, experience, credentials, proof, contact)
- Open Graph share card (`public/og/og-card.jpg`)
- Installable PWA with white app icons
- Privacy / Terms pages and custom 404
- Contact form → serverless Resend emails (`api/request-website.js`)

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env` (local) and set the same vars in your host (e.g. Vercel):

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes (contact) | Resend API key |
| `CONTACT_RECEIVER_EMAIL` | Yes (contact) | Inbox for submissions |
| `RESEND_FROM_EMAIL` | Recommended | Verified sender, e.g. `Ashell Gonese <hello@yourdomain.com>` |
| `RESEND_EMAIL_LOGO_URL` | Optional | Logo in email headers |
| `VITE_GA_MEASUREMENT_ID` | Optional | Google Analytics (`G-XXXXXXXX`) |

> Production tip: verify a domain in Resend and stop using `onboarding@resend.dev` before inviting real clients.

## Project structure

```text
api/                 # Serverless contact handler (Vercel)
public/
  about/             # Portrait
  brand/             # ATG marks
  og/                # Open Graph card
  portfolio/         # Project imagery
  pwa/               # App icons
src/
  components/        # Layout, sections, pages, atoms
  constants/         # Copy, projects, credentials, brand
  hoc/               # Section wrappers
```

## Deploy (Vercel)

1. Connect the repo and set the env vars above.
2. Framework: Vite — build `npm run build`, output `dist`.
3. `vercel.json` rewrites SPA routes and adds basic security headers.
4. After deploy, refresh the OG cache:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Search & analytics

1. Add the site in [Google Search Console](https://search.google.com/search-console) and submit `https://ashelltinotenda.co.zw/sitemap.xml`.
2. Optional: set `VITE_GA_MEASUREMENT_ID` in Vercel for traffic insights.
3. After deploys that change the OG image, refresh caches in Facebook Sharing Debugger and LinkedIn Post Inspector.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run ts:check` | TypeScript only |

