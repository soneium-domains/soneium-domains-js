# Batching Calls

Batching is built-in to viem for most situations, but soneium domains js sdk also has native batching if you want to be sure that calls are batched.
Only public methods support call batching at this point. On the `EnsPublicClient`, batching can be accessed via `ensBatch` to avoid
colliding with viem's native batching. If using batch outside of the client though, it can be accessed with `batch`.

## Using `EnsPublicClient`

```ts
import { http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { createEnsPublicClient } from '@soneium-domains/js'
import { getAddressRecord, getTextRecord } from '@soneium-domains/js/public'

const client = createEnsPublicClient({
  chain: soneiumMinato,
  transport: http(),
})

const [ethAddress, twitterUsername] = client.ensBatch(
  getAddressRecord.batch({ name: 'sns.son' }),
  getTextRecord.batch({ name: 'sns.son', key: 'com.twitter' }),
)
/* 
  [
    {
      id: 60,
      name: 'ETH',
      value: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7'
    },
    'ensdomains'
  ]
*/
```

## Using Viem Client

```ts
import { http, createClient } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import {
  batch,
  getAddressRecord,
  getTextRecord,
} from '@soneium-domains/js/public'

const client = createClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})

const [ethAddress, twitterUsername] = batch(
  client,
  getAddressRecord.batch({ name: 'sns.son' }),
  getTextRecord.batch({ name: 'sns.son', key: 'com.twitter' }),
)
/* 
  [
    {
      id: 60,
      name: 'ETH',
      value: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7'
    },
    'ensdomains'
  ]
*/
```
