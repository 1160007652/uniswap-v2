import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();

  // 部署 UniswapV2Factory
  // const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");

  // // 手续费地址 (允许设置手续费接收者的地址)
  // const _feeToSetter = owner;
  // const uniswapV2Factory = await UniswapV2Factory.deploy(_feeToSetter);

  // await uniswapV2Factory.waitForDeployment();

  // const INIT_CODE_HASH = await uniswapV2Factory.INIT_CODE_HASH();
  // console.log("UniswapV2Factory deployed address: ", uniswapV2Factory.target);
  // console.log("INIT_CODE_HASH: ", INIT_CODE_HASH);

  /**
    UniswapV2Factory deployed address:  0x8F5C12bE42bFFCC0A945Ca5E6057e55FAd9C995f
    INIT_CODE_HASH:  0x7c07a8f20906469779473cd0b7105a791e68e58b542e39f2305839a4082de4cf
   */
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
