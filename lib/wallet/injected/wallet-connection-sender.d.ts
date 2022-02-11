import { RequestSignTransactionsOptions, SignInOptions, WalletConnection } from "../wallet-connection";
import { Near } from '../../near';
import { Account } from '../../account';
export declare class WalletConnectionSender extends WalletConnection {
    private senderWallet;
    constructor(near: Near, appKeyPrefix: string | null, walletName: string);
    requestSignTransactions({ transactions, meta, callbackUrl }: RequestSignTransactionsOptions): Promise<void>;
    requestSignIn({ contractId, methodNames, successUrl, failureUrl }: SignInOptions): Promise<void>;
    isSignedIn(): boolean;
    getAccountId(): string;
    signOut(): boolean;
    account(): Account;
}
