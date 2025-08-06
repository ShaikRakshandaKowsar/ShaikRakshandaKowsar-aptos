// src/data/quizData.ts

const quizData = [
  {
    question: "What is the primary language used to write smart contracts on Aptos?",
    options: ["Solidity", "Move", "Rust", "Cairo"],
    answer: "Move",
  },
  {
    question: "What consensus algorithm does Aptos use?",
    options: ["PoW", "BFT", "PoS", "DPoS"],
    answer: "BFT",
  },
  {
    question: "Which company originally started Aptos blockchain?",
    options: ["Meta", "Google", "Aptos Labs", "Amazon"],
    answer: "Aptos Labs",
  },
  {
    question: "What is a key feature of the Move language?",
    options: [
      "Parallel execution of transactions",
      "Gas-free transactions",
      "Automatic sharding",
      "Immutability of state",
    ],
    answer: "Parallel execution of transactions",
  },
  {
    question: "In Aptos, what is a 'module'?",
    options: [
      "A smart contract package",
      "A validator tool",
      "A wallet key",
      "A consensus node",
    ],
    answer: "A smart contract package",
  },
  {
    question: "Which wallet is commonly used for Aptos?",
    options: ["MetaMask", "Martian", "Phantom", "XDEFI"],
    answer: "Martian",
  },
  {
    question: "What is the Aptos token symbol?",
    options: ["APT", "APTS", "ATOS", "APTOS"],
    answer: "APT",
  },
  {
    question: "What type of transaction model does Aptos use?",
    options: ["UTXO", "Account-based", "Hybrid", "CoinJoin"],
    answer: "Account-based",
  },
  {
    question: "Where are Aptos smart contracts deployed?",
    options: ["EVM", "Substrate", "Move VM", "WASM"],
    answer: "Move VM",
  },
  {
    question: "How are Aptos validators chosen?",
    options: ["Lottery", "Reputation", "Staking", "Voting"],
    answer: "Staking",
  },
  {
    question: "What is the role of Aptos’ Gas Schedule?",
    options: [
      "Defines network throughput",
      "Sets gas fees per operation",
      "Allocates storage",
      "Manages token staking",
    ],
    answer: "Sets gas fees per operation",
  },
  {
    question: "Which Aptos feature enables block-level parallel execution?",
    options: ["Move modules", "Block STM", "DiemBFT", "Parallel VM"],
    answer: "Block STM",
  },
  {
    question: "What is Aptos’ approach to upgradeability?",
    options: [
      "No upgrades allowed",
      "Governance votes",
      "On-chain governance + upgrades",
      "Manual hard forks",
    ],
    answer: "On-chain governance + upgrades",
  },
  {
    question: "Which explorer can you use for Aptos?",
    options: ["Aptos Explorer", "Etherscan", "BscScan", "SolanaScan"],
    answer: "Aptos Explorer",
  },
  {
    question: "Aptos achieves safety through which consensus protocol?",
    options: ["HotStuff BFT", "Raft", "Tendermint", "Aura"],
    answer: "HotStuff BFT",
  },
  {
    question: "What is a resource in Move?",
    options: ["A reusable component", "A type with single ownership", "A validator script", "A token"],
    answer: "A type with single ownership",
  },
  {
    question: "How are Move resources stored?",
    options: ["In memory", "In global state", "In account storage", "On-chain cache"],
    answer: "In account storage",
  },
  {
    question: "Which programming model is used by Move?",
    options: ["Object-oriented", "Functional", "Resource-oriented", "Event-driven"],
    answer: "Resource-oriented",
  },
  {
    question: "Is Move a general-purpose programming language?",
    options: ["Yes", "No", "Only for IoT", "Only for frontend"],
    answer: "No",
  },
  {
    question: "Which chain was Move originally built for?",
    options: ["Ethereum", "Bitcoin", "Libra (Diem)", "Polkadot"],
    answer: "Libra (Diem)",
  },
  {
    question: "What makes Move secure?",
    options: [
      "Typed resource ownership",
      "Gas-free design",
      "Sharded state",
      "Multiple consensus models",
    ],
    answer: "Typed resource ownership",
  },
  {
    question: "Aptos gas fees are measured in?",
    options: ["Gwei", "Lamports", "Octas", "APT"],
    answer: "Octas",
  },
  {
    question: "What does the Move bytecode verifier do?",
    options: ["Signs contracts", "Verifies types and safety", "Uploads state", "Generates random numbers"],
    answer: "Verifies types and safety",
  },
  {
    question: "Which is NOT a Move feature?",
    options: ["Resources", "Linear types", "Smart contract scheduling", "Gas-free execution"],
    answer: "Gas-free execution",
  },
  {
    question: "Which tool helps test Move code?",
    options: ["Move CLI", "Rust Analyzer", "EVM Studio", "Hardhat"],
    answer: "Move CLI",
  }
];

export default quizData;
