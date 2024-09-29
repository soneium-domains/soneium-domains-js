[**@soneium-domains/js**](../README.md)

---

> [wallet](README.md) > commitName

# Function: commitName()

> **commitName**\<`TChain`, `TAccount`, `TChainOverride`\>(`wallet`, `parameters`): `Promise`\< `CommitNameReturnType` \>

Commits a name to be registered

## Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts } from '@soneium-domains/js'
import { commitName } from '@soneium-domains/js/wallet'
import { randomSecret } from '@soneium-domains/js/utils'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
})
const secret = randomSecret()
const hash = await commitName(wallet, {
  name: 'example.son',
  owner: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
  duration: 31536000, // 1 year
  secret,
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

| Parameter                     | Type                          | Description                                                             |
| :---------------------------- | :---------------------------- | :---------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------ | -------------------------- | ------------- | -------------------------------- |
| `wallet`                      | `object`                      | ClientWithAccount                                                       |
| `parameters`                  | `object`                      | CommitNameParameters                                                    |
| `parameters.duration`         | `number`                      | Duration of registration                                                |
| `parameters.fuses`?           | `EncodeChildFusesInputObject` | Fuses to set upon registration                                          |
| `parameters.name`             | `string`                      | Name to register                                                        |
| `parameters.owner`            | \`0x$\{string}\`              | Address to set owner to                                                 |
| `parameters.records`?         | `{ clearRecords?: boolean     | undefined; contentHash?: string                                         | undefined; texts?: Omit<EncodeSetTextParameters, "namehash">[] | undefined; coins?: Omit<...>[] | undefined; abi?: Omit<...> | undefined; }` | Records to set upon registration |
| `parameters.resolverAddress`? | \`0x$\{string}\`              | Custom resolver address, defaults to current public resolver deployment |
| `parameters.reverseRecord`?   | `boolean`                     | Sets primary name upon registration                                     |
| `parameters.secret`           | \`0x$\{string}\`              | Random 32 bytes to use for registration                                 |

## Returns

`Promise`\< `CommitNameReturnType` \>

Transaction hash. CommitNameReturnType

## Source

[packages/ensjs/src/functions/wallet/commitName.ts:94](https://github.com/ensdomains/ensjs-v3/blob/1b90b888/packages/ensjs/src/functions/wallet/commitName.ts#L94)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
