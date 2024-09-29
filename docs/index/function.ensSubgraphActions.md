[**@soneium-domains/js**](../README.md)

---

> [index](README.md) > ensSubgraphActions

# Function: ensSubgraphActions()

> **ensSubgraphActions**\<`TTransport`, `TChain`, `TAccount`\>(`client`): `EnsSubgraphActions`

Extends the viem client with ENS subgraph actions

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensSubgraphActions } from '@soneium-domains/js'

const clientWithEns = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
}).extend(ensSubgraphActions)
```

## Type parameters

| Parameter                                     | Default                  |
| :-------------------------------------------- | :----------------------- |
| `TTransport` _extends_ `Transport`            | `Transport`              |
| `TChain` _extends_ `ChainWithEns`             | `ChainWithEns`           |
| `TAccount` _extends_ `undefined` \| `Account` | `undefined` \| `Account` |

## Parameters

| Parameter | Type                                             | Description                                               |
| :-------- | :----------------------------------------------- | :-------------------------------------------------------- |
| `client`  | `Client`\< `TTransport`, `TChain`, `TAccount` \> | The viem Client object to add the ENS subgraph actions to |

## Returns

`EnsSubgraphActions`

## Source

[src/clients/decorators/subgraph.ts:181](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/clients/decorators/subgraph.ts#L181)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
