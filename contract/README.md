# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# 合约-部署过程

## 1、部署 UniswapV2ERC20.sol 合约

```ts
etch-swap-contract/contracts/core/UniswapV2ERC20.sol

string public constant name = 'Uniswap V2';
string public constant symbol = 'UNI-V2';
```

> UniswapV2Factory.sol

```ts
etch-swap-contract/contracts/core/UniswapV2Factory.sol

// 插入一行代码
// 这段代码用于之后获取INIT_CODE_HASH，并在之后部署router合约以及修改sdk时会用到。
bytes32 public constant INIT_CODE_HASH = keccak256(abi.encodePacked(type(UniswapV2Pair).creationCode));
```

> 执行命令

```bash
 yarn hardhat run ./scripts/deploy_factory.ts --network goerli
```

## 2、部署 WETH 合约，测试环境需要

> 执行命令

```bash
 yarn hardhat run ./scripts/deploy_weth.ts --network goerli
```

## 3、部署 UniswapV2Router02.sol 合约

- 替换内容

> 替换 INIT_CODE_HASH 值, （部署 UniswapV2ERC20.sol 合约时，得到的值）

etch-swap-contract/contracts/periphery/libraries/UniswapV2Library.sol ，替换此文件中的 hex'xxxxx' 值，需要 去掉 “INIT_CODE_HASH” 的 0x 字符。

```ts
uint(
    keccak256(
        abi.encodePacked(
            hex"ff",
            factory,
            keccak256(abi.encodePacked(token0, token1)),
            hex"96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f" // init code hash, 不需要 0x 字符
        )
    )
)
```

- 部署合约

得到 UniswapV2Factory 合约地址、INIT_CODE_HASH 值

> 执行命令

```bash
 yarn hardhat run ./scripts/deploy_router.ts --network goerli
```

# 前端修改过程

## 修改 v2-sdk

修改 src/constants.ts 文件中 FACTORY_ADDRESS 和 INIT_CODE_HASH

```ts
// etch-swap/packages/v2-sdk/src/constants.ts

export const FACTORY_ADDRESS = "0x8F5C12bE42bFFCC0A945Ca5E6057e55FAd9C995f";

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = {
  5: "0x8F5C12bE42bFFCC0A945Ca5E6057e55FAd9C995f",
};

export const INIT_CODE_HASH =
  "0x7c07a8f20906469779473cd0b7105a791e68e58b542e39f2305839a4082de4cf";
```

### 开源合约

yarn hardhat verify --network goerli 0x3838F3EE246a1CE5ABEE00AE5FeD4BfA1E209158
