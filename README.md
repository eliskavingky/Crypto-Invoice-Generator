# Crypto Invoice Generator

Simple fullstack dApp for generating and paying crypto invoices, designed for RWA use case.

## Features
- Create an invoice (payer, payee, token address, amount)
- Generate unique invoice link
- Pay invoice via crypto (Dummy USDC)

## Stack
- Solidity (Hardhat)
- Next.js 14 + TailwindCSS
- ethers.js + MetaMask
- Pharos Devnet

## Commands

### Backend
```bash
cd backend
npm install
npx hardhat compile
npx hardhat run scripts/deploy.ts --network pharos
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Configuration
Create `.env` file:
```
RPC_URL=YOUR_PHAROS_RPC
PRIVATE_KEY=YOUR_PRIVATE_KEY
```