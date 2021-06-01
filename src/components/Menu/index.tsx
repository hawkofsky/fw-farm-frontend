import React, { useContext } from 'react'
import { useWallet } from 'use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd, usePriceFsxuBusd, usePriceWhirlBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@hawkofsky/whirlflashx-uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  // const cakePriceUsd = usePriceCakeBusd()
  const fsxuPriceUsd = usePriceFsxuBusd()
  const whirlPriceUsd = usePriceWhirlBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      fsxuPriceUsd={fsxuPriceUsd.toNumber()}
      whirlPriceUsd={whirlPriceUsd.toNumber()}
      links={config}
      // priceLink="https://www.coingecko.com/en/coins/goose-finance"
      fsxuPriceLink="https://www.coingecko.com/en/coins/flashx-ultra"
      whirlPriceLink="https://www.coingecko.com/en/coins/whirl-finance"
      {...props}
    />
  )
}

export default Menu
