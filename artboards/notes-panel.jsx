// Project notes & CMS options panel
function NotesPanel() {
  const panelStyles = {
    wrap: {
      width: '100%', height: '100%',
      background: '#f5f1ea',
      padding: '64px 80px',
      fontFamily: "'Inter', sans-serif",
      color: '#1a1a1a',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
    },
    eyebrow: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11, letterSpacing: '0.22em',
      textTransform: 'uppercase', color: '#a07a3a',
      marginBottom: 18, fontWeight: 500,
    },
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 44, lineHeight: 1.05, fontWeight: 400,
      margin: '0 0 24px', letterSpacing: '-0.01em',
    },
    p: { fontSize: 14, lineHeight: 1.65, color: '#3a3530', margin: '0 0 14px' },
    h3: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11, letterSpacing: '0.22em',
      textTransform: 'uppercase', color: '#1a1a1a',
      margin: '32px 0 14px', fontWeight: 600,
    },
    rule: { border: 0, borderTop: '1px solid #a07a3a', margin: '0 0 28px', width: 48 },
    card: {
      background: '#fff', border: '1px solid #e6dfd2',
      padding: '20px 22px', marginBottom: 12,
    },
    cardTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 20, fontWeight: 500, margin: '0 0 6px',
    },
    cardMeta: { fontSize: 11, color: '#a07a3a', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 },
    cardBody: { fontSize: 13, lineHeight: 1.55, color: '#3a3530', margin: 0 },
    pillRow: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 },
    pill: {
      fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
      padding: '6px 10px', border: '1px solid #1a1a1a', color: '#1a1a1a',
    },
  };

  return (
    <div style={panelStyles.wrap}>
      <div>
        <div style={panelStyles.eyebrow}>Project brief</div>
        <h1 style={panelStyles.h1}>A site for Dr. Jiyeon Hwang — lyric coloratura, faculty, recitalist.</h1>
        <hr style={panelStyles.rule} />
        <p style={panelStyles.p}>
          Multi-page site for GitHub Pages. Home · Biography · Performances · Media · Gallery · Teaching · Contact.
          Aesthetic is classical &amp; elegant with a Helvetica-caps undertone: ivory ground, deep ink, restrained gold accents,
          generous white space, serif display type set against confident letter-spaced labels.
        </p>
        <p style={panelStyles.p}>
          All photography is placeholder for now &mdash; drop-in slots are marked so a non-technical editor can swap images
          without touching code.
        </p>

        <div style={panelStyles.pillRow}>
          <span style={panelStyles.pill}>Ivory · Ink · Gold</span>
          <span style={panelStyles.pill}>Cormorant Garamond</span>
          <span style={panelStyles.pill}>Inter Caps</span>
          <span style={panelStyles.pill}>Multi-page · Static</span>
        </div>
      </div>

      <div>
        <div style={panelStyles.eyebrow}>Non-technical editing — options</div>
        <div style={{ ...panelStyles.h1, fontSize: 28 }}>How you'll update content without writing code.</div>
        <hr style={panelStyles.rule} />

        <div style={panelStyles.card}>
          <div style={panelStyles.cardMeta}>Recommended · Free</div>
          <div style={panelStyles.cardTitle}>Decap CMS (formerly Netlify CMS)</div>
          <p style={panelStyles.cardBody}>
            A small admin panel that lives at <em>yoursite.com/admin</em>. Log in with GitHub, edit performances,
            bio paragraphs, gallery images in a form. Saves directly to the repo &mdash; GitHub Pages rebuilds. Works
            with static HTML/Markdown.
          </p>
        </div>

        <div style={panelStyles.card}>
          <div style={panelStyles.cardMeta}>Simplest · No tools</div>
          <div style={panelStyles.cardTitle}>Edit JSON files on github.com</div>
          <p style={panelStyles.cardBody}>
            Performances, recordings, gallery images live in small JSON files. Edit them directly in the GitHub web UI
            &mdash; click the pencil, change a field, commit. Site updates in ~1 minute.
          </p>
        </div>

        <div style={panelStyles.card}>
          <div style={panelStyles.cardMeta}>Polished · Paid</div>
          <div style={panelStyles.cardTitle}>CloudCannon / TinaCMS</div>
          <p style={panelStyles.cardBody}>
            Visual editing right on the page &mdash; click a paragraph, type, save. Best UX for non-technical editors.
            Small monthly cost.
          </p>
        </div>

        <p style={{ ...panelStyles.p, marginTop: 18, fontStyle: 'italic', color: '#6b6258' }}>
          Once you pick a direction, I'll wire one of these into the build so updates feel effortless.
        </p>
      </div>
    </div>
  );
}

window.NotesPanel = NotesPanel;
