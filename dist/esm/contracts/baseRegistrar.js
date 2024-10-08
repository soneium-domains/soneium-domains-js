import { erc721OwnerOfSnippet, erc721SafeTransferFromSnippet, erc721SafeTransferFromWithDataSnippet, } from './erc721.js';
export const baseRegistrarAvailableSnippet = [
    {
        inputs: [
            {
                name: 'id',
                type: 'uint256',
            },
        ],
        name: 'available',
        outputs: [
            {
                name: 'available',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
export const baseRegistrarNameExpiresSnippet = [
    {
        inputs: [
            {
                name: 'id',
                type: 'uint256',
            },
        ],
        name: 'nameExpires',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
export const baseRegistrarGracePeriodSnippet = [
    {
        inputs: [],
        name: 'GRACE_PERIOD',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
export const baseRegistrarReclaimSnippet = [
    {
        inputs: [
            {
                name: 'id',
                type: 'uint256',
            },
            {
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'reclaim',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
export const baseRegistrarSafeTransferFromSnippet = [
    ...erc721SafeTransferFromSnippet,
];
export const baseRegistrarSafeTransferFromWithDataSnippet = [
    ...erc721SafeTransferFromWithDataSnippet,
];
export const baseRegistrarOwnerOfSnippet = [...erc721OwnerOfSnippet];
//# sourceMappingURL=baseRegistrar.js.map