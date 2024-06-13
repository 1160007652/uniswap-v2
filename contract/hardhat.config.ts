import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import dotenv from "dotenv";

dotenv.config();

const soliditySetting = {
  optimizer: { enabled: true, runs: 200 },
  evmVersion: "istanbul",
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: soliditySetting,
      },
      {
        version: "0.5.16",
        settings: soliditySetting,
      },
      {
        version: "0.5.0",
        settings: soliditySetting,
      },
      {
        version: "0.4.18",
        settings: soliditySetting,
      },
      {
        version: "0.4.0",
        settings: soliditySetting,
      },
    ],
  },
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: 5,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
