import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import { getMasterChefAddress } from 'utils/addressHelpers'
import farmsConfig from 'config/constants/farms'
import { QuoteToken } from '../../config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchFarms = async () => {
  const data = await Promise.all(
    farmsConfig.map(async (farmConfig) => {
      const lpAdress = farmConfig.lpAddresses[CHAIN_ID]
      const calls = [
        // Balance of token in the LP contract
        {
          address: farmConfig.tokenAddresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of quote token on LP contract
        {
          address: farmConfig.quoteTokenAdresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: farmConfig.isTokenOnly ? farmConfig.tokenAddresses[CHAIN_ID] : lpAdress,
          name: 'balanceOf',
          params: [getMasterChefAddress()],
        },
        // Total supply of LP tokens
        {
          address: lpAdress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: farmConfig.tokenAddresses[CHAIN_ID],
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: farmConfig.quoteTokenAdresses[CHAIN_ID],
          name: 'decimals',
        },
      ]

      const [
        tokenBalanceLP,
        quoteTokenBlanceLP,
        lpTokenBalanceMC,
        lpTotalSupply,
        tokenDecimals,
        quoteTokenDecimals,
      ] = await multicall(erc20, calls)

      console.log('farm:', farmConfig)
      console.log('CHAIN_ID:', CHAIN_ID)
      console.log('lpTokenBalanceMC:', lpTokenBalanceMC.toString())
      console.log('quoteTokenBlanceLP:', quoteTokenBlanceLP.toString())
      console.log('tokenBalanceLP:', tokenBalanceLP.toString())

      let tokenAmount
      let lpTotalInQuoteToken
      let tokenPriceVsQuote
      if (farmConfig.isTokenOnly) {
        tokenAmount = new BigNumber(lpTokenBalanceMC).div(new BigNumber(10).pow(tokenDecimals))
        console.log('tokenAmount:', tokenAmount.toString())
        if (farmConfig.tokenSymbol === QuoteToken.BUSD && farmConfig.quoteTokenSymbol === QuoteToken.BUSD) {
          tokenPriceVsQuote = new BigNumber(1)
        } else {
          tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(10).pow(quoteTokenDecimals)).div(new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)))
        }
        console.log('tokenPriceVsQuote:', tokenPriceVsQuote.toString())
        lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote)
        console.log('lpTotalInQuoteToken:', lpTotalInQuoteToken.toString())
      } else {
        // Ratio in % a LP tokens that are in staking, vs the total number in circulation
        const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))
        console.log('lpTokenRatio:', lpTokenRatio.toString())
        console.log('quoteTokenBlanceLP:', quoteTokenBlanceLP.toString())

        // Total value in staking in quote token value
        lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(18))
          .times(new BigNumber(2))
          .times(lpTokenRatio)
          // .times(lpTokenRatio).div(100)
        console.log('lpTotalInQuoteToken:', lpTotalInQuoteToken.toString())

        // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
        tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
        const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(quoteTokenDecimals))
          .times(lpTokenRatio)

        if (tokenAmount.comparedTo(0) > 0) {
          tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount)
        } else {
          tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP))
        }
        console.log('lpSymbol', farmConfig.lpSymbol)
        console.log('tokenPriceVsQuote:', tokenPriceVsQuote.toString())
      }

      const [info, totalAllocPoint, fsxuPerBlock, whirlPerBlock] = await multicall(masterchefABI, [
        {
          address: getMasterChefAddress(),
          name: 'poolInfo',
          params: [farmConfig.pid],
        },
        {
          address: getMasterChefAddress(),
          name: 'totalAllocPoint',
        },
        {
          address: getMasterChefAddress(),
          name: 'fsxuPerBlock',
        },
        {
          address: getMasterChefAddress(),
          name: 'whirlPerBlock',
        },
      ])

      const allocPoint = new BigNumber(info.allocPoint._hex)
      const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))

      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        // quoteTokenAmount: quoteTokenAmount,
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
        poolWeight: poolWeight.toNumber(),
        multiplier: `${allocPoint.div(100).toString()}X`,
        depositFeeBP: info.depositFeeBP ? info.depositFeeBP : 0,
        cakePerBlock:
          farmConfig.tokenSymbol === 'FSXU'
            ? new BigNumber(fsxuPerBlock).toNumber()
            : new BigNumber(whirlPerBlock).toNumber(),
      }
    }),
  )
  return data
}

export default fetchFarms
