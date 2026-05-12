# Dr. Jiyeon Hwang — Website

A multi-page static website built for **GitHub Pages**, with **Decap CMS** (via DecapBridge) for
non-technical content editing. Contact form is live via **Formspree**.

## Structure

```
/
├── index.html          Home (hero, recent news, upcoming performances, media teaser)
├── biography.html      Biography
├── performances.html   Calendar + past + repertoire
├── news.html           Full news listing (linked from home, not in nav)
├── media.html          YouTube videos + optional audio section
├── gallery.html        Photo gallery
├── teaching.html       Faculty / studio + masterclasses
├── students.html       Student achievements
├── contact.html        Contact form (Formspree) + social links
├── assets/             styles.css + site.js
├── content/            JSON files (editable in CMS or directly)
│   ├── site.json           Site name, tagline, Formspree endpoint, social links
│   ├── home.json           Hero text, recent news, press quote
│   ├── biography.json      Bio prose, quick facts
│   ├── performances.json   Upcoming + past performances, operatic repertoire
│   ├── media.json          YouTube IDs, audio tracks, show_audio toggle
│   ├── gallery.json        Photo events, Instagram handle
│   ├── teaching.json       Courses, masterclasses, studio info
│   └── students.json       Student achievement entries
├── images/             Photos (uploaded via CMS or GitHub)
└── admin/              Decap CMS admin panel
    ├── index.html
    └── config.yml
```

## Local preview

Because the pages fetch JSON from `content/`, you must serve over HTTP (file:// won't work):

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

Hard-refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) after editing files to bypass browser cache.

## Deploy to GitHub Pages

1. Push the contents of this folder to the `main` branch of `sopjiyeonhwang/sopjiyeonhwang.github.io`.
2. In the repo: **Settings → Pages → Build and deployment** → Source: **Deploy from a branch** → Branch: **main**, Folder: **/ (root)**. Save.
3. After 1–2 minutes the site is live at `https://sopjiyeonhwang.github.io`.

## Decap CMS (admin panel)

The admin panel at `/admin/` uses **DecapBridge PKCE auth** — no separate OAuth proxy needed.
The `admin/config.yml` already contains the live DecapBridge credentials.

To log in: visit `https://sopjiyeonhwang.github.io/admin/` and sign in with GitHub.

Changes saved in the CMS commit directly to `main`, triggering a GitHub Pages rebuild (~1 min).

**Every content field in every JSON file is mapped in the CMS** — no field requires manual file editing.

## What can be edited without code?

Everything inside `content/*.json` and the `images/` folder:

| Page | File | What's editable |
|---|---|---|
| Home | `content/home.json` | Hero text, title prefix (Dr.), press quote toggle, intro, recent news |
| News | `content/home.json` | `recent_news` list — date, headline, optional URL |
| Biography | `content/biography.json` | Full bio body (HTML/Markdown), lede, quick facts |
| Performances | `content/performances.json` | Upcoming + past performances, operatic repertoire |
| Media | `content/media.json` | YouTube IDs/titles, audio tracks, show/hide audio section |
| Gallery | `content/gallery.json` | Photo events, tile sizes, captions, Instagram handle |
| Teaching | `content/teaching.json` | Body, courses, masterclasses, studio info |
| Students | `content/students.json` | Student achievement entries |
| Site / Footer | `content/site.json` | Display name, tagline, Formspree endpoint, social links, management block |

Photos go in `/images/` — upload via the CMS image picker or the GitHub web UI.

## Contact form

The contact form on `contact.html` posts to **Formspree** (`https://formspree.io/f/xbdwwdja`).
The endpoint is stored in `content/site.json → contact_form_endpoint` and can be changed in the CMS
under **Site settings** without touching any code.

To change the receiving email, update the notification address in the Formspree dashboard.

## Customizing the design

- Colors and spacing: CSS variables at the top of `assets/styles.css` (`:root { ... }`).
- Navigation items: `NAV` array at the top of `assets/site.js`. (`news.html` is intentionally omitted — it is only reachable via the "View all news →" link on the home page.)
- Fonts: Google Fonts `<link>` tag at the top of each `*.html` file.
- Mobile breakpoint: 720 px — two-column grids stack to single column via `.stack-mobile` class.

## License

Code: do what you like. Content + images: © Dr. Jiyeon Hwang.
