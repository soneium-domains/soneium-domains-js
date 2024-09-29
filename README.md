# <img src="https://soneium.domains/logos/soneium-domains-logo.svg" width="40" height="40" /> SoneiumDomains JS SDK

The ultimate Soneium Domains javascript library, with [viem](https://github.com/wagmi-dev/viem) under the hood.

## Features

- Super fast response times
- Easy call batchability
- Written in TypeScript
- Supports the most cutting edge ENS features
- Full tree-shaking support

## Installation

Install @soneium-domains/js, alongside [viem](https://github.com/wagmi-dev/viem).

```sh
npm install @soneium-domains/js viem
```

or 

```sh
yarn add @soneium-domains/js viem
```

## Getting Started

The most simple way to get started is to create a public ENS client, with a supported
chain and transport imported from viem. The public client has all the read functions available on it,
as well as all subgraph functions.

```ts
// Import viem transport, viem chain, and @soneium-domains/js
import { http } from 'viem'
import { soneiumMinato } from 'viem/chains'
import { createEnsPublicClient } from '@soneium-domains/js'

// Create the client
const client = createEnsPublicClient({
  chain: soneiumMinato,
  transport: http(),
})

// Use the client
const ethAddress = client.getAddressRecord({ name: 'sam.son' })
```

[JS Docs](https://github.com/soneium-domains/soneium-domains-js/tree/main/docs#soneium-domainsjs-documentation)

## Full Docs

Full docs site coming soon.
