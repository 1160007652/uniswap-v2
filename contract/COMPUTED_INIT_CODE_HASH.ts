import { keccak256 } from "ethers";
import { bytecode } from "./artifacts/contracts/core/UniswapV2Pair.sol/UniswapV2Pair.json";

const COMPUTED_INIT_CODE_HASH = keccak256(bytecode);

console.log(COMPUTED_INIT_CODE_HASH);
