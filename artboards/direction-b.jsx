// Direction B — Modern Minimal Asymmetric
// Pure ivory, sidebar nav, big letter-spaced Inter caps for the name treatment,
// monochrome with a single gold hairline. Editorial / gallery feel.

function DirectionB() {
  const bStyles = {
    page: {
      width: '100%', minHeight: '100%',
      background: '#f5f1ea',
      fontFamily: "'Inter', sans-serif",
      color: '#1a1a1a',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
    },

    side: {
      padding: '40px 32px',
      borderRight: '1px solid rgba(26,26,26,0.12)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 1800,
    },
    sideTop: {},
    monogram: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: 28, fontWeight: 500,
      marginBottom: 48,
    },
    nav: {
      display: 'flex', flexDirection: 'column', gap: 18,
      fontSize: 11, letterSpacing: '0.24em',
      textTransform: 'uppercase', fontWeight: 500,
    },
    navActive: { color: '#a07a3a', display: 'flex', alignItems: 'center', gap: 10 },
    navDot: { width: 18, height: 1, background: '#a07a3a' },
    sideBottom: { fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6b6258', lineHeight: 2 },

    main: { padding: '40px 64px 64px', overflow: 'hidden' },

    topMeta: {
      display: 'flex', justifyContent: 'space-between',
      fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
      paddingBottom: 28, borderBottom: '1px solid rgba(26,26,26,0.12)',
    },

    hero: {
      paddingTop: 64,
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 56,
      alignItems: 'end',
    },
    nameWrap: {},
    eyebrowGold: {
      fontSize: 11, letterSpacing: '0.32em',
      color: '#a07a3a',
      textTransform: 'uppercase', fontWeight: 500,
      marginBottom: 32,
    },
    nameTop: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 120, fontWeight: 300,
      lineHeight: 0.92,
      letterSpacing: '-0.04em',
      margin: 0,
    },
    nameBottom: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: 132, fontWeight: 400,
      lineHeight: 0.92,
      letterSpacing: '-0.03em',
      margin: '8px 0 0',
      color: '#1a1a1a',
    },
    descCol: {
      paddingBottom: 12,
    },
    desc: {
      fontSize: 15, lineHeight: 1.7, color: '#3a3530',
      margin: 0, maxWidth: 360,
    },
    tags: {
      marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8,
      fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
    },
    tag: { padding: '6px 12px', border: '1px solid #1a1a1a' },
    tagGold: { padding: '6px 12px', background: '#a07a3a', color: '#f5f1ea' },

    portrait: {
      marginTop: 64,
      width: '100%', height: 560,
      background: 'repeating-linear-gradient(45deg, #e6dfd2 0 2px, #ece6d8 2px 14px)',
      border: '1px solid #d4c9b2',
      position: 'relative',
    },
    portraitTag: {
      position: 'absolute', top: 24, left: 24,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10, letterSpacing: '0.18em',
      color: '#8a7958', background: '#f5f1ea',
      padding: '6px 12px', border: '1px solid #d4c9b2',
    },
    portraitNum: {
      position: 'absolute', bottom: 24, right: 24,
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic', fontSize: 28,
      background: '#f5f1ea', padding: '4px 14px',
    },

    twoCol: {
      marginTop: 80,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
    },
    colLabel: {
      fontSize: 11, letterSpacing: '0.32em', color: '#a07a3a',
      textTransform: 'uppercase', fontWeight: 500,
      marginBottom: 18,
      paddingBottom: 18, borderBottom: '1px solid #a07a3a',
    },
    colHeading: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 36, fontWeight: 400, lineHeight: 1.15,
      margin: '0 0 22px',
    },
    perfItem: {
      padding: '18px 0',
      borderBottom: '1px solid rgba(26,26,26,0.1)',
      display: 'grid',
      gridTemplateColumns: '64px 1fr auto',
      gap: 18,
      alignItems: 'baseline',
    },
    perfDate: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11, letterSpacing: '0.06em',
      color: '#1a1a1a',
    },
    perfTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 22, fontWeight: 500, fontStyle: 'italic',
    },
    perfMeta: { fontSize: 12, color: '#6b6258', marginTop: 4 },
    perfCity: {
      fontSize: 10, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: '#a07a3a',
    },
    repItem: {
      padding: '14px 0',
      borderBottom: '1px solid rgba(26,26,26,0.08)',
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    repRole: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic', fontSize: 20, fontWeight: 400,
    },
    repOpera: { fontSize: 12, color: '#6b6258', letterSpacing: '0.06em' },
  };

  const performances = [
    { date: 'MAR 14', title: "L'elisir d'amore", meta: 'Adina · Laredo Center for the Arts', city: 'TX' },
    { date: 'APR 22', title: 'Recital · Songs of Spring', meta: 'TAMIU CFPA', city: 'TX' },
    { date: 'JUN 08', title: 'Die Fledermaus', meta: 'Adele · Camerata New Jersey', city: 'NJ' },
    { date: 'SEP 19', title: 'Carnegie Recital', meta: 'Weill Recital Hall', city: 'NY' },
  ];

  const repertoire = [
    { role: 'Adina', opera: "L'elisir d'amore" },
    { role: 'Adele', opera: 'Die Fledermaus' },
    { role: 'Zerlina', opera: 'Don Giovanni' },
    { role: 'Susanna', opera: 'Le nozze di Figaro' },
    { role: 'Lisette', opera: 'La Rondine' },
    { role: 'Papagena', opera: 'Die Zauberflöte' },
    { role: 'Lakmé', opera: 'Lakmé' },
  ];

  return (
    <div className="ab" style={bStyles.page}>
      <aside style={bStyles.side}>
        <div style={bStyles.sideTop}>
          <div style={bStyles.monogram}>Jiyeon Hwang</div>
          <nav style={bStyles.nav}>
            <span style={bStyles.navActive}><span style={bStyles.navDot}></span>Index</span>
            <span>Biography</span>
            <span>Performances</span>
            <span>Media</span>
            <span>Gallery</span>
            <span>Teaching</span>
            <span>Contact</span>
          </nav>
        </div>
        <div style={bStyles.sideBottom}>
          Texas A&amp;M Intl.<br />
          Laredo, TX<br />
          @jiyeonhwang
        </div>
      </aside>

      <main style={bStyles.main}>
        <div style={bStyles.topMeta}>
          <span>2026 · Season</span>
          <span>EN · KR · IT</span>
        </div>

        <section style={bStyles.hero}>
          <div style={bStyles.nameWrap}>
            <div style={bStyles.eyebrowGold}>Lyric Coloratura Soprano</div>
            <div style={bStyles.nameTop}>JIYEON</div>
            <div style={bStyles.nameBottom}>Hwang</div>
          </div>
          <div style={bStyles.descCol}>
            <p style={bStyles.desc}>
              Recitalist, opera singer, and Assistant Professor of Voice &amp; Choir at Texas A&amp;M
              International University. Performances across the United States, Italy, the Czech Republic,
              and South Korea.
            </p>
            <div style={bStyles.tags}>
              <span style={bStyles.tagGold}>NATSAA Award</span>
              <span style={bStyles.tag}>Carnegie Debut</span>
              <span style={bStyles.tag}>D.M.A. Minnesota</span>
            </div>
          </div>
        </section>

        <div style={bStyles.portrait}>
          <div style={bStyles.portraitTag}>FIG. 01 — PORTRAIT</div>
          <div style={bStyles.portraitNum}>01 / 12</div>
        </div>

        <section style={bStyles.twoCol}>
          <div>
            <div style={bStyles.colLabel}>Upcoming · 2026</div>
            <h3 style={bStyles.colHeading}>Performances &amp; recitals.</h3>
            {performances.map((p, i) => (
              <div key={i} style={bStyles.perfItem}>
                <div style={bStyles.perfDate}>{p.date}</div>
                <div>
                  <div style={bStyles.perfTitle}>{p.title}</div>
                  <div style={bStyles.perfMeta}>{p.meta}</div>
                </div>
                <div style={bStyles.perfCity}>{p.city}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={bStyles.colLabel}>Selected · Repertoire</div>
            <h3 style={bStyles.colHeading}>Roles in voice.</h3>
            {repertoire.map((r, i) => (
              <div key={i} style={bStyles.repItem}>
                <div style={bStyles.repRole}>{r.role}</div>
                <div style={bStyles.repOpera}>{r.opera}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

window.DirectionB = DirectionB;
