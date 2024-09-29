[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > getExpiry

# Function: getExpiry()

> **getExpiry**(`client`, `parameters`): `Promise`\< `GetExpiryReturnType` \>

Gets the expiry for a name

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getExpiry } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getExpiry(client, { name: 'sns.son' })
// { expiry: { date: Date, value: 1913933217n }, gracePeriod: 7776000, status: 'active' }
```

## Parameters

| Parameter              | Type             | Description                                     |
| :--------------------- | :--------------- | :---------------------------------------------- |
| `client`               | `ClientWithEns`  | ClientWithEns                                   |
| `parameters`           | `object`         | GetExpiryParameters                             |
| `parameters.contract`? | `ContractOption` | Optional specific contract to use to get expiry |
| `parameters.name`      | `string`         | Name to get expiry for                          |

## Returns

`Promise`\< `GetExpiryReturnType` \>

Expiry object, or `null` if no expiry. GetExpiryReturnType

## Source

[src/functions/public/getExpiry.ts:194](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/public/getExpiry.ts#L194)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
