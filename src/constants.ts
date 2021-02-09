import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS = {
//   [ChainId.MAINNET]: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
//   [ChainId.ROPSTEN]: '0x5AE8A5F7c80bdb85Bde623dB8107da7Caf72896B',
//   [ChainId.ROPSTEN]: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
//   [ChainId.ROPSTEN]: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
//   [ChainId.ROPSTEN]: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
//   [ChainId.ROPSTEN]: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
// }

// export const FACTORY_ADDRESS = '0x8443bb3cba1bfc2db46c252de3a003fbe6b62493'
export const FACTORY_ADDRESS = '0x14160787745e62af6a3a844D53cf008B8e9F5728'
export const INIT_CODE_HASH = '0xd3452eab56940050104d5aeccc99029fb9977704e164cc7992bbdf5f6d2f014b'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
