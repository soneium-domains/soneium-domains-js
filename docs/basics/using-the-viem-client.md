# Using the Viem Client

If you're only using parts of soneium domains js sdk, or want to control exactly what functions are being imported, you can use soneium domains js sdk methods with the viem `Client`.
Just wrap the viem `Chain` in the `addEnsContracts()` function, which adds all the required addresses to the chain.

```ts
import { http, createClient } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getAddressRecord } from '@soneium-domains/js/public'

const client = createClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})

const ethAddress = getAddressRecord(client, { name: 'sns.son' })
```
