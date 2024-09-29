[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > deleteSubname

# Function: deleteSubname()

> **deleteSubname**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `DeleteSubnameReturnType` \>

Deletes a subname

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { deleteSubname } from '@soneium-domains/js/wallet'

const wallet = createWalletClient({
  chain: soneiumMinatoWithEns,
  transport: custom(window.ethereum),
})
const hash = await deleteSubname(wallet, {
  name: 'sub.sns.son',
  contract: 'registry',
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

| Parameter             | Type                            | Description                                                                        |
| :-------------------- | :------------------------------ | :--------------------------------------------------------------------------------- |
| `wallet`              | `object`                        | ClientWithAccount                                                                  |
| `parameters`          | `object`                        | DeleteSubnameParameters                                                            |
| `parameters.asOwner`? | `boolean`                       | If true, deletes via owner methods, otherwise will delete via parent owner methods |
| `parameters.contract` | `"nameWrapper"` \| `"registry"` | Contract to delete subname on                                                      |
| `parameters.name`     | `string`                        | Subname to delete                                                                  |

## Returns

`Promise`\< `DeleteSubnameReturnType` \>

Transaction hash. DeleteSubnameReturnType

## Source

[src/functions/wallet/deleteSubname.ts:164](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/wallet/deleteSubname.ts#L164)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
