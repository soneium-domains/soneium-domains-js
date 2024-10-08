[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > setTextRecord

# Function: setTextRecord()

> **setTextRecord**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `SetTextRecordReturnType` \>

Sets a text record for a name on a resolver.

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { setTextRecord } from '@soneium-domains/js/wallet'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
})
const hash = await setTextRecord(wallet, {
  name: 'sns.son',
  key: 'foo',
  value: 'bar',
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

| Parameter                    | Type               | Description                       |
| :--------------------------- | :----------------- | :-------------------------------- |
| `wallet`                     | `object`           | ClientWithAccount                 |
| `parameters`                 | `object`           | SetTextRecordParameters           |
| `parameters.key`             | `string`           | The text record key to set        |
| `parameters.name`            | `string`           | The name to set a text record for |
| `parameters.resolverAddress` | \`0x$\{string}\`   | The resolver address to use       |
| `parameters.value`           | `null` \| `string` | The text record value to set      |

## Returns

`Promise`\< `SetTextRecordReturnType` \>

Transaction hash. SetTextRecordReturnType

## Source

[src/functions/wallet/setTextRecord.ts:78](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/wallet/setTextRecord.ts#L78)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
