# Extending the Viem Client

If you want to customise the set of methods that are added to the Viem client instead of using an ENS client, you can extend the Viem client with the provided actions functions.

## Available Actions Functions

- `ensPublicActions`
- `ensWalletActions`
- `ensSubgraphActions`

## Example: Subgraph Only Client

```ts
import { http, createClient } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensSubgraphActions } from '@soneium-domains/js'

const client = createClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
}).extend(ensSubgraphActions)

const subgraphRecords = await client.getSubgraphRecords({ name: 'sns.son' })
```
