export const ethRegistrarControllerErrors = [
    {
        inputs: [
            {
                name: 'commitment',
                type: 'bytes32',
            },
        ],
        name: 'CommitmentTooNew',
        type: 'error',
    },
    {
        inputs: [
            {
                name: 'commitment',
                type: 'bytes32',
            },
        ],
        name: 'CommitmentTooOld',
        type: 'error',
    },
    {
        inputs: [
            {
                name: 'duration',
                type: 'uint256',
            },
        ],
        name: 'DurationTooShort',
        type: 'error',
    },
    {
        inputs: [],
        name: 'InsufficientValue',
        type: 'error',
    },
    {
        inputs: [],
        name: 'MaxCommitmentAgeTooHigh',
        type: 'error',
    },
    {
        inputs: [],
        name: 'MaxCommitmentAgeTooLow',
        type: 'error',
    },
    {
        inputs: [
            {
                name: 'name',
                type: 'string',
            },
        ],
        name: 'NameNotAvailable',
        type: 'error',
    },
    {
        inputs: [],
        name: 'ResolverRequiredWhenDataSupplied',
        type: 'error',
    },
    {
        inputs: [
            {
                name: 'commitment',
                type: 'bytes32',
            },
        ],
        name: 'UnexpiredCommitmentExists',
        type: 'error',
    },
];
export const ethRegistrarControllerRentPriceSnippet = [
    ...ethRegistrarControllerErrors,
    {
        inputs: [
            {
                name: 'name',
                type: 'string',
            },
            {
                name: 'duration',
                type: 'uint256',
            },
        ],
        name: 'rentPrice',
        outputs: [
            {
                components: [
                    {
                        name: 'base',
                        type: 'uint256',
                    },
                    {
                        name: 'premium',
                        type: 'uint256',
                    },
                ],
                name: 'price',
                type: 'tuple',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
export const ethRegistrarControllerCommitSnippet = [
    ...ethRegistrarControllerErrors,
    {
        inputs: [
            {
                name: 'commitment',
                type: 'bytes32',
            },
        ],
        name: 'commit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
export const ethRegistrarControllerCommitmentsSnippet = [
    ...ethRegistrarControllerErrors,
    {
        inputs: [
            {
                name: '',
                type: 'bytes32',
            },
        ],
        name: 'commitments',
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
export const ethRegistrarControllerRegisterSnippet = [
    ...ethRegistrarControllerErrors,
    {
        inputs: [
            {
                name: 'name',
                type: 'string',
            },
            {
                name: 'owner',
                type: 'address',
            },
            {
                name: 'duration',
                type: 'uint256',
            },
            {
                name: 'secret',
                type: 'bytes32',
            },
            {
                name: 'resolver',
                type: 'address',
            },
            {
                name: 'data',
                type: 'bytes[]',
            },
            {
                name: 'reverseRecord',
                type: 'bool',
            },
            {
                name: 'ownerControlledFuses',
                type: 'uint16',
            },
        ],
        name: 'register',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
];
export const ethRegistrarControllerRenewSnippet = [
    ...ethRegistrarControllerErrors,
    {
        inputs: [
            {
                name: 'name',
                type: 'string',
            },
            {
                name: 'duration',
                type: 'uint256',
            },
        ],
        name: 'renew',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
];
//# sourceMappingURL=ethRegistrarController.js.map