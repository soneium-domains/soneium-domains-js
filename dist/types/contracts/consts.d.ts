import type { Account, Address, Chain, Client, Transport } from 'viem';
import type { Assign, Prettify } from '../types.js';
type ChainContract = {
    address: Address;
    blockCreated?: number;
};
export declare const supportedChains: readonly [1, 5, 17000, 11155111, 1946];
export declare const supportedContracts: readonly ["ensBaseRegistrarImplementation", "ensBulkRenewal", "ensDnsRegistrar", "ensDnssecImpl", "ensEthRegistrarController", "ensNameWrapper", "ensPublicResolver", "ensRegistry", "ensReverseRegistrar", "ensUniversalResolver"];
export type SupportedChain = (typeof supportedChains)[number];
export type SupportedContract = (typeof supportedContracts)[number];
export declare const addresses: {
    readonly 1: {
        readonly ensBaseRegistrarImplementation: {
            readonly address: "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
        };
        readonly ensBulkRenewal: {
            readonly address: "0xa12159e5131b1eEf6B4857EEE3e1954744b5033A";
        };
        readonly ensDnsRegistrar: {
            readonly address: "0xB32cB5677a7C971689228EC835800432B339bA2B";
        };
        readonly ensDnssecImpl: {
            readonly address: "0x0fc3152971714E5ed7723FAFa650F86A4BaF30C5";
        };
        readonly ensEthRegistrarController: {
            readonly address: "0x253553366Da8546fC250F225fe3d25d0C782303b";
        };
        readonly ensNameWrapper: {
            readonly address: "0xD4416b13d2b3a9aBae7AcD5D6C2BbDBE25686401";
        };
        readonly ensPublicResolver: {
            readonly address: "0x231b0Ee14048e9dCcD1d247744d114a4EB5E8E63";
        };
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensReverseRegistrar: {
            readonly address: "0xa58E81fe9b61B5c3fE2AFD33CF304c454AbFc7Cb";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
        };
    };
    readonly 1946: {
        readonly ensBaseRegistrarImplementation: {
            readonly address: "0xfE87E2f93570f64A69180826f7BE1fD0A46b268a";
        };
        readonly ensBulkRenewal: {
            readonly address: "0xa12159e5131b1eEf6B4857EEE3e1954744b5033A";
        };
        readonly ensDnsRegistrar: {
            readonly address: "0xB32cB5677a7C971689228EC835800432B339bA2B";
        };
        readonly ensDnssecImpl: {
            readonly address: "0x0fc3152971714E5ed7723FAFa650F86A4BaF30C5";
        };
        readonly ensEthRegistrarController: {
            readonly address: "0xA2baDb1a39b578573371BfbaEe85a2fD1db16D63";
        };
        readonly ensNameWrapper: {
            readonly address: "0x02Cd40daE88c503ef462b05adAc329a7F87A6421";
        };
        readonly ensPublicResolver: {
            readonly address: "0x93D577C082c928b2A6e856a8cbB7a31Fc0305BD2";
        };
        readonly ensRegistry: {
            readonly address: "0xF0A7aC86FE19c8Af9f42f00e60aA781818F676CB";
        };
        readonly ensReverseRegistrar: {
            readonly address: "0xC140Fd7686c3D4571FE46A469C283DBB5D56815E";
        };
        readonly ensUniversalResolver: {
            readonly address: "0x8d2CBd32Dd12d7Bf98be518197BB5CeFbb58A518";
        };
    };
    readonly 5: {
        readonly ensBaseRegistrarImplementation: {
            readonly address: "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
        };
        readonly ensBulkRenewal: {
            readonly address: "0x6d9F26FfBcF1c6f0bAe9F2C1f7fBe8eE6B1d8d4d";
        };
        readonly ensDnsRegistrar: {
            readonly address: "0x8edc487D26F6c8Fa76e032066A3D4F87E273515d";
        };
        readonly ensDnssecImpl: {
            readonly address: "0xF427c4AdED8B6dfde604865c1a7E953B160C26f0";
        };
        readonly ensEthRegistrarController: {
            readonly address: "0xCc5e7dB10E65EED1BBD105359e7268aa660f6734";
        };
        readonly ensNameWrapper: {
            readonly address: "0x114D4603199df73e7D157787f8778E21fCd13066";
        };
        readonly ensPublicResolver: {
            readonly address: "0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750";
        };
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensReverseRegistrar: {
            readonly address: "0x6d9F26FfBcF1c6f0bAe9F2C1f7fBe8eE6B1d8d4d";
        };
        readonly ensUniversalResolver: {
            readonly address: "0x898A1182F3C2BBBF0b16b4DfEf63E9c3e9eB4821";
        };
    };
    readonly 17000: {
        readonly ensBaseRegistrarImplementation: {
            readonly address: "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
        };
        readonly ensBulkRenewal: {
            readonly address: "0xbc4cfB363F948E64Cd73Da6438F64CB37E2e33d1";
        };
        readonly ensDnsRegistrar: {
            readonly address: "0x458d278AEd4cE82BAeC384170f39198b01B8351c";
        };
        readonly ensDnssecImpl: {
            readonly address: "0x283af0b28c62c092c9727f1ee09c02ca627eb7f5";
        };
        readonly ensEthRegistrarController: {
            readonly address: "0x179Be112b24Ad4cFC392eF8924DfA08C20Ad8583";
        };
        readonly ensNameWrapper: {
            readonly address: "0xab50971078225D365994dc1Edcb9b7FD72Bb4862";
        };
        readonly ensPublicResolver: {
            readonly address: "0x9010A27463717360cAD99CEA8bD39b8705CCA238";
        };
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensReverseRegistrar: {
            readonly address: "0x132AC0B116a73add4225029D1951A9A707Ef673f";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xa6ac935d4971e3cd133b950ae053becd16fe7f3b";
        };
    };
    readonly 11155111: {
        readonly ensBaseRegistrarImplementation: {
            readonly address: "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
        };
        readonly ensBulkRenewal: {
            readonly address: "0x4EF77b90762Eddb33C8Eba5B5a19558DaE53D7a1";
        };
        readonly ensDnsRegistrar: {
            readonly address: "0x5a07C75Ae469Bf3ee2657B588e8E6ABAC6741b4f";
        };
        readonly ensDnssecImpl: {
            readonly address: "0xe62E4b6cE018Ad6e916fcC24545e20a33b9d8653";
        };
        readonly ensEthRegistrarController: {
            readonly address: "0xFED6a969AaA60E4961FCD3EBF1A2e8913ac65B72";
        };
        readonly ensNameWrapper: {
            readonly address: "0x0635513f179D50A207757E05759CbD106d7dFcE8";
        };
        readonly ensPublicResolver: {
            readonly address: "0x8FADE66B79cC9f707aB26799354482EB93a5B7dD";
        };
        readonly ensRegistry: {
            readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
        };
        readonly ensReverseRegistrar: {
            readonly address: "0xA0a1AbcDAe1a2a4A2EF8e9113Ff0e02DD81DC0C6";
        };
        readonly ensUniversalResolver: {
            readonly address: "0xc8af999e38273d658be1b921b88a9ddf005769cc";
        };
    };
};
type Subgraphs = {
    ens: {
        url: string;
    };
};
export declare const subgraphs: {
    readonly 1: {
        readonly ens: {
            readonly url: "https://api.thegraph.com/subgraphs/name/ensdomains/ens";
        };
    };
    readonly 5: {
        readonly ens: {
            readonly url: "https://api.thegraph.com/subgraphs/name/ensdomains/ensgoerli";
        };
    };
    readonly 17000: {
        readonly ens: {
            readonly url: "https://api.studio.thegraph.com/query/49574/ensholesky/version/latest";
        };
    };
    readonly 11155111: {
        readonly ens: {
            readonly url: "https://api.studio.thegraph.com/query/49574/enssepolia/version/latest";
        };
    };
    readonly 1946: {
        readonly ens: {
            readonly url: "https://api.studio.thegraph.com/query/87844/soneium_domains/version/latest";
        };
    };
};
type EnsChainContracts = {
    ensBaseRegistrarImplementation: ChainContract;
    ensDnsRegistrar: ChainContract;
    ensEthRegistrarController: ChainContract;
    ensNameWrapper: ChainContract;
    ensPublicResolver: ChainContract;
    ensReverseRegistrar: ChainContract;
    ensBulkRenewal: ChainContract;
    ensDnssecImpl: ChainContract;
};
type BaseChainContracts = {
    multicall3: ChainContract;
    ensUniversalResolver: ChainContract;
    ensRegistry: ChainContract;
};
export type ChainWithEns<TChain extends Chain = Chain> = Omit<TChain, 'contracts'> & {
    contracts: BaseChainContracts & EnsChainContracts;
    subgraphs: Subgraphs;
};
export type ChainWithBaseContracts = Assign<Omit<Chain, 'contracts'>, {
    contracts: BaseChainContracts;
}>;
export type CheckedChainWithEns<TChain extends Chain> = TChain['id'] extends SupportedChain ? TChain['contracts'] extends BaseChainContracts ? TChain & {
    contracts: Prettify<(typeof addresses)[TChain['id']]>;
    subgraphs: (typeof subgraphs)[TChain['id']];
} : never : never;
export type ClientWithEns<TTransport extends Transport = Transport, TChain extends ChainWithEns = ChainWithEns> = Client<TTransport, TChain>;
export type ClientWithAccount<TTransport extends Transport = Transport, TChain extends ChainWithEns = ChainWithEns, TAccount extends Account | undefined = Account | undefined> = Client<TTransport, TChain, TAccount>;
export {};
//# sourceMappingURL=consts.d.ts.map