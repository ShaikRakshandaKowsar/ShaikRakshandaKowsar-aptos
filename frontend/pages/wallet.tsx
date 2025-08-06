
import React, { useEffect, useState } from "react";
import { AptosClient } from "aptos";


const NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
const client = new AptosClient(NODE_URL);

export default function Wallet() {
  const [walletAddress, setWalletAddress] = useState("");
  const [credential, setCredential] = useState("");
  const [status, setStatus] = useState("");
  const [isDark, setIsDark] = useState(false);


useEffect(() => {
  document.documentElement.classList.add("dark"); // Force dark mode
  return () => {
    document.documentElement.classList.remove("dark"); // Cleanup on unmount
  };
}, []);


  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const connectWallet = async () => {
    if (window.aptos) {
      try {
        const response = await window.aptos.connect();
        setWalletAddress(response.address);
        setStatus("✅ Wallet connected!");
      } catch (e) {
        console.error(e);
        setStatus("❌ Connection failed.");
      }
    } else {
      alert("Please install Petra Wallet!");
    }
  };

  const issueCredential = async () => {
    if (!walletAddress || !credential) return;

    try {
      const payload = {
        type: "entry_function_payload",
        function:
          "...::identity_wallet::issue_credential",
        type_arguments: [],
        arguments: [walletAddress, credential],
      };

      const txHash = await window.aptos.signAndSubmitTransaction(payload);
      setStatus(`✅ Credential issued! Tx: ${txHash.hash}`);
    } catch (error) {
      console.error(error);
      setStatus("❌ Error issuing credential.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center transition-colors duration-500 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-xl w-[400px] transition-all duration-500 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 flex items-center">
            <span className="text-3xl mr-2">🪪</span> Identity Wallet
          </h2>
          <button
            onClick={toggleDarkMode}
            className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <button
          onClick={connectWallet}
          className="bg-indigo-600 dark:bg-indigo-500 text-white w-full py-2 rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition duration-300 mb-4"
        >
          Connect Wallet
        </button>

        <input
          type="text"
          placeholder="Enter credential data"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          className="border rounded w-full p-2 mb-4 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition duration-300"
        />

        <button
          onClick={issueCredential}
          className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Issue Credential
        </button>

        {status && (
          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 transition-all">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

