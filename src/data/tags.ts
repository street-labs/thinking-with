// Editorial categories — the tags/categories the authors want surfaced in the
// sub-menu below the navbar and on /tags/<slug> landing pages. These span the
// writing collection AND podcast episodes today; a future "vibes" (links/resources)
// source can be folded into lib/tags.ts without touching this list.
//
// `featured: true` puts a tag in the EditorialBar under the navbar.
// To add a category: add an entry here, then tag essays (frontmatter `tags`) and/or
// episodes (src/data/episodeTags.json, or via the derived rules in lib/tags.ts).

export type EditorialTag = {
  slug: string;
  label: string;
  blurb: string;
  featured?: boolean;
};

export const tags: EditorialTag[] = [
  {
    slug: 'critique',
    label: 'Critique',
    blurb:
      'Our current organizing question: what critique is, what it is for, and whether it has exhausted itself.',
    featured: true,
  },
  {
    slug: 'teaching',
    label: 'Teaching',
    blurb:
      'The pedagogical thread — thinking with a text as a practice rather than a transfer of information.',
    featured: true,
  },
  {
    slug: 'heidegger',
    label: 'Heidegger',
    blurb: 'Everything on our two Heidegger seasons and the question of what calls for thinking.',
    featured: true,
  },
  {
    slug: 'affirmation',
    label: 'Affirmation',
    blurb: 'Eternal return, the cheerful science, and the styles of thinking that risk everything.',
    featured: true,
  },
  {
    slug: 'essays',
    label: 'Essays',
    blurb: 'Longer-form writing between episodes.',
  },
  {
    slug: 'notes',
    label: 'Notes',
    blurb: 'Shorter provocations, reading notes, and dispatches from the show.',
  },
];

export const featuredTags = tags.filter((t) => t.featured);

export function getTag(slug: string) {
  return tags.find((t) => t.slug === slug);
}
