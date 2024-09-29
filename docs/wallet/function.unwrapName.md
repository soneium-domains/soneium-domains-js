[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > unwrapName

# Function: unwrapName()

> **unwrapName**\<`TName`, `TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `UnwrapNameReturnType` \>

Unwraps a name.

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { unwrapName } from '@soneium-domains/js/wallet'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
})
const hash = await unwrapName(wallet, {
  name: 'example.son',
  newOwnerAddress: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
  newRegistrantAddress: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
})
// 0x...
```

## Type parameters

| Parameter                                                | Default        |
| :------------------------------------------------------- | :------------- |
| `TName` _extends_ `string`                               | -              |
| `TChain` _extends_ `ChainWithEns`                        | -              |
| `TAccount` _extends_ `undefined` \| `Account`            | -              |
| `TChainOverride` _extends_ `undefined` \| `ChainWithEns` | `ChainWithEns` |

## Parameters

| Parameter    | Type                                                                        | Description          |
| :----------- | :-------------------------------------------------------------------------- | :------------------- |
| `wallet`     | `object`                                                                    | ClientWithAccount    |
| `parameters` | `UnwrapNameParameters`\< `TName`, `TChain`, `TAccount`, `TChainOverride` \> | UnwrapNameParameters |

## Returns

`Promise`\< `UnwrapNameReturnType` \>

Transaction hash. UnwrapNameReturnType

## Source

[src/functions/wallet/unwrapName.ts:144](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/wallet/unwrapName.ts#L144)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
