import { useWallet } from '@aptos-labs/wallet-adapter-react';

const { account } = useWallet();

<CredentialVerifier walletAddress={account?.address} credential=".." />
