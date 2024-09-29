[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > getWrapperData

# Function: getWrapperData()

> **getWrapperData**(`client`, `parameters`): `Promise`\< `GetWrapperDataReturnType` \>

Gets the wrapper data for a name.

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getWrapperData } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getWrapperData(client, { name: 'ilikelasagna.son' })
```

## Parameters

| Parameter    | Type                       | Description              |
| :----------- | :------------------------- | :----------------------- |
| `client`     | `ClientWithEns`            | ClientWithEns            |
| `parameters` | `GetWrapperDataParameters` | GetWrapperDataParameters |

## Returns

`Promise`\< `GetWrapperDataReturnType` \>

Wrapper data object, or null if name is not wrapped. GetWrapperDataReturnType

## Source

[src/functions/public/getWrapperData.ts:123](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/public/getWrapperData.ts#L123)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
