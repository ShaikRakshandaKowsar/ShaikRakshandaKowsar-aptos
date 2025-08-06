import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">🆔 Decentralized Identity Wallet</h1>
      <p className="text-lg mb-8 max-w-xl">
        Securely issue, manage, and verify credentials on the Aptos blockchain.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/wallet">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            🚀 Get Started
          </button>
        </Link>

        <Link to="/logs">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition">
            🔐 View Security Logs
          </button>
        </Link>
      </div>
    </div>
  );
} 

