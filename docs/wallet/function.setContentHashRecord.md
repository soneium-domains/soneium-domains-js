[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > setContentHashRecord

# Function: setContentHashRecord()

> **setContentHashRecord**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `SetContentHashRecordReturnType` \>

Sets the content hash record for a name on a resolver.

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { setContentHashRecord } from '@soneium-domains/js/wallet'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
})
const hash = await setContentHashRecord(wallet, {
  name: 'sns.son',
  value:
    'ipns://k51qzi5uqu5djdczd6zw0grmo23j2vkj9uzvujencg15s5rlkq0ss4ivll8wqw',
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

| Parameter                    | Type               | Description                             |
| :--------------------------- | :----------------- | :-------------------------------------- |
| `wallet`                     | `object`           | ClientWithAccount                       |
| `parameters`                 | `object`           | SetContentHashRecordParameters          |
| `parameters.contentHash`     | `null` \| `string` | Content hash value                      |
| `parameters.name`            | `string`           | Name to set content hash for            |
| `parameters.resolverAddress` | \`0x$\{string}\`   | Resolver address to set content hash on |

## Returns

`Promise`\< `SetContentHashRecordReturnType` \>

Transaction hash. SetContentHashRecordReturnType

## Source

[src/functions/wallet/setContentHashRecord.ts:75](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/wallet/setContentHashRecord.ts#L75)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
