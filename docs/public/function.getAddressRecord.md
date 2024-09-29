[**@soneium-domains/js**](../README.md)

---

> [public](README.md) > getAddressRecord

# Function: getAddressRecord()

> **getAddressRecord**(`client`, `parameters`): `Promise`\< `GetAddressRecordReturnType` \>

Gets an address record for a name and specified coin

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getAddressRecord } from '@soneium-domains/js/public'

const client = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
const result = await getAddressRecord(client, { name: 'sns.son', coin: 'ETH' })
// { id: 60, name: 'ETH , value: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7' }
```

## Parameters

| Parameter                  | Type                 | Description                                                                                          |
| :------------------------- | :------------------- | :--------------------------------------------------------------------------------------------------- |
| `client`                   | `ClientWithEns`      | ClientWithEns                                                                                        |
| `parameters`               | `object`             | GetAddressRecordParameters                                                                           |
| `parameters.bypassFormat`? | `boolean`            | Optionally return raw bytes value of address record (default: false)                                 |
| `parameters.coin`?         | `string` \| `number` | Coin to get the address record for, can be either symbol (string) or coinId (number) (default: `60`) |
| `parameters.name`          | `string`             | Name to get the address record for                                                                   |

## Returns

`Promise`\< `GetAddressRecordReturnType` \>

Coin value object, or `null` if not found. GetAddressRecordReturnType

## Source

[src/functions/public/getAddressRecord.ts:61](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/public/getAddressRecord.ts#L61)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
