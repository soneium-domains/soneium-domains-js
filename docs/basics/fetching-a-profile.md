# Fetching a Profile

An ENS profile, meaning all associated records for an ENS name, can be easily fetched using subgraph data with `getSubgraphRecords()` and `getRecords()`.
When using subgraph data, it's also recommended to provide fallback records for wildcard/CCIP names, and any other situations which aren't indexed by the subgraph.

```ts
import { http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { createEnsPublicClient } from '@soneium-domains/js'

const client = createEnsPublicClient({
  chain: soneiumMinato,
  transport: http(),
})

const subgraphRecords = client.getSubgraphRecords({ name: 'sns.son' })

const records = client.getRecords({
  name: 'sns.son',
  records: {
    coins: [...(subgraphRecords?.coins || []), 'BTC', 'ETH', 'ETC', 'SOL'],
    texts: [
      ...(subgraphRecords?.texts || []),
      'avatar',
      'email',
      'description',
    ],
    contentHash: true,
    abi: true,
  },
})
```
