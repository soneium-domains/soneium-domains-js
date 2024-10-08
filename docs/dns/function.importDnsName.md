[**@soneium-domains/js**](../README.md)

---

> [dns](README.md) > importDnsName

# Function: importDnsName()

> **importDnsName**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `ImportDnsNameReturnType` \>

Creates a transaction to import a DNS name to ENS.

## Example

```ts
import { createPublicClient, createWalletClient, http, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { getDnsImportData, importDnsName } from '@soneium-domains/js/dns'

const soneiumMinatoWithEns = addEnsContracts(soneiumMinato)
const client = createPublicClient({
  chain: soneiumMinatoWithEns,
  transport: http(),
})
const wallet = createWalletClient({
  chain: soneiumMinatoWithEns,
  transport: custom(window.ethereum),
})
const dnsImportData = await getDnsImportData(client, {
  name: 'example.com',
})
const hash = await importDnsName(wallet, {
  name: 'example.com',
  dnsImportData,
})
```

## Type parameters

| Parameter                                                | Default        |
| :------------------------------------------------------- | :------------- |
| `TChain` _extends_ `ChainWithEns`                        | -              |
| `TAccount` _extends_ `undefined` \| `Account`            | -              |
| `TChainOverride` _extends_ `undefined` \| `ChainWithEns` | `ChainWithEns` |

## Parameters

| Parameter    | Type                                                                  | Description             |
| :----------- | :-------------------------------------------------------------------- | :---------------------- |
| `wallet`     | `object`                                                              | ClientWithAccount       |
| `parameters` | `ImportDnsNameParameters`\< `TChain`, `TAccount`, `TChainOverride` \> | ImportDnsNameParameters |

## Returns

`Promise`\< `ImportDnsNameReturnType` \>

A transaction hash. ImportDnsNameReturnType

## Source

[src/functions/dns/importDnsName.ts:152](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/functions/dns/importDnsName.ts#L152)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
