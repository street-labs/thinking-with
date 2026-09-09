# Thinking With… — website

A static site for *Thinking With… A Rhetorical Theory Podcast*: a home for the seasons, a
place to publish writing, and a way to stay in touch with the audience.

Built with [Astro](https://astro.build). No database, no server — it builds to plain HTML/CSS
and deploys anywhere (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # serve the built site locally
```

## How it’s organized

- `src/data/podcast.ts` — **the main content file.** Show details, listen links, host bios,
  the six seasons (title, thinker, blurb, accent color, cover), and the series (NBA, Deep Cuts).
- `src/data/episodes.json` — episodes pulled from the existing public RSS feed
  (`anchor.fm/s/4d44a168/podcast/rss`), grouped by season. Audio plays straight from the feed,
  so **nothing about your podcast hosting or subscribers changes.**
- `src/content/writing/*.md` — articles. Add a Markdown file with the frontmatter shown in the
  existing posts to publish an essay. Set `draft: true` to keep it unpublished.
- `PUBLISHING.md` — **the writing workflow for authors and maintainers:** how a piece goes
  from a shared doc to staging to the live site, and the go-live steps.
- `src/pages/` — the routes (home, podcasts, seasons, series, writing, about, contact).
- `src/components/`, `src/layouts/`, `src/styles/global.css` — UI and the design system
  (palette, type) — edit `global.css` `:root` tokens to retune colors/fonts globally.
- `public/covers/` — season cover art.

## Things to finish (marked in code)

- **Email list** (`src/pages/contact.astro`): connect the signup form to your provider
  (Buttondown, Mailchimp, ConvertKit, or a Netlify form). Until then it falls back to email.
- **NBA** and **Deep Cuts with Sircy** (`src/data/podcast.ts`): placeholder descriptions —
  confirm what these are and what content belongs there.
- **Writing**: two seed essays (Rhetorical Theory of Language, Critique) are `draft: true`
  placeholders — paste the real text from the working docs.
- **Season 6 — Being and Time**: shows as “in production”; episodes appear automatically once
  they’re in the feed (or add a cover to `public/covers/season-6.*` and reference it).
- Set the production domain in `astro.config.mjs` (`site:`).

## Refreshing episodes

When new episodes publish to the existing feed, regenerate `src/data/episodes.json` from the
live RSS (see `scraper/` in the repo root, or wire a small build step). This keeps the site in
sync without touching your podcast host.
