// src/components/SecurityLogsViewer.tsx
import React, { useState , useEffect} from 'react';
import { Aptos } from '@aptos-labs/ts-sdk';

const client = new Aptos({ network: 'testnet' });

export default function SecurityLogsViewer() {
  const [address, setAddress] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSecurityLogs = async () => {
    setLoading(true);
    setLogs([]);
    setError('');

    try {
      const events = await client.getEventsByEventHandle(
        address,
        '...::identity_wallet::SecurityEvent', // replace with correct module path
        'events'
      );

      const logMessages = events.map((e: any) => e.data.message);
      setLogs(logMessages);
    } catch (err: any) {
      setError('❌ Could not fetch logs. Please check the address and event handle.');
    }

    setLoading(false);
  };
  useEffect(() => {
      document.documentElement.classList.add("dark");
      return () => {
        document.documentElement.classList.remove("dark");
      };
    }, []);

  return (
  <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
    <div className="max-w-xl w-full p-6 bg-gray-800 shadow rounded-xl text-center">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">🔐 Security Event Logs</h2>

      <input
        type="text"
        placeholder="Enter Admin Address"
        className="w-full p-2 border border-gray-300 rounded mb-4 dark:bg-gray-800 dark:text-white"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        onClick={fetchSecurityLogs}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Fetching...' : 'Fetch Logs'}
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      <ul className="mt-6 space-y-2">
        {logs.map((log, index) => (
          <li key={index} className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
            {log}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}



