[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > getAvailable

# Function: getAvailable()

> **getAvailable**(`client`, `parameters`): `Promise`\< `boolean` \>

Gets the availability of a name to register

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getAvailable } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getAvailable(client, { name: 'sns.son' })
// false
```

## Parameters

| Parameter    | Type                     | Description            |
| :----------- | :----------------------- | :--------------------- |
| `client`     | `ClientWithEns`          | ClientWithEns          |
| `parameters` | `GetAvailableParameters` | GetAvailableParameters |

## Returns

`Promise`\< `boolean` \>

Availability as boolean. GetAvailableReturnType

## Source

[src/functions/public/getAvailable.ts:86](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/public/getAvailable.ts#L86)

> **getAvailable**(`client`, ...`args`): `Promise`\< `null` \| `boolean` \>

Gets the availability of a name to register

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getAvailable } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getAvailable(client, { name: 'sns.son' })
// false
```

## Parameters

| Parameter | Type                       | Description   |
| :-------- | :------------------------- | :------------ |
| `client`  | `ClientWithEns`            | ClientWithEns |
| ...`args` | [`GetAvailableParameters`] | -             |

## Returns

`Promise`\< `null` \| `boolean` \>

Availability as boolean. GetAvailableReturnType

## Source

[src/utils/generateFunction.ts:41](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/utils/generateFunction.ts#L41)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
