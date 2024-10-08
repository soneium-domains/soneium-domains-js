[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > renewNames

# Function: renewNames()

> **renewNames**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `RenewNamesReturnType` \>

Renews a name or names for a specified duration.

## Example

```ts
import { createPublicClient, createWalletClient, http, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getPrice } from '@soneium-domains/js/public'
import { renewNames } from '@soneium-domains/js/wallet'

const soneiumMinatoWithEns = addEnsContracts(soneiumMinato)
const client = createPublicClient({
  chain: soneiumMinatoWithEns,
  transport: http(),
})
const wallet = createWalletClient({
  chain: soneiumMinatoWithEns,
  transport: custom(window.ethereum),
})

const duration = 31536000 // 1 year
const { base, premium } = await getPrice(wallet, {
  nameOrNames: 'example.son',
  duration,
})
const value = ((base + premium) * 110n) / 100n // add 10% to the price for buffer
const hash = await renewNames(wallet, {
  nameOrNames: 'example.son',
  duration,
  value,
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

| Parameter                | Type                   | Description                   |
| :----------------------- | :--------------------- | :---------------------------- |
| `wallet`                 | `object`               | ClientWithAccount             |
| `parameters`             | `object`               | RenewNamesParameters          |
| `parameters.duration`    | `number` \| `bigint`   | Duration to renew name(s) for |
| `parameters.nameOrNames` | `string` \| `string`[] | Name or names to renew        |
| `parameters.value`       | `bigint`               | Value of all renewals         |

## Returns

`Promise`\< `RenewNamesReturnType` \>

Transaction hash. RenewNamesReturnType

## Source

[src/functions/wallet/renewNames.ts:129](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/wallet/renewNames.ts#L129)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
