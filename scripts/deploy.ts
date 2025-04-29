import { ethers } from "hardhat";

async function main() {
  const DummyUSDC = await ethers.getContractFactory("DummyUSDC");
  const dummyUsdc = await DummyUSDC.deploy();
  await dummyUsdc.deployed();
  console.log("DummyUSDC deployed at:", dummyUsdc.address);

  const Invoice = await ethers.getContractFactory("Invoice");
  const invoice = await Invoice.deploy();
  await invoice.deployed();
  console.log("Invoice deployed at:", invoice.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});