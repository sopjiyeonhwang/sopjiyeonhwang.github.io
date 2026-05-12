# Dr. Jiyeon Hwang — Website

A multi-page static website built for **GitHub Pages**, with **Decap CMS** (via DecapBridge) for
non-technical content editing.

## Structure

```
/
├── index.html          Home (hero, recent news, upcoming performances, media teaser)
├── biography.html      Biography
├── performances.html   Calendar + past + repertoire
├── news.html           Full news listing (linked from home, not in nav)
├── media.html          YouTube videos + audio
├── gallery.html        Photo gallery + Instagram feed
├── teaching.html       Faculty / studio
├── students.html       Student achievements
├── contact.html        Contact form + email
├── assets/             styles.css + site.js
├── content/            JSON files (editable in CMS)
│   ├── site.json
│   ├── home.json
│   ├── biography.json
│   ├── performances.json
│   ├── media.json
│   ├── gallery.json
│   ├── teaching.json
│   └── students.json
├── images/             Photos (uploaded via CMS)
└── admin/              Decap CMS admin panel
    ├── index.html
    └── config.yml
```

## Local preview

Because the pages fetch JSON from `content/`, you must serve the folder over
HTTP (file:// won't work). Easiest:

```bash
# in the project folder:
python3 -m http.server 8080
# then visit http://localhost:8080
```

Hard-refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) after editing files to bypass browser cache.

## Deploy to GitHub Pages

1. Create a public GitHub repo named `sopjiyeonhwang.github.io`.
2. Push the contents of this folder to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment** → Source: **Deploy from a branch** → Branch: **main**, Folder: **/ (root)**. Save.
4. After 1–2 minutes the site is live at `https://sopjiyeonhwang.github.io`.

## Decap CMS (admin panel)

The admin panel at `/admin/` is configured to use **DecapBridge PKCE auth** — no separate OAuth proxy needed. The `admin/config.yml` already contains the live credentials.

To log in: visit `https://sopjiyeonhwang.github.io/admin/` and sign in with GitHub.

Changes saved in the CMS commit directly to `main`, triggering a GitHub Pages rebuild (~1 min).

## What can be edited without code?

Everything inside `content/*.json` and the `images/` folder:

| Page | File | What's editable |
|---|---|---|
| Home | `content/home.json` | Hero text (incl. `Dr.` title), press quote, intro, recent news |
| News | `content/home.json` | `recent_news` list — date, headline, optional URL |
| Biography | `content/biography.json` | Full bio body, lede, quick facts |
| Performances | `content/performances.json` | Upcoming + past + repertoire (add/remove rows) |
| Media | `content/media.json` | YouTube IDs, titles, audio list |
| Gallery | `content/gallery.json` | Images, captions, tile size, Instagram handle |
| Teaching | `content/teaching.json` | Body, courses, studio info |
| Students | `content/students.json` | Student achievement entries |
| Contact / Footer | `content/site.json` | Display name, tagline, social links, management note |

Photos go in `/images/` — upload via the CMS image picker or the GitHub web UI.

## Customizing the design

- Colors and spacing: CSS variables at the top of `assets/styles.css` (`:root { ... }`).
- Navigation items: `NAV` array at the top of `assets/site.js`. (`news.html` is intentionally omitted from the nav — it is only reachable via the "View all news →" link on the home page.)
- Fonts: Google Fonts `<link>` tag at the top of each `*.html` file.
- Gallery tile density: controlled by `grid-template-columns` in `.gallery-grid` in `styles.css` (currently 16 columns, gap 8px).

## Contact form

The contact form on `contact.html` posts to a configurable endpoint. Set `contact_form_endpoint` in `content/site.json` to a [Formspree](https://formspree.io) URL to enable live sending.

## License

Code: do what you like. Content + images: © Dr. Jiyeon Hwang.
