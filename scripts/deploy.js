const { ethers } = require("hardhat");

const main = async () => {
  const [deployer] = await ethers.getSigners();

  const Test = await ethers.getContractFactory("Test");
  const test = await Test.deploy();

  console.log("Test address:", test.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
