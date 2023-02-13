require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("dotenv").config();

module.exports = {
  solidity: "0.8.13",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.GOERLI_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.MUMBAI_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
