[**@soneium-domains/js**](../README.md)

---

> [subgraph](README.md) > getNameHistory

# Function: getNameHistory()

> **getNameHistory**(`client`, `parameters`): `Promise`\< `GetNameHistoryReturnType` \>

Gets the history of a name from the subgraph.

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getNameHistory } from '@soneium-domains/js/subgraph'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getNameHistory(client, { name: 'sns.son' })
```

## Parameters

| Parameter    | Type                       | Description              |
| :----------- | :------------------------- | :----------------------- |
| `client`     | `ClientWithEns`            | ClientWithEns            |
| `parameters` | `GetNameHistoryParameters` | GetNameHistoryParameters |

## Returns

`Promise`\< `GetNameHistoryReturnType` \>

History object, or null if name could not be found. GetNameHistoryReturnType

## Source

[src/functions/subgraph/getNameHistory.ts:83](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/subgraph/getNameHistory.ts#L83)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
