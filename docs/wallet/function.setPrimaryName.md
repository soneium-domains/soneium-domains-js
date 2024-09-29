[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > setPrimaryName

# Function: setPrimaryName()

> **setPrimaryName**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `SetPrimaryNameReturnType` \>

Sets a primary name for an address.

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { setPrimaryName } from '@soneium-domains/js/wallet'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
})
const hash = await setPrimaryName(wallet, {
  name: 'sns.son',
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

| Parameter    | Type                                                                   | Description              |
| :----------- | :--------------------------------------------------------------------- | :----------------------- |
| `wallet`     | `object`                                                               | ClientWithAccount        |
| `parameters` | `SetPrimaryNameParameters`\< `TChain`, `TAccount`, `TChainOverride` \> | SetPrimaryNameParameters |

## Returns

`Promise`\< `SetPrimaryNameReturnType` \>

Transaction hash. SetPrimaryNameReturnType

## Source

[packages/ensjs/src/functions/wallet/setPrimaryName.ts:126](https://github.com/ensdomains/ensjs-v3/blob/1b90b888/packages/ensjs/src/functions/wallet/setPrimaryName.ts#L126)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
