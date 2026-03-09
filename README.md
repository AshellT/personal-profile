# Personal Portfolio

A modern 3D developer portfolio built with React, TypeScript, Vite, Three.js, and Tailwind CSS.

## Features

- 3D interactive sections powered by `three.js` and `@react-three/fiber`
- Smooth animations and transitions with `framer-motion`
- Responsive layout for desktop and mobile
- Structured, component-based architecture
- Fast development/build pipeline using `vite`

## Tech Stack

- React + TypeScript
- Vite
- Three.js (`@react-three/fiber`, `@react-three/drei`)
- Tailwind CSS
- Framer Motion

## Project Structure

```text
src/
	assets/            # Images, icons, static UI assets
	components/
		atoms/           # Small reusable UI pieces
		canvas/          # 3D canvas components (Earth, Stars, etc.)
		layout/          # Navbar, loader, shared layout blocks
		sections/        # Page sections (Hero, About, Tech, Works, Contact)
	constants/         # App config, style tokens, static data
	hoc/               # Higher-order wrappers
	types/             # Shared TypeScript types
	utils/             # Utility functions (motion helpers, etc.)
	App.tsx
	main.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the app at:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally

## Build for Production

```bash
npm run build
```

The output is generated in the `dist/` folder.

## Deployment

You can deploy this project to:

- Vercel
- Netlify
- GitHub Pages (with additional Vite base path setup)

General deployment flow:

1. Push to GitHub
2. Import repository into your hosting platform
3. Set build command to `npm run build`
4. Set publish/output directory to `dist`

## Contact Form (React + Resend)

This project now sends contact requests through a secure server endpoint using Resend.

### How it works

1. User submits the contact form from the website.
2. Frontend sends a `POST` request to `/api/request-website`.
3. Server route uses Resend to send the email to your inbox.

### Receiver inbox

Incoming requests are sent to the email configured in `CONTACT_RECEIVER_EMAIL`.

### Environment variables

Copy `.env.example` and set values in your deployment platform:

- `RESEND_API_KEY` (required)
- `CONTACT_RECEIVER_EMAIL` (required)
- `RESEND_FROM_EMAIL` (optional but recommended)
- `RESEND_EMAIL_LOGO_URL` (optional, used as email header logo)

### Files involved

- Frontend form: `src/components/sections/Contact.tsx`
- API route: `api/request-website.js`

## Author

Ashell Gonese

## License

This project is licensed under the MIT License. See `LICENSE` for details.
