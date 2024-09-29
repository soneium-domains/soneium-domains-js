[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > batch

# Function: batch()

> **batch**\<`I`\>(`client`, ...`args`): `Promise`\< `BatchReturnType`\< `I` \> \>

Batches multiple read functions into a single call.

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import {
  batch,
  getTextRecord,
  getAddressRecord,
} from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await batch(
  client,
  getTextRecord.batch({ name: 'sns.son', key: 'com.twitter' }),
  getAddressRecord.batch({ name: 'sns.son', coin: 'ETH' }),
)
// ['ensdomains', { id: 60, name: 'ETH', value: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7 }]
```

## Type parameters

| Parameter                             |
| :------------------------------------ |
| `I` _extends_ `BatchFunctionResult`[] |

## Parameters

| Parameter | Type            | Description   |
| :-------- | :-------------- | :------------ |
| `client`  | `ClientWithEns` | ClientWithEns |
| ...`args` | `I`             | -             |

## Returns

`Promise`\< `BatchReturnType`\< `I` \> \>

Array of return values from each function

## Source

[packages/ensjs/src/functions/public/batch.ts:95](https://github.com/ensdomains/ensjs-v3/blob/1b90b888/packages/ensjs/src/functions/public/batch.ts#L95)

> **batch**(`client`, ...`args`): `Promise`\< `null` \| `any`[] \>

Batches multiple read functions into a single call.

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import {
  batch,
  getTextRecord,
  getAddressRecord,
} from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await batch(
  client,
  getTextRecord.batch({ name: 'sns.son', key: 'com.twitter' }),
  getAddressRecord.batch({ name: 'sns.son', coin: 'ETH' }),
)
// ['ensdomains', { id: 60, name: 'ETH', value: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7 }]
```

## Parameters

| Parameter | Type                    | Description   |
| :-------- | :---------------------- | :------------ |
| `client`  | `ClientWithEns`         | ClientWithEns |
| ...`args` | `BatchFunctionResult`[] | -             |

## Returns

`Promise`\< `null` \| `any`[] \>

Array of return values from each function

## Source

[packages/ensjs/src/utils/generateFunction.ts:41](https://github.com/ensdomains/ensjs-v3/blob/1b90b888/packages/ensjs/src/utils/generateFunction.ts#L41)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
