[**@soneium-domains/js**](../README.md)

---

> [index](README.md) > addEnsContracts

# Function: addEnsContracts()

> **addEnsContracts**\<`TChain`\>(`chain`): `ChainWithEns`\< `TChain` \>

Adds ENS contract addresses to the viem chain

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'

const clientWithEns = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
})
```

## Type parameters

| Parameter                  |
| :------------------------- |
| `TChain` _extends_ `Chain` |

## Parameters

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `chain`   | `TChain` | The viem Chain object to add the ENS contracts to |

## Returns

`ChainWithEns`\< `TChain` \>

## Source

[src/contracts/addEnsContracts.ts:25](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/contracts/addEnsContracts.ts#L25)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
