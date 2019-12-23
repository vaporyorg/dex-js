/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export interface BatchExchange extends Contract {
  clone(): BatchExchange
  methods: {
    IMPROVEMENT_DENOMINATOR(): TransactionObject<string>

    getSecondsRemainingInBatch(): TransactionObject<string>

    feeDenominator(): TransactionObject<string>

    requestWithdraw(token: string, amount: number | string): TransactionObject<void>

    FEE_FOR_LISTING_TOKEN_IN_OWL(): TransactionObject<string>

    deposit(token: string, amount: number | string): TransactionObject<void>

    AMOUNT_MINIMUM(): TransactionObject<string>

    feeToken(): TransactionObject<string>

    currentPrices(arg0: number | string): TransactionObject<string>

    orders(
      arg0: string,
      arg1: number | string,
    ): TransactionObject<{
      buyToken: string
      sellToken: string
      validFrom: string
      validUntil: string
      priceNumerator: string
      priceDenominator: string
      usedAmount: string
      0: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
    }>

    numTokens(): TransactionObject<string>

    lastCreditBatchId(arg0: string, arg1: string): TransactionObject<string>

    latestSolution(): TransactionObject<{
      batchId: string
      solutionSubmitter: string
      feeReward: string
      objectiveValue: string
      0: string
      1: string
      2: string
      3: string
    }>

    getPendingDeposit(
      user: string,
      token: string,
    ): TransactionObject<{
      0: string
      1: string
    }>

    getPendingWithdraw(
      user: string,
      token: string,
    ): TransactionObject<{
      0: string
      1: string
    }>

    getBalance(user: string, token: string): TransactionObject<string>

    BATCH_TIME(): TransactionObject<string>

    getCurrentBatchId(): TransactionObject<string>

    requestFutureWithdraw(token: string, amount: number | string, batchId: number | string): TransactionObject<void>

    hasValidWithdrawRequest(user: string, token: string): TransactionObject<boolean>

    MAX_TOKENS(): TransactionObject<string>

    withdraw(user: string, token: string): TransactionObject<void>

    MAX_TOUCHED_ORDERS(): TransactionObject<string>

    addToken(token: string): TransactionObject<void>

    placeOrder(
      buyToken: number | string,
      sellToken: number | string,
      validUntil: number | string,
      buyAmount: number | string,
      sellAmount: number | string,
    ): TransactionObject<string>

    placeValidFromOrders(
      buyTokens: (number | string)[],
      sellTokens: (number | string)[],
      validFroms: (number | string)[],
      validUntils: (number | string)[],
      buyAmounts: (number | string)[],
      sellAmounts: (number | string)[],
    ): TransactionObject<string[]>

    cancelOrders(ids: (number | string)[]): TransactionObject<void>

    replaceOrders(
      cancellations: (number | string)[],
      buyTokens: (number | string)[],
      sellTokens: (number | string)[],
      validFroms: (number | string)[],
      validUntils: (number | string)[],
      buyAmounts: (number | string)[],
      sellAmounts: (number | string)[],
    ): TransactionObject<string[]>

    submitSolution(
      batchIndex: number | string,
      claimedObjectiveValue: number | string,
      owners: string[],
      orderIds: (number | string)[],
      buyVolumes: (number | string)[],
      prices: (number | string)[],
      tokenIdsForPrice: (number | string)[],
    ): TransactionObject<string>

    tokenAddressToIdMap(addr: string): TransactionObject<string>

    tokenIdToAddressMap(id: number | string): TransactionObject<string>

    hasToken(addr: string): TransactionObject<boolean>

    getEncodedUserOrders(user: string): TransactionObject<string>

    getEncodedOrders(): TransactionObject<string>

    acceptingSolutions(batchIndex: number | string): TransactionObject<boolean>

    getCurrentObjectiveValue(): TransactionObject<string>
  }
  events: {
    OrderPlacement: ContractEvent<{
      owner: string
      index: string
      buyToken: string
      sellToken: string
      validFrom: string
      validUntil: string
      priceNumerator: string
      priceDenominator: string
      0: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
    }>
    OrderCancelation: ContractEvent<{
      owner: string
      id: string
      0: string
      1: string
    }>
    OrderDeletion: ContractEvent<{
      owner: string
      id: string
      0: string
      1: string
    }>
    Trade: ContractEvent<{
      owner: string
      orderIds: string
      executedSellAmount: string
      executedBuyAmount: string
      0: string
      1: string
      2: string
      3: string
    }>
    TradeReversion: ContractEvent<{
      owner: string
      orderIds: string
      executedSellAmount: string
      executedBuyAmount: string
      0: string
      1: string
      2: string
      3: string
    }>
    Deposit: ContractEvent<{
      user: string
      token: string
      amount: string
      stateIndex: string
      0: string
      1: string
      2: string
      3: string
    }>
    WithdrawRequest: ContractEvent<{
      user: string
      token: string
      amount: string
      stateIndex: string
      0: string
      1: string
      2: string
      3: string
    }>
    Withdraw: ContractEvent<{
      user: string
      token: string
      amount: string
      0: string
      1: string
      2: string
    }>
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
  }
}
