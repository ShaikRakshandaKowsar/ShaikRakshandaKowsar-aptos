import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Game from "./pages/Game";
import Navbar from "./components/Navbar";
import SecurityLogsViewer from "./components/SecurityLogsViewer";
import CredentialVerifier from './components/CredentialVerifier'; // Make sure path is correct

function App() {
  const [walletAddress, setWalletAddress] = useState("0x8cce37950f9f410da4d71a750b7db4197342d512703de706a66b9b1b4d0bad43"); // Replace with wallet context if available
  const [credential, setCredential] = useState("Congratulations! You've completed all quiz levels!");

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/game" element={<Game />} />
          <Route path="/logs" element={<SecurityLogsViewer />} />
          <Route
            path="/verify"
            element={
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Identity Verification</h2>
                <CredentialVerifier walletAddress={walletAddress} credential={credential} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;











