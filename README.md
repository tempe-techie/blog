# Tempe Techie's Blog (HTML5 + Tailwind)

This repository is a static blog site built with plain HTML5 and Tailwind (CDN), without any static site generator.

## Why `file://` does not work

This site intentionally uses root-based URLs such as:

- `/assets/img/blog-images/...`
- `/posts/my-post-slug/`

Those paths require an HTTP server. If you open `index.html` directly as a file (`file://...`), browser URL resolution will break links and images.

## Run locally

You do not strictly need npm to serve static files, but this project includes npm scripts for convenience.

### 1) Start local server

```bash
npm run dev
```

This serves the project at:

- `http://localhost:4173`

You can also run:

```bash
npm start
```

(`start` and `dev` use the same command.)

### Alternative without npm

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## What is included

- `index.html` - homepage with a card list of all blog posts.
- `posts/<slug>/index.html` - one HTML page per blog post (URL style: `/posts/<slug>/`).
- `assets/js/theme.js` - dark/light mode logic (dark mode is default).
- `assets/css/site.css` - shared typography and article styling.
- `assets/img/blog-images/` - preview/hero image for each post.
- `posts/*.md` - original markdown source files used to create the pages.

## URL structure

Each blog post must be inside its own folder with an `index.html` file:

- `/posts/accuracy-weighted-opinion-markets/`
- `/posts/economy-in-the-age-of-ai/`
- etc.

This is why each post page lives at:

- `posts/accuracy-weighted-opinion-markets/index.html`
- `posts/economy-in-the-age-of-ai/index.html`

## Metadata (SEO + social)

Every page includes:

- standard SEO meta tags (`title`, `description`, `canonical`, `robots`, `author`)
- Open Graph (`og:*`) tags for Facebook and other platforms
- Twitter card tags (`twitter:*`)

### Important domain setup

All canonical and social URLs currently use:

- `https://tempetechie.net`

Replace this with your real production domain before deployment.

## Design and theme

- Minimalist layout
- Dark mode as default
- Light mode toggle button in header
- Tailwind loaded via CDN (no build pipeline required)

## How to add a new post (manual, no static generator)

Use this same process each time you create a new markdown post.

1. **Create or update markdown source**
   - Add your post markdown file in `blog/`, e.g.:
   - `posts/my-new-post.md`

2. **Prepare cover image**
   - Add image to:
   - `assets/img/blog-images/my-new-post.jpg`
   - Keep file name equal to the post slug.

3. **Create post folder + page (ask AI to do it)**
   - Create:
   - `posts/my-new-post/index.html`
   - Copy structure from an existing post page (recommended). Or even better, ask AI to do it.

4. **Fill page content (ask AI to do it)**
   - Convert markdown text into HTML sections (`<h2>`, `<p>`, `<ul>`, etc.).
   - Keep the same page shell (header, back link, theme button, footer behavior).

5. **Update metadata in the new page (ask AI to do it)**
   - `<title>`
   - meta description
   - canonical URL
   - Open Graph fields (`og:title`, `og:description`, `og:url`, `og:image`)
   - Twitter card fields (`twitter:title`, `twitter:description`, `twitter:image`)
   - `article:published_time`

6. **Add card to homepage (ask AI to do it)**
   - Open `index.html`
   - Add a new post card in the list with:
     - title
     - publish date
     - short excerpt
     - image path
     - link to `/posts/my-new-post/`

7. **Check locally**
   - Start local server: `npm run dev`
   - Open `http://localhost:4173`
   - Verify:
     - post card appears
     - post page opens correctly
     - image path works
     - dark/light mode works
     - social metadata values are correct

## Notes

- No scripts are used to generate pages.
- New post pages are intended to be created manually (or with AI assistance) from markdown text each time.
