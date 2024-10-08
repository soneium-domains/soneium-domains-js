[**@soneium-domains/js**](../README.md)

---

> [index](README.md) > ensWalletActions

# Function: ensWalletActions()

> **ensWalletActions**\<`TTransport`, `TChain`, `TAccount`\>(`client`): `EnsWalletActions`\< `TChain`, `TAccount` \>

Extends the viem client with ENS wallet actions

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const clientWithEns = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
```

## Type parameters

| Parameter                                     | Default                  |
| :-------------------------------------------- | :----------------------- |
| `TTransport` _extends_ `Transport`            | `Transport`              |
| `TChain` _extends_ `ChainWithEns`             | `ChainWithEns`           |
| `TAccount` _extends_ `undefined` \| `Account` | `undefined` \| `Account` |

## Parameters

| Parameter | Type     | Description                                                   |
| :-------- | :------- | :------------------------------------------------------------ |
| `client`  | `object` | The viem WalletClient object to add the ENS wallet actions to |

## Returns

`EnsWalletActions`\< `TChain`, `TAccount` \>

## Source

[src/clients/decorators/wallet.ts:720](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/clients/decorators/wallet.ts#L720)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
