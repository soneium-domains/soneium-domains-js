[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > setAddressRecord

# Function: setAddressRecord()

> **setAddressRecord**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `SetAddressRecordReturnType` \>

Sets an address record for a name on a resolver.

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { setAddressRecord } from '@soneium-domains/js/wallet'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
})
const hash = await setAddressRecord(wallet, {
  name: 'sns.son',
  coin: 'ETH',
  value: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
  resolverAddress: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
})
// 0x...
```

## Type parameters

| Parameter                                                | Default        |
| :------------------------------------------------------- | :------------- |
| `TChain` _extends_ `ChainWithEns`                        | -              |
| `TAccount` _extends_ `undefined` \| `Account`            | -              |
| `TChainOverride` _extends_ `undefined` \| `ChainWithEns` | `ChainWithEns` |

## Parameters

| Parameter                    | Type                 | Description                               |
| :--------------------------- | :------------------- | :---------------------------------------- |
| `wallet`                     | `object`             | ClientWithAccount                         |
| `parameters`                 | `object`             | SetAddressRecordParameters                |
| `parameters.coin`            | `string` \| `number` | Coin ticker or ID to set                  |
| `parameters.name`            | `string`             | Name to set address record for            |
| `parameters.resolverAddress` | \`0x$\{string}\`     | Resolver address to set address record on |
| `parameters.value`           | `null` \| `string`   | Value to set, null if deleting            |

## Returns

`Promise`\< `SetAddressRecordReturnType` \>

Transaction hash. SetAddressRecordReturnType

## Source

[src/functions/wallet/setAddressRecord.ts:78](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/wallet/setAddressRecord.ts#L78)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
