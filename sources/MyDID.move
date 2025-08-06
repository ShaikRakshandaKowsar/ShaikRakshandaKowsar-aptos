module MyDID::identity_wallet {

    use std::string;
    use std::signer;
    use std::table::{Self, Table};
    use aptos_framework::token;

    struct Credential has key {
        data: string::String,
    }

    struct CredentialStore has key {
        creds: Table<address, Credential>,
    }

    public fun init(account: &signer) {
        let store = CredentialStore {
            creds: Table::new<address, Credential>(),
        };
        move_to(account, store);
    }

    public entry fun issue_credential(account: &signer, recipient: address, data: string::String) {
        let issuer = signer::address_of(account);
        let store = borrow_global_mut<CredentialStore>(issuer);
        let credential = Credential { data };
        Table::add(&mut store.creds, recipient, credential);
    }

    public fun get_credential(issuer: address, recipient: address): string::String {
        let store = borrow_global<CredentialStore>(issuer);
        let credential = Table::borrow(&store.creds, recipient);
        credential.data
    }
}
