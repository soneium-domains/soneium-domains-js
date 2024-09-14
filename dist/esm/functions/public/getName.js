import { BaseError, decodeFunctionResult, encodeFunctionData, getAddress, toHex, } from 'viem';
import { getChainContractAddress } from '../../contracts/getChainContractAddress.js';
import { universalResolverReverseSnippet, universalResolverReverseWithGatewaysSnippet, } from '../../contracts/universalResolver.js';
import { checkSafeUniversalResolverData } from '../../utils/checkSafeUniversalResolverData.js';
import { generateFunction, } from '../../utils/generateFunction.js';
import { packetToBytes } from '../../utils/hexEncodedName.js';
import { normalise } from '../../utils/normalise.js';
const encode = (client, { address, gatewayUrls }) => {
    const reverseNode = `${address.toLowerCase().substring(2)}.addr.reverse`;
    const to = getChainContractAddress({
        client,
        contract: 'ensUniversalResolver',
    });
    const args = [toHex(packetToBytes(reverseNode))];
    return {
        to,
        ...(gatewayUrls?.length
            ? {
                data: encodeFunctionData({
                    abi: universalResolverReverseWithGatewaysSnippet,
                    functionName: 'reverse',
                    args: [...args, gatewayUrls],
                }),
                passthrough: {
                    args: [...args, gatewayUrls],
                    address: to,
                },
            }
            : {
                data: encodeFunctionData({
                    abi: universalResolverReverseSnippet,
                    functionName: 'reverse',
                    args,
                }),
                passthrough: {
                    args,
                    address: to,
                },
            }),
    };
};
const decode = async (_client, data, passthrough, { address, allowMismatch, strict, gatewayUrls }) => {
    const isSafe = checkSafeUniversalResolverData(data, {
        strict,
        abi: gatewayUrls
            ? universalResolverReverseWithGatewaysSnippet
            : universalResolverReverseSnippet,
        args: passthrough.args,
        functionName: 'reverse',
        address: passthrough.address,
    });
    if (!isSafe)
        return null;
    try {
        const [unnormalisedName, forwardResolvedAddress, reverseResolverAddress, resolverAddress,] = decodeFunctionResult({
            abi: universalResolverReverseSnippet,
            functionName: 'reverse',
            data,
        });
        if (!unnormalisedName)
            return null;
        const match = getAddress(forwardResolvedAddress) === getAddress(address);
        if (!match && !allowMismatch)
            return null;
        const normalisedName = normalise(unnormalisedName);
        return {
            name: normalisedName,
            match,
            reverseResolverAddress,
            resolverAddress,
        };
    }
    catch (error) {
        if (strict)
            throw error;
        return null;
    }
};
/**
 * Gets the primary name for an address
 * @param client - {@link ClientWithEns}
 * @param parameters - {@link GetNameParameters}
 * @returns Name data object, or `null` if no primary name is set. {@link GetNameReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { addEnsContracts } from '@ensdomains/ensjs'
 * import { getName } from '@ensdomains/ensjs/public'
 *
 * const client = createPublicClient({
 *   chain: addEnsContracts(mainnet),
 *   transport: http(),
 * })
 * const result = await getName(client, { address: '0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5' })
 * // { name: 'nick.eth', match: true, reverseResolverAddress: '0xa2c122be93b0074270ebee7f6b7292c7deb45047', resolverAddress: '0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41' }
 */
const getName = generateFunction({ encode, decode });
export default getName;
//# sourceMappingURL=getName.js.map