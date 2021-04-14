import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: linear-gradient(
      -20deg
      , #6c55c1 0%, #4a2d97 20%, transparent 50%, transparent 100%) !important;

    img {
      height: auto;
      max-width: 100%;
    }
  }
  a[href="https://twitter.com/FinanceGoose"] {
    display: none;
  }
  a[href*="https://t.me"] {
    display: none;
  }
  .desktop-icon {
    margin-top: -34px;
    overflow: visible;
  }
  .desktop-icon image {
    height: 300%;
    width: auto;
  }
`

export default GlobalStyle
