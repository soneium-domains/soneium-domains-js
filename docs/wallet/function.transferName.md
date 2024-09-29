[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > transferName

# Function: transferName()

> **transferName**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `TransferNameReturnType` \>

Transfers a name to a new owner.

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { transferName } from '@soneium-domains/js/wallet'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
})
const hash = await transferName(wallet, {
  name: 'sns.son',
  newOwnerAddress: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
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

| Parameter    | Type                                                                 | Description            |
| :----------- | :------------------------------------------------------------------- | :--------------------- |
| `wallet`     | `object`                                                             | ClientWithAccount      |
| `parameters` | `TransferNameParameters`\< `TChain`, `TAccount`, `TChainOverride` \> | TransferNameParameters |

## Returns

`Promise`\< `TransferNameReturnType` \>

Transaction hash. TransferNameReturnType

## Source

[packages/ensjs/src/functions/wallet/transferName.ts:226](https://github.com/ensdomains/ensjs-v3/blob/1b90b888/packages/ensjs/src/functions/wallet/transferName.ts#L226)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
