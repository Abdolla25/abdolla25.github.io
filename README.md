# abdolla25.github.io

Personal site of Abdulla Zahran: case studies, experience, consulting. English and Arabic.

Live: https://abdolla25.github.io

## Edit the text

All text is in **`src/content.js`**. Every string is `{ en: "...", ar: "..." }`.

| Change | Where in `src/content.js` |
|---|---|
| Hero, nav, buttons, footer | `UI` |
| Numbers under the hero | `STATS` |
| Jobs timeline | `EXPERIENCE` (newest first) |
| Tool chips | `SKILLS` |
| About page paragraphs | `ABOUT` |
| Consulting page | `CONSULTING` |
| Case studies | `CASES` |
| Case studies shown on the home page | `FEATURED` (list of slugs) |
| LinkedIn / GitHub links | `SITE` |

**Add a case study:** copy one block in `CASES`, give it a new `slug`, fill in `en` and `ar`.
The build creates `/en/work/<slug>` and `/ar/work/<slug>` on its own. Add the slug to `FEATURED` to show it on the home page.

## Publish

Push to `master`. GitHub Actions builds and deploys in about 1–2 minutes (Actions tab shows progress).

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # output in dist/
npm run preview   # serve dist/
```

## Layout

```
src/content.js        all text (edit this)
src/App.jsx           pages and components
src/meta.js           page titles/descriptions (built from content.js)
src/styles.css        styles; colors are the --variables in the .az block
src/fonts/            self-hosted Inter + IBM Plex Sans Arabic (no Google Fonts calls)
scripts/prerender.mjs one HTML file per route + sitemap.xml + robots.txt
```

No analytics, no cookies, no third-party requests. Fonts are self-hosted.
