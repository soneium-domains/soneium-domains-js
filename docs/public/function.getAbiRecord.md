[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > getAbiRecord

# Function: getAbiRecord()

> **getAbiRecord**(`client`, `parameters`): `Promise`\< `GetAbiRecordReturnType` \>

Gets the ABI record for a name

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getAbiRecord } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getAbiRecord(client, { name: 'sns.son' })
// TODO: real example
```

## Parameters

| Parameter         | Type            | Description                |
| :---------------- | :-------------- | :------------------------- |
| `client`          | `ClientWithEns` | ClientWithEns              |
| `parameters`      | `object`        | GetAbiRecordParameters     |
| `parameters.name` | `string`        | Name to get ABI record for |

## Returns

`Promise`\< `GetAbiRecordReturnType` \>

ABI record for the name, or `null` if not found. GetAbiRecordReturnType

## Source

[packages/ensjs/src/functions/public/getAbiRecord.ts:60](https://github.com/ensdomains/ensjs-v3/blob/1b90b888/packages/ensjs/src/functions/public/getAbiRecord.ts#L60)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
