[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > getPrice

# Function: getPrice()

> **getPrice**(`client`, `parameters`): `Promise`\< `GetPriceReturnType` \>

Gets the price of a name, or array of names, for a given duration.

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getPrice } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getPrice(client, {
  nameOrNames: 'sns.son',
  duration: 31536000,
})
// { base: 352828971668930335n, premium: 0n }
```

## Parameters

| Parameter    | Type                 | Description        |
| :----------- | :------------------- | :----------------- |
| `client`     | `ClientWithEns`      | ClientWithEns      |
| `parameters` | `GetPriceParameters` | GetPriceParameters |

## Returns

`Promise`\< `GetPriceReturnType` \>

Price data object. GetPriceReturnType

## Source

[src/functions/public/getPrice.ts:142](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/public/getPrice.ts#L142)

> **getPrice**(`client`, ...`args`): `Promise`\< `null` \| `GetPriceReturnType` \>

Gets the price of a name, or array of names, for a given duration.

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getPrice } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getPrice(client, {
  nameOrNames: 'sns.son',
  duration: 31536000,
})
// { base: 352828971668930335n, premium: 0n }
```

## Parameters

| Parameter | Type                   | Description   |
| :-------- | :--------------------- | :------------ |
| `client`  | `ClientWithEns`        | ClientWithEns |
| ...`args` | [`GetPriceParameters`] | -             |

## Returns

`Promise`\< `null` \| `GetPriceReturnType` \>

Price data object. GetPriceReturnType

## Source

[src/utils/generateFunction.ts:41](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/utils/generateFunction.ts#L41)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
