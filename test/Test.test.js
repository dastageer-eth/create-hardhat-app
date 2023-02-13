const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test Contract", () => {
  let owner, addr1, addr2, addrs;

  before(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    Contract = await ethers.getContractFactory("Test");
    contract = await Contract.connect(owner).deploy();
  });

  describe("Test Scenarios", async () => {
    it("default value", async () => {
      expect(await contract.number()).to.equal(0);
    });

    it("change value", async () => {
      await contract.connect(owner).setNumber(2);
      expect(await contract.number()).to.equal(2);
    }); 
  });
});
