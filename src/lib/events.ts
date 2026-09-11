// Signed nostr essays (NIP-23) live in src/content/events/*.json.
// Signatures are verified before the build by scripts/verify-events.mjs;
// anything here can be trusted as author-published.
// ponytail: renders markdown as plain paragraphs; add a real md renderer if essays need headings/lists.
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { nip19 } from 'nostr-tools'

// Author display names by pubkey.
const AUTHORS: Record<string, string> = {
  'f4d59f3f6d8a72d5969a34c084ef879e8aae85a10775e5636047ebe6ddc5c323': 'Luke',
}

export type SignedEvent = {
  slug: string
  title: string
  description: string
  date: Date
  content: string
  author: string
  pubkey: string
  id: string
  nevent: string
}

export function loadSignedEvents(): SignedEvent[] {
  const dir = join(process.cwd(), 'src', 'content', 'events')
  return readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const ev = JSON.parse(readFileSync(join(dir, f), 'utf8'))
      const title = ev.tags.find(([k]: string[]) => k === 'title')?.[1] ?? 'Untitled'
      const ts = Number(ev.tags.find(([k]: string[]) => k === 'published_at')?.[1] ?? ev.created_at)
      return {
        slug: f.replace(/\.json$/, ''),
        title,
        description: ev.content.split('\n\n')[0].slice(0, 180),
        date: new Date(ts * 1000),
        content: ev.content,
        author: AUTHORS[ev.pubkey] ?? 'Unknown',
        pubkey: ev.pubkey,
        id: ev.id,
        nevent: nip19.neventEncode({ id: ev.id, author: ev.pubkey, kind: ev.kind }),
      }
    })
}

export function eventParagraphs(content: string): string[] {
  return content.split('\n\n')
}
