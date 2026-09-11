// Publishes every event in src/content/events/*.json to public nostr relays
// so third-party viewers (njump etc.) can find them. Idempotent-ish: relays
// dedupe identical events.
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SimplePool } from 'nostr-tools'

const DIR = join(process.cwd(), 'src', 'content', 'events')
const RELAYS = ['wss://relay.damus.io', 'wss://nos.lol', 'wss://relay.primal.net']

const pool = new SimplePool()
const files = readdirSync(DIR).filter((f) => f.endsWith('.json'))
for (const f of files) {
  const ev = JSON.parse(readFileSync(join(DIR, f), 'utf8'))
  const ok = await Promise.any(
    pool.publish(RELAYS, ev).map((p, i) => p.then(() => RELAYS[i]).catch((e) => { throw new Error(RELAYS[i] + ': ' + (e.message || e)) }))
  )
  console.log(`${f}: published to ${ok}`)
}
pool.close([])
