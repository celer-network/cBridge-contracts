import 'hardhat-contract-sizer';
import 'hardhat-deploy';
import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import '@eth-optimism/hardhat-ovm';

import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/types';

dotenv.config();

const DEFAULT_ENDPOINT = 'http://localhost:8545';
const DEFAULT_PRIVATE_KEY = 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
const DEFAULT_ETHERSCAN_API_KEY = '';

const kovanEndpoint = process.env.KOVAN_ENDPOINT || DEFAULT_ENDPOINT;
const kovanPrivateKey = process.env.KOVAN_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const ropstenEndpoint = process.env.ROPSTEN_ENDPOINT || DEFAULT_ENDPOINT;
const ropstenPrivateKey = process.env.ROPSTEN_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const goerliEndpoint = process.env.GOERLI_ENDPOINT || DEFAULT_ENDPOINT;
const goerliPrivateKey = process.env.GOERLI_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const mainnetEndpoint = process.env.MAINNET_ENDPOINT || DEFAULT_ENDPOINT;
const mainnetPrivateKey = process.env.MAINNET_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const bscMainnetEndpoint = process.env.BSC_MAINNET_ENDPOINT || DEFAULT_ENDPOINT;
const bscMainnetPrivateKey = process.env.BSC_MAINNET_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const arbitrumMainnetEndpoint = process.env.ARBITRUM_MAINNET_ENDPOINT || DEFAULT_ENDPOINT;
const arbitrumMainnetPrivateKey = process.env.ARBITRUM_MAINNET_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const polygonMainnetEndpoint = process.env.POLYGON_MAINNET_ENDPOINT || DEFAULT_ENDPOINT;
const polygonMainnetPrivateKey = process.env.POLYGON_MAINNET_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const optimismKovanEndpoint = process.env.OPTIMISM_KOVAN_ENDPOINT || DEFAULT_ENDPOINT;
const optimismKovanPrivateKey = process.env.OPTIMISM_KOVAN_PRIVATE_KEY || DEFAULT_PRIVATE_KEY;

const etherscanApiKey = process.env.ETHERSCAN_API_KEY || DEFAULT_ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    localhost: { timeout: 300000 },
    optimistic: {
      url: 'http://127.0.0.1:8545',
      accounts: { mnemonic: 'test test test test test test test test test test test junk' },
      gasPrice: 15000000,
      ovm: true
    },
    kovan: {
      url: kovanEndpoint,
      accounts: [`0x${kovanPrivateKey}`]
    },
    ropsten: {
      url: ropstenEndpoint,
      accounts: [`0x${ropstenPrivateKey}`]
    },
    goerli: {
      url: goerliEndpoint,
      accounts: [`0x${goerliPrivateKey}`]
    },
    mainnet: {
      url: mainnetEndpoint,
      accounts: [`0x${mainnetPrivateKey}`]
    },
    bscMainnet: {
      url: bscMainnetEndpoint,
      accounts: [`0x${bscMainnetPrivateKey}`]
    },
    arbitrumMainnet: {
      url: arbitrumMainnetEndpoint,
      accounts: [`0x${arbitrumMainnetPrivateKey}`]
    },
    polygonMainnet: {
      url: polygonMainnetEndpoint,
      accounts: [`0x${polygonMainnetPrivateKey}`]
    },
    optimismKovan: {
      url: optimismKovanEndpoint,
      accounts: [`0x${optimismKovanPrivateKey}`],
      ovm: true
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800
      }
    }
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS === 'true' ? true : false,
    noColors: true,
    outputFile: 'reports/gas_usage/summary.txt'
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5'
  },
  etherscan: {
    apiKey: etherscanApiKey
  }
};

export default config;
