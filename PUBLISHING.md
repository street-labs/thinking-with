# Publishing workflow

How writing gets from an author's draft to the live site. Two places, one rule:
**staging updates automatically, the live site only changes when Luke says go.**

| | URL | Updates when |
|---|---|---|
| **Staging** | https://ldstreet.github.io/thinking-with/ | Automatically, on every push to `main` |
| **Live** | The production domain (TBD) | Manually, on Luke's go-ahead |

## For authors (Nathaniel, Nate, John)

1. **Write wherever you like** - Google Docs, Word, whatever you already use.
2. **When a piece is ready for the site, drop it in the Buzz thread** - either attach
   the Word file (.docx) or just paste the text. Don't worry about formatting; that's
   handled for you.
3. **Check it on staging.** You'll get a link; read your piece as it will appear,
   catch typos or broken italics, and leave comments in the thread.
4. **Luke says "go" and it's live.** New pieces and edits always follow this same
   loop - there's no special process for updates.

## For the maintainer (converting a piece)

Per-piece checklist:

1. Create `src/content/writing/<slug>.md` (lowercase, hyphens, no dates in the name).
2. Copy the frontmatter from [`writing-template.md`](writing-template.md) and fill it in.
   Keep `draft: true` while it's in review.
3. Convert the body to clean Markdown. From .docx: headings stay headings, italics
   survive; watch for smart quotes, stray line breaks, and paste artifacts.
4. `npm run build` - must pass before pushing.
5. Commit and push to `main`. Staging rebuilds automatically in a minute or two.
6. Post the staging URL in the thread so the author can proof it.
7. Nothing else happens until Luke says go. Drafts never leave staging.

Drafts that shouldn't even appear on staging stay uncommitted, or live as
`draft: true` - the build excludes them entirely.

## Go-live (one command, repeatable)

The live site is a second repo, `thinking-with-live`, that contains only built
files. Going live means rebuilding and pushing to it - the same steps every time:

```bash
npm run build
# then, from the local clone of thinking-with-live:
rsync -a --delete --exclude '.git' ../thinking-with/dist/ ./
git add -A && git commit -m "Publish: <what changed>" && git push
```

Production never moves unless someone runs these steps deliberately.

### One-time setup (pending)

- [ ] Create the `thinking-with-live` repo (needs `gh` auth or Luke's click).
- [ ] Production domain: confirm the name, then attach it to the live repo
      (GitHub Pages custom domain) and set DNS records at the registrar.
- [ ] Staging repo settings: Pages > Source > **GitHub Actions** (the workflow
      `.github/workflows/deploy.yml` is already in place).
