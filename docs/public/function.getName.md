[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > getName

# Function: getName()

> **getName**(`client`, `parameters`): `Promise`\< `GetNameReturnType` \>

Gets the primary name for an address

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getName } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getName(client, {
  address: '0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5',
})
// { name: 'nick.son', match: true, reverseResolverAddress: '0xa2c122be93b0074270ebee7f6b7292c7deb45047', resolverAddress: '0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41' }
```

## Parameters

| Parameter    | Type                | Description       |
| :----------- | :------------------ | :---------------- |
| `client`     | `ClientWithEns`     | ClientWithEns     |
| `parameters` | `GetNameParameters` | GetNameParameters |

## Returns

`Promise`\< `GetNameReturnType` \>

Name data object, or `null` if no primary name is set. GetNameReturnType

## Source

[src/functions/public/getName.ts:123](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/public/getName.ts#L123)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
