[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > getContentHashRecord

# Function: getContentHashRecord()

> **getContentHashRecord**(`client`, `parameters`): `Promise`\< `GetContentHashRecordReturnType` \>

Gets the content hash record for a name

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getContentHashRecord } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getContentHashRecord(client, { name: 'sns.son' })
// { protocolType: 'ipfs', decoded: 'k51qzi5uqu5djdczd6zw0grmo23j2vkj9uzvujencg15s5rlkq0ss4ivll8wqw' }
```

## Parameters

| Parameter         | Type            | Description                         |
| :---------------- | :-------------- | :---------------------------------- |
| `client`          | `ClientWithEns` | ClientWithEns                       |
| `parameters`      | `object`        | GetContentHashRecordParameters      |
| `parameters.name` | `string`        | Name to get content hash record for |

## Returns

`Promise`\< `GetContentHashRecordReturnType` \>

Content hash object, or `null` if not found. GetContentHashRecordReturnType

## Source

[src/functions/public/getContentHashRecord.ts:62](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/public/getContentHashRecord.ts#L62)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
