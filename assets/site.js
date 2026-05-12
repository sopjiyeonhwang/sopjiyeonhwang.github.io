// Shared site scripts: nav rendering, mobile menu, content loaders.
// Designed to work over file:// during dev (via embedded JSON) and from the
// repo root on GitHub Pages.

(function () {
  const NAV = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'biography.html', label: 'Biography', key: 'biography' },
    { href: 'performances.html', label: 'Performances', key: 'performances' },
    { href: 'media.html', label: 'Media', key: 'media' },
    { href: 'gallery.html', label: 'Gallery', key: 'gallery' },
    { href: 'teaching.html', label: 'Teaching', key: 'teaching' },
    { href: 'students.html', label: 'Students', key: 'students' },
  ];

  // ----- header -----
  function renderHeader(currentKey) {
    const host = document.querySelector('[data-site-header]');
    if (!host) return;
    host.innerHTML = `
      <header class="topbar">
        <a class="monogram" href="index.html" aria-label="Home">J<span class="dot">·</span>H</a>
        <button class="menu-toggle" aria-expanded="false">Menu</button>
        <nav>
          ${NAV.map(n => `<a href="${n.href}" class="${n.key === currentKey ? 'active' : ''}">${n.label}</a>`).join('')}
        </nav>
        <a class="cta" href="contact.html">Contact</a>
      </header>
    `;
    const btn = host.querySelector('.menu-toggle');
    const nav = host.querySelector('nav');
    btn?.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  // ----- footer -----
  function renderFooter(site) {
    const host = document.querySelector('[data-site-footer]');
    if (!host) return;
    const social = (site?.social || []).map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`).join('');
    const year = new Date().getFullYear();
    host.innerHTML = `
      <footer class="site-foot">
        <div class="inner">
          <div>
            <div class="brand-name">${site?.name || 'Dr. Jiyeon Hwang'}</div>
            <p class="brand-tag">${(site?.tagline || 'Lyric Coloratura Soprano · Assistant Professor of Voice & Choir at Texas A&M International University.').replace(/\n/g, '<br>')}</p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}<li><a href="contact.html">Contact</a></li></ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="contact.html">Send a message →</a></li>
              ${site?.show_management && site?.management ? `<li>${site.management}</li>` : ''}
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>${social || '<li>Instagram</li><li>YouTube</li>'}</ul>
          </div>
        </div>
        <div class="copy">
          <span>© ${year} ${site?.name || 'Jiyeon Hwang'}. All rights reserved.</span>
          <span>Site by hand · Hosted on GitHub Pages</span>
        </div>
      </footer>
    `;
  }

  // ----- JSON loader with graceful fallback -----
  async function loadJSON(path) {
    try {
      const res = await fetch(path, { cache: 'no-cache' });
      if (!res.ok) throw new Error(res.statusText);
      return await res.json();
    } catch (e) {
      console.warn('[site] could not fetch', path, '— check that you are serving over http (not file://). Falling back to embedded defaults.');
      return null;
    }
  }

  // ----- formatters -----
  function fmtDate(iso) {
    const d = new Date(iso);
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
  }
  function fmtYear(iso) {
    const d = new Date(iso);
    if (isNaN(d)) return '';
    return String(d.getFullYear());
  }

  window.Site = {
    NAV,
    renderHeader,
    renderFooter,
    loadJSON,
    fmtDate,
    fmtYear,
  };

  // auto-render header/footer; pages set data-page="key" on <body>
  document.addEventListener('DOMContentLoaded', async () => {
    const key = document.body.dataset.page;
    renderHeader(key);
    const site = await loadJSON('content/site.json');
    renderFooter(site || {});
  });
})();
