// Page titles and descriptions, shared by the app (browser tab title)
// and scripts/prerender.mjs (static HTML per route, for search engines and link previews).
import { CASES, CONSULTING, SITE, UI } from './content.js';

const LANGS = ['en', 'ar'];

function pagesFor(lang) {
  const name = UI.name[lang];
  const desc = SITE.description[lang];
  return [
    { path: `/${lang}`, title: name, description: desc },
    { path: `/${lang}/work`, title: `${UI.work_h[lang]} · ${name}`, description: UI.work_p[lang] },
    { path: `/${lang}/about`, title: `${UI.nav_about[lang]} · ${name}`, description: desc },
    { path: `/${lang}/consulting`, title: `${CONSULTING.h[lang]} · ${name}`, description: CONSULTING.lead[lang] },
    ...CASES.map((c) => ({
      path: `/${lang}/work/${c.slug}`,
      title: `${c.title[lang]} · ${name}`,
      description: c.sum[lang],
    })),
  ].map((p) => ({ ...p, lang }));
}

export const PAGES = LANGS.flatMap(pagesFor);

export function pageMeta(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/') return PAGES[0];
  return PAGES.find((p) => p.path === clean) || PAGES[0];
}
