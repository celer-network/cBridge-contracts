# cBridge-contracts

Contracts for cBridge, cross-chain liquidity solution powered by Hashed-Timelock Transfers.

The lifecycle of a cross-chain transfer is as simple as follow:
1. Sender sends [transferOut](https://github.com/celer-network/cBridge-contracts/blob/v1.0.0/contracts/CBridge.sol#L57) tx on the source chain.
2. Bridge node sends [transferIn](https://github.com/celer-network/cBridge-contracts/blob/v1.0.0/contracts/CBridge.sol#L83) tx on the destination chain, using the same `hashlock` set by the sender.
3. Sender [confirms](https://github.com/celer-network/cBridge-contracts/blob/v1.0.0/contracts/CBridge.sol#L112) the transfer on the source chain.
4. Bridge node [confirms](https://github.com/celer-network/cBridge-contracts/blob/v1.0.0/contracts/CBridge.sol#L112) the transfer on the destination chain.

If any party is not cooperative during the process, others can use the [confirm](https://github.com/celer-network/cBridge-contracts/blob/v1.0.0/contracts/CBridge.sol#L112) and [refund](https://github.com/celer-network/cBridge-contracts/blob/v1.0.0/contracts/CBridge.sol#L129) methods to finish or cancel the transfer forcefully.

This version of cBridge contract is tailored for users who want to efficiently transfer funds across different blockchains **without any upfront liquidity locking or additional withdrawal operations**. Alternatively, [Celer state channel network](https://www.celer.network/docs/celercore/channel/overview.html) ([L1 contract](https://github.com/celer-network/cChannel-eth), [L2 node](https://github.com/celer-network/goCeler-oss)) supports cross-chain token transfer with higher throughput and lower amortized cost for repeated transfers. The trade-off is that users need to lock their funds in the state channel network upfront and perform additional withdrawal operations to move their funds out of the network.

## Optimism support

This branch is modifed to support [deployment with OVM](https://github.com/ethereum-optimism/optimism-tutorial/tree/main/hardhat#deploying-to-a-real-network).

Run `yarn compile --network optimistic` to compile the contract.

