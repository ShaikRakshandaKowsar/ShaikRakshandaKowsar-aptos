import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md">
      <Link to="/home" className="text-blue-600 font-bold text-xl flex items-center">
        🪪 Identity Wallet
      </Link>
      <div className="space-x-6">
        <Link to="/home" className="text-gray-700 dark:text-gray-300 hover:underline">Home</Link>
        <Link to="/wallet" className="text-gray-700 dark:text-gray-300 hover:underline">Wallet</Link>
        <Link to="/game" className="text-gray-700 dark:text-gray-300 hover:underline">Game</Link>
      </div>
    </nav>
  );
};

export default Navbar;


