import { ethers } from "hardhat";

const NUM_TOKENS = 100;
const TOKEN_ADDRESS = "0xCc6A8C02bD9d0920F08246b9060C25fFc8Dcd148";

async function main() {
  const K50Brimz = await ethers.getContractFactory("K50Brimz");
  const k50 = await K50Brimz.attach(TOKEN_ADDRESS);
  await k50.mintItems(NUM_TOKENS);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
