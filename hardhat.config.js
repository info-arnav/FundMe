const { version } = require("os");

require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      { version: "0.8.0" },
      { version: "0.6.0" },
      { version: "0.8.7" },
    ],
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_PROVIDER,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
  },
  gasReporter: { enabled: true, outputFile: "gas-report.txt", noColors: true },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  etherscan: { apiKey: { sepolia: process.env.ETHERSCAN_API_KEY } },
};
