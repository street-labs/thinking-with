<!--
Template for every new post in src/content/writing/.
Copy the frontmatter below to the top of the new .md file, fill in the fields,
then paste the essay body underneath. Delete nothing from the --- lines.
-->

---
title: 'Post Title Here'
description: One or two sentences describing the piece. Shows under the title and in link previews.
date: 2025-01-15
author: Author Name Here
series: 'Series Name'
tags: ['essays']
draft: true
---

Body of the piece starts here.

Use Markdown:

## Section headings

Regular paragraphs, with *italics* and **bold**.

> Blockquotes for pull-quotes or cited passages.

- Bullet lists
- 1. Numbered lists

Footnotes like this:[^1]

[^1]: Footnote text goes at the bottom.

---

<!--
Field reference:

title        REQUIRED. Shown at the top of the post and in listings. Use single quotes if it contains a colon.
description  REQUIRED. One or two sentences; used on the writing index and in link previews.
date         REQUIRED. The publish date, format YYYY-MM-DD. Sets the ordering on the index.
author       REQUIRED. Usually the writer's name; use "Thinking With…" for house notes.
series       Optional. Groups posts together (e.g. "Critique", "Rhetorical Theory of Language"). Omit the line for standalone pieces.
tags         Optional. Free-form, in brackets, comma-separated (e.g. ['essays', 'heidegger']).
draft        REQUIRED. Keep true while in review. Change to false only when publishing.

Publishing checklist (maintainer):
1. Fill frontmatter from writing-template.md.
2. Convert body to clean Markdown (headings, italics, footnotes).
3. npm run build - must pass.
4. Commit and push to main; staging rebuilds automatically.
5. Post the staging URL in the thread for the author to proof.
6. On Luke's go-ahead, run the go-live steps in PUBLISHING.md.
-->
