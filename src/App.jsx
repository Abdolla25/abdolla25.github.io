import { Fragment, useEffect, useRef } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import * as C from './content.js';
import { pageMeta } from './meta.js';

const t = (lang) => (o) => o[lang];
const arrow = (lang) => (lang === 'ar' ? '←' : '→');

function ExtLink({ href, className, children }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
}

function Layout({ lang, rel, active, children }) {
  const tr = t(lang);
  const other = lang === 'en' ? 'ar' : 'en';
  const nav = [
    ['work', '/work', C.UI.nav_work],
    ['about', '/about', C.UI.nav_about],
    ['consulting', '/consulting', C.UI.nav_consulting],
  ];
  return (
    <div className="az" dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
      <header className="azh">
        <div className="az-w">
          <Link className="az-brand" to={`/${lang}`}>
            <div className="az-logo">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M12 3v8" stroke="#04110e" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M6.2 6.5a8 8 0 1 0 11.6 0" fill="none" stroke="#04110e" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="az-n">{tr(C.UI.name)}</span>
          </Link>
          <nav>
            {nav.map(([key, path, label]) => (
              <Link key={key} className={active === key ? 'az-on' : ''} to={`/${lang}${path}`}>
                {tr(label)}
              </Link>
            ))}
            <Link className="az-lang" to={`/${other}${rel}`}>
              {tr(C.UI.lang_label)}
            </Link>
          </nav>
        </div>
      </header>
      <main className="azm">{children}</main>
      <footer className="azf">
        <div className="az-w">
          <span>
            {tr(C.UI.name)} · {tr(C.UI.footer)}
          </span>
          <span>
            <ExtLink href={C.SITE.linkedin}>LinkedIn</ExtLink> · <ExtLink href={C.SITE.github}>GitHub</ExtLink>
          </span>
        </div>
      </footer>
    </div>
  );
}

function CaseCard({ c, lang }) {
  const tr = t(lang);
  return (
    <Link className="az-case" to={`/${lang}/work/${c.slug}`}>
      <div className="az-chips">
        <span className="az-chip">{tr(c.tag)}</span>
        <span className="az-chip az-o">{tr(c.org)}</span>
      </div>
      <h3>{tr(c.title)}</h3>
      <p>{tr(c.sum)}</p>
      <span className="az-more">
        {tr(C.UI.read)} {arrow(lang)}
      </span>
    </Link>
  );
}

function ContactBand({ lang }) {
  const tr = t(lang);
  return (
    <div className="az-band">
      <h2>{tr(C.UI.band_h)}</h2>
      <p>{tr(C.UI.band_p)}</p>
      <ExtLink className="az-btn az-p" href={C.SITE.linkedin}>
        {tr(C.UI.cta1)}
      </ExtLink>
    </div>
  );
}

function Timeline({ lang }) {
  const tr = t(lang);
  return (
    <div className="az-tl">
      {C.EXPERIENCE.map((e, i) => (
        <div className="az-it" key={i}>
          <div className="az-d">{tr(e.when)}</div>
          <h3>{tr(e.title)}</h3>
          <div className="az-o">{tr(e.org)}</div>
          <p>{tr(e.text)}</p>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="az-skills">
      {C.SKILLS.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  );
}

function Home({ lang }) {
  const tr = t(lang);
  const featured = C.FEATURED.map((slug) => C.CASES.find((c) => c.slug === slug)).filter(Boolean);
  return (
    <Layout lang={lang} rel="" active="">
      <div className="az-w">
        <div className="az-hero">
          <span className="az-eyebrow">{tr(C.UI.eyebrow)}</span>
          <h1>{tr(C.UI.h1)}</h1>
          <p className="az-sub">{tr(C.UI.sub)}</p>
          <div className="az-btns">
            <ExtLink className="az-btn az-p" href={C.SITE.linkedin}>
              {tr(C.UI.cta1)}
            </ExtLink>
            <Link className="az-btn" to={`/${lang}/work`}>
              {tr(C.UI.cta2)}
            </Link>
          </div>
        </div>
        <div className="az-stats">
          {C.STATS.map((s, i) => (
            <div className="az-stat" key={i}>
              <b>{s.value}</b>
              <span>{tr(s.label)}</span>
            </div>
          ))}
        </div>
        <section>
          <h2>{tr(C.UI.do_h)}</h2>
          <div className="az-three">
            {C.WHAT_I_DO.map((d, i) => (
              <div className="az-card" key={i}>
                <h3>{tr(d.title)}</h3>
                <p>{tr(d.text)}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2>{tr(C.UI.sel_h)}</h2>
          <div className="az-grid">
            {featured.map((c) => (
              <CaseCard key={c.slug} c={c} lang={lang} />
            ))}
          </div>
          <p style={{ marginTop: 22 }}>
            <Link to={`/${lang}/work`}>
              {tr(C.UI.all_work)} {arrow(lang)}
            </Link>
          </p>
        </section>
        <section>
          <h2>{tr(C.UI.exp_h)}</h2>
          <Timeline lang={lang} />
        </section>
        <section>
          <h2>{tr(C.UI.skills_h)}</h2>
          <Skills />
        </section>
        <ContactBand lang={lang} />
      </div>
    </Layout>
  );
}

function Work({ lang }) {
  const tr = t(lang);
  return (
    <Layout lang={lang} rel="/work" active="work">
      <div className="az-w">
        <div className="az-phead">
          <h1>{tr(C.UI.work_h)}</h1>
          <p className="az-sub">{tr(C.UI.work_p)}</p>
        </div>
        <div className="az-grid" style={{ marginTop: 36 }}>
          {C.CASES.map((c) => (
            <CaseCard key={c.slug} c={c} lang={lang} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function CaseStudy({ lang, c }) {
  const tr = t(lang);
  return (
    <Layout lang={lang} rel={`/work/${c.slug}`} active="work">
      <div className="az-w">
        <div className="az-phead">
          <Link className="az-crumb" to={`/${lang}/work`}>
            {lang === 'ar' ? '→' : '←'} {tr(C.UI.back)}
          </Link>
          <div className="az-chips">
            <span className="az-chip">{tr(c.tag)}</span>
            <span className="az-chip az-o">{tr(c.org)}</span>
          </div>
          <h1>{tr(c.title)}</h1>
          <p className="az-sub">{tr(c.sum)}</p>
        </div>
        <div className="az-cs">
          <article>
            {c.body.map((s, i) => (
              <Fragment key={i}>
                <h2>{tr(s.heading)}</h2>
                <p>{tr(s.text)}</p>
              </Fragment>
            ))}
          </article>
          <aside className="az-glance">
            <dl>
              <dt>{tr(C.UI.g_ctx)}</dt>
              <dd>
                {tr(c.org)} · {tr(c.tag)}
              </dd>
              <dt>{tr(C.UI.g_role)}</dt>
              <dd>{tr(c.role)}</dd>
              <dt>{tr(C.UI.g_result)}</dt>
              <dd>{tr(c.result)}</dd>
              <dt>{tr(C.UI.g_stack)}</dt>
              <dd style={{ direction: 'ltr', textAlign: 'start' }}>{c.stack}</dd>
            </dl>
          </aside>
        </div>
        <ContactBand lang={lang} />
      </div>
    </Layout>
  );
}

function About({ lang }) {
  const tr = t(lang);
  return (
    <Layout lang={lang} rel="/about" active="about">
      <div className="az-w">
        <div className="az-phead">
          <h1>{tr(C.UI.nav_about)}</h1>
        </div>
        <div className="az-prose">
          {C.ABOUT.map((p, i) => (
            <p key={i}>{tr(p)}</p>
          ))}
        </div>
        <section>
          <h2>{tr(C.UI.exp_h)}</h2>
          <Timeline lang={lang} />
        </section>
        <section>
          <div className="az-two">
            <div className="az-card">
              <h3>{tr(C.EDUCATION.degree)}</h3>
              <p>{tr(C.EDUCATION.school)}</p>
            </div>
            <div className="az-card">
              <h3>{tr(C.LANGUAGES.title)}</h3>
              <p>{tr(C.LANGUAGES.text)}</p>
            </div>
          </div>
        </section>
        <section>
          <h2>{tr(C.UI.skills_h)}</h2>
          <Skills />
        </section>
        <ContactBand lang={lang} />
      </div>
    </Layout>
  );
}

function Consulting({ lang }) {
  const tr = t(lang);
  const k = C.CONSULTING;
  return (
    <Layout lang={lang} rel="/consulting" active="consulting">
      <div className="az-w">
        <div className="az-phead">
          <h1>{tr(k.h)}</h1>
          <p className="az-sub">{tr(k.lead)}</p>
        </div>
        <section style={{ paddingTop: 36 }}>
          <h2>{tr(k.help_h)}</h2>
          <div className="az-list">
            {k.items.map((it, i) => (
              <div className="az-card" key={i}>
                <h3>{tr(it.title)}</h3>
                <p>{tr(it.text)}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2>{tr(k.start_h)}</h2>
          <p style={{ color: 'var(--mut)', maxWidth: '36em', margin: '0 0 22px' }}>{tr(k.start_p)}</p>
          <ExtLink className="az-btn az-p" href={C.SITE.linkedin}>
            {tr(C.UI.cta1)}
          </ExtLink>
        </section>
      </div>
    </Layout>
  );
}

// Keeps <title>, <html lang/dir> and scroll position right on client-side navigation.
function RouteEffects() {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    const m = pageMeta(pathname);
    document.title = m.title;
    document.documentElement.lang = m.lang;
    document.documentElement.dir = m.lang === 'ar' ? 'rtl' : 'ltr';
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<Home lang="en" />} />
        {['en', 'ar'].flatMap((lang) => [
          <Route key={`${lang}h`} path={`/${lang}`} element={<Home lang={lang} />} />,
          <Route key={`${lang}w`} path={`/${lang}/work`} element={<Work lang={lang} />} />,
          <Route key={`${lang}a`} path={`/${lang}/about`} element={<About lang={lang} />} />,
          <Route key={`${lang}c`} path={`/${lang}/consulting`} element={<Consulting lang={lang} />} />,
          ...C.CASES.map((c) => (
            <Route key={`${lang}${c.slug}`} path={`/${lang}/work/${c.slug}`} element={<CaseStudy lang={lang} c={c} />} />
          )),
        ])}
        {['work', 'about', 'consulting'].map((p) => (
          <Route key={p} path={`/${p}`} element={<Navigate to={`/en/${p}`} replace />} />
        ))}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </>
  );
}
