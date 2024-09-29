[**@soneium-domains/js**](../README.md)

---

> [index](README.md) > createEnsWalletClient

# Function: createEnsWalletClient()

> **createEnsWalletClient**\<`TTransport`, `TChain`, `TAccountOrAddress`\>(`config`): `object`

Creates an ENS Wallet Client with a given [Transport](https://viem.sh/docs/clients/intro.html) configured for a [Chain](https://viem.sh/docs/clients/chains.html).

## Example

```ts
import { custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { createEnsWalletClient } from '@soneium-domains/js'

const client = createEnsWalletClient({
  chain: soneiumMinato,
  transport: custom(window.ethereum),
})
```

## Type parameters

| Parameter                                                                  | Default     |
| :------------------------------------------------------------------------- | :---------- |
| `TTransport` _extends_ `Transport`                                         | -           |
| `TChain` _extends_ `Chain`                                                 | -           |
| `TAccountOrAddress` _extends_ `undefined` \| \`0x$\{string}\` \| `Account` | `undefined` |

## Parameters

| Parameter | Type                                                                     | Description           |
| :-------- | :----------------------------------------------------------------------- | :-------------------- |
| `config`  | `EnsWalletClientConfig`\< `TTransport`, `TChain`, `TAccountOrAddress` \> | EnsWalletClientConfig |

## Returns

An ENS Wallet Client. EnsWalletClient

### clearRecords

**clearRecords**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Clears the records for a name on a resolver.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.clearRecords({
  name: 'sns.son',
  resolverAddress: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                                                                                                                                                         | Description                                                                |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | ------------- | ---------------------- |
| `parameters` | `{ name: string; resolverAddress: `0x${string}`; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<TChain>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | ClearRecordsParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. ClearRecordsReturnType

### commitName

**commitName**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Commits a name to be registered

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'
import { randomSecret } from '@soneium-domains/js/utils'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const secret = randomSecret()
const hash = await wallet.commitName({
  name: 'example.son',
  owner: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
  duration: 31536000, // 1 year
  secret,
})
// 0x...
```

#### Parameters

| Parameter    | Type                                                                                                            | Description                                   |
| :----------- | :-------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- | ------------------------------- | ------------------------------ | ------------------------------ | -------------------------- | ------------ | ---------------- | -------------------- |
| `parameters` | `{ name: string; owner: `0x${string}`; duration: number; secret: `0x${string}`; resolverAddress?: `0x${string}` | undefined; records?: { clearRecords?: boolean | undefined; contentHash?: string | undefined; texts?: Omit<...>[] | undefined; coins?: Omit<...>[] | undefined; abi?: Omit<...> | undefined; } | undefined; ....` | CommitNameParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. CommitNameReturnType

### createSubname

**createSubname**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Creates a subname

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.createSubname({
  name: 'sub.sns.son',
  owner: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
  contract: 'registry',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                                                                                                               | Description             |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| `parameters` | `CreateSubnameParameters`\< `ChainWithEns`\< `TChain` \>, `ParseAccount`\< `TAccountOrAddress` \>, `ChainWithEns`\< `TChain` \> \> | CreateSubnameParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. CreateSubnameReturnType

### deleteSubname

**deleteSubname**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Deletes a subname

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.deleteSubname({
  name: 'sub.sns.son',
  contract: 'registry',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                     | Description                   |
| :----------- | :--------------------------------------- | :---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | ----------------------- |
| `parameters` | `{ name: string; contract: "nameWrapper" | "registry"; asOwner?: boolean | undefined; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<...>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | DeleteSubnameParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. DeleteSubnameReturnType

### registerName

**registerName**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Registers a name on ENS

#### Example

```ts
import { createPublicClient, createWalletClient, http, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import {
  addEnsContracts,
  ensPublicActions,
  ensWalletActions,
} from '@soneium-domains/js'
import { randomSecret } from '@soneium-domains/js/utils'

const soneiumMinatoWithEns = addEnsContracts(soneiumMinato)
const client = createPublicClient({
  chain: soneiumMinatoWithEns,
  transport: http(),
}).extend(ensPublicActions)
const wallet = createWalletClient({
  chain: soneiumMinatoWithEns,
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const secret = randomSecret()
const params = {
  name: 'example.son',
  owner: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
  duration: 31536000, // 1 year
  secret,
}

const commitmentHash = await wallet.commitName(params)
await client.waitForTransactionReceipt({ hash: commitmentHash }) // wait for commitment to finalise
await new Promise((resolve) => setTimeout(resolve, 60 * 1_000)) // wait for commitment to be valid

const { base, premium } = await client.getPrice({
  nameOrNames: params.name,
  duration: params.duration,
})
const value = ((base + premium) * 110n) / 100n // add 10% to the price for buffer
const hash = await wallet.registerName({ ...params, value })
// 0x...
```

#### Parameters

| Parameter    | Type                                                                                                            | Description                                   |
| :----------- | :-------------------------------------------------------------------------------------------------------------- | :-------------------------------------------- | ------------------------------- | ------------------------------ | ------------------------------ | -------------------------- | ------------ | ---------------- | ---------------------- |
| `parameters` | `{ name: string; owner: `0x${string}`; duration: number; secret: `0x${string}`; resolverAddress?: `0x${string}` | undefined; records?: { clearRecords?: boolean | undefined; contentHash?: string | undefined; texts?: Omit<...>[] | undefined; coins?: Omit<...>[] | undefined; abi?: Omit<...> | undefined; } | undefined; ....` | RegisterNameParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. RegisterNameReturnType

### renewNames

**renewNames**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Renews a name or names for a specified duration.

#### Example

```ts
import { createPublicClient, createWalletClient, http, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import {
  addEnsContracts,
  ensPublicActions,
  ensWalletActions,
} from '@soneium-domains/js'

const soneiumMinatoWithEns = addEnsContracts(soneiumMinato)
const client = createPublicClient({
  chain: soneiumMinatoWithEns,
  transport: http(),
}).extend(ensPublicActions)
const wallet = createWalletClient({
  chain: soneiumMinatoWithEns,
  transport: custom(window.ethereum),
}).extend(ensWalletActions)

const duration = 31536000 // 1 year
const { base, premium } = await client.getPrice({
  nameOrNames: 'example.son',
  duration,
})
const value = ((base + premium) * 110n) / 100n // add 10% to the price for buffer
const hash = await wallet.renewNames({
  nameOrNames: 'example.son',
  duration,
  value,
})
// 0x...
```

#### Parameters

| Parameter    | Type                   | Description                |
| :----------- | :--------------------- | :------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | -------------------- |
| `parameters` | `{ nameOrNames: string | string[]; duration: number | bigint; value: bigint; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<...>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | RenewNamesParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. RenewNamesReturnType

### setAbiRecord

**setAbiRecord**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Sets the ABI for a name on a resolver.

#### Example

```ts
import abi from './abi.json'
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'
import { encodeAbi } from '@soneium-domains/js/utils'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)

const encodedAbi = await encodeAbi({ encodeAs: 'json', abi })
const hash = await wallet.setAbiRecord({
  name: 'sns.son',
  encodedAbi,
  resolverAddress: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                    | Description                                                                                                                                                    |
| :----------- | :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | ---------------------- |
| `parameters` | `{ name: string; encodedAbi: EncodedAbi | null; resolverAddress: `0x${string}`; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<...>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | SetAbiRecordParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. SetAbiRecordReturnType

### setAddressRecord

**setAddressRecord**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Sets an address record for a name on a resolver.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.setAddressRecord({
  name: 'sns.son',
  coin: 'ETH',
  value: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
  resolverAddress: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
})
// 0x...
```

#### Parameters

| Parameter    | Type                          | Description           |
| :----------- | :---------------------------- | :-------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | -------------------------- |
| `parameters` | `{ name: string; coin: string | number; value: string | null; resolverAddress: `0x${string}`; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<...>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | SetAddressRecordParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. SetAddressRecordReturnType

### setChildFuses

**setChildFuses**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Sets the fuses for a name as the parent.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.setChildFuses({
  name: 'sub.sns.son',
  fuses: {
    parent: {
      named: ['PARENT_CANNOT_CONTROl'],
    },
  },
})
// 0x...
```

#### Parameters

| Parameter    | Type                                                            | Description |
| :----------- | :-------------------------------------------------------------- | :---------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | ----------------------- |
| `parameters` | `{ name: string; fuses: EncodeFusesInputObject; expiry?: number | bigint      | undefined; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<...>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | SetChildFusesParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. SetChildFusesReturnType

### setContentHashRecord

**setContentHashRecord**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Sets the content hash record for a name on a resolver.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.setContentHashRecord({
  name: 'sns.son',
  value:
    'ipns://k51qzi5uqu5djdczd6zw0grmo23j2vkj9uzvujencg15s5rlkq0ss4ivll8wqw',
  resolverAddress: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                 | Description                                                                                                                                                    |
| :----------- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | ------------------------------ |
| `parameters` | `{ name: string; contentHash: string | null; resolverAddress: `0x${string}`; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<...>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | SetContentHashRecordParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. SetContentHashRecordReturnType

### setFuses

**setFuses**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Sets the fuses for a name.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.setFuses({
  name: 'sub.sns.son',
  fuses: {
    named: ['CANNOT_TRANSFER'],
  },
})
// 0x...
```

#### Parameters

| Parameter    | Type                                                                                                                                                                          | Description                                                                |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | ------------- | ------------------ |
| `parameters` | `{ name: string; fuses: EncodeChildFusesInputObject; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<...>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | SetFusesParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. SetFusesReturnType

### setPrimaryName

**setPrimaryName**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Sets a primary name for an address.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.setPrimaryName({
  name: 'sns.son',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                                                                                                                | Description              |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------- | :----------------------- |
| `parameters` | `SetPrimaryNameParameters`\< `ChainWithEns`\< `TChain` \>, `ParseAccount`\< `TAccountOrAddress` \>, `ChainWithEns`\< `TChain` \> \> | SetPrimaryNameParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. SetPrimaryNameReturnType

### setRecords

**setRecords**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Sets multiple records for a name on a resolver.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.setRecords({
  name: 'sns.son',
  coins: [
    {
      coin: 'ETH',
      value: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
    },
  ],
  texts: [{ key: 'foo', value: 'bar' }],
  resolverAddress: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                                                    | Description                     |
| :----------- | :---------------------------------------------------------------------- | :------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | -------------------- |
| `parameters` | `{ name: string; resolverAddress: `0x${string}`; clearRecords?: boolean | undefined; contentHash?: string | undefined; texts?: Omit<EncodeSetTextParameters, "namehash">[] | undefined; ... 7 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | SetRecordsParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. SetRecordsReturnType

### setResolver

**setResolver**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Sets a resolver for a name.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.setResolver({
  name: 'sns.son',
  contract: 'registry',
  resolverAddress: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                     | Description                                                                                                                                                          |
| :----------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | --------------------- |
| `parameters` | `{ name: string; contract: "nameWrapper" | "registry"; resolverAddress: `0x${string}`; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<...>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | SetResolverParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. SetResolverReturnType

### setTextRecord

**setTextRecord**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Sets a text record for a name on a resolver.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.setTextRecord({
  name: 'sns.son',
  key: 'foo',
  value: 'bar',
  resolverAddress: '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                        | Description                                                                                                                                                    |
| :----------- | :------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | ----------------------- |
| `parameters` | `{ name: string; key: string; value: string | null; resolverAddress: `0x${string}`; account?: SendTransactionParameters<ChainWithEns<TChain>, ParseAccount<TAccountOrAddress>, ChainWithEns<...>>["account"] | undefined; ... 4 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | SetTextRecordParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. SetTextRecordReturnType

### transferName

**transferName**: (`parameters`) => `Promise`\< \`0x$\{string}\` \>

Transfers a name to a new owner.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.transferName({
  name: 'sns.son',
  newOwnerAddress: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
  contract: 'registry',
})
// 0x...
```

#### Parameters

| Parameter    | Type                                                                                                                              | Description            |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------- | :--------------------- |
| `parameters` | `TransferNameParameters`\< `ChainWithEns`\< `TChain` \>, `ParseAccount`\< `TAccountOrAddress` \>, `ChainWithEns`\< `TChain` \> \> | TransferNameParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. TransferNameReturnType

### unwrapName

**unwrapName**: \<TName\>(`parameters`) => `Promise`\< \`0x$\{string}\` \>

Unwraps a name.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.unwrapName({
  name: 'example.son',
  newOwnerAddress: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
  newRegistrantAddress: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
})
// 0x...
```

#### Type parameters

| Parameter                  |
| :------------------------- |
| `TName` _extends_ `string` |

#### Parameters

| Parameter    | Type                                                                                                                                     | Description          |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| `parameters` | `UnwrapNameParameters`\< `TName`, `ChainWithEns`\< `TChain` \>, `ParseAccount`\< `TAccountOrAddress` \>, `ChainWithEns`\< `TChain` \> \> | UnwrapNameParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. UnwrapNameReturnType

### wrapName

**wrapName**: \<TName\>(`parameters`) => `Promise`\< \`0x$\{string}\` \>

Wraps a name.

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { addEnsContracts, ensWalletActions } from '@soneium-domains/js'

const wallet = createWalletClient({
  chain: addEnsContracts(soneiumMinato),
  transport: custom(window.ethereum),
}).extend(ensWalletActions)
const hash = await wallet.wrapName({
  name: 'sns.son',
  newOwnerAddress: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
})
// 0x...
```

#### Type parameters

| Parameter                  |
| :------------------------- |
| `TName` _extends_ `string` |

#### Parameters

| Parameter    | Type                                                                                                                                 | Description                                                                |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | ------------- | ------------------ |
| `parameters` | `{ name: TName; newOwnerAddress: `0x${string}`; fuses?: (GetNameType<TName> extends "eth-2ld" ? EncodeChildFusesInputObject : never) | undefined; ... 6 more ...; nonce?: SendTransactionParameters<...>["nonce"] | undefined; }` | WrapNameParameters |

#### Returns

`Promise`\< \`0x$\{string}\` \>

Transaction hash. WrapNameReturnType

## Source

[src/clients/wallet.ts:62](https://github.com/soneium-domains/soneium-domains-js/tree/main/src/clients/wallet.ts#L62)

---

Generated using [TypeDoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown)
