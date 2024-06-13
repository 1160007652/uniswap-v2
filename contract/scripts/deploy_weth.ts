import { ethers } from "hardhat";

async function main() {
  // 部署 Weth 合约
  const Weth9 = await ethers.getContractFactory("WETH9");

  const weth9 = await Weth9.deploy();

  await weth9.waitForDeployment();

  console.log("Weth9 deployed address: ", weth9.target);

  /**
    Weth9 deployed address:  0x3838F3EE246a1CE5ABEE00AE5FeD4BfA1E209158

    token deployed address:  0x55402fc6cf2cdf0a4152fdcd6cb15b2645107f62
   */
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
