import { generateSecretKey } from 'nostr-tools'
import { BunkerSigner, parseBunkerInput } from 'nostr-tools/nip46'
const bp = await parseBunkerInput('bunker://f4d59f3f6d8a72d5969a34c084ef879e8aae85a10775e5636047ebe6ddc5c323?relay=wss%3A%2F%2Frelay.powr.build&secret=bb09cccca53d01ed4ebf687826dddc46')
const signer = BunkerSigner.fromBunker(generateSecretKey(), bp)
try {
  await signer.connect({ name: 'Thinking With' })
  const pk = await signer.getPublicKey()
  console.log('PAIRED, bunker pubkey:', pk)
  const ev = await signer.signEvent({ kind: 30023, created_at: Math.floor(Date.now()/1000), tags: [['title','pairing test']], content: 'test' })
  console.log('SIGNED ok, id:', ev.id.slice(0,16), 'pubkey:', ev.pubkey.slice(0,8))
} catch (e) { console.log('ERROR:', e.message || e) }
process.exit(0)
