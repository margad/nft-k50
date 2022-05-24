import { ethers } from "hardhat";

describe("K50Brimz", function () {
  it("Should deploy contract", async function () {
    const K50Brimz = await ethers.getContractFactory("K50Brimz");
    const k50 = await K50Brimz.deploy(
      "K50Brimz",
      "K50",
      "https://storage.k50.mn/NFT/metadata/K50Metadata/"
    );
    await k50.deployed();
  });
});
