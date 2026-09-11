// Stamps every signed event in src/content/events/*.json with OpenTimestamps.
// Creates <file>.ots once per event; never re-stamps an already-stamped event.
// Proofs start as pending calendar receipts; `npm run upgrade` upgrades them to
// Bitcoin-anchored proofs (run after a few hours, or on a cron). Verify with
// `node node_modules/opentimestamps/ots-cli.js verify <file>.ots <file>`.
import { readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'events')
const ots = join(dirname(fileURLToPath(import.meta.url)), '..', 'node_modules', 'opentimestamps', 'ots-cli.js')

const files = readdirSync(dir).filter((f) => f.endsWith('.json'))
let fail = 0
for (const f of files) {
  if (existsSync(join(dir, f + '.ots'))) {
    console.log(`SKIP ${f} (already stamped)`)
    continue
  }
  try {
    execFileSync('node', [ots, 'stamp', join(dir, f)], { stdio: 'inherit' })
    console.log(`STAMPED ${f}`)
  } catch {
    fail = 1
    console.log(`FAIL ${f}`)
  }
}
console.log(`${files.length} event(s) processed`)
process.exit(fail)
