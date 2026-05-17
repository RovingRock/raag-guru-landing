# Swara Slam Landing Page

Marketing page for [Swara Slam](https://swaraslam.raag.guru) — ear training for Indian Classical Music, built on Sa Re Ga Ma.

## Stack

- React 18 + Vite
- Tailwind CSS (custom Raag Guru theme)
- Deployed on Vercel

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the build locally
```

## Editing content

All copy lives in [`src/data/content.js`](src/data/content.js) — headlines, feature blocks, testimonials, footer. No need to touch components for routine edits.

## Replacing the device mockup placeholders

The hero and feature sections use stylised iPhone frames with placeholder screens in [`src/components/DeviceMockup.jsx`](src/components/DeviceMockup.jsx). Once real Swara Slam screenshots are ready, swap the inline `Screen*` components for `<img src="..." />` inside the same frame. The three variants used today are `gameplay`, `score`, and `levels`.

## Deploy

Push to GitHub, import into Vercel — no env vars needed. CNAME `swaraslam.raag.guru` → `cname.vercel-dns.com`.
