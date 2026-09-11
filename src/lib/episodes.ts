// Flattens the season-keyed episodes.json into a single ordered list and
// computes a stable, human-readable slug per episode for /episodes/<slug> pages.
import episodes from '../data/episodes.json';
import { seasons } from '../data/podcast';

export interface Episode {
  title: string;
  fullTitle: string;
  season: number;
  episode: number | null;
  kind: string;
  date: string;
  dateLabel: string;
  duration?: string;
  audio: string;
  guid: string;
  description?: string;
  // computed
  slug: string;
  accent: string;
  accentInk: string;
  seasonAlias: string;
  seasonSlug?: string;
  seasonCover?: string;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

const accentBySeason = new Map(
  seasons.map((s) => [String(s.number), s])
);

function buildSlug(ep: any): string {
  const t = slugify(ep.title || ep.fullTitle || ep.guid);
  if (ep.kind === 'intro') return t;
  if (ep.season && ep.episode) return `s${ep.season}e${ep.episode}-${t}`;
  return t;
}

const all: Episode[] = Object.entries(
  episodes.bySeason as Record<string, any[]>
).flatMap(([key, list]) =>
  list.map((ep) => {
    const s = accentBySeason.get(String(ep.season));
    return {
      ...ep,
      slug: buildSlug(ep),
      accent: s?.accent ?? 'var(--accent)',
      accentInk: s?.accentInk ?? 'var(--accent-ink)',
      seasonAlias: s?.alias ?? (key === 'one-offs' ? 'One-offs' : `Season ${ep.season}`),
      seasonSlug: s?.slug,
      seasonCover: (() => {
        const c = s?.cardCover ?? s?.cover;
        return c ? `${import.meta.env.BASE_URL}${c}` : undefined;
      })(),
    } as Episode;
  })
);

// Guarantee slug uniqueness (defensive — appends -2, -3 on collision).
const seen = new Map<string, number>();
for (const ep of all) {
  const n = (seen.get(ep.slug) ?? 0) + 1;
  seen.set(ep.slug, n);
  if (n > 1) ep.slug = `${ep.slug}-${n}`;
}

export const allEpisodes: Episode[] = all.sort(
  (a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)
); // newest first

export const episodeBySlug = new Map(allEpisodes.map((e) => [e.slug, e]));
export const slugByGuid = new Map(allEpisodes.map((e) => [e.guid, e.slug]));
