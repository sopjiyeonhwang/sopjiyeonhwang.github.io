// Direction C — Cinematic / Stage
// Dark deep ink ground, full-bleed hero with overlay type, italic serif name,
// gold thin rules. Theater poster, recital program feel.

function DirectionC() {
  const cStyles = {
    page: {
      width: '100%', minHeight: '100%',
      background: '#14110d',
      fontFamily: "'Inter', sans-serif",
      color: '#e8dfd0',
    },

    topbar: {
      position: 'absolute', top: 0, left: 0, right: 0,
      padding: '32px 64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      zIndex: 5,
    },
    monogram: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: 24,
      color: '#e8dfd0',
    },
    nav: {
      display: 'flex', gap: 32,
      fontSize: 10, letterSpacing: '0.28em',
      textTransform: 'uppercase', fontWeight: 500,
      color: '#e8dfd0',
    },
    cta: {
      fontSize: 10, letterSpacing: '0.28em',
      textTransform: 'uppercase', fontWeight: 500,
      padding: '10px 18px',
      border: '1px solid #a07a3a', color: '#e8dfd0',
    },

    hero: {
      position: 'relative',
      height: 1000,
      background: `
        radial-gradient(ellipse at 30% 40%, rgba(160,122,58,0.15) 0%, transparent 60%),
        repeating-linear-gradient(45deg, #1f1a13 0 2px, #1a1610 2px 14px)
      `,
      borderBottom: '1px solid rgba(160,122,58,0.4)',
      overflow: 'hidden',
    },
    heroLabel: {
      position: 'absolute', top: 120, left: 64,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11, letterSpacing: '0.18em',
      color: 'rgba(232,223,208,0.5)',
      padding: '6px 12px',
      border: '1px solid rgba(160,122,58,0.4)',
      background: 'rgba(20,17,13,0.6)',
    },

    heroInner: {
      position: 'absolute',
      bottom: 80, left: 64, right: 64,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'end',
    },
    eyebrow: {
      fontSize: 11, letterSpacing: '0.36em',
      textTransform: 'uppercase', color: '#c8a560',
      marginBottom: 28, fontWeight: 500,
    },
    name: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 156, fontWeight: 300,
      lineHeight: 0.9,
      letterSpacing: '-0.02em',
      margin: 0,
      color: '#f0e6d2',
    },
    nameItalic: { fontStyle: 'italic', display: 'block', color: '#c8a560' },
    underrule: { borderTop: '1px solid #a07a3a', width: 80, marginTop: 28 },

    rightCol: { paddingBottom: 12 },
    pullquote: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: 26, lineHeight: 1.4, fontWeight: 300,
      color: '#e8dfd0',
      margin: 0,
    },
    quoteAttr: {
      marginTop: 22,
      fontSize: 10, letterSpacing: '0.28em',
      textTransform: 'uppercase', color: '#c8a560',
    },

    posterBand: {
      padding: '72px 64px',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      gap: 48,
      borderBottom: '1px solid rgba(160,122,58,0.4)',
      alignItems: 'center',
    },
    bandLabel: {
      fontSize: 10, letterSpacing: '0.32em',
      textTransform: 'uppercase', color: '#c8a560',
      fontWeight: 500,
    },
    posterTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 56, fontWeight: 400, fontStyle: 'italic',
      textAlign: 'center', lineHeight: 1.05,
      color: '#f0e6d2',
      margin: 0,
    },
    posterMeta: {
      fontSize: 11, letterSpacing: '0.2em',
      textAlign: 'right',
      color: '#e8dfd0',
      textTransform: 'uppercase',
      lineHeight: 2,
    },

    perfBand: {
      padding: '88px 64px',
    },
    perfHeader: {
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      paddingBottom: 24, borderBottom: '1px solid rgba(160,122,58,0.4)',
      marginBottom: 32,
    },
    perfH: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 44, fontStyle: 'italic', fontWeight: 400,
      color: '#f0e6d2', margin: 0,
    },
    perfMore: {
      fontSize: 11, letterSpacing: '0.28em',
      textTransform: 'uppercase', color: '#c8a560',
    },
    perfGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0,
      borderTop: '1px solid rgba(160,122,58,0.2)',
    },
    perfCell: {
      padding: '28px 32px 28px 0',
      borderBottom: '1px solid rgba(160,122,58,0.2)',
      borderRight: '1px solid rgba(160,122,58,0.2)',
    },
    perfCellLast: {
      padding: '28px 0 28px 32px',
      borderBottom: '1px solid rgba(160,122,58,0.2)',
    },
    perfDateLine: {
      display: 'flex', justifyContent: 'space-between',
      fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase',
      color: '#c8a560', marginBottom: 14,
    },
    perfTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: 30, fontWeight: 400,
      color: '#f0e6d2',
      margin: '0 0 6px',
    },
    perfRole: { fontSize: 13, color: '#a89c84' },
  };

  const performances = [
    { date: '14 Mar 2026', city: 'Laredo, TX', title: "L'elisir d'amore", role: 'Adina · Laredo Center for the Arts' },
    { date: '22 Apr 2026', city: 'Laredo, TX', title: 'Songs of Spring', role: 'Recital · TAMIU CFPA' },
    { date: '08 Jun 2026', city: 'Princeton, NJ', title: 'Die Fledermaus', role: 'Adele · Camerata New Jersey' },
    { date: '19 Sep 2026', city: 'New York, NY', title: 'Carnegie Recital', role: 'Weill Recital Hall' },
  ];

  return (
    <div className="ab" style={cStyles.page}>
      <div style={cStyles.topbar}>
        <div style={cStyles.monogram}>Jiyeon Hwang</div>
        <nav style={cStyles.nav}>
          <span>Home</span>
          <span>Biography</span>
          <span>Performances</span>
          <span>Media</span>
          <span>Gallery</span>
          <span>Teaching</span>
        </nav>
        <div style={cStyles.cta}>Contact</div>
      </div>

      <section style={cStyles.hero}>
        <div style={cStyles.heroLabel}>HERO · FULL-BLEED PORTRAIT · drop image here</div>

        <div style={cStyles.heroInner}>
          <div>
            <div style={cStyles.eyebrow}>Lyric Coloratura · Soprano</div>
            <h1 style={cStyles.name}>
              Jiyeon
              <span style={cStyles.nameItalic}>Hwang</span>
            </h1>
            <div style={cStyles.underrule}></div>
          </div>
          <div style={cStyles.rightCol}>
            <p style={cStyles.pullquote}>
              From Carnegie's Weill Recital Hall to the operatic stages of Italy and Korea &mdash;
              a voice known for its bright, sweet timbre and effortless coloratura.
            </p>
            <div style={cStyles.quoteAttr}>— 2026 Season</div>
          </div>
        </div>
      </section>

      <section style={cStyles.posterBand}>
        <div>
          <div style={cStyles.bandLabel}>Now featuring</div>
          <div style={{ marginTop: 8, fontSize: 11, color: '#a89c84', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Donizetti · One night only
          </div>
        </div>
        <h2 style={cStyles.posterTitle}>L'elisir<br/>d'amore</h2>
        <div style={cStyles.posterMeta}>
          14 March 2026<br />
          Adina<br />
          Laredo, TX
        </div>
      </section>

      <section style={cStyles.perfBand}>
        <div style={cStyles.perfHeader}>
          <h2 style={cStyles.perfH}>Season calendar</h2>
          <div style={cStyles.perfMore}>All performances →</div>
        </div>
        <div style={cStyles.perfGrid}>
          {performances.map((p, i) => (
            <div key={i} style={i % 2 === 0 ? cStyles.perfCell : cStyles.perfCellLast}>
              <div style={cStyles.perfDateLine}>
                <span>{p.date}</span>
                <span>{p.city}</span>
              </div>
              <h3 style={cStyles.perfTitle}>{p.title}</h3>
              <div style={cStyles.perfRole}>{p.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

window.DirectionC = DirectionC;
