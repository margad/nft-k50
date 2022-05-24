import { ethers } from "hardhat";

async function main() {
  const K50Brimz = await ethers.getContractFactory("K50Brimz");
  const k50 = await K50Brimz.deploy(
    "K50Brimz",
    "K50",
    "https://storage.k50.mn/NFT/metadata/K50Metadata/"
  );

  await k50.deployed();

  console.log("K50Brimz deployed to:", k50.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
