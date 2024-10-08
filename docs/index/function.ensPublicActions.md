[**@soneium-domains/js**](../README.md)

---

> [index](README.md) > ensPublicActions

# Function: ensPublicActions()

> **ensPublicActions**\<`TTransport`, `TChain`, `TAccount`\>(`client`): `EnsPublicActions`

Extends the viem client with ENS public actions

## Example

```ts
import { createPublicClient, http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensPublicActions } from '@soneium-domains/js'

const clientWithEns = createPublicClient({
  chain: addEnsContracts(soneiumMinato),
  transport: http(),
}).extend(ensPublicActions)
```

## Type parameters

| Parameter                                     | Default                  |
| :-------------------------------------------- | :----------------------- |
| `TTransport` _extends_ `Transport`            | `Transport`              |
| `TChain` _extends_ `ChainWithEns`             | `ChainWithEns`           |
| `TAccount` _extends_ `undefined` \| `Account` | `undefined` \| `Account` |

## Parameters

| Parameter | Type                                             | Description                                             |
| :-------- | :----------------------------------------------- | :------------------------------------------------------ |
| `client`  | `Client`\< `TTransport`, `TChain`, `TAccount` \> | The viem Client object to add the ENS public actions to |

## Returns

`EnsPublicActions`

## Source

[src/clients/decorators/public.ts:372](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/clients/decorators/public.ts#L372)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
