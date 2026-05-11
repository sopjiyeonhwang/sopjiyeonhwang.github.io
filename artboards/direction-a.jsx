// Direction A — Classic Editorial
// Ivory ground, centered top nav, large italic serif name, gold rule lines,
// generous white space. Feels like a recital program cover.

function DirectionA() {
  const aStyles = {
    page: {
      width: '100%', minHeight: '100%',
      background: '#f5f1ea',
      fontFamily: "'Inter', sans-serif",
      color: '#1a1a1a',
    },
    topbar: {
      padding: '28px 64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(160,122,58,0.3)',
    },
    monogram: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: 22,
      letterSpacing: '0.02em',
    },
    nav: {
      display: 'flex', gap: 32,
      fontSize: 11, letterSpacing: '0.22em',
      textTransform: 'uppercase', fontWeight: 500,
    },
    cta: {
      fontSize: 11, letterSpacing: '0.22em',
      textTransform: 'uppercase', fontWeight: 500,
      padding: '10px 18px', border: '1px solid #1a1a1a',
    },

    hero: {
      padding: '88px 64px 64px',
      textAlign: 'center',
      position: 'relative',
    },
    eyebrow: {
      fontSize: 11, letterSpacing: '0.32em',
      textTransform: 'uppercase', color: '#a07a3a',
      marginBottom: 28, fontWeight: 500,
    },
    name: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 132, lineHeight: 0.95, fontWeight: 400,
      letterSpacing: '-0.02em',
      margin: '0 0 12px',
    },
    nameItalic: { fontStyle: 'italic' },
    rule: {
      border: 0, borderTop: '1px solid #a07a3a',
      width: 64, margin: '36px auto',
    },
    tagline: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: 24, fontWeight: 300,
      color: '#3a3530',
      maxWidth: 720, margin: '0 auto',
      lineHeight: 1.4,
    },

    portrait: {
      margin: '64px auto 0',
      width: 880, height: 540,
      background: 'repeating-linear-gradient(45deg, #e6dfd2 0 2px, #ece6d8 2px 14px)',
      border: '1px solid #d4c9b2',
      position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    portraitLabel: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11, letterSpacing: '0.1em',
      color: '#8a7958',
      background: '#f5f1ea',
      padding: '6px 12px',
      border: '1px solid #d4c9b2',
    },

    band: {
      marginTop: 96,
      padding: '64px 64px',
      background: '#fffbf3',
      borderTop: '1px solid rgba(160,122,58,0.3)',
      borderBottom: '1px solid rgba(160,122,58,0.3)',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 80,
      alignItems: 'start',
    },
    bandLabel: {
      fontSize: 11, letterSpacing: '0.32em',
      textTransform: 'uppercase', color: '#a07a3a',
      fontWeight: 500,
    },
    quote: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: 36, lineHeight: 1.3, fontWeight: 300,
      color: '#1a1a1a',
      margin: 0,
    },
    quoteAttr: {
      marginTop: 24,
      fontSize: 12, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: '#6b6258',
    },

    perfSection: {
      padding: '88px 64px 96px',
    },
    perfHeader: {
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'baseline', marginBottom: 48,
      paddingBottom: 24, borderBottom: '1px solid rgba(26,26,26,0.15)',
    },
    perfHeading: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 48, fontWeight: 400, margin: 0,
      letterSpacing: '-0.01em',
    },
    perfMore: {
      fontSize: 11, letterSpacing: '0.22em',
      textTransform: 'uppercase', fontWeight: 500,
    },
    perfRow: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr 1fr 120px',
      gap: 32,
      padding: '24px 0',
      borderBottom: '1px solid rgba(26,26,26,0.08)',
      alignItems: 'baseline',
    },
    perfDate: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 28, fontWeight: 400,
      fontStyle: 'italic',
    },
    perfTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 22, fontWeight: 500,
    },
    perfRole: { fontSize: 13, color: '#6b6258', marginTop: 4, fontStyle: 'italic' },
    perfVenue: { fontSize: 13, color: '#3a3530' },
    perfCity: { fontSize: 11, color: '#a07a3a', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 4 },
    perfTicket: {
      fontSize: 10, letterSpacing: '0.22em',
      textTransform: 'uppercase', textAlign: 'right',
      color: '#1a1a1a',
    },
  };

  const performances = [
    { date: 'Mar 14', year: '2026', title: "L'elisir d'amore", role: 'Adina', venue: 'Laredo Center for the Arts', city: 'Laredo, TX' },
    { date: 'Apr 22', year: '2026', title: 'Recital — Songs of Spring', role: 'with pianist James Park', venue: 'TAMIU Center for the Fine & Performing Arts', city: 'Laredo, TX' },
    { date: 'Jun 08', year: '2026', title: 'Die Fledermaus', role: 'Adele', venue: 'Camerata New Jersey', city: 'Princeton, NJ' },
    { date: 'Sep 19', year: '2026', title: 'Carnegie Recital', role: 'Lyric Coloratura Recital', venue: 'Weill Recital Hall', city: 'New York, NY' },
  ];

  return (
    <div className="ab" style={aStyles.page}>
      <div style={aStyles.topbar}>
        <div style={aStyles.monogram}>J<span style={{ color: '#a07a3a' }}>·</span>H</div>
        <nav style={aStyles.nav}>
          <span>Home</span>
          <span>Biography</span>
          <span>Performances</span>
          <span>Media</span>
          <span>Gallery</span>
          <span>Teaching</span>
        </nav>
        <div style={aStyles.cta}>Contact</div>
      </div>

      <section style={aStyles.hero}>
        <div style={aStyles.eyebrow}>Lyric Coloratura Soprano · Voice Faculty</div>
        <h1 style={aStyles.name}>
          Jiyeon <span style={aStyles.nameItalic}>Hwang</span>
        </h1>
        <hr style={aStyles.rule} />
        <p style={aStyles.tagline}>
          "A distinctive vocal range and a bright, sweet timbre" &mdash; carried from Carnegie's
          Weill Recital Hall to opera houses across four countries.
        </p>

        <div style={aStyles.portrait}>
          <div style={aStyles.portraitLabel}>HERO PORTRAIT · 880 × 540 · drop image here</div>
        </div>
      </section>

      <section style={aStyles.band}>
        <div style={aStyles.bandLabel}>From the press</div>
        <div>
          <p style={aStyles.quote}>
            "Hwang's coloratura sparkles with effortless agility &mdash; her Adina was the radiant
            center of the evening."
          </p>
          <div style={aStyles.quoteAttr}>— Opera Review, 2024</div>
        </div>
      </section>

      <section style={aStyles.perfSection}>
        <div style={aStyles.perfHeader}>
          <h2 style={aStyles.perfHeading}>Upcoming performances</h2>
          <div style={aStyles.perfMore}>View Calendar →</div>
        </div>
        {performances.map((p, i) => (
          <div key={i} style={aStyles.perfRow}>
            <div>
              <div style={aStyles.perfDate}>{p.date}</div>
              <div style={{ fontSize: 11, color: '#a07a3a', letterSpacing: '0.2em', marginTop: 4 }}>{p.year}</div>
            </div>
            <div>
              <div style={aStyles.perfTitle}>{p.title}</div>
              <div style={aStyles.perfRole}>{p.role}</div>
            </div>
            <div>
              <div style={aStyles.perfVenue}>{p.venue}</div>
              <div style={aStyles.perfCity}>{p.city}</div>
            </div>
            <div style={aStyles.perfTicket}>Tickets →</div>
          </div>
        ))}
      </section>
    </div>
  );
}

window.DirectionA = DirectionA;
