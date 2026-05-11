# Dr. Jiyeon Hwang — Website

A multi-page static website built for **GitHub Pages**, with **Decap CMS** for
non-technical content editing.

## Structure

```
/
├── index.html          Home
├── biography.html      Biography
├── performances.html   Calendar + past + repertoire
├── media.html          YouTube videos + audio
├── gallery.html        Photo gallery + Instagram feed
├── teaching.html       Faculty / studio
├── contact.html        Contact form + email
├── assets/             styles.css + site.js
├── content/            JSON files (editable in CMS)
│   ├── site.json
│   ├── home.json
│   ├── biography.json
│   ├── performances.json
│   ├── media.json
│   ├── gallery.json
│   └── teaching.json
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

## Deploy to GitHub Pages

1. Create a public GitHub repo, e.g. `jiyeon-hwang.github.io` (user site) or
   `jiyeon-site` (project site).
2. Push the contents of this folder to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment** → Source: **Deploy from a branch** → Branch: **main**, Folder: **/ (root)**. Save.
4. After 1–2 minutes the site is live at:
   - User site: `https://YOUR-USERNAME.github.io`
   - Project site: `https://YOUR-USERNAME.github.io/REPO-NAME`

> If you use a project site (not `username.github.io`), all internal links are
> already relative, so they'll work fine.

## Set up Decap CMS (the admin panel)

Decap CMS lets you edit content from a friendly form at `yourdomain.com/admin/`.
It commits changes back to GitHub, which triggers a Pages rebuild.

**GitHub Pages does not ship an OAuth login server**, so you need one of the
following to handle the GitHub sign-in. Pick the easiest:

### Option 1 (recommended) — Decap Bridge (free)

[decapbridge.com](https://decapbridge.com) provides hosted OAuth for free for
personal sites.

1. Sign up with GitHub at decapbridge.com.
2. Add your repo. It will give you values to paste into `admin/config.yml`.
3. In `admin/config.yml`, set:
   ```yaml
   backend:
     name: github
     repo: YOUR-USERNAME/YOUR-REPO
     branch: main
     base_url: https://decapbridge.com
     auth_endpoint: /auth
   ```
4. Commit. Visit `https://YOUR-SITE/admin/` and log in with GitHub.

### Option 2 — Self-host an OAuth proxy

Deploy [`netlify-cms-github-oauth-provider`](https://github.com/vencax/netlify-cms-github-oauth-provider) to Vercel or Render (free tier). Set its URL as `base_url` in `config.yml`.

### Option 3 — No-admin / direct edits

Skip the CMS entirely. Click any JSON file in the GitHub web UI → pencil icon →
edit → commit. The site rebuilds in ~1 minute.

## What can be edited without code?

Everything inside `content/*.json` and the `images/` folder:

| Page | File | What's editable |
|---|---|---|
| Home | `content/home.json` | Hero text, press quote, intro |
| Biography | `content/biography.json` | Full bio body, lede, quick facts |
| Performances | `content/performances.json` | Upcoming + past + repertoire (add/remove rows) |
| Media | `content/media.json` | YouTube IDs, titles, audio list |
| Gallery | `content/gallery.json` | Images, captions, tile size, IG handle |
| Teaching | `content/teaching.json` | Body, courses, studio info |
| Contact / Footer | `content/site.json` | Email, management note, social links |

Photos go in `/images/` — drop them in via the CMS's image picker, or upload
through the GitHub web UI.

## Customizing the design

- All colors and spacing live as CSS variables at the top of `assets/styles.css`
  (look for `:root { ... }`).
- The navigation lives in `assets/site.js` (the `NAV` array near the top).
- Fonts are loaded from Google Fonts — change the `<link>` tag at the top of
  each `*.html` to swap them.

## Contact form

The contact form on `contact.html` currently shows an alert on submit. To make
it actually send, hook it up to a free service like:

- **Formspree** — replace the form's `action` with your Formspree endpoint.
- **Web3Forms** — similar, free for static sites.
- Or use **mailto:** as a fallback.

## License

Code: do what you like. Content + images: © Dr. Jiyeon Hwang.
