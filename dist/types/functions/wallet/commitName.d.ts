import { type Account, type Hash, type Transport } from 'viem';
import type { ChainWithEns, ClientWithAccount } from '../../contracts/consts.js';
import type { Prettify, SimpleTransactionRequest, WriteTransactionParameters } from '../../types.js';
import { type RegistrationParameters } from '../../utils/registerHelpers.js';
export type CommitNameDataParameters = RegistrationParameters;
export type CommitNameDataReturnType = SimpleTransactionRequest;
export type CommitNameParameters<TChain extends ChainWithEns, TAccount extends Account | undefined, TChainOverride extends ChainWithEns | undefined> = Prettify<CommitNameDataParameters & WriteTransactionParameters<TChain, TAccount, TChainOverride>>;
export type CommitNameReturnType = Hash;
export declare const makeFunctionData: <TChain extends ChainWithEns, TAccount extends Account | undefined>(wallet: ClientWithAccount<Transport, TChain, TAccount>, args: CommitNameDataParameters) => CommitNameDataReturnType;
/**
 * Commits a name to be registered
 * @param wallet - {@link ClientWithAccount}
 * @param parameters - {@link CommitNameParameters}
 * @returns Transaction hash. {@link CommitNameReturnType}
 *
 * @example
 * import { createWalletClient, custom } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { addEnsContracts } from '@ensdomains/ensjs'
 * import { commitName } from '@ensdomains/ensjs/wallet'
 * import { randomSecret } from '@ensdomains/ensjs/utils'
 *
 * const wallet = createWalletClient({
 *   chain: addEnsContracts(mainnet),
 *   transport: custom(window.ethereum),
 * })
 * const secret = randomSecret()
 * const hash = await commitName(wallet, {
 *   name: 'example.eth',
 *   owner: '0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7',
 *   duration: 31536000, // 1 year
 *   secret,
 * })
 * // 0x...
 */
declare function commitName<TChain extends ChainWithEns, TAccount extends Account | undefined, TChainOverride extends ChainWithEns | undefined = ChainWithEns>(wallet: ClientWithAccount<Transport, TChain, TAccount>, { name, owner, duration, secret, resolverAddress, records, reverseRecord, fuses, ...txArgs }: CommitNameParameters<TChain, TAccount, TChainOverride>): Promise<CommitNameReturnType>;
declare namespace commitName {
    var makeFunctionData: <TChain extends ChainWithEns, TAccount extends Account | undefined>(wallet: ClientWithAccount<Transport, TChain, TAccount>, args: RegistrationParameters) => SimpleTransactionRequest;
}
export default commitName;
//# sourceMappingURL=commitName.d.ts.map