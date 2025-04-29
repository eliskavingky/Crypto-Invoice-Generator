export const INVOICE_CONTRACT_ADDRESS = "YOUR_INVOICE_CONTRACT_ADDRESS";

export const INVOICE_ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "_payer", "type": "address" },
      { "internalType": "address", "name": "_payee", "type": "address" },
      { "internalType": "address", "name": "_token", "type": "address" },
      { "internalType": "uint256", "name": "_amount", "type": "uint256" }
    ],
    "name": "createInvoice",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
    "name": "payInvoice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "invoices",
    "outputs": [
      { "internalType": "address", "name": "payer", "type": "address" },
      { "internalType": "address", "name": "payee", "type": "address" },
      { "internalType": "address", "name": "token", "type": "address" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "internalType": "bool", "name": "paid", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];