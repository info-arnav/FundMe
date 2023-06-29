const { deployments, getNamedAccounts } = require("hardhat");

const { deployer } = getNamedAccounts();

const fundMe = await deployments.deploy("FundMe", {
  from: deployer,
  contract: "FundMe",
  args: ["0x694aa1769357215de4fac081bf1f309adc325306"],
  log: true,
});

console.log(fundMe.fund());
