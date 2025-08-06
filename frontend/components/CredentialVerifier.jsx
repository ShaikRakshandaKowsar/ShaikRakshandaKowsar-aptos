import React, { useState } from 'react';

function CredentialVerifier({ walletAddress, credential }) {
  const [status, setStatus] = useState('');

  const verifyCredential = async () => {
    try {
      const res = await fetch(`https://fullnode.testnet.aptoslabs.com/v1/view`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          function: "0x2b51266f8f82a6b3cb660e3f5808ccdcda433d8bed857eb0514b43b5be2922ef>::identity_wallet::get_credential",
          type_arguments: [],
          arguments: ["0x<your_address>", walletAddress],
        }),
      });

      const result = await res.json();
      const onChainCredential = result[0];

      if (onChainCredential === credential) {
        setStatus("✅ Credential matches!");
      } else {
        setStatus("❌ Credential does not match!");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error verifying credential.");
    }
  };

  return (
    <div className="mt-4">
      <button
        onClick={verifyCredential}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Verify Credential
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}

export default CredentialVerifier;
