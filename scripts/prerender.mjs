// Runs after `vite build`. Writes one static HTML shell per route so that
// deep links work on GitHub Pages and each page has its own title, description,
// language and link-preview tags. Routes come from src/content.js automatically.
import fs from 'node:fs';
import path from 'node:path';
import { PAGES } from '../src/meta.js';
import { SITE } from '../src/content.js';

const dist = path.resolve('dist');
const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const other = (p) => (p.lang === 'en' ? p.path.replace(/^\/en/, '/ar') : p.path.replace(/^\/ar/, '/en'));

function render(p) {
  const url = SITE.url + p.path;
  const alt = SITE.url + other(p);
  const meta = [
    `<meta name="description" content="${esc(p.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="${p.lang}" href="${url}" />`,
    `<link rel="alternate" hreflang="${p.lang === 'en' ? 'ar' : 'en'}" href="${alt}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(p.title)}" />`,
    `<meta property="og:description" content="${esc(p.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${p.lang === 'ar' ? 'ar_EG' : 'en_US'}" />`,
    `<meta name="twitter:card" content="summary" />`,
  ].join('\n    ');
  return shell
    .replace('<html lang="en" dir="ltr">', `<html lang="${p.lang}" dir="${p.lang === 'ar' ? 'rtl' : 'ltr'}">`)
    .replace(/<title>.*?<\/title>/, `<title>${esc(p.title)}</title>`)
    .replace('<!--META-->', meta);
}

function write(rel, html) {
  const file = path.join(dist, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

for (const p of PAGES) write(`${p.path.slice(1)}/index.html`, render(p));
const home = render(PAGES[0]);
write('index.html', home);
write('404.html', home); // unknown URLs load the app, which redirects to /en
// Old top-level links (/work, /about, /consulting) load the app, which redirects to /en/...
for (const p of ['work', 'about', 'consulting']) write(`${p}/index.html`, home);

write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((p) => `  <url><loc>${SITE.url}${p.path}</loc></url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log(`prerender: ${PAGES.length} pages + index, 404, sitemap, robots`);
