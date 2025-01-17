/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IUniswapV1Factory,
  IUniswapV1FactoryInterface,
} from "../../../../periphery/interfaces/V1/IUniswapV1Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getExchange",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IUniswapV1Factory__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV1FactoryInterface {
    return new Interface(_abi) as IUniswapV1FactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IUniswapV1Factory {
    return new Contract(address, _abi, runner) as unknown as IUniswapV1Factory;
  }
}
