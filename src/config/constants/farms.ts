import contracts from './contracts'
import { FarmConfig, QuoteToken, FarmCategory } from './types'

const farms: FarmConfig[] = [
  {
    id: 0,
    masterChef: '0x264dFD3874B8DF4947BEC00a8A5fcEbBE0D258b9',
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'FSXU',
    lpAddresses: {
      97: '',
      56: '0x4fe89aC612ee309FA9deC1f501495EEA44449924', // EGG-BUSD LP
    },
    tokenSymbol: 'FSXU',
    tokenAddresses: {
      97: '',
      56: '0xa94b7a842aADB617a0B08fA744e033C6De2f7595',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    farmCategory: FarmCategory.FSXU,
  },
  {
    id: 1,
    masterChef: '0x264dFD3874B8DF4947BEC00a8A5fcEbBE0D258b9',
    pid: 1,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WHIRL',
    lpAddresses: {
      97: '',
      56: '0x3557af1C6B0b34767f5ad7fC2B16378F3a4f5dD5', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'WHIRL',
    tokenAddresses: {
      97: '',
      56: '0x7f479d78380ad00341fdd7322fe8aef766e29e5a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    farmCategory: FarmCategory.WHIRL,
  },
  {
    id: 2,
    masterChef: '0x264dFD3874B8DF4947BEC00a8A5fcEbBE0D258b9',
    pid: 2,
    risk: 5,
    lpSymbol: 'Old FSXU-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4fe89aC612ee309FA9deC1f501495EEA44449924',
    },
    tokenSymbol: 'FSXU',
    tokenAddresses: {
      97: '',
      56: '0xa94b7a842aADB617a0B08fA744e033C6De2f7595',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    farmCategory: FarmCategory.FSXU,
  },
  {
    id: 3,
    masterChef: '0x264dFD3874B8DF4947BEC00a8A5fcEbBE0D258b9',
    pid: 3,
    risk: 5,
    lpSymbol: 'Old WHIRL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3557af1C6B0b34767f5ad7fC2B16378F3a4f5dD5',
    },
    tokenSymbol: 'WHIRL',
    tokenAddresses: {
      97: '',
      56: '0x7f479d78380ad00341fdd7322fe8aef766e29e5a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    farmCategory: FarmCategory.WHIRL,
  },
  {
    id: 4,
    masterChef: '0x264dFD3874B8DF4947BEC00a8A5fcEbBE0D258b9',
    pid: 4,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    farmCategory: FarmCategory.WHIRL,
  },
  {
    id: 5,
    masterChef: '0x264dFD3874B8DF4947BEC00a8A5fcEbBE0D258b9',
    pid: 5,
    risk: 1,
    lpSymbol: 'FSXU-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x53aaabf8c94ff46a602663ccd9c4d3e14091330a',
    },
    tokenSymbol: 'FSXU',
    tokenAddresses: {
      97: '',
      56: '0xa94b7a842aADB617a0B08fA744e033C6De2f7595',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    farmCategory: FarmCategory.FSXU,
  },
  {
    id: 6,
    masterChef: '0x264dFD3874B8DF4947BEC00a8A5fcEbBE0D258b9',
    pid: 6,
    risk: 2,
    lpSymbol: 'WHIRL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe4d66bf8664ad87d1b1617d9e1cb1b981f238936',
    },
    tokenSymbol: 'WHIRL',
    tokenAddresses: {
      97: '',
      56: '0x7f479d78380ad00341fdd7322fe8aef766e29e5a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    farmCategory: FarmCategory.WHIRL,
  },
  // {
  //   id: 7,
  //   masterChef: '0x9c4de153073ef5c30D152b3c68fd3FC83D73c926',
  //   pid: 1,
  //   risk: 2,
  //   lpSymbol: '101-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcc2A47c3628110b6d33fE93F98f39D5ebB533a81',
  //   },
  //   tokenSymbol: '101',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x169548d912ffda85a5e2ce58035b42c2270618d5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   farmCategory: FarmCategory.DALMATIAN,
  // },
  // {
  //   masterChef: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   pid: 251,
  //   risk: 2,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
  //     56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7f479d78380ad00341fdd7322fe8aef766e29e5a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   risk: 2,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   risk: 1,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 7,
  //   risk: 1,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   risk: 3,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 11,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // // {
  // //   pid: 12,
  // //   risk: 5,
  // //   isTokenOnly: true,
  // //   lpSymbol: 'EGG',
  // //   lpAddresses: {
  // //     97: '',
  // //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  // //   },
  // //   tokenSymbol: 'EGG',
  // //   tokenAddresses: {
  // //     97: '',
  // //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  // //   },
  // //   quoteTokenSymbol: QuoteToken.BUSD,
  // //   quoteTokenAdresses: contracts.busd,
  // // },
  // {
  //   pid: 12,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'FSXU',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  //   },
  //   tokenSymbol: 'FSXU',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa94b7a842aadb617a0b08fa744e033c6de2f7595',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 13,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 14,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 15,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 16,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 17,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 18,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 19,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 20,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 21,
  //   risk: 4,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 22,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BSCX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 23,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'AUTO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'AUTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
