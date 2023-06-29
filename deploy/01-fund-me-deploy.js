const { network, ethers } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../hardhat-helper.config");
const test = require("../utils/verify");

module.exports = async ({ deployments, getNamedAccounts }) => {
  const { log, deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  if (networkConfig[chainId]) {
    args = [networkConfig[chainId]["ethUsdPriceConverter"]];
  } else {
    const mock = await deployments.get("MockV3Aggregator");
    args = [mock.address];
  }

  log("Deploying Fund Me........");

  const fundMe = await deploy("FundMe", {
    contract: "FundMe",
    from: deployer,
    log: true,
    args: args,
  });

  if (networkConfig[chainId]) {
    await test(fundMe.address, args);
  }

  let fund = await deployments.get("FundMe", deployer);
  log("Testing by an initial funding.......");

  console.log();
};

module.exports.tags = ["all", "fund"];
