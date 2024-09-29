[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > setFuses

# Function: setFuses()

> **setFuses**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `SetFusesReturnType` \>

Sets the fuses for a name.

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { setFuses } from '@soneium-domains/js/wallet'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
})
const hash = await setFuses(wallet, {
  name: 'sub.sns.son',
  fuses: {
    named: ['CANNOT_TRANSFER'],
  },
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

| Parameter          | Type                          | Description           |
| :----------------- | :---------------------------- | :-------------------- |
| `wallet`           | `object`                      | ClientWithAccount     |
| `parameters`       | `object`                      | SetFusesParameters    |
| `parameters.fuses` | `EncodeChildFusesInputObject` | Fuse object to set to |
| `parameters.name`  | `string`                      | Name to set fuses for |

## Returns

`Promise`\< `SetFusesReturnType` \>

Transaction hash. SetFusesReturnType

## Source

[packages/ensjs/src/functions/wallet/setFuses.ts:84](https://github.com/ensdomains/ensjs-v3/blob/1b90b888/packages/ensjs/src/functions/wallet/setFuses.ts#L84)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
