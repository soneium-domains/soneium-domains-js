[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > getResolver

# Function: getResolver()

> **getResolver**(`client`, `parameters`): `Promise`\< `GetResolverReturnType` \>

Gets the resolver address for a name.

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getResolver } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getResolver(client, { name: 'sns.son' })
// 0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41
```

## Parameters

| Parameter    | Type                    | Description           |
| :----------- | :---------------------- | :-------------------- |
| `client`     | `ClientWithEns`         | ClientWithEns         |
| `parameters` | `GetResolverParameters` | GetResolverParameters |

## Returns

`Promise`\< `GetResolverReturnType` \>

Resolver address, or null if none is found. GetResolverReturnType

## Source

[src/functions/public/getResolver.ts:95](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/public/getResolver.ts#L95)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
