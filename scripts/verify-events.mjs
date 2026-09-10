// Verifies every signed nostr event in src/content/events/*.json before the
// site renders it. A bad or missing signature fails the build, so nothing
// unsigned can ever appear on the site.
import { readdirSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { verifyEvent } from 'nostr-tools'

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'events')
const files = readdirSync(dir).filter((f) => f.endsWith('.json'))
let fail = 0
for (const f of files) {
  const ev = JSON.parse(readFileSync(join(dir, f), 'utf8'))
  const ok = verifyEvent(ev)
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${f} (pubkey ${ev.pubkey?.slice(0, 8)}…)`)
  if (!ok) fail = 1
}
console.log(`${files.length} event(s) checked`)
process.exit(fail)
