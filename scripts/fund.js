const { deployments, getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const mocks = await deploy("Convertor", {
    contract: "Convertor",
    from: deployer,
    args: [],
    log: true,
  });
  const fundMe = await deploy("FundMe", {
    contract: "FundMe",
    from: deployer,
    args: [mocks.address],
    log: true,
  });
  console.log(fundMe);
}

main().then(() => process.exit(1));
