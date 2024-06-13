import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();

  // 部署 UniswapV2Factory
  const UniswapV2Router02 = await ethers.getContractFactory(
    "UniswapV2Router02"
  );

  // 工厂合约 地址
  const FactoryAddress = "0x8F5C12bE42bFFCC0A945Ca5E6057e55FAd9C995f";
  // Weth合约 地址
  const WethAddress = "0x3838F3EE246a1CE5ABEE00AE5FeD4BfA1E209158";

  const uniswapV2Router02 = await UniswapV2Router02.deploy(
    FactoryAddress,
    WethAddress
  );

  await uniswapV2Router02.waitForDeployment();

  console.log("UniswapV2Router02 deployed address: ", uniswapV2Router02.target);

  /**
   UniswapV2Router02 deployed address:  0xD1B9a97d91DA172aC33D11ad14924d7DC18c8164
   */
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
