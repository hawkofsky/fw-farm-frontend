import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@hawkofsky/whirlflashx-uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.success};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.success};
  }
`

const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.success};
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text color="white">{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal
          href={
            isTokenOnly
              ? `https://exchange.pancakeswap.finance/#/swap?outputCurrency=${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `https://exchange.pancakeswap.finance/#/add/${liquidityUrlPathParts}`
          }
        >
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text color="white">{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text color="white">{totalValueFormated}</Text>
        </Flex>
      )}
      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          <StyledText>
            {TranslateString(356, 'View on BscScan')}
          </StyledText>
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
